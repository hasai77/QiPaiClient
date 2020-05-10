(function () {
    'use strict';

    class CommonProgress extends Laya.Sprite {
        constructor() {
            super();
            this.m_percent = 0;
        }
        get percent() {
            return this.m_percent;
        }
        set percent(perc) {
            this.m_percent = perc > 100 ? 100 : perc;
            this.imgmask.width = this.width / 100 * this.m_percent;
        }
        onAwake() {
            this.bar = this.getChildByName("bar");
            this.imgmask = this.bar.mask;
        }
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        class APP_LoadingUI extends Laya.Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("APP_Loading");
            }
        }
        ui.APP_LoadingUI = APP_LoadingUI;
        REG("ui.APP_LoadingUI", APP_LoadingUI);
        class APP_UpdateUI extends Laya.Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("APP_Update");
            }
        }
        ui.APP_UpdateUI = APP_UpdateUI;
        REG("ui.APP_UpdateUI", APP_UpdateUI);
        class playSceneUI extends Laya.Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("playScene");
            }
        }
        ui.playSceneUI = playSceneUI;
        REG("ui.playSceneUI", playSceneUI);
        class RoomHallUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("RoomHall");
            }
        }
        ui.RoomHallUI = RoomHallUI;
        REG("ui.RoomHallUI", RoomHallUI);
    })(ui || (ui = {}));
    (function (ui) {
        var Common;
        (function (Common) {
            class PopUpUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Common/PopUp");
                }
            }
            Common.PopUpUI = PopUpUI;
            REG("ui.Common.PopUpUI", PopUpUI);
            class ToastUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Common/Toast");
                }
            }
            Common.ToastUI = ToastUI;
            REG("ui.Common.ToastUI", ToastUI);
        })(Common = ui.Common || (ui.Common = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsBull;
        (function (GameAthleticsBull) {
            class BullGameUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsBull/BullGame");
                }
            }
            GameAthleticsBull.BullGameUI = BullGameUI;
            REG("ui.GameAthleticsBull.BullGameUI", BullGameUI);
            class BullLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsBull/BullLoading");
                }
            }
            GameAthleticsBull.BullLoadingUI = BullLoadingUI;
            REG("ui.GameAthleticsBull.BullLoadingUI", BullLoadingUI);
        })(GameAthleticsBull = ui.GameAthleticsBull || (ui.GameAthleticsBull = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsBull;
        (function (GameAthleticsBull) {
            var Ruels;
            (function (Ruels) {
                class RoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsBull/Ruels/RoomRule");
                    }
                }
                Ruels.RoomRuleUI = RoomRuleUI;
                REG("ui.GameAthleticsBull.Ruels.RoomRuleUI", RoomRuleUI);
            })(Ruels = GameAthleticsBull.Ruels || (GameAthleticsBull.Ruels = {}));
        })(GameAthleticsBull = ui.GameAthleticsBull || (ui.GameAthleticsBull = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsFiftyK;
        (function (GameAthleticsFiftyK) {
            class FiveTenKloadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsFiftyK/FiveTenKloading");
                }
            }
            GameAthleticsFiftyK.FiveTenKloadingUI = FiveTenKloadingUI;
            REG("ui.GameAthleticsFiftyK.FiveTenKloadingUI", FiveTenKloadingUI);
            class FiveTenKSelectionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsFiftyK/FiveTenKSelection");
                }
            }
            GameAthleticsFiftyK.FiveTenKSelectionUI = FiveTenKSelectionUI;
            REG("ui.GameAthleticsFiftyK.FiveTenKSelectionUI", FiveTenKSelectionUI);
        })(GameAthleticsFiftyK = ui.GameAthleticsFiftyK || (ui.GameAthleticsFiftyK = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsFiftyK;
        (function (GameAthleticsFiftyK) {
            var Ruels;
            (function (Ruels) {
                class FiftyRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsFiftyK/Ruels/FiftyRoomRule");
                    }
                }
                Ruels.FiftyRoomRuleUI = FiftyRoomRuleUI;
                REG("ui.GameAthleticsFiftyK.Ruels.FiftyRoomRuleUI", FiftyRoomRuleUI);
            })(Ruels = GameAthleticsFiftyK.Ruels || (GameAthleticsFiftyK.Ruels = {}));
        })(GameAthleticsFiftyK = ui.GameAthleticsFiftyK || (ui.GameAthleticsFiftyK = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsFiveArching;
        (function (GameAthleticsFiveArching) {
            class FiveArchingloadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsFiveArching/FiveArchingloading");
                }
            }
            GameAthleticsFiveArching.FiveArchingloadingUI = FiveArchingloadingUI;
            REG("ui.GameAthleticsFiveArching.FiveArchingloadingUI", FiveArchingloadingUI);
        })(GameAthleticsFiveArching = ui.GameAthleticsFiveArching || (ui.GameAthleticsFiveArching = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsFiveArching;
        (function (GameAthleticsFiveArching) {
            var Ruels;
            (function (Ruels) {
                class FiveArchingRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsFiveArching/Ruels/FiveArchingRoomRule");
                    }
                }
                Ruels.FiveArchingRoomRuleUI = FiveArchingRoomRuleUI;
                REG("ui.GameAthleticsFiveArching.Ruels.FiveArchingRoomRuleUI", FiveArchingRoomRuleUI);
            })(Ruels = GameAthleticsFiveArching.Ruels || (GameAthleticsFiveArching.Ruels = {}));
        })(GameAthleticsFiveArching = ui.GameAthleticsFiveArching || (ui.GameAthleticsFiveArching = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsGoldenFlower;
        (function (GameAthleticsGoldenFlower) {
            class GameGoldenFlowerGameUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsGoldenFlower/GameGoldenFlowerGame");
                }
            }
            GameAthleticsGoldenFlower.GameGoldenFlowerGameUI = GameGoldenFlowerGameUI;
            REG("ui.GameAthleticsGoldenFlower.GameGoldenFlowerGameUI", GameGoldenFlowerGameUI);
            class GoldenFlowerLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsGoldenFlower/GoldenFlowerLoading");
                }
            }
            GameAthleticsGoldenFlower.GoldenFlowerLoadingUI = GoldenFlowerLoadingUI;
            REG("ui.GameAthleticsGoldenFlower.GoldenFlowerLoadingUI", GoldenFlowerLoadingUI);
        })(GameAthleticsGoldenFlower = ui.GameAthleticsGoldenFlower || (ui.GameAthleticsGoldenFlower = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsGoldenFlower;
        (function (GameAthleticsGoldenFlower) {
            var Rules;
            (function (Rules) {
                class GoldenFlowerRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsGoldenFlower/Rules/GoldenFlowerRoomRule");
                    }
                }
                Rules.GoldenFlowerRoomRuleUI = GoldenFlowerRoomRuleUI;
                REG("ui.GameAthleticsGoldenFlower.Rules.GoldenFlowerRoomRuleUI", GoldenFlowerRoomRuleUI);
            })(Rules = GameAthleticsGoldenFlower.Rules || (GameAthleticsGoldenFlower.Rules = {}));
        })(GameAthleticsGoldenFlower = ui.GameAthleticsGoldenFlower || (ui.GameAthleticsGoldenFlower = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsLandlord;
        (function (GameAthleticsLandlord) {
            class LandlordLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsLandlord/LandlordLoading");
                }
            }
            GameAthleticsLandlord.LandlordLoadingUI = LandlordLoadingUI;
            REG("ui.GameAthleticsLandlord.LandlordLoadingUI", LandlordLoadingUI);
            class LandlordSelectionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsLandlord/LandlordSelection");
                }
            }
            GameAthleticsLandlord.LandlordSelectionUI = LandlordSelectionUI;
            REG("ui.GameAthleticsLandlord.LandlordSelectionUI", LandlordSelectionUI);
        })(GameAthleticsLandlord = ui.GameAthleticsLandlord || (ui.GameAthleticsLandlord = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsLandlord;
        (function (GameAthleticsLandlord) {
            var Rules;
            (function (Rules) {
                class LandlordRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsLandlord/Rules/LandlordRoomRule");
                    }
                }
                Rules.LandlordRoomRuleUI = LandlordRoomRuleUI;
                REG("ui.GameAthleticsLandlord.Rules.LandlordRoomRuleUI", LandlordRoomRuleUI);
            })(Rules = GameAthleticsLandlord.Rules || (GameAthleticsLandlord.Rules = {}));
        })(GameAthleticsLandlord = ui.GameAthleticsLandlord || (ui.GameAthleticsLandlord = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsRunsFast;
        (function (GameAthleticsRunsFast) {
            var Rules;
            (function (Rules) {
                class RunFastRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsRunsFast/Rules/RunFastRoomRule");
                    }
                }
                Rules.RunFastRoomRuleUI = RunFastRoomRuleUI;
                REG("ui.GameAthleticsRunsFast.Rules.RunFastRoomRuleUI", RunFastRoomRuleUI);
            })(Rules = GameAthleticsRunsFast.Rules || (GameAthleticsRunsFast.Rules = {}));
        })(GameAthleticsRunsFast = ui.GameAthleticsRunsFast || (ui.GameAthleticsRunsFast = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsRunsFast;
        (function (GameAthleticsRunsFast) {
            class RunsFastLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsRunsFast/RunsFastLoading");
                }
            }
            GameAthleticsRunsFast.RunsFastLoadingUI = RunsFastLoadingUI;
            REG("ui.GameAthleticsRunsFast.RunsFastLoadingUI", RunsFastLoadingUI);
        })(GameAthleticsRunsFast = ui.GameAthleticsRunsFast || (ui.GameAthleticsRunsFast = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsStud;
        (function (GameAthleticsStud) {
            class StudLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsStud/StudLoading");
                }
            }
            GameAthleticsStud.StudLoadingUI = StudLoadingUI;
            REG("ui.GameAthleticsStud.StudLoadingUI", StudLoadingUI);
        })(GameAthleticsStud = ui.GameAthleticsStud || (ui.GameAthleticsStud = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTenHalf;
        (function (GameAthleticsTenHalf) {
            class TenHalfLoadingUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsTenHalf/TenHalfLoading");
                }
            }
            GameAthleticsTenHalf.TenHalfLoadingUI = TenHalfLoadingUI;
            REG("ui.GameAthleticsTenHalf.TenHalfLoadingUI", TenHalfLoadingUI);
        })(GameAthleticsTenHalf = ui.GameAthleticsTenHalf || (ui.GameAthleticsTenHalf = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTexas;
        (function (GameAthleticsTexas) {
            var Rules;
            (function (Rules) {
                class TexasRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsTexas/Rules/TexasRoomRule");
                    }
                }
                Rules.TexasRoomRuleUI = TexasRoomRuleUI;
                REG("ui.GameAthleticsTexas.Rules.TexasRoomRuleUI", TexasRoomRuleUI);
            })(Rules = GameAthleticsTexas.Rules || (GameAthleticsTexas.Rules = {}));
        })(GameAthleticsTexas = ui.GameAthleticsTexas || (ui.GameAthleticsTexas = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTexas;
        (function (GameAthleticsTexas) {
            class TexasLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsTexas/TexasLoading");
                }
            }
            GameAthleticsTexas.TexasLoadingUI = TexasLoadingUI;
            REG("ui.GameAthleticsTexas.TexasLoadingUI", TexasLoadingUI);
        })(GameAthleticsTexas = ui.GameAthleticsTexas || (ui.GameAthleticsTexas = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsThanchicken;
        (function (GameAthleticsThanchicken) {
            var Rules;
            (function (Rules) {
                class ThanchickenCreateroomUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsThanchicken/Rules/ThanchickenCreateroom");
                    }
                }
                Rules.ThanchickenCreateroomUI = ThanchickenCreateroomUI;
                REG("ui.GameAthleticsThanchicken.Rules.ThanchickenCreateroomUI", ThanchickenCreateroomUI);
            })(Rules = GameAthleticsThanchicken.Rules || (GameAthleticsThanchicken.Rules = {}));
        })(GameAthleticsThanchicken = ui.GameAthleticsThanchicken || (ui.GameAthleticsThanchicken = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsThanchicken;
        (function (GameAthleticsThanchicken) {
            class ThanChickenLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsThanchicken/ThanChickenLoading");
                }
            }
            GameAthleticsThanchicken.ThanChickenLoadingUI = ThanChickenLoadingUI;
            REG("ui.GameAthleticsThanchicken.ThanChickenLoadingUI", ThanChickenLoadingUI);
        })(GameAthleticsThanchicken = ui.GameAthleticsThanchicken || (ui.GameAthleticsThanchicken = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsThirteenBets;
        (function (GameAthleticsThirteenBets) {
            var Rules;
            (function (Rules) {
                class ThirteenBetsRoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsThirteenBets/Rules/ThirteenBetsRoomRule");
                    }
                }
                Rules.ThirteenBetsRoomRuleUI = ThirteenBetsRoomRuleUI;
                REG("ui.GameAthleticsThirteenBets.Rules.ThirteenBetsRoomRuleUI", ThirteenBetsRoomRuleUI);
            })(Rules = GameAthleticsThirteenBets.Rules || (GameAthleticsThirteenBets.Rules = {}));
        })(GameAthleticsThirteenBets = ui.GameAthleticsThirteenBets || (ui.GameAthleticsThirteenBets = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsThirteenBets;
        (function (GameAthleticsThirteenBets) {
            class ThirteenBetsloadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsThirteenBets/ThirteenBetsloading");
                }
            }
            GameAthleticsThirteenBets.ThirteenBetsloadingUI = ThirteenBetsloadingUI;
            REG("ui.GameAthleticsThirteenBets.ThirteenBetsloadingUI", ThirteenBetsloadingUI);
        })(GameAthleticsThirteenBets = ui.GameAthleticsThirteenBets || (ui.GameAthleticsThirteenBets = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsThreeDuke;
        (function (GameAthleticsThreeDuke) {
            var Rules;
            (function (Rules) {
                class ThreeDukeRoomRuleUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsThreeDuke/Rules/ThreeDukeRoomRule");
                    }
                }
                Rules.ThreeDukeRoomRuleUI = ThreeDukeRoomRuleUI;
                REG("ui.GameAthleticsThreeDuke.Rules.ThreeDukeRoomRuleUI", ThreeDukeRoomRuleUI);
            })(Rules = GameAthleticsThreeDuke.Rules || (GameAthleticsThreeDuke.Rules = {}));
        })(GameAthleticsThreeDuke = ui.GameAthleticsThreeDuke || (ui.GameAthleticsThreeDuke = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsThreeDuke;
        (function (GameAthleticsThreeDuke) {
            class ThreeDukeloadingUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsThreeDuke/ThreeDukeloading");
                }
            }
            GameAthleticsThreeDuke.ThreeDukeloadingUI = ThreeDukeloadingUI;
            REG("ui.GameAthleticsThreeDuke.ThreeDukeloadingUI", ThreeDukeloadingUI);
        })(GameAthleticsThreeDuke = ui.GameAthleticsThreeDuke || (ui.GameAthleticsThreeDuke = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTwentyone;
        (function (GameAthleticsTwentyone) {
            var Rules;
            (function (Rules) {
                class TwentyoneroomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsTwentyone/Rules/TwentyoneroomRule");
                    }
                }
                Rules.TwentyoneroomRuleUI = TwentyoneroomRuleUI;
                REG("ui.GameAthleticsTwentyone.Rules.TwentyoneroomRuleUI", TwentyoneroomRuleUI);
            })(Rules = GameAthleticsTwentyone.Rules || (GameAthleticsTwentyone.Rules = {}));
        })(GameAthleticsTwentyone = ui.GameAthleticsTwentyone || (ui.GameAthleticsTwentyone = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTwentyone;
        (function (GameAthleticsTwentyone) {
            class TwentyOneloadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsTwentyone/TwentyOneloading");
                }
            }
            GameAthleticsTwentyone.TwentyOneloadingUI = TwentyOneloadingUI;
            REG("ui.GameAthleticsTwentyone.TwentyOneloadingUI", TwentyOneloadingUI);
        })(GameAthleticsTwentyone = ui.GameAthleticsTwentyone || (ui.GameAthleticsTwentyone = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTwoEight;
        (function (GameAthleticsTwoEight) {
            var Rules;
            (function (Rules) {
                class TwoEightroomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameAthleticsTwoEight/Rules/TwoEightroomRule");
                    }
                }
                Rules.TwoEightroomRuleUI = TwoEightroomRuleUI;
                REG("ui.GameAthleticsTwoEight.Rules.TwoEightroomRuleUI", TwoEightroomRuleUI);
            })(Rules = GameAthleticsTwoEight.Rules || (GameAthleticsTwoEight.Rules = {}));
        })(GameAthleticsTwoEight = ui.GameAthleticsTwoEight || (ui.GameAthleticsTwoEight = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameAthleticsTwoEight;
        (function (GameAthleticsTwoEight) {
            class TwoEightloadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameAthleticsTwoEight/TwoEightloading");
                }
            }
            GameAthleticsTwoEight.TwoEightloadingUI = TwoEightloadingUI;
            REG("ui.GameAthleticsTwoEight.TwoEightloadingUI", TwoEightloadingUI);
        })(GameAthleticsTwoEight = ui.GameAthleticsTwoEight || (ui.GameAthleticsTwoEight = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameCommonUI;
        (function (GameCommonUI) {
            var Athletics;
            (function (Athletics) {
                class BetUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Bet");
                    }
                }
                Athletics.BetUI = BetUI;
                REG("ui.GameCommonUI.Athletics.BetUI", BetUI);
                class ChipUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Chip");
                    }
                }
                Athletics.ChipUI = ChipUI;
                REG("ui.GameCommonUI.Athletics.ChipUI", ChipUI);
                class DealUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Deal");
                    }
                }
                Athletics.DealUI = DealUI;
                REG("ui.GameCommonUI.Athletics.DealUI", DealUI);
                class DissolutionUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Dissolution");
                    }
                }
                Athletics.DissolutionUI = DissolutionUI;
                REG("ui.GameCommonUI.Athletics.DissolutionUI", DissolutionUI);
                class FlickerUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Flicker");
                    }
                }
                Athletics.FlickerUI = FlickerUI;
                REG("ui.GameCommonUI.Athletics.FlickerUI", FlickerUI);
                class PlayPropUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/PlayProp");
                    }
                }
                Athletics.PlayPropUI = PlayPropUI;
                REG("ui.GameCommonUI.Athletics.PlayPropUI", PlayPropUI);
                class PropUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Prop");
                    }
                }
                Athletics.PropUI = PropUI;
                REG("ui.GameCommonUI.Athletics.PropUI", PropUI);
                class PropListUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/PropList");
                    }
                }
                Athletics.PropListUI = PropListUI;
                REG("ui.GameCommonUI.Athletics.PropListUI", PropListUI);
                class RobUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Rob");
                    }
                }
                Athletics.RobUI = RobUI;
                REG("ui.GameCommonUI.Athletics.RobUI", RobUI);
                class TansAniUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/TansAni");
                    }
                }
                Athletics.TansAniUI = TansAniUI;
                REG("ui.GameCommonUI.Athletics.TansAniUI", TansAniUI);
            })(Athletics = GameCommonUI.Athletics || (GameCommonUI.Athletics = {}));
        })(GameCommonUI = ui.GameCommonUI || (ui.GameCommonUI = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameCommonUI;
        (function (GameCommonUI) {
            class CommonCreatRoomUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/CommonCreatRoom");
                }
            }
            GameCommonUI.CommonCreatRoomUI = CommonCreatRoomUI;
            REG("ui.GameCommonUI.CommonCreatRoomUI", CommonCreatRoomUI);
            class CommonGameTypeSelectionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/CommonGameTypeSelection");
                }
            }
            GameCommonUI.CommonGameTypeSelectionUI = CommonGameTypeSelectionUI;
            REG("ui.GameCommonUI.CommonGameTypeSelectionUI", CommonGameTypeSelectionUI);
            class FlutterTextUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/FlutterText");
                }
            }
            GameCommonUI.FlutterTextUI = FlutterTextUI;
            REG("ui.GameCommonUI.FlutterTextUI", FlutterTextUI);
        })(GameCommonUI = ui.GameCommonUI || (ui.GameCommonUI = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameCommonUI;
        (function (GameCommonUI) {
            var HundredGame;
            (function (HundredGame) {
                class BankerUserUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/HundredGame/BankerUser");
                    }
                }
                HundredGame.BankerUserUI = BankerUserUI;
                REG("ui.GameCommonUI.HundredGame.BankerUserUI", BankerUserUI);
                class BetUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/HundredGame/Bet");
                    }
                }
                HundredGame.BetUI = BetUI;
                REG("ui.GameCommonUI.HundredGame.BetUI", BetUI);
                class NumChipUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/HundredGame/NumChip");
                    }
                }
                HundredGame.NumChipUI = NumChipUI;
                REG("ui.GameCommonUI.HundredGame.NumChipUI", NumChipUI);
            })(HundredGame = GameCommonUI.HundredGame || (GameCommonUI.HundredGame = {}));
        })(GameCommonUI = ui.GameCommonUI || (ui.GameCommonUI = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameHundredsBenzBmw;
        (function (GameHundredsBenzBmw) {
            class BankerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Banker");
                }
            }
            GameHundredsBenzBmw.BankerUI = BankerUI;
            REG("ui.GameHundredsBenzBmw.BankerUI", BankerUI);
            class BenzBmwloadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/BenzBmwloading");
                }
            }
            GameHundredsBenzBmw.BenzBmwloadingUI = BenzBmwloadingUI;
            REG("ui.GameHundredsBenzBmw.BenzBmwloadingUI", BenzBmwloadingUI);
            class ListMenuUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/ListMenu");
                }
            }
            GameHundredsBenzBmw.ListMenuUI = ListMenuUI;
            REG("ui.GameHundredsBenzBmw.ListMenuUI", ListMenuUI);
            class loadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/loading");
                }
            }
            GameHundredsBenzBmw.loadingUI = loadingUI;
            REG("ui.GameHundredsBenzBmw.loadingUI", loadingUI);
            class PlayerUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Player");
                }
            }
            GameHundredsBenzBmw.PlayerUI = PlayerUI;
            REG("ui.GameHundredsBenzBmw.PlayerUI", PlayerUI);
            class PlayerlistUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Playerlist");
                }
            }
            GameHundredsBenzBmw.PlayerlistUI = PlayerlistUI;
            REG("ui.GameHundredsBenzBmw.PlayerlistUI", PlayerlistUI);
            class RoomselectionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Roomselection");
                }
            }
            GameHundredsBenzBmw.RoomselectionUI = RoomselectionUI;
            REG("ui.GameHundredsBenzBmw.RoomselectionUI", RoomselectionUI);
            class RuleUI extends Laya.Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Rule");
                }
            }
            GameHundredsBenzBmw.RuleUI = RuleUI;
            REG("ui.GameHundredsBenzBmw.RuleUI", RuleUI);
            class SettingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Setting");
                }
            }
            GameHundredsBenzBmw.SettingUI = SettingUI;
            REG("ui.GameHundredsBenzBmw.SettingUI", SettingUI);
            class SpeakUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Speak");
                }
            }
            GameHundredsBenzBmw.SpeakUI = SpeakUI;
            REG("ui.GameHundredsBenzBmw.SpeakUI", SpeakUI);
            class TableUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Table");
                }
            }
            GameHundredsBenzBmw.TableUI = TableUI;
            REG("ui.GameHundredsBenzBmw.TableUI", TableUI);
            class TextfailureUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Textfailure");
                }
            }
            GameHundredsBenzBmw.TextfailureUI = TextfailureUI;
            REG("ui.GameHundredsBenzBmw.TextfailureUI", TextfailureUI);
            class victoryUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/victory");
                }
            }
            GameHundredsBenzBmw.victoryUI = victoryUI;
            REG("ui.GameHundredsBenzBmw.victoryUI", victoryUI);
            class WithdrawmoneyUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBenzBmw/Withdrawmoney");
                }
            }
            GameHundredsBenzBmw.WithdrawmoneyUI = WithdrawmoneyUI;
            REG("ui.GameHundredsBenzBmw.WithdrawmoneyUI", WithdrawmoneyUI);
        })(GameHundredsBenzBmw = ui.GameHundredsBenzBmw || (ui.GameHundredsBenzBmw = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameHundredsBull;
        (function (GameHundredsBull) {
            class HundredsBullUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsBull/HundredsBull");
                }
            }
            GameHundredsBull.HundredsBullUI = HundredsBullUI;
            REG("ui.GameHundredsBull.HundredsBullUI", HundredsBullUI);
        })(GameHundredsBull = ui.GameHundredsBull || (ui.GameHundredsBull = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameHundredsDice;
        (function (GameHundredsDice) {
            class DiceUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsDice/Dice");
                }
            }
            GameHundredsDice.DiceUI = DiceUI;
            REG("ui.GameHundredsDice.DiceUI", DiceUI);
        })(GameHundredsDice = ui.GameHundredsDice || (ui.GameHundredsDice = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameHundredsFruit;
        (function (GameHundredsFruit) {
            class FruitLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsFruit/FruitLoading");
                }
            }
            GameHundredsFruit.FruitLoadingUI = FruitLoadingUI;
            REG("ui.GameHundredsFruit.FruitLoadingUI", FruitLoadingUI);
            class FruitSelectionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsFruit/FruitSelection");
                }
            }
            GameHundredsFruit.FruitSelectionUI = FruitSelectionUI;
            REG("ui.GameHundredsFruit.FruitSelectionUI", FruitSelectionUI);
            class FruitTableUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameHundredsFruit/FruitTable");
                }
            }
            GameHundredsFruit.FruitTableUI = FruitTableUI;
            REG("ui.GameHundredsFruit.FruitTableUI", FruitTableUI);
        })(GameHundredsFruit = ui.GameHundredsFruit || (ui.GameHundredsFruit = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var AgentPromotion;
            (function (AgentPromotion) {
                class AgentPromotionUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/AgentPromotion/AgentPromotion");
                    }
                }
                AgentPromotion.AgentPromotionUI = AgentPromotionUI;
                REG("ui.Hall.AgentPromotion.AgentPromotionUI", AgentPromotionUI);
            })(AgentPromotion = Hall.AgentPromotion || (Hall.AgentPromotion = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Announcement;
            (function (Announcement) {
                class AnnouncementUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Announcement/Announcement");
                    }
                }
                Announcement.AnnouncementUI = AnnouncementUI;
                REG("ui.Hall.Announcement.AnnouncementUI", AnnouncementUI);
            })(Announcement = Hall.Announcement || (Hall.Announcement = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var CustomerService;
            (function (CustomerService) {
                class CustomerServiceUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/CustomerService/CustomerService");
                    }
                }
                CustomerService.CustomerServiceUI = CustomerServiceUI;
                REG("ui.Hall.CustomerService.CustomerServiceUI", CustomerServiceUI);
            })(CustomerService = Hall.CustomerService || (Hall.CustomerService = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var DissolutionRoom;
            (function (DissolutionRoom) {
                class DissolutionRoomUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/DissolutionRoom/DissolutionRoom");
                    }
                }
                DissolutionRoom.DissolutionRoomUI = DissolutionRoomUI;
                REG("ui.Hall.DissolutionRoom.DissolutionRoomUI", DissolutionRoomUI);
                class DissolutionRoomConfirmUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/DissolutionRoom/DissolutionRoomConfirm");
                    }
                }
                DissolutionRoom.DissolutionRoomConfirmUI = DissolutionRoomConfirmUI;
                REG("ui.Hall.DissolutionRoom.DissolutionRoomConfirmUI", DissolutionRoomConfirmUI);
            })(DissolutionRoom = Hall.DissolutionRoom || (Hall.DissolutionRoom = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            class GameQuickChatUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/GameQuickChat");
                }
            }
            Hall.GameQuickChatUI = GameQuickChatUI;
            REG("ui.Hall.GameQuickChatUI", GameQuickChatUI);
            class HallUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/Hall");
                }
            }
            Hall.HallUI = HallUI;
            REG("ui.Hall.HallUI", HallUI);
            class HealthGameReminderUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/HealthGameReminder");
                }
            }
            Hall.HealthGameReminderUI = HealthGameReminderUI;
            REG("ui.Hall.HealthGameReminderUI", HealthGameReminderUI);
            class InvitationCodeUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/InvitationCode");
                }
            }
            Hall.InvitationCodeUI = InvitationCodeUI;
            REG("ui.Hall.InvitationCodeUI", InvitationCodeUI);
            class RecordShowUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/RecordShow");
                }
            }
            Hall.RecordShowUI = RecordShowUI;
            REG("ui.Hall.RecordShowUI", RecordShowUI);
            class VictoryShowUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/VictoryShow");
                }
            }
            Hall.VictoryShowUI = VictoryShowUI;
            REG("ui.Hall.VictoryShowUI", VictoryShowUI);
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Hundredsofpeople;
            (function (Hundredsofpeople) {
                class HundredspkUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Hundredsofpeople/Hundredspk");
                    }
                }
                Hundredsofpeople.HundredspkUI = HundredspkUI;
                REG("ui.Hall.Hundredsofpeople.HundredspkUI", HundredspkUI);
                class HundredsSelectionUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Hundredsofpeople/HundredsSelection");
                    }
                }
                Hundredsofpeople.HundredsSelectionUI = HundredsSelectionUI;
                REG("ui.Hall.Hundredsofpeople.HundredsSelectionUI", HundredsSelectionUI);
            })(Hundredsofpeople = Hall.Hundredsofpeople || (Hall.Hundredsofpeople = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var MailBox;
            (function (MailBox) {
                class MailUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/MailBox/Mail");
                    }
                }
                MailBox.MailUI = MailUI;
                REG("ui.Hall.MailBox.MailUI", MailUI);
            })(MailBox = Hall.MailBox || (Hall.MailBox = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Mall;
            (function (Mall) {
                class MallUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Mall/Mall");
                    }
                }
                Mall.MallUI = MallUI;
                REG("ui.Hall.Mall.MallUI", MallUI);
            })(Mall = Hall.Mall || (Hall.Mall = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Promotions;
            (function (Promotions) {
                class PromotionsUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Promotions/Promotions");
                    }
                }
                Promotions.PromotionsUI = PromotionsUI;
                REG("ui.Hall.Promotions.PromotionsUI", PromotionsUI);
            })(Promotions = Hall.Promotions || (Hall.Promotions = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Recharge;
            (function (Recharge) {
                class RechargeUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Recharge/Recharge");
                    }
                }
                Recharge.RechargeUI = RechargeUI;
                REG("ui.Hall.Recharge.RechargeUI", RechargeUI);
            })(Recharge = Hall.Recharge || (Hall.Recharge = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Safe;
            (function (Safe) {
                class SafeUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Safe/Safe");
                    }
                }
                Safe.SafeUI = SafeUI;
                REG("ui.Hall.Safe.SafeUI", SafeUI);
            })(Safe = Hall.Safe || (Hall.Safe = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Set;
            (function (Set) {
                class SetUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Set/Set");
                    }
                }
                Set.SetUI = SetUI;
                REG("ui.Hall.Set.SetUI", SetUI);
            })(Set = Hall.Set || (Hall.Set = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var TeaHouse;
            (function (TeaHouse) {
                class CreateTeaHouseUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/TeaHouse/CreateTeaHouse");
                    }
                }
                TeaHouse.CreateTeaHouseUI = CreateTeaHouseUI;
                REG("ui.Hall.TeaHouse.CreateTeaHouseUI", CreateTeaHouseUI);
                class HouseItemUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/TeaHouse/HouseItem");
                    }
                }
                TeaHouse.HouseItemUI = HouseItemUI;
                REG("ui.Hall.TeaHouse.HouseItemUI", HouseItemUI);
            })(TeaHouse = Hall.TeaHouse || (Hall.TeaHouse = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var UserInfo;
            (function (UserInfo) {
                class UserInfoUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/UserInfo/UserInfo");
                    }
                }
                UserInfo.UserInfoUI = UserInfoUI;
                REG("ui.Hall.UserInfo.UserInfoUI", UserInfoUI);
            })(UserInfo = Hall.UserInfo || (Hall.UserInfo = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Withdrawal;
            (function (Withdrawal) {
                class WithdrawalUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Withdrawal/Withdrawal");
                    }
                }
                Withdrawal.WithdrawalUI = WithdrawalUI;
                REG("ui.Hall.Withdrawal.WithdrawalUI", WithdrawalUI);
            })(Withdrawal = Hall.Withdrawal || (Hall.Withdrawal = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Login;
        (function (Login) {
            class accountLoginUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/accountLogin");
                }
            }
            Login.accountLoginUI = accountLoginUI;
            REG("ui.Login.accountLoginUI", accountLoginUI);
            class forgetPassUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/forgetPass");
                }
            }
            Login.forgetPassUI = forgetPassUI;
            REG("ui.Login.forgetPassUI", forgetPassUI);
            class LoginUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/Login");
                }
            }
            Login.LoginUI = LoginUI;
            REG("ui.Login.LoginUI", LoginUI);
            class rigisteraccountUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/rigisteraccount");
                }
            }
            Login.rigisteraccountUI = rigisteraccountUI;
            REG("ui.Login.rigisteraccountUI", rigisteraccountUI);
            class wachatLoginUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/wachatLogin");
                }
            }
            Login.wachatLoginUI = wachatLoginUI;
            REG("ui.Login.wachatLoginUI", wachatLoginUI);
        })(Login = ui.Login || (ui.Login = {}));
    })(ui || (ui = {}));

    class CommonPopup extends ui.Common.PopUpUI {
        constructor(str, callBack) {
            super();
            this.callBack = callBack;
        }
        setText(str) {
            this.msg_text.text = str;
        }
    }

    let BaseConfig = {
        socket: "ws://127.0.0.1:1920/Websocket",
    };

    class network {
        constructor() {
            this.pause = false;
            this.eList = new Array();
            this.types = {};
            this.byte = new Laya.Byte();
            this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
            this.socket = new Laya.Socket();
            this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
            this.connect();
        }
        static getinstance() {
            if (this.instance == null)
                this.instance = new network();
            return this.instance;
        }
        addNetEvent(type, handler) {
            this.types[type] = handler;
        }
        removeEvent(type) {
            if (this.types[type])
                delete this.types[type];
        }
        connect() {
            this.socket.connectByUrl(BaseConfig.socket);
            this.socket.on(Laya.Event.OPEN, this, this.openHandler);
            this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
            this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
            this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
        }
        pauseEvent() {
            this.pause = true;
        }
        resumeEvent() {
            this.pause = false;
        }
        openHandler(event = null) {
            console.log("链接成功");
            Laya.timer.frameLoop(1, this, () => {
                if (this.pause || !this.types || this.eList.length == 0)
                    return;
                while (this.eList.length) {
                    let msg = this.eList[0];
                    let name = msg.Name || msg.name;
                    console.log(name);
                    if (this.types[name])
                        this.types[name](msg.Data);
                    else
                        console.log("noRigster", name);
                    this.eList.shift();
                }
            });
        }
        receiveHandler(msg = null) {
            let data = JSON.parse(msg);
            console.log(data);
            this.eList.push(data);
        }
        closeHandler(e = null) {
            console.log("close", e);
        }
        errorHandler(e = null) {
            console.log("error", e);
        }
        sendMsg(type, data) {
            data.Name = type;
            this.socket.send(JSON.stringify(data));
        }
    }

    class CommonTaost extends ui.Common.ToastUI {
        constructor(str) {
            super();
            this.str = str;
        }
        onAwake() {
            this.msg_text.text = this.str;
            this.x = Laya.stage.width / 2 - this.width / 2;
            this.y = 150;
            this.zOrder = 6666666;
            Laya.Tween.to(this, { y: this.y - 150, alpha: 0 }, 1500, null, Laya.Handler.create(this, () => {
                this.removeSelf();
            }));
        }
    }

    class FlutterText extends ui.GameCommonUI.FlutterTextUI {
        constructor(text) {
            super();
            this.text = text;
        }
        onAwake() {
            this.number_text.text = this.text;
        }
        startAni() {
            Laya.Tween.to(this, { y: this.y - 150, alpha: 0 }, 1500, null, Laya.Handler.create(this, () => {
                this.removeSelf();
            }));
        }
    }

    var Handler = Laya.Handler;
    var Tween = Laya.Tween;
    class Chip extends ui.GameCommonUI.Athletics.ChipUI {
        constructor() {
            super();
        }
        toTargerShow(target, compFunc) {
            Tween.to(this, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
                Tween.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, null, Handler.create(this, () => {
                    Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, null, Handler.create(this, () => {
                        compFunc && compFunc();
                    }));
                }));
            }));
        }
        toTargerHide(target) {
            Tween.to(this, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
                this.removeSelf();
            }));
        }
    }

    var TimeLine = Laya.TimeLine;
    var Event = Laya.Event;
    class PublicFun {
        constructor() {
            this.timeLine = new TimeLine();
            this.viewList = [];
        }
        static getinstance() {
            if (this.instance == null)
                this.instance = new PublicFun();
            return this.instance;
        }
        userChip(user, recvPanel) {
            let chip = new Chip();
            chip.x = user.x - recvPanel.x;
            chip.y = user.y - recvPanel.y;
            recvPanel.addChild(chip);
            chip.toTargerShow(this.getRecvPos(recvPanel), null);
            return chip;
        }
        chipUser(user, recvPanel, start, end) {
            let target = { x: user.x - recvPanel.x, y: user.y - recvPanel.y };
            console.log(recvPanel.numChildren, end);
            for (let i = start; i < end; i++) {
                recvPanel.getChildAt(i).toTargerHide(target);
            }
        }
        showText(target, num) {
            let text = new FlutterText(num);
            target.addChild(text);
            text.x = target.pivotX;
            text.y = target.pivotY;
            text.startAni();
        }
        showAlert(node, back) {
            if (!node.getChildByName("back_gray")) {
                let rect = new Laya.Sprite();
                rect.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#333333");
                rect.name = "back_gray";
                rect.zOrder = -9999999;
                rect.alpha = 0.3;
                node.addChild(rect);
            }
            this.viewList.push(node);
            this.startAlert(node);
        }
        startAlert(node) {
            this.setCenter(node);
            let x = Laya.stage.width / 2;
            let y = Laya.stage.height / 2;
            node.visible = true;
            node.active = true;
            node.x = x;
            node.y = y;
            node.scaleX = 0;
            node.scaleY = 0;
            this.timeLine = new TimeLine();
            this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
                .addLabel("turnLeft", 0).to(node, { scaleX: 1, scaleY: 1 }, 100, null, 0);
            this.timeLine.play(0, false);
            this.timeLine.on(Event.COMPLETE, this, this.onComplete);
            this.timeLine.on(Event.LABEL, this, this.onLabel);
        }
        hideAlert(node, completeFun) {
            this.timeLine = new TimeLine();
            this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
                .addLabel("turnDown", 0).to(node, { scaleX: 0, scaleY: 0 }, 200, null, 0);
            this.timeLine.play(0, false);
            this.timeLine.on(Event.COMPLETE, this, () => {
                node.active = false;
                node.visible = false;
                completeFun && completeFun();
                let view = this.viewList.pop();
                view && view.onHide && view.onHide();
            });
        }
        showConfirm(str, callBack) {
            let box = new CommonPopup(str, callBack);
            let self = this;
            box.onAwake = function () {
                this.setText(str);
                this.close_btn.on(Event.CLICK, this, () => {
                    self.hideAlert(this, () => this.removeSelf());
                });
                this.cancel_btn.on(Event.CLICK, this, () => {
                    self.hideAlert(this, () => this.removeSelf());
                });
                this.confirm_btn.on(Event.CLICK, this, () => {
                    this.callBack && this.callBack();
                    self.hideAlert(this, () => this.removeSelf());
                });
                let isHide = (this.callBack != null);
                this.confirm_btn.visible = isHide;
                this.cancel_btn.visible = isHide;
            };
            Laya.stage.addChild(box);
            this.showAlert(box);
        }
        showTaost(str) {
            Laya.stage.addChild(new CommonTaost(str));
        }
        setCenter(node) {
            let rect = node.getBounds();
            node.pivotX = (rect.width || node.width) / 2;
            node.pivotY = (rect.height || node.height) / 2;
            node.x += node.pivotX;
            node.y += node.pivotY;
        }
        onComplete() {
        }
        onLabel(label) {
        }
        getWorldScale(target) {
            let x = target.scaleX;
            let y = target.scaleY;
            let parent = target.parent;
            while (parent != Laya.stage) {
                x *= parent.scaleX;
                y *= parent.scaleY;
                parent = parent.parent;
            }
            return { x, y };
        }
        getWorldPos(target) {
            let x = target.x;
            let y = target.y;
            let parent = target.parent;
            while (parent != Laya.stage) {
                x += parent.x;
                y += parent.y;
                parent = parent.parent;
            }
            return { x, y };
        }
        getRecvPos(target) {
            let x = Math.random() * (target.width - 20) - 20;
            let y = Math.random() * (target.height - 20) - 20;
            return { x, y };
        }
        getMineIndex(list, mineId) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].UserID == mineId)
                    return i;
            }
            return -1;
        }
        getPUserPos(myPos, OtherPos, maxPlayer) {
            let pos = OtherPos - myPos;
            if (pos < 0) {
                pos += maxPlayer;
            }
            return pos;
        }
    }

    var Handler$1 = Laya.Handler;
    class SceneManager {
        constructor() {
            this.sceneList = {};
            this.init();
        }
        ;
        static getinstance() {
            if (this.instance == null)
                this.instance = new SceneManager();
            return this.instance;
        }
        rigesterScene(name, param) {
            this.sceneList[name] = param;
        }
        init() {
            this.rigesterScene("Login", { url: "./Login/Login.scene" });
            this.rigesterScene("Hall", { url: "./Hall/Hall.scene" });
            this.rigesterScene("GameAthleticsBull", { url: "./GameAthleticsBull/BullGame.scene" });
        }
        changeScene(name, loadPage, removeCur = true) {
            loadPage.onAwake = () => {
                Laya.Scene.open;
                Laya.Scene.load(this.sceneList[name].url, Handler$1.create(this, (scene) => {
                    if (this.curScene) {
                        this.curScene.destroy();
                    }
                    Laya.timer.once(500, this, () => {
                        Laya.Scene.root.addChild(scene);
                        this.curScene = scene;
                        loadPage.removeSelf();
                    });
                }), Handler$1.create(this, (e) => {
                    loadPage.progress.percent = (e * 100);
                }, null, false));
            };
            Laya.stage.addChild(loadPage);
        }
    }

    class userInfoData {
        constructor() {
            this.id = 888889;
            this.money = 675412;
            this.nickName = "啦啦啦";
            this.diamond = 45623;
            this.safeMoney = 6541;
        }
        static getinstance() {
            if (this.instance == null)
                this.instance = new userInfoData();
            return this.instance;
        }
    }

    class SnedNet {
        constructor() {
            this.netWork = network.getinstance();
        }
        static getinstance() {
            if (this.instance == null)
                this.instance = new SnedNet();
            return this.instance;
        }
        sendCreatGame(data) {
            this.netWork.sendMsg("GameCommon/CreateGame", data);
        }
        sendJoinRoom(data) {
            this.netWork.sendMsg("GameCommon/GameAction", data);
        }
        sendAthleticsAddDeal(data) {
            this.netWork.sendMsg("GameCommon.GameAction.Athletics.AddDeal.request", data);
        }
    }

    class base {
        constructor() {
            this.netWork = network.getinstance();
            this.publicFun = PublicFun.getinstance();
            this.sceneManager = SceneManager.getinstance();
            this.userInfo = userInfoData.getinstance();
            this.sendNet = SnedNet.getinstance();
        }
        static getinstance() {
            if (this.instance == null)
                this.instance = new base();
            return this.instance;
        }
    }
    var Base = base.getinstance();

    var Event$1 = Laya.Event;
    var Tween$1 = Laya.Tween;
    class ActionButton extends Laya.Button {
        constructor(res) {
            super(res);
            this.on(Event$1.MOUSE_DOWN, this, () => {
                Tween$1.to(this, { scaleX: 0.9, scaleY: 0.9 }, 100);
                Laya.SoundManager.playSound("GameCommon/sound/Game_Common_Button.mp3");
            });
            this.on(Event$1.MOUSE_UP, this, () => {
                Tween$1.to(this, { scaleX: 1, scaleY: 1 }, 100);
            });
            this.on(Event$1.MOUSE_OUT, this, () => {
                Tween$1.to(this, { scaleX: 1, scaleY: 1 }, 100);
            });
        }
        onComplete() {
            console.log("播放完成");
        }
        onAwake() {
            this.stateNum = 1;
            Base.publicFun.setCenter(this);
        }
    }

    class EventModel {
        constructor() {
            this.EventListener = [];
        }
        AddEventListener(fun) {
            this.EventListener.push(fun);
        }
        RemoveEventListener(fun) {
            let Index = this.EventListener.indexOf(fun);
            this.EventListener.splice(Index, 1);
        }
        Call(caller, data) {
            for (let i = 0; i < this.EventListener.length; i++) {
                this.EventListener[i](caller, data, i);
            }
            return false;
        }
    }

    class GameEventModel {
        constructor(GameEventName, GameUI, Game) {
            this.GameInitialization = new EventModel();
            this.GameInningInitialized = new EventModel();
            this.GameUserLostConnection = new EventModel();
            this.GameUserConnection = new EventModel();
            this.GameEventLoadInitialization = new EventModel();
            this.GameEventEnter = new EventModel();
            this.GameEventLeave = new EventModel();
            this.Game = Game;
            this.GameEventName = GameEventName;
            this.UI = GameUI;
        }
        RegisterListen() {
            Base.netWork.addNetEvent("GameAction." + this.GameEventName + ".Initialization", (data) => {
                this.GameInitialization.Call(this, data);
            });
            Base.netWork.addNetEvent("GameAction." + this.GameEventName + ".InningInitialized", (data) => {
                this.GameInningInitialized.Call(this, data);
            });
            Base.netWork.addNetEvent("GameAction." + this.GameEventName + ".UserLostConnection", (data) => {
                this.GameUserLostConnection.Call(this, data);
            });
            Base.netWork.addNetEvent("GameAction." + this.GameEventName + ".UserConnection", (data) => {
                this.GameEventLoadInitialization.Call(this, data);
            });
            Base.netWork.addNetEvent("GameAction." + this.GameEventName + ".Enter", (data) => {
                this.GameEventEnter.Call(this, data);
            });
            Base.netWork.addNetEvent("GameAction." + this.GameEventName + ".Over", (data) => {
                this.GameEventLeave.Call(this, data);
            });
        }
        RemoveListen() {
        }
    }

    class BullGameBet extends GameEventModel {
        constructor(GameEventName, GameUI, Game) {
            super(GameEventName, GameUI, Game);
            this.GameInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameInningInitialized.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserLostConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventLoadInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventEnter.AddEventListener((data) => {
                this.UI.gameStatus_view.startBet();
            });
            this.GameEventLeave.AddEventListener((data) => {
                console.log(data);
            });
            this.RegisterListen();
        }
    }

    class BullGameDeal extends GameEventModel {
        constructor(GameEventName, GameUI, Game) {
            super(GameEventName, GameUI, Game);
            this.GameInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameInningInitialized.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserLostConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventLoadInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventEnter.AddEventListener((data) => {
                this.UI.hideAllReady();
            });
            this.GameEventLeave.AddEventListener((data) => {
                console.log(data);
            });
            this.RegisterListen();
        }
    }

    class BullGameReady extends GameEventModel {
        constructor(GameEventName, GameUI, Game) {
            super(GameEventName, GameUI, Game);
            this.GameInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameInningInitialized.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserLostConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventLoadInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventEnter.AddEventListener((data) => {
            });
            this.GameEventLeave.AddEventListener((data) => {
                console.log(data);
            });
            this.RegisterListen();
        }
    }

    class BullGameNext extends GameEventModel {
        constructor(GameEventName, GameUI, Game) {
            super(GameEventName, GameUI, Game);
            this.GameInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameInningInitialized.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserLostConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventLoadInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventEnter.AddEventListener((data) => {
                this.UI.initUsers();
            });
            this.GameEventLeave.AddEventListener((data) => {
                console.log(data);
            });
            this.RegisterListen();
        }
    }

    class BullGameShowProp extends GameEventModel {
        constructor(GameEventName, GameUI, Game) {
            super(GameEventName, GameUI, Game);
            this.GameInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameInningInitialized.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserLostConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameUserConnection.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventLoadInitialization.AddEventListener((data) => {
                console.log(data);
            });
            this.GameEventEnter.AddEventListener((data) => {
                this.UI.hideBets();
            });
            this.GameEventLeave.AddEventListener((data) => {
                console.log(data);
            });
            this.RegisterListen();
        }
    }

    var Event$2 = Laya.Event;
    class AthleticsBullGame extends ui.GameAthleticsBull.BullGameUI {
        constructor() {
            super();
            new BullGameBet("AthleticsBet", this);
            new BullGameDeal("AthleticsDeal", this);
            new BullGameReady("AthleticsReady", this);
            new BullGameNext("AthleticsNextInning", this);
            new BullGameShowProp("AthleticsShowProp", this);
            Base.netWork.addNetEvent("GameAction.Athletics.Join", (data) => {
                this.setUsers(data.UserList, data.CurrentUser);
            });
            Base.netWork.addNetEvent("GameAction.Athletics.Ready", (data) => {
                this.userReady(data.GameUserList);
            });
            Base.netWork.addNetEvent("GameAction.Athletics.Deal", (data) => {
                this.dealCard(data.GameUserList);
            });
            Base.netWork.addNetEvent("GameAction.Athletics.Bet", (data) => {
                this.setBets(data.GameUserList, data.Current);
            });
            Base.netWork.addNetEvent("GameAction.Athletics.Than", (data) => {
                this.UsersThan(data.UserList);
            });
            Base.netWork.addNetEvent("GameAction.Athletics.Settlement", (data) => {
                this.Settlement(data.GameUserList, data.ThanList);
            });
        }
        onAwake() {
            let userList = [];
            for (let index = 0; index < this.users.numChildren; index++) {
                userList.push(this.users.getChildAt(index));
            }
            this.back_btn.on(Event$2.CLICK, this, () => {
                Base.sceneManager.changeScene("Hall", new ui.APP_LoadingUI());
            });
            this.initUsers();
            Base.sendNet.sendJoinRoom({
                "Action": "AthleticsJoin",
                "Data": {
                    "GameID": "20200510100000"
                }
            });
        }
        setUsers(UserList, CurrentUser) {
            for (let i = 0; i < this.users.numChildren; i++) {
                let user = this.users.getChildAt(i);
                user.visible = false;
            }
            for (let i = 0; i < UserList.length; i++) {
                let u_data = UserList[i];
                let user = this.users.getChildAt(i);
                user.visible = true;
                user.setMoney(u_data.UserMoney);
                user.setUserName(u_data.UserName);
            }
        }
        userReady(UserList) {
            for (let i = 0; i < UserList.length; i++) {
                let user = this.users.getChildAt(i);
                let u_data = UserList[i];
                user.showReady(u_data.IsReady);
            }
        }
        hideAllReady() {
            for (let i = 0; i < this.users.numChildren; i++) {
                let user = this.users.getChildAt(i);
                user.showReady(false);
            }
        }
        initUsers() {
            for (let i = 0; i < this.users.numChildren; i++) {
                let user = this.users.getChildAt(i);
                user.Init();
            }
        }
        dealCard(GameUserList) {
            let userList = [];
            for (let index = 0; index < GameUserList.length; index++) {
                userList.push(this.users.getChildAt(index));
            }
            this.deal_view.startDeal(userList, GameUserList.length * 5, GameUserList);
        }
        setBets(GameUserList, Current) {
            let index = Base.publicFun.getMineIndex(GameUserList, Current.User.UserID);
            let arr = [0, 2, 4, 5, 10, 20];
            let user = this.users.getChildAt(index);
            user.showBet(arr[Current.Bet]);
        }
        hideBets() {
            for (let i = 0; i < this.users.numChildren; i++) {
                let user = this.users.getChildAt(i);
                user.hideBet();
            }
        }
        UsersThan(GameUserList) {
            for (let i = 0; i < GameUserList.length; i++) {
                let user = this.users.getChildAt(i);
                let u_data = GameUserList[i];
                user.showProp(u_data.PropList, u_data.PropType);
            }
        }
        Settlement(GameUserList, ThanList) {
            for (let i = 0; i < GameUserList.length; i++) {
                if (GameUserList[i].GameMoney < 0) {
                    let index = Base.publicFun.getMineIndex(GameUserList, GameUserList[i].UserID);
                    let user = this.users.getChildAt(index);
                    let num = Math.abs(GameUserList[i].GameMoney);
                    this.userChips(user, num);
                    Base.publicFun.showText(user, "-" + num);
                }
            }
            setTimeout(() => {
                let curPos = 0;
                for (let i = 0; i < GameUserList.length; i++) {
                    if (GameUserList[i].GameMoney > 0) {
                        let index = Base.publicFun.getMineIndex(GameUserList, GameUserList[i].UserID);
                        let user = this.users.getChildAt(index);
                        let num = Math.abs(GameUserList[i].GameMoney);
                        this.chipsUser(user, num, curPos);
                        Base.publicFun.showText(user, "+" + num);
                        curPos = GameUserList[i].GameMoney;
                    }
                }
            }, 1000);
        }
        userChips(user, num) {
            for (let i = 0; i < num; i++) {
                Base.publicFun.userChip(user, this.recv_panel);
            }
        }
        chipsUser(user, num, start) {
            let end = start + num;
            Base.publicFun.chipUser(user, this.recv_panel, start, end);
        }
    }

    class UserPropList extends Laya.Sprite {
        constructor() {
            super();
        }
        onAwake() {
            this.prop_list = this.getChildByName("prop_list");
            this.userInfo = this.getChildByName("userInfo");
            this.banker = this.getChildByName("banker");
            this.flicker = this.getChildByName("Flicker");
            this.betNum_image = this.getChildByName("betNum_image");
        }
        showText(num) {
            let text = new FlutterText(num);
            this.userInfo.addChild(text);
            text.x = this.userInfo.pivotX;
            text.y = this.userInfo.pivotY;
            text.startAni();
        }
        get curDealPos() {
            return this.prop_list.curDealPos;
        }
        Init() {
            this.prop_list.initCard();
            this.hideBet();
            this.flicker.visible = false;
            this.userInfo.ready = false;
            this.setBanker(false);
        }
        recvCard(number) {
            this.prop_list.recvCard(number);
        }
        showProp(list, types, callBack) {
            this.prop_list.propCard(list, types, callBack);
        }
        setOnLine(ison) {
            this.userInfo.onLine = ison;
        }
        setHeader(image) {
            this.userInfo.avatarFrame = image;
        }
        setUserName(name) {
            this.userInfo.nickName = name;
        }
        setMoney(money) {
            this.userInfo.userScore = money;
        }
        showReady(show) {
            this.userInfo.ready = show;
        }
        setBanker(isbanker) {
            this.banker.visible = isbanker;
        }
        showBet(num) {
            if (num != null) {
                this.betNum_image.visible = true;
                this.betNum_image.loadImage(`GameCommon/BetNumber/Game_Common_Bet_${num}.png`);
            }
        }
        hideBet() {
            this.betNum_image.visible = false;
        }
    }

    class User extends Laya.Sprite {
        constructor() {
            super();
        }
        onAwake() {
            this.UserImage = this.getChildByName("UserImage");
            this.ShowReady = this.getChildByName("ShowReady");
            this.UserName = this.getChildByName("UserName");
            this.UserScore = this.getChildByName("UserScore");
        }
        set nickName(data) {
            this.UserName.text = data;
            this.User_Nickname = data;
        }
        set userScore(data) {
            this.UserScore.text = data;
            this.User_Score = data;
        }
        set avatarFrame(data) {
            this.UserImage.loadImage(data);
            this.User_AvatarFrame = data;
        }
        set role(data) {
            this.User_Role = data;
        }
        set onLine(data) {
            this.User_OnLine = data;
        }
        set ready(data) {
            this.ShowReady.visible = data;
            this.User_Ready = data;
        }
        get userScore() {
            return this.User_Score;
        }
        get nickName() {
            return this.User_Nickname;
        }
        get avatarFrame() {
            return this.User_AvatarFrame;
        }
        get role() {
            return this.User_Role;
        }
        get onLine() {
            return this.User_OnLine;
        }
        get ready() {
            return this.User_Ready;
        }
    }

    class Flicker extends ui.GameCommonUI.Athletics.FlickerUI {
        constructor() {
            super();
        }
        startFlicker() {
            Laya.timer.loop(300, this, this.loopFun);
        }
        endFlicker() {
            Laya.timer.clear(this, this.loopFun);
        }
        loopFun() {
            this.image_0.active = !this.image_0.active;
            this.image_1.active = !this.image_1.active;
        }
    }

    var Handler$2 = Laya.Handler;
    class PropList extends ui.GameCommonUI.Athletics.PropListUI {
        constructor() {
            super();
            this.propIndex = 0;
            this.currentDeal = 0;
        }
        onAwake() {
            this.CardList_list.renderHandler = new Handler$2(this, this.updateItem);
            this.initCard();
        }
        updateItem(cell, index) {
            cell.visible = this.CardList_list.array[index] > -2;
            if (cell.visible)
                cell.prop_Number = this.CardList_list.array[index];
        }
        get curDealPos() {
            let curCard = this.getCard(this.currentDeal);
            return this.CardList_list.localToGlobal(new Laya.Point(curCard.x, curCard.y));
        }
        initCard() {
            this.CardList_list.array = [-2, -2, -2, -2, -2];
            this.currentDeal = 0;
            this.propIndex = 0;
            this.propData = [];
            this.propType_text.visible = false;
        }
        propCard(list, type, callBack) {
            this.propData = list;
            this.propType = type;
            this.endCall = callBack;
            Laya.timer.loop(300, this, this.animateTimeBased);
        }
        recvCard(number) {
            let array = [...this.CardList_list.array];
            array[this.currentDeal] = number;
            this.CardList_list.array = [...array];
            this.currentDeal++;
        }
        getCard(index) {
            return this.CardList_list.getCell(index);
        }
        animateTimeBased() {
            let card = this.getCard(this.propIndex);
            while (card.prop_Number > -1 && this.propIndex < 5) {
                this.propIndex++;
                card = this.getCard(this.propIndex);
            }
            if (this.propIndex > 4) {
                this.propType_text.visible = true;
                this.propType_text.text = this.propType.PropTypeScore;
                Laya.timer.clear(this, this.animateTimeBased);
                this.endCall && this.endCall();
            }
            else {
                card.prop_leftToRight(this.propData[this.propIndex].PropSort);
                this.propIndex++;
            }
        }
        set propList_Mark(data) {
            this.PropList_Mark = data;
        }
        set propList_Name(data) {
            this.PropList_Name = data;
        }
        get propList_Mark() {
            return this.PropList_Mark;
        }
        get propList_Name() {
            return this.PropList_Name;
        }
    }

    var Handler$3 = Laya.Handler;
    var Tween$2 = Laya.Tween;
    class Prop extends ui.GameCommonUI.Athletics.PropUI {
        constructor() {
            super();
            this.Prop_Number = -2;
        }
        prop_leftToRight(number) {
            Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_DealCard.mp3");
            Tween$2.to(this.card, { scaleX: 0 }, 150, null, Handler$3.create(this, () => {
                this.prop_Number = number;
                Tween$2.to(this.card, { scaleX: 1 }, 150);
            }));
        }
        prop_topToDown(number) {
            Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_DealCard.mp3");
            Tween$2.to(this.card, { scaleY: 0 }, 150, null, Handler$3.create(this, () => {
                this.prop_Number = number;
                Tween$2.to(this.card, { scaleY: 1 }, 150);
            }));
        }
        set colour(data) {
            this.Prop_Colour = data;
        }
        set prop_Wild(data) {
            this.Prop_Wild = data;
        }
        set prop_Number(data) {
            this.Prop_Number = data;
            this.card.loadImage("GameCommon/Props/" + data + ".png");
        }
        set sort(data) {
            this.Prop_Sort = data;
        }
        get colour() {
            return this.Prop_Colour;
        }
        get prop_Wild() {
            return this.Prop_Wild;
        }
        get prop_Number() {
            return this.Prop_Number;
        }
        get sort() {
            return this.Prop_Sort;
        }
    }

    var Handler$4 = Laya.Handler;
    var Tween$3 = Laya.Tween;
    class Deal extends ui.GameCommonUI.Athletics.DealUI {
        constructor() {
            super();
        }
        startDeal(userList, total, userInfoList) {
            this.visible = true;
            let leng = userList.length;
            this.dealIndex = 0;
            this.propDataArr = [];
            if (userInfoList) {
                for (let i = 0; i < total / userInfoList.length; i++) {
                    for (let index = 0; index < userInfoList.length; index++) {
                        this.propDataArr.push((userInfoList[index].PropList[i] || null));
                    }
                }
            }
            Laya.timer.loop(50, this, this.loopFun, [userList, leng, total]);
        }
        loopFun(userList, leng, total) {
            let card = new Prop();
            let user = userList[this.dealIndex % leng];
            let propData = this.propDataArr[this.dealIndex];
            card.prop_Number = propData.PropSort;
            this.addChild(card);
            Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_DealCard.mp3");
            this.dealToUser(card, user);
            (++this.dealIndex >= total) && Laya.timer.clear(this, this.loopFun);
        }
        dealToUser(card, user, speed = 300) {
            let pos = user.curDealPos;
            Tween$3.to(card, { x: pos.x, y: pos.y }, speed, null, Handler$4.create(this, () => {
                user.recvCard(card.prop_Number);
                card.removeSelf();
            }));
        }
    }

    var Handler$5 = Laya.Handler;
    class Bet extends ui.GameCommonUI.Athletics.BetUI {
        constructor() {
            super();
        }
        onAwake() {
            this.betBtn_list.selectEnable = true;
            this.betBtn_list.selectHandler = new Handler$5(this, this.onSelect, null, false);
            this.betBtn_list.renderHandler = new Handler$5(this, this.updateItem);
        }
        updateItem(cell, index) {
            cell.label = this.betBtn_list.array[index];
        }
        onSelect(index) {
            console.log("当前选择的索引：" + index);
        }
    }

    var Handler$6 = Laya.Handler;
    class Rob extends ui.GameCommonUI.Athletics.RobUI {
        constructor() {
            super();
        }
        onAwake() {
            this.robBtn_list.selectEnable = true;
            this.robBtn_list.selectHandler = new Handler$6(this, this.onSelect, null, false);
            this.robBtn_list.renderHandler = new Handler$6(this, this.updateItem);
        }
        updateItem(cell, index) {
            cell.label = this.robBtn_list.array[index];
        }
        onSelect(index) {
            console.log("当前选择的索引：" + index);
        }
    }

    var Handler$7 = Laya.Handler;
    var Tween$4 = Laya.Tween;
    class TransAni extends ui.GameCommonUI.Athletics.TansAniUI {
        constructor() {
            super();
        }
        onAwake() {
            Base.publicFun.setCenter(this.image);
        }
        doAction(image) {
            image && this.setImage(image);
            this.visible = true;
            this.image.x = this.width + this.image.width / 2;
            Tween$4.to(this.image, { x: this.width / 2 }, 300, null, Handler$7.create(this, () => {
                Tween$4.to(this.image, { x: -this.image.width / 2 }, 300, null, Handler$7.create(this, () => {
                    this.visible = false;
                }), 1000);
            }));
        }
        startGame() {
            this.doAction("GameCommon/BetStatus/Game_Common_HintGamesStart.png");
        }
        startBet() {
            this.doAction("GameCommon/BetStatus/Game_Common_HintStartBetting.png");
            Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_StartBet.mp3");
        }
        stopBet() {
            this.doAction("GameCommon/BetStatus/Game_Common_HintStopBetting.png");
            Laya.SoundManager.playSound("GameCommon/sound/Games_Common_Sound_StopBet.mp3");
        }
        setImage(image) {
            this.image.loadImage(image);
        }
    }

    class CommonRadioGroup extends Laya.Sprite {
        constructor() {
            super();
        }
        onAwake() {
            this.checkIndex = 0;
        }
        get checkIndex() {
            return this.checkNum;
        }
        set checkIndex(index) {
            this.childChecked_index(index);
        }
        childChecked_index(index) {
            let child = this.getChildAt(index);
            this.childChecked(child);
        }
        childChecked(child) {
            for (let i = 0; i < this.numChildren; i++) {
                let forChild = this.getChildAt(i);
                if (forChild != child)
                    forChild.checked = false;
                else {
                    forChild.checked = true;
                    this.checkNum = i;
                }
            }
        }
    }

    class CommonRadio extends Laya.Sprite {
        constructor() {
            super();
            this.isCheck = false;
        }
        set checked(ischeck) {
            this.isCheck = ischeck;
            this.unSelect.visible = !ischeck;
            this.selected.visible = ischeck;
        }
        get checked() {
            return this.isCheck;
        }
        onAwake() {
            this.unSelect = this.getChildByName("unSelect");
            this.selected = this.getChildByName("selected");
            this.checked = false;
            this.on(Laya.Event.CLICK, this, () => {
                if (this.parent) {
                    this.parent.childChecked(this);
                }
            });
        }
    }

    class CommonCheck extends Laya.Sprite {
        constructor() {
            super();
            this.isCheck = false;
        }
        set checked(ischeck) {
            this.isCheck = ischeck;
            this.unSelect.visible = !ischeck;
            this.selected.visible = ischeck;
            this.changeHandle(ischeck);
        }
        get checked() {
            return this.isCheck;
        }
        changeHandle(check) {
        }
        onAwake() {
            this.unSelect = this.getChildByName("unSelect");
            this.selected = this.getChildByName("selected");
            this.checked = false;
            this.on(Laya.Event.CLICK, this, () => {
                this.checked = !this.isCheck;
            });
        }
    }

    var Event$3 = Laya.Event;
    class GoldenFlowerGame extends ui.GameAthleticsGoldenFlower.GameGoldenFlowerGameUI {
        constructor() {
            super();
        }
        onAwake() {
            this.putChip_btn.on(Event$3.CLICK, this, () => {
                let user = this[`user_${Math.floor(Math.random() * 6)}`];
            });
            this.changeCoin_btn.on(Event$3.CLICK, this, () => {
                let user1 = this[`user_${Math.floor(Math.random() * 6)}`];
                let user2 = this[`user_${Math.floor(Math.random() * 6)}`];
                let rand = Math.floor(Math.random() * 100);
                for (let i = 0; i < rand; i++) {
                }
                this.showText(user1, "-" + rand);
                setTimeout(() => {
                    this.showText(user2, "+" + this.recv_panel.numChildren);
                }, 1000);
            });
        }
        showText(user, num) {
            let text = new FlutterText(num);
            user.addChild(text);
            text.x = user.pivotX;
            text.y = user.pivotY;
            text.startAni();
        }
    }

    var Handler$8 = Laya.Handler;
    var Event$4 = Laya.Event;
    var BullRule = ui.GameAthleticsBull.Ruels.RoomRuleUI;
    var LandlordRoomRule = ui.GameAthleticsLandlord.Rules.LandlordRoomRuleUI;
    var ThreeDukeRoomRule = ui.GameAthleticsThreeDuke.Rules.ThreeDukeRoomRuleUI;
    var TwentyoneroomRule = ui.GameAthleticsTwentyone.Rules.TwentyoneroomRuleUI;
    var TwoEightroomRule = ui.GameAthleticsTwoEight.Rules.TwoEightroomRuleUI;
    class CommonCreatRoom extends ui.GameCommonUI.CommonCreatRoomUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$4.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.clear_btn.on(Event$4.CLICK, this, () => {
                for (let index = 0; index < this.curRuleView.radios.numChildren; index++) {
                    this.curRuleView.radios.getChildAt(index).checkIndex = 0;
                }
                if (this.curRuleView.checks) {
                    for (let index = 0; index < this.curRuleView.checks.numChildren; index++) {
                        this.curRuleView.checks.getChildAt(index).checked = false;
                    }
                }
            });
            this.confirm_btn.on(Event$4.CLICK, this, () => {
                let data = {
                    radios: [],
                    checks: []
                };
                for (let index = 0; index < this.curRuleView.radios.numChildren; index++) {
                    let checkIndex = this.curRuleView.radios.getChildAt(index).checkIndex;
                    data.radios.push(checkIndex);
                }
                if (this.curRuleView.checks) {
                    for (let index = 0; index < this.curRuleView.checks.numChildren; index++) {
                        let checked = this.curRuleView.checks.getChildAt(index).checked;
                        data.checks.push(checked);
                    }
                }
                console.log(data);
            });
            this.tabButtons_list.selectEnable = true;
            this.tabButtons_list.renderHandler = new Handler$8(this, this.updateItem);
            this.tabButtons_list.selectHandler = new Handler$8(this, this.onSelect, null, false);
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
                },]);
            this.tabButtons_list.selectedIndex = 0;
        }
        setArray(list) {
            this.tabButtons_list.array = list;
        }
        updateItem(cell, index) {
            let selected = cell.getChildByName("selected");
            let unselect = cell.getChildByName("unselect");
            let selected_text = cell.getChildByName("selected_text");
            let unselect_text = cell.getChildByName("unselect_text");
            selected_text.text = this.tabButtons_list.array[index].name;
            unselect_text.text = this.tabButtons_list.array[index].name;
            selected.visible = this.tabButtons_list.array[index].show;
            selected_text.visible = this.tabButtons_list.array[index].show;
            unselect.visible = !this.tabButtons_list.array[index].show;
            unselect_text.visible = !this.tabButtons_list.array[index].show;
        }
        onSelect(index) {
            console.log("当前选择的索引：" + index);
            for (let i = 0; i < this.tabButtons_list.array.length; i++) {
                this.tabButtons_list.array[i].show = false;
            }
            this.tabButtons_list.array[index].show = true;
            if (this.curRuleView)
                this.curRuleView.removeSelf();
            this.curRuleView = new (this.tabButtons_list.array[index].ruleView)();
            this.rule_group.addChild(this.curRuleView);
        }
    }

    class CommonGameTypeSelection extends ui.GameCommonUI.CommonGameTypeSelectionUI {
        constructor() {
            super();
        }
        onAwake() {
            this.originX = this.x;
        }
        setImages(list, clickHandle) {
            this.removeChildren(0, this.numChildren - 1);
            let width = this.width / list.length;
            for (let i = 0; i < list.length; i++) {
                let sprite = new Laya.Sprite();
                this.addChild(sprite);
                sprite.height = this.height;
                sprite.width = width;
                sprite.y = 0;
                sprite.x = width * i;
                let button = new ActionButton(list[i]);
                button.visible = false;
                sprite.addChild(button);
                Laya.timer.once(200, this, () => {
                    Base.publicFun.setCenter(button);
                    button.x = sprite.width / 2;
                    button.y = sprite.height / 2;
                    button.visible = true;
                });
                button.on(Laya.Event.CLICK, this, () => {
                    clickHandle(i);
                });
                this.x = Laya.stage.width + 200;
                Laya.Tween.to(this, { x: this.originX }, 300);
            }
        }
        hideSelf(call) {
            Laya.Tween.to(this, { x: Laya.stage.width + 200 }, 300, null, Laya.Handler.create(this, () => {
                this.visible = false;
                call && call();
            }));
        }
    }

    var Handler$9 = Laya.Handler;
    class HundredBet extends ui.GameCommonUI.HundredGame.BetUI {
        constructor() {
            super();
        }
        onAwake() {
            this.bets_list.selectEnable = true;
            this.bets_list.selectHandler = new Handler$9(this, this.onSelect, null, false);
            this.bets_list.renderHandler = new Handler$9(this, this.updateItem);
            this.bets_list.selectedIndex = 0;
        }
        updateItem(cell, index) {
            let btn = cell.getChildByName("back_image");
            let text = btn.getChildByName("money_text");
            btn.skin = `GameCommon/HandredsBet/${index + 1}.png`;
            text.text = this.bets_list.array[index];
        }
        onSelect(index) {
            let btnBox = this.bets_list.getCell(index);
            this.cursor_image.x = btnBox.x;
            this.currentBet = btnBox;
            this.curIndex = index;
        }
        setBets(arr) {
            this.bets_list.array = arr;
        }
        getCurBet() {
            return this.curIndex;
        }
        getCurBetPos() {
            return Base.publicFun.getWorldPos(this.currentBet);
        }
    }

    var Event$5 = Laya.Event;
    class Banker extends ui.GameHundredsBenzBmw.BankerUI {
        constructor() {
            super();
            this.money = 355444;
        }
        onAwake() {
            this.slider = this.money_slider;
            this.money_text.text = this.money + "";
            this.close_btn.on(Event$5.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.plus_btn.on(Event$5.CLICK, this, () => {
                this.slider.percent = this.slider.percent + 1;
            });
            this.reduce_btn.on(Event$5.CLICK, this, () => {
                this.slider.percent = this.slider.percent - 1;
            });
            this.apply_btn.on(Event$5.CLICK, this, () => {
                console.log(this.curSelectMoney);
            });
            this.slider.changeHandler = (percent) => {
                this.curSelectMoney = Math.floor(percent / 100 * this.money);
                this.money_text.text = this.curSelectMoney + "";
            };
            this.setMoney(100000);
        }
        setMoney(money) {
            this.slider.percent = money / this.money * 100;
        }
    }

    class CommonProgress$1 extends Laya.Sprite {
        constructor() {
            super();
            this.m_percent = 0;
        }
        get percent() {
            return this.m_percent;
        }
        set percent(perc) {
            this.m_percent = perc > 100 ? 100 : perc;
            this.imgmask.width = this.width / 100 * this.m_percent + 1;
            this.icon.x = this.imgmask.width;
            this.changeHandler(this.m_percent);
        }
        changeHandler(percent) {
        }
        onAwake() {
            this.bar = this.getChildByName("bar");
            this.icon = this.getChildByName("icon");
            Base.publicFun.setCenter(this.icon);
            this.imgmask = this.bar.mask;
            this.on(Laya.Event.MOUSE_DOWN, this, (e) => {
                let perc = e.target.mouseX / this.width * 100;
                let func = perc > 99 ? Math.ceil : Math.floor;
                this.percent = func(perc);
            });
            this.on(Laya.Event.MOUSE_MOVE, this, (e) => {
                let perc = e.target.mouseX / this.width * 100;
                let func = perc > 99 ? Math.ceil : Math.floor;
                this.percent = func(perc);
            });
        }
    }

    var Event$6 = Laya.Event;
    var Handler$a = Laya.Handler;
    class Player extends ui.GameHundredsBenzBmw.PlayerUI {
        constructor() {
            super();
        }
        get playerList() {
            return this.playerListData;
        }
        set playerList(data) {
            this.playerListData = data;
            this.player_list.array = data;
        }
        onAwake() {
            this.close_btn.on(Event$6.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.confirm_btn.on(Event$6.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.player_list.vScrollBarSkin = "";
            this.player_list.renderHandler = new Handler$a(this, this.updateItem);
            this.playerList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
        updateItem(cell, index) {
            cell.getChildByName("name_text").text = this.player_list.array[index];
            cell.getChildByName("money_text").text = this.player_list.array[index];
            cell.getChildByName("header_image");
        }
    }

    var Event$7 = Laya.Event;
    class Playerlist extends ui.GameHundredsBenzBmw.PlayerlistUI {
        constructor() {
            super();
        }
        get playerList() {
            return this.playerListData;
        }
        set playerList(data) {
            this.playerListData = data;
            for (let i = 0; i < data.length; i++) {
                console.log(i);
                let player = this.player_list.getChildAt(i);
                player.visible = true;
                player.getChildByName("name_text").text = data[i];
                player.getChildByName("money_text").text = data[i];
                player.getChildByName("header_image");
            }
        }
        onAwake() {
            this.close_btn.on(Event$7.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.playerList = [1, 2, 3, 4, 5];
        }
    }

    var Event$8 = Laya.Event;
    class Roomselection extends ui.GameHundredsBenzBmw.RoomselectionUI {
        constructor() {
            super();
        }
        onAwake() {
            this.back_btn.on(Event$8.CLICK, this, () => {
                console.log("back");
            });
            this.about_btn.on(Event$8.CLICK, this, () => {
                Base.publicFun.showAlert(this.rule_view);
            });
            this.primary_btn.on(Event$8.CLICK, this, () => {
                console.log("初级");
            });
            this.intermediate_btn.on(Event$8.CLICK, this, () => {
                console.log("中级");
            });
            this.senior_btn.on(Event$8.CLICK, this, () => {
                console.log("高级");
            });
            this.quick_btn.on(Event$8.CLICK, this, () => {
                console.log("快速开始");
            });
        }
    }

    var Event$9 = Laya.Event;
    class Rule extends ui.GameHundredsBenzBmw.RuleUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$9.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.confirm_btn.on(Event$9.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
        }
    }

    var Event$a = Laya.Event;
    class Setting extends ui.GameHundredsBenzBmw.SettingUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$a.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.confirm_btn.on(Event$a.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.bgm_check.changeHandle = (check) => {
                console.log("音效", check);
            };
            this.automatic_check.changeHandle = (check) => {
                console.log("自动", check);
            };
            this.music_check.changeHandle = (check) => {
                console.log("音乐", check);
            };
            this.night_check.changeHandle = (check) => {
                console.log("日夜", check);
            };
            this.sound_check.changeHandle = (check) => {
                console.log("声音", check);
            };
        }
    }

    class Speak extends ui.GameHundredsBenzBmw.SpeakUI {
        constructor() {
            super();
        }
        onAwake() { }
    }

    var Event$b = Laya.Event;
    class Table extends ui.GameHundredsBenzBmw.TableUI {
        constructor() {
            super();
            this.diraction = new Laya.Vector2();
            this.curMoveIndex = 0;
            this.changeDirList = [
                { x: 1712, y: 709, r: 58 },
                { x: 1478, y: 858, r: 90 },
                { x: 437.5, y: 858, r: 121 },
                { x: 202.5, y: 682, r: 180 },
                { x: 211, y: 254, r: 236 },
                { x: 455, y: 110, r: 270 },
                { x: 1478, y: 116, r: 301 },
                { x: 1707, y: 242, r: 360 },
            ];
            this.winPriceList = [
                { x: 1607.5, y: 790, beforIndex: 1 },
                { x: 1118.5, y: 867, beforIndex: 2 },
                { x: 794, y: 864, beforIndex: 2 },
                { x: 318, y: 790, beforIndex: 3 },
                { x: 310.5, y: 187, beforIndex: 5 },
                { x: 803, y: 107, beforIndex: 6 },
                { x: 1111, y: 107, beforIndex: 6 },
                { x: 1593.5, y: 172, beforIndex: 7 },
            ];
        }
        onAwake() {
            this.dazhong.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[0];
            });
            this.baoma.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[1];
            });
            this.benchi.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[2];
            });
            this.baoshijie.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[3];
            });
            this.dabaoshijie.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[4];
            });
            this.dabenchi.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[5];
            });
            this.dabaoma.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[6];
            });
            this.dadazhong.on(Event$b.CLICK, this, () => {
                this.winPrice = this.winPriceList[7];
            });
            this.go_btn.on(Event$b.CLICK, this, () => {
                this.stratMove();
            });
        }
        stratMove() {
            let target = this.changeDirList[this.curMoveIndex];
            this.winPrice = null;
            this.speed = 15;
            this.moveTo(target);
        }
        moveTo(target) {
            Laya.Vector2.normalize(new Laya.Vector2(target.x - this.car_image.x, target.y - this.car_image.y), this.diraction);
            Laya.timer.frameLoop(1, this, () => {
                this.car_image.x += this.diraction.x * this.speed;
                this.car_image.y += this.diraction.y * this.speed;
                let tempVec = new Laya.Vector2(target.x - this.car_image.x, target.y - this.car_image.y);
                let length = Laya.Vector2.scalarLength(tempVec);
                if (length < 8) {
                    this.car_image.x = target.x;
                    this.car_image.y = target.y;
                    target.r && (this.car_image.rotation = target.r);
                    Laya.timer.clearAll(this);
                    if (target != this.winPrice) {
                        this.curMoveIndex = ++this.curMoveIndex % this.changeDirList.length;
                        let pos = this.changeDirList[this.curMoveIndex];
                        if (this.winPrice && this.winPrice.beforIndex == this.curMoveIndex && this.speed < 7) {
                            pos = this.winPrice;
                        }
                        this.moveTo(pos);
                    }
                    else {
                        console.log("到站了");
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
            });
        }
    }

    var Handler$b = Laya.Handler;
    var Tween$5 = Laya.Tween;
    class NumChip extends ui.GameCommonUI.HundredGame.NumChipUI {
        constructor(image, num) {
            super();
            this.image = image;
            this.num = num;
        }
        onAwake() {
            this.back_image.loadImage(this.image);
            this.money_text.text = this.num;
        }
        toTargerShow(target, compFunc) {
            Tween$5.to(this, { x: target.x, y: target.y }, 300, null, Handler$b.create(this, () => {
                Tween$5.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, null, Handler$b.create(this, () => {
                    Tween$5.to(this, { scaleX: 1, scaleY: 1 }, 300, null, Handler$b.create(this, () => {
                        compFunc && compFunc();
                    }));
                }));
            }));
        }
        toTargerHide(target) {
            Tween$5.to(this, { x: target.x, y: target.y }, 300, null, Handler$b.create(this, () => {
                this.removeSelf();
            }));
        }
    }

    var Event$c = Laya.Event;
    class HundredsBull extends ui.GameHundredsBull.HundredsBullUI {
        constructor() {
            super();
            this.BetArr = [10, 20, 50, 100, 200];
        }
        onAwake() {
            let userList = [];
            for (let index = 0; index < this.propList_group.numChildren; index++) {
                userList.push(this.propList_group.getChildAt(index));
            }
            this.back_btn.on(Event$c.CLICK, this, () => {
                Base.publicFun.showConfirm("确认退出吗？", () => {
                    Base.sceneManager.changeScene("Hall", new ui.APP_LoadingUI());
                });
            });
            this.soundOff_btn.on(Event$c.CLICK, this, () => {
                this.soundOff_btn.visible = false;
                this.soundOn_btn.visible = true;
            });
            this.soundOn_btn.on(Event$c.CLICK, this, () => {
                this.soundOff_btn.visible = true;
                this.soundOn_btn.visible = false;
                for (let i = 0; i < userList.length; i++) {
                    userList[i].propCard([]);
                    userList[i].propCard("6666");
                }
            });
            this.users_btn.on(Event$c.CLICK, this, () => {
                this.deal_view.startDeal(userList, 25);
            });
            for (let i = 0; i < 4; i++) {
                let recv = this[`recvPanel_${i}`];
                let recv_money = this[`recvText_${i}`];
                recv_money.text = "0";
                recv.on(Event$c.MOUSE_MOVE, this, () => {
                    let chip = this.userChip(this.bet_view.getCurBetPos(), recv);
                    recv_money.text = parseInt(recv_money.text) + chip.num;
                });
                this.bet_view.setBets([10, 20, 50, 100, 200]);
            }
        }
        userChip(userPos, recv) {
            let index = this.bet_view.getCurBet();
            let chip = new NumChip(`GameCommon/HandredsBet/${index + 1}.png`, this.BetArr[index]);
            chip.x = userPos.x - recv.x;
            chip.y = userPos.y - recv.y;
            recv.addChild(chip);
            chip.toTargerShow(Base.publicFun.getRecvPos(recv), null);
            return chip;
        }
    }

    var Event$d = Laya.Event;
    class Dicetable extends ui.GameHundredsDice.DiceUI {
        constructor() {
            super();
            this.tweenStop = false;
        }
        onAwake() {
            this.play_btn.on(Event$d.CLICK, this, () => {
                Base.sceneManager.changeScene("Login", new ui.GameAthleticsTwentyone.TwentyOneloadingUI());
            });
        }
        toLeft() {
            this.tweenObj = Laya.Tween.to(this.diceCup_group, { x: this.diceCup_group.x - 50 }, this.tweenSpeed, null, Laya.Handler.create(this, () => {
                if (this.tweenSpeed > 50)
                    this.tweenSpeed -= 20;
                this.tweenStop ? this.dice_ani.play(0, false) : this.toRight();
            }));
        }
        toRight() {
            this.tweenObj = Laya.Tween.to(this.diceCup_group, { x: this.diceCup_group.x + 50 }, this.tweenSpeed, null, Laya.Handler.create(this, () => {
                this.tweenStop ? this.dice_ani.play(0, false) : this.toLeft();
            }));
        }
    }

    var Event$e = Laya.Event;
    class FruitTable extends ui.GameHundredsFruit.FruitTableUI {
        constructor() {
            super();
            this.fruitList = [];
            this.curIndex = 0;
        }
        onAwake() {
            for (let i = 0; i < this.items_group.numChildren; i++) {
                this.fruitList.push(this.items_group.getChildAt(i));
                Base.publicFun.setCenter(this.fruitList[i]);
            }
            this.start_btn.on(Event$e.CLICK, this, () => {
                this.startAni();
            });
            this.clear_btn.on(Event$e.CLICK, this, () => {
                this.stopIndex = Math.floor((Math.random() * this.fruitList.length + 1));
                console.log(this.stopIndex);
            });
        }
        startAni() {
            this.delay = 10;
            this.stopIndex = -1;
            this.changeOnce();
        }
        changeOnce() {
            Laya.timer.frameOnce(this.delay, this, () => {
                Laya.Tween.to(this.fruitList[this.curIndex], { scaleX: 1, scaleY: 1 }, 200);
                this.curIndex = ++this.curIndex % this.fruitList.length;
                Laya.Tween.to(this.fruitList[this.curIndex], { scaleX: 1.5, scaleY: 1.5 }, 200);
                if (this.stopIndex > -1) {
                    if (this.delay < 10) {
                        this.delay += 2;
                    }
                    else if (this.delay < 20) {
                        this.delay += 0.8;
                    }
                    else if (this.delay < 30) {
                        this.delay += 0.5;
                    }
                }
                else {
                    if (this.delay > 8) {
                        this.delay -= 0.8;
                    }
                    else if (this.delay > 5) {
                        this.delay -= 0.5;
                    }
                    else if (this.delay > 2) {
                        this.delay -= 0.2;
                    }
                }
                if (this.stopIndex != this.curIndex || this.delay < 10) {
                    this.changeOnce();
                }
            });
        }
    }

    var Event$f = Laya.Event;
    class AgentPromotion extends ui.Hall.AgentPromotion.AgentPromotionUI {
        constructor() {
            super();
        }
        onAwake() {
            this.hideAllGroup();
            this.setGroup(0);
            this.tabButtons.changeHandle = (index) => {
                this.setGroup(index);
            };
            this.close_btn.on(Event$f.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
        }
        setGroup(index) {
            this.hideAllGroup();
            this.groups.getChildAt(index).visible = true;
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
    }

    class CommonTabButton extends Laya.Sprite {
        constructor() {
            super();
        }
        onAwake() {
            this.checkIndex = 0;
            for (let i = 0; i < this.numChildren; i++) {
                this.getChildAt(i).on(Laya.Event.CLICK, this, () => {
                    this.checkIndex = i;
                });
            }
        }
        get checkIndex() {
            return this.checkNum;
        }
        set checkIndex(index) {
            for (let i = 0; i < this.numChildren; i++) {
                let child = this.getChildAt(i);
                let selected = child.getChildByName("selected");
                let unselect = child.getChildByName("unselect");
                let selected_text = child.getChildByName("selected_text");
                let unselect_text = child.getChildByName("unselect_text");
                let isShow = (index == i);
                selected.visible = isShow;
                selected_text.visible = isShow;
                unselect.visible = !isShow;
                unselect_text.visible = !isShow;
            }
            Laya.SoundManager.playSound("GameCommon/sound/Game_Common_Button.mp3");
            this.changeHandle(index);
        }
        changeHandle(index) {
            console.log(index);
        }
    }

    class Announcement extends ui.Hall.Announcement.AnnouncementUI {
        constructor() {
            super();
        }
        onAwake() {
            this.hideAllGroup();
            this.setGroup(0);
            this.tabButtons.changeHandle = (index) => {
                this.setGroup(index);
            };
        }
        setGroup(index) {
            this.hideAllGroup();
            this.groups.getChildAt(index).visible = true;
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
    }

    var Event$g = Laya.Event;
    var Handler$c = Laya.Handler;
    class CustomerService extends ui.Hall.CustomerService.CustomerServiceUI {
        constructor() {
            super();
            this.maxWidch = 388;
        }
        onAwake() {
            this.close_btn.on(Event$g.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.send_btn.on(Event$g.CLICK, this, () => {
                if (this.ask_input.text)
                    this.chat_list.array = [...this.chat_list.array, {
                            type: 0,
                            text: this.ask_input.text
                        }];
                this.ask_input.text = "";
                this.chat_list.scrollTo(this.chat_list.array.length - 1);
            });
            this.chat_list.vScrollBarSkin = "";
            this.chat_list.array = [{
                    type: 1,
                    text: "您好 请问有什么可以帮助您"
                }];
            this.chat_list.renderHandler = new Handler$c(this, this.updateItem);
        }
        updateItem(cell, index) {
            let data = this.chat_list.array[index];
            let right = cell.getChildByName("right");
            let left = cell.getChildByName("left");
            let showWho = (data.type == 0);
            left.visible = !showWho;
            right.visible = showWho;
            let showedNode = showWho ? right : left;
            let header_image = showedNode.getChildByName("header_image");
            let chatBox_image = showedNode.getChildByName("chatBox_image");
            let say_text = chatBox_image.getChildByName("say_text");
            say_text.text = data.text;
            let rect = say_text.getBounds();
            if (rect.width >= this.maxWidch) {
                say_text.width = this.maxWidch;
                say_text.wordWrap = true;
                rect = say_text.getBounds();
            }
            else {
                say_text.wordWrap = false;
                say_text.width = 0;
            }
            chatBox_image.width = rect.width + 100;
            chatBox_image.height = rect.height + 40;
            cell.height = chatBox_image.height + 50;
            if (showWho) {
                chatBox_image.x = header_image.x - chatBox_image.width - 15;
            }
            say_text.pivotX = rect.width / 2;
            say_text.pivotY = rect.height / 2;
            say_text.x = chatBox_image.width / 2 - 15;
            say_text.y = chatBox_image.height / 2;
            showedNode.getChildByName("date_text").text = new Date().toDateString();
        }
    }

    var Event$h = Laya.Event;
    class DissolutionRoom extends ui.Hall.DissolutionRoom.DissolutionRoomUI {
        constructor() {
            super();
            this.userList = [2, 6];
        }
        onAwake() {
            this.close_btn.on(Event$h.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.cancel_btn.on(Event$h.CLICK, this, () => {
            });
            this.confirm_btn.on(Event$h.CLICK, this, () => {
            });
            for (let i = 0; i < this.users_group.numChildren; i++) {
                let user = this.users_group.getChildAt(i);
                if (this.userList[i]) {
                    user.visible = true;
                    let nameText = user.getChildByName("name_text");
                    let headerImage = user.getChildByName("header_image");
                    nameText.text = this.userList[i];
                }
                else {
                    user.visible = false;
                }
            }
        }
    }

    var Event$i = Laya.Event;
    class DissolutionRoomConfirm extends ui.Hall.DissolutionRoom.DissolutionRoomConfirmUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$i.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.cancel_btn.on(Event$i.CLICK, this, () => {
            });
            this.confirm_btn.on(Event$i.CLICK, this, () => {
            });
        }
    }

    var Event$j = Laya.Event;
    var Handler$d = Laya.Handler;
    class Mall extends ui.Hall.Mall.MallUI {
        constructor() {
            super();
        }
        onAwake() {
            this.money_text.text = Base.userInfo.money + "";
            this.diamond_text.text = Base.userInfo.diamond + "";
            this.tabButtons.changeHandle = (index) => {
            };
            this.close_btn.on(Event$j.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.buyitem_lsit.vScrollBarSkin = "";
            this.buyitem_lsit.renderHandler = new Handler$d(this, this.updateItem);
            this.buyitem_lsit.array = [6, 8888, 122, 122, 666, 47];
            this.tabButtons.checkIndex = 0;
        }
        updateItem(cell, index) {
            let butBtn = cell.getChildByName("buy_btn");
            let priceText = butBtn.getChildByName("price_text");
            priceText.text = this.buyitem_lsit.array[index];
            this.showItemImage(cell, (index % 3));
            butBtn.on(Event$j.CLICK, this, () => {
                console.log(this.buyitem_lsit.array[index]);
            });
        }
        showItemImage(node, target) {
            for (let index = 0; index < 3; index++) {
                let image = node.getChildByName(`level_${index}_image`);
                image.visible = (target == index);
            }
        }
    }

    var Handler$e = Laya.Handler;
    var Event$k = Laya.Event;
    class Mail extends ui.Hall.MailBox.MailUI {
        constructor() {
            super();
            this.privateMsg = [1, 5, 2];
            this.systemMsg = [7, 7, 7];
            this.dataArr = [this.privateMsg, this.systemMsg];
        }
        onAwake() {
            this.tabButtons.changeHandle = (index) => {
                this.msg_list.array = this.dataArr[index];
            };
            this.confirm_btn.on(Event$k.CLICK, this, () => {
                Base.publicFun.hideAlert(this.msgBox);
            });
            this.cancel_btn.on(Event$k.CLICK, this, () => {
                Base.publicFun.hideAlert(this.msgBox);
            });
            this.close_btn.on(Event$k.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.msg_list.vScrollBarSkin = "";
            this.msg_list.renderHandler = new Handler$e(this, this.updateItem);
            this.tabButtons.checkIndex = 0;
        }
        updateItem(cell, index) {
            let notreadImage = cell.getChildByName("notread_image");
            let readedImage = cell.getChildByName("readed_image");
            let msgNameText = cell.getChildByName("msgName_text");
            let dateText = cell.getChildByName("date_text");
            let lookupBtn = cell.getChildByName("lookup_btn");
            msgNameText.text = this.msg_list.array[index];
            lookupBtn.clickHandler = new Handler$e(this, (e) => {
                Base.publicFun.showAlert(this.msgBox);
                this.alMsgName_text.text = this.msg_list.array[index];
                this.msgContent_text.text = this.msg_list.array[index];
            });
        }
    }

    var Event$l = Laya.Event;
    class Set extends ui.Hall.Set.SetUI {
        constructor() {
            super();
        }
        onAwake() {
            this.hideAllGroup();
            this.setGroup(0);
            this.tabButtons.changeHandle = (index) => {
                this.setGroup(index);
            };
            this.close_btn.on(Event$l.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
        }
        setGroup(index) {
            this.hideAllGroup();
            this.groups.getChildAt(index).visible = true;
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
    }

    var Event$m = Laya.Event;
    class InvitationCode extends ui.Hall.InvitationCodeUI {
        constructor(code) {
            super();
            this.code = code;
        }
        onAwake() {
            this.code_text.value = this.code;
            this.copy_btn.on(Event$m.CLICK, this, () => {
                console.log(12312);
                Base.publicFun.showTaost("复制成功");
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.cancel_btn.on(Event$m.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
        }
    }

    var Event$n = Laya.Event;
    class VictoryShow extends ui.Hall.VictoryShowUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$n.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            for (let i = 0; i < this.players.numChildren; i++) {
                let player = this.players.getChildAt(i);
                let moneyText = player.getChildByName("money_text");
                moneyText.text = "99471";
            }
        }
    }

    var Event$o = Laya.Event;
    class UserInfo extends ui.Hall.UserInfo.UserInfoUI {
        constructor(index) {
            super();
            this.selectIndex = index;
        }
        onAwake() {
            this.userName_text.text = Base.userInfo.nickName;
            this.userMoney_text.text = Base.userInfo.money + "";
            this.tabButtons.changeHandle = (index) => {
                this.hideAllGroup();
                this.groups.getChildAt(index).visible = true;
            };
            this.setGroupShow(this.selectIndex);
            this.close_btn.on(Event$o.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.confirmzfb_btn.on(Event$o.CLICK, this, () => {
                console.log("姓名", this.zfbName_input.text);
                console.log("账号", this.zfbAccount_input.text);
            });
            this.confirmPass_btn.on(Event$o.CLICK, this, () => {
                console.log("老密码", this.oldPass_input.text);
                console.log("新密码", this.newPass_input.text);
                console.log("确认密码", this.confirmPass_input.text);
            });
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
        setGroupShow(index) {
            if (index > -1)
                this.tabButtons.checkIndex = index;
        }
    }

    var Event$p = Laya.Event;
    var Handler$f = Laya.Handler;
    class Recharge extends ui.Hall.Recharge.RechargeUI {
        constructor() {
            super();
            this.userid = 655512;
            this.userMoney = 845242;
            this.quickNumbers = [100, 500, 1000, 5000, 10000];
        }
        onAwake() {
            this.userid_text.text = Base.userInfo.id + "";
            this.userMoney_text.text = Base.userInfo.money + "";
            this.buyed_list.vScrollBarSkin = "";
            this.buyed_list.renderHandler = new Handler$f(this, this.updateItem);
            this.buyed_list.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];
            this.tabButtons.changeHandle = (index) => {
                let isvip = (index == 0);
                this.vipRecharge_group.visible = isvip;
                this.otherRecharge_group.visible = !isvip;
            };
            this.close_btn.on(Event$p.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.clearInput_btn.on(Event$p.CLICK, this, () => {
                this.money_input.text = "";
            });
            this.confirm_btn.on(Event$p.CLICK, this, () => {
                console.log(this.money_input.text);
            });
            for (let i = 0; i < this.quickPush_btns.numChildren; i++) {
                this.quickPush_btns.getChildAt(i).on(Event$p.CLICK, this, () => {
                    this.money_input.text = this.quickNumbers[i] + "";
                });
            }
        }
        updateItem(cell, index) {
            cell.getChildByName("name").text = this.buyed_list.array[index] + "购买";
            cell.getChildByName("money").text = this.buyed_list.array[index] + "元";
        }
    }

    var ImageList = {
        Thanchicken: [
            "Thanchicken/GameType/AlternateBankerThanChicken.png",
            "Thanchicken/GameType/RobThanThanChicken.png",
            "Thanchicken/GameType/ThanThanChicken (2).png",
        ],
        ThirteenBets: [
            "ThirteenBets/GameType/ThanThirteenBets (2).png",
            "ThirteenBets/GameType/RobThanThirteenBets.png",
            "ThirteenBets/GameType/AlternateBankerThirteenBets (2).png",
        ],
        ThreeDuke: [
            "ThreeDuke/GameType/ThanThreeDuke (2).png",
            "ThreeDuke/GameType/ScoreBankThreeDuke (2).png",
            "ThreeDuke/GameType/RobThanThreeDuke (2).png",
            "ThreeDuke/GameType/NoScoreBankerThreeDuke (2).png",
            "ThreeDuke/GameType/AlternateBankerThreeDuke (2).png"
        ],
        TwentyOne: [
            "Twentyone/GameType/ThanTwentyOne (2).png",
            "Twentyone/GameType/ScoreBankTwentyOne (2).png",
            "Twentyone/GameType/RobThanTwentyOne (2).png",
            "Twentyone/GameType/NoScoreBankerTwentyOne (2).png",
            "Twentyone/GameType/AlternateBankerTwentyOne (2).png",
        ],
        TwoEight: [
            "TwoEight/GameType/AlternateBankerTwoEight.png",
            "TwoEight/GameType/NoScoreBankerTwoEight.png",
            "TwoEight/GameType/RobThanTwoEight.png",
            "TwoEight/GameType/ScoreBankTwoEight.png",
            "TwoEight/GameType/ThanTwoEight.png",
        ]
    };

    var Event$q = Laya.Event;
    var Handler$g = Laya.Handler;
    class Hall extends ui.Hall.HallUI {
        constructor() {
            super();
            Base.netWork.addNetEvent("GameCommon.CreateGame.Succeed", () => {
                Base.sceneManager.changeScene("GameAthleticsBull", new ui.GameAthleticsBull.BullLoadingUI());
            });
        }
        onAwake() {
            this.icon_list.hScrollBarSkin = "";
            this.icon_list.selectEnable = true;
            this.icon_list.renderHandler = new Handler$g(this, this.updateItem);
            this.icon_list.selectHandler = new Handler$g(this, this.selectItem);
            this.icon_list.array = [33, 3, 3, 2, 3, 3, 3, 31, 2, 3, 3, 3, 3, 3, 3,];
            this.market_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new Mall()));
            });
            this.server_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new CustomerService()));
            });
            this.mgs_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new Mail()));
            });
            this.combat_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new VictoryShow()));
            });
            this.setting_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new Set()));
            });
            this.invitation_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new InvitationCode(91546323)));
            });
            this.user_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new UserInfo()));
            });
            this.addGold_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new Recharge()));
            });
            this.addZuanShi_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new Recharge()));
            });
            this.creatRoom_btn.on(Event$q.CLICK, this, () => {
                Base.sendNet.sendCreatGame({
                    Data: {
                        "MaxUser": 6,
                        "MinUser": 2,
                        "GamePlaying": "Bull.Max",
                        "BaseScore": 1
                    }
                });
            });
            this.typeHide_btn.on(Event$q.CLICK, this, () => {
                this.GameTypeSelection_view.hideSelf(() => {
                    this.typeHide_btn.visible = false;
                    Laya.Tween.to(this.icon_list, { x: 0 }, 200);
                });
            });
        }
        updateItem(cell, index) {
            let btn = cell.getChildByName("icon_image");
            btn.clickHandler = Laya.Handler.create(this, () => {
                Laya.Tween.to(this.icon_list, { x: -2000 }, 200, null, Laya.Handler.create(this, () => {
                    this.GameTypeSelection_view.visible = true;
                    this.GameTypeSelection_view.setImages(ImageList.ThreeDuke, (e) => {
                        console.log(e);
                    });
                    this.typeHide_btn.visible = true;
                }));
            });
        }
        selectItem(index) {
        }
    }

    var Event$r = Laya.Event;
    class Hundredspk extends ui.Hall.Hundredsofpeople.HundredspkUI {
        constructor() {
            super();
        }
        onAwake() {
            for (let index = 0; index < 5; index++) {
                this[`btn_${index}`].on(Event$r.CLICK, this, () => {
                    console.log(index);
                });
            }
        }
    }

    var Event$s = Laya.Event;
    class Promotion extends ui.Hall.Promotions.PromotionsUI {
        constructor() {
            super();
        }
        onAwake() {
            this.hideAllGroup();
            this.setGroup(0);
            this.tabButtons.changeHandle = (index) => {
                this.setGroup(index);
            };
            this.close_btn.on(Event$s.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.tabButtons.checkIndex = 0;
        }
        setGroup(index) {
            this.hideAllGroup();
            this.groups.getChildAt(index).visible = true;
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
    }

    var Event$t = Laya.Event;
    var Handler$h = Laya.Handler;
    class Safe extends ui.Hall.Safe.SafeUI {
        constructor() {
            super();
        }
        onAwake() {
            this.safe_text.text = Base.userInfo.safeMoney + "";
            this.money_text.text = Base.userInfo.money + "";
            this.tabButtons.changeHandle = (index) => {
                this.curIndex = index;
                this.hideAllGroup();
                switch (index) {
                    case 0: {
                        this.access_group.visible = true;
                        this.moneys_group.visible = true;
                        this.money_input.text = "";
                        this.money_input.prompt = "请输入存入金额";
                        break;
                    }
                    case 1: {
                        this.access_group.visible = true;
                        this.moneys_group.visible = true;
                        this.money_input.text = "";
                        this.money_input.prompt = "请输入取出金额";
                        break;
                    }
                    case 2: {
                        this.access_list.visible = true;
                        break;
                    }
                    case 3: {
                        this.give_group.visible = true;
                        break;
                    }
                    case 4: {
                        this.giveDetail_group.visible = true;
                        break;
                    }
                }
            };
            this.tabButtons.checkIndex = 0;
            this.close_btn.on(Event$t.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.plus_btn.on(Event$t.CLICK, this, () => {
                this.money_slider.percent = this.money_slider.percent + 1;
            });
            this.reduce_btn.on(Event$t.CLICK, this, () => {
                this.money_slider.percent = this.money_slider.percent - 1;
            });
            this.clearInput_btn.on(Event$t.CLICK, this, () => {
                this.money_slider.percent = 0;
            });
            this.accessConfirm_btn.on(Event$t.CLICK, this, () => {
                console.log(this.money_input.text);
            });
            this.money_input.on(Event$t.INPUT, this, (e) => {
                let number = e.text ? parseInt(e.text) : 0;
                this.money_slider.percent = number / Base.userInfo.money * 100;
            });
            this.money_slider.changeHandler = (percent) => {
                this.money_input.text = Math.floor(Base.userInfo.money / 100 * percent) + "";
            };
            this.money_slider.percent = 0;
            this.access_list.vScrollBarSkin = "";
            this.access_list.renderHandler = new Handler$h(this, this.updateItem);
            this.access_list.array = [6, 8888, 122, 122, 666, 47];
            this.giveDetail_list.vScrollBarSkin = "";
            this.giveDetail_list.renderHandler = new Handler$h(this, this.giveDetialUpdateItem);
            this.giveDetail_list.array = [6, 3, 44, 22, 666, 476, 8888, 122, 122, 666, 476, 3, 44, 22, 666, 476, 8888, 122, 122, 666, 4];
            this.recordUser_btn.on(Event$t.CLICK, this, () => {
                console.log(this.userid_input.text);
            });
            this.giveRecords_btn.on(Event$t.CLICK, this, () => {
                this.tabButtons.checkIndex = 4;
            });
            this.giveCancel_btn.on(Event$t.CLICK, this, () => {
                this.give_input.text = "";
                this.userid_input.text = "";
            });
            this.giveConfirm_btn.on(Event$t.CLICK, this, () => {
                console.log(this.give_input.text);
                console.log(this.userid_input.text);
            });
        }
        updateItem(cell, index) {
            let accessType_text = cell.getChildByName("accessType_text");
            let date_text = cell.getChildByName("date_text");
            let amount_text = cell.getChildByName("amount_text");
            let access_status = cell.getChildByName("access_status");
            accessType_text.text = index % 2 ? "存款" : "取款";
            access_status.text = index % 2 ? "成功" : "失败";
            date_text.text = this.access_list.array[index];
            amount_text.text = this.access_list.array[index];
        }
        giveDetialUpdateItem(cell, index) {
            let giverid_text = cell.getChildByName("giverid_text");
            let giveMoney_text = cell.getChildByName("giveMoney_text");
            let receiverid_text = cell.getChildByName("receiverid_text");
            let giveDate_text = cell.getChildByName("giveDate_text");
            giverid_text.text = this.giveDetail_list.array[index];
            giveMoney_text.text = this.giveDetail_list.array[index];
            receiverid_text.text = this.giveDetail_list.array[index];
            giveDate_text.text = this.giveDetail_list.array[index];
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
    }

    var Handler$i = Laya.Handler;
    var HouseItem = ui.Hall.TeaHouse.HouseItemUI;
    var Event$u = Laya.Event;
    class CreateTeaHouse extends ui.Hall.TeaHouse.CreateTeaHouseUI {
        constructor() {
            super();
            this.houseSelect = -1;
            this.military_btn.on(Event$u.CLICK, this, this.clickMilitary);
            this.hall_btn.on(Event$u.CLICK, this, this.clickHall);
            this.creat_btn.on(Event$u.CLICK, this, () => {
                this.creatHouse.visible = true;
                this.joinHouse.visible = false;
            });
            this.creat_close_btn.on(Event$u.CLICK, this, () => {
                this.creatHouse.visible = false;
            });
            this.join_btn.on(Event$u.CLICK, this, () => {
                this.creatHouse.visible = false;
                this.joinHouse.visible = true;
            });
            this.join_close_btn.on(Event$u.CLICK, this, () => {
                this.joinHouse.visible = false;
            });
            for (let i = 0; i < 10; i++) {
                this[`num_${i}`].on(Event$u.CLICK, this, () => {
                    console.log(i);
                    if (this.search_text.text.length < 6)
                        this.search_text.text += i;
                });
            }
            this.backspace.on(Event$u.CLICK, this, () => {
                if (this.search_text.text.length > 0)
                    this.search_text.text = this.search_text.text.slice(0, this.search_text.text.length - 1);
            });
            this.search_btn.on(Event$u.CLICK, this, () => {
                console.log(parseInt(this.search_text.text));
            });
            this.set_btn.on(Event$u.CLICK, this, () => {
                this.houseSet.visible = true;
            });
            this.house_set_close.on(Event$u.CLICK, this, () => {
                this.houseSet.visible = false;
            });
        }
        onAwake() {
            this.houseList.selectEnable = true;
            this.houseList.itemRender = HouseItem;
            this.houseList.vScrollBarSkin = "";
            this.houseList.selectHandler = new Handler$i(this, this.onSelect, null, false);
            this.houseList.renderHandler = new Handler$i(this, this.updateItem);
            this.houseList.repeatX = 1;
            this.houseList.repeatY = 6;
            setTimeout(() => {
                this.houseList.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];
            }, 50);
        }
        updateItem(cell, index) {
            cell.selected.visible = false;
            cell.unselect.visible = true;
            if (cell.selected && this.houseSelect == index) {
                cell.selected.visible = true;
                cell.unselect.visible = false;
            }
        }
        onSelect(index) {
            console.log("当前选择的索引：" + index);
            this.houseSelect = index;
        }
        clickMilitary() {
            this.rankList.visible = true;
            this.houseHall.visible = false;
            this.military_btn.loadImage("TeaHouse/TeaHousehall.png");
            this.hall_btn.loadImage("TeaHouse/VictoryRecordFalse.png");
        }
        clickHall() {
            this.rankList.visible = false;
            this.houseHall.visible = true;
            this.military_btn.loadImage("TeaHouse/VictoryRecord.png");
            this.hall_btn.loadImage("TeaHouse/TeaHousehallTrue.png");
        }
    }

    var Event$v = Laya.Event;
    class Withdrawal extends ui.Hall.Withdrawal.WithdrawalUI {
        constructor() {
            super();
            this.userMoney = 845242;
        }
        onAwake() {
            this.userMoney_text.text = Base.userInfo.money + "";
            this.tabButtons.changeHandle = (index) => {
                if (this.record_group.visible)
                    return;
                let iszfb = (index == 0);
                this.widthDraw_group.visible = true;
                this.yhk_group.visible = !iszfb;
                this.zfb_group.visible = iszfb;
            };
            this.record_btn.on(Event$v.CLICK, this, () => {
                this.widthDraw_group.visible = false;
                this.record_group.visible = true;
            });
            this.recordg_btn.on(Event$v.CLICK, this, () => {
                this.widthDraw_group.visible = true;
                this.record_group.visible = false;
                this.tabButtons.checkIndex = this.tabButtons.checkIndex;
            });
            this.contact_btn.on(Event$v.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new CustomerService()));
            });
            this.bind_btn.on(Event$v.CLICK, this, () => {
                let userView = this.addChild(new UserInfo(2));
                userView.visible = false;
                Base.publicFun.showAlert(userView);
            });
            this.close_btn.on(Event$v.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.clearInput_btn.on(Event$v.CLICK, this, () => {
                this.money_slider.percent = 0;
            });
            this.confirm_btn.on(Event$v.CLICK, this, () => {
                console.log(this.money_input.text);
            });
            this.selectAll_btn.on(Event$v.CLICK, this, () => {
                this.money_slider.percent = 100;
            });
            this.money_input.on(Event$v.INPUT, this, (e) => {
                let number = e.text ? parseInt(e.text) : 0;
                this.money_slider.percent = number / Base.userInfo.money * 100;
            });
            this.money_slider.changeHandler = (percent) => {
                this.money_input.text = Math.floor(Base.userInfo.money / 100 * percent) + "";
            };
            this.money_slider.percent = 0;
        }
        updateItem(cell, index) {
        }
    }

    var Event$w = Laya.Event;
    class forgetPass extends ui.Login.forgetPassUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$w.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.getCaptcha_btn.on(Event$w.CLICK, this, () => {
                console.log("颜真吗");
            });
            this.confirm_btn.on(Event$w.CLICK, this, () => {
                console.log(this.account_input.text);
                console.log(this.password_input.text);
                console.log(this.confirmpass_input.text);
                console.log(this.captcha_input.text);
            });
        }
    }

    var Event$x = Laya.Event;
    class accountLogin extends ui.Login.accountLoginUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$x.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.confirm_btn.on(Event$x.CLICK, this, () => {
                console.log(this.account_input.text);
                console.log(this.password_input.text);
            });
        }
    }

    var Event$y = Laya.Event;
    class wachatLogin extends ui.Login.wachatLoginUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$y.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
        }
    }

    var Event$z = Laya.Event;
    class Login extends ui.Login.LoginUI {
        constructor() {
            super();
        }
        onAwake() {
            this.accountLogin_btn.on(Event$z.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new accountLogin()));
            });
            this.QQLogin_btn.on(Event$z.CLICK, this, () => {
            });
            this.chatLogin_btn.on(Event$z.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new wachatLogin()));
            });
            this.quickLogin_btn.on(Event$z.CLICK, this, () => {
            });
        }
    }

    var Event$A = Laya.Event;
    class rigisteraccount extends ui.Login.rigisteraccountUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$A.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.getCaptcha_btn.on(Event$A.CLICK, this, () => {
                console.log("颜真吗");
            });
            this.confirm_btn.on(Event$A.CLICK, this, () => {
                console.log(this.account_input.text);
                console.log(this.password_input.text);
                console.log(this.confirmpass_input.text);
                console.log(this.captcha_input.text);
            });
        }
    }

    var Handler$j = Laya.Handler;
    var Tween$6 = Laya.Tween;
    var Event$B = Laya.Event;
    class playScene extends ui.playSceneUI {
        constructor() {
            super();
            this.cardUnknow = new Array();
            this.leftHand = new Array();
            this.rightHand = new Array();
            this.upHand = new Array();
            this.downHand = new Array();
            this.pengDown = new Array();
            this.pengLeft = new Array();
            this.pengRight = new Array();
            this.pengUp = new Array();
            this.leftShowed = new Array();
            this.rightShowed = new Array();
            this.downShowed = new Array();
            this.upShowed = new Array();
            this.dealTimes = 0;
            this.point = new Laya.Vector2();
        }
        onAwake() {
            this.cardMeshName = ["res/LayaScene_playScene/Conventional/Assets/majiang/Materials/mj_dif.lmat"];
            for (let i = 1; i < 42; i++) {
                this.cardMeshName.push(`res/LayaScene_playScene/Conventional/Assets/majiang/Materials/mj_dif ${i}.lmat`);
            }
            Laya.loader.create(["res/LayaScene_playScene/Conventional/playScene.ls", ...this.cardMeshName], Laya.Handler.create(this, this.onCreated), Laya.Handler.create(this, (e) => {
            }));
            this.fapai.clickHandler = new Handler$j(this, this.onClickButton, [this.fapai]);
            this.mopai.clickHandler = new Handler$j(this, this.onClickMopai, [this.mopai]);
            this.dapai.clickHandler = new Handler$j(this, this.onClickDapai, [this.dapai]);
            this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            this.point = new Laya.Vector2();
            this._outHitResult = new Laya.HitResult();
        }
        onClickDapai(button) {
            let card5 = this.downHand[5];
            card5.active = false;
            let card13 = this.downHand[13];
            Tween$6.to(card13.transform, { localPositionZ: card13.transform.localPositionZ - 0.05, localRotationEulerY: 30 }, 300, null, Handler$j.create(this, () => {
                Tween$6.to(card13.transform, { localPositionX: card5.transform.localPositionX, localRotationEulerY: 0 }, 500, null, Handler$j.create(this, () => {
                    Tween$6.to(card13.transform, { localPositionZ: 0 }, 300);
                }));
            }));
        }
        onClickMopai(button) {
            console.log("摸牌哦");
            let targetCard = this.downHand[13];
            if (!targetCard.active) {
                let card = this.cardUnknow.shift();
                card.active = false;
                targetCard.active = true;
            }
        }
        onClickButton(button) {
            console.log("发牌哦");
            this.handArr = [this.downHand, this.leftHand, this.upHand, this.rightHand];
            Laya.timer.loop(100, this, this.dealCards);
        }
        dealCards() {
            let curHand = this.handArr[this.dealTimes % 4];
            let integer = Math.floor(this.dealTimes / 4);
            if (integer <= 2) {
                for (let i = integer * 4; i < (integer + 1) * 4; i++) {
                    curHand[i].active = true;
                }
                for (let i = 0; i < 4; i++) {
                    let card = this.cardUnknow.shift();
                    card.active = false;
                }
            }
            else {
                curHand[integer * 4].active = true;
                let card = this.cardUnknow.shift();
                card.active = false;
            }
            if (++this.dealTimes >= 16) {
                Laya.timer.clear(this, this.dealCards);
            }
        }
        init(scene) {
            this._camera = scene.getChildByName("Main Camera");
            this._scene3D = scene;
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
                this.pengLeft.push(pengLeft.getChildAt(i));
            }
            for (let i = 0; i < pengUp.numChildren; i++) {
                pengUp.getChildAt(i).active = false;
                this.pengUp.push(pengUp.getChildAt(i));
            }
            for (let i = 0; i < pengRight.numChildren; i++) {
                pengRight.getChildAt(i).active = false;
                this.pengRight.push(pengRight.getChildAt(i));
            }
            let leftShowed = scene.getChildByName("leftShowed");
            let rightShowed = scene.getChildByName("rightShowed");
            let downShowed = scene.getChildByName("downShowed");
            let upShowed = scene.getChildByName("upShowed");
            for (let i = 0; i < leftShowed.numChildren; i++) {
                leftShowed.getChildAt(i).active = false;
                this.leftShowed.push(leftShowed.getChildAt(i));
            }
            for (let i = 0; i < rightShowed.numChildren; i++) {
                rightShowed.getChildAt(i).active = false;
                this.rightShowed.push(rightShowed.getChildAt(i));
            }
            for (let i = 0; i < downShowed.numChildren; i++) {
                downShowed.getChildAt(i).active = false;
                this.downShowed.push(downShowed.getChildAt(i));
            }
            for (let i = 0; i < upShowed.numChildren; i++) {
                upShowed.getChildAt(i).active = false;
                this.upShowed.push(upShowed.getChildAt(i));
            }
            let leftHand = scene.getChildByName("leftHand");
            let rightHand = scene.getChildByName("rightHand");
            let downHand = scene.getChildByName("downHand");
            let upHand = scene.getChildByName("upHand");
            for (let i = 0; i < leftHand.numChildren; i++) {
                leftHand.getChildAt(i).active = false;
                this.leftHand.push(leftHand.getChildAt(i));
            }
            for (let i = 0; i < rightHand.numChildren; i++) {
                rightHand.getChildAt(i).active = false;
                this.rightHand.push(rightHand.getChildAt(i));
            }
            let leng = downHand.numChildren;
            for (let i = 0; i < leng; i++) {
                downHand.getChildAt(i).active = false;
                this.downHand.push((scene.getChildByName("麻将高001").getChildByName("default183").clone()));
                this.downHand[i].active = false;
                this.downHand[i]["clicked"] = false;
                this.downHand[i]["index"] = i;
                downHand.addChild(this.downHand[i]);
                this.downHand[i].transform.localPositionX = downHand.getChildAt(i).transform.localPositionX;
                this.downHand[i].transform.localPositionY = downHand.getChildAt(i).transform.localPositionY;
                this.downHand[i].transform.localPositionZ = downHand.getChildAt(i).transform.localPositionZ;
            }
            for (let i = 0; i < upHand.numChildren; i++) {
                upHand.getChildAt(i).active = false;
                this.upHand.push(upHand.getChildAt(i));
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
        onCreated() {
            let scene = Laya.stage.addChild(Laya.Loader.getRes("res/LayaScene_playScene/Conventional/playScene.ls"));
            scene.zOrder = -1;
            Laya.stage.on(Event$B.MOUSE_UP, this, this.sceneClick);
            this.init(scene);
        }
        sceneClick(e) {
            this.point.x = Laya.MouseManager.instance.mouseX;
            this.point.y = Laya.MouseManager.instance.mouseY;
            console.log(this.point);
            this._camera.viewportPointToRay(this.point, this._ray);
            console.log(this._ray);
            this._scene3D.physicsSimulation.rayCast(this._ray, this._outHitResult);
            if (this._outHitResult.succeeded) {
                let index = this._outHitResult.collider.owner["index"];
                let clicked = this._outHitResult.collider.owner["clicked"];
                Tween$6.to(this.downHand[index].transform, { localPositionZ: clicked ? -0.00 : -0.015 }, 200, null, Handler$j.create(this, () => { }));
                this.downHand.forEach(element => {
                    if (element["index"] != index && element["clicked"]) {
                        Tween$6.to(element.transform, { localPositionZ: 0 }, 200, null, Handler$j.create(this, () => { }));
                        element["clicked"] = false;
                    }
                });
                this._outHitResult.collider.owner["clicked"] = !clicked;
            }
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("Application/GameCommon/widget/CommonProgress.ts", CommonProgress);
            reg("Application/GameCommonUI/CommonPopup.ts", CommonPopup);
            reg("Application/GameCommon/widget/Button.ts", ActionButton);
            reg("Application/GameCommonUI/CommonToast.ts", CommonTaost);
            reg("Application/GameAthleticsBull/AthleticsBullGame.ts", AthleticsBullGame);
            reg("Application/GameCommon/widget/UserPropList.ts", UserPropList);
            reg("Application/GameCommon/widget/User.ts", User);
            reg("Application/GameCommon/widget/Flicker.ts", Flicker);
            reg("Application/GameCommon/widget/PropList.ts", PropList);
            reg("Application/GameCommon/widget/Deal.ts", Deal);
            reg("Application/GameCommon/widget/Bet.ts", Bet);
            reg("Application/GameCommon/widget/Rob.ts", Rob);
            reg("Application/GameCommon/widget/TransAni.ts", TransAni);
            reg("Application/GameCommon/widget/CommonRadioGroup.ts", CommonRadioGroup);
            reg("Application/GameCommon/widget/CommonRadio.ts", CommonRadio);
            reg("Application/GameCommon/widget/CommonCheck.ts", CommonCheck);
            reg("Application/GameAthleticsGoldenFlower/GoldenFlowerGame.ts", GoldenFlowerGame);
            reg("Application/GameCommon/widget/Chip.ts", Chip);
            reg("Application/GameCommon/widget/Prop.ts", Prop);
            reg("Application/GameCommonUI/CommonCreatRoom.ts", CommonCreatRoom);
            reg("Application/GameCommonUI/CommonGameTypeSelection.ts", CommonGameTypeSelection);
            reg("Application/GameCommon/widget/FlutterText.ts", FlutterText);
            reg("Application/GameCommon/widget/HundredBet.ts", HundredBet);
            reg("Application/GameHundredsBenzBmw/Banker.ts", Banker);
            reg("Application/GameCommon/widget/CommonSlider.ts", CommonProgress$1);
            reg("Application/GameHundredsBenzBmw/Player.ts", Player);
            reg("Application/GameHundredsBenzBmw/Playerlist.ts", Playerlist);
            reg("Application/GameHundredsBenzBmw/Roomselection.ts", Roomselection);
            reg("Application/GameHundredsBenzBmw/Rule.ts", Rule);
            reg("Application/GameHundredsBenzBmw/Setting.ts", Setting);
            reg("Application/GameHundredsBenzBmw/Speak.ts", Speak);
            reg("Application/GameHundredsBenzBmw/Table.ts", Table);
            reg("Application/GameHundredsBull/HundredsBull.ts", HundredsBull);
            reg("Application/GameHundredsDice/DiceTable.ts", Dicetable);
            reg("Application/GameHundredsFruit/FruitTable.ts", FruitTable);
            reg("Application/Hall/AgentPromotion/AgentPromotion.ts", AgentPromotion);
            reg("Application/GameCommon/widget/CommonTabButtons.ts", CommonTabButton);
            reg("Application/Hall/Announcement/Announcement.ts", Announcement);
            reg("Application/Hall/CustomerService/CustomerService.ts", CustomerService);
            reg("Application/Hall/DissolutionRoom/DissolutionRoom.ts", DissolutionRoom);
            reg("Application/Hall/DissolutionRoom/DissolutionRoomConfirm.ts", DissolutionRoomConfirm);
            reg("Application/Hall/Hall.ts", Hall);
            reg("Application/Hall/Hundredsofpeople/Hundredspk.ts", Hundredspk);
            reg("Application/Hall/InvitationCode.ts", InvitationCode);
            reg("Application/Hall/Mall/Mall.ts", Mall);
            reg("Application/Hall/Promotions/Promotions.ts", Promotion);
            reg("Application/Hall/Recharge/Recharge.ts", Recharge);
            reg("Application/Hall/Safe/Safe.ts", Safe);
            reg("Application/Hall/Set/Set.ts", Set);
            reg("Application/Hall/TeaHouse/CreateTeaHouse.ts", CreateTeaHouse);
            reg("Application/Hall/UserInfo/UserInfo.ts", UserInfo);
            reg("Application/Hall/VictoryShow.ts", VictoryShow);
            reg("Application/Hall/Withdrawal/Withdrawal.ts", Withdrawal);
            reg("Application/Login/forgetPass.ts", forgetPass);
            reg("Application/Login/Login.ts", Login);
            reg("Application/Login/rigisteraccount.ts", rigisteraccount);
            reg("Application/Login/wachatLogin.ts", wachatLogin);
            reg("Application/playScene.ts", playScene);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Hall/Hall.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
