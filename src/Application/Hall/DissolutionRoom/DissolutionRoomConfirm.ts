import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import Event = Laya.Event;
export default class DissolutionRoomConfirm extends ui.Hall.DissolutionRoom.DissolutionRoomConfirmUI{
    constructor(){
        super();
    }
    onAwake(){
        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.cancel_btn.on(Event.CLICK, this, () => {
           
        })
        this.confirm_btn.on(Event.CLICK, this, () => {
           
        })
    }
}