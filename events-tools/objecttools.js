var gdjs;(function(i){let R;(function(O){let x;(function(g){g.pickOnly=function(n,t){for(const e in n.items)if(n.items.hasOwnProperty(e)){const s=n.items[e];s.indexOf(t)===-1?s.length=0:(s.length=0,s.push(t))}},g.twoListsTest=function(n,t,e,s,o){let f=!1;const r=i.staticArray(i.evtTools.object.twoListsTest);t.values(r);const u=i.staticArray2(i.evtTools.object.twoListsTest);e.values(u);for(let c=0,h=r.length;c<h;++c){let a=r[c];for(let l=0,b=a.length;l<b;++l)a[l].pick=!1}for(let c=0,h=u.length;c<h;++c){let a=u[c];for(let l=0,b=a.length;l<b;++l)a[l].pick=!1}for(let c=0,h=r.length;c<h;++c){const a=r[c];for(let l=0,b=a.length;l<b;++l){let d=!1;for(let m=0,v=u.length;m<v;++m){const k=u[m];for(let p=0,C=k.length;p<C;++p)a[l].pick&&k[p].pick||a[l].id!==k[p].id&&n(a[l],k[p],o)&&(s||(f=!0,a[l].pick=!0,k[p].pick=!0),d=!0)}!d&&s&&(f=!0,a[l].pick=!0)}}for(let c=0,h=r.length;c<h;++c){let a=r[c],l=0;for(let b=0,d=a.length;b<d;++b){let m=a[b];a[b].pick&&(a[l]=m,l++)}a.length=l}if(!s)for(let c=0,h=u.length;c<h;++c){let a=u[c],l=0;for(let b=0,d=a.length;b<d;++b){let m=a[b];a[b].pick&&(a[l]=m,l++)}a.length=l}return f},g.pickObjectsIf=function(n,t,e,s){let o=!1;const f=i.staticArray(i.evtTools.object.pickObjectsIf);t.values(f);for(let r=0,u=f.length;r<u;++r){const c=f[r];for(let h=0,a=c.length;h<a;++h){const l=c[h];e^n(l,s)?(o=!0,l.pick=!0):l.pick=!1}}for(let r=0,u=f.length;r<u;++r)i.evtTools.object.filterPickedObjectsList(f[r]);return o},g.filterPickedObjectsList=function(n){let t=0;for(let e=0,s=n.length;e<s;++e){const o=n[e];o.pick&&(n[t]=o,t++)}n.length=t},g.hitBoxesCollisionTest=function(n,t,e,s,o){return i.evtTools.object.twoListsTest(i.RuntimeObject.collisionTest,n,t,e,o)},g._distanceBetweenObjects=function(n,t,e){return n.getSqDistanceToObject(t)<=e},g.distanceTest=function(n,t,e,s){return i.evtTools.object.twoListsTest(i.evtTools.object._distanceBetweenObjects,n,t,s,e*e)},g._movesToward=function(n,t,e){if(n.hasNoForces())return!1;let s=Math.atan2(t.getDrawableY()+t.getCenterY()-(n.getDrawableY()+n.getCenterY()),t.getDrawableX()+t.getCenterX()-(n.getDrawableX()+n.getCenterX()));return s*=180/3.14159,Math.abs(i.evtTools.common.angleDifference(n.getAverageForce().getAngle(),s))<=e/2},g.movesTowardTest=function(n,t,e,s){return i.evtTools.object.twoListsTest(i.evtTools.object._movesToward,n,t,s,e)},g._turnedToward=function(n,t,e){let s=Math.atan2(t.getDrawableY()+t.getCenterY()-(n.getDrawableY()+n.getCenterY()),t.getDrawableX()+t.getCenterX()-(n.getDrawableX()+n.getCenterX()));return s*=180/3.14159,Math.abs(i.evtTools.common.angleDifference(n.getAngle(),s))<=e/2},g.turnedTowardTest=function(n,t,e,s){return i.evtTools.object.twoListsTest(i.evtTools.object._turnedToward,n,t,s,e)},g.pickAllObjects=function(n,t){for(const e in t.items)if(t.items.hasOwnProperty(e)){const s=n.getObjects(e),o=t.items[e];o.length=0,o.push.apply(o,s)}return!0},g.pickRandomObject=function(n,t){let e=0;for(let r in t.items)t.items.hasOwnProperty(r)&&(e+=t.items[r].length);if(e===0)return!1;let s=Math.floor(Math.random()*e);s>=e&&(s=e-1);let o=0,f=null;for(let r in t.items)if(t.items.hasOwnProperty(r)){let u=t.items[r];if(s-o<u.length){f=u[s-o];break}o+=u.length}return i.evtTools.object.pickOnly(t,f),!0},g.pickNearestObject=function(n,t,e,s){let o=null,f=0,r=!0;const u=i.staticArray(i.evtTools.object.pickNearestObject);n.values(u);for(let c=0,h=u.length;c<h;++c){const a=u[c];for(let l=0;l<a.length;++l){const b=a[l],d=b.getSqDistanceToPosition(t,e);(r||d<f^s)&&(f=d,o=b),r=!1}}return o?(i.evtTools.object.pickOnly(n,o),!0):!1},g.raycastObject=function(n,t,e,s,o,f,r,u){return i.evtTools.object.raycastObjectToPosition(n,t,e,t+o*Math.cos(s*Math.PI/180),e+o*Math.sin(s*Math.PI/180),f,r,u)},g.raycastObjectToPosition=function(n,t,e,s,o,f,r,u){let c=null,h=u?0:(s-t)*(s-t)+(o-e)*(o-e),a=0,l=0;const b=i.staticArray(i.evtTools.object.raycastObjectToPosition);n.values(b);for(let d=0;d<b.length;d++){const m=b[d];for(let v=0;v<m.length;v++){const k=m[v],p=k.raycastTest(t,e,s,o,!u);p.collision&&(!u&&p.closeSqDist<=h?(h=p.closeSqDist,c=k,a=p.closeX,l=p.closeY):u&&p.farSqDist>=h&&(h=p.farSqDist,c=k,a=p.farX,l=p.farY))}}return c?(i.evtTools.object.pickOnly(n,c),f.setNumber(a),r.setNumber(l),!0):!1},g.doCreateObjectOnScene=function(n,t,e,s,o,f){const r=n.createObject(t),u=n.getLayer(f);r!==null&&(r.setPosition(s,o),r.setLayer(f),r.setZOrder(u.getDefaultZOrder()),e.containsKey(t)&&e.get(t).push(r))},g.createObjectOnScene=function(n,t,e,s,o){i.evtTools.object.doCreateObjectOnScene(n,t.firstKey(),t,e,s,o)},g.createObjectFromGroupOnScene=function(n,t,e,s,o,f){i.evtTools.object.doCreateObjectOnScene(n,e,t,s,o,f)},g.getPickedInstancesCount=n=>{let t=0;const e=i.staticArray(i.evtTools.object.getPickedInstancesCount);n.values(e);for(let s=0,o=e.length;s<o;++s)t+=e[s].length;return t},g.getSceneInstancesCount=(n,t)=>{let e=0;const s=i.staticArray(i.evtTools.object.getSceneInstancesCount);t.keys(s);const o=new Set(s);for(const f of o)e+=n.getInstancesCountOnScene(f);return e},g.pickedObjectsCount=g.getPickedInstancesCount})(x=O.object||(O.object={}))})(R=i.evtTools||(i.evtTools={}));class w{constructor(){this.objectsLists=new Map;this.callbacks=new Map;this.parent=null}static from(O){const j=new w;return j.parent=O,j}getOrCreateList(O){return this.objectsLists.has(O)||this.objectsLists.set(O,[]),this.objectsLists.get(O)}getObjects(O){return!this.objectsLists.has(O)&&this.parent?this.parent.getObjects(O):this.objectsLists.get(O)||[]}addObject(O,j){const T=this.getOrCreateList(O);if(T.includes(j))return;T.push(j);const y=()=>this.removeObject(O,j);this.callbacks.set(j,y),j.registerDestroyCallback(y)}removeObject(O,j){const T=this.getOrCreateList(O),y=T.indexOf(j);y!==-1&&(T.splice(y,1),j.unregisterDestroyCallback(this.callbacks.get(j)),this.callbacks.delete(j))}}i.LongLivedObjectsList=w})(gdjs||(gdjs={}));
//# sourceMappingURL=objecttools.js.map
