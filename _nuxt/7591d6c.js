(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{434:function(e,t,n){"use strict";n.r(t);n(23);var r=n(32),l=(n(68),n(13),{data:function(){return{email:"",name:"",subject:"",message:"",pending:!1,submitted:!1}},methods:{onSubmit:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),t.pending=!0,l=n(106),r.prev=3,r.next=6,l.post("https://b.ideality.app/api/1.1/wf/buildRequest_v2",{build:"1664267677813x956331564579529000",email:t.email,comments:"From: ".concat(t.name,"\n\nSubject: ").concat(t.subject,"\n\n").concat(t.message)});case 6:r.sent,t.submitted=!0,r.next=14;break;case 10:r.prev=10,r.t0=r.catch(3),console.error(r.t0),t.$bvToast.toast("There was an error submitting your email address. Please try again later.",{title:"Error",variant:"danger",solid:!0});case 14:return r.prev=14,t.pending=!1,t.$bvToast.toast("Thanks for contacting us! We will get back to you as soon as possible.",{title:"Success",variant:"success",solid:!0}),r.finish(14);case 18:case"end":return r.stop()}}),r,null,[[3,10,14,18]])})))()}}}),o=n(57),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("b-container",[t("b-row",{staticClass:"my-5",attrs:{"align-h":"center"}},[t("b-col",{staticStyle:{"max-width":"800px"}},[t("h1",[e._v("\n        Contact us\n      ")]),e._v(" "),t("p",[e._v("\n        We'd love to hear from you. Please send us a message using the form below.\n      ")]),e._v(" "),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Email address","label-for":"email",description:"We'll never share your email with anyone else."}},[t("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Name","label-for":"name"}},[t("b-form-input",{attrs:{id:"name",required:"",placeholder:"Enter name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Subject","label-for":"subject"}},[t("b-form-input",{attrs:{id:"subject",placeholder:"Enter subject"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Message","label-for":"message"}},[t("b-form-textarea",{attrs:{id:"message",required:"",placeholder:"Enter message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),e.pending?e._e():t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("\n          Submit\n        ")]),e._v(" "),e.pending?t("b-spinner",{attrs:{small:"",label:"Submitting..."}}):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);