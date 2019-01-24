/**
 * Entitas Generated Classes for gg
 *
 * do not edit this file
 */
module gg {
  "use strict";

  import Pool = entitas.Pool;
  import Entity = entitas.Entity;
  import Matcher = entitas.Matcher;
  import ISystem = entitas.ISystem;
  import IMatcher = entitas.IMatcher;
  import IComponent = entitas.IComponent;

  export enum CoreComponentIds {
    Position,
    TotalComponents
  }

  entitas.Entity.initialize(CoreComponentIds.TotalComponents, {"entities":128,"components":64});


  export class PositionComponent implements IComponent {
    public x:number;
    public y:number;
  }


  export class Pools {
    
    static _allPools:Array<Pool>;
    
    static get allPools():Array<Pool> {
      if (Pools._allPools == null) {
        Pools._allPools = [Pools.pool];
      }
      return Pools._allPools;
    }
    
    static _pool:Pool;
    
    static get pool():Pool {
      if (Pools._pool == null) {
        Pools._pool = new Pool(CoreComponentIds, CoreComponentIds.TotalComponents, undefined);
        entitas.viewer.VisualDebugging.init(Pools._pool);
      }
    
      return Pools._pool;
    }
  }
}