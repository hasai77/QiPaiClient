export default class ThanModel {
    FromGameUserInfo: Application.GameCommonInterface.UserInfo
    ToGameUserInfo: Application.GameCommonInterface.UserInfo
    Win: Application.GameCommonInterface.UserInfo
    Loser: Application.GameCommonInterface.UserInfo
    WinScore: number
    Position: Array<number>


    public GetFromGameUserInfo(): Application.GameCommonInterface.UserInfo {
        return this.FromGameUserInfo;
        
    }

    public SetFromGameUserInfo(FromGameUserInfo: Application.GameCommonInterface.UserInfo) {
        this.FromGameUserInfo = FromGameUserInfo
    }

    public GetToGameUserInfo(): Application.GameCommonInterface.UserInfo {
        return this.ToGameUserInfo
    }

    public SetToGameUserInfo(ToGameUserInfo: Application.GameCommonInterface.UserInfo) {
        this.ToGameUserInfo = ToGameUserInfo
    }

    public GetWin(): Application.GameCommonInterface.UserInfo {
        return this.Win
    }

    public SetWin(Win: Application.GameCommonInterface.UserInfo) {
        this.Win = Win
    }

    public GetLoser(): Application.GameCommonInterface.UserInfo {
        return this.Loser
    }

    public SetLoser(Loser: Application.GameCommonInterface.UserInfo) {
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