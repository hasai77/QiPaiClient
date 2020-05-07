import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import Event = Laya.Event;

export default class Promotion extends ui.Hall.Promotions.PromotionsUI {
    constructor() {
        super();
    }
    onAwake() {
        this.hideAllGroup();
        this.setGroup(0);
        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
            this.setGroup(index);
        };
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        });
        (<CommonTabButtons>this.tabButtons).checkIndex = 0;
    }
    setGroup(index) {
        this.hideAllGroup();
        (<Laya.Sprite>this.groups.getChildAt(index)).visible = true;
    }
    private hideAllGroup(): void {
        for (let index = 0; index < this.groups.numChildren; index++) {
            (<Laya.Sprite>this.groups.getChildAt(index)).visible = false;
        }
    }
}