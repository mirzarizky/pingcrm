(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BEPN:function(t,e,a){"use strict";a.r(e);var s=a("MY0P"),r=a("+SZM"),o=a("Z84v"),i=a("Ujtf"),n=a("pF+r"),l=a("GO1j"),c={components:{Icon:s.a,Layout:r.a,LoadingButton:o.a,SelectInput:i.a,TextInput:n.a,TrashedMessage:l.a},props:{organization:Object},remember:"form",data:function(){return{sending:!1,form:{name:this.organization.name,email:this.organization.email,phone:this.organization.phone,address:this.organization.address,city:this.organization.city,region:this.organization.region,country:this.organization.country,postal_code:this.organization.postal_code}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.put(this.route("organizations.update",this.organization.id),this.form).then(function(){return t.sending=!1})},destroy:function(){confirm("Are you sure you want to delete this organization?")&&this.$inertia.delete(this.route("organizations.destroy",this.organization.id))},restore:function(){confirm("Are you sure you want to restore this organization?")&&this.$inertia.put(this.route("organizations.restore",this.organization.id))}}},d=a("KHd+"),u=Object(d.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:t.form.name}},[a("h1",{staticClass:"mb-8 font-bold text-3xl"},[a("inertia-link",{staticClass:"text-indigo-light hover:text-indigo-dark",attrs:{href:t.route("organizations")}},[t._v("Organizations")]),t._v(" "),a("span",{staticClass:"text-indigo-light font-medium"},[t._v("/")]),t._v("\n    "+t._s(t.form.name)+"\n  ")],1),t._v(" "),t.organization.deleted_at?a("trashed-message",{staticClass:"mb-6",on:{restore:t.restore}},[t._v("\n    This organization has been deleted.\n  ")]):t._e(),t._v(" "),a("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-lg"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"p-8 -mr-6 -mb-8 flex flex-wrap"},[a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.email,label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.phone,label:"Phone"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),t._v(" "),a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.address,label:"Address"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),t._v(" "),a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.city,label:"City"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}}),t._v(" "),a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.region,label:"Province/State"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}}),t._v(" "),a("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.country,label:"Country"},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}},[a("option",{domProps:{value:null}}),t._v(" "),a("option",{attrs:{value:"CA"}},[t._v("Canada")]),t._v(" "),a("option",{attrs:{value:"US"}},[t._v("United States")])]),t._v(" "),a("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{errors:t.$page.errors.postal_code,label:"Postal code"},model:{value:t.form.postal_code,callback:function(e){t.$set(t.form,"postal_code",e)},expression:"form.postal_code"}})],1),t._v(" "),a("div",{staticClass:"px-8 py-4 bg-grey-lightest border-t border-grey-lighter flex items-center"},[t.organization.deleted_at?t._e():a("button",{staticClass:"text-red hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:t.destroy}},[t._v("Delete Organization")]),t._v(" "),a("loading-button",{staticClass:"btn-indigo ml-auto",attrs:{loading:t.sending,type:"submit"}},[t._v("Update Organization")])],1)])]),t._v(" "),a("h2",{staticClass:"mt-12 font-bold text-2xl"},[t._v("Contacts")]),t._v(" "),a("div",{staticClass:"mt-6 bg-white rounded shadow overflow-x-auto"},[a("table",{staticClass:"w-full whitespace-no-wrap"},[a("tr",{staticClass:"text-left font-bold"},[a("th",{staticClass:"px-6 pt-6 pb-4"},[t._v("Name")]),t._v(" "),a("th",{staticClass:"px-6 pt-6 pb-4"},[t._v("City")]),t._v(" "),a("th",{staticClass:"px-6 pt-6 pb-4",attrs:{colspan:"2"}},[t._v("Phone")])]),t._v(" "),t._l(t.organization.contacts,function(e){return a("tr",{key:e.id,staticClass:"hover:bg-grey-lightest focus-within:bg-grey-lightest"},[a("td",{staticClass:"border-t"},[a("inertia-link",{staticClass:"px-6 py-4 flex items-center focus:text-indigo",attrs:{href:t.route("contacts.edit",e.id)}},[t._v("\n            "+t._s(e.name)+"\n            "),e.deleted_at?a("icon",{staticClass:"flex-no-shrink w-3 h-3 fill-grey ml-2",attrs:{name:"trash"}}):t._e()],1)],1),t._v(" "),a("td",{staticClass:"border-t"},[a("inertia-link",{staticClass:"px-6 py-4 flex items-center",attrs:{href:t.route("contacts.edit",e.id),tabindex:"-1"}},[t._v("\n            "+t._s(e.city)+"\n          ")])],1),t._v(" "),a("td",{staticClass:"border-t"},[a("inertia-link",{staticClass:"px-6 py-4 flex items-center",attrs:{href:t.route("contacts.edit",e.id),tabindex:"-1"}},[t._v("\n            "+t._s(e.phone)+"\n          ")])],1),t._v(" "),a("td",{staticClass:"border-t w-px"},[a("inertia-link",{staticClass:"px-4 flex items-center",attrs:{href:t.route("contacts.edit",e.id),tabindex:"-1"}},[a("icon",{staticClass:"block w-6 h-6 fill-grey",attrs:{name:"cheveron-right"}})],1)],1)])}),t._v(" "),0===t.organization.contacts.length?a("tr",[a("td",{staticClass:"border-t px-6 py-4",attrs:{colspan:"4"}},[t._v("No contacts found.")])]):t._e()],2)])],1)},[],!1,null,null,null);e.default=u.exports},GO1j:function(t,e,a){"use strict";var s={components:{Icon:a("MY0P").a}},r=a("KHd+"),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-4 bg-yellow-light rounded border border-yellow-dark flex items-center justify-between"},[a("div",{staticClass:"flex items-center"},[a("icon",{staticClass:"flex-no-shrink w-4 h-4 fill-yellow-darker mr-2",attrs:{name:"trash"}}),t._v(" "),a("div",{staticClass:"text-yellow-darker"},[t._t("default")],2)],1),t._v(" "),a("button",{staticClass:"text-yellow-darker hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:function(e){return t.$emit("restore")}}},[t._v("Restore")])])},[],!1,null,null,null);e.a=o.exports}}]);
//# sourceMappingURL=10.js.map?id=5aec259bf93193f5fc04