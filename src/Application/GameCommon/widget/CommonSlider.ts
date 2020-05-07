import Base from "../../../base/base"
export default class CommonProgress extends Laya.Sprite {
    constructor() {
        super()
    }
    private m_percent: number = 0;
    private bar: Laya.Image;
    private imgmask: Laya.Sprite;
    private icon: Laya.Sprite;
    public get percent(): number {
        return this.m_percent;
    }
    public set percent(perc) {
        this.m_percent = perc > 100 ? 100 : perc;
        this.imgmask.width = this.width / 100 * this.m_percent+1;
        this.icon.x = this.imgmask.width
        this.changeHandler(this.m_percent)
    }
    public changeHandler(percent): void {

    }
    onAwake() {
        this.bar = <Laya.Image>this.getChildByName("bar");
        this.icon = <Laya.Image>this.getChildByName("icon");
        Base.publicFun.setCenter(this.icon)
        this.imgmask = this.bar.mask;

        this.on(Laya.Event.MOUSE_DOWN, this, (e) => {
            let perc = e.target.mouseX / this.width * 100;
            let func = perc > 99?Math.ceil:Math.floor;
            this.percent = func(perc);
        })
        this.on(Laya.Event.MOUSE_MOVE, this, (e) => {
            let perc = e.target.mouseX / this.width * 100;
            let func = perc > 99?Math.ceil:Math.floor;
            this.percent = func(perc);
        })
    }
}