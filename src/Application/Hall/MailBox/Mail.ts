import { ui } from "../../../ui/layaMaxUI";
import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import Base from "../../../base/base"
import ActionButton from "../../GameCommon/widget/Button"
import Handler = Laya.Handler;
import Event = Laya.Event;
export default class Mail extends ui.Hall.MailBox.MailUI {
    constructor() {
        super();
    }
    private privateMsg: any[] = [1, 5, 2];
    private systemMsg: any[] = [7, 7, 7];
    private dataArr = [this.privateMsg, this.systemMsg]
    onAwake() {
        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
            this.msg_list.array = this.dataArr[index];
        }
        this.confirm_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this.msgBox)
        })
        this.cancel_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this.msgBox)
        })
        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this, () => { this.removeSelf() })
        })
        this.msg_list.vScrollBarSkin = "";
        this.msg_list.renderHandler = new Handler(this, this.updateItem);
        (<CommonTabButtons>this.tabButtons).checkIndex = 0;

    }
    private updateItem(cell: Laya.Box, index: number): void {
        let notreadImage = <Laya.Sprite>cell.getChildByName("notread_image");
        let readedImage = <Laya.Sprite>cell.getChildByName("readed_image");
        let msgNameText = <Laya.Text>cell.getChildByName("msgName_text");
        let dateText = <Laya.Text>cell.getChildByName("date_text");
        let lookupBtn = <ActionButton>cell.getChildByName("lookup_btn");
        msgNameText.text = this.msg_list.array[index];
        lookupBtn.clickHandler = new Handler(this, (e) => {
            Base.publicFun.showAlert(this.msgBox);
            this.alMsgName_text.text = this.msg_list.array[index];
            this.msgContent_text.text = this.msg_list.array[index];
        })
    }

}