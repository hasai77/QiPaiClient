namespace Application {
    export module GameCommonModel {
        export class GameModel implements GameCommonInterface.GameCommon {
            public CommunicationID: string;
            //游戏名称
            public GameName: string;
            //游戏房间号
            public GameRoomNumber: string;
            //游戏玩法
            public GamePlaying: string;
            //游戏最大人数
            public GameMaxUserCount: number;
            //游戏最小人数
            public GameMinUserCount: number;
            //游戏当前局
            public GameCurrentInning: number;
            //游戏最大局数
            public GameMaxInning: number;
            //用户列表
            public GameUserList: [];
            //最大下注
            public GameMaxBet: number;
            //最小下注
            public GameMinBet: number;
            //底分
            public GameBaseScore: number;
            //事件列表
            public GameEventList: Array<GameCommonInterface.GameCommon>

            public GameModel() {

            }

            public GetGameName() {
                return this.GameName;
            }

            public SetGameName(_GameName: string) {
                this.GameName = _GameName
            }
            public GetGameRoomNumber(): string {
                return this.GameRoomNumber;
            }

            public SetGameRoomNumber(GameRoomNumber: string) {
                this.GameName = GameRoomNumber
            }
            public GetGamePlaying() {
                return this.GamePlaying;
            }

            public SetGamePlaying(GamePlaying: string) {
                this.GamePlaying = GamePlaying
            }
            public GetGameMaxUserCount() {
                return this.GameMaxUserCount;
            }

            public SetGameMaxUserCount(GameMaxUserCount: number) {
                this.GameMaxUserCount = GameMaxUserCount
            }
            public GetGameMinUserCount() {
                return this.GameMinUserCount;
            }

            public SetGameMinUserCount(GameMinUserCount: string) {
                this.GameName = GameMinUserCount
            }
            public GetGameCurrentInning():number {
                return this.GameCurrentInning;
            }

            public SetGameCurrentInning(GameCurrentInning: number) {
                this.GameCurrentInning = GameCurrentInning
            }

            public GetGameMaxInning():number {
                return this.GameMaxInning;
            }

            public SetGameMaxInning(GameMaxInning: number) {
                this.GameMaxInning = GameMaxInning
            }

        }
    }
}