import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import Event = Laya.Event;

export default class DissolutionRoom extends ui.Hall.DissolutionRoom.DissolutionRoomUI{
    constructor(){
        super();
    }
    private userList:any[]=[2,6];
    onAwake(){
        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.cancel_btn.on(Event.CLICK, this, () => {
           
        })
        this.confirm_btn.on(Event.CLICK, this, () => {
           
        })
        for(let i = 0;i<this.users_group.numChildren;i++){
            let user = <Laya.Sprite>this.users_group.getChildAt(i);
            if(this.userList[i])
            {
                user.visible = true;
                let nameText = <Laya.Text>user.getChildByName("name_text");
                let headerImage = <Laya.Text>user.getChildByName("header_image");
                nameText.text = this.userList[i]
            }
            else{
                user.visible = false;
            }
        }
    }
}