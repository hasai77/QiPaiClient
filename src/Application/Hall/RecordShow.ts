import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event = Laya.Event; 
export default class RecordShow extends ui.Hall.RecordShowUI{
    constructor(){
        super();
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        for(let i = 0;i<this.players.numChildren;i++)
        {
          let player =   <Laya.Sprite>this.players.getChildAt(i);
          let moneyText = <Laya.Text>player.getChildByName("money_text");
          moneyText.text = "99471"
        }
    }
}