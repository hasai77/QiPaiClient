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

    onAwake() {
        this.CardList_list.renderHandler = new Handler(this, this.updateItem);
        this.initCard()
    }
    private updateItem(cell: Prop, index: number): void {
        cell.visible = this.CardList_list.array[index] > -2;
    }

    public get curDealPos(): Laya.Point {
        let curCard: Prop = this.getCard(this.currentDeal);
        return this.CardList_list.localToGlobal(new Laya.Point(curCard.x, curCard.y));
    }
    public initCard(): void {
      
        this.CardList_list.array = [-2, -2, -2, -2, -2]
        this.currentDeal = 0;
        this.propIndex = 0;
    }
    public propCard(list) {
        //暂时不知道数据格式
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
        // if (card.prop_Number < 0)
            card.prop_leftToRight("GameCommon/Props/20.png");
        this.propIndex++;
        if (this.propIndex > 4) {
            Laya.timer.clear(this, this.animateTimeBased)
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