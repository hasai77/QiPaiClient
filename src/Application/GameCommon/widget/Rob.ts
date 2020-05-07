import { ui } from "../../../ui/layaMaxUI";
import Handler = Laya.Handler;
export default class Rob extends ui.GameCommonUI.Athletics.RobUI{
    constructor(){
        super();
    }
    onAwake(){
        this.robBtn_list.selectEnable = true;
        this.robBtn_list.selectHandler = new Handler(this, this.onSelect,null,false);
        this.robBtn_list.renderHandler = new Handler(this, this.updateItem);
    }
    private updateItem(cell: Laya.Button, index: number): void {
        cell.label = this.robBtn_list.array[index]
    }
    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
    }
}