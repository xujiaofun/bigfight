/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module loading {

	export class UI_loadingUI extends fairygui.GComponent {

		public m_n5:fairygui.GImage;
		public m_n3:fairygui.GTextField;
		public m_startGameBtn:fairygui.GButton;
		public m_n6:fairygui.GButton;

		public static URL:string = "ui://14p6n2g7h16h1";

		public static createInstance():UI_loadingUI {
			return <UI_loadingUI><any>(fairygui.UIPackage.createObject("loading","loadingUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n3 = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_startGameBtn = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_n6 = <fairygui.GButton><any>(this.getChildAt(3));
		}
	}
}