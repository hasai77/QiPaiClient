import { ui } from "../../../ui/layaMaxUI";
import Handler = Laya.Handler;
export default class Bet extends ui.GameCommonUI.Athletics.BetUI{
    constructor(){
        super();
    }
    onAwake(){
        this.betBtn_list.selectEnable = true;
        this.betBtn_list.selectHandler = new Handler(this, this.onSelect,null,false);
        this.betBtn_list.renderHandler = new Handler(this, this.updateItem);
    }
    private updateItem(cell: Laya.Button, index: number): void {
        cell.label = this.betBtn_list.array[index]
    }
    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
    }
}