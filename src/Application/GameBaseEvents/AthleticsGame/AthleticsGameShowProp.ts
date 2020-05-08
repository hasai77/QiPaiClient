import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";

import Chip from "../../GameCommon/widget/Chip";
import base from "../../../base/base";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";

export default class AthleticsGameShowProp_Common  extends GameEventModel{
    private ui:ui.GameAthleticsBull.BullGameUI;
    view(GameID:string,CurrentUser:UserInfoModel){
      let UserList = []
        let minePos = base.publicFun.getMineIndex(UserList,base.userInfo.id)
        let otherPos =  base.publicFun.getMineIndex(UserList,CurrentUser.GetUserID())
        let pos =  base.publicFun.getPUserPos(minePos,otherPos,UserList.length);
        let user =   <UserPropList>this.ui.users.getChildAt(pos);
        user.showProp(CurrentUser.PropList);
    }
}