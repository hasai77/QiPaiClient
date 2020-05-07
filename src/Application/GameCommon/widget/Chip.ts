import { ui } from "../../../ui/layaMaxUI";

import Handler = Laya.Handler;
import Tween = Laya.Tween;
export default class Chip extends ui.GameCommonUI.Athletics.ChipUI {
    constructor() {
        super()
    }
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