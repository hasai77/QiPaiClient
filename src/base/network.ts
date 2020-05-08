import BaseConfig from "../config/BaseConfig";

export default class network {

    private socket: Laya.Socket;
    private byte: Laya.Byte;
    private types: any;
    private eList: any[] = new Array<any>();
    private static instance: network;
    public static getinstance(): network {
        if (this.instance == null)
            this.instance = new network();
        return this.instance;
    }
    public addNetEvent(type: any, handler: Function): void {
        this.types[type] = handler
        console.log(this.types)
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
    private openHandler(event: any = null): void {
        //正确建立连接；
        console.log("链接成功")
        Laya.timer.frameLoop(1,this,()=>{
            if(!this.types||this.eList.length == 0)
            return;
            while(this.eList.length){
                let msg = this.eList[0];
                this.types[msg.Name](msg.Data);
                this.eList.shift()
            }
        })
    }
    private receiveHandler(msg: any = null): void {
        ///接收到数据触发函数
        console.log(msg)
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
        let sData  = {
            name:type,
            Data:data
        }
        console.log(sData)
        this.socket.send(JSON.stringify(sData));
    }
}