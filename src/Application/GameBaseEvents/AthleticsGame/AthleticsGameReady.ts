import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";

import Chip from "../../GameCommon/widget/Chip";
import base from "../../../base/base";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";

export default class AthleticsGameReady_Common  extends GameEventModel{
  private ui:ui.GameAthleticsBull.BullGameUI;
  view(GameID:String,UserList:Array<UserInfoModel>,CurrentUser:UserInfoModel){
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