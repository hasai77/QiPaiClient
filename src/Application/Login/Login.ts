import accountLogin from "./accountLogin"
import forgetPass from "./forgetPass"
import rigisteraccount from "./rigisteraccount"
import wachatLogin from "./wachatLogin"
import { ui } from "../../ui/layaMaxUI"
import Base from "../../base/base"
import Event  = Laya.Event;

export default class Login extends ui.Login.LoginUI{
    constructor(){
        super()
    }
    onAwake(){
       
        this.accountLogin_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.showAlert((<Laya.Sprite>this.addChild(new accountLogin())))
        })
        this.QQLogin_btn.on(Event.CLICK,this,()=>{
       
        })
        this.chatLogin_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.showAlert((<Laya.Sprite>this.addChild(new wachatLogin())))
        })
        this.quickLogin_btn.on(Event.CLICK,this,()=>{
       
        })
    }
}