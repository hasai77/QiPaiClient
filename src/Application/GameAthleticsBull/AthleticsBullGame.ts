import { ui } from "../../ui/layaMaxUI";
import Event = Laya.Event;
import Handler = Laya.Handler
import Deal from "../GameCommon/widget/Deal";
import UserPropList from "../GameCommon/widget/UserPropList";
import TransAni from "../GameCommon/widget/TransAni";
import base from "../../base/base";
import BullGameJoin from "./Event/BullGameJoin";
import UserInfoModel from "../GameCommon/Model/UserInfoModel";
import BullGameBet from "./Event/BullGameBet";
import BullGameDeal from "./Event/BullGameDeal";
import BullGameReady from "./Event/BullGameReady";
import BullGameNext from "./Event/BullGameNext";


export default class AthleticsBullGame extends ui.GameAthleticsBull.BullGameUI {
    templet: Laya.Templet;
    constructor() {
        super();
        // this.templet = new Laya.Templet();
        // this.templet.on(Laya.Event.COMPLETE, this, this.parseComplete);
        // this.templet.on(Laya.Event.ERROR, this, this.onError);
        // this.templet.loadAni("Cow/Animation/Cow_Point_1.sk");
        new BullGameBet("AthleticsBet",this)
        new BullGameDeal("AthleticsDeal",this)
        new BullGameReady("AthleticsReady",this)
        new BullGameNext("AthleticsNextInning",this)
        base.netWork.addNetEvent("GameAction.Athletics.Join", (data) => {
            this.setUsers(data.UserList, data.CurrentUser)
        })
        base.netWork.addNetEvent("GameAction.Athletics.Ready", (data) => {
            this.userReady(data.GameUserList)
        })
        base.netWork.addNetEvent("GameAction.Athletics.Deal", (data) => {
            this.dealCard(data.GameUserList)
        })
        base.netWork.addNetEvent("GameAction.Athletics.Bet", (data) => {
            this.setBets(data.GameUserList)
        })
        base.netWork.addNetEvent("GameAction.Athletics.Than", (data) => {
            this.UsersThan(data.UserList)
        })
        
        
    }

    onAwake() {
        let userList: UserPropList[] = [];
        for (let index = 0; index < this.users.numChildren; index++) {
            userList.push(<UserPropList>this.users.getChildAt(index))
        }
        this.back_btn.on(Event.CLICK, this, () => {
            base.sceneManager.changeScene("Hall", new ui.APP_LoadingUI())
        })
        this.initUsers();
        base.sendNet.sendJoinRoom({
            "Action": "AthleticsJoin",
            "Data": {
                "GameID": "20200509100000"
            }
        })
    }
    public setUsers(UserList, CurrentUser) {

        for (let i = 0; i < this.users.numChildren; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            user.visible = false;
        }
        // let minePos = base.publicFun.getMineIndex(UserList, base.userInfo.id)
        for (let i = 0; i < UserList.length; i++) {
            let u_data = UserList[i]
            // let pos = base.publicFun.getPUserPos(minePos, i, UserList.length);
            // let user = <UserPropList>this.users.getChildAt(pos);
            let user = <UserPropList>this.users.getChildAt(i);
            user.visible = true;
            user.setMoney(u_data.UserMoney)
            user.setUserName(u_data.UserName);
        }
    }
    public userReady(UserList) {
        for (let i = 0; i < UserList.length; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            let u_data = UserList[i]
            user.showReady(u_data.IsReady);
        }
    }
    public hideAllReady(): void {
        for (let i = 0; i < this.users.numChildren; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            user.showReady(false);
        }
    }
    public initUsers() {
        for (let i = 0; i < this.users.numChildren; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            user.Init();
        }
    }
    
    public dealCard(GameUserList:UserInfoModel[]): void {
        let userList: UserPropList[] = [];
        for (let index = 0; index < GameUserList.length; index++) {
            userList.push(<UserPropList>this.users.getChildAt(index))
        }
        (<Deal>this.deal_view).startDeal(userList, GameUserList.length * 5,GameUserList)
    }
    public setBets(GameUserList:any):void{
        for (let i = 0; i < GameUserList.length; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            let u_data = GameUserList[i]
            user.showBet(u_data.Bet);
        }
    }
    public UsersThan(GameUserList:any){
     
        for (let i = 0; i < GameUserList.length; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            let u_data = GameUserList[i]
            user.showProp(u_data.PropList,u_data.PropType,()=>{
                base.publicFun.showText(user,u_data.PropType.PropTypeMoney)
            })
        }
        
    }
    // private parseComplete() {
    //      //创建第一个动画
    //      var skeleton0: Laya.Skeleton;
    //      //从动画模板创建动画播放对象
    //      skeleton0 = this.templet.buildArmature(0);
    //      skeleton0.pos(200, 700);
    //      //切换动画皮肤
    //      skeleton0.showSkinByIndex(1);
    //      //播放
    //      skeleton0.play("CowFive-Start", true);
    //      Laya.stage.addChild(skeleton0);
    //      //创建第二个动画
    //      var skeleton1: Laya.Skeleton;
    //      skeleton1 = this.templet.buildArmature(0);
    //      skeleton1.pos(500, 700);
    //      skeleton1.showSkinByIndex(1);
    //      skeleton1.play("CowOne-Start", true);
    //      Laya.stage.addChild(skeleton1);    
    // }
    // private onError(){
    //     console.log("parse error");
    // }
}