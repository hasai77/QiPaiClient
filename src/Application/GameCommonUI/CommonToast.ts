import { ui } from "../../ui/layaMaxUI";
export default class CommonTaost extends ui.Common.ToastUI{
    constructor(str){
        super()
        this.str = str;
    }
    private str:string;
    onAwake(){
        this.msg_text.text = this.str;
        
        this.x = Laya.stage.width /2 - this.width /2;
        this.y = 150;
        this.zOrder = 6666666;
        Laya.Tween.to(this,{y:this.y-150,alpha:0},1500,null,Laya.Handler.create(this,()=>{
            this.removeSelf()
        }))
    }
}