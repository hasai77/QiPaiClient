import { ui } from "../../../ui/layaMaxUI";
import Event = Laya.Event;

export default class Hundredspk extends ui.Hall.Hundredsofpeople.HundredspkUI {
    constructor() {
        super()
    }
    onAwake() {
        for (let index = 0; index < 5; index++) {
            this[`btn_${index}`].on(Event.CLICK, this, () => {
                console.log(index)
            })

        }
    }
}