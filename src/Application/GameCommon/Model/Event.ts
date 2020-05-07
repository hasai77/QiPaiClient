namespace Application {
    export module Game {
        export class GameEventModel implements GameCommonInterface.Event {
            public Game: GameCommonInterface.GameCommon;
            //事件名称
            private GameEventName: string;
            //游戏初始化
            protected GameInitialization: Lib.EventModel = new Lib.EventModel();
            //游戏当全局初始化
            protected GameInningInitialized: Lib.EventModel = new Lib.EventModel();
            //用户失去连接
            protected GameUserLostConnection: Lib.EventModel = new Lib.EventModel();
            //用户重新连接或加入游戏
            protected GameUserConnection: Lib.EventModel = new Lib.EventModel();
            //事件初始化
            protected GameEventLoadInitialization: Lib.EventModel = new Lib.EventModel();
            //事件进入
            protected GameEventEnter: Lib.EventModel = new Lib.EventModel();
            //事件离开
            protected GameEventLeave: Lib.EventModel = new Lib.EventModel();

            public GameEventModel(GameEventName: string, Game: GameCommonInterface.GameCommon) {
                this.Game = Game;
                this.GameEventLoadInitialization.Call(this)
            }

            public RegisterListen() {
                for (let Key in this) {
                    // if (this[Key] instanceof Lib.EventModel) {

                    // }
                }
            }

            public RemoveListen() {

            }
        }
    }
}