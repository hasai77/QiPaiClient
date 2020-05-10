import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event = Laya.Event;
import Chip from "../GameCommon/widget/Chip";
import FlutterText from "../GameCommon/widget/FlutterText";
export default class GoldenFlowerGame extends ui.GameAthleticsGoldenFlower.GameGoldenFlowerGameUI {
    constructor() {
        super()
    }
    onAwake() {
        this.putChip_btn.on(Event.CLICK, this, () => {
            let user = this[`user_${Math.floor(Math.random() * 6)}`]
         
        })
        this.changeCoin_btn.on(Event.CLICK, this, () => {
            let user1 = this[`user_${Math.floor(Math.random() * 6)}`]
            let user2 = this[`user_${Math.floor(Math.random() * 6)}`]
            let rand = Math.floor(Math.random()*100)
            for(let i = 0;i<rand;i++){
              
                
            }
            this.showText(user1, "-"+rand )
            setTimeout(() => {
             
                this.showText(user2,"+"+this.recv_panel.numChildren )
            }, 1000);
        })
        
    }
    public showText(user:Laya.Sprite,num:string):void{
        let text = new FlutterText(num);
        user.addChild(text);
        text.x = user.pivotX;
        text.y = user.pivotY;
        text.startAni()
    }

}