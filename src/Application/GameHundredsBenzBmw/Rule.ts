import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event = Laya.Event;
export default class Rule extends ui.GameHundredsBenzBmw.RuleUI{
    constructor(){
        super();
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
    }
}