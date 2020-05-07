
import Event = Laya.Event;
import Tween = Laya.Tween;
import base from "../../../base/base";
export default class ActionButton extends Laya.Button {
    constructor(res?) {
        super(res)

        this.on(Event.MOUSE_DOWN, this, () => {
            Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, 100)
            Laya.SoundManager.playSound("GameCommon/sound/Game_Common_Button.mp3");
        })
        this.on(Event.MOUSE_UP, this, () => {
            Tween.to(this, { scaleX: 1, scaleY: 1 }, 100)
        })
        this.on(Event.MOUSE_OUT, this, () => {
            Tween.to(this, { scaleX: 1, scaleY: 1 }, 100)
        })
    }


	onComplete() {
		console.log("播放完成");
	}
    onAwake() {
        this.stateNum = 1;
        base.publicFun.setCenter(this);
    }
}