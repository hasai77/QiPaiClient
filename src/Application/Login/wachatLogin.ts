import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event  = Laya.Event;
export default class wachatLogin extends ui.Login.wachatLoginUI{
    constructor(){
        super()
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })

    }
}