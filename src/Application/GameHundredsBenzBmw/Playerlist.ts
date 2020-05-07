import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class Playerlist extends ui.GameHundredsBenzBmw.PlayerlistUI{
    constructor(){
        super()
    }
    private playerListData:any[];
    public get playerList():any{
        return this.playerListData;
    }
    public set playerList(data){
        this.playerListData = data;
       
        for(let i = 0;i<data.length;i++){
            console.log(i)
            let player =<Laya.Sprite>this.player_list.getChildAt(i);
            player.visible = true;
            (<Laya.Text>player.getChildByName("name_text")).text = data[i];
            (<Laya.Text>player.getChildByName("money_text")).text = data[i];
            (<Laya.Sprite>player.getChildByName("header_image"))
        }
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
       this.playerList = [1, 2, 3, 4, 5];
        
    }

}