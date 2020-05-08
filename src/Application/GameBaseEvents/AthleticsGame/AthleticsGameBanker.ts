import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";
import Chip from "../../GameCommon/widget/Chip";
import base from "../../../base/base";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";

export default class AthleticsGameBanker_Common extends GameEventModel {
  
    view(GameID: string,  Banker:UserInfoModel) {
        // let minePos = base.base.publicFun.getMineIndex(GameUserList, base.userInfo.id)
        // let otherPos =  base.base.publicFun.getMineIndex(GameUserList, Banker.GetUserID())
        // let pos = base.base.publicFun.getPUserPos(minePos,otherPos, GameUserList.length);
        // let user =   <UserPropList>this.ui.users.getChildAt(pos);
        // user.setBanker(true)
    }

}