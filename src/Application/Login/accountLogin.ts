import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event  = Laya.Event;
export default class accountLogin extends ui.Login.accountLoginUI{
    constructor(){
        super()
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            console.log(this.account_input.text)
            console.log(this.password_input.text)
        })
    }
}