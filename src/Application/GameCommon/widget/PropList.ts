import { ui } from "../../../ui/layaMaxUI";
import Prop from "./Prop"
import Handler = Laya.Handler;
export default class PropList extends ui.GameCommonUI.Athletics.PropListUI {
    constructor() {
        super()
    }
    private PropList_Mark: string;//牌型类型标识
    private PropList_Name: string;//牌型类型名称
    private propIndex: number = 0;
    private currentDeal: number = 0;
    private propData: any[]
    private propType: any
    private endCall: Function
    onAwake() {
        this.CardList_list.renderHandler = new Handler(this, this.updateItem);
        this.initCard()
    }
    private updateItem(cell: Prop, index: number): void {
        cell.visible = this.CardList_list.array[index] > -2;
        if (cell.visible)
            cell.prop_Number = this.CardList_list.array[index]
    }

    public get curDealPos(): Laya.Point {
        let curCard: Prop = this.getCard(this.currentDeal);
        return this.CardList_list.localToGlobal(new Laya.Point(curCard.x, curCard.y));
    }
    public initCard(): void {
        this.CardList_list.array = [-2, -2, -2, -2, -2]
        this.currentDeal = 0;
        this.propIndex = 0;
        this.propData = [];

        this.propType_text.visible = false;
    }
    public propCard(list, type?, callBack?) {
        //暂时不知道数据格式
        this.propData = list;
        this.propType = type;
        this.endCall = callBack
        Laya.timer.loop(300, this, this.animateTimeBased);
    }
    public recvCard(number: number): void {
        let array = [...this.CardList_list.array];
        array[this.currentDeal] = number;
        this.CardList_list.array = [...array]
        this.currentDeal++
    }
    private getCard(index): Prop {
        return <any>this.CardList_list.getCell(index)
    }
    private animateTimeBased(): void {
        let card = this.getCard(this.propIndex);
        while (card.prop_Number > -1 && this.propIndex < 5) {
            this.propIndex++
            card = this.getCard(this.propIndex);
        }


        if (this.propIndex > 4) {
            this.propType_text.visible = true;
            this.propType_text.text = this.propType.PropTypeScore
            Laya.timer.clear(this, this.animateTimeBased)
            this.endCall && this.endCall()
        }
        else {
            card.prop_leftToRight(this.propData[this.propIndex].PropSort);
            this.propIndex++;
        }
    }
    public set propList_Mark(data) {
        this.PropList_Mark = data
    }
    public set propList_Name(data) {
        this.PropList_Name = data
    }
    public get propList_Mark() {
        return this.PropList_Mark
    }
    public get propList_Name() {
        return this.PropList_Name
    }
}