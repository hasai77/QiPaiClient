import { ui } from "../../../ui/layaMaxUI";
import Handler = Laya.Handler;
import base from "../../../base/base";
export default class HundredBet extends ui.GameCommonUI.HundredGame.BetUI {
    constructor() {
        super()
    }
    private currentBet: Laya.Box;
    private curIndex: number;
    onAwake() {
        this.bets_list.selectEnable = true;
        this.bets_list.selectHandler = new Handler(this, this.onSelect, null, false);
        this.bets_list.renderHandler = new Handler(this, this.updateItem);
        this.bets_list.selectedIndex = 0;
    }
    private updateItem(cell: Laya.Box, index: number): void {
        let btn = <Laya.Button>cell.getChildByName("back_image");
        let text = <Laya.Text>btn.getChildByName("money_text");
        btn.skin = `GameCommon/HandredsBet/${index + 1}.png`

        text.text = this.bets_list.array[index];
    }
    private onSelect(index: number): void {
        let btnBox = this.bets_list.getCell(index)
        this.cursor_image.x = btnBox.x;
        this.currentBet = btnBox;
        this.curIndex = index;
    }
    public setBets(arr):void{
        this.bets_list.array = arr;
    }
    public getCurBet() {
        return this.curIndex;
    }
    public getCurBetPos(): any {
        return base.publicFun.getWorldPos(this.currentBet)
    }
}