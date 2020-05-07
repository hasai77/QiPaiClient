import { ui } from "../../ui/layaMaxUI";
import CommonSlider from "../GameCommon/widget/CommonSlider"
import Base from "../../base/base"
import Event = Laya.Event;
export default class Banker extends ui.GameHundredsBenzBmw.BankerUI{
    constructor(){
        super()
    }
    private money:number = 355444;
    private curSelectMoney:number;
    private slider:CommonSlider;
    onAwake(){
        this.slider = <CommonSlider>this.money_slider;
        this.money_text.text = this.money+"";

        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
        this.plus_btn.on(Event.CLICK,this,()=>{
            this.slider.percent = this.slider.percent+1;
        })
        this.reduce_btn.on(Event.CLICK,this,()=>{
            this.slider.percent = this.slider.percent-1;
        })
        this.apply_btn.on(Event.CLICK,this,()=>{
            console.log(this.curSelectMoney)
        })
        this.slider.changeHandler = (percent)=>{
            this.curSelectMoney = Math.floor(percent/100 * this.money);
            this.money_text.text = this.curSelectMoney+"";
        }

        this.setMoney(100000)
    }
    private setMoney(money):void{
        this.slider.percent = money / this.money * 100
    }
}