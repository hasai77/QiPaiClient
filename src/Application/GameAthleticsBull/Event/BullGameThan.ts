
import GameEventModel from "../../GameCommon/Model/GameEventModel";

import AthleticsBullGame from "../AthleticsBullGame";
export default class BullGameThan  extends GameEventModel{
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
    // view(GameID: string, UserList:Array<UserInfoModel>) {
    //     let minePos = base.publicFun.getMineIndex(UserList, base.userInfo.id)
    //     for (let i = 0; i < UserList.length; i++) {
    //         let u_data = UserList[i]
    //         let pos = base.publicFun.getPUserPos(minePos, i, UserList.length);
    //         let user = <UserPropList>this.ui.users.getChildAt(pos);
    //         user.showProp(u_data.PropList)
    //     }
    // }
}
