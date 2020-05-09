import { ui } from "../../../ui/layaMaxUI";
import Handler = Laya.Handler;
import Tween = Laya.Tween;
import Button = Laya.Button;
export default class Prop extends ui.GameCommonUI.Athletics.PropUI {
  constructor() {
    super();
  }
  private Prop_Colour: number;//道具颜色
  private Prop_Wild: number;//道具万能牌
  private Prop_Number: number = -2;//道具数字
  private Prop_Sort: number;//道具排序
  public prop_leftToRight(number) {
    Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_DealCard.mp3");
    Tween.to(this.card, { scaleX: 0 }, 150, null, Handler.create(this, () => {

      this.prop_Number = number
      Tween.to(this.card, { scaleX: 1 }, 150)
    }));
  }


  public prop_topToDown(number) {
    Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_DealCard.mp3");
    Tween.to(this.card, { scaleY: 0 }, 150, null, Handler.create(this, () => {
      this.prop_Number = number
      Tween.to(this.card, { scaleY: 1 }, 150)
    }));
  }

  public set colour(data) {
    this.Prop_Colour = data
  }
  public set prop_Wild(data) {
    this.Prop_Wild = data
  }
  public set prop_Number(data) {
    this.Prop_Number = data;
    this.card.loadImage("GameCommon/Props/" + data + ".png")
  }
  public set sort(data) {
    this.Prop_Sort = data
  }
  public get colour() {
    return this.Prop_Colour
  }
  public get prop_Wild() {
    return this.Prop_Wild
  }
  public get prop_Number() {
    return this.Prop_Number
  }
  public get sort() {
    return this.Prop_Sort
  }
}