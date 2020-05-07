import { ui } from "../../../ui/layaMaxUI";
import Event = Laya.Event;

import Handler = Laya.Handler
import Deal from "../../GameCommon/widget/Deal";
import UserPropList from "../../GameCommon/widget/UserPropList";
import TransAni from "../../GameCommon/widget/TransAni";
import base from "../../../base/base";
export default class BullGame extends ui.GameAthleticsBull.BullGameUI{
    templet: Laya.Templet;
    constructor(){
        super();
        // this.templet = new Laya.Templet();
        // this.templet.on(Laya.Event.COMPLETE, this, this.parseComplete);
        // this.templet.on(Laya.Event.ERROR, this, this.onError);
        // this.templet.loadAni("Cow/Animation/Cow_Point_1.sk");
    }
   
    onAwake(){
        let userList:UserPropList[] = [];
        for (let index = 0; index < this.users.numChildren; index++) {
            userList.push(<UserPropList>this.users.getChildAt(index))
        }
       
        this.deal_btn.on(Event.CLICK,this,()=>{
            (<Deal>this.deal_view).startDeal(userList,30)
        })
        this.ani_btn.on(Event.CLICK,this,()=>{
            (<TransAni>this.gameStatus_view).startBet();
        })
        this.back_btn.on(Event.CLICK,this,()=>{
            
            base.sceneManager.changeScene("Hall",new ui.APP_LoadingUI())
        })
        this.than_btn.on(Event.CLICK,this,()=>{
            for (let i = 0; i < userList.length; i++) {
                userList[i].showProp([])
                userList[i].showText("6666")
            }
        })
 
        
    }
    private parseComplete() {
         //创建第一个动画
         var skeleton0: Laya.Skeleton;
         //从动画模板创建动画播放对象
         skeleton0 = this.templet.buildArmature(0);
         skeleton0.pos(200, 700);
         //切换动画皮肤
         skeleton0.showSkinByIndex(1);
         //播放
         skeleton0.play("CowFive-Start", true);
         Laya.stage.addChild(skeleton0);
         //创建第二个动画
         var skeleton1: Laya.Skeleton;
         skeleton1 = this.templet.buildArmature(0);
         skeleton1.pos(500, 700);
         skeleton1.showSkinByIndex(1);
         skeleton1.play("CowOne-Start", true);
         Laya.stage.addChild(skeleton1);    
    }
    private onError(){
        console.log("parse error");
    }
}