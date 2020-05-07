import { ui } from "../../../ui/layaMaxUI";
import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import Base from "../../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class UserInfo extends ui.Hall.UserInfo.UserInfoUI {
    constructor(index?:number) {
        super();
        this.selectIndex = index;
    }
    private selectIndex:number;
    onAwake() {
        

        this.userName_text.text = Base.userInfo.nickName;
        this.userMoney_text.text = Base.userInfo.money + "";


        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
           this.hideAllGroup();
           (<Laya.Sprite>this.groups.getChildAt(index)).visible = true;
        }
        this.setGroupShow(this.selectIndex)
        
        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })

        this.confirmzfb_btn.on(Event.CLICK, this, () => {
            console.log("姓名",this.zfbName_input.text);
            console.log("账号",this.zfbAccount_input.text);
        })
        this.confirmPass_btn.on(Event.CLICK, this, () => {
            console.log("老密码",this.oldPass_input.text);
            console.log("新密码",this.newPass_input.text);
            console.log("确认密码",this.confirmPass_input.text);
        })
    }

    private hideAllGroup(): void {
        for (let index = 0; index < this.groups.numChildren; index++) {
            (<Laya.Sprite>this.groups.getChildAt(index)).visible = false;
        }
    }

    public setGroupShow(index):void{
        if(index>-1)
       this.tabButtons.checkIndex = index;
    }
}