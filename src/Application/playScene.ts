
import { ui } from "../ui/layaMaxUI";
import Handler = Laya.Handler;
import Tween = Laya.Tween;
import Button = Laya.Button;
import Event = Laya.Event;
import Ease = Laya.Ease;
export default class playScene extends ui.playSceneUI {
    public cardUnknow: Array<laya.display.Node> = new Array<laya.display.Node>()
    public leftHand: Array<laya.display.Node> = new Array<laya.display.Node>()
    public rightHand: Array<laya.display.Node> = new Array<laya.display.Node>()
    public upHand: Array<laya.display.Node> = new Array<laya.display.Node>()
    public downHand: Array<laya.display.Node> = new Array<laya.display.Node>()
    public handArr: Array<laya.display.Node[]>

    public pengDown: Array<laya.display.Node> = new Array<laya.display.Node>()
    public pengLeft: Array<laya.display.Node> = new Array<laya.display.Node>()
    public pengRight: Array<laya.display.Node> = new Array<laya.display.Node>()
    public pengUp: Array<laya.display.Node> = new Array<laya.display.Node>()

    public leftShowed: Array<laya.display.Node> = new Array<laya.display.Node>()
    public rightShowed: Array<laya.display.Node> = new Array<laya.display.Node>()
    public downShowed: Array<laya.display.Node> = new Array<laya.display.Node>()
    public upShowed: Array<laya.display.Node> = new Array<laya.display.Node>()

    public cardMeshName: Array<string>;

    public dealTimes: number = 0
    public _camera: Laya.Camera;
    private _ray: Laya.Ray;
    private _outHitResult: Laya.HitResult;
    private point: Laya.Vector2 = new Laya.Vector2();
    private _scene3D: Laya.Scene3D;


    constructor() {
        super()

    }
    onAwake(): void {
        this.cardMeshName = ["res/LayaScene_playScene/Conventional/Assets/majiang/Materials/mj_dif.lmat"]
        for (let i = 1; i < 42; i++) {
            this.cardMeshName.push(`res/LayaScene_playScene/Conventional/Assets/majiang/Materials/mj_dif ${i}.lmat`)
        }
        Laya.loader.create(["res/LayaScene_playScene/Conventional/playScene.ls", ...this.cardMeshName],
            Laya.Handler.create(this, this.onCreated),
            Laya.Handler.create(this, (e) => {
                // console.log("资源加载:", (e * 100).toFixed(2))
            }))

        this.fapai.clickHandler = new Handler(this, this.onClickButton, [this.fapai]);
        this.mopai.clickHandler = new Handler(this, this.onClickMopai, [this.mopai]);
        this.dapai.clickHandler = new Handler(this, this.onClickDapai, [this.dapai])


        //射线初始化（必须初始化）
        this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
        //初始化变量
        this.point = new Laya.Vector2();
        this._outHitResult = new Laya.HitResult();
    }

    private onClickDapai(button: Button): void {

        let card5: Laya.Sprite3D = <Laya.Sprite3D>this.downHand[5]


        card5.active = false;
        let card13: Laya.Sprite3D = <Laya.Sprite3D>this.downHand[13]
        Tween.to(card13.transform, { localPositionZ: card13.transform.localPositionZ - 0.05, localRotationEulerY: 30 }, 300, null, Handler.create(this, () => {
            Tween.to(card13.transform, { localPositionX: card5.transform.localPositionX, localRotationEulerY: 0 }, 500, null, Handler.create(this, () => {
                Tween.to(card13.transform, { localPositionZ: 0 }, 300)
            }))
        }))
    }

    private onClickMopai(button: Button): void {
        console.log("摸牌哦")
        let targetCard = this.downHand[13]
        if (!targetCard.active) {
            let card = this.cardUnknow.shift();
            card.active = false;
            targetCard.active = true;
        }
    }
    private onClickButton(button: Button): void {
        console.log("发牌哦")
        this.handArr = [this.downHand, this.leftHand, this.upHand, this.rightHand]
        Laya.timer.loop(100, this, this.dealCards);
    }
    private dealCards(): void {
        let curHand: any = this.handArr[this.dealTimes % 4];
        let integer = Math.floor(this.dealTimes / 4)
        if (integer <= 2) {
            for (let i = integer * 4; i < (integer + 1) * 4; i++) {
                curHand[i].active = true
            }
            for (let i = 0; i < 4; i++) {
                let card = this.cardUnknow.shift()
                card.active = false
            }
        }
        else {
            curHand[integer * 4].active = true
            let card = this.cardUnknow.shift()
            card.active = false
        }

        if (++this.dealTimes >= 16) {
            Laya.timer.clear(this, this.dealCards)
        }
    }


    public init(scene: Laya.Scene3D): void {
        this._camera = scene.getChildByName("Main Camera") as Laya.Camera;
        this._scene3D = scene

        scene.getChildByName("骰子").active = false;
        let pengDown = scene.getChildByName("pengDown");
        let pengLeft = scene.getChildByName("pengLeft");
        let pengRight = scene.getChildByName("pengRight");
        let pengUp = scene.getChildByName("pengUp");

        for (let i = 0; i < pengDown.numChildren; i++) {
            pengDown.getChildAt(i).active = false;
            this.pengDown.push(pengDown.getChildAt(i));
        }
        for (let i = 0; i < pengLeft.numChildren; i++) {
            pengLeft.getChildAt(i).active = false;
            this.pengLeft.push(pengLeft.getChildAt(i))
        }
        for (let i = 0; i < pengUp.numChildren; i++) {
            pengUp.getChildAt(i).active = false;
            this.pengUp.push(pengUp.getChildAt(i))
        }
        for (let i = 0; i < pengRight.numChildren; i++) {
            pengRight.getChildAt(i).active = false;
            this.pengRight.push(pengRight.getChildAt(i))
        }
        let leftShowed = scene.getChildByName("leftShowed");
        let rightShowed = scene.getChildByName("rightShowed");
        let downShowed = scene.getChildByName("downShowed");
        let upShowed = scene.getChildByName("upShowed");

        for (let i = 0; i < leftShowed.numChildren; i++) {
            leftShowed.getChildAt(i).active = false;
            this.leftShowed.push(leftShowed.getChildAt(i))
        }
        for (let i = 0; i < rightShowed.numChildren; i++) {
            rightShowed.getChildAt(i).active = false;
            this.rightShowed.push(rightShowed.getChildAt(i))
        }
        for (let i = 0; i < downShowed.numChildren; i++) {
            downShowed.getChildAt(i).active = false;
            this.downShowed.push(downShowed.getChildAt(i))
        }
        for (let i = 0; i < upShowed.numChildren; i++) {
            upShowed.getChildAt(i).active = false;
            this.upShowed.push(upShowed.getChildAt(i))
        }

        let leftHand = scene.getChildByName("leftHand");
        let rightHand = scene.getChildByName("rightHand");
        let downHand = scene.getChildByName("downHand");
        let upHand = scene.getChildByName("upHand");

        for (let i = 0; i < leftHand.numChildren; i++) {
            leftHand.getChildAt(i).active = false
            this.leftHand.push(leftHand.getChildAt(i))
        }
        for (let i = 0; i < rightHand.numChildren; i++) {
            rightHand.getChildAt(i).active = false
            this.rightHand.push(rightHand.getChildAt(i))
        }
        let leng = downHand.numChildren;
        for (let i = 0; i < leng; i++) {
            downHand.getChildAt(i).active = false;
            this.downHand.push(((<Laya.Sprite3D>scene.getChildByName("麻将高001").getChildByName("default183")).clone()));
            this.downHand[i].active = false;
            this.downHand[i]["clicked"] = false;
            this.downHand[i]["index"] = i;
           
            downHand.addChild(this.downHand[i]);
            (<Laya.Sprite3D>this.downHand[i]).transform.localPositionX = (<Laya.Sprite3D>downHand.getChildAt(i)).transform.localPositionX;
            (<Laya.Sprite3D>this.downHand[i]).transform.localPositionY = (<Laya.Sprite3D>downHand.getChildAt(i)).transform.localPositionY;
            (<Laya.Sprite3D>this.downHand[i]).transform.localPositionZ = (<Laya.Sprite3D>downHand.getChildAt(i)).transform.localPositionZ;
            // var cubeRigid:Laya.Rigidbody3D = this.downHand[i].getComponent(Laya.Rigidbody3D);
            
        }
        for (let i = 0; i < upHand.numChildren; i++) {
            upHand.getChildAt(i).active = false
            this.upHand.push(upHand.getChildAt(i))
        }

        let up = scene.getChildByName("up");
        let left = scene.getChildByName("left");
        let down = scene.getChildByName("down");
        let right = scene.getChildByName("right");

        for (let i = 0; i < down.numChildren / 2; i++) {
            this.cardUnknow.push(down.getChildAt(i));
            this.cardUnknow.push(down.getChildAt(i + down.numChildren / 2));
        }
        for (let i = 0; i < left.numChildren / 2; i++) {
            this.cardUnknow.push(left.getChildAt(i));
            this.cardUnknow.push(left.getChildAt(i + left.numChildren / 2));
        }
        for (let i = 0; i < up.numChildren / 2; i++) {
            this.cardUnknow.push(up.getChildAt(i));
            this.cardUnknow.push(up.getChildAt(i + up.numChildren / 2));
        }
        for (let i = 0; i < right.numChildren / 2; i++) {
            this.cardUnknow.push(right.getChildAt(i));
            this.cardUnknow.push(right.getChildAt(i + right.numChildren / 2));
        }

    }

    private onCreated() {
        let scene: Laya.Scene3D = <Laya.Scene3D>Laya.stage.addChild(Laya.Loader.getRes("res/LayaScene_playScene/Conventional/playScene.ls"));
        scene.zOrder = -1;
        Laya.stage.on(Event.MOUSE_UP, this, this.sceneClick)
        this.init(scene)

    }
    private sceneClick(e: Laya.Event): void {
        this.point.x = Laya.MouseManager.instance.mouseX;
        this.point.y = Laya.MouseManager.instance.mouseY;
        console.log(this.point)
        //产生射线
        this._camera.viewportPointToRay(this.point, this._ray);
        //拿到射线碰撞的物体
        console.log(this._ray)
        this._scene3D.physicsSimulation.rayCast(this._ray, this._outHitResult);
        //如果碰撞到物体
        if (this._outHitResult.succeeded) {
            let index = this._outHitResult.collider.owner["index"];
            let clicked = this._outHitResult.collider.owner["clicked"];
            Tween.to((<Laya.Sprite3D>this.downHand[index]).transform, { localPositionZ: clicked ? -0.00 : -0.015 }, 200, null, Handler.create(this, () => { }))
            this.downHand.forEach(element => {
                if (element["index"] != index && element["clicked"]) {
                    Tween.to((<Laya.Sprite3D>element).transform, { localPositionZ: 0 }, 200, null, Handler.create(this, () => { }))
                    element["clicked"] = false
                }

            });
            this._outHitResult.collider.owner["clicked"] = !clicked;
        }
    }
}