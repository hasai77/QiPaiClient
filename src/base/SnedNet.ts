import network from "./network";

export default class  SnedNet {
    private netWork:network = network.getinstance();

    private static  instance:SnedNet;
    public static  getinstance():SnedNet{
        if(this.instance == null)
            this.instance = new SnedNet();
        return this.instance;
    }
    /**
     * 创建房间
     *   GamePlaying: "String    Text:游戏玩法    ",
        GameRoomUser: "GameCommonInterface.UserInfo    Text:房主    ",
        MinUser: "int    Text:最小游戏人数    ",
        MaxUser: "int    Text:最大游戏人数    ",
        BaseScore: "int    Text:分数    "
     * 
     */
    public sendCreatGame(data:any):void{
        this.netWork.sendMsg("GameCommon/CreateGame",data);
    }
    
    public sendAthleticsAddDeal(data:any):void{
        this.netWork.sendMsg("GameCommon.GameAction.Athletics.AddDeal.request",data);
    }
}