namespace Application {
    export module GameCommonInterface {
        export interface UserInfo {
            GetUserID(): number

            SetUserID(UserID: number)

            GetUserName(): string

            SetUserName(UserName: string)

            GetUserPassword(): string

            SetUserPassword(UserPassword: string)

            GetUserLastTime(): number

            SetUserLastTime(UserLastTime: number)

            GetUserClientType(): string

            SetUserClientType(UserClientType: string)

            GetIsLogin(): boolean

            SetIsLogin(IsLogin: boolean)

            GetToken(): string

            SetToken(Token: string)
        }
    }
}