import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"

import Event = Laya.Event;

export default class Dicetable extends ui.GameHundredsDice.DiceUI{
    constructor(){
        super();
    }
    private tweenObj:Laya.Tween;
    private tweenStop:boolean = false;
    private tweenSpeed:number;
    private originX:number;
    onAwake(){

       this.play_btn.on(Event.CLICK,this,()=>{
         
        Base.sceneManager.changeScene("Login",new ui.GameAthleticsTwentyone.TwentyOneloadingUI())
        //   this.dice_ani.index = 0;
        //   this.tweenStop = false;
        //   this.tweenSpeed = 200;
        //   this.originX = this.diceCup_group.x;
        //   this.toLeft();
          
        //   setTimeout(() => {
        //     this.tweenStop = true
              
        //   }, 4000);
        //   for(let i = 0;i<3;i++){
        //       this[`dice_${i}`].loadImage(`Dice/dice/shaizi_${Math.floor((Math.random()*5)) + 1}.png`);
        //   }
       })
    }
    private toLeft(){
       this.tweenObj =  Laya.Tween.to(this.diceCup_group,{x: this.diceCup_group.x-50},this.tweenSpeed,null,Laya.Handler.create(this,()=>{
           if(this.tweenSpeed >50)
                this.tweenSpeed -=20;
             this.tweenStop?this.dice_ani.play(0,false):this.toRight();
            
        }))
    }
    private toRight(){
        this.tweenObj =  Laya.Tween.to(this.diceCup_group,{x:this.diceCup_group.x+50},this.tweenSpeed,null,Laya.Handler.create(this,()=>{
          
            this.tweenStop?this.dice_ani.play(0,false):this.toLeft();
            
        }))
    }
}