import network from "./network"
import PublicFun from "./public"
import SceneManager from "./sceneManager"
import userInfoData from "./userInfoData"
 class base{
    
    private static  instance:base;
    public static  getinstance():base{
        if(this.instance == null)
            this.instance = new base();
        return this.instance;
    }
    public netWork:network;
    public publicFun:PublicFun;
    public sceneManager:SceneManager;
    public userInfo:userInfoData;
    constructor(){
        this.netWork = network.getinstance();
        this.publicFun = PublicFun.getinstance();
        this.sceneManager = SceneManager.getinstance();
        this.userInfo = userInfoData.getinstance();
    }

}
export default base.getinstance();