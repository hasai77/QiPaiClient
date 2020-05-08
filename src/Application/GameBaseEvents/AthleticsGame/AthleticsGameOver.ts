
import { ui } from "../../../ui/layaMaxUI";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import base from "../../../base/base";

export default class BullGameOver_Common  extends GameEventModel{
    view(GameID:string){
        //removeListener

        base.sceneManager.changeScene("Hall",new ui.APP_LoadingUI())
        
    }
}
