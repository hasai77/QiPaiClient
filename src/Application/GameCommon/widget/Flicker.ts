import { ui } from "../../../ui/layaMaxUI";

export default class Flicker extends ui.GameCommonUI.Athletics.FlickerUI{
    constructor(){
        super()
    }
    public startFlicker(){
        Laya.timer.loop(300, this, this.loopFun);
    }
    public endFlicker(){
        Laya.timer.clear(this,this.loopFun);
    }
    private loopFun(){
        this.image_0.active = !this.image_0.active
        this.image_1.active = !this.image_1.active
    }
}