import { ui } from "../../../ui/layaMaxUI";
import Base from "../../../base/base"
import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class Mall extends ui.Hall.Mall.MallUI{
    constructor(){
        super();
    }
    onAwake(){

        this.money_text.text = Base.userInfo.money + "";
        this.diamond_text.text= Base.userInfo.diamond + "";
        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
           
        }

        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })

        this.buyitem_lsit.vScrollBarSkin = "";
        this.buyitem_lsit.renderHandler = new Handler(this, this.updateItem);
        this.buyitem_lsit.array = [6,8888,122,122,666,47];
        (<CommonTabButtons>this.tabButtons).checkIndex = 0;
    }
    private updateItem(cell: Laya.Box, index: number): void {
        let butBtn = <Laya.Sprite>cell.getChildByName("buy_btn")
        let priceText = <Laya.Text>butBtn.getChildByName("price_text");
        priceText.text = this.buyitem_lsit.array[index];
        this.showItemImage(cell,(index%3));

        butBtn.on(Event.CLICK,this,()=>{
            console.log(this.buyitem_lsit.array[index])
        })
    }
    private showItemImage(node:Laya.Sprite,target:number){
        for (let index = 0; index < 3; index++) {
           let image = <Laya.Sprite>node.getChildByName(`level_${index}_image`);
           image.visible =  (target == index);
        }
    }
}