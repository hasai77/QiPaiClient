import { ui } from "../../ui/layaMaxUI";
import Event = Laya.Event;
import Base from "../../base/base"
export default class FruitTable extends ui.GameHundredsFruit.FruitTableUI {
    constructor() {
        super();
    }
    private fruitList: Laya.Sprite[] = [];
    private delay: number;
    private curIndex: number = 0;
    private stopIndex: number;
    onAwake() {
        for (let i = 0; i < this.items_group.numChildren; i++) {
            this.fruitList.push(<Laya.Sprite>this.items_group.getChildAt(i));
            Base.publicFun.setCenter(this.fruitList[i])
        }
        this.start_btn.on(Event.CLICK, this, () => {
            this.startAni()
        })
        this.clear_btn.on(Event.CLICK, this, () => {
            this.stopIndex = Math.floor((Math.random() * this.fruitList.length + 1))
            console.log(this.stopIndex)
        })
    }
    private startAni() {
        this.delay = 10;
        this.stopIndex = -1;
        this.changeOnce()
    }
    private changeOnce() {
        Laya.timer.frameOnce(this.delay, this, () => {
            Laya.Tween.to(this.fruitList[this.curIndex], { scaleX: 1, scaleY: 1 }, 200);
            this.curIndex = ++this.curIndex % this.fruitList.length;
            Laya.Tween.to(this.fruitList[this.curIndex], { scaleX: 1.5, scaleY: 1.5 }, 200);
            if (this.stopIndex > -1) {
                if (this.delay < 10) {
                    this.delay += 2;
                } else if (this.delay < 20) {
                    this.delay += 0.8;
                } else if (this.delay < 30) {
                    this.delay += 0.5;
                }
            }
            else {
                if (this.delay > 8) {
                    this.delay -= 0.8;
                } else if (this.delay > 5) {
                    this.delay -= 0.5;
                }
                else if (this.delay > 2) {
                    this.delay -= 0.2;
                }
            }
            if (this.stopIndex != this.curIndex || this.delay < 10) {
                this.changeOnce()
            }


        })
    }

}