export default class userInfoData{
    private static  instance:userInfoData;
    public static  getinstance():userInfoData{
        if(this.instance == null)
            this.instance = new userInfoData();
        return this.instance;
    }
    public id:number = 888889;
    public money:number = 675412;
    public nickName:string = "啦啦啦";
    public diamond:number = 45623;
    public safeMoney:number = 6541;
}