import base from "../../../base/base";
import { ui } from "../../../ui/layaMaxUI";

namespace Common {
    module AthleticsGame {
       
        class AthleticsGameOver_Common  extends Application.Game.GameEventModel{
            view(GameID:string){
                //removeListener

                base.sceneManager.changeScene("Hall",new ui.APP_LoadingUI())
                
            }
        }
    }
}
