
export default class CommonCheck extends Laya.Sprite{
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
        this.changeHandle(ischeck);
    }
    public get checked():boolean{
        return this.isCheck;
    }
    public changeHandle(check):void{

    }
    onAwake(){
        this.unSelect = <Laya.Sprite>this.getChildByName("unSelect")
        this.selected = <Laya.Sprite>this.getChildByName("selected")
        this.checked = false;
        this.on(Laya.Event.CLICK,this,()=>{
            this.checked = !this.isCheck;
        })
    }
}