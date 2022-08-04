(function(){"use strict";var e={1455:function(e,t,n){var o=n(9242),r=(n(8937),n(6265)),a=n.n(r),i=n(6423),u=n(7139),c=n(4662);const l=new u.ZP.Store({state:{lang:"zh-TW",weather:{},natural:{},name:"阿三",number:0,list:[{id:1,name:"小李 1"},{id:2,name:"老王 2"},{id:3,name:"大張 3"}]},actions:{addCount(e,t){e.commit("addCount",t)},oneSecLaterSetNum(e,t){return new Promise((n=>{setTimeout((()=>{e.commit("oneSecLaterSetNum",{number:t}),n()}),1e3)}))},async getWeather({commit:e}){const t={};try{const e=await(0,c.sg)();t.taipei=e.data.records.locations[0].location[0].locationName;const n=await(0,c.eK)();t.newTaipei=n.data.records.locations[0].location[0].locationName}catch(n){console.log(n)}e("getWeather",{weather:t})},getNatural({commit:e},t){e("getNatural",{natural:t})}},mutations:{addCount(e,t){e.number+=t},cutCount(e,t){e.number-=t},numberClear(e){e.number=0},reverse(e){e.list.reverse()},addNumber(e,t){e.number+=t.addNumber},oneSecLaterSetNum(e,t){e.number=t.number},getWeather(e,t){e.weather=t.weather},getNatural(e,t){e.natural=t.natural}},getters:{sayHi:e=>`Hello ${e.name}`}});var s=l,d=n(5658);const f={nav:{title:"選單",chi:"繁體中文",eng:"英语",personalCenter:"個人中心",logout:"退出登入"},page1:{pageTitle:"第一頁",main:{title:"內容標題",content:"你好，被跟踪真的很痛苦。 誰，通過快樂和快樂-慾望，以及痛苦的責任，驅使他們走向他和同類的痛苦？ 讓他拒絕偉大的飛行！"}},page2:{pageTitle:"第二頁",main:{title:"文章",content:"沒有人指責債務的痛苦、奉承的仇恨和因為沒有選擇被拒絕而獲得的痛苦？ 他會將其歸咎於服務的軟化，因為時代的慾望軟化了。"}}};var p=f;const m={nav:{title:"Menu",chi:"TW",eng:"EN",personalCenter:"Personal Center",logout:"Sign Out"},page1:{pageTitle:"Page one",main:{title:"Content title",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque voluptatum cupiditate officiis cum dolorum qui ad eius, similique at, dolorem repellat eaque? Repudiandae qui sit id magni fuga veniam!"}},page2:{pageTitle:"Page two",main:{title:"article",content:"Nemo doloribus debitis, odio blanditiis et adipisci dolorem consequuntur quia ullam optio aspernatur reprehenderit ut? Officia mollitia cupiditate deleniti tempore id reprehenderit."}}};var h=m;const g={nav:{title:"メニュ",chi:"繁体字中国語",eng:"英語",personalCenter:"パーソナルセンター",logout:"ログアウト"},page1:{pageTitle:"最初のページ",main:{title:"コンテンツタイトル",content:"こんにちは、フォローされるのは本当に苦痛です。 快楽と快楽の欲求、そして苦痛の義務によって、誰がそれらを彼の、そして同種の苦痛に追いやるのだろうか？ 彼を偉大な飛行に拒絶させてください！"}},page2:{pageTitle:"2ページ目",main:{title:"記事エリア",content:"借金の痛み、お世辞の憎しみ、そして拒否される選択肢がないので、受ける痛みを誰も責めませんか? 彼はそれを時代の欲求によって和らげられたサービスの柔らかさのせいにするでしょう."}}};var v=g;const b=(0,d.o)({legacy:!1,globalInjection:!0,locale:localStorage.getItem("lang")||navigator.language||"zh-TW",messages:{"zh-TW":p,"en-US":h,"ja-JP":v}});var w=b,y=n(3396);const C={class:"container p-5"},k=(0,y.Uk)("Vuex API 練習"),T=(0,y.Uk)(" | "),S=(0,y.Uk)("共用 Store state"),A=(0,y.Uk)(" | "),N=(0,y.Uk)("Axios"),O=(0,y.Uk)(" | "),j=(0,y.Uk)("I18n");function P(e,t){const n=(0,y.up)("router-link"),o=(0,y.up)("router-view");return(0,y.wg)(),(0,y.iD)(y.HY,null,[(0,y._)("nav",C,[(0,y.Wm)(n,{to:"/"},{default:(0,y.w5)((()=>[k])),_:1}),T,(0,y.Wm)(n,{to:"/about"},{default:(0,y.w5)((()=>[S])),_:1}),A,(0,y.Wm)(n,{to:"/axios"},{default:(0,y.w5)((()=>[N])),_:1}),O,(0,y.Wm)(n,{to:"/i18n"},{default:(0,y.w5)((()=>[j])),_:1})]),(0,y.Wm)(o)],64)}var x=n(89);const E={},W=(0,x.Z)(E,[["render",P]]);var _=W,U=n(678);const F=[{path:"/",name:"home",component:()=>n.e(955).then(n.bind(n,7955))},{path:"/about",name:"about",component:()=>n.e(165).then(n.bind(n,1165))},{path:"/axios",component:()=>n.e(739).then(n.bind(n,2739)),children:[{path:"weather",component:()=>n.e(815).then(n.bind(n,4815))},{path:"natural",component:()=>n.e(506).then(n.bind(n,7506))}]},{path:"/i18n",component:()=>n.e(137).then(n.bind(n,7137)),children:[{path:"item1",component:()=>n.e(378).then(n.bind(n,3378))},{path:"item2",component:()=>n.e(560).then(n.bind(n,3560))}]}],L=(0,U.p7)({history:(0,U.r5)(),linkActiveClass:"active",routes:F,scrollBehavior(e,t,n){return e.fullPath.match("/")?{top:0}:{}}});var q=L;const D=(0,o.ri)(_);D.use(q),D.use(w),D.use(s),D.use(i.Z,a()),D.mount("#app")},4662:function(e,t,n){n.d(t,{Ge:function(){return h},eK:function(){return m},Fe:function(){return g},sg:function(){return p}});var o=n(6265),r=n.n(o);const a="Authorization=CWB-195F56AD-9C94-459C-8C06-55DA964337F9",i=r().create({baseURL:"",headers:{"Content-Type":"application/json"}}),u=e=>i.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?${a}&locationName=臺北市`,e),c=e=>i.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?${a}&locationName=新北市`,e),l="Authorization=CWB-195F56AD-9C94-459C-8C06-55DA964337F9",s=r().create({baseURL:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/",headers:{"Content-Type":"application/json"}}),d=e=>s.get(`W-C0033-002?${l}`,e),f=e=>s.get(`E-A0016-001?${l}`,e),p=u,m=c,h=f,g=d}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{137:"a8e91d02",165:"61fcee23",378:"d0879892",506:"9f5c0753",560:"4c681a9b",739:"1cd11cf9",815:"a7140a9f",955:"dae9dd23"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".aaa87f7e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-template:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Vuex-i18n-Axios-API-Integrate/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return r();e(o,u,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={137:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkvue_template"]=self["webpackChunkvue_template"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1455)}));o=n.O(o)})();
//# sourceMappingURL=app.99a879c6.js.map