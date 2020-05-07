namespace Application {
    export module GameCommonModel {
        export class Inning {
            GameBase: GameCommonInterface.GameCommon
            //基本牌型
            BaseProp: Array<GameCommonInterface.Prop>
            //发牌到Index
            DealPropIndex: number
            //基础分数
            BaseScore: number
            //是否结束
            IsOver: number
            //庄
            Banker: GameCommonInterface.UserInfo
            //玩家
            Player: Array<GameCommonInterface.UserInfo>
            //赢家
            Win: Array<GameCommonInterface.UserInfo>
            //失败
            Fail: Array<GameCommonInterface.UserInfo>
            //当前用户
            CurrentUser: GameCommonInterface.UserInfo
            //当前状态
            CurrentEvent: GameCommonInterface.Event
        }
    }
}