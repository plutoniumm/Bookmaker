function E(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(B)}function T(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ct(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function I(t){return Object.keys(t).length===0}function ut(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const f=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)f[o]=n.dirty[o]|r[o];return f}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,f){if(r){const l=L(n,e,i,f);t.p(l,r)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&c.push(s)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,s=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[s]+1;const a=s+1;e[a]=c,r=Math.max(a,r)}const f=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(f.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);f.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<f.length&&l[c].claim_order>=f[u].claim_order;)u++;const s=u<f.length?f[u]:null;t.insertBefore(l[c],s)}}function Q(t,n){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function st(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function dt(){return S(" ")}function ht(){return S("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){X(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Y(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||f.push(o.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(n))}function yt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function gt(t){return Z(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function bt(t,n){t.value=n==null?"":n}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n){return new t(n)}let m;function h(t){m=t}function P(){if(!m)throw new Error("Function called outside component initialization");return m}function vt(t){P().$$.on_mount.push(t)}function Et(t){P().$$.after_update.push(t)}const d=[],k=[],b=[],q=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(F))}function Nt(){return D(),z}function A(t){b.push(t)}const v=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),tt(n.$$)}for(h(null),d.length=0,x=0;k.length;)k.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];v.has(e)||(v.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();N=!1,v.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function At(){_={r:0,c:[],p:_}}function St(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function jt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ct(t){t&&t.c()}function Mt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,after_update:f}=t.$$;r&&r.m(n,e),i||A(()=>{const l=t.$$.on_mount.map(B).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...l):p(l),t.$$.on_mount=[]}),f.forEach(A)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function kt(t,n,e,i,r,f,l,o=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:[],props:f,update:E,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...j)=>{const C=j.length?j[0]:y;return u.ctx&&r(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),s&&rt(t,a)),y}):[],u.update(),s=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const a=V(n.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),F()}h(c)}class qt{$destroy(){it(this,1),this.$destroy=E}$on(n,e){if(!T(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{it as A,Nt as B,ct as C,Q as D,ut as E,ft as F,at as G,ot as H,bt as I,mt as J,_t as K,qt as S,dt as a,st as b,gt as c,St as d,ht as e,nt as f,At as g,R as h,kt as i,Et as j,U as k,yt as l,V as m,E as n,vt as o,pt as p,$t as q,S as r,lt as s,jt as t,Z as u,xt as v,wt as w,Ct as x,Mt as y,et as z};
