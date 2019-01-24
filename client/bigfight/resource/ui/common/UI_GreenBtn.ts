/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module common {

	export class UI_GreenBtn extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://1h136af7h16h3";

		public static createInstance():UI_GreenBtn {
			return <UI_GreenBtn><any>(fairygui.UIPackage.createObject("common","GreenBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}