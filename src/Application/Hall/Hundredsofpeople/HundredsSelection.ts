import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import Event = Laya.Event;
export default class HundredsSelection extends ui.Hall.Hundredsofpeople.HundredsSelectionUI{
    constructor(index?:number){
        super();
        this.showIndex = index ||0;
    }
    private showIndex:number;
    onAwake(){
        this.hideAllGroup();
        let showView = <Laya.Sprite>this.select_group.getChildAt(this.showIndex);
        showView.visible = true;
        for (let index = 0; index < showView.numChildren; index++) {
            (<Laya.Sprite>showView.getChildAt(index)).on(Event.CLICK,this,()=>{
                console.log(index)
            })
            
        }
        Base.publicFun.selectionAdmission(showView);
    }
    private hideAllGroup(): void {
        for (let index = 0; index < this.select_group.numChildren; index++) {
            (<Laya.Sprite>this.select_group.getChildAt(index)).visible = false;
        }
    }
}