import { ui } from "../../ui/layaMaxUI";
import Event = Laya.Event;
import base from "../../base/base";
export default class InvitationCode extends ui.Hall.InvitationCodeUI{
    constructor(code){
        super()
        this.code = code;
      
    }
    private code:string;
    onAwake(){
        
        this.code_text.value = this.code;
       
        this.copy_btn.on(Event.CLICK,this,()=>{
            console.log(12312)
            base.publicFun.showTaost("复制成功")
            
            base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.cancel_btn.on(Event.CLICK,this,()=>{
            base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
    }
}