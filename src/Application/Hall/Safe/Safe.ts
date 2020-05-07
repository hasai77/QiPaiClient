import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class Safe extends ui.Hall.Safe.SafeUI {
    constructor() {
        super();
    }
    private curIndex:number;
    onAwake() {

        this.safe_text.text = Base.userInfo.safeMoney + "";
        this.money_text.text = Base.userInfo.money + "";
        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
            this.curIndex = index
            this.hideAllGroup();
            switch (index) {
                case 0: {
                    this.access_group.visible = true;
                    this.moneys_group.visible = true;
                    this.money_input.text = "";
                    this.money_input.prompt = "请输入存入金额";
                    break;
                }
                case 1: {
                    this.access_group.visible = true;
                    this.moneys_group.visible = true;
                    this.money_input.text = "";
                    this.money_input.prompt = "请输入取出金额";
                    break;
                }
                case 2: {
                    this.access_list.visible = true;
                    break;
                }
                case 3: {
                    this.give_group.visible = true;
                    break;
                }
                case 4: {
                    this.giveDetail_group.visible = true;
                    break;
                }
            }
        }
        (<CommonTabButtons>this.tabButtons).checkIndex = 0;

        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this, () => { this.removeSelf() })
        });


        this.plus_btn.on(Event.CLICK, this, () => {
            this.money_slider.percent = this.money_slider.percent + 1;
        })
        this.reduce_btn.on(Event.CLICK, this, () => {
            this.money_slider.percent = this.money_slider.percent - 1;
        })
        this.clearInput_btn.on(Event.CLICK, this, () => {
            this.money_slider.percent = 0;
        })
        this.accessConfirm_btn.on(Event.CLICK, this, () => {
            console.log(this.money_input.text)
        })

        this.money_input.on(Event.INPUT, this, (e) => {
            let number = e.text ? parseInt(e.text) : 0
            this.money_slider.percent = number / Base.userInfo.money * 100
        })

        this.money_slider.changeHandler = (percent) => {
            this.money_input.text = Math.floor(Base.userInfo.money / 100 * percent) + ""
        }
        this.money_slider.percent = 0;

        this.access_list.vScrollBarSkin = "";
        this.access_list.renderHandler = new Handler(this, this.updateItem);
        this.access_list.array = [6,8888,122,122,666,47];

        this.giveDetail_list.vScrollBarSkin = "";
        this.giveDetail_list.renderHandler = new Handler(this, this.giveDetialUpdateItem);
        this.giveDetail_list.array = [6,3,44,22,666,476,8888,122,122,666,476,3,44,22,666,476,8888,122,122,666,4];


        
        this.recordUser_btn.on(Event.CLICK, this, () => {
            console.log(this.userid_input.text)
        })
        this.giveRecords_btn.on(Event.CLICK, this, () => {
            (<CommonTabButtons>this.tabButtons).checkIndex = 4;
        })
        this.giveCancel_btn.on(Event.CLICK, this, () => {
            this.give_input.text = "";
            this.userid_input.text= "";
        })
        this.giveConfirm_btn.on(Event.CLICK, this, () => {
            console.log(this.give_input.text)
            console.log(this.userid_input.text)
        })
    }
    private updateItem(cell: Laya.Box, index: number): void {
        let accessType_text = <Laya.Text>cell.getChildByName("accessType_text");
        let date_text = <Laya.Text>cell.getChildByName("date_text");
        let amount_text = <Laya.Text>cell.getChildByName("amount_text");
        let access_status = <Laya.Text>cell.getChildByName("access_status");
        accessType_text.text = index%2?"存款":"取款";
        access_status.text = index%2?"成功":"失败";
        date_text.text = this.access_list.array[index];
        amount_text.text = this.access_list.array[index];
    }
    private giveDetialUpdateItem(cell: Laya.Box, index: number): void {
        let giverid_text = <Laya.Text>cell.getChildByName("giverid_text");
        let giveMoney_text = <Laya.Text>cell.getChildByName("giveMoney_text");
        let receiverid_text = <Laya.Text>cell.getChildByName("receiverid_text");
        let giveDate_text = <Laya.Text>cell.getChildByName("giveDate_text");
        giverid_text.text = this.giveDetail_list.array[index];
        giveMoney_text.text = this.giveDetail_list.array[index];
        receiverid_text.text = this.giveDetail_list.array[index];
        giveDate_text.text = this.giveDetail_list.array[index];
    }
    private hideAllGroup(): void {
        for (let index = 0; index < this.groups.numChildren; index++) {
            (<Laya.Sprite>this.groups.getChildAt(index)).visible = false;
        }
    }
}