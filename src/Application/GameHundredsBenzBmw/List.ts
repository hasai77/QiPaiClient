import Base from "../../base/base"
import Event = Laya.Event;
import { ui } from "../../ui/layaMaxUI";

export default class List extends ui.GameHundredsBenzBmw.ListMenuUI {
    constructor() {
        super();
    }
    onAwake(){
        this.recharge_btn.on(Event.CLICK,this,()=>{

        })
        this.rule_btn.on(Event.CLICK,this,()=>{
            
        })
        this.setting_btn.on(Event.CLICK,this,()=>{
            
        })
        this.back_btn.on(Event.CLICK,this,()=>{
            
        })
    }
}