(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{294:function(e,t,r){"use strict";r.r(t);var o=r(21),n=(r(58),{auth:!1,layout:"auth",mounted:function(){this.$store.dispatch("auth-form/setFormData",{title:"Register",description:"Create an account.",background:"bg-register.jpg"})},data:function(){return{user:{name:"",occupation:"",email:"",password:""}}},methods:{register:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,t.$axios.post("/api/v1/email-check",{email:t.user.email});case 4:if(r.sent.data.data.is_available){r.next=9;break}alert("Email telah digunakan"),r.next=12;break;case 9:return r.next=11,t.$axios.post("/api/v1/register",t.user);case 11:t.$router.push("/login");case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),console.log(r.t0);case 17:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}}),l=r(24),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",[r("div",{staticClass:"mb-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control form-control-lg gf-form",attrs:{type:"text",id:"name",placeholder:"Enter name"},domProps:{value:e.user.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"occupation"}},[e._v("Occupation")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.occupation,expression:"user.occupation"}],staticClass:"form-control form-control-lg gf-form",attrs:{type:"text",id:"occupation",placeholder:"Enter occupation"},domProps:{value:e.user.occupation},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||e.$set(e.user,"occupation",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg gf-form",attrs:{type:"email",id:"email",placeholder:"Enter email"},domProps:{value:e.user.email},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg gf-form",attrs:{type:"password",id:"password",placeholder:"Enter password"},domProps:{value:e.user.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)},input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"form-action"},[r("button",{staticClass:"cg-btn mod-form cl-secondary",on:{click:e.register}},[e._v("Continue")])])]),e._v(" "),r("p",{staticClass:"text-center"},[e._v("Already have an account? "),r("NuxtLink",{staticClass:"link-secondary",attrs:{to:"/login"}},[e._v("Login")])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);