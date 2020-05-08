import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";

import Chip from "../../GameCommon/widget/Chip";
import base from "../../../base/base";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";
import GameEventModel from "../../GameCommon/Model/GameEventModel";

export default class AthleticsGameSettlement_Common  extends GameEventModel{
  private ui: ui.GameAthleticsBull.BullGameUI;
  view(GameID: string, GameUserList: Array<UserInfoModel>,ThanList:Array<UserInfoModel>){
         let minePos = base.publicFun.getMineIndex(GameUserList, base.userInfo.id)
    for(let i = 0;i<ThanList.length;i++)
    {
      let pos = base.publicFun.getPUserPos(minePos,i, ThanList.length);
      let user =   <UserPropList>this.ui.users.getChildAt(pos);
      user.showText("666")
    }
     
  }
}
