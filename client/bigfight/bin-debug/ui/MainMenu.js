var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MainMenu = (function () {
    function MainMenu() {
        this.root = fairygui.UIPackage.createObject("loading", "loadingUI").asCom;
        this.root.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this.root);
    }
    return MainMenu;
}());
__reflect(MainMenu.prototype, "MainMenu");
//# sourceMappingURL=MainMenu.js.map