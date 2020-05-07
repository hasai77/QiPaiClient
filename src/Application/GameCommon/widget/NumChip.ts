import { ui } from "../../../ui/layaMaxUI";

import Handler = Laya.Handler;
import Tween = Laya.Tween;
export default class NumChip extends ui.GameCommonUI.HundredGame.NumChipUI {
    constructor(image,num) {
        super()
        this.image = image;
        this.num = num
    }
    onAwake(){

        this.back_image.loadImage(this.image);
        this.money_text.text = this.num;
    }
    private image;
    public num;
  
    public toTargerShow(target,compFunc) {
        Tween.to(this, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
            Tween.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, null, Handler.create(this, () => {
                Tween.to(this, { scaleX: 1, scaleY: 1 }, 300,null,Handler.create(this, () => {
                    compFunc&&compFunc()
                }))
            }));
        }));
    }
    public toTargerHide(target) {
        Tween.to(this, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
           this.removeSelf()
        }));
    }
   
}