import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../../GameCommon/widget/UserPropList";


import GameEventModel from "../../GameCommon/Model/GameEventModel";

import AthleticsBullGame from "../AthleticsBullGame";
import TransAni from "../../GameCommon/widget/TransAni";
export default class BullGameBet extends GameEventModel {
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
        })
        this.GameEventLoadInitialization.AddEventListener((data: any) => {
            console.log(data)
        })
        this.GameEventEnter.AddEventListener((data: any) => {
            (<TransAni>this.UI.gameStatus_view).startBet();
        })
        this.GameEventLeave.AddEventListener((data: any) => {
            console.log(data)
        });this.RegisterListen()
    }
}
