import { ui } from "../../ui/layaMaxUI";
import Event = Laya.Event;
export default class Table extends ui.GameHundredsBenzBmw.TableUI {
    constructor() {
        super()
    }
    private speed: number;
    private diraction: Laya.Vector2 = new Laya.Vector2();
    private curMoveIndex: number = 0;
    private winPrice: any;
    private changeDirList: any[] = [
        { x: 1712, y: 709, r: 58 },
        { x: 1478, y: 858, r: 90 },
        { x: 437.5, y: 858, r: 121 },
        { x: 202.5, y: 682, r: 180 },
        { x: 211, y: 254, r: 236 },
        { x: 455, y: 110, r: 270 },
        { x: 1478, y: 116, r: 301 },
        { x: 1707, y: 242, r: 360 },
    ];

    private winPriceList: any[] = [
        { x: 1607.5, y: 790, beforIndex: 1 },
        { x: 1118.5, y: 867, beforIndex: 2 },
        { x: 794, y: 864, beforIndex: 2 },
        { x: 318, y: 790, beforIndex: 3 },
        { x: 310.5, y: 187, beforIndex: 5 },
        { x: 803, y: 107, beforIndex: 6 },
        { x: 1111, y: 107, beforIndex: 6 },
        { x: 1593.5, y: 172, beforIndex: 7 },
    ]


    onAwake() {

        this.dazhong.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[0];
        })
        this.baoma.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[1];
        })
        this.benchi.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[2];
        })
        this.baoshijie.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[3];
        })
        this.dabaoshijie.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[4];
        })
        this.dabenchi.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[5];
        })
        this.dabaoma.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[6];
        })
        this.dadazhong.on(Event.CLICK, this, () => {
            this.winPrice = this.winPriceList[7];
        })


        this.go_btn.on(Event.CLICK, this, () => {
            this.stratMove();
        })
    }
    private stratMove(): void {
        let target = this.changeDirList[this.curMoveIndex]
        this.winPrice = null;
        this.speed = 15;
        this.moveTo(target);
    }
    private moveTo(target): void {
        Laya.Vector2.normalize(new Laya.Vector2(target.x - this.car_image.x, target.y - this.car_image.y), this.diraction);
        Laya.timer.frameLoop(1, this, () => {
            this.car_image.x += this.diraction.x * this.speed;
            this.car_image.y += this.diraction.y * this.speed;
            let tempVec = new Laya.Vector2(target.x - this.car_image.x, target.y - this.car_image.y)
            let length = Laya.Vector2.scalarLength(tempVec);
            if (length < 8) {
                this.car_image.x = target.x;
                this.car_image.y = target.y;
                target.r && (this.car_image.rotation = target.r);
                Laya.timer.clearAll(this);

                if (target != this.winPrice) {
                    this.curMoveIndex = ++this.curMoveIndex % this.changeDirList.length;
                    let pos = this.changeDirList[this.curMoveIndex]
                    if (this.winPrice && this.winPrice.beforIndex == this.curMoveIndex && this.speed < 7) {
                        pos = this.winPrice;
                    }
                    this.moveTo(pos)
                }
                else {
                    console.log("到站了")
                }


            }
            if (this.winPrice) {
                if (this.speed > 10)
                    this.speed -= 0.03;
                else if (this.speed > 8)
                    this.speed -= 0.02;
                else if (this.speed > 5)
                    this.speed -= 0.015;
                else if (this.speed > 3)
                    this.speed -= 0.005;
            }
        })
    }
}