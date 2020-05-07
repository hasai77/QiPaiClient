import Handler = Laya.Handler
export default class SceneManager {
    constructor() {
        this.init()
    };
    private sceneList: any = {};
    private curScene: Laya.Scene;
    private static instance: SceneManager;
    public static getinstance(): SceneManager {
        if (this.instance == null)
            this.instance = new SceneManager();
        return this.instance;
    }

    private rigesterScene(name, param): void {
        this.sceneList[name] = param;
    }
    private init(): void {
        this.rigesterScene("Login", { url: "./Login/Login.scene" })
        this.rigesterScene("Hall", { url: "./Hall/Hall.scene" })
    }
    public changeScene(name, loadPage: any, removeCur: boolean = true): void {
        loadPage.onAwake = () => {
            Laya.Scene.open
            Laya.Scene.load(this.sceneList[name].url,
                Handler.create(this, (scene) => {
                    if (this.curScene) {
                        this.curScene.destroy()
                    }
                    Laya.timer.once(500, this, () => {
                        Laya.Scene.root.addChild(scene);
                        this.curScene = scene;
                        loadPage.removeSelf();
                    })
                }),
                Handler.create(this, (e) => {
                    loadPage.progress.percent = (e * 100);
                }, null, false))
        }
        Laya.stage.addChild(<any>loadPage)

    }
}


