(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{146:function(t,e,n){"use strict";var r=n(236);e.a=r.a},492:function(t,e,n){"use strict";n(8),n(25),n(7),n(84),n(237),n(10),n(14),n(15),n(9),n(11);var r=n(2),o=(n(493),n(235)),c=n(146),l=n(46),d=n(147);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:o.a},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return v(v({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var r=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(c.a,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){r.changedByDelimiters=!0,n()}}},[this.$createElement(l.a,{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){var o=this.genIcon("next",r,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},493:function(t,e,n){var content=n(494);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0d135400",content,!0,{sourceMap:!1})},494:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-window__container{height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=e},495:function(t,e,n){"use strict";var r=n(148),o=n(106),c=n(235),l=n(0),d=n(5),h=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},498:function(t,e,n){"use strict";var r=n(147);e.a=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}})},499:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2d62e390",content,!0,{sourceMap:!1})},500:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},514:function(t,e,n){"use strict";n(8),n(7),n(10),n(19),n(14),n(15),n(9),n(11),n(43);var r=n(2),o=(n(499),n(492)),c=n(146),l=n(46),d=n(239),h=n(498),v=n(0),w=n(6);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(w.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(v.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},515:function(t,e,n){"use strict";n(8),n(7),n(10),n(14),n(15),n(9),n(11);var r=n(2),o=n(495),c=n(174),l=n(5),d=n(0),h=n(52);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(l.a)(o.a,h.a);e.a=m.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:w(w({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},534:function(t,e,n){var content=n(611);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("6956e57c",content,!0,{sourceMap:!1})},535:function(t,e,n){var content=n(613);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2fc3fd4a",content,!0,{sourceMap:!1})},602:function(t,e,n){t.exports=n.p+"img/featureImage1.5a1bc09.jpg"},603:function(t,e,n){t.exports=n.p+"img/featureImage2.7cc4c51.jpg"},604:function(t,e,n){t.exports=n.p+"img/featureImage3.e3da282.jpg"},605:function(t,e,n){t.exports=n.p+"img/house.ac2db8d.jpg"},606:function(t,e,n){t.exports=n.p+"img/featureImage4.a8218a4.jpg"},607:function(t,e,n){t.exports=n.p+"img/landingImage1.a78e6ee.jpg"},608:function(t,e,n){t.exports=n.p+"img/landingImage2.2283ed2.jpg"},609:function(t,e,n){t.exports=n.p+"img/landingImage3.28eac2f.jpg"},610:function(t,e,n){"use strict";var r=n(534);n.n(r).a},611:function(t,e,n){(e=n(12)(!1)).push([t.i,".parallax-container[data-v-6ea12b7a]{position:relative}.parallax-title[data-v-6ea12b7a]{position:absolute;top:30%;left:0;right:0;padding:20px;background:rgba(0,0,0,.9);color:#fff;text-align:center}#background[data-v-6ea12b7a]{color:brightness(10%)!important}",""]),t.exports=e},612:function(t,e,n){"use strict";var r=n(535);n.n(r).a},613:function(t,e,n){(e=n(12)(!1)).push([t.i,"section.hooper[data-v-4f87f92a],section.hooper[data-v-4f87f92a]:active,section.hooper[data-v-4f87f92a]:focus{outline:none}",""]),t.exports=e},625:function(t,e,n){"use strict";n.r(e);var r=n(607),o=n.n(r),c=n(608),l=n.n(c),d=n(609),h=n.n(d),v={data:function(){return{model:0,colors:[{title:"បង្កើតក្តីស្រៃរបស់អ្នកជាមួយយើង",content:"ដោយការជ្រើសរើសនូវលំនៅដ្ឋាន ដ៏សែនសមរម្យមួយសំរាប់រូបអ្នកនឹងគ្រួសារអ្នក",text:"primary",code:"#78a152",image:o.a},{title:"ដោយជ្រើរើសយកផ្ទះណាមួយ",content:"ដែលអ្នកពេញចិត្ត យើងមានផ្ទះជាច្រើនម៉ូតសំរាប់អ្នកជ្រើសរើស ដើម្បីបំពេញតម្រូវការរបស់អ្នក",text:"secondary",code:"#59482c",image:l.a},{title:"ហើយអាចកែតម្រូវតៅតាមចំនូលចិត្តរបស់អ្នក",content:"អ្នកអាចកែប្រែ ផ្លាស់ប្តូ តុបតែង នឹង ជ្រើរើសសំភារៈ នឹង ឧបករណ៍ផ្សេងៗ",text:"primary",code:"#59482c",image:h.a}],contents:[{title:"ផ្នែកខាងក្រៅផ្ទះ",text:"ជ្រើរើសសោភណភាពនៃគេហដ្ឋានរបស់អ្នកដោយខ្លួនឯងបាន",image:"https://expressyourselfpaint.com/wp-content/uploads/2015/06/exterior-icon1.png"},{title:"ផ្នែកខាងក្នុងផ្ទះ",text:"បរិក្ខាប្រើប្រាស់ តុ ទូ កៅអី របស់របស់ដែលអ្នកចង់បាន",image:"https://expressyourselfpaint.com/wp-content/uploads/2015/06/interior-icon1.png"},{title:"ឧបករណ៍ប្រើប្រាស់",text:"ជ្រើរើសរបស់របរប្រើប្រាស់ទូទៅនៅក្នុងផ្ទះ",image:"https://expressyourselfpaint.com/wp-content/uploads/2015/07/cabinet-icon.png"}]}}},w=(n(610),n(31)),m=n(33),f=n.n(m),x=n(236),y=n(226),_=n(73),C=n(514),O=n(515),j=n(472),T=n(488),I=n(461),k=n(174),P=n(473),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-carousel",{attrs:{"delimiter-icon":"mdi-minus","hide-delimiter-background":"",height:"500"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.colors,(function(e,i){return r("v-carousel-item",{key:i},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-img",{attrs:{gradient:"rgba(0,0,0,.5), rgba(0,0,0,.5) ",height:"500px",src:e.image}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8",sm:"8",lg:"8",xl:"8"}},[r("div",{staticClass:"text-left mt-15"},[r("h1",{staticClass:"text-h4"},[t._v(t._s(e.title))]),r("h5",{staticClass:"text-h5"},[t._v(t._s(e.content))])])])],1)],1)],1)],1)],1)],1)})),1),r("v-container",[r("v-row",{attrs:{justify:"space-around",align:"center",height:"500px"}},[r("v-col",{staticClass:"pa-15",attrs:{cols:"12",md:"6"}},[r("div",[r("h1",{staticClass:"text-h5 text-center text-uppercase brown--text text--darken-4"},[t._v("modify dream house with us")]),r("p",{staticClass:"body-1 text-center brown--text text--darken-4"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")])])]),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{"max-height":"250",contain:"",src:n(602)}})],1)],1),r("v-divider"),r("v-row",{attrs:{justify:"space-around",align:"center",height:"500px"}},[r("v-col",{staticClass:"pa-10",attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{src:n(603)}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",[r("h1",{staticClass:"text-h5 text-center text-uppercase brown--text text--darken-4"},[t._v("Start building your dream house with us today !")]),r("p",{staticClass:"body-1 text-center brown--text text--darken-4"},[t._v("We provide you tools and ability to select all appliances, decoration equipments and housing utilities.")])])])],1),r("v-divider"),r("v-row",{attrs:{justify:"space-around",align:"center",height:"500px"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",[r("h1",{staticClass:"text-h5 text-center text-uppercase brown--text text--darken-4"},[t._v("Choose your favorite materials")]),r("p",{staticClass:"body-1 text-center brown--text text--darken-4"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")])])]),r("v-col",{staticClass:"pa-10",attrs:{cols:"12",md:"6"}},[r("v-img",{attrs:{src:n(604)}})],1)],1),r("v-divider")],1),r("v-container",[r("v-row",t._l(6,(function(i){return r("v-col",{key:i,attrs:{cols:"6",lg:"3",md:"4",sm:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"./static/",src:n(605)}},[r("v-card-title",[t._v("Twin Villa")])],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Two Bedroom")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Twin Villa")]),r("div",[t._v("A great family house for you.")])]),r("v-card-actions",[r("v-btn",{attrs:{color:"brown",text:"",to:"configuration"}},[t._v("Share")]),r("v-btn",{attrs:{color:"brown",text:"",to:"configuration"}},[t._v("Explore")])],1)],1)],1)})),1)],1),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-img",{attrs:{gradient:"rgba(0,0,0,.6), rgba(0,0,0,.6) ",height:"450px",src:n(606)}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-center mt-15"},[r("h1",{staticClass:"mb-15 text--h4",staticStyle:{color:"#78a152"}},[t._v("ជ្រើរើសសំភារៈដោយខ្លួនអ្នកផ្ទាល់")])])])],1),r("v-row",t._l(t.contents,(function(content,i){return r("v-col",{key:i,staticClass:"d-flex justify-space-around"},[r("div",{staticClass:"text-center"},[r("p",[r("img",{attrs:{width:"100",src:content.image}})]),r("h5",{staticClass:"text-h5 light-green--text text-lighten-2"},[t._v(t._s(content.title))]),r("p",{staticClass:"px-5 mt-3 body-1 light-green--text text-lighten-2"},[t._v(t._s(content.text))])])])})),1)],1)],1)],1),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("div",{staticStyle:{padding:"120px 0"}},[r("h1",{staticClass:"text-center brown--text pa-7"},[t._v("ជ្រើរើសផ្ទះរបស់អ្នក")]),r("div",{staticClass:"text-center"},[r("v-btn",{staticClass:"pa-7",attrs:{to:"/configuration",block:"",outlined:"",color:"brown"}},[t._v("ចុចត្រង់នេះ")])],1)])])],1)],1)],1)}),[],!1,null,"6ea12b7a",null),$=component.exports;f()(component,{VBtn:x.a,VCard:y.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VCarousel:C.a,VCarouselItem:O.a,VCol:j.a,VContainer:T.a,VDivider:I.a,VImg:k.a,VRow:P.a});var D={layout:"default",head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"My custom description"},{property:"og:url",content:"https://house.khland.com.kh"},{property:"og:title",content:"KH LAND Co,. Ltd. Customize your dream house with us today."},{property:"og:image",content:"https://www.khland.com.kh/assets/images/kh_lg.png"}]}},components:{landingPageSection:$}},B=(n(612),n(479)),V=Object(w.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("landingPageSection")],1)}),[],!1,null,"4f87f92a",null);e.default=V.exports;f()(V,{VApp:B.a})}}]);