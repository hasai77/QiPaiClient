import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";
import base from "../../../base/base";
import Chip from "../../GameCommon/widget/Chip";

namespace Common {
    module AthleticsGame {
        class AthleticsGameBanker_Common extends Application.Game.GameEventModel {
            private ui: ui.GameAthleticsBull.BullGameUI;
            view(GameID: string,  Banker:Application.GameCommonModel.UserInfo) {
                // let minePos = base.publicFun.getMineIndex(GameUserList, base.userInfo.id)
                // let otherPos =  base.publicFun.getMineIndex(GameUserList, Banker.GetUserID())
                // let pos = base.publicFun.getPUserPos(minePos,otherPos, GameUserList.length);
                // let user =   <UserPropList>this.ui.users.getChildAt(pos);
                // user.setBanker(true)
            }

        }
    }
}
