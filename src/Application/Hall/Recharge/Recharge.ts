import { ui } from "../../../ui/layaMaxUI";
import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import Base from "../../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class Recharge extends ui.Hall.Recharge.RechargeUI {
    constructor() {
        super();
    }
    private userid: number = 655512;
    private userMoney: number = 845242;
    private quickNumbers: number[] = [100, 500, 1000, 5000, 10000];
    onAwake() {

        this.userid_text.text = Base.userInfo.id + "";
        this.userMoney_text.text = Base.userInfo.money + "";

        this.buyed_list.vScrollBarSkin = "";
        this.buyed_list.renderHandler = new Handler(this, this.updateItem);
        this.buyed_list.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];

        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
            let isvip = (index == 0)
            this.vipRecharge_group.visible = isvip;
            this.otherRecharge_group.visible = !isvip;
        }

        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this)
        })

        this.clearInput_btn.on(Event.CLICK, this, () => {
            this.money_input.text = ""
        })
        this.confirm_btn.on(Event.CLICK, this, () => {
            console.log(this.money_input.text)
        })
        for (let i = 0; i < this.quickPush_btns.numChildren; i++) {
            (<Laya.Sprite>this.quickPush_btns.getChildAt(i)).on(Event.CLICK, this, () => {
                this.money_input.text = this.quickNumbers[i] + "";
            })
        }
    }
    private updateItem(cell: Laya.Box, index: number): void {
        (<Laya.Text>cell.getChildByName("name")).text = this.buyed_list.array[index] + "购买";
        (<Laya.Text>cell.getChildByName("money")).text = this.buyed_list.array[index] + "元";
    }
}