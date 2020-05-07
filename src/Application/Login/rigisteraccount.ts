import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event  = Laya.Event;
export default class rigisteraccount extends ui.Login.rigisteraccountUI{
    constructor(){
        super()
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.getCaptcha_btn.on(Event.CLICK,this,()=>{
           console.log("颜真吗")
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            console.log(this.account_input.text)
            console.log(this.password_input.text)
            console.log(this.confirmpass_input.text)
            console.log(this.captcha_input.text)
        })
    }
}