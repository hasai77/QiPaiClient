import GameEventModel from "../../GameCommon/Model/GameEventModel";
import AthleticsBullGame from "../AthleticsBullGame";
export default class BullGameForBet  extends GameEventModel{
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
            console.log(data)
        })
        this.GameEventLeave.AddEventListener((data: any) => {
            console.log(data)
        });this.RegisterListen()
    }
}