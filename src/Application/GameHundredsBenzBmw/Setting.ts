import { ui } from "../../ui/layaMaxUI";
import Base from "../../base/base"
import Event = Laya.Event;
export default class Setting extends ui.GameHundredsBenzBmw.SettingUI{
    constructor(){
        super()
    }
    onAwake(){
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this)
        })
        this.bgm_check.changeHandle = (check)=>{
            console.log("音效",check)
        }
        this.automatic_check.changeHandle = (check)=>{
            console.log("自动",check)
        }
        this.music_check.changeHandle = (check)=>{
            console.log("音乐",check)
        }
        this.night_check.changeHandle = (check)=>{
            console.log("日夜",check)
        }
        this.sound_check.changeHandle = (check)=>{
            console.log("声音",check)
        }
    }
}