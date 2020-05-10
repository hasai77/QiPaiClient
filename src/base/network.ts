import BaseConfig from "../config/BaseConfig";

export default class network {

    private socket: Laya.Socket;
    private byte: Laya.Byte;
    private types: any;
    private pause:boolean = false;
    private eList: any[] = new Array<any>();
    private static instance: network;
    public static getinstance(): network {
        if (this.instance == null)
            this.instance = new network();
        return this.instance;
    }
    public addNetEvent(type: any, handler: Function): void {
        this.types[type] = handler
    }
    public removeEvent(type: any): void {
        if (this.types[type])
            delete this.types[type]
    }
  

    constructor() {
        this.types = {};
        this.byte = new Laya.Byte();
        //这里我们采用小端
        this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket = new Laya.Socket();
        //这里我们采用小端
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        //建立连接
        this.connect()
        
    }
    public connect(): void {
        this.socket.connectByUrl(BaseConfig.socket);
        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
    }
    public pauseEvent():void{
        this.pause = true;
    }
    public resumeEvent():void{
        this.pause = false;
    }
    private openHandler(event: any = null): void {
        //正确建立连接；
        console.log("链接成功")
        Laya.timer.frameLoop(1,this,()=>{
            if(this.pause||!this.types||this.eList.length == 0)
            return;
            while(this.eList.length){
                let msg = this.eList[0];
                let name = msg.Name||msg.name
                console.log(name)
                if(this.types[name])
                this.types[name](msg.Data);
                else
                console.log("noRigster",name);
                
                this.eList.shift()
            }
        })
    }
    private receiveHandler(msg: any = null): void {
        ///接收到数据触发函数
        let data = JSON.parse(msg)
        console.log(data)
        this.eList.push(data)
    } 
    private closeHandler(e: any = null): void {
        //关闭事件
        console.log("close",e)
    }
    private errorHandler(e: any = null): void {
        //连接出错
        console.log("error",e)
    }

    public sendMsg(type: any, data: any): void {
        data.Name = type
        this.socket.send(JSON.stringify(data));
    }
}