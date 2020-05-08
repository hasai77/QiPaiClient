import network from "./network"
import PublicFun from "./public"
import SceneManager from "./sceneManager"
import userInfoData from "./userInfoData"
import SnedNet from "./SnedNet";
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
    public sendNet:SnedNet
    constructor(){
        this.netWork = network.getinstance();
        this.publicFun = PublicFun.getinstance();
        this.sceneManager = SceneManager.getinstance();
        this.userInfo = userInfoData.getinstance();
        this.sendNet = SnedNet.getinstance();
    }

}
export default base.getinstance();