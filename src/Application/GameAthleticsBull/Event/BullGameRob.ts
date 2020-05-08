import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";

import Chip from "../../GameCommon/widget/Chip";
import base from "../../../base/base";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";
import AthleticsBullGame from "../AthleticsBullGame";
export default class BullGameRob  extends GameEventModel{
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
    // view(GameID: string, GameUserList: Array<UserInfoModel>, Current) {
    //     for (let i = 0; i < this.ui.users.numChildren; i++) {
    //         let user = <UserPropList>this.ui.users.getChildAt(i);
    //         user.visible = false;
    //     }
    //     let minePos = base.publicFun.getMineIndex(GameUserList, base.userInfo.id)
    //     for (let i = 0; i < GameUserList.length; i++) {
    //         let u_data = GameUserList[i]
    //         let pos = base.publicFun.getPUserPos(minePos, i, GameUserList.length);
    //         let user = <UserPropList>this.ui.users.getChildAt(pos);
    //         if (u_data.GetUserID() == Current.User.id)
    //             user.showBet(Current.Bet);

    //         user.visible = true;
    //         user.setHeader(u_data.GetUserHeader());
    //         user.setUserName(u_data.GetUserName());
    //         user.showReady(u_data.GetUserReady());
    //     }
    //     if (Current.User.id == base.userInfo.id) {
    //         this.ui.rob_view.visible = false;
    //     }

    // }
}
