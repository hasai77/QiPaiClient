import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";
import base from "../../../base/base";
import Chip from "../../GameCommon/widget/Chip";
namespace Common {
    module AthleticsGame {
        class AthleticsGameThan_Common  extends Application.Game.GameEventModel{
            private ui: ui.GameAthleticsBull.BullGameUI;
            view(GameID: string, UserList:Array<Application.GameCommonModel.UserInfo>) {
                let minePos = base.publicFun.getMineIndex(UserList, base.userInfo.id)
                for (let i = 0; i < UserList.length; i++) {
                    let u_data = UserList[i]
                    let pos = base.publicFun.getPUserPos(minePos, i, UserList.length);
                    let user = <UserPropList>this.ui.users.getChildAt(pos);
                    user.showProp(u_data.PropList)
                }
            }
        }
    }
}
