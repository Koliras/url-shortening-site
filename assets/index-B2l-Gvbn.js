var Z=Object.defineProperty;var ee=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>(ee(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function d(){}function G(t){return t()}function U(){return Object.create(null)}function P(t){t.forEach(G)}function J(t){return typeof t=="function"}function k(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function te(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function $(){return j(" ")}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.data!==e&&(t.data=e)}let H;function N(t){H=t}const C=[],D=[];let O=[];const Q=[],se=Promise.resolve();let F=!1;function le(){F||(F=!0,se.then(X))}function B(t){O.push(t)}const R=new Set;let E=0;function X(){if(E!==0)return;const t=H;do{try{for(;E<C.length;){const e=C[E];E++,N(e),re(e.$$)}}catch(e){throw C.length=0,E=0,e}for(N(null),C.length=0,E=0;D.length;)D.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];R.has(n)||(R.add(n),n())}O.length=0}while(C.length);for(;Q.length;)Q.pop()();F=!1,R.clear(),N(t)}function re(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}function oe(t){const e=[],n=[];O.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),O=e}const I=new Set;let ue;function _(t,e){t&&t.i&&(I.delete(t),t.i(e))}function w(t,e,n,i){if(t&&t.o){if(I.has(t))return;I.add(t),ue.c.push(()=>{I.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function V(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function b(t){t&&t.c()}function y(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),B(()=>{const l=t.$$.on_mount.map(G).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...l):P(l),t.$$.on_mount=[]}),r.forEach(B)}function q(t,e){const n=t.$$;n.fragment!==null&&(oe(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(t,e){t.$$.dirty[0]===-1&&(C.push(t),le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,i,r,l,a=null,s=[-1]){const o=H;N(t);const u=t.$$={fragment:null,ctx:[],props:l,update:d,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:U(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};a&&a(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(m,p,...A)=>{const K=A.length?A[0]:p;return u.ctx&&r(u.ctx[m],u.ctx[m]=K)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](K),c&&ae(t,m)),p}):[],u.update(),c=!0,P(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const m=ie(e.target);u.fragment&&u.fragment.l(m),m.forEach(v)}else u.fragment&&u.fragment.c();e.intro&&_(t.$$.fragment),y(t,e.target,e.anchor),X()}N(o)}class S{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){q(this,1),this.$destroy=d}$on(e,n){if(!J(n))return d;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);function fe(t){let e;return{c(){e=h("nav"),e.innerHTML='<ul class="svelte-uqosxq"><li class="svelte-uqosxq"><a href="/" class="svelte-uqosxq">Features</a></li> <li class="svelte-uqosxq"><a href="/" class="svelte-uqosxq">Pricing</a></li> <li class="svelte-uqosxq"><a href="/" class="svelte-uqosxq">Resources</a></li></ul>'},m(n,i){x(n,e,i)},p:d,i:d,o:d,d(n){n&&v(e)}}}class de extends S{constructor(e){super(),L(this,e,null,fe,k,{})}}function me(t){let e,n,i,r,l,a,s,o;return l=new de({}),{c(){e=h("header"),n=h("div"),i=h("a"),i.textContent="Shortly",r=$(),b(l.$$.fragment),a=$(),s=h("div"),s.innerHTML='<a href="/" class="logIn svelte-qqywf8">Log in</a> <a href="/" class="signUp svelte-qqywf8">Sign up</a>',g(i,"href","/"),g(i,"class","mainLink svelte-qqywf8"),g(n,"class","links svelte-qqywf8"),g(s,"class","signIn svelte-qqywf8"),g(e,"class","svelte-qqywf8")},m(u,c){x(u,e,c),f(e,n),f(n,i),f(n,r),y(l,n,null),f(e,a),f(e,s),o=!0},p:d,i(u){o||(_(l.$$.fragment,u),o=!0)},o(u){w(l.$$.fragment,u),o=!1},d(u){u&&v(e),q(l)}}}class pe extends S{constructor(e){super(),L(this,e,null,me,k,{})}}function ge(t){let e;return{c(){e=h("main"),e.textContent=`Main content
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo quasi nisi illo temporibus! Expedita, vel debitis! Cupiditate error unde iusto vitae nemo deleniti eum rem? Dolorem repudiandae neque eius.
  Molestiae sunt voluptates amet aliquam omnis aperiam sed minima, quae animi adipisci, eligendi vel iusto sint minus quibusdam impedit. Consectetur sint ad aspernatur consequuntur tenetur odio nam nobis nihil quasi.
  Quaerat voluptate at sapiente enim, voluptates neque animi aut. Atque, repellat laboriosam fugit labore nemo voluptates perferendis earum repudiandae saepe possimus corporis molestias. Quae corporis numquam commodi suscipit deleniti itaque.`,g(e,"class","svelte-ck21ns")},m(n,i){x(n,e,i)},p:d,i:d,o:d,d(n){n&&v(e)}}}class he extends S{constructor(e){super(),L(this,e,null,ge,k,{})}}const $e=[{title:"Link Shortening",destination:"/"},{title:"Branded Links",destination:"/"},{title:"Analytics",destination:"/"}],ve=[{title:"Blog",destination:"/"},{title:"Developers",destination:"/"},{title:"Support",destination:"/"}],_e=[{title:"About",destination:"/"},{title:"Our Team",destination:"/"},{title:"Careers",destination:"/"},{title:"Contact",destination:"/"}];function ye(t){let e;return{c(){e=h("ul"),e.innerHTML='<li class="svelte-nplimo"><a href="/"><img src="../../public/images/icon-facebook.svg" alt="Facebook link" class="svelte-nplimo"/></a></li> <li class="svelte-nplimo"><a href="/"><img src="../../public/images/icon-twitter.svg" alt="Twitter link" class="svelte-nplimo"/></a></li> <li class="svelte-nplimo"><a href="/"><img src="../../public/images/icon-pinterest.svg" alt="Pinterest link" class="svelte-nplimo"/></a></li> <li class="svelte-nplimo"><a href="/"><img src="../../public/images/icon-instagram.svg" alt="Instagram link" class="svelte-nplimo"/></a></li>',g(e,"class","svelte-nplimo")},m(n,i){x(n,e,i)},p:d,i:d,o:d,d(n){n&&v(e)}}}class qe extends S{constructor(e){super(),L(this,e,null,ye,k,{})}}function Y(t,e,n){const i=t.slice();return i[2]=e[n],i}function z(t){let e,n,i=t[2].title+"",r,l,a;return{c(){e=h("li"),n=h("a"),r=j(i),a=$(),g(n,"href",l=t[2].destination)},m(s,o){x(s,e,o),f(e,n),f(n,r),f(e,a)},p(s,o){o&2&&i!==(i=s[2].title+"")&&W(r,i),o&2&&l!==(l=s[2].destination)&&g(n,"href",l)},d(s){s&&v(e)}}}function xe(t){let e,n,i,r,l,a=V(t[1]),s=[];for(let o=0;o<a.length;o+=1)s[o]=z(Y(t,a,o));return{c(){e=h("div"),n=h("h3"),i=j(t[0]),r=$(),l=h("ul");for(let o=0;o<s.length;o+=1)s[o].c();g(n,"class","svelte-1kp8ui"),g(l,"class","svelte-1kp8ui")},m(o,u){x(o,e,u),f(e,n),f(n,i),f(e,r),f(e,l);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(l,null)},p(o,[u]){if(u&1&&W(i,o[0]),u&2){a=V(o[1]);let c;for(c=0;c<a.length;c+=1){const m=Y(o,a,c);s[c]?s[c].p(m,u):(s[c]=z(m),s[c].c(),s[c].m(l,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=a.length}},i:d,o:d,d(o){o&&v(e),ne(s,o)}}}function we(t,e,n){let{title:i="Placeholder"}=e,{links:r=[]}=e;return t.$$set=l=>{"title"in l&&n(0,i=l.title),"links"in l&&n(1,r=l.links)},[i,r]}class T extends S{constructor(e){super(),L(this,e,we,xe,k,{title:0,links:1})}}function be(t){let e,n,i,r,l,a,s,o,u,c,m;return r=new T({props:{title:"Features",links:$e}}),a=new T({props:{title:"Resources",links:ve}}),o=new T({props:{title:"Company",links:_e}}),c=new qe({}),{c(){e=h("footer"),n=h("a"),n.textContent="Shortly",i=$(),b(r.$$.fragment),l=$(),b(a.$$.fragment),s=$(),b(o.$$.fragment),u=$(),b(c.$$.fragment),g(n,"href","/"),g(n,"class","mainLink svelte-mr37rn"),g(e,"class","svelte-mr37rn")},m(p,A){x(p,e,A),f(e,n),f(e,i),y(r,e,null),f(e,l),y(a,e,null),f(e,s),y(o,e,null),f(e,u),y(c,e,null),m=!0},p:d,i(p){m||(_(r.$$.fragment,p),_(a.$$.fragment,p),_(o.$$.fragment,p),_(c.$$.fragment,p),m=!0)},o(p){w(r.$$.fragment,p),w(a.$$.fragment,p),w(o.$$.fragment,p),w(c.$$.fragment,p),m=!1},d(p){p&&v(e),q(r),q(a),q(o),q(c)}}}class ke extends S{constructor(e){super(),L(this,e,null,be,k,{})}}function Le(t){let e,n,i,r,l,a;return e=new pe({}),i=new he({}),l=new ke({}),{c(){b(e.$$.fragment),n=$(),b(i.$$.fragment),r=$(),b(l.$$.fragment)},m(s,o){y(e,s,o),x(s,n,o),y(i,s,o),x(s,r,o),y(l,s,o),a=!0},p:d,i(s){a||(_(e.$$.fragment,s),_(i.$$.fragment,s),_(l.$$.fragment,s),a=!0)},o(s){w(e.$$.fragment,s),w(i.$$.fragment,s),w(l.$$.fragment,s),a=!1},d(s){s&&(v(n),v(r)),q(e,s),q(i,s),q(l,s)}}}class Se extends S{constructor(e){super(),L(this,e,null,Le,k,{})}}new Se({target:document.getElementById("app")});
