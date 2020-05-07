import { ui } from "../../../ui/layaMaxUI";

export default class FlutterText extends ui.GameCommonUI.FlutterTextUI{
    constructor(text:string){
        super();
        this.text = text;
    }
    private text:string;

    onAwake(){
        this.number_text.text = this.text ;
    }
    public startAni(){
        Laya.Tween.to(this,{y:this.y-150,alpha:0},1500,null,Laya.Handler.create(this,()=>{
            this.removeSelf()
        }))
    }
}