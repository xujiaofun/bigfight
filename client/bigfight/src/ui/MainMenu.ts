class MainMenu {
	private root: fairygui.GComponent;

	public constructor() {
		this.root = fairygui.UIPackage.createObject("loading","loadingUI").asCom;
        this.root.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height)
        fairygui.GRoot.inst.addChild(this.root)
	}
}

