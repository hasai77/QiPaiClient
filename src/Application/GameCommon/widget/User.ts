import { ui } from "../../../ui/layaMaxUI";


export default class User extends Laya.Sprite {
    constructor() {
        super()
    }


    private User_Nickname: string;//用户头像边框用户昵称
    private User_AvatarFrame: string;//用户角色图标
    private User_Role: string;//用户在线状态
    private User_OnLine: boolean;//用户准备状态
    private User_Ready: boolean;//


    private UserName:Laya.Text;
    private UserImage:Laya.Sprite;
    private ShowReady:Laya.Sprite;

    onAwake(){
        this.UserImage = <Laya.Sprite>this.getChildByName("UserImage");
        this.ShowReady = <Laya.Sprite>this.getChildByName("ShowReady");
        this.UserName = <Laya.Text>this.getChildByName("UserName");
    }

    public set nickName(data:string) {
        this.UserName.text = data;
        this.User_Nickname = data
    }
    public set avatarFrame(data:any) {
        this.UserImage.loadImage(data)
        this.User_AvatarFrame = data
    }
    public set role(data) {
        this.User_Role = data
    }
    public set onLine(data) {
        this.User_OnLine = data
    }
    public set ready(data:boolean) {
        this.ShowReady.active =data;
        this.User_Ready = data
    }

    public get nickName():string {
        return this.User_Nickname
    }
    public get avatarFrame() {
        return this.User_AvatarFrame
    }
    public get role() {
        return this.User_Role
    }
    public get onLine() {
        return this.User_OnLine
    }
    public get ready() {
        return this.User_Ready
    }

}