module gg {
	import Pools = gg.Pools;
	import Systems = entitas.Systems;
	export class GameController extends egret.DisplayObjectContainer {
		private _systems:Systems;

		public constructor() {
			super();
			this._systems = this.createSystems(Pools.pool)
			this.addEventListener(egret.Event.ENTER_FRAME, this.update, this)
		}

		private createSystems(pool) {
			return new Systems()
				.add(pool.createSystem(gg.GameInitSystem))

		}

		private update(dt) {

		}
	}
}
