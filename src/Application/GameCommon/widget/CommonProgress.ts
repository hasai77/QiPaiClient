export default class CommonProgress extends Laya.Sprite{
    constructor(){
        super()
    }
    private m_percent:number = 0;
    private bar:Laya.Image;
    private imgmask:Laya.Sprite;
    public get percent():number{
        return this.m_percent;
    }
    public set percent(perc){
        this.m_percent = perc>100?100:perc;
        this.imgmask.width = this.width / 100 * this.m_percent;
    }
    onAwake(){
        this.bar = <Laya.Image>this.getChildByName("bar");
        this.imgmask  = this.bar.mask ;
        // Laya.timer.frameLoop(2,this,()=>{
        //     if(this.m_percent>=100)
        //         this.m_percent = 0;
        //     this.percent = this.m_percent +1;
        // })
    }
}