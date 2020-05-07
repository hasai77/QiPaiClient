import { ui } from "../../../ui/layaMaxUI";
import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import CustomerService from "../CustomerService/CustomerService"
import Base from "../../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
import UserInfo from "../UserInfo/UserInfo";
export default class Withdrawal extends ui.Hall.Withdrawal.WithdrawalUI {
    constructor() {
        super();
    }
    private userMoney: number = 845242;
    onAwake() {

      
        this.userMoney_text.text = Base.userInfo.money + "";

        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
            if(this.record_group.visible)
            return;
            let iszfb = (index == 0)
            this.widthDraw_group.visible = true;
            this.yhk_group.visible = !iszfb;
            this.zfb_group.visible = iszfb;
        }
        this.record_btn.on(Event.CLICK, this, () => {
            this.widthDraw_group.visible = false;
            this.record_group.visible = true;
        })
        this.recordg_btn.on(Event.CLICK, this, () => {
            this.widthDraw_group.visible = true;
            this.record_group.visible = false;
            (<CommonTabButtons>this.tabButtons).checkIndex = (<CommonTabButtons>this.tabButtons).checkIndex;
        })
        this.contact_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.showAlert(<Laya.Sprite>this.addChild(new CustomerService()));
        })
        this.bind_btn.on(Event.CLICK,this,()=>{
            let userView = <UserInfo>this.addChild(new UserInfo(2));
            userView.visible = false;
            Base.publicFun.showAlert(userView)
        })
        
        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })

        this.clearInput_btn.on(Event.CLICK, this, () => {
            this.money_slider.percent = 0;
        })
        this.confirm_btn.on(Event.CLICK, this, () => {
            console.log(this.money_input.text)
        })
        this.selectAll_btn.on(Event.CLICK, this, () => {
            this.money_slider.percent = 100;
        })
        this.money_input.on(Event.INPUT,this,(e)=>{
            let number = e.text?parseInt(e.text):0
            this.money_slider.percent =  number/ Base.userInfo.money * 100
        })

        this.money_slider.changeHandler = (percent)=>{
            this.money_input.text = Math.floor(Base.userInfo.money / 100 * percent)+""
        }
        this.money_slider.percent = 0;
    }
    private updateItem(cell: Laya.Box, index: number): void {
     
    }
}