import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";

import Chip from "../../GameCommon/widget/Chip";
import base from "../../../base/base";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";

export default class AthleticsGameThan_Common  extends GameEventModel{
    private ui: ui.GameAthleticsBull.BullGameUI;
    view(GameID: string, UserList:Array<UserInfoModel>) {
        let minePos = base.publicFun.getMineIndex(UserList, base.userInfo.id)
        for (let i = 0; i < UserList.length; i++) {
            let u_data = UserList[i]
            let pos = base.publicFun.getPUserPos(minePos, i, UserList.length);
            let user = <UserPropList>this.ui.users.getChildAt(pos);
            user.showProp(u_data.PropList)
        }
    }
}
