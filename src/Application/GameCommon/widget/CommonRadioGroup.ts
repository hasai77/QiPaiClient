
import CommonRadio from "./CommonRadio"
export default class CommonRadioGroup extends Laya.Sprite {
    constructor() {
        super()
    }
    private checkNum: number;
    onAwake() {
        this.checkIndex = 0;
    }
    public get checkIndex(): number {
        return this.checkNum;
    }
    public set checkIndex(index: number) {
        this.childChecked_index(index);
    }
    public childChecked_index(index: number) {
        let child = <CommonRadio>this.getChildAt(index)
        this.childChecked(child)
    }
    public childChecked(child: CommonRadio) {
        for (let i = 0; i < this.numChildren; i++) {
            let forChild = <CommonRadio>this.getChildAt(i);
            if (forChild != child)
                forChild.checked = false;
            else {
                forChild.checked = true
                this.checkNum = i;
            }
        }
        
    }
}