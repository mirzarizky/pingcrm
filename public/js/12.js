(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"M+96":function(t,e,r){"use strict";r.r(e);var a=r("+SZM"),o=r("Z84v"),s=r("Ujtf"),l=r("pF+r"),n={components:{Layout:a.a,LoadingButton:o.a,SelectInput:s.a,TextInput:l.a},props:{organizations:Array},remember:"form",data:function(){return{sending:!1,form:{first_name:null,last_name:null,organization_id:null,email:null,phone:null,address:null,city:null,region:null,country:null,postal_code:null}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("contacts.store"),this.form).then(function(){return t.sending=!1})}}},i=r("KHd+"),u=Object(i.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout",{attrs:{title:"Create Contact"}},[r("h1",{staticClass:"mb-8 font-bold text-3xl"},[r("inertia-link",{staticClass:"text-indigo-light hover:text-indigo-dark",attrs:{href:t.route("contacts")}},[t._v("Contacts")]),t._v(" "),r("span",{staticClass:"text-indigo-light font-medium"},[t._v("/")]),t._v(" Create\n  ")],1),t._v(" "),r("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-lg"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"p-8 -mr-6 -mb-8 flex flex-wrap"},[r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.first_name,label:"First name"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.last_name,label:"Last name"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}}),t._v(" "),r("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.organization_id,label:"Organization"},model:{value:t.form.organization_id,callback:function(e){t.$set(t.form,"organization_id",e)},expression:"form.organization_id"}},[r("option",{domProps:{value:null}}),t._v(" "),t._l(t.organizations,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.email,label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.phone,label:"Phone"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.address,label:"Address"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.city,label:"City"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.region,label:"Province/State"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}}),t._v(" "),r("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.country,label:"Country"},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}},[r("option",{domProps:{value:null}}),t._v(" "),r("option",{attrs:{value:"CA"}},[t._v("Canada")]),t._v(" "),r("option",{attrs:{value:"US"}},[t._v("United States")])]),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.postal_code,label:"Postal code"},model:{value:t.form.postal_code,callback:function(e){t.$set(t.form,"postal_code",e)},expression:"form.postal_code"}})],1),t._v(" "),r("div",{staticClass:"px-8 py-4 bg-grey-lightest border-t border-grey-lighter flex justify-end items-center"},[r("loading-button",{staticClass:"btn-indigo",attrs:{loading:t.sending,type:"submit"}},[t._v("Create Contact")])],1)])])])},[],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=12.js.map?id=8fd1cfc6935be96ea598