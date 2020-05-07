import { ui } from "../../../ui/layaMaxUI";
import CommonTabButtons from "../../GameCommon/widget/CommonTabButtons"
import Event = Laya.Event;
export default class Announcement extends ui.Hall.Announcement.AnnouncementUI{
    constructor() {
        super();
    }
    onAwake() {
        this.hideAllGroup();
        this.setGroup(0);
        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
            this.setGroup(index);
        }
    }
    setGroup(index) {
        this.hideAllGroup();
        (<Laya.Sprite>this.groups.getChildAt(index)).visible = true;
    }
    private hideAllGroup(): void {
        for (let index = 0; index < this.groups.numChildren; index++) {
            (<Laya.Sprite>this.groups.getChildAt(index)).visible = false;
        }
    }
 
}