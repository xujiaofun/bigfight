module gg {
	import Pool = entitas.Pool;
	import Group = entitas.Group;
	import Entity = entitas.Entity;
	import Matcher = entitas.Matcher;
	import Exception = entitas.Exception;
	import TriggerOnEvent = entitas.TriggerOnEvent;
	import IExecuteSystem = entitas.IExecuteSystem;
	import ISetPool = entitas.ISetPool;

	export class GameInitSystem implements IExecuteSystem, ISetPool {
		protected pool:Pool;
		protected group:Group;

		public execute() {
			var entities = this.group.getEntities();
			
		}
		
		public setPool(pool:Pool) {
			this.pool = pool;
			this.group = pool.getGroup(Matcher.allOf(Matcher.Position));
		}
	}
}