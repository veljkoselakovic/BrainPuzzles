(function(){"use strict";var t={740:function(t,e,n){var o=n(963),s=n(252);const r=(0,s._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),a=(0,s._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),i=(0,s._)("link",{href:"https://fonts.googleapis.com/css2?family=Pacifico&display=swap",rel:"stylesheet"},null,-1),l=(0,s._)("div",{id:"nav",style:{position:"absolute"}},null,-1);function c(t,e,n,o,c,u){const p=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,a,i,(0,s.Wm)(p),l],64)}var u={name:"App",components:{},methods:{printForm(t){const e=t.target,n=new FormData(e);for(const[o,s]of n)console.log({inputName:o,value:s})}}},p=n(744);const d=(0,p.Z)(u,[["render",c]]);var m=d,f=n(119);const g=(0,s._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),v=(0,s._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),h=(0,s._)("link",{href:"https://fonts.googleapis.com/css2?family=Pacifico&display=swap",rel:"stylesheet"},null,-1),_=(0,s._)("div",{class:"title"}," BrainPuzzles",-1),w=(0,s.Uk)(" --\x3e ");function y(t,e,n,o,r,a){const i=(0,s.up)("LogInCanvasComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[g,v,h,_,w,(0,s.Wm)(i,{width:"30vw"})],64)}var C=n(577);const k=t=>((0,s.dD)("data-v-4c784710"),t=t(),(0,s.Cn)(),t),b={class:"container"},x={class:"canvas cell"},I=k((()=>(0,s._)("img",{alt:"BrainPuzzles logo",class:"logoPicture",src:"static/res/logo.png"},null,-1))),F={class:"errorClass"},W={id:"formLogIn",method:"post"},z=["value"],P={class:"registerMessage"},j=(0,s.Uk)("Niste član? "),B=(0,s.Uk)("Registrujte se"),D=(0,s.Uk)("!"),O=k((()=>(0,s._)("div",{class:"blur cell"},null,-1)));function U(t,e,n,o,r,a){const i=(0,s.up)("InputField"),l=(0,s.up)("FancyButton"),c=(0,s.up)("router-link"),u=(0,s.up)("FooterComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",b,[(0,s._)("div",x,[I,(0,s._)("p",F,(0,C.zw)(r.errors),1),(0,s._)("form",W,[(0,s._)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:r.csrf},null,8,z),(0,s.Wm)(i,{text:"Username",type:"text",name:"user"}),(0,s.Wm)(i,{text:"Password",type:"password",name:"pass"}),(0,s.Wm)(l,{text:"Log In"})]),(0,s._)("p",P,[j,(0,s.Wm)(c,{class:"registerLink",onClick:a.clickedRegister,to:"/register"},{default:(0,s.w5)((()=>[B])),_:1},8,["onClick"]),D]),(0,s.Wm)(l,{class:"guestButton",text:"Sign in as Guest"})]),O]),(0,s._)("footer",null,[(0,s.Wm)(u)])],64)}const R={class:"buttonContainer"},Z={class:"buttonClass"};function L(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",R,[(0,s._)("button",Z,(0,C.zw)(n.text),1)])}var V={name:"FancyButton",props:["text"]};const H=(0,p.Z)(V,[["render",L],["__scopeId","data-v-5de7d4cb"]]);var Y=H;const E=t=>((0,s.dD)("data-v-65e72804"),t=t(),(0,s.Cn)(),t),N={class:"container"},$=E((()=>(0,s._)("div",{class:"makers"}," © Ćivot 2022",-1))),M=[$];function S(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",N,M)}var T={name:"FooterComponent",props:[]};const A=(0,p.Z)(T,[["render",S],["__scopeId","data-v-65e72804"]]);var G=A;const q={class:"inputContainer"},J=["name","type","placeholder","value"];function K(t,e,n,o,r,a){return(0,s.wg)(),(0,s.iD)("div",q,[(0,s._)("input",{class:"inputField",name:n.name,type:n.type,placeholder:n.text,value:n.value,onInput:e[0]||(e[0]=(...t)=>a.inputChanged&&a.inputChanged(...t))},null,40,J)])}var Q={name:"InputField",props:["text","type","name","value"],methods:{getInfo(){return this.value},inputChanged(){this.$emit("input",this.value)}}};const X=(0,p.Z)(Q,[["render",K],["__scopeId","data-v-ae00f4bc"]]);var tt=X;const et={components:{InputField:tt,FancyButton:Y,FooterComponent:G},name:"CanvasComponent",props:["width","height"],data(){var t=document.getElementsByClassName("error")[0];return void 0!==t&&(t=t.textContent),{csrf:document.cookie.split("; ").find((t=>t.startsWith("csrftoken"))).split("=")[1],errors:t}},methods:{clickedRegister(){this.$data.errors=void 0}}},nt=()=>{(0,o.sj)((t=>({"1b35d31e":t.width})))},ot=et.setup;et.setup=ot?(t,e)=>(nt(),ot(t,e)):nt;var st=et;const rt=(0,p.Z)(st,[["render",U],["__scopeId","data-v-4c784710"]]);var at=rt,it={name:"LogInComponent",components:{LogInCanvasComponent:at},methods:{}};const lt=(0,p.Z)(it,[["render",y]]);var ct=lt;const ut=(0,s._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),pt=(0,s._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),dt=(0,s._)("link",{href:"https://fonts.googleapis.com/css2?family=Pacifico&display=swap",rel:"stylesheet"},null,-1),mt=(0,s._)("div",{class:"title"}," BrainPuzzles",-1);function ft(t,e,n,o,r,a){const i=(0,s.up)("RegistrationCanvasComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[ut,pt,dt,mt,(0,s.Wm)(i,{width:"30vw",height:"60vh"})],64)}const gt=t=>((0,s.dD)("data-v-709c2318"),t=t(),(0,s.Cn)(),t),vt={class:"container"},ht={class:"canvas cell"},_t=gt((()=>(0,s._)("img",{alt:"BrainPuzzles logo",class:"logoPicture",src:"static/res/logo.png"},null,-1))),wt={class:"errorClass"},yt={id:"formRegister",method:"post"},Ct=["value"],kt=gt((()=>(0,s._)("p",{class:"registerMessage",style:{opacity:"0.7"}},"Sva polja moraju biti popunjena!",-1))),bt={class:"registerMessage"},xt=(0,s.Uk)("Imate nalog? "),It=(0,s.Uk)("Ulogujte se"),Ft=(0,s.Uk)(" ovde!"),Wt=gt((()=>(0,s._)("div",{class:"blur cell"},null,-1)));function zt(t,e,n,o,r,a){const i=(0,s.up)("InputField"),l=(0,s.up)("router-link"),c=(0,s.up)("FancyButton"),u=(0,s.up)("FooterComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",vt,[(0,s._)("div",ht,[_t,(0,s._)("p",wt,(0,C.zw)(r.errors),1),(0,s._)("form",yt,[(0,s._)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:r.csrf},null,8,Ct),(0,s.Wm)(i,{text:"Username",type:"text",name:"user"}),(0,s.Wm)(i,{text:"Email",type:"email",name:"email"}),(0,s.Wm)(i,{text:"Password",type:"password",modelValue:r.password,"onUpdate:modelValue":e[0]||(e[0]=t=>r.password=t),name:"pass"},null,8,["modelValue"]),(0,s.Wm)(i,{text:"Password again",type:"password",onInput:a.validate,modelValue:r.password_again,"onUpdate:modelValue":e[1]||(e[1]=t=>r.password_again=t),name:"pass_again"},null,8,["onInput","modelValue"]),kt,(0,s._)("p",bt,[xt,(0,s.Wm)(l,{class:"registerLink",to:"/"},{default:(0,s.w5)((()=>[It])),_:1}),Ft]),(0,s.Wm)(c,{text:"Register"})])]),Wt]),(0,s._)("footer",null,[(0,s.Wm)(u)])],64)}const Pt={components:{InputField:tt,FancyButton:Y,FooterComponent:G},name:"CanvasComponent",props:["width"],data(){var t=document.getElementsByClassName("error")[0];return void 0!==t&&(t=t.textContent),{csrf:document.cookie.split("; ").find((t=>t.startsWith("csrftoken"))).split("=")[1],errors:t,password:"",password_again:""}},methods:{validate:function(){console.log("is it the same?"),console.log(this.$data.password===this.$data.password_again)}}},jt=()=>{(0,o.sj)((t=>({"53d8e436":t.width})))},Bt=Pt.setup;Pt.setup=Bt?(t,e)=>(jt(),Bt(t,e)):jt;var Dt=Pt;const Ot=(0,p.Z)(Dt,[["render",zt],["__scopeId","data-v-709c2318"]]);var Ut=Ot,Rt={name:"RegistrationComponent",components:{RegistrationCanvasComponent:Ut},methods:{}};const Zt=(0,p.Z)(Rt,[["render",ft]]);var Lt=Zt;const Vt=[{path:"/",component:ct},{path:"/register",component:Lt,name:"registration"}],Ht=(0,f.p7)({history:(0,f.PO)(),routes:Vt}),Yt=(0,o.ri)(m);Yt.use(Ht),Yt.mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],r=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(i=!1,r<a&&(a=r));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,s,r]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var u=l(n)}for(e&&e(o);c<a.length;c++)r=a[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkbrain_puzzles"]=self["webpackChunkbrain_puzzles"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(740)}));o=n.O(o)})();
//# sourceMappingURL=app.js.map