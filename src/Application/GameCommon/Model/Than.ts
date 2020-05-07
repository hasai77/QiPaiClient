namespace Application {
    export module GameCommonModel {
        export class Than {
            FromGameUserInfo: GameCommonInterface.UserInfo
            ToGameUserInfo: GameCommonInterface.UserInfo
            Win: GameCommonInterface.UserInfo
            Loser: GameCommonInterface.UserInfo
            WinScore: number
            Position: Array<number>


            public GetFromGameUserInfo(): GameCommonInterface.UserInfo {
                return this.FromGameUserInfo
            }

            public SetFromGameUserInfo(FromGameUserInfo: GameCommonInterface.UserInfo) {
                this.FromGameUserInfo = FromGameUserInfo
            }

            public GetToGameUserInfo(): GameCommonInterface.UserInfo {
                return this.ToGameUserInfo
            }

            public SetToGameUserInfo(ToGameUserInfo: GameCommonInterface.UserInfo) {
                this.ToGameUserInfo = ToGameUserInfo
            }

            public GetWin(): GameCommonInterface.UserInfo {
                return this.Win
            }

            public SetWin(Win: GameCommonInterface.UserInfo) {
                this.Win = Win
            }

            public GetLoser(): GameCommonInterface.UserInfo {
                return this.Loser
            }

            public SetLoser(Loser: GameCommonInterface.UserInfo) {
                this.Loser = Loser
            }

            public GetWinScore(): number {
                return this.WinScore
            }

            public SetWinScore(WinScore: number) {
                this.WinScore = WinScore
            }

            public GetPosition(): Array<number> {
                return this.Position
            }

            public SetPosition(Position: Array<number>) {
                this.Position = Position
            }
        }
    }
}