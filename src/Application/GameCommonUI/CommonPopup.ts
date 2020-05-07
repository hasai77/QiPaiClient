import { ui } from "../../ui/layaMaxUI";
import Event = Laya.Event;

export default class CommonPopup extends ui.Common.PopUpUI{
    constructor(str:string,callBack?){
        super()
       
        this.callBack = callBack;
    }
    private callBack;
    public setText(str:string):void{
        this.msg_text.text = str;
    }
}