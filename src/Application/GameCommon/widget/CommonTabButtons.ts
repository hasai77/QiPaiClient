
export default class CommonTabButton extends Laya.Sprite {
    constructor() {
        super()
    }

    private checkNum: number;
    onAwake() {
        this.checkIndex = 0;
        for (let i = 0; i < this.numChildren; i++) {
            (<Laya.Sprite>this.getChildAt(i)).on(Laya.Event.CLICK,this,()=>{
                this.checkIndex=i;
            })
        }
    }
    public get checkIndex(): number {
        return this.checkNum;
    }
    public set checkIndex(index: number) {
        for (let i = 0; i < this.numChildren; i++) {
            let child = <Laya.Sprite>this.getChildAt(i);
            let selected = <Laya.Sprite>child.getChildByName("selected");
            let unselect = <Laya.Sprite>child.getChildByName("unselect");
            let selected_text = <Laya.Sprite>child.getChildByName("selected_text");
            let unselect_text = <Laya.Sprite>child.getChildByName("unselect_text");
            let isShow = (index == i)
            selected.visible = isShow;
            selected_text.visible = isShow;
            unselect.visible = !isShow;
            unselect_text.visible = !isShow;
        }
        Laya.SoundManager.playSound("GameCommon/sound/Game_Common_Button.mp3");
        this.changeHandle(index)
    }
    public changeHandle(index:number){
        console.log(index)
    }

}