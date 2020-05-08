import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";

import Chip from "../../GameCommon/widget/Chip";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import UserInfoModel from "../../GameCommon/Model/UserInfoModel";
export default class AthleticsGameNext_Common  extends GameEventModel{
    private ui: ui.GameAthleticsBull.BullGameUI;
    view(GameID: string, GameUserList: Array<UserInfoModel>, Current) {
        for (let i = 0; i < this.ui.users.numChildren; i++) {
            let user = <UserPropList>this.ui.users.getChildAt(i);
            user.Init();
        }
      
    }

}
