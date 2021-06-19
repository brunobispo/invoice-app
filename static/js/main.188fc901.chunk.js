(this["webpackJsonpinvoice-app"]=this["webpackJsonpinvoice-app"]||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,d,u,l=t(1),s=t.n(l),b=t(9),j=t.n(b),p=t(6),f=t(2),m=t(0),x={pageMaxWidth:"720px",backgroundColor:"#EBEBEB",primaryColor:"#707070",borderRadius:"10px",paperColor:"#FFF",paidColor:"#55C000",refundedColor:"#B30000",pendingColor:"#B8B8B8",boxShadow:"2px 2px 10px rgba(0, 0, 0, 0.1)",mobileBreakpoint:"425px"},h=function(n){var e=n.children;return Object(m.jsx)(f.a,{theme:x,children:e})},O=t(3),g=Object(f.b)(i||(i=Object(O.a)(["\n  body {\n    background: ",";\n    font-family: Roboto, sans-serif;\n\n    @media screen and (max-width: ",") {\n      padding-bottom: 35px;\n    }\n  }\n"])),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.mobileBreakpoint})),v=f.d.section(r||(r=Object(O.a)(["\n  max-width: ",";\n  margin: 0 auto;\n  margin-bottom: 10px;\n  text-align: ",";\n"])),(function(n){return n.theme.pageMaxWidth}),(function(n){return n.alignItems})),C=t(5),y=t(19),w=t(8),k=t.n(w),P=f.d.button(a||(a=Object(O.a)(["\n  border-radius: ",";\n  border: 0;\n  margin: 0;\n  font-family: inherit;\n  font-size: 14px;\n  padding: 10px ",";\n  font-weight: 500;\n\n  :disabled {\n    color: inherit;\n  }\n\n  ","\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.borderRadius}),(function(n){return n.isCompact?"10px":"20px"}),(function(n){var e=n.variant,t=n.theme,i={primary:t.primaryColor,secondary:k()(t.primaryColor).lightness(80).toString()}[e];return Object(f.c)(o||(o=Object(O.a)(["\n      background: ",";\n      color: ",";\n\n      :hover:not(:disabled) {\n        background: ",";\n      }\n\n      :active:not(:disabled) {\n        background: ",";\n      }\n    "])),i,k()(i).isDark()?"white":"black",k()(i).darken(.15).toString(),k()(i).darken(.3).toString())}),(function(n){return n.isGroup&&Object(f.c)(c||(c=Object(O.a)(["\n      :not(:first-child) {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0;\n      }\n\n      :not(:last-child) {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n      }\n    "])))}),(function(n){return n.isResponsive&&Object(f.c)(d||(d=Object(O.a)(["\n      @media screen and (max-width: ",") {\n        flex: 1;\n      }\n    "])),(function(n){return n.theme.mobileBreakpoint}))})),S=function(n){var e=n.children,t=n.className,i=n.onClick,r=n.isGroup,a=void 0!==r&&r,o=n.isCompact,c=void 0!==o&&o,d=n.variant,u=void 0===d?"primary":d,l=n.isResponsive,s=void 0!==l&&l,b=n.disabled,j=Object(y.a)(n,["children","className","onClick","isGroup","isCompact","variant","isResponsive","disabled"]);return Object(m.jsx)(P,Object(C.a)(Object(C.a)({onClick:i,className:t,isGroup:a,variant:u,disabled:b,isCompact:c,isResponsive:s},j),{},{children:e}))},M=f.d.div(u||(u=Object(O.a)(["\n  display: flex;\n"])));function D(n,e){var t=new Date(n.getTime());return t.setMonth(n.getMonth()+e),t}var I,F,R,E=function(n){var e=n.date,t=n.onChange;return Object(m.jsxs)(M,{children:[Object(m.jsx)(S,{variant:"secondary",isGroup:!0,isCompact:!0,onClick:function(){return t(D(e,-1))},"aria-label":"Previous Month",children:"<"}),Object(m.jsx)(S,{variant:"secondary",isGroup:!0,isCompact:!0,isResponsive:!0,disabled:!0,children:e.toLocaleString("en-US",{month:"long",year:"numeric"})}),Object(m.jsx)(S,{variant:"secondary",isGroup:!0,isCompact:!0,onClick:function(){return t(D(e,1))},"aria-label":"Next Month",children:">"})]})},B=Object(f.d)(v)(I||(I=Object(O.a)(["\n  @media screen and (max-width: ",") {\n    display: flex;\n    margin: 0;\n    padding: 10px;\n    position: fixed;\n    z-index: 1;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n"])),(function(n){return n.theme.mobileBreakpoint})),z=function(n){var e=n.onClick;return Object(m.jsx)(B,{alignItems:"right",children:Object(m.jsx)(S,{isResponsive:!0,onClick:e,children:"+ Create Invoice"})})},T=f.d.span(F||(F=Object(O.a)(["\n  color: ",";\n"])),(function(n){return n.isPositive?"inherit":"#B20000"})),U=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),G=function(n){return U.format(n)},L=function(n){var e=n.amount;return Object(m.jsx)(T,{isPositive:e>=0,children:G(e)})},A=f.d.span(R||(R=Object(O.a)(["\n  color: ",";\n"])),(function(n){var e=n.theme,t=n.isPaid,i=n.isPositive;return t?i?e.paidColor:e.refundedColor:e.pendingColor}));function Y(n,e){switch(!0){case!e:return"Pending";case n>0&&e:return"Paid";case n<0&&e:return"Refunded";default:throw new Error("Status not found")}}var N,J,W,X,Z,_,q,H=function(n){var e=n.amount,t=n.isPaid;return Object(m.jsx)(A,{isPaid:t,isPositive:e>0,children:Y(e,t)})},K=f.d.div(N||(N=Object(O.a)(["\n  font-size: 14px;\n\n  ","\n"])),(function(n){return n.hideMobile&&Object(f.c)(J||(J=Object(O.a)(["\n      @media screen and (max-width: ",") {\n        display: none;\n      }\n    "])),(function(n){return n.theme.mobileBreakpoint}))})),Q=f.d.li(W||(W=Object(O.a)(["\n  list-style: none;\n\n  & + & {\n    margin-top: 7px;\n  }\n"]))),V=f.d.div(X||(X=Object(O.a)(["\n  display: grid;\n  position: relative;\n  grid-template-columns:\n    minmax(77px, 110px) minmax(55px, 100px)\n    minmax(100px, auto) minmax(55px, 100px)\n    minmax(60px, 100px) 20px;\n  gap: 5px;\n  border-radius: ",";\n  background-color: ",";\n  padding: 0 25px;\n  height: 49px;\n  align-items: center;\n\n  @media screen and (max-width: ",") {\n    padding: 0 15px;\n    grid-template-columns:\n      min(77px, 110px) minmax(50px, auto)\n      min(70px, 100px) min(60px, 100px) 20px;\n  }\n\n  ","\n"])),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.paperColor}),(function(n){return n.theme.mobileBreakpoint}),(function(n){return n.isElevated&&Object(f.c)(Z||(Z=Object(O.a)(["\n      z-index: 2;\n      box-shadow: ",";\n    "])),(function(n){return n.theme.boxShadow}))})),$=f.d.div(_||(_=Object(O.a)(["\n  opacity: 0.5;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: ",";\n"])),(function(n){return n.theme.backgroundColor})),nn=function(n){var e=n.isElevated,t=void 0!==e&&e,i=n.onClose,r=n.children;return Object(m.jsxs)(Q,{children:[t&&Object(m.jsx)($,{onClick:i}),Object(m.jsx)(V,{isElevated:t,children:r})]})},en=t(7),tn=f.d.button(q||(q=Object(O.a)(["\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: bold;\n  border: 0;\n  background: none;\n  padding: 0;\n  width: 25px;\n  height: 25px;\n  display: inline-flex;\n  align-items: center;\n\n  :hover {\n    opacity: 0.5;\n  }\n\n  :disabled {\n    opacity: 0.2;\n    cursor: not-allowed;\n  }\n"]))),rn=Object(l.forwardRef)((function(n,e){var t=n.onClick,i=n.children,r=n.disabled,a=void 0!==r&&r;return Object(m.jsx)(tn,{ref:e,onClick:t,disabled:a,children:i})}));function an(){return(an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function on(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var cn=l.createElement("g",null,l.createElement("path",{d:"M113.7,304C86.2,304,64,282.6,64,256c0-26.5,22.2-48,49.7-48c27.6,0,49.8,21.5,49.8,48C163.5,282.6,141.3,304,113.7,304z"}),l.createElement("path",{d:"M256,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.3-48,49.8-48c27.5,0,49.7,21.5,49.7,48C305.7,282.6,283.5,304,256,304z"}),l.createElement("path",{d:"M398.2,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.2-48,49.8-48c27.5,0,49.8,21.5,49.8,48C448,282.6,425.8,304,398.2,304z"}));function dn(n,e){var t=n.title,i=n.titleId,r=on(n,["title","titleId"]);return l.createElement("svg",an({height:"512px",id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:e,"aria-labelledby":i},r),t?l.createElement("title",{id:i},t):null,cn)}var un,ln,sn,bn=l.forwardRef(dn),jn=(t.p,Object(l.forwardRef)((function(n,e){var t=n.onClick;return Object(m.jsx)(rn,{ref:e,onClick:t,children:Object(m.jsx)(bn,{width:12,height:12})})}))),pn=f.d.li(un||(un=Object(O.a)(["\n  list-style: none;\n"]))),fn=f.d.button(ln||(ln=Object(O.a)(["\n  font-size: 14px;\n  padding: 10px 15px;\n  width: 100%;\n  border: none;\n  background: none;\n  text-align: left;\n  color: ",";\n\n  :hover {\n    background: ",";\n  }\n"])),(function(n){return n.isDanger?"#E90000":"inherit"}),(function(n){var e=n.theme;return k()(e.primaryColor).lightness(95).toString()})),mn=function(n){var e=n.children,t=n.onClick,i=n.isDanger,r=void 0!==i&&i;return Object(m.jsx)(pn,{children:Object(m.jsx)(fn,{onClick:t,isDanger:r,children:e})})},xn=f.d.ul(sn||(sn=Object(O.a)(["\n  position: absolute;\n  z-index: 3;\n  left: ","px;\n  top: ","px;\n  box-shadow: ",";\n  margin: 0;\n  padding: 5px 0;\n  min-width: 190px;\n  border-radius: ",";\n  background: ",";\n"])),(function(n){return n.x-175}),(function(n){return n.y+20}),(function(n){return n.theme.boxShadow}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.paperColor})),hn=function(n){var e=n.children,t=n.isOpen,i=n.onClose,r=n.anchor,a=Object(l.useState)({top:0,left:0}),o=Object(en.a)(a,2),c=o[0],d=o[1];return Object(l.useEffect)((function(){t&&r.current&&d(r.current.getBoundingClientRect())}),[t,r]),t?Object(b.createPortal)(Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)($,{onClick:i}),Object(m.jsx)(xn,{y:window.scrollY+c.top,x:window.scrollX+c.left,children:e})]}),document.body):null},On=t(39),gn=t(4),vn=Object(gn.b)("invoices/new",(function(n){return{payload:Object(C.a)(Object(C.a)({},n),{},{id:Object(On.a)()})}})),Cn=Object(gn.b)("invoices/save"),yn=Object(gn.b)("invoices/edit"),wn=Object(gn.b)("invoices/cancel"),kn=Object(gn.b)("invoices/delete"),Pn=Object(gn.b)("invoices/markAsPaid"),Sn=Object(gn.b)("invoices/refundInvoice"),Mn=function(n){return n.toISOString().split("T")[0]},Dn=function(n){return new Date(n)},In={},Fn=["Bruno","Mark","Anne","Zuke"],Rn=["Bispo","Marley","Jobs","Gates"],En=new Date;function Bn(n){return n[Math.round(Math.random()*(n.length-1))]}for(var zn=0;zn<100;zn++){var Tn=Object(On.a)(),Un="".concat(Bn(Fn)," ").concat(Bn(Rn)),Gn=Math.round(100*(500*Math.random()-250))/100,Ln=Bn([!0,!1]),An=Mn(new Date(En.getFullYear(),En.getMonth(),En.getDate()+180*Math.random()-90));In[Tn]={id:Tn,creation:An,client:Un,amount:Gn,isPaid:Ln}}var Yn,Nn,Jn,Wn={list:In,editingId:null,creating:null},Xn=Object(gn.c)(Wn,(function(n){n.addCase(vn,(function(n,e){var t=e.payload;n.creating=t})),n.addCase(yn,(function(n,e){var t=e.payload;n.creating=null,n.editingId=t})),n.addCase(Cn,(function(n,e){var t=e.payload;n.list[t.id]=t,n.editingId=null,n.creating=null})),n.addCase(wn,(function(n){n.creating=null,n.editingId=null})),n.addCase(kn,(function(n,e){var t=e.payload;delete n.list[t]})),n.addCase(Pn,(function(n,e){var t=e.payload;n.list[t].isPaid=!0})),n.addCase(Sn,(function(n,e){var t=e.payload;n.list[t].amount*=-1,n.list[t].isPaid=!1}))})),Zn=Object(p.b)((function(n,e){return{amount:n.invoices.list[e.id].amount,isPaid:n.invoices.list[e.id].isPaid}}),(function(n,e){return{onEdit:function(){return n(yn(e.id))},onMarkAsPaid:function(){return n(Pn(e.id))},onRefund:function(){return n(Sn(e.id))},onDelete:function(){return n(kn(e.id))}}}))((function(n){var e=n.amount,t=n.isPaid,i=n.onEdit,r=n.onRefund,a=n.onMarkAsPaid,o=n.onDelete,c=Object(l.useState)(!1),d=Object(en.a)(c,2),u=d[0],s=d[1],b=Object(l.useRef)(null);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(jn,{ref:b,onClick:function(){return s(!0)}}),Object(m.jsxs)(hn,{isOpen:u,anchor:b,onClose:function(){return s(!1)},children:[!t&&Object(m.jsxs)(mn,{onClick:function(){s(!1),a()},children:["Mark as ",e>0?"paid":"refunded"]}),t&&e>0&&Object(m.jsx)(mn,{onClick:function(){s(!1),r()},children:"Refund"}),Object(m.jsx)(mn,{onClick:function(){s(!1),i()},children:"Edit"}),Object(m.jsx)(mn,{onClick:function(){s(!1),o()},isDanger:!0,children:"Delete"})]})]})})),_n=Object(p.b)((function(n,e){var t=n.invoices.list[e.id];return{creation:t.creation,id:t.id,client:t.client,amount:t.amount,isPaid:t.isPaid}}))((function(n){var e,t=n.creation,i=n.id,r=n.client,a=n.amount,o=n.isPaid;return Object(m.jsxs)(nn,{children:[Object(m.jsx)(K,{"aria-label":"Date",children:(e=Dn(t),new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()).toLocaleString("en-US",{day:"2-digit",month:"short"}))}),Object(m.jsx)(K,{"aria-label":"Id",hideMobile:!0,children:i.substr(0,7)}),Object(m.jsx)(K,{"aria-label":"Client",children:r}),Object(m.jsx)(K,{"aria-label":"Amount",children:Object(m.jsx)(L,{amount:a})}),Object(m.jsx)(K,{"aria-label":"Status",children:Object(m.jsx)(H,{amount:a,isPaid:o})}),Object(m.jsx)(Zn,{id:i})]})})),qn=Object(f.c)(Yn||(Yn=Object(O.a)(["\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: 14px;\n  padding: 5px;\n  margin-left: -5px;\n\n  ::-webkit-calendar-picker-indicator {\n    display: none;\n  }\n"]))),Hn=f.d.input(Nn||(Nn=Object(O.a)(["\n  ","\n"])),qn),Kn=f.d.select(Jn||(Jn=Object(O.a)(["\n  ","\n  appearance: none;\n"])),qn);function Qn(){return(Qn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function Vn(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var $n=l.createElement("polyline",{points:"20 6 9 17 4 12"});function ne(n,e){var t=n.title,i=n.titleId,r=Vn(n,["title","titleId"]);return l.createElement("svg",Qn({fill:"none",height:24,stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},r),t?l.createElement("title",{id:i},t):null,$n)}var ee,te,ie,re,ae,oe,ce,de,ue,le=l.forwardRef(ne),se=(t.p,Object(l.forwardRef)((function(n,e){var t=n.onClick,i=n.disabled,r=void 0!==i&&i;return Object(m.jsx)(rn,{ref:e,onClick:t,disabled:r,children:Object(m.jsx)(le,{width:15,height:15})})}))),be=function(n){var e=new Date,t=n.split(/\D/).map((function(n){return parseInt(n)})),i=Object(en.a)(t,3),r=i[0],a=i[1],o=i[2];return new Date(o||e.getUTCFullYear(),r-1,a)},je=function(n){var e,t=n.initialData,i=n.onSubmit,r=n.onCancel,a=Object(l.useState)((function(){var n,e,i,r,a,o;return{id:null!==(n=t.id)&&void 0!==n?n:"",creation:null!==(e=t.creation&&(o=Dn(t.creation),new Date(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()).toLocaleString("en-US",{day:"2-digit",month:"numeric",year:"numeric"})))&&void 0!==e?e:"",client:null!==(i=t.client)&&void 0!==i?i:"",amount:null!==(r=null===(a=t.amount)||void 0===a?void 0:a.toString())&&void 0!==r?r:"",isPaid:t.isPaid?"1":"0"}})),o=Object(en.a)(a,2),c=o[0],d=o[1],u=Boolean(c.id&&c.client&&be(c.creation).getTime()&&c.client&&c.amount&&parseFloat(c.amount));return Object(m.jsxs)(nn,{isElevated:!0,onClose:r,children:[Object(m.jsx)(Hn,{type:"text",autoFocus:!0,placeholder:"mm/dd/yyyy",value:c.creation,onChange:function(n){return d((function(e){return Object(C.a)(Object(C.a)({},e),{},{creation:n.target.value})}))}}),Object(m.jsx)(K,{hideMobile:!0,"aria-label":"Id",children:null===(e=c.id)||void 0===e?void 0:e.substr(0,7)}),Object(m.jsx)(Hn,{type:"text",placeholder:"Client",value:c.client,onChange:function(n){return d((function(e){return Object(C.a)(Object(C.a)({},e),{},{client:n.target.value})}))}}),Object(m.jsx)(Hn,{type:"number",placeholder:"Amount",value:c.amount,min:"1",step:"any",onChange:function(n){return d((function(e){return Object(C.a)(Object(C.a)({},e),{},{amount:n.target.value})}))}}),Object(m.jsxs)(Kn,{value:c.isPaid,onChange:function(n){d((function(e){return Object(C.a)(Object(C.a)({},e),{},{isPaid:n.target.value})}))},children:[Object(m.jsx)("option",{value:0,children:"Pending"}),Object(m.jsx)("option",{value:1,children:!c.amount||parseFloat(c.amount)>0?"Paid":"Refunded"})]}),Object(m.jsx)(se,{onClick:function(){i({id:c.id,client:c.client,creation:Mn(be(c.creation)),amount:parseFloat(c.amount),isPaid:"1"===c.isPaid})},disabled:!u})]})},pe=f.d.section(ee||(ee=Object(O.a)(["\n  margin: 0;\n  padding: 0;\n"]))),fe=Object(f.d)(K).attrs({as:"h3"})(te||(te=Object(O.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  margin: 0;\n"]))),me=f.d.header(ie||(ie=Object(O.a)(["\n  display: grid;\n  grid-template-columns:\n    minmax(77px, 110px) minmax(55px, 100px)\n    minmax(100px, auto) minmax(55px, 100px)\n    minmax(60px, 100px) 20px;\n  gap: 5px;\n  padding: 0 25px;\n  margin-bottom: 10px;\n\n  @media screen and (max-width: ",") {\n    padding: 0 15px;\n    grid-template-columns:\n      min(77px, 110px) minmax(50px, auto)\n      min(70px, 100px) min(60px, 100px) 20px;\n  }\n"])),(function(n){return n.theme.mobileBreakpoint})),xe=Object(p.b)((function(n){var e=n.invoices;return{creating:e.creating,editing:e.editingId?e.list[e.editingId]:null}}),(function(n){return{onSave:function(e){return n(Cn(e))},onCancel:function(){return n(wn())}}}))((function(n){var e=n.items,t=n.creating,i=n.editing,r=n.onSave,a=n.onCancel;return Object(m.jsxs)(pe,{children:[(e.length>0||t)&&Object(m.jsxs)(me,{"aria-hidden":!0,children:[Object(m.jsx)(fe,{children:"Date"}),Object(m.jsx)(fe,{hideMobile:!0,children:"Id"}),Object(m.jsx)(fe,{children:"Client"}),Object(m.jsx)(fe,{children:"Amount"}),Object(m.jsx)(fe,{children:"Status"})]}),t&&Object(m.jsx)(je,{initialData:t,onSubmit:r,onCancel:a}),e.map((function(n){return Object(m.jsx)(l.Fragment,{children:(null===i||void 0===i?void 0:i.id)!==n.id?Object(m.jsx)(_n,{id:n.id}):Object(m.jsx)(je,{initialData:i,onSubmit:r,onCancel:a})},n.id)}))]})})),he="600px",Oe=f.d.ul(re||(re=Object(O.a)(["\n  background: ",";\n  border-radius: ",";\n  display: flex;\n  align-items: center;\n  padding: 25px;\n  margin: 0;\n\n  @media screen and (max-width: ",") {\n    flex-wrap: wrap;\n  }\n"])),(function(n){return n.theme.paperColor}),(function(n){return n.theme.borderRadius}),he),ge=f.d.li(ae||(ae=Object(O.a)(["\n  flex: 1;\n  padding: 0 10px;\n  list-style: none;\n  text-align: center;\n\n  ","\n"])),(function(n){return n.isFeatured&&Object(f.c)(oe||(oe=Object(O.a)(["\n      @media screen and (max-width: ",") {\n        flex: 100%;\n      }\n    "])),he)})),ve=f.d.h3(ce||(ce=Object(O.a)(["\n  font-size: 14px;\n  margin: 0 0 7px 0;\n"]))),Ce=f.d.span(de||(de=Object(O.a)(["\n  font-size: ",";\n  font-weight: 300;\n  color: ",";\n\n  ","\n"])),(function(n){return n.isFeatured?"36px":"24px"}),(function(n){var e=n.variant,t=n.theme;return e?{pending:t.pendingColor,paid:t.paidColor,refunded:t.refundedColor}[e]:"inherit"}),(function(n){return!n.isFeatured&&Object(f.c)(ue||(ue=Object(O.a)(["\n      @media screen and (max-width: ",") {\n        font-size: 18px;\n      }\n    "])),he)})),ye=function(n){var e=n.total,t=n.pending,i=n.paid,r=n.refunded;return Object(m.jsxs)(Oe,{children:[Object(m.jsxs)(ge,{isFeatured:!0,children:[Object(m.jsx)(ve,{id:"summary-total",children:"Total Received"}),Object(m.jsx)(Ce,{isFeatured:!0,"aria-describedby":"summary-total",children:Object(m.jsx)(L,{amount:e})})]}),Object(m.jsxs)(ge,{children:[Object(m.jsx)(ve,{id:"summary-pending",children:"Pending"}),Object(m.jsx)(Ce,{variant:"pending","aria-describedby":"summary-pending",children:Object(m.jsx)(L,{amount:t})})]}),Object(m.jsxs)(ge,{children:[Object(m.jsx)(ve,{id:"summary-paid",children:"Paid"}),Object(m.jsx)(Ce,{variant:"paid","aria-describedby":"summary-paid",children:Object(m.jsx)(L,{amount:i})})]}),Object(m.jsxs)(ge,{children:[Object(m.jsx)(ve,{id:"summary-refunded",children:"Refunded"}),Object(m.jsx)(Ce,{variant:"refunded","aria-describedby":"summary-refunded",children:Object(m.jsx)(L,{amount:r})})]})]})},we=t(12),ke=Object(we.a)([function(n){return n.invoices.list}],(function(n){return Object.values(n)})),Pe=function(n){return new Date(n.dashboard.currentMonth)},Se=Object(we.a)([ke],(function(n){return n.sort((function(n,e){return n.creation>e.creation?-1:1}))})),Me=Object(we.a)([Pe,Se],(function(n,e){return e.filter((function(e){return new Date(e.creation).getFullYear()===n.getFullYear()&&new Date(e.creation).getMonth()===n.getMonth()}))})),De=Object(we.a)([Me],(function(n){return n.reduce((function(n,e){return n+e.amount}),0)})),Ie=Object(we.a)([Me],(function(n){return n.filter((function(n){return!n.isPaid})).reduce((function(n,e){return n+e.amount}),0)})),Fe=Object(we.a)([Me],(function(n){return n.filter((function(n){return n.amount>0&&n.isPaid})).reduce((function(n,e){return n+e.amount}),0)})),Re=Object(we.a)([Me],(function(n){return n.filter((function(n){return n.amount<0&&n.isPaid})).reduce((function(n,e){return n+e.amount}),0)})),Ee=Object(gn.b)("dashboard/setCurrentMonth",(function(n){return{payload:n.toISOString()}})),Be={currentMonth:(new Date).toISOString()},ze=Object(gn.c)(Be,(function(n){n.addCase(Ee,(function(n,e){var t=e.payload;n.currentMonth=t}))})),Te=Object(p.b)((function(n){return{items:Me(n),total:De(n),pending:Ie(n),refunded:Re(n),paid:Fe(n),currentMonth:Pe(n)}}),(function(n){return{onChangeMonth:function(e){return n(Ee(e))},onCreateInvoice:function(e){return n(vn({creation:Mn(e)}))}}}))((function(n){var e=n.total,t=n.pending,i=n.paid,r=n.refunded,a=n.items,o=n.currentMonth,c=n.onChangeMonth,d=n.onCreateInvoice;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{children:Object(m.jsx)(E,{date:o,onChange:c})}),Object(m.jsx)(v,{children:Object(m.jsx)(ye,{total:e,pending:t,paid:i,refunded:r})}),Object(m.jsx)(z,{onClick:function(){return d(o)}}),Object(m.jsx)(v,{children:Object(m.jsx)(xe,{items:a})})]})})),Ue=Object(gn.a)({reducer:{invoices:Xn,dashboard:ze}}),Ge=function(){return Object(m.jsx)(p.a,{store:Ue,children:Object(m.jsxs)(h,{children:[Object(m.jsx)(g,{}),Object(m.jsx)(Te,{})]})})},Le=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};j.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Ge,{})}),document.getElementById("root")),Le()}},[[38,1,2]]]);
//# sourceMappingURL=main.188fc901.chunk.js.map