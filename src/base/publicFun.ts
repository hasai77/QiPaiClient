import TimeLine = Laya.TimeLine;
import Event = Laya.Event;
import CommonPopup from "../Application/GameCommonUI/CommonPopup";
import CommonTaost from "../Application/GameCommonUI/CommonToast";
 class publicfun {
    constructor() {

    }
    private timeLine: TimeLine = new TimeLine();
    private viewList: any[] = [];
    private static instance: publicfun;
    public static getinstance(): publicfun {
        if (this.instance == null)
            this.instance = new publicfun();
        return this.instance;
    }

    public showAlert(node: Laya.Sprite, back?: boolean): void {
        if (!node.getChildByName("back_gray")) {
            let rect = new Laya.Sprite();
            rect.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#333333");
            rect.name = "back_gray";
            rect.zOrder = -9999999;
            rect.alpha = 0.3;
            node.addChild(rect)
        }
        this.viewList.push(node);
        this.startAlert(node);
    }
    private startAlert(node: Laya.Sprite): void {
        this.setCenter(node);
        let x = Laya.stage.width / 2;
        let y = Laya.stage.height / 2;
        node.visible = true;
        node.active = true;
        node.x = x;
        node.y = y;
        node.scaleX = 0;
        node.scaleY = 0;

        this.timeLine = new TimeLine()
        this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
            // .addLabel("turnDown",0).to(node,{ scaleX:0.9, scaleY:0.9},200,null,0)
            .addLabel("turnLeft", 0).to(node, { scaleX: 1, scaleY: 1 }, 100, null, 0)
        this.timeLine.play(0, false);
        this.timeLine.on(Event.COMPLETE, this, this.onComplete);
        this.timeLine.on(Event.LABEL, this, this.onLabel);
    }
    public hideAlert(node: Laya.Sprite, completeFun?: Function): void {
        this.timeLine = new TimeLine()
        this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
            .addLabel("turnDown", 0).to(node, { scaleX: 0, scaleY: 0 }, 200, null, 0)
        this.timeLine.play(0, false);
        this.timeLine.on(Event.COMPLETE, this, () => {
            node.active = false;
            node.visible = false;
            completeFun && completeFun();
            let view = this.viewList.pop();
            view && view.onHide && view.onHide();
        });
    }
    public showConfirm(str:string,callBack?):void{
       
        let box = new CommonPopup(str,callBack);
        let self = this;
        box.onAwake = function(){
            this.setText(str);
            this.close_btn.on(Event.CLICK,this,()=>{
                self.hideAlert(this,()=>this.removeSelf())
            })
            this.cancel_btn.on(Event.CLICK,this,()=>{
                self.hideAlert(this,()=>this.removeSelf())
            })
            this.confirm_btn.on(Event.CLICK,this,()=>{
                this.callBack&&this.callBack();
                self.hideAlert(this,()=>this.removeSelf())
            })
            let isHide = (this.callBack!=null);
 
            this.confirm_btn.visible = isHide;
            this.cancel_btn.visible = isHide;
        }
        Laya.stage.addChild(box)
        this.showAlert(box)
    }
    public showTaost(str:string):void{
        Laya.stage.addChild(new CommonTaost(str))
    }
    public setCenter(node: Laya.Sprite): void {
        let rect = node.getBounds()
        node.pivotX = (rect.width||node.width) / 2;
        node.pivotY = (rect.height||node.height) / 2;
        node.x += node.pivotX;
        node.y += node.pivotY;
    }
    private onComplete(): void {
        // console.log("timeLine complete!!!!");
    }
    private onLabel(label: String): void {
        // console.log("LabelName:" + label);
    }
    public  getWorldScale(target) {
        let x = target.scaleX;
        let y = target.scaleY;
        let parent = target.parent
        while (parent != Laya.stage) {
          x *= parent.scaleX;
          y *= parent.scaleY;
          parent = parent.parent
        }
        return { x, y }
      }
  
  
      public  getWorldPos(target) {
        let x = target.x;
        let y = target.y;
        let parent = target.parent
        while (parent != Laya.stage) {
          x += parent.x;
          y += parent.y;
          parent = parent.parent
        }
        return { x, y }
      }

   
    public getRecvPos(target: Laya.Sprite) {

        let x = Math.random() * (target.width - 20) -20;
        let y = Math.random() * (target.height - 20) -20
        return { x, y }
    }
    public getMineIndex(list,mineId){
        for(let i = 0;i<list.length,i++;){
            if(list[i].id == mineId)
                return i;
        }
        return-1;
    }
    public getPUserPos(myPos, OtherPos, maxPlayer){
        let pos = OtherPos - myPos;
        if (pos < 0) {
            pos += maxPlayer
        }
        return pos;
    }
}
export default publicfun.getinstance();