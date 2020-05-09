
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";
import AthleticsBullGame from "../AthleticsBullGame";
export default class BullGameBanker extends GameEventModel {
    constructor(GameEventName: string, GameUI:AthleticsBullGame, Game?: Application.GameCommonInterface.GameCommon) {
        super(GameEventName, GameUI, Game)
        this.GameInitialization.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameInningInitialized.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameUserLostConnection.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameUserConnection.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameEventLoadInitialization.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameEventEnter.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameEventLeave.AddEventListener((data: any) => {
            console.log(data)
        });this.RegisterListen()
    }
    view(GameID: string,  Banker:UserInfoModel) {
        // let minePos = base.base.publicFun.getMineIndex(GameUserList, base.userInfo.id)
        // let otherPos =  base.base.publicFun.getMineIndex(GameUserList, Banker.GetUserID())
        // let pos = base.base.publicFun.getPUserPos(minePos,otherPos, GameUserList.length);
        // let user =   <UserPropList>this.ui.users.getChildAt(pos);
        // user.setBanker(true)
    }

}