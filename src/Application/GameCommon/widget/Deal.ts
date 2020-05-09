import { ui } from "../../../ui/layaMaxUI";
import Prop from "./Prop"
import UserPropList from "./UserPropList"
import Base from "../../../base/base"
import Handler = Laya.Handler;
import Tween = Laya.Tween;
import PropModel from "../Model/PropModel";
import UserInfoModel from "../Model/UserInfoModel";
export default class Deal extends ui.GameCommonUI.Athletics.DealUI {
    constructor() {
        super()
    }
    private dealIndex: number;
    private propDataArr:any;
    public startDeal(userList: any[], total, userInfoList?: any): void {
        this.visible = true;
        let leng = userList.length;
        this.dealIndex = 0;
        this.propDataArr = [];
        if (userInfoList) {
            for (let i = 0; i <total/ userInfoList.length; i++) {
                for (let index = 0; index < userInfoList.length; index++) {
                    this.propDataArr.push((userInfoList[index].PropList[i] || null))
                }
            }
        }

        Laya.timer.loop(50, this, this.loopFun, [userList, leng, total]);
    }
    private loopFun(userList: any[], leng: number, total: number): void {
        let card = new Prop();
        let user = userList[this.dealIndex % leng]
        let propData = this.propDataArr[this.dealIndex];
        card.prop_Number = propData.PropSort
        this.addChild(card)
        Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_DealCard.mp3");
        this.dealToUser(card, user);

        (++this.dealIndex >= total) && Laya.timer.clear(this, this.loopFun)
    }
    private dealToUser(card: Prop, user: any, speed: number = 300): void {
        let pos: Laya.Point = user.curDealPos
      
        Tween.to(card, { x: pos.x, y: pos.y }, speed, null, Handler.create(this, () => {
            user.recvCard(card.prop_Number)
            card.removeSelf()
        }));
    }
}