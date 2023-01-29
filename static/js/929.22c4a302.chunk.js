"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[929],{22929:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var a=r(6907),i=r(29439),s=r(15206),t=(r(5462),r(33459)),o=r(55705),l=r(23867),d=r(59434),m=r(52598),u=r(72791),c=r(10266),h=r(4708),p=r(68870),x=r(93044),g=r(20890),j=r(61889),f=r(64346),w=r(68096),Z=r(94925),b=r(28029),v=r(63466),P=r(13400),q=r(47071),y=r(36151),S=r(50533),C=r(29569),T=r(3710),k=r(30403),E=r(80184),A=function(){var e=(0,t.Z)(),n=(0,u.useState)(!1),r=(0,i.Z)(n,2),a=r[0],A=r[1],W=(0,d.I0)(),_=(0,o.TA)({initialValues:{name:"",email:"",password:""},validationSchema:l.$3,onSubmit:function(e,n){var r=n.resetForm;W((0,m.SA)({name:e.name,email:e.email,password:e.password})).unwrap().then((function(){s.Am.success("You are successfully logged into the phone book"),r()})).catch((function(){s.Am.error("There was a problem signing into the app, please try again"),r()})),r()}});return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(c.Z,{component:"main",maxWidth:"xs",children:[(0,E.jsx)(h.ZP,{}),(0,E.jsxs)(p.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,E.jsx)(x.Z,{sx:{m:1,bgcolor:"dark"===e.palette.mode?"#311b92":"#673ab7"},children:(0,E.jsx)(k.Z,{})}),(0,E.jsx)(g.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,E.jsxs)("form",{onSubmit:_.handleSubmit,children:[(0,E.jsxs)(j.ZP,{container:!0,spacing:2,children:[(0,E.jsx)(j.ZP,{item:!0,xs:12,children:(0,E.jsx)(f.Z,{type:"text",name:"name",id:"name",label:"Name",fullWidth:!0,variant:"outlined",margin:"dense",value:_.values.name,onChange:_.handleChange,error:_.touched.name&&Boolean(_.errors.name),helperText:_.touched.name&&_.errors.name,required:!0})}),(0,E.jsx)(j.ZP,{item:!0,xs:12,children:(0,E.jsx)(f.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"email",value:_.values.email,onChange:_.handleChange,error:_.touched.email&&Boolean(_.errors.email),helperText:_.touched.email&&_.errors.email})}),(0,E.jsx)(j.ZP,{item:!0,xs:12})]}),(0,E.jsxs)(w.Z,{variant:"outlined",fullWidth:!0,children:[(0,E.jsx)(Z.Z,{htmlFor:"password",children:"Password"}),(0,E.jsx)(b.Z,{id:"password",fullWidth:!0,required:!0,value:_.values.password,onChange:_.handleChange,type:a?"text":"password",endAdornment:(0,E.jsx)(v.Z,{position:"end",children:(0,E.jsx)(P.Z,{"aria-label":"toggle password visibility",onClick:function(){return A((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:a?(0,E.jsx)(C.Z,{}):(0,E.jsx)(T.Z,{})})}),label:"Password",error:_.touched.password&&Boolean(_.errors.password)}),(0,E.jsx)(q.Z,{error:!0,children:_.touched.password&&_.errors.password})]}),(0,E.jsx)(y.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]}),(0,E.jsx)(j.ZP,{container:!0,justifyContent:"center",children:(0,E.jsx)(j.ZP,{item:!0,children:(0,E.jsx)(S.Z,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})})};function W(){return(0,E.jsxs)("div",{children:[(0,E.jsx)(a.ql,{children:(0,E.jsx)("title",{children:"Registration"})}),(0,E.jsx)(A,{})]})}},23867:function(e,n,r){r.d(n,{$3:function(){return i},KL:function(){return s},p7:function(){return t}});var a=r(24021),i=(r(87427),a.object().shape({name:a.string().min(3,"Too Short !").max(30,"Too Long !").required("Please enter your name"),email:a.string().email("Enter a Vaid Email").required("Email is Required"),password:a.string().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")})),s=a.object().shape({email:a.string().email("Enter a Vaid Email").required("Email is Required"),password:a.string().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")}),t=a.object().shape({name:a.string().required("The name must contain only letters and spaces."),number:a.string().phone(null,!0,"Number must contain 10 digits").required()})}}]);
//# sourceMappingURL=929.22c4a302.chunk.js.map