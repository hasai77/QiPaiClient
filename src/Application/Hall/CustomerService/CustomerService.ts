import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class CustomerService extends ui.Hall.CustomerService.CustomerServiceUI {
    constructor() {
        super()
    }
    private maxWidch: number = 388;
    onAwake() {

        this.close_btn.on(Event.CLICK, this, () => {
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
       
        this.send_btn.on(Event.CLICK, this, () => {
            if (this.ask_input.text)
                this.chat_list.array = [...this.chat_list.array, {
                    type: 0,
                    text: this.ask_input.text
                }]

            this.ask_input.text = "";
            this.chat_list.scrollTo(this.chat_list.array.length - 1);
        })

        this.chat_list.vScrollBarSkin = "";
        this.chat_list.array = [{
            type: 1,
            text: "您好 请问有什么可以帮助您"
        }];
        this.chat_list.renderHandler = new Handler(this, this.updateItem);

    }
    private updateItem(cell: Laya.Box, index: number): void {
        let data = this.chat_list.array[index];
        let right = <Laya.Sprite>cell.getChildByName("right");
        let left = <Laya.Sprite>cell.getChildByName("left");
        let showWho = (data.type == 0);
        left.visible = !showWho;
        right.visible = showWho;
        let showedNode = showWho ? right : left;
        let header_image = (<Laya.Text>showedNode.getChildByName("header_image"));
        let chatBox_image = (<Laya.Text>showedNode.getChildByName("chatBox_image"));
        let say_text = (<Laya.Text>chatBox_image.getChildByName("say_text"));

        say_text.text = data.text;
        let rect = say_text.getBounds();
  
        if (rect.width >= this.maxWidch) {
            say_text.width = this.maxWidch;
            say_text.wordWrap = true;
            rect = say_text.getBounds();
        }
        else{
            say_text.wordWrap = false;
            say_text.width = 0;
        }
    
        chatBox_image.width = rect.width + 100;
        chatBox_image.height = rect.height + 40;
        cell.height =  chatBox_image.height + 50;
        if (showWho) {
            chatBox_image.x = header_image.x - chatBox_image.width - 15
        }
        say_text.pivotX = rect.width / 2;
        say_text.pivotY = rect.height / 2;
        say_text.x = chatBox_image.width / 2 -15;
        say_text.y = chatBox_image.height / 2;



        (<Laya.Text>showedNode.getChildByName("date_text")).text = new Date().toDateString();
    }
}