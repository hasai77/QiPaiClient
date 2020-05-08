import { ui } from "../../ui/layaMaxUI";
import Handler = Laya.Handler;
import Event = Laya.Event;

import BullRule = ui.GameAthleticsBull.Ruels.RoomRuleUI;
import FiftyRoomRule = ui.GameAthleticsFiftyK.Ruels.FiftyRoomRuleUI;
import FiveArchingRoomRule = ui.GameAthleticsFiveArching.Ruels.FiveArchingRoomRuleUI;
import GoldenFlowerRoomRule = ui.GameAthleticsGoldenFlower.Rules.GoldenFlowerRoomRuleUI;
import LandlordRoomRule = ui.GameAthleticsLandlord.Rules.LandlordRoomRuleUI;
import RunFastRoomRule = ui.GameAthleticsRunsFast.Rules.RunFastRoomRuleUI;
import TexasRoomRule = ui.GameAthleticsTexas.Rules.TexasRoomRuleUI;
import ThanchickenCreateroom = ui.GameAthleticsThanchicken.Rules.ThanchickenCreateroomUI;
import ThirteenBetsRoomRule = ui.GameAthleticsThirteenBets.Rules.ThirteenBetsRoomRuleUI;
import ThreeDukeRoomRule = ui.GameAthleticsThreeDuke.Rules.ThreeDukeRoomRuleUI;
import TwentyoneroomRule = ui.GameAthleticsTwentyone.Rules.TwentyoneroomRuleUI;
import TwoEightroomRule = ui.GameAthleticsTwoEight.Rules.TwoEightroomRuleUI;

import Base from "../../base/base"
import CommonRadioGroup from "../GameCommon/widget/CommonRadioGroup"
import CommonCheck from "../GameCommon/widget/CommonCheck"
import base from "../../base/base";
export default class CommonCreatRoom extends ui.GameCommonUI.CommonCreatRoomUI {
    constructor() {
        super()
    }
    private curRuleView: any;
    onAwake() {
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.clear_btn.on(Event.CLICK,this,()=>{
            for (let index = 0; index < this.curRuleView.radios.numChildren; index++) {
                (<CommonRadioGroup>this.curRuleView.radios.getChildAt(index)).checkIndex =0;
            }
            if(this.curRuleView.checks){
                for (let index = 0; index < this.curRuleView.checks.numChildren; index++) {
                    (<CommonCheck>this.curRuleView.checks.getChildAt(index)).checked = false;
                }
            }
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            let data = {
                radios:[],
                checks:[]
            }
            for (let index = 0; index < this.curRuleView.radios.numChildren; index++) {
                let checkIndex = (<CommonRadioGroup>this.curRuleView.radios.getChildAt(index)).checkIndex;
                data.radios.push(checkIndex)
            }
            if(this.curRuleView.checks){
                for (let index = 0; index < this.curRuleView.checks.numChildren; index++) {
                    let checked = (<CommonCheck>this.curRuleView.checks.getChildAt(index)).checked;
                    data.checks.push(checked)
                }
            }
            base.sendNet.sendCreatGame({
                "MaxUser": 6,
                "MinUser": 2,
                "GamePlaying": "Bull.Max",
                "BaseScore": 1
            })
            console.log(data)
        })
        this.tabButtons_list.selectEnable = true;
        this.tabButtons_list.renderHandler = new Handler(this, this.updateItem);
        this.tabButtons_list.selectHandler = new Handler(this, this.onSelect, null, false);
        this.tabButtons_list.vScrollBarSkin = "";
        this.tabButtons_list.elasticEnabled = true;
        this.setArray([{
            name: "牛牛",
            ruleView: BullRule,
        }, {
            name: "斗地主",
            ruleView: LandlordRoomRule,
        }, {
            name: "三公",
            ruleView: ThreeDukeRoomRule,
        }, {
            name: "二八",
            ruleView: TwoEightroomRule,
        }, {
            name: "21点",
            ruleView: TwentyoneroomRule,
        }, {
            name: "牛牛",
            ruleView: BullRule,
        }, {
            name: "斗地主",
            ruleView: LandlordRoomRule,
        }, {
            name: "三公",
            ruleView: ThreeDukeRoomRule,
        }, {
            name: "二八",
            ruleView: TwoEightroomRule,
        }, {
            name: "21点",
            ruleView: TwentyoneroomRule,
        },])
        this.tabButtons_list.selectedIndex = 0;
    }
    private setArray(list): void {
        this.tabButtons_list.array = list;
    }
    private updateItem(cell: Laya.Box, index: number): void {
        let selected = <Laya.Sprite>cell.getChildByName("selected");
        let unselect = <Laya.Sprite>cell.getChildByName("unselect");
        let selected_text = <Laya.Text>cell.getChildByName("selected_text");
        let unselect_text = <Laya.Text>cell.getChildByName("unselect_text");
        selected_text.text = this.tabButtons_list.array[index].name;
        unselect_text.text = this.tabButtons_list.array[index].name;
        selected.visible = this.tabButtons_list.array[index].show;
        selected_text.visible = this.tabButtons_list.array[index].show;

        unselect.visible = !this.tabButtons_list.array[index].show;
        unselect_text.visible = !this.tabButtons_list.array[index].show;

    }
    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
        for (let i = 0; i < this.tabButtons_list.array.length; i++) {
            this.tabButtons_list.array[i].show = false
        }
        this.tabButtons_list.array[index].show = true;
        if (this.curRuleView)
            this.curRuleView.removeSelf();
        this.curRuleView = new (this.tabButtons_list.array[index].ruleView)();
        this.rule_group.addChild(this.curRuleView)
        // let selected = <Laya.Sprite>cell.getChildByName("selected");
        // let unselect = <Laya.Sprite>cell.getChildByName("unselect");
        // let selected_text = <Laya.Text>cell.getChildByName("selected_text");
        // let unselect_text = <Laya.Text>cell.getChildByName("unselect_text");
        // for (let i = 0; i < this.tabButtons_list.numChildren; i++) {
        //     let isShow = (index == i)
        //     selected.visible = isShow;
        //     selected_text.visible = isShow;
        //     unselect.visible = !isShow;
        //     unselect_text.visible = !isShow;
        // }
    }
}