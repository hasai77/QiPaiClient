
import { ui } from "../../../ui/layaMaxUI";
import GameEventModel from "../../GameCommon/Model/GameEventModel";
import base from "../../../base/base";
import AthleticsBullGame from "../AthleticsBullGame";
export default class BullGameOver  extends GameEventModel{
    constructor(GameEventName: string, GameUI:AthleticsBullGame, Game?: Application.GameCommonInterface.GameCommon) {
        super(GameEventName, GameUI, Game)
        this.GameInitialization.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameInningInitialized.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameUserLostConnection.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameUserConnection.AddEventListener((data: any) => {
            console.log(data)
            base.sceneManager.changeScene("Hall",new ui.APP_LoadingUI())
        })
        this.GameEventLoadInitialization.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameEventEnter.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameEventLeave.AddEventListener((data: any) => {
            console.log(data)
        });this.RegisterListen()
    }

}
