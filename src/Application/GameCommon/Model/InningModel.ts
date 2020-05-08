export default class InningModel {
    GameBase: Application.GameCommonInterface.GameCommon
    //基本牌型
    BaseProp: Array<Application.GameCommonInterface.Prop>
    //发牌到Index
    DealPropIndex: number
    //基础分数
    BaseScore: number
    //是否结束
    IsOver: number
    //庄
    Banker: Application.GameCommonInterface.UserInfo
    //玩家
    Player: Array<Application.GameCommonInterface.UserInfo>
    //赢家
    Win: Array<Application.GameCommonInterface.UserInfo>
    //失败
    Fail: Array<Application.GameCommonInterface.UserInfo>
    //当前用户
    CurrentUser: Application.GameCommonInterface.UserInfo
    //当前状态
    CurrentEvent: Application.GameCommonInterface.Event
}