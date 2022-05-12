"use strict";(self.webpackChunkmaterial_ui_auth=self.webpackChunkmaterial_ui_auth||[]).push([[887],{6731:function(e,n,t){var i,a=t(168),r=t(7630),s=t(184),o=(0,r.ZP)("form")(i||(i=(0,a.Z)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  overflow-y: auto;\n  padding: 0.75rem;\n  width: 100%;\n\n  & button {\n    font-size: 0.8rem;\n  }\n\n  & hr {\n    width: 100%;\n    margin: 1.5rem 0;\n  }\n\n  & svg {\n    width: 0.75em;\n    height: 0.75em;\n  }\n\n  "," {\n    width: 70vw;\n    padding: 1.5rem;\n  }\n\n  "," {\n    & button {\n      font-size: 0.9375rem;\n    }\n  }\n\n  "," {\n    & svg {\n      height: 1em;\n      width: 1em;\n    }\n  }\n\n  "," {\n    width: 50vh;\n    padding: 2rem;\n  }\n"])),(function(e){return e.theme.breakpoints.up("szm")}),(function(e){return e.theme.breakpoints.up("sx")}),(function(e){return e.theme.breakpoints.up("szm")}),(function(e){return e.theme.breakpoints.up("m")}));n.Z=function(e){var n=e.children,t=e.onSubmit;return(0,s.jsx)(o,{onSubmit:t,children:n})}},4887:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var i=t(1413),a=t(5861),r=t(885),s=t(168),o=t(7757),l=t.n(o),d=t(2791),c=t(5705),u=t(7630),m=t(5193),h=t(8511),p=t(3894),f=t(6151),v=t(4320),Z=t(3239),x=t(1286),g=t(6731),b=t(9875),w=t(3400),j=t(4942),N=t(3366),z=t(7462),P=t(8182),y=t(767),S=t(4036),k=t(890),E=t(3840),L=t(2930),C=t(5159);function B(e){return(0,C.Z)("MuiInputAdornment",e)}var M,T,A,I,W,V=(0,t(208).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),R=t(3736),_=t(184),F=["children","className","component","disablePointerEvents","disableTypography","position","variant"],D=(0,u.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,S.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,z.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,j.Z)({},"&.".concat(V.positionStart,"&:not(.").concat(V.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),H=d.forwardRef((function(e,n){var t=(0,R.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,a=t.className,r=t.component,s=void 0===r?"div":r,o=t.disablePointerEvents,l=void 0!==o&&o,c=t.disableTypography,u=void 0!==c&&c,m=t.position,h=t.variant,p=(0,N.Z)(t,F),f=(0,L.Z)()||{},v=h;h&&f.variant,f&&!v&&(v=f.variant);var Z=(0,z.Z)({},t,{hiddenLabel:f.hiddenLabel,size:f.size,disablePointerEvents:l,position:m,variant:v}),x=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,a=e.position,r=e.size,s=e.variant,o={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,S.Z)(a)),s,i&&"hiddenLabel",r&&"size".concat((0,S.Z)(r))]};return(0,y.Z)(o,B,n)}(Z);return(0,_.jsx)(E.Z.Provider,{value:null,children:(0,_.jsx)(D,(0,z.Z)({as:s,ownerState:Z,className:(0,P.Z)(x.root,a),ref:n},p,{children:"string"!==typeof i||u?(0,_.jsxs)(d.Fragment,{children:["start"===m?M||(M=(0,_.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,_.jsx)(k.Z,{color:"text.secondary",children:i})}))})})),O=t(4865),U=t(1163),q=t(1469),G=(0,u.ZP)(k.Z)(T||(T=(0,s.Z)(["\n  margin-top: 1.75rem;\n  letter-spacing: 0.1rem;\n"]))),J=(0,u.ZP)(U.Z)(A||(A=(0,s.Z)(["\n  margin: 1rem 0;\n"]))),K=(0,u.ZP)("div")(I||(I=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n"]))),Q=(0,u.ZP)(w.Z)(W||(W=(0,s.Z)(["\n  background-color: #e1e2e1;\n"]))),X=function(){var e=(0,d.useState)(!1),n=(0,r.Z)(e,2),t=n[0],s=n[1],o=(0,d.useState)(!1),u=(0,r.Z)(o,2),w=u[0],j=u[1],N=(0,d.useState)(!1),z=(0,r.Z)(N,2),P=z[0],y=z[1],S=(0,m.Z)((function(e){return e.breakpoints.up("szm")})),k=(0,m.Z)("@media(min-height: 934px)"),E=p.Z.accountSchema,L=(0,c.TA)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:E,onSubmit:function(){},validateOnBlur:!0}),C=L.setValues,B=L.setFieldValue,M=L.handleChange,T=L.handleBlur,A=L.values,I=L.touched,W=L.errors,V=(0,h.Z)(),R=V.isLoading,F=V.isSending,D=V.getUserInfo,U=V.updateProfile,X=V.setNewPassword;(0,d.useEffect)((function(){var e=!0,n=function(){var n=(0,a.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D();case 2:t=n.sent,e&&C((0,i.Z)((0,i.Z)({},t),{},{password:""}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){e=!1}}),[D,C]);var Y=A.firstName,$=A.lastName,ee=A.email,ne=A.password,te=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(ne).then((function(){B("password",""),I.password=!1}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=S&&k;return(0,_.jsx)(v.Z,{headingType:"h1",headingText:"".concat(Y,"'s Profile"),headingSize:"h4",wrapper:"section",children:(0,_.jsxs)(g.Z,{children:[(0,_.jsx)(b.Z,{component:O.Z,fontSize:"large"}),(0,_.jsxs)(K,{children:[(0,_.jsx)(J,{id:"firstName",name:"firstName",type:"text",label:"First Name",value:Y,onBlur:T,onChange:M,error:I.firstName&&Boolean(W.firstName),helperText:I.firstName&&W.firstName,disabled:!t,size:ie?"medium":"small",fullWidth:!0}),(0,_.jsx)(H,{position:"end",children:(0,_.jsx)(q.Z,{title:"Edit",placement:"right",children:(0,_.jsx)(Q,{"aria-label":"toggle edit users first name",onClick:function(){s((function(e){return!e}))},children:(0,_.jsx)(x.Z,{})})})})]}),(0,_.jsxs)(K,{children:[(0,_.jsx)(J,{id:"lastName",name:"lastName",type:"text",label:"Last Name",value:$,onBlur:T,onChange:M,error:I.lastName&&Boolean(W.lastName),helperText:I.lastName&&W.lastName,disabled:!w,size:ie?"medium":"small",fullWidth:!0}),(0,_.jsx)(H,{position:"end",children:(0,_.jsx)(q.Z,{title:"Edit",placement:"right",children:(0,_.jsx)(Q,{"aria-label":"toggle edit users last name",onClick:function(){j((function(e){return!e}))},children:(0,_.jsx)(x.Z,{})})})})]}),(0,_.jsxs)(K,{children:[(0,_.jsx)(J,{id:"email",name:"email",type:"email",label:"Email",value:ee,onBlur:T,onChange:M,error:I.email&&Boolean(W.email),helperText:I.email&&W.email,disabled:!P,size:ie?"medium":"small",fullWidth:!0}),(0,_.jsx)(H,{position:"end",children:(0,_.jsx)(q.Z,{title:"Edit",placement:"right",children:(0,_.jsx)(Q,{"aria-label":"toggle edit users email",onClick:function(){y((function(e){return!e}))},children:(0,_.jsx)(x.Z,{})})})})]}),!R&&(0,_.jsx)(f.Z,{type:"button",variant:"contained",size:ie?"large":"medium",onClick:function(){U({firstName:Y,lastName:$,email:ee}).then((function(){s(!1),j(!1),y(!1)}))},fullWidth:!0,children:"Save Account Details"}),R&&(0,_.jsx)(Z.Z,{}),(0,_.jsx)(G,{component:"h2",variant:"h5",children:"Set New Password"}),(0,_.jsx)(J,{id:"password",name:"password",type:"password",label:"Password",value:ne,onBlur:T,onChange:M,error:I.password&&Boolean(W.password),helperText:I.password&&W.password,size:ie?"medium":"small",fullWidth:!0}),!F&&(0,_.jsx)(f.Z,{type:"button",variant:"contained",size:ie?"large":"medium",onClick:te,fullWidth:!0,children:"Save New Password"}),F&&(0,_.jsx)(Z.Z,{})]})})},Y=function(){return(0,_.jsx)(X,{})}},1286:function(e,n,t){var i=t(5318);n.Z=void 0;var a=i(t(5649)),r=t(184),s=(0,a.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s},4865:function(e,n,t){var i=t(5318);n.Z=void 0;var a=i(t(5649)),r=t(184),s=(0,a.default)([(0,r.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,r.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts");n.Z=s}}]);
//# sourceMappingURL=887.faccbcfd.chunk.js.map