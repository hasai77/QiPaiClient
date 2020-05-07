import { ui } from "../../ui/layaMaxUI";
import base from "../../base/base";
import ActionButton from "../GameCommon/widget/Button"

export default class CommonGameTypeSelection extends ui.GameCommonUI.CommonGameTypeSelectionUI {
    constructor() {
        super()
    }
    private clickHandle: any;
    private list: any;
    private originX:number;
    onAwake() {
      this.originX = this.x;
    }
    public setImages(list: any, clickHandle: any) {
        this.removeChildren(0,this.numChildren-1)
        let width = this.width / list.length;

        for (let i = 0; i < list.length; i++) {
            let sprite = new Laya.Sprite();
            this.addChild(sprite);
            sprite.height = this.height;
            sprite.width = width;

            sprite.y = 0;
            sprite.x = width * i;

            let button = new ActionButton(list[i]);
            button.visible = false;
            sprite.addChild(button);
            Laya.timer.once(200, this, () => {
                base.publicFun.setCenter(button)
                button.x = sprite.width / 2;
                button.y = sprite.height / 2;
                button.visible = true;
            })

            button.on(Laya.Event.CLICK, this, () => {
                clickHandle(i)
            })
            this.x = Laya.stage.width +200
            Laya.Tween.to(this, { x: this.originX }, 300);
        }
       
    }
    public hideSelf(call?):void{
        Laya.Tween.to(this, { x:  Laya.stage.width +200 }, 300,null,Laya.Handler.create(this,()=>{
            this.visible = false;
            call&&call()
        }));
    }
}