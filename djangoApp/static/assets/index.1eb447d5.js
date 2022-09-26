(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function U(){}function ce(t,e){for(const n in e)t[n]=e[n];return t}function Tt(t){return t()}function Qe(){return Object.create(null)}function ae(t){t.forEach(Tt)}function qt(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Kt(t){return Object.keys(t).length===0}function Mt(t,...e){if(t==null)return U;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ie(t,e,n){t.$$.on_destroy.push(Mt(e,n))}function Ve(t,e,n,l){if(t){const i=Pt(t,e,n,l);return t[0](i)}}function Pt(t,e,n,l){return t[1]&&l?ce(n.ctx.slice(),t[1](l(e))):n.ctx}function Ye(t,e,n,l){if(t[2]&&l){const i=t[2](l(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|i[u];return o}return e.dirty|i}return e.dirty}function We(t,e,n,l,i,o){if(i){const s=Pt(e,n,l,o);t.p(s,i)}}function Je(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function je(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ge(t,e){const n={};e=new Set(e);for(const l in t)!e.has(l)&&l[0]!=="$"&&(n[l]=t[l]);return n}function Xe(t){return t==null?"":t}function g(t,e){t.appendChild(e)}function M(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function I(){return G(" ")}function he(){return G("")}function X(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function Ut(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ze(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const l in e)e[l]==null?t.removeAttribute(l):l==="style"?t.style.cssText=e[l]:l==="__value"?t.value=t[l]=e[l]:n[l]&&n[l].set?t[l]=e[l]:p(t,l,e[l])}function jt(t){return Array.from(t.childNodes)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function xe(t,e){t.value=e==null?"":e}function Bt(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function Te(t,e){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e){l.selected=!0;return}}t.selectedIndex=-1}function et(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function zt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,l,e),i}let ye;function ke(t){ye=t}function Ee(){if(!ye)throw new Error("Function called outside component initialization");return ye}function It(t){Ee().$$.on_mount.push(t)}function Ct(t){Ee().$$.on_destroy.push(t)}function Ft(){const t=Ee();return(e,n,{cancelable:l=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=zt(e,n,{cancelable:l});return i.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function tt(t,e){return Ee().$$.context.set(t,e),e}function _e(t){return Ee().$$.context.get(t)}const ve=[],nt=[],Pe=[],lt=[],Vt=Promise.resolve();let Be=!1;function Yt(){Be||(Be=!0,Vt.then(Lt))}function be(t){Pe.push(t)}const Re=new Set;let qe=0;function Lt(){const t=ye;do{for(;qe<ve.length;){const e=ve[qe];qe++,ke(e),Wt(e.$$)}for(ke(null),ve.length=0,qe=0;nt.length;)nt.pop()();for(let e=0;e<Pe.length;e+=1){const n=Pe[e];Re.has(n)||(Re.add(n),n())}Pe.length=0}while(ve.length);for(;lt.length;)lt.pop()();Be=!1,Re.clear(),ke(t)}function Wt(t){if(t.fragment!==null){t.update(),ae(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}const Ie=new Set;let ue;function $e(){ue={r:0,c:[],p:ue}}function we(){ue.r||ae(ue.c),ue=ue.p}function O(t,e){t&&t.i&&(Ie.delete(t),t.i(e))}function A(t,e,n,l){if(t&&t.o){if(Ie.has(t))return;Ie.add(t),ue.c.push(()=>{Ie.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Le(t,e){t.d(1),e.delete(t.key)}function Jt(t,e){A(t,1,1,()=>{e.delete(t.key)})}function Se(t,e,n,l,i,o,s,u,r,c,d,k){let a=t.length,h=o.length,y=a;const w={};for(;y--;)w[t[y].key]=y;const f=[],v=new Map,S=new Map;for(y=h;y--;){const m=k(i,o,y),P=n(m);let C=s.get(P);C?l&&C.p(m,e):(C=c(P,m),C.c()),v.set(P,f[y]=C),P in w&&S.set(P,Math.abs(y-w[P]))}const D=new Set,_=new Set;function q(m){O(m,1),m.m(u,d),s.set(m.key,m),d=m.first,h--}for(;a&&h;){const m=f[h-1],P=t[a-1],C=m.key,R=P.key;m===P?(d=m.first,a--,h--):v.has(R)?!s.has(C)||D.has(C)?q(m):_.has(R)?a--:S.get(C)>S.get(R)?(_.add(C),q(m)):(D.add(R),a--):(r(P,s),a--)}for(;a--;){const m=t[a];v.has(m.key)||r(m,s)}for(;h;)q(f[h-1]);return f}function Nt(t,e){const n={},l={},i={$$scope:1};let o=t.length;for(;o--;){const s=t[o],u=e[o];if(u){for(const r in s)r in u||(l[r]=1);for(const r in u)i[r]||(n[r]=u[r],i[r]=1);t[o]=u}else for(const r in s)i[r]=1}for(const s in l)s in n||(n[s]=void 0);return n}function it(t){return typeof t=="object"&&t!==null?t:{}}function Q(t){t&&t.c()}function V(t,e,n,l){const{fragment:i,on_mount:o,on_destroy:s,after_update:u}=t.$$;i&&i.m(e,n),l||be(()=>{const r=o.map(Tt).filter(qt);s?s.push(...r):ae(r),t.$$.on_mount=[]}),u.forEach(be)}function Y(t,e){const n=t.$$;n.fragment!==null&&(ae(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(ve.push(t),Yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,l,i,o,s,u=[-1]){const r=ye;ke(t);const c=t.$$={fragment:null,ctx:null,props:o,update:U,not_equal:i,bound:Qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Qe(),dirty:u,skip_bound:!1,root:e.target||r.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(k,a,...h)=>{const y=h.length?h[0]:a;return c.ctx&&i(c.ctx[k],c.ctx[k]=y)&&(!c.skip_bound&&c.bound[k]&&c.bound[k](y),d&&Qt(t,k)),a}):[],c.update(),d=!0,ae(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const k=jt(e.target);c.fragment&&c.fragment.l(k),k.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&O(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),Lt()}ke(r)}class re{$destroy(){Y(this,1),this.$destroy=U}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!Kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de=[];function Gt(t,e){return{subscribe:pe(t,e).subscribe}}function pe(t,e=U){let n;const l=new Set;function i(u){if(le(t,u)&&(t=u,n)){const r=!de.length;for(const c of l)c[1](),de.push(c,t);if(r){for(let c=0;c<de.length;c+=2)de[c][0](de[c+1]);de.length=0}}}function o(u){i(u(t))}function s(u,r=U){const c=[u,r];return l.add(c),l.size===1&&(n=e(i)||U),u(t),()=>{l.delete(c),l.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:s}}function Xt(t,e,n){const l=!Array.isArray(t),i=l?[t]:t,o=e.length<2;return Gt(n,s=>{let u=!1;const r=[];let c=0,d=U;const k=()=>{if(c)return;d();const h=e(l?r[0]:r,s);o?s(h):d=qt(h)?h:U},a=i.map((h,y)=>Mt(h,w=>{r[y]=w,c&=~(1<<y),u&&k()},()=>{c|=1<<y}));return u=!0,k(),function(){ae(a),d()}})}const Ne={},Oe={};function Ae(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function Zt(t,e){const n=[];let l=Ae(t);return{get location(){return l},listen(i){n.push(i);const o=()=>{l=Ae(t),i({location:l,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const s=n.indexOf(i);n.splice(s,1)}},navigate(i,{state:o,replace:s=!1}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,null,i):t.history.pushState(o,null,i)}catch{t.location[s?"replace":"assign"](i)}l=Ae(t),n.forEach(u=>u({location:l,action:"PUSH"}))}}}function xt(t="/"){let e=0;const n=[{pathname:t,search:""}],l=[];return{get location(){return n[e]},addEventListener(i,o){},removeEventListener(i,o){},history:{get entries(){return n},get index(){return e},get state(){return l[e]},pushState(i,o,s){const[u,r=""]=s.split("?");e++,n.push({pathname:u,search:r}),l.push(i)},replaceState(i,o,s){const[u,r=""]=s.split("?");n[e]={pathname:u,search:r},l[e]=i}}}}const en=Boolean(typeof window<"u"&&window.document&&window.document.createElement),ze=Zt(en?window:xt()),{navigate:tn}=ze,Ot=/^:(.+)/,ot=4,nn=3,ln=2,on=1,sn=1;function Fe(t,e){return t.substr(0,e.length)===e}function rn(t){return t===""}function un(t){return Ot.test(t)}function Rt(t){return t[0]==="*"}function De(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function He(t){return t.replace(/(^\/+|\/+$)/g,"")}function cn(t,e){const n=t.default?0:De(t.path).reduce((l,i)=>(l+=ot,rn(i)?l+=sn:un(i)?l+=ln:Rt(i)?l-=ot+on:l+=nn,l),0);return{route:t,score:n,index:e}}function an(t){return t.map(cn).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function At(t,e){let n,l;const[i]=e.split("?"),o=De(i),s=o[0]==="",u=an(t);for(let r=0,c=u.length;r<c;r++){const d=u[r].route;let k=!1;if(d.default){l={route:d,params:{},uri:e};continue}const a=De(d.path),h={},y=Math.max(o.length,a.length);let w=0;for(;w<y;w++){const f=a[w],v=o[w];if(f!==void 0&&Rt(f)){const D=f==="*"?"*":f.slice(1);h[D]=o.slice(w).map(decodeURIComponent).join("/");break}if(v===void 0){k=!0;break}let S=Ot.exec(f);if(S&&!s){const D=decodeURIComponent(v);h[S[1]]=D}else if(f!==v){k=!0;break}}if(!k){n={route:d,params:h,uri:"/"+o.slice(0,w).join("/")};break}}return n||l||null}function fn(t,e){return At([t],e)}function Ke(t,e){return t+(e?`?${e}`:"")}function dn(t,e){if(Fe(t,"/"))return t;const[n,l]=t.split("?"),[i]=e.split("?"),o=De(n),s=De(i);if(o[0]==="")return Ke(i,l);if(!Fe(o[0],".")){const c=s.concat(o).join("/");return Ke((i==="/"?"":"/")+c,l)}const u=s.concat(o),r=[];return u.forEach(c=>{c===".."?r.pop():c!=="."&&r.push(c)}),Ke("/"+r.join("/"),l)}function st(t,e){return`${He(e==="/"?t:`${He(t)}/${He(e)}`)}/`}function pn(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mn(t){let e;const n=t[9].default,l=Ve(n,t,t[8],null);return{c(){l&&l.c()},m(i,o){l&&l.m(i,o),e=!0},p(i,[o]){l&&l.p&&(!e||o&256)&&We(l,n,i,i[8],e?Ye(n,i[8],o,null):Je(i[8]),null)},i(i){e||(O(l,i),e=!0)},o(i){A(l,i),e=!1},d(i){l&&l.d(i)}}}function _n(t,e,n){let l,i,o,{$$slots:s={},$$scope:u}=e,{basepath:r="/"}=e,{url:c=null}=e;const d=_e(Ne),k=_e(Oe),a=pe([]);ie(t,a,_=>n(6,i=_));const h=pe(null);let y=!1;const w=d||pe(c?{pathname:c}:ze.location);ie(t,w,_=>n(5,l=_));const f=k?k.routerBase:pe({path:r,uri:r});ie(t,f,_=>n(7,o=_));const v=Xt([f,h],([_,q])=>{if(q===null)return _;const{path:m}=_,{route:P,uri:C}=q;return{path:P.default?m:P.path.replace(/\*.*$/,""),uri:C}});function S(_){const{path:q}=o;let{path:m}=_;if(_._path=m,_.path=st(q,m),typeof window>"u"){if(y)return;const P=fn(_,l.pathname);P&&(h.set(P),y=!0)}else a.update(P=>(P.push(_),P))}function D(_){a.update(q=>{const m=q.indexOf(_);return q.splice(m,1),q})}return d||(It(()=>ze.listen(q=>{w.set(q.location)})),tt(Ne,w)),tt(Oe,{activeRoute:h,base:f,routerBase:v,registerRoute:S,unregisterRoute:D}),t.$$set=_=>{"basepath"in _&&n(3,r=_.basepath),"url"in _&&n(4,c=_.url),"$$scope"in _&&n(8,u=_.$$scope)},t.$$.update=()=>{if(t.$$.dirty&128){const{path:_}=o;a.update(q=>(q.forEach(m=>m.path=st(_,m._path)),q))}if(t.$$.dirty&96){const _=At(i,l.pathname);h.set(_)}},[a,w,f,r,c,l,i,o,u,s]}class hn extends re{constructor(e){super(),se(this,e,_n,mn,le,{basepath:3,url:4})}}const gn=t=>({params:t&4,location:t&16}),rt=t=>({params:t[2],location:t[4]});function ut(t){let e,n,l,i;const o=[kn,vn],s=[];function u(r,c){return r[0]!==null?0:1}return e=u(t),n=s[e]=o[e](t),{c(){n.c(),l=he()},m(r,c){s[e].m(r,c),M(r,l,c),i=!0},p(r,c){let d=e;e=u(r),e===d?s[e].p(r,c):($e(),A(s[d],1,1,()=>{s[d]=null}),we(),n=s[e],n?n.p(r,c):(n=s[e]=o[e](r),n.c()),O(n,1),n.m(l.parentNode,l))},i(r){i||(O(n),i=!0)},o(r){A(n),i=!1},d(r){s[e].d(r),r&&T(l)}}}function vn(t){let e;const n=t[10].default,l=Ve(n,t,t[9],rt);return{c(){l&&l.c()},m(i,o){l&&l.m(i,o),e=!0},p(i,o){l&&l.p&&(!e||o&532)&&We(l,n,i,i[9],e?Ye(n,i[9],o,gn):Je(i[9]),rt)},i(i){e||(O(l,i),e=!0)},o(i){A(l,i),e=!1},d(i){l&&l.d(i)}}}function kn(t){let e,n,l;const i=[{location:t[4]},t[2],t[3]];var o=t[0];function s(u){let r={};for(let c=0;c<i.length;c+=1)r=ce(r,i[c]);return{props:r}}return o&&(e=new o(s())),{c(){e&&Q(e.$$.fragment),n=he()},m(u,r){e&&V(e,u,r),M(u,n,r),l=!0},p(u,r){const c=r&28?Nt(i,[r&16&&{location:u[4]},r&4&&it(u[2]),r&8&&it(u[3])]):{};if(o!==(o=u[0])){if(e){$e();const d=e;A(d.$$.fragment,1,0,()=>{Y(d,1)}),we()}o?(e=new o(s()),Q(e.$$.fragment),O(e.$$.fragment,1),V(e,n.parentNode,n)):e=null}else o&&e.$set(c)},i(u){l||(e&&O(e.$$.fragment,u),l=!0)},o(u){e&&A(e.$$.fragment,u),l=!1},d(u){u&&T(n),e&&Y(e,u)}}}function yn(t){let e,n,l=t[1]!==null&&t[1].route===t[7]&&ut(t);return{c(){l&&l.c(),e=he()},m(i,o){l&&l.m(i,o),M(i,e,o),n=!0},p(i,[o]){i[1]!==null&&i[1].route===i[7]?l?(l.p(i,o),o&2&&O(l,1)):(l=ut(i),l.c(),O(l,1),l.m(e.parentNode,e)):l&&($e(),A(l,1,1,()=>{l=null}),we())},i(i){n||(O(l),n=!0)},o(i){A(l),n=!1},d(i){l&&l.d(i),i&&T(e)}}}function bn(t,e,n){let l,i,{$$slots:o={},$$scope:s}=e,{path:u=""}=e,{component:r=null}=e;const{registerRoute:c,unregisterRoute:d,activeRoute:k}=_e(Oe);ie(t,k,f=>n(1,l=f));const a=_e(Ne);ie(t,a,f=>n(4,i=f));const h={path:u,default:u===""};let y={},w={};return c(h),typeof window<"u"&&Ct(()=>{d(h)}),t.$$set=f=>{n(13,e=ce(ce({},e),je(f))),"path"in f&&n(8,u=f.path),"component"in f&&n(0,r=f.component),"$$scope"in f&&n(9,s=f.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&l&&l.route===h&&n(2,y=l.params);{const{path:f,component:v,...S}=e;n(3,w=S)}},e=je(e),[r,l,y,w,i,k,a,h,u,s,o]}class Me extends re{constructor(e){super(),se(this,e,bn,yn,le,{path:8,component:0})}}function $n(t){let e,n,l,i;const o=t[16].default,s=Ve(o,t,t[15],null);let u=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],r={};for(let c=0;c<u.length;c+=1)r=ce(r,u[c]);return{c(){e=b("a"),s&&s.c(),Ze(e,r)},m(c,d){M(c,e,d),s&&s.m(e,null),n=!0,l||(i=X(e,"click",t[5]),l=!0)},p(c,[d]){s&&s.p&&(!n||d&32768)&&We(s,o,c,c[15],n?Ye(o,c[15],d,null):Je(c[15]),null),Ze(e,r=Nt(u,[(!n||d&1)&&{href:c[0]},(!n||d&4)&&{"aria-current":c[2]},d&2&&c[1],d&64&&c[6]]))},i(c){n||(O(s,c),n=!0)},o(c){A(s,c),n=!1},d(c){c&&T(e),s&&s.d(c),l=!1,i()}}}function wn(t,e,n){let l;const i=["to","replace","state","getProps"];let o=Ge(e,i),s,u,{$$slots:r={},$$scope:c}=e,{to:d="#"}=e,{replace:k=!1}=e,{state:a={}}=e,{getProps:h=()=>({})}=e;const{base:y}=_e(Oe);ie(t,y,m=>n(14,u=m));const w=_e(Ne);ie(t,w,m=>n(13,s=m));const f=Ft();let v,S,D,_;function q(m){if(f("click",m),pn(m)){m.preventDefault();const P=s.pathname===v||k;tn(v,{state:a,replace:P})}}return t.$$set=m=>{e=ce(ce({},e),je(m)),n(6,o=Ge(e,i)),"to"in m&&n(7,d=m.to),"replace"in m&&n(8,k=m.replace),"state"in m&&n(9,a=m.state),"getProps"in m&&n(10,h=m.getProps),"$$scope"in m&&n(15,c=m.$$scope)},t.$$.update=()=>{t.$$.dirty&16512&&n(0,v=d==="/"?u.uri:dn(d,u.uri)),t.$$.dirty&8193&&n(11,S=Fe(s.pathname,v)),t.$$.dirty&8193&&n(12,D=v===s.pathname),t.$$.dirty&4096&&n(2,l=D?"page":void 0),t.$$.dirty&15361&&n(1,_=h({location:s,href:v,isPartiallyCurrent:S,isCurrent:D}))},[v,_,l,y,w,q,o,d,k,a,h,S,D,s,u,c,r]}class Ht extends re{constructor(e){super(),se(this,e,wn,$n,le,{to:7,replace:8,state:9,getProps:10})}}function Sn(t){let e;return{c(){e=b("div"),e.innerHTML=`<h1>Nothing here</h1> 
    <p>That says something about society</p>`},m(n,l){M(n,e,l)},p:U,i:U,o:U,d(n){n&&T(e)}}}class Dn extends re{constructor(e){super(),se(this,e,null,Sn,le,{})}}function En(t){let e;return{c(){e=b("div"),e.innerHTML="<h1>No home page??</h1>"},m(n,l){M(n,e,l)},p:U,i:U,o:U,d(n){n&&T(e)}}}class Tn extends re{constructor(e){super(),se(this,e,null,En,le,{})}}const ct=pe(!1);function at(t,e,n){const l=t.slice();return l[5]=e[n],l[7]=n,l}function qn(t){let e,n=t[5].name+"",l,i,o,s,u;return{c(){e=b("button"),l=G(n),p(e,"id",i=t[7]),p(e,"class",o=Xe(t[5].active)+" svelte-1qmck76")},m(r,c){M(r,e,c),g(e,l),s||(u=X(e,"click",t[2]),s=!0)},p(r,c){c&1&&n!==(n=r[5].name+"")&&oe(l,n),c&1&&i!==(i=r[7])&&p(e,"id",i),c&1&&o!==(o=Xe(r[5].active)+" svelte-1qmck76")&&p(e,"class",o)},d(r){r&&T(e),s=!1,u()}}}function ft(t,e){let n,l,i;return l=new Ht({props:{to:e[5].link,$$slots:{default:[qn]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=he(),Q(l.$$.fragment),this.first=n},m(o,s){M(o,n,s),V(l,o,s),i=!0},p(o,s){e=o;const u={};s&1&&(u.to=e[5].link),s&257&&(u.$$scope={dirty:s,ctx:e}),l.$set(u)},i(o){i||(O(l.$$.fragment,o),i=!0)},o(o){A(l.$$.fragment,o),i=!1},d(o){o&&T(n),Y(l,o)}}}function Mn(t){let e;return{c(){e=b("a"),e.innerHTML='<button class="right login svelte-1qmck76">Log in</button>',p(e,"href","/accounts/login/")},m(n,l){M(n,e,l)},p:U,i:U,o:U,d(n){n&&T(e)}}}function Pn(t){let e,n,l,i;return l=new Ht({props:{to:"customise",$$slots:{default:[In]},$$scope:{ctx:t}}}),{c(){e=b("a"),e.innerHTML='<button class="right svelte-1qmck76">Log out</button>',n=I(),Q(l.$$.fragment),p(e,"href","/accounts/logout/")},m(o,s){M(o,e,s),M(o,n,s),V(l,o,s),i=!0},p(o,s){const u={};s&256&&(u.$$scope={dirty:s,ctx:o}),l.$set(u)},i(o){i||(O(l.$$.fragment,o),i=!0)},o(o){A(l.$$.fragment,o),i=!1},d(o){o&&T(e),o&&T(n),Y(l,o)}}}function In(t){let e,n,l;return{c(){e=b("button"),e.textContent="customise timeplan",p(e,"id",3),p(e,"class","svelte-1qmck76")},m(i,o){M(i,e,o),n||(l=X(e,"click",t[2]),n=!0)},p:U,d(i){i&&T(e),n=!1,l()}}}function Cn(t){let e,n,l=[],i=new Map,o,s,u,r,c,d,k=t[0];const a=f=>f[5].id;for(let f=0;f<k.length;f+=1){let v=at(t,k,f),S=a(v);i.set(S,l[f]=ft(S,v))}const h=[Pn,Mn],y=[];function w(f,v){return f[1]?0:1}return s=w(t),u=y[s]=h[s](t),{c(){e=b("div"),n=b("div");for(let f=0;f<l.length;f+=1)l[f].c();o=I(),u.c(),r=I(),c=b("div"),p(n,"class","nav-bar topnav svelte-1qmck76"),p(n,"id","nav-bar"),p(c,"id","content-block-1"),p(c,"class","svelte-1qmck76")},m(f,v){M(f,e,v),g(e,n);for(let S=0;S<l.length;S+=1)l[S].m(n,null);g(n,o),y[s].m(n,null),g(e,r),g(e,c),d=!0},p(f,[v]){v&5&&(k=f[0],$e(),l=Se(l,v,a,1,f,k,i,n,Jt,ft,o,at),we());let S=s;s=w(f),s===S?y[s].p(f,v):($e(),A(y[S],1,1,()=>{y[S]=null}),we(),u=y[s],u?u.p(f,v):(u=y[s]=h[s](f),u.c()),O(u,1),u.m(n,null))},i(f){if(!d){for(let v=0;v<k.length;v+=1)O(l[v]);O(u),d=!0}},o(f){for(let v=0;v<l.length;v+=1)A(l[v]);A(u),d=!1},d(f){f&&T(e);for(let v=0;v<l.length;v+=1)l[v].d();y[s].d()}}}function Ln(t,e,n){let l;ie(t,ct,r=>n(1,l=r));let i=[{id:0,link:"/",name:"Home",active:"active"},{id:1,link:"about",name:"About",active:""},{id:2,link:"timeplan",name:"Timeplan",active:""}];function o(){const r=document.location.href.split("/");r.includes("about")?u(1):r.includes("timeplan")&&u(2),fetch("api/checkLoginStatus").then(c=>c.json()).then(c=>{ct.set(c.response),console.log(c)}).catch(c=>{console.error("Error:",c)})}function s(r){i.forEach(c=>{c.active=""}),n(0,i[r.target.id].active="active",i)}function u(r){i.forEach(c=>{c.active=""}),n(0,i[r].active="active",i)}return o(),[i,l,s]}class Nn extends re{constructor(e){super(),se(this,e,Ln,Cn,le,{})}}function dt(t,e,n){const l=t.slice();return l[28]=e[n],l[30]=n,l}function pt(t,e,n){const l=t.slice();return l[31]=e[n],l[33]=n,l}function mt(t,e,n){const l=t.slice();return l[34]=e[n],l[30]=n,l}function _t(t,e,n){const l=t.slice();return l[34]=e[n],l[30]=n,l}function ht(t,e){let n,l=e[34].value+"",i,o;return{key:t,first:null,c(){n=b("option"),i=G(l),o=I(),n.__value=e[34].value,n.value=n.__value,this.first=n},m(s,u){M(s,n,u),g(n,i),g(n,o)},p(s,u){e=s},d(s){s&&T(n)}}}function gt(t,e){let n,l=e[34].value+"",i,o;return{key:t,first:null,c(){n=b("option"),i=G(l),o=I(),n.__value=e[34].value,n.value=n.__value,this.first=n},m(s,u){M(s,n,u),g(n,i),g(n,o)},p(s,u){e=s},d(s){s&&T(n)}}}function vt(t){let e=[],n=new Map,l,i=t[6];const o=s=>s[28].id;for(let s=0;s<i.length;s+=1){let u=dt(t,i,s),r=o(u);n.set(r,e[s]=Et(r,u))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=he()},m(s,u){for(let r=0;r<e.length;r+=1)e[r].m(s,u);M(s,l,u)},p(s,u){u[0]&27728&&(i=s[6],e=Se(e,u,o,1,s,i,n,l.parentNode,Le,Et,l,dt))},d(s){for(let u=0;u<e.length;u+=1)e[u].d(s);s&&T(l)}}}function kt(t){let e,n,l;return{c(){e=b("div"),n=b("div"),p(n,"class","time-marker svelte-ypnq8x"),p(n,"style",l=t[14](t[30])),Bt(e,"position","relative")},m(i,o){M(i,e,o),g(e,n)},p(i,o){o[0]&64&&l!==(l=i[14](i[30]))&&p(n,"style",l)},d(i){i&&T(e)}}}function yt(t){let e,n=t[31].klasse+"",l;return{c(){e=b("div"),l=G(n),p(e,"class","time-klasse time-info svelte-ypnq8x")},m(i,o){M(i,e,o),g(e,l)},p(i,o){o[0]&64&&n!==(n=i[31].klasse+"")&&oe(l,n)},d(i){i&&T(e)}}}function bt(t){let e,n=t[31].klasseKode+"",l;return{c(){e=b("div"),l=G(n),p(e,"class","time-klasseKode time-info svelte-ypnq8x")},m(i,o){M(i,e,o),g(e,l)},p(i,o){o[0]&64&&n!==(n=i[31].klasseKode+"")&&oe(l,n)},d(i){i&&T(e)}}}function $t(t){let e,n=t[31].klasserom+"",l;return{c(){e=b("div"),l=G(n),p(e,"class","time-klasserom time-info svelte-ypnq8x")},m(i,o){M(i,e,o),g(e,l)},p(i,o){o[0]&64&&n!==(n=i[31].klasserom+"")&&oe(l,n)},d(i){i&&T(e)}}}function wt(t){let e,n=t[31].l\u00E6rer+"",l;return{c(){e=b("div"),l=G(n),p(e,"class","time-l\xE6rer time-info svelte-ypnq8x")},m(i,o){M(i,e,o),g(e,l)},p(i,o){o[0]&64&&n!==(n=i[31].l\u00E6rer+"")&&oe(l,n)},d(i){i&&T(e)}}}function St(t){let e,n;return{c(){e=b("div"),p(e,"style",n=t[10](t[31].slutt,t[28].timerInfo[t[33]+1].start,t[31].klasseKode,!1))},m(l,i){M(l,e,i)},p(l,i){i[0]&64&&n!==(n=l[10](l[31].slutt,l[28].timerInfo[l[33]+1].start,l[31].klasseKode,!1))&&p(e,"style",n)},d(l){l&&T(e)}}}function Dt(t,e){let n,l,i,o,s,u,r,c,d,k,a,h,y=e[31].startDisplay+"",w,f,v,S,D,_=e[31].sluttDisplay+"",q,m,P,C,R=e[31].klasse&&yt(e),j=e[31].klasseKode&&bt(e),K=e[31].klasserom&&$t(e),B=e[31].l\u00E6rer&&wt(e),H=e[33]<e[28].timerInfo.length-1&&St(e);return{key:t,first:null,c(){n=b("div"),l=b("div"),i=I(),R&&R.c(),o=I(),j&&j.c(),s=I(),K&&K.c(),u=I(),B&&B.c(),r=I(),c=b("div"),k=I(),a=b("div"),h=b("p"),w=G(y),v=I(),S=b("div"),D=b("p"),q=G(_),P=I(),H&&H.c(),C=he(),p(l,"class","time-info svelte-ypnq8x"),p(c,"class","time-info svelte-ypnq8x"),p(n,"class","time-box svelte-ypnq8x"),p(n,"style",d=e[10](e[31].start,e[31].slutt,e[31].klasseKode,!0)),p(h,"class","svelte-ypnq8x"),p(a,"class","time-start-tid svelte-ypnq8x"),p(a,"style",f=me(e[31].start,1)),p(D,"class","svelte-ypnq8x"),p(S,"class","time-slutt-tid svelte-ypnq8x"),p(S,"style",m=me(e[31].slutt,1)),this.first=n},m(L,$){M(L,n,$),g(n,l),g(n,i),R&&R.m(n,null),g(n,o),j&&j.m(n,null),g(n,s),K&&K.m(n,null),g(n,u),B&&B.m(n,null),g(n,r),g(n,c),M(L,k,$),M(L,a,$),g(a,h),g(h,w),M(L,v,$),M(L,S,$),g(S,D),g(D,q),M(L,P,$),H&&H.m(L,$),M(L,C,$)},p(L,$){e=L,e[31].klasse?R?R.p(e,$):(R=yt(e),R.c(),R.m(n,o)):R&&(R.d(1),R=null),e[31].klasseKode?j?j.p(e,$):(j=bt(e),j.c(),j.m(n,s)):j&&(j.d(1),j=null),e[31].klasserom?K?K.p(e,$):(K=$t(e),K.c(),K.m(n,u)):K&&(K.d(1),K=null),e[31].l\u00E6rer?B?B.p(e,$):(B=wt(e),B.c(),B.m(n,r)):B&&(B.d(1),B=null),$[0]&64&&d!==(d=e[10](e[31].start,e[31].slutt,e[31].klasseKode,!0))&&p(n,"style",d),$[0]&64&&y!==(y=e[31].startDisplay+"")&&oe(w,y),$[0]&64&&f!==(f=me(e[31].start,1))&&p(a,"style",f),$[0]&64&&_!==(_=e[31].sluttDisplay+"")&&oe(q,_),$[0]&64&&m!==(m=me(e[31].slutt,1))&&p(S,"style",m),e[33]<e[28].timerInfo.length-1?H?H.p(e,$):(H=St(e),H.c(),H.m(C.parentNode,C)):H&&(H.d(1),H=null)},d(L){L&&T(n),R&&R.d(),j&&j.d(),K&&K.d(),B&&B.d(),L&&T(k),L&&T(a),L&&T(v),L&&T(S),L&&T(P),H&&H.d(L),L&&T(C)}}}function Et(t,e){let n,l,i,o=e[28].dag+" "+e[11](e[30]),s,u,r,c,d,k,a=[],h=new Map,y,w,f=e[4]&&kt(e),v=e[28].timerInfo;const S=D=>D[31].id;for(let D=0;D<v.length;D+=1){let _=pt(e,v,D),q=S(_);h.set(q,a[D]=Dt(q,_))}return{key:t,first:null,c(){n=b("div"),l=b("div"),i=b("p"),s=G(o),u=I(),r=b("div"),c=I(),f&&f.c(),d=I(),k=b("div");for(let D=0;D<a.length;D+=1)a[D].c();y=I(),p(i,"class","svelte-ypnq8x"),p(l,"class","dag-title svelte-ypnq8x"),p(r,"class","top-space svelte-ypnq8x"),p(k,"class","timeplan-timer svelte-ypnq8x"),p(n,"class","dag svelte-ypnq8x"),p(n,"style",w=e[13](e[30])),this.first=n},m(D,_){M(D,n,_),g(n,l),g(l,i),g(i,s),g(n,u),g(n,r),g(n,c),f&&f.m(n,null),g(n,d),g(n,k);for(let q=0;q<a.length;q+=1)a[q].m(k,null);g(n,y)},p(D,_){e=D,_[0]&64&&o!==(o=e[28].dag+" "+e[11](e[30]))&&oe(s,o),e[4]?f?f.p(e,_):(f=kt(e),f.c(),f.m(n,d)):f&&(f.d(1),f=null),_[0]&1088&&(v=e[28].timerInfo,a=Se(a,_,S,1,e,v,h,k,Le,Dt,null,pt)),_[0]&64&&w!==(w=e[13](e[30]))&&p(n,"style",w)},d(D){D&&T(n),f&&f.d();for(let _=0;_<a.length;_+=1)a[_].d()}}}function On(t){let e,n,l,i,o=[],s=new Map,u,r,c,d,k,a,h,y,w,f,v,S,D,_,q,m,P,C=[],R=new Map,j,K,B,H,L,$,z,Z,ee,te,x,W=t[7];const ge=E=>E[34].id;for(let E=0;E<W.length;E+=1){let N=_t(t,W,E),J=ge(N);s.set(J,o[E]=ht(J,N))}let ne=t[8];const fe=E=>E[34].id;for(let E=0;E<ne.length;E+=1){let N=mt(t,ne,E),J=fe(N);R.set(J,C[E]=gt(J,N))}let F=t[5]&&vt(t);return{c(){e=b("div"),n=b("form"),l=b("select"),i=b("option"),i.textContent="Velg klasse ";for(let E=0;E<o.length;E+=1)o[E].c();u=I(),r=b("input"),c=I(),d=b("input"),k=I(),a=b("div"),h=b("label"),h.textContent="Highlight day",y=I(),w=b("input"),f=I(),v=b("div"),S=b("label"),S.textContent="Highlight Hour",D=I(),_=b("input"),q=I(),m=b("select"),P=b("option"),P.textContent="Velg uke ";for(let E=0;E<C.length;E+=1)C[E].c();j=I(),K=b("div"),B=I(),H=b("div"),L=b("div"),$=b("div"),z=b("div"),F&&F.c(),Z=I(),ee=b("div"),ee.innerHTML='besserSoftware <p class="small-text svelte-ypnq8x">novasoftware fell off</p>',i.__value="default option",i.value=i.__value,p(l,"name","klasse"),p(l,"id","klasse"),t[0]===void 0&&be(()=>t[15].call(l)),p(r,"type","text"),p(r,"id","klasse-text-field"),p(r,"name","klasse-text-field"),p(d,"type","submit"),d.value="Vis",p(h,"for","highlight-day"),p(w,"type","checkbox"),p(w,"name","highlight-day"),p(w,"id","highlight-day"),p(a,"class","align-right svelte-ypnq8x"),p(S,"for","highlight-hour"),p(_,"type","checkbox"),p(_,"name","highlight-hour"),p(_,"id","highlight-hour"),p(v,"class","align-right svelte-ypnq8x"),P.__value="default option",P.value=P.__value,p(m,"name","klasse"),p(m,"id","klasse"),t[2]===void 0&&be(()=>t[19].call(m)),p(n,"class","input-form"),p(K,"class","timeplan-space svelte-ypnq8x"),p(z,"class","uke-plan svelte-ypnq8x"),p($,"class","timeplan-generator svelte-ypnq8x"),p($,"id","timeplan-generator"),p(ee,"class","default-timeplan svelte-ypnq8x"),p(ee,"id","default-timeplan-text"),p(L,"class","timeplan svelte-ypnq8x"),p(H,"class","align-center svelte-ypnq8x")},m(E,N){M(E,e,N),g(e,n),g(n,l),g(l,i);for(let J=0;J<o.length;J+=1)o[J].m(l,null);Te(l,t[0]),g(n,u),g(n,r),xe(r,t[1]),g(n,c),g(n,d),g(n,k),g(n,a),g(a,h),g(a,y),g(a,w),w.checked=t[3],g(n,f),g(n,v),g(v,S),g(v,D),g(v,_),_.checked=t[4],g(n,q),g(n,m),g(m,P);for(let J=0;J<C.length;J+=1)C[J].m(m,null);Te(m,t[2]),g(e,j),g(e,K),g(e,B),g(e,H),g(H,L),g(L,$),g($,z),F&&F.m(z,null),g(L,Z),g(L,ee),te||(x=[X(l,"change",t[15]),X(r,"input",t[16]),X(w,"change",t[17]),X(w,"change",t[12]),X(_,"change",t[18]),X(_,"change",t[12]),X(m,"change",t[19]),X(m,"change",t[12]),X(n,"submit",Ut(t[9]))],te=!0)},p(E,N){N[0]&128&&(W=E[7],o=Se(o,N,ge,1,E,W,s,l,Le,ht,null,_t)),N[0]&129&&Te(l,E[0]),N[0]&2&&r.value!==E[1]&&xe(r,E[1]),N[0]&8&&(w.checked=E[3]),N[0]&16&&(_.checked=E[4]),N[0]&256&&(ne=E[8],C=Se(C,N,fe,1,E,ne,R,m,Le,gt,null,mt)),N[0]&260&&Te(m,E[2]),E[5]?F?F.p(E,N):(F=vt(E),F.c(),F.m(z,null)):F&&(F.d(1),F=null)},i:U,o:U,d(E){E&&T(e);for(let N=0;N<o.length;N+=1)o[N].d();for(let N=0;N<C.length;N+=1)C[N].d();F&&F.d(),te=!1,ae(x)}}}let Ce=7.5;function Rn(){let t=document.getElementById("default-timeplan-text"),e=document.getElementById("timeplan-generator");t.style.display="none",e.style.display="block"}function An(){let t=document.getElementById("default-timeplan-text"),e=document.getElementById("timeplan-generator");t.style.display="block",e.style.display="none"}function me(t,e){window.innerWidth<=450&&(e/=2);let n=(t-8.5)/Ce*77;return console.log(`${t}: ${n}`),`position: absolute; top: ${n-e}vh;`}function Ue(t,e){var n=3+(t-1)*7;return new Date(e,0,n)}function Hn(t){let e=t+"=",l=decodeURIComponent(document.cookie).split(";");for(let i=0;i<l.length;i++){let o=l[i];for(;o.charAt(0)==" ";)o=o.substring(1);if(o.indexOf(e)==0)return o.substring(e.length,o.length)}return""}function Kn(t,e,n){const l=new Date;l.setTime(l.getTime()+n*24*60*60*1e3);let i="expires="+l.toUTCString();document.cookie=t+"="+e+";"+i+";path=/"}function Un(t,e,n){let l,i=[{id:0,value:"ST2A"}],o=[],s="default option",u="",r,c,d,k=!0,a=!0,h={KR\u00D8:"#4e79a7","MR1+1":"#f28e2b",Valgfag:"#e15759",NOR:"#76b7b2",FY1:"#59a14f",Spr\u00E5k:"#edc948",KJ1:"#b07aa1","STU+2":"#9c755f","STU+1":"#9c755f","KLA+1":"#9c755f",HIS:"#ff9da7","STU+1-UOFFISIELL":"rgba(156, 117, 95, 0.5)"},y=!1;async function w($){Kn("timeplanvalg",s,1),u!==""||s!=="default option"?(u!==""&&n(0,s=u),await fetch(`api/getTimeplan/${s}`).then(z=>z.json()).then(z=>{n(6,l=[...JSON.parse(z.response).content]),console.log(l)}).catch(z=>{console.error("Error:",z)}),Rn(),n(5,y=!0),S()):(An(),n(5,y=!1))}function f($,z,Z,ee){let x=(z-$)/Ce*77,W;return ee?W=`${me($,0)} max-height: ${x}vh; height: ${x}vh; background-color: ${h[Z]};`:W=`${me($,0)} max-height: ${x}vh; height: ${x}vh;`,W}function v($){const z=r.split(" ");let Z=Ue(parseInt(z),2022);return Z.setDate(Z.getDate()+$),`${Z.getDate()}.${Z.getMonth()+1}`}function S(){y&&n(6,l)}function D($){if(k)return $===c?"background-color:rgb(150, 150, 150);":""}function _($){return $===c?`position: absolute; top: ${(d-8.5)/Ce*77}vh;`:"display: none;"}function q(){let $=Hn("timeplanvalg");$!==""&&n(0,s=$)}function m(){if(_){let $=document.getElementsByClassName("time-marker");c<=4&&($[c].style.top=`${(d-8.5)/Ce*77}vh`,P())}}function P(){var $=new Date;c=$.getDay()-1,d=$.getHours()+($.getMinutes()+1)/60+($.getSeconds()+1)/3600}function C(){for(let W=0;W<41;W++){let ge=(W+33)%51+1,ne=Ue(ge,2022),fe=new Date(ne);fe.setDate(ne.getDate()+4),o.push({id:W,value:`${ge} (${ne.getDate()}.${ne.getMonth()+1}-${fe.getDate()}.${fe.getMonth()+1})`})}var $=new Date;c=$.getDay()-1,d=$.getHours()+($.getMinutes()+1)/60;var z=new Date($.getFullYear(),0,1),Z=Math.floor(($-z)/(24*60*60*1e3)),ee=Math.ceil(Z/7);let te=Ue(ee,2022),x=new Date(te);x.setDate(te.getDate()+4),n(2,r=`${ee} (${te.getDate()}.${te.getMonth()+1}-${x.getDate()}.${x.getMonth()+1})`)}C();let R=setInterval(m,1e4);It(async()=>{q(),w()}),Ct(()=>{console.log("ok"),clearInterval(R)});function j(){s=et(this),n(0,s),n(7,i)}function K(){u=this.value,n(1,u)}function B(){k=this.checked,n(3,k)}function H(){a=this.checked,n(4,a)}function L(){r=et(this),n(2,r),n(8,o)}return n(6,l=null),[s,u,r,k,a,y,l,i,o,w,f,v,S,D,_,j,K,B,H,L]}class jn extends re{constructor(e){super(),se(this,e,Un,On,le,{},null,[-1,-1])}}function Bn(t){let e,n;return e=new Tn({}),{c(){Q(e.$$.fragment)},m(l,i){V(e,l,i),n=!0},i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function zn(t){let e,n;return e=new Dn({}),{c(){Q(e.$$.fragment)},m(l,i){V(e,l,i),n=!0},i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Fn(t){let e,n;return e=new jn({}),{c(){Q(e.$$.fragment)},m(l,i){V(e,l,i),n=!0},i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Vn(t){let e;return{c(){e=G("404 not found")},m(n,l){M(n,e,l)},d(n){n&&T(e)}}}function Yn(t){let e,n,l,i,o,s,u,r,c,d,k;return e=new Nn({}),i=new Me({props:{path:"/",$$slots:{default:[Bn]},$$scope:{ctx:t}}}),s=new Me({props:{path:"about",$$slots:{default:[zn]},$$scope:{ctx:t}}}),r=new Me({props:{path:"timeplan",$$slots:{default:[Fn]},$$scope:{ctx:t}}}),d=new Me({props:{$$slots:{default:[Vn]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment),n=I(),l=b("div"),Q(i.$$.fragment),o=I(),Q(s.$$.fragment),u=I(),Q(r.$$.fragment),c=I(),Q(d.$$.fragment),p(l,"class","routes")},m(a,h){V(e,a,h),M(a,n,h),M(a,l,h),V(i,l,null),g(l,o),V(s,l,null),g(l,u),V(r,l,null),g(l,c),V(d,l,null),k=!0},p(a,h){const y={};h&4&&(y.$$scope={dirty:h,ctx:a}),i.$set(y);const w={};h&4&&(w.$$scope={dirty:h,ctx:a}),s.$set(w);const f={};h&4&&(f.$$scope={dirty:h,ctx:a}),r.$set(f);const v={};h&4&&(v.$$scope={dirty:h,ctx:a}),d.$set(v)},i(a){k||(O(e.$$.fragment,a),O(i.$$.fragment,a),O(s.$$.fragment,a),O(r.$$.fragment,a),O(d.$$.fragment,a),k=!0)},o(a){A(e.$$.fragment,a),A(i.$$.fragment,a),A(s.$$.fragment,a),A(r.$$.fragment,a),A(d.$$.fragment,a),k=!1},d(a){Y(e,a),a&&T(n),a&&T(l),Y(i),Y(s),Y(r),Y(d)}}}function Wn(t){let e,n,l;return n=new hn({props:{url:"",$$slots:{default:[Yn]},$$scope:{ctx:t}}}),{c(){e=b("main"),Q(n.$$.fragment)},m(i,o){M(i,e,o),V(n,e,null),l=!0},p(i,[o]){const s={};o&4&&(s.$$scope={dirty:o,ctx:i}),n.$set(s)},i(i){l||(O(n.$$.fragment,i),l=!0)},o(i){A(n.$$.fragment,i),l=!1},d(i){i&&T(e),Y(n)}}}function Jn(t){var e=document.title+" - ";function n(){document.title=e=e.substring(1)+e.substring(0,1),setTimeout(n,200)}return n(),[]}class Qn extends re{constructor(e){super(),se(this,e,Jn,Wn,le,{})}}new Qn({target:document.getElementById("app")});