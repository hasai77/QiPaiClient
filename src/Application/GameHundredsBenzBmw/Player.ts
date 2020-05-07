import { ui } from "../../ui/layaMaxUI"
import Base from "../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class Player extends ui.GameHundredsBenzBmw.PlayerUI{
    constructor(){
        super();
    }
    private playerListData:any[];

    public get playerList():any{
        return this.playerListData;
    }
    public set playerList(data){
        this.playerListData = data;
        this.player_list.array = data;
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })

        this.player_list.vScrollBarSkin = "";
        this.player_list.renderHandler = new Handler(this, this.updateItem);

        this.playerList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    
    private updateItem(cell: Laya.Box, index: number): void {
       (<Laya.Text>cell.getChildByName("name_text")).text = this.player_list.array[index];
       (<Laya.Text>cell.getChildByName("money_text")).text = this.player_list.array[index];
       (<Laya.Sprite>cell.getChildByName("header_image"))
    }
}