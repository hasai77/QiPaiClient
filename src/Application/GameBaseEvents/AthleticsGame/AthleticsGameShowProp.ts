import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";
import base from "../../../base/base";
import Chip from "../../GameCommon/widget/Chip";
namespace Common {
    module AthleticsGame {
        class AthleticsGameShowProp_Common  extends Application.Game.GameEventModel{
            private ui:ui.GameAthleticsBull.BullGameUI;
            view(GameID:string,CurrentUser:Application.GameCommonModel.UserInfo){
              let UserList = []
                let minePos = base.publicFun.getMineIndex(UserList,base.userInfo.id)
                let otherPos =  base.publicFun.getMineIndex(UserList,CurrentUser.GetUserID())
                let pos =  base.publicFun.getPUserPos(minePos,otherPos,UserList.length);
                let user =   <UserPropList>this.ui.users.getChildAt(pos);
                user.showProp(CurrentUser.PropList);
            }
        }
    }
}
 