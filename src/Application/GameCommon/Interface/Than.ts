namespace Application {
    export module GameCommonInterface {
        export interface Than {
            GetFromGameUserInfo(): GameCommonInterface.UserInfo

            SetFromGameUserInfo(FromGameUserInfo: GameCommonInterface.UserInfo)

            GetToGameUserInfo(): GameCommonInterface.UserInfo

            SetToGameUserInfo(ToGameUserInfo: GameCommonInterface.UserInfo)

            GetWin(): GameCommonInterface.UserInfo

            SetWin(Win: GameCommonInterface.UserInfo)

            GetLoser(): GameCommonInterface.UserInfo

            SetLoser(Loser: GameCommonInterface.UserInfo)

            GetWinScore(): number

            SetWinScore(WinScore: number)

            GetPosition(): Array<number>

            SetPosition(Position: Array<number>)
        }
    }
}