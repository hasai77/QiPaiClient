import base from "../../../base/base";
import EventModel from "../../../Lib/EventModel";

export default class GameEventModel implements Application.GameCommonInterface.Event {
    public UI:any;
    public Game: Application.GameCommonInterface.GameCommon;
    //事件名称
    private GameEventName: string;
    //游戏初始化
    public GameInitialization: EventModel = new EventModel();
    //游戏当全局初始化
    public GameInningInitialized: EventModel = new EventModel();
    //用户失去连接
    public GameUserLostConnection: EventModel = new EventModel();
    //用户重新连接或加入游戏
    public GameUserConnection: EventModel = new EventModel();
    //事件初始化
    public GameEventLoadInitialization: EventModel = new EventModel();
    //事件进入
    public GameEventEnter: EventModel = new EventModel();
    //事件离开
    public GameEventLeave: EventModel = new EventModel();

    constructor (GameEventName: string,GameUI:any, Game?: Application.GameCommonInterface.GameCommon) {
        this.Game = Game;
        this.GameEventName = GameEventName;
        this.UI = GameUI;
    }

    public RegisterListen() {
        
        base.netWork.addNetEvent("GameAction."+this.GameEventName + ".Initialization",(data:any)=>{
            this.GameInitialization.Call(this,data)
        })
        base.netWork.addNetEvent("GameAction."+this.GameEventName + ".InningInitialized", (data:any)=>{
            this.GameInningInitialized.Call(this,data)
        })
        base.netWork.addNetEvent("GameAction."+this.GameEventName + ".UserLostConnection", (data:any)=>{
            this.GameUserLostConnection.Call(this,data)
        })
        base.netWork.addNetEvent("GameAction."+this.GameEventName + ".UserConnection", (data:any)=>{
            this.GameEventLoadInitialization.Call(this,data)
        })
        base.netWork.addNetEvent("GameAction."+this.GameEventName + ".Enter",(data:any)=>{
            this.GameEventEnter.Call(this,data)
        })
        base.netWork.addNetEvent("GameAction."+this.GameEventName + ".Over", (data:any)=>{
            this.GameEventLeave.Call(this,data)
        })
    }

    public RemoveListen() {

    }
}