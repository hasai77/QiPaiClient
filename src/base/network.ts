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
    private addNetEvent(type: any, handler: Function): void {
        this.types[type] = handler
    }
    private removeEvent(type: any): void {
        if (this.types[type])
            delete this.types[type]
    }
    public register(type: string, ui: any, caller: Application.Game.GameEventModel): void {
        // this.addNetEvent(type + "init", caller.GameEventLoadInitialization);
        // this.addNetEvent(type + "enter", caller.GameEventEnter);
        // this.addNetEvent(type + "leave", caller.GameEventLeave);
    }
    
    public unregister(type: string):void{
        this.removeEvent(type+"init");
        this.removeEvent(type+"enter");
        this.removeEvent(type+"leave");
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
        this.socket.connectByUrl("ws://localhost:8989");
        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
    }
    private openHandler(event: any = null): void {
        //正确建立连接；
        Laya.timer.frameLoop(1,this,()=>{
         
            if(!this.types||this.eList.length == 0)
            return;
            while(this.eList.length){
                this.types[this.eList[0]];
                this.eList.shift()
            }
        })
    }
    private receiveHandler(msg: any = null): void {
        ///接收到数据触发函数
        console.log(msg)
        this.eList.push(msg)
    }
    private closeHandler(e: any = null): void {
        //关闭事件
    }
    private errorHandler(e: any = null): void {
        //连接出错
    }

    public sendMsg(type: any, data: any): void {

    }
}