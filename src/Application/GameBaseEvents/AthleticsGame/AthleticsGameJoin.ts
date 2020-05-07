import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";
import base from "../../../base/base";
import Chip from "../../GameCommon/widget/Chip";

namespace Common {
    module AthleticsGame {
        class AthleticsGameJoin_Common  extends Application.Game.GameEventModel{
            private ui:ui.GameAthleticsBull.BullGameUI;
            view(GameID:string,UserList:Array<Application.GameCommonModel.UserInfo>,CurrentUser:Application.GameCommonModel.UserInfo){
                for(let i = 0;i<this.ui.users.numChildren;i++)
                {
                  let user =   <UserPropList>this.ui.users.getChildAt(i);
                  user.visible = false;
                }
                let minePos = base.publicFun.getMineIndex(UserList,base.userInfo.id)
                for(let i = 0;i<UserList.length;i++)
                {
                  let   u_data = UserList[i]
                  let pos =  base.publicFun.getPUserPos(minePos,i,UserList.length);
                  let user =   <UserPropList>this.ui.users.getChildAt(pos);
                  user.visible = true;
                  user.setHeader(u_data.GetUserHeader());
                  user.setUserName(u_data.GetUserName());
                  user.showReady(u_data.GetUserReady());
                }
                
            }
        }
    }
}
