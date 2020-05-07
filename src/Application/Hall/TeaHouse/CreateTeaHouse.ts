import { ui } from "../../../ui/layaMaxUI";
import Handler = Laya.Handler;
import HouseItem = ui.Hall.TeaHouse.HouseItemUI;
import Event = Laya.Event;
export default class CreateTeaHouse extends ui.Hall.TeaHouse.CreateTeaHouseUI {
    constructor() {
        super()

        this.military_btn.on(Event.CLICK,this,this.clickMilitary)
        this.hall_btn.on(Event.CLICK,this,this.clickHall)
        this.creat_btn.on(Event.CLICK,this,()=>{
            this.creatHouse.visible = true;
            this.joinHouse.visible = false;
        })
        this.creat_close_btn.on(Event.CLICK,this,()=>{
            this.creatHouse.visible = false;
        })
        this.join_btn.on(Event.CLICK,this,()=>{
            this.creatHouse.visible = false;
            this.joinHouse.visible = true;
        })
        this.join_close_btn.on(Event.CLICK,this,()=>{
            this.joinHouse.visible = false;
        })
        for(let i = 0;i<10;i++){
            this[`num_${i}`].on(Event.CLICK,this,()=>{
                console.log(i);
                if(this.search_text.text.length<6)
                this.search_text.text += i;
            })
        }
        this.backspace.on(Event.CLICK,this,()=>{
            if(this.search_text.text.length>0)
            this.search_text.text =  this.search_text.text.slice(0,this.search_text.text.length-1)
        })
        this.search_btn.on(Event.CLICK,this,()=>{
            console.log(parseInt(this.search_text.text))
        })
        this.set_btn.on(Event.CLICK,this,()=>{
            this.houseSet.visible = true;
        })
        this.house_set_close.on(Event.CLICK,this,()=>{
            this.houseSet.visible = false;
        })
    }
    private houseSelect:number = -1;
    onAwake() {
        this.houseList.selectEnable = true;
        this.houseList.itemRender = HouseItem;
        this.houseList.vScrollBarSkin = "";
        this.houseList.selectHandler = new Handler(this, this.onSelect,null,false);
        this.houseList.renderHandler = new Handler(this, this.updateItem);
        this.houseList.repeatX = 1;
        this.houseList.repeatY = 6;
        setTimeout(()=>{
            this.houseList.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];
        },50)
    }
    private updateItem(cell: HouseItem, index: number): void {
        cell.selected.visible = false;
        cell.unselect.visible = true;
        if (cell.selected && this.houseSelect == index) {
            cell.selected.visible = true;
            cell.unselect.visible = false;
        }
    }
    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
        this.houseSelect = index;
    }

    private clickMilitary():void{
        this.rankList.visible = true;
        this.houseHall.visible = false;
        this.military_btn.loadImage("TeaHouse/TeaHousehall.png");
        this.hall_btn.loadImage("TeaHouse/VictoryRecordFalse.png");
    }
    private clickHall():void{
        this.rankList.visible = false;
        this.houseHall.visible = true;
        this.military_btn.loadImage( "TeaHouse/VictoryRecord.png");
        this.hall_btn.loadImage("TeaHouse/TeaHousehallTrue.png");
    }

    
}