(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{416:function(e,t,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("16aeaa43",content,!0,{sourceMap:!1})},417:function(e,t,n){"use strict";n(416)},418:function(e,t,n){var r=n(87)(!1);r.push([e.i,'.hero{background-color:#f8f8f8;color:#333;font-family:"Helvetica",sans-serif}.second-section{background-color:#fff;color:#333}.btn-primary,.btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color:#007bff;border-color:#007bff}',""]),e.exports=r},429:function(e,t,n){"use strict";n.r(t);var r=n(32),o=(n(67),{name:"IndexPage",head:function(){return{title:"Undum 💜 Powering healthcare with AI, one device at a time.",meta:[{hid:"description",name:"description",content:"Undum is a low-power, high-performance and easy-to-use AI microchip that has been specifically designed for medical equipment. By powering your devices with Undum, you can help your customers make better decisions, faster."}]}},data:function(){return{email:"",pending:!1}},methods:{onSubmit:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),o=n(108),r.prev=2,t.pending=!0,r.next=6,o.post("https://b.ideality.app/api/1.1/wf/buildRequest_v2",{build:"1664267677813x956331564579529000",email:t.email});case 6:t.$bvToast.toast("Thanks for joining the waitlist! We will notify you when we launch.",{title:"Success",variant:"success",solid:!0}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),t.$bvToast.toast("There was an error submitting your email address. Please try again later.",{title:"Error",variant:"danger",solid:!0});case 12:return r.prev=12,t.$bvModal.hide("waitlist"),t.$nextTick((function(){t.email="",t.pending=!1})),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[2,9,12,16]])})))()}}}),l=(n(417),n(81)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("b-container",{attrs:{fluid:""}},[t("b-row",{staticClass:"hero",staticStyle:{height:"100vh"},attrs:{"align-v":"center","align-h":"center"}},[t("b-col",{staticClass:"px-2 px-md-5",staticStyle:{"max-width":"800px"}},[t("b-row",{staticClass:"gx-4",attrs:{"align-h":"center"}},[t("b-col",[t("b-row",{attrs:{"align-h":"center"}},[t("b-col",{staticClass:"text-center text-md-start",attrs:{"align-self":"center"}},[t("h1",{staticClass:"display-4 mb-3"},[e._v("\n                Undum\n              ")]),e._v(" "),t("h2",{staticClass:"display-5 mb-3"},[e._v("\n                Powering healthcare with AI, one device at a time\n              ")]),e._v(" "),t("img",{staticClass:"m-3",staticStyle:{width:"320px"},attrs:{src:"/grendel/images/undum2.png"}}),e._v(" "),t("b-row",[t("b-col",[t("p",{staticClass:"lead py-3"},[e._v("\n                    Undum is a low-power, high-performance and easy-to-use AI microchip that has been specifically designed for medical equipment. By powering your devices with Undum, you can help your customers make better decisions, faster.\n                  ")]),e._v(" "),e.submitted?e._e():t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.waitlist",modifiers:{waitlist:!0}}],attrs:{size:"lg",variant:"primary"}},[e._v("\n                    Join the waitlist\n                  ")]),e._v(" "),t("b-modal",{attrs:{id:"waitlist",title:"Join the waitlist","hide-footer":""}},[t("p",[e._v("\n                      Thank you for your interest in Undum! We are currently finalizing our product and preparing for launch. Please enter your email address below, and we’ll let you know as soon as Undum becomes available.\n                    ")]),e._v(" "),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Email address","label-for":"email",description:"We'll never share your email with anyone else."}},[t("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),e.pending?e._e():t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("\n                        Submit\n                      ")]),e._v(" "),e.pending?t("b-spinner",{attrs:{small:"",label:"Submitting..."}}):e._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),t("b-row",{staticClass:"text-center second-section pt-5",attrs:{"align-h":"center"}},[t("b-col",{staticStyle:{"max-width":"800px"},attrs:{cols:"12 my-5"}},[t("h2",{staticClass:"display-5 mb-4"},[t("strong",[e._v("\n          Help your customers make better decisions, faster\n        ")])]),e._v(" "),t("div",[t("p",[e._v("As a manufacturer of healthcare equipment, you know that AI has the potential to revolutionize the industry. But adding AI to your devices can be costly and time-consuming. "),t("strong",[e._v("Undum is changing that.")]),e._v(" We worked hard to pack all the power of AI into a single, easy-to-use microchip. Now, you can add AI to your devices quickly and easily, without breaking the bank.")])])]),e._v(" "),t("b-col",{staticClass:"text-center",attrs:{cols:"12","align-self":"center"}},[t("b-row",{staticClass:"gx-5",attrs:{"align-h":"center"}},[t("b-col",{staticClass:"mt-2 text-center",attrs:{cols:"12",sm:"10",lg:"3"}},[t("h5",[e._v("\n            Power efficient\n          ")]),e._v(" "),t("p",[e._v("\n            With an average power consumption of just XX mW, Undum is one of the most power-efficient AI chips on the market. That means you can use it in battery-powered devices without sacrificing performance.\n          ")])]),e._v(" "),t("b-col",{staticClass:"mt-2 text-center",attrs:{cols:"12",sm:"10",lg:"3"}},[t("h5",[e._v("\n            High performance\n          ")]),e._v(" "),t("p",[e._v("\n            Supporting up to XX trillion operations per second (TOPS), Undum makes sure your devices can keep up with the demands of AI, whether it’s for medical imaging, drug discovery or any other AI-powered application.\n          ")])]),e._v(" "),t("b-col",{staticClass:"mt-2 text-center",attrs:{cols:"12",sm:"10",lg:"3"}},[t("h5",[e._v("\n            Easy to use\n          ")]),e._v(" "),t("p",[e._v("\n            Undum comes with an easy-to-use software development kit (SDK) that lets you get started quickly, without the need for expensive and time-consuming hardware modifications or FPGA development.\n          ")])])],1)],1),e._v(" "),t("b-col",{staticClass:"py-5",staticStyle:{"max-width":"800px"},attrs:{cols:"12"}},[t("h2",{staticClass:"display-5 mb-3"},[e._v("\n        Ready to take your devices to the next level?\n      ")]),e._v(" "),t("p",[e._v("\n        If you’re looking to add AI to your healthcare devices, Undum is the solution for you. Join the waitlist today and be one of the first to get your hands on our game-changing microchip.\n      ")]),e._v(" "),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.waitlist",modifiers:{waitlist:!0}}],attrs:{size:"lg",variant:"primary"}},[e._v("\n        Join the waitlist\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);