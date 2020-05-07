import CommonRadioGroup from "./CommonRadioGroup"
export default class CommonRadio extends Laya.Sprite{
    constructor(){
        super()
    }
    private isCheck:boolean = false;
    private unSelect:Laya.Sprite;
    private selected:Laya.Sprite;
    public set checked(ischeck){
        this.isCheck = ischeck;
        this.unSelect.visible = !ischeck;
        this.selected.visible = ischeck;
    }
    public get checked():boolean{
        return this.isCheck;
    }
    onAwake(){
        this.unSelect = <Laya.Sprite>this.getChildByName("unSelect")
        this.selected = <Laya.Sprite>this.getChildByName("selected")
        this.checked = false;
        this.on(Laya.Event.CLICK,this,()=>{
            if(this.parent){
                (<CommonRadioGroup>this.parent).childChecked(this);
            }
        })
    }
}