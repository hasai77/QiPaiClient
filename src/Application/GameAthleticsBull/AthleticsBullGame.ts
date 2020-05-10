import { ui } from "../../ui/layaMaxUI";
import Event = Laya.Event;
import Deal from "../GameCommon/widget/Deal";
import UserPropList from "../GameCommon/widget/UserPropList";
import base from "../../base/base";
import UserInfoModel from "../GameCommon/Model/UserInfoModel";
import BullGameBet from "./Event/BullGameBet";
import BullGameDeal from "./Event/BullGameDeal";
import BullGameReady from "./Event/BullGameReady";
import BullGameNext from "./Event/BullGameNext";
import BullGameShowProp from "./Event/BullGameShowProp";


export default class AthleticsBullGame extends ui.GameAthleticsBull.BullGameUI {
    templet: Laya.Templet;
    constructor() {
        super();
        new BullGameBet("AthleticsBet", this)
        new BullGameDeal("AthleticsDeal", this)
        new BullGameReady("AthleticsReady", this)
        new BullGameNext("AthleticsNextInning", this)
        new BullGameShowProp("AthleticsShowProp", this)
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
            this.setBets(data.GameUserList, data.Current)
        })
        base.netWork.addNetEvent("GameAction.Athletics.Than", (data) => {
            this.UsersThan(data.UserList)
        })
        base.netWork.addNetEvent("GameAction.Athletics.Settlement", (data) => {
            this.Settlement(data.GameUserList, data.ThanList)
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
                "GameID": "20200510100000"
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

    public dealCard(GameUserList: UserInfoModel[]): void {
        let userList: UserPropList[] = [];
        for (let index = 0; index < GameUserList.length; index++) {
            userList.push(<UserPropList>this.users.getChildAt(index))
        }
        (<Deal>this.deal_view).startDeal(userList, GameUserList.length * 5, GameUserList)
    }
    public setBets(GameUserList: any, Current: any): void {
        let index = base.publicFun.getMineIndex(GameUserList, Current.User.UserID)
        let arr = [0, 2, 4, 5, 10, 20]
        let user = <UserPropList>this.users.getChildAt(index);
        user.showBet(arr[Current.Bet]);
    }
    public hideBets(): void {
        for (let i = 0; i < this.users.numChildren; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            user.hideBet();
        }
    }
    public UsersThan(GameUserList: any) {
        for (let i = 0; i < GameUserList.length; i++) {
            let user = <UserPropList>this.users.getChildAt(i);
            let u_data = GameUserList[i]
            user.showProp(u_data.PropList, u_data.PropType)
        }
    }
    public Settlement(GameUserList, ThanList: any): void {
        for (let i = 0; i < GameUserList.length; i++) {
            if (GameUserList[i].GameMoney < 0) {
                let index = base.publicFun.getMineIndex(GameUserList, GameUserList[i].UserID)
                let user = <UserPropList>this.users.getChildAt(index);
                let num = Math.abs(GameUserList[i].GameMoney)
                this.userChips(user, num)
                base.publicFun.showText(user, "-" + num)
            }

        }
        setTimeout(() => {
            let curPos = 0;
            for (let i = 0; i < GameUserList.length; i++) {
                if (GameUserList[i].GameMoney > 0) {
                    let index = base.publicFun.getMineIndex(GameUserList, GameUserList[i].UserID)
                    let user = <UserPropList>this.users.getChildAt(index);
                    let num = Math.abs(GameUserList[i].GameMoney)
                    this.chipsUser(user, num, curPos);
                    base.publicFun.showText(user, "+" + num)
                    curPos = GameUserList[i].GameMoney
                }
            }
        }, 1000);
    }
    private userChips(user: Laya.Sprite, num): void {
        for (let i = 0; i < num; i++) {
            base.publicFun.userChip(user, this.recv_panel)
        }
    }
    private chipsUser(user: Laya.Sprite, num, start: number): void {
        let end: number = start + num;
        base.publicFun.chipUser(user, this.recv_panel, start, end)
    }
}