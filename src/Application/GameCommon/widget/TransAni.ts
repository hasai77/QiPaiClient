import { ui } from "../../../ui/layaMaxUI";
 import Base from "../../../base/base"
 import Handler = Laya.Handler;
import Tween = Laya.Tween;
export default class TransAni extends ui.GameCommonUI.Athletics.TansAniUI{
    constructor(){
        super()
    }
    onAwake(){
        Base.publicFun.setCenter(this.image);
    }
    private doAction(image?){
        image&&this.setImage(image)
        this.visible = true;
        this.image.x = this.width + this.image.width/2;
        console.log(this.image)
        Tween.to(this.image,{x:this.width/2},300, null, Handler.create(this,()=>{
            Tween.to(this.image,{x:-this.image.width/2},300,null,Handler.create(this,()=>{
                this.visible = false;
            }),1000)
        }));
    }
    public startGame():void{
        this.doAction("GameCommon/BetStatus/Game_Common_HintGamesStart.png");
    }
    public startBet():void{
        this.doAction("GameCommon/BetStatus/Game_Common_HintStartBetting.png");
        Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_StartBet.mp3");
    }
    public stopBet():void{
        this.doAction("GameCommon/BetStatus/Game_Common_HintStopBetting.png");
        Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_StopBet.mp3");
    }
    public setImage(image):void{
        this.image.loadImage(image)
    }
}