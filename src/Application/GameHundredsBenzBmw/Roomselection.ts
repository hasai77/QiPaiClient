import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Rule from "./Rule"
import Event = Laya.Event;
export default class Roomselection extends ui.GameHundredsBenzBmw.RoomselectionUI {
    constructor() {
        super();
    }
   
    onAwake() {
     
        this.back_btn.on(Event.CLICK, this, () => {
            console.log("back")
        })
        this.about_btn.on(Event.CLICK, this, () => {
            Base.publicFun.showAlert(this.rule_view)
        })
        this.primary_btn.on(Event.CLICK, this, () => {
            console.log("初级")
        })
        this.intermediate_btn.on(Event.CLICK, this, () => {
            console.log("中级")
        })
        this.senior_btn.on(Event.CLICK, this, () => {
            console.log("高级")
        })
        this.quick_btn.on(Event.CLICK, this, () => {
            console.log("快速开始")
        })
    }
}