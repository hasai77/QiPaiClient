import PropModel from "./PropModel";

export default class UserInfoModel implements Application.GameCommonInterface.UserInfo {
    protected UserID: number
    protected UserName: string
    protected UserPassword: string
    protected UserLastTime: number
    protected UserHeader:string;
    protected UserClientType: string
    protected IsLogin: boolean
    protected Token: string
    protected Ready:boolean;
    PropList:PropModel[];
    public GetUserID(): number {
        return this.UserID
    }

  

    public SetUserID(UserID: number) {
        this.UserID = UserID
    }
    public SetUserReady(Ready: boolean) {
        this.Ready = Ready
    }
    public GetUserReady(): boolean {
        return this.Ready
    }
    public GetUserName(): string {
        return this.UserName
    }

    public SetUserName(UserName: string) {
        this.UserName = UserName
    }

    public GetUserPassword(): string {
        return this.UserPassword
    }

    public SetUserPassword(UserPassword: string) {
        this.UserPassword = UserPassword
    }

    public GetUserLastTime(): number {
        return this.UserLastTime
    }

    public SetUserLastTime(UserLastTime: number) {
        this.UserLastTime = UserLastTime
    }

    public GetUserClientType(): string {
        return this.UserClientType
    }

    public SetUserClientType(UserClientType: string) {
        this.UserClientType = UserClientType
    }

    public GetIsLogin(): boolean {
        return this.IsLogin
    }

    public SetIsLogin(IsLogin: boolean) {
        this.IsLogin = IsLogin
    }

    public GetToken(): string {
        return this.Token
    }

    public SetToken(Token: string) {
        this.Token = Token
    }
    public GetUserHeader(): string {
        return this.UserHeader
    }

    public SetUserHeader(header: string) {
        this.UserHeader = header
    }


    
}