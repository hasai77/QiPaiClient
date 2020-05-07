import { ui } from "../../ui/layaMaxUI";
import base from "../../base/base";
import NumChip from "../GameCommon/widget/NumChip";
import HundredBet from "../GameCommon/widget/HundredBet";

import Event = Laya.Event;
import Deal from "../GameCommon/widget/Deal";
import PropList from "../GameCommon/widget/PropList";
import User from "../GameCommon/widget/User";
import TransAni from "../GameCommon/widget/TransAni";
export default class HundredsBull extends ui.GameHundredsBull.HundredsBullUI{
    constructor(){
        super();
        
    }
    private BetArr = [10,20,50,100,200];
    onAwake(){
        let userList:PropList[] = [];
        for (let index = 0; index < this.propList_group.numChildren; index++) {
            userList.push(<PropList>this.propList_group.getChildAt(index))
        }
        this.back_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showConfirm("确认退出吗？",()=>{
                base.sceneManager.changeScene("Hall",new ui.APP_LoadingUI())
            })
        })
        this.soundOff_btn.on(Event.CLICK,this,()=>{
            this.soundOff_btn.visible = false;
            this.soundOn_btn.visible = true;
        })
        this.soundOn_btn.on(Event.CLICK,this,()=>{
            this.soundOff_btn.visible = true;
            this.soundOn_btn.visible = false;
            for (let i = 0; i < userList.length; i++) {
                userList[i].propCard([])
                userList[i].propCard("6666")
            }
           
        })
        this.users_btn.on(Event.CLICK,this,()=>{
            (<Deal>this.deal_view).startDeal(userList,25)
        })
      

        for(let i = 0;i<4;i++)
        {
           let recv = this[`recvPanel_${i}`];
           let recv_money = this[`recvText_${i}`];
           recv_money.text = "0";
           recv.on(Event.MOUSE_MOVE,this,()=>{
            let chip = this.userChip((<HundredBet>this.bet_view).getCurBetPos(),recv)
            recv_money.text = parseInt(recv_money.text) + chip.num;
           })
           
           this.bet_view.setBets([10,20,50,100,200])
        }
    }
    public userChip(userPos:any,recv):NumChip{
        let index = (<HundredBet>this.bet_view).getCurBet();
        
        let chip = new NumChip(`GameCommon/HandredsBet/${index+1}.png`,this.BetArr[index]);
        chip.x = userPos.x -recv.x;
        chip.y = userPos.y-recv.y;
        recv.addChild(chip)
        chip.toTargerShow(base.publicFun.getRecvPos(recv), null) ;
        return chip;
    }
}