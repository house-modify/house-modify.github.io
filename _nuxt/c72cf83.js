(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{529:function(e,t,o){var content=o(576);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(13).default)("fcc25362",content,!0,{sourceMap:!1})},575:function(e,t,o){"use strict";var l=o(529);o.n(l).a},576:function(e,t,o){(t=o(12)(!1)).push([e.i,".image-container[data-v-00231302]{margin-bottom:15px}.image-container .thumbnail-image[data-v-00231302]{width:400px;height:230px;overflow:hidden;border-radius:10px;border:2px dashed #6e4c41;text-align:center}.image-container .thumbnail-image img[data-v-00231302]{display:block;margin:auto;height:100%;border-radius:10px}",""]),e.exports=t},646:function(e,t,o){"use strict";o.r(t);o(54),o(35),o(238),o(21),o(51),o(55),o(505);var l={layout:"admin",data:function(){return{house:{square_meter:"",building_square_meter:"",location:"",house_model_id:"",house_pictures:[]},house_models:[{title:"Twin Villa"},{title:"Twin Villa"},{title:"Twin Villa"},{title:"Twin Villa"}],imageOne:"",image:{type:"",size:"",url:""}}},methods:{submitForm:function(){var e=new FormData;e.append("house[square_meter]",this.house.square_meter),e.append("house[building_square_meter]",this.house.building_square_meter),e.append("house[location]",this.house.location),e.append("house[house_model_id]",this.house.house_model_id),e.append("house[pictures]",this.$refs.fileInput.files[0],this.image.name),this.$store.dispatch("house/addHouse",e),this.house={square_meter:"",building_square_meter:"",location:"",house_model_id:"",house_pictures:[]}},openFile:function(e){this.$refs.fileInput.click()},changeFile:function(e){var t=this.$refs.fileInput.files;if(t.length>0){var o=t[0];this.image.url=URL.createObjectURL(o),this.image.size=(t[0].size/1048576).toFixed(2),this.image.name=t[0].name,this.image.type=t[0].type}},CancelFile:function(){console.log("change file")}},computed:{house_models_items:function(){return this.house_models.map((function(e){return e.title}))}}},n=(o(575),o(31)),r=o(33),c=o.n(r),m=o(236),d=o(472),h=o(488),_=o(483),f=o(473),v=o(652),w=o(95),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"container"},[o("h1",{staticClass:"text-h5 text-uppercase"},[e._v("Add New Record For House Configuration")])])])],1),o("v-row",[o("v-col",{staticClass:"mt-n10",attrs:{cols:"12",md:"4",sm:"4"}},[o("v-form",{ref:"form",staticClass:"container"},[o("v-row",[o("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[o("v-select",{attrs:{color:"brown",items:e.house_models_items,label:"House Models"},model:{value:e.house.house_model_id,callback:function(t){e.$set(e.house,"house_model_id",t)},expression:"house.house_model_id"}})],1),o("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[o("v-text-field",{attrs:{color:"brown",label:"House Location"},model:{value:e.house.location,callback:function(t){e.$set(e.house,"location",t)},expression:"house.location"}})],1),o("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[o("v-text-field",{attrs:{color:"brown",label:"Building Square Metter"},model:{value:e.house.building_square_meter,callback:function(t){e.$set(e.house,"building_square_meter",t)},expression:"house.building_square_meter"}})],1),o("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[o("v-text-field",{attrs:{color:"brown",label:"Building Sqaure Metter"},model:{value:e.house.square_meter,callback:function(t){e.$set(e.house,"square_meter",t)},expression:"house.square_meter"}})],1),o("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[o("v-btn",{staticClass:"mr-4",attrs:{color:"brown",block:""},on:{click:e.submitForm}},[e._v("Create Record")])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"8",sm:"8"}},[o("strong",[e._v("Recommend Image Size")]),o("code",[e._v("Height: 400px x Width: 800px")]),o("div",{staticClass:"image-container"},[o("div",{staticClass:"thumbnail-image",on:{click:function(t){return e.openFile(t)}}},[o("img",{attrs:{src:e.image.url}}),o("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*",hidden:"true"},on:{change:function(t){return e.changeFile(t)}}})]),o("div",{staticClass:"bottons-group mt-2"},[o("v-btn",{staticClass:"mr-2",attrs:{color:"red",small:"",outlined:""},on:{click:e.CancelFile}},[e._v("Cancel")]),o("v-btn",{staticClass:"mr-2",attrs:{color:"brown",small:"",outlined:""},on:{click:function(t){return e.openFile(t)}}},[e._v("Choose file")])],1)])])],1)],1)}),[],!1,null,"00231302",null);t.default=component.exports;c()(component,{VBtn:m.a,VCol:d.a,VContainer:h.a,VForm:_.a,VRow:f.a,VSelect:v.a,VTextField:w.a})}}]);