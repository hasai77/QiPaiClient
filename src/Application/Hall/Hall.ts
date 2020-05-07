import { ui } from "../../ui/layaMaxUI";

import Event = Laya.Event;
import Handler = Laya.Handler;
import Mall from "./Mall/Mall";
import base from "../../base/base";
import CustomerService from "./CustomerService/CustomerService";
import Mail from "./MailBox/Mail";
import Set from "./Set/Set";
import InvitationCode from "./InvitationCode";
import VictoryShow from "./VictoryShow";
import UserInfo from "./UserInfo/UserInfo";
import Recharge from "./Recharge/Recharge";
import CommonCreatRoom from "../GameCommonUI/CommonCreatRoom";
import ImageList from "../../config/gameTypeImages"
import ActionButton from "../GameCommon/widget/Button";
export default class Hall extends ui.Hall.HallUI{
    
    constructor(){
        super()
    }
    onAwake():void{
        this.icon_list.hScrollBarSkin = "";
        this.icon_list.selectEnable = true;
        this.icon_list.renderHandler = new Handler(this, this.updateItem);
        this.icon_list.selectHandler = new Handler(this, this.selectItem);
        this.icon_list.array = [33,3,3,2,3,3,3,31,2,3,3,3,3,3,3,]
        this.market_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new Mall()));
        });
        this.server_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new CustomerService()));
        });
        this.mgs_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new Mail()));
        });
        this.combat_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new VictoryShow()));
        });
        this.setting_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new Set()));
        });
        this.invitation_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new InvitationCode(91546323)));
        });
        this.user_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new UserInfo()));
        });
        this.addGold_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new Recharge()));
        });
        this.addZuanShi_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new Recharge()));
        });
        this.creatRoom_btn.on(Event.CLICK,this,()=>{
            base.publicFun.showAlert(<Laya.Sprite>this.addChild(new CommonCreatRoom()));
        });

        this.typeHide_btn.on(Event.CLICK,this,()=>{
            this.GameTypeSelection_view.hideSelf(()=>{
                this.typeHide_btn.visible = false;
                Laya.Tween.to(this.icon_list,{x:0},200)
            })
        });
    }
    private updateItem(cell: Laya.Box, index: number):void{
        let btn = <ActionButton>cell.getChildByName("icon_image");
        btn.clickHandler = Laya.Handler.create(this,()=>{
            Laya.Tween.to(this.icon_list,{x:-2000},200,null,Laya.Handler.create(this,()=>{
                this.GameTypeSelection_view.visible = true;
                this.GameTypeSelection_view.setImages(ImageList.ThreeDuke,(e)=>{
                    console.log(e)
                })
                this.typeHide_btn.visible = true;
            }))
        })
    }
    private selectItem(index:number):void{
       
    }
   
}