import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";
import base from "../../../base/base";
import Chip from "../../GameCommon/widget/Chip";
namespace Common {
    module AthleticsGame {
        class AthleticsGameSettlement_Common  extends Application.Game.GameEventModel{
            private ui: ui.GameAthleticsBull.BullGameUI;
            view(GameID: string, GameUserList: Array<Application.GameCommonModel.UserInfo>,ThanList:Array<Application.GameCommonModel.UserInfo>){
                   let minePos = base.publicFun.getMineIndex(GameUserList, base.userInfo.id)
              for(let i = 0;i<ThanList.length;i++)
              {
                let pos = base.publicFun.getPUserPos(minePos,i, ThanList.length);
                let user =   <UserPropList>this.ui.users.getChildAt(pos);
                user.showText("666")
              }
               
            }
        }
    }
}
