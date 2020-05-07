
import PropList from "./PropList";
import User from "./User";
import Flicker from "./Flicker";
import FlutterText from "./FlutterText";


export default class UserPropList extends Laya.Sprite {
    constructor() {
        super()
    }
    private prop_list:PropList;
    private userInfo:User;
    private banker:Laya.Sprite;
    private flicker:Flicker;
    private betNum_image:Laya.Sprite;
    onAwake(){
      this.prop_list = <PropList>this.getChildByName("prop_list");
      this.userInfo = <User>this.getChildByName("userInfo");
      this.banker = <Laya.Sprite>this.getChildByName("Banker");
      this.flicker = <Flicker>this.getChildByName("Flicker");
      this.betNum_image = <Laya.Sprite>this.getChildByName("betNum_image");
      
    }
    public showText(num:string):void{
        let text = new FlutterText(num);
        this.userInfo.addChild(text);
        text.x =this.userInfo.pivotX;
        text.y = this.userInfo.pivotY;
        text.startAni()
    }
    public get curDealPos():any{
        return this.prop_list.curDealPos;
    }
    public Init():void{

        this.prop_list.initCard();
        this.hideBet();
    }
    public recvCard(number):void{
        //发牌接收
        this.prop_list.recvCard(number)
    }
    public showProp(list,how?):void{
        this.prop_list.propCard(list)
    }
    public setOnLine(ison):void{
        this.userInfo.onLine = ison;
    }
    public setHeader(image):void{
        this.userInfo.avatarFrame = image
    }
    public setUserName(name):void{
        this.userInfo.nickName = name
    }
    public showReady(show):void{
        this.userInfo.ready = show;
    }
    public setBanker(isbanker):void{
        this.banker.visible = isbanker;
    }
    public showBet(num:number):void{
        this.betNum_image.visible = true;
        this.betNum_image.loadImage(`GameCommon/BetNumber/Game_Common_Bet_${num}.png`)
    }
    public hideBet():void{
        this.betNum_image.visible = false;
    }

}