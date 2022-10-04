(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{416:function(t,e,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("1d63b2ae",content,!0,{sourceMap:!1})},417:function(t,e,n){"use strict";n(416)},418:function(t,e,n){var o=n(87)(!1);o.push([t.i,'.hero{background-color:#f8f8f8;color:#333;font-family:"Helvetica",sans-serif}.second-section{background-color:#fff;color:#333}.btn-primary,.btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color:#007bff;border-color:#007bff}',""]),t.exports=o},429:function(t,e,n){"use strict";n.r(e);var o=n(32),r=(n(67),{name:"IndexPage",head:function(){return{title:"Grendel 👹 A Beast of a Chip",meta:[{hid:"description",name:"description",content:"Grendel is a powerful AI chip that can be used for a wide range of applications. It is designed to accelerate the development of AI-based systems by providing a simple, scalable and cost-effective solution for designing and testing AI models."}]}},data:function(){return{email:""}},methods:{onSubmit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.preventDefault(),r=n(108),o.prev=2,o.next=5,r.post("https://b.ideality.app/api/1.1/wf/buildRequest_v2",{build:"1664267677813x956331564579529000",email:e.email});case 5:e.$bvToast.toast("Thanks for joining the waitlist! We will notify you when we launch.",{title:"Success",variant:"success",solid:!0}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(2),e.$bvToast.toast("There was an error submitting your email address. Please try again later.",{title:"Error",variant:"danger",solid:!0});case 11:return o.prev=11,e.$bvModal.hide("waitlist"),o.finish(11);case 14:case"end":return o.stop()}}),o,null,[[2,8,11,14]])})))()}}}),l=(n(417),n(81)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"hero",staticStyle:{height:"100vh"},attrs:{"align-v":"center","align-h":"center"}},[e("b-col",{staticClass:"px-2 px-md-5",staticStyle:{"max-width":"800px"}},[e("b-row",{staticClass:"gx-4",attrs:{"align-h":"center"}},[e("b-col",[e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{staticClass:"text-center text-md-start",attrs:{"align-self":"center"}},[e("h1",{staticClass:"display-4 mb-3"},[t._v("\n                Undum\n              ")]),t._v(" "),e("h2",{staticClass:"display-5 mb-3"},[t._v("\n                Powering healthcare with AI, one device at a time\n              ")]),t._v(" "),e("img",{staticClass:"m-3",staticStyle:{width:"320px"},attrs:{src:"/images/undum2.png"}}),t._v(" "),e("b-row",[e("b-col",[e("p",{staticClass:"lead py-3"},[t._v("\n                    Undum is a low-power, high-performance and easy-to-use AI microchip that has been specifically designed for medical equipment. By powering your devices with Undum, you can help your customers make better decisions, faster.\n                  ")]),t._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.waitlist",modifiers:{waitlist:!0}}],attrs:{size:"lg",variant:"primary"}},[t._v("\n                    Join the waitlist\n                  ")]),t._v(" "),e("b-modal",{attrs:{id:"waitlist",title:"Join the waitlist","hide-footer":""}},[e("p",[t._v("\n                      Thank you for your interest in Undum! We are currently finalizing our product and preparing for launch. Please enter your email address below, and we’ll let you know as soon as Undum becomes available.\n                    ")]),t._v(" "),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{label:"Email address","label-for":"email",description:"We'll never share your email with anyone else."}},[e("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("b-row",{staticClass:"text-center second-section pt-5",attrs:{"align-h":"center"}},[e("b-col",{staticStyle:{"max-width":"800px"},attrs:{cols:"12 my-5"}},[e("h2",{staticClass:"display-5 mb-4"},[e("strong",[t._v("\n          Help your customers make better decisions, faster\n        ")])]),t._v(" "),e("div",[e("p",[t._v("As a manufacturer of healthcare equipment, you know that AI has the potential to revolutionize the industry. But adding AI to your devices can be costly and time-consuming. "),e("strong",[t._v("Undum is changing that.")]),t._v(" We worked hard to pack all the power of AI into a single, easy-to-use microchip. Now, you can add AI to your devices quickly and easily, without breaking the bank.")])])]),t._v(" "),e("b-col",{staticClass:"text-center",attrs:{cols:"12","align-self":"center"}},[e("b-row",{staticClass:"gx-5",attrs:{"align-h":"center"}},[e("b-col",{staticClass:"mt-2 text-center",attrs:{cols:"12",sm:"10",lg:"3"}},[e("h5",[t._v("\n            Power efficient\n          ")]),t._v(" "),e("p",[t._v("\n            With an average power consumption of just XX mW, Undum is one of the most power-efficient AI chips on the market. That means you can use it in battery-powered devices without sacrificing performance.\n          ")])]),t._v(" "),e("b-col",{staticClass:"mt-2 text-center",attrs:{cols:"12",sm:"10",lg:"3"}},[e("h5",[t._v("\n            High performance\n          ")]),t._v(" "),e("p",[t._v("\n            Supporting up to XX trillion operations per second (TOPS), Undum makes sure your devices can keep up with the demands of AI, whether it’s for medical imaging, drug discovery or any other AI-powered application.\n          ")])]),t._v(" "),e("b-col",{staticClass:"mt-2 text-center",attrs:{cols:"12",sm:"10",lg:"3"}},[e("h5",[t._v("\n            Easy to use\n          ")]),t._v(" "),e("p",[t._v("\n            Undum comes with an easy-to-use software development kit (SDK) that lets you get started quickly, without the need for expensive and time-consuming hardware modifications or FPGA development.\n          ")])])],1)],1),t._v(" "),e("b-col",{staticClass:"py-5",staticStyle:{"max-width":"800px"},attrs:{cols:"12"}},[e("h2",{staticClass:"display-5 mb-3"},[t._v("\n        Ready to take your devices to the next level?\n      ")]),t._v(" "),e("p",[t._v("\n        If you’re looking to add AI to your healthcare devices, Undum is the solution for you. Join the waitlist today and be one of the first to get your hands on our game-changing microchip.\n      ")]),t._v(" "),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.waitlist",modifiers:{waitlist:!0}}],attrs:{size:"lg",variant:"primary"}},[t._v("\n        Join the waitlist\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);