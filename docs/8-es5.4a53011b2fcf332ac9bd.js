function _classCallCheck(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,e,n){return e&&_defineProperties(l.prototype,e),n&&_defineProperties(l,n),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fOPj:function(l,e,n){"use strict";n.r(e);var u=n("8Y7J"),a=n("oxFV"),t=n("PiBQ"),r=n("iA1Z"),d=n("pLrv"),o=function(){function l(e,n,u){_classCallCheck(this,l),this.schemaListenerService=e,this.dataService=n,this.jsonSchemaSamples=u}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.fields={colour:d.a},this.viewOnly=!!localStorage.getItem("viewOnly")&&"true"===localStorage.getItem("viewOnly"),this.language=localStorage.getItem("language")?localStorage.getItem("language"):"en",this.data=this.viewOnly?this.jsonSchemaSamples.data:null,this.schemaListenerService.schema.subscribe((function(e){l.schema=e}))}},{key:"handleSubmit",value:function(l){this.dataService.data=l}},{key:"handleCancel",value:function(l){this.truForms.data={},this.truForms.constructForm()}},{key:"changeLanguage",value:function(l){localStorage.setItem("language",l),this.language=l}},{key:"isArray",value:function(l){return Array.isArray(l)}},{key:"toggleViewonly",value:function(l){localStorage.setItem("viewOnly",l),window.location.href="/"}},{key:"toggleData",value:function(l){this.data="true"===l?this.jsonSchemaSamples.data:null}}]),l}(),i=function l(){_classCallCheck(this,l)},s=n("pMnS"),c=n("E+tw"),m=n("atuK"),f=n("SfUx"),p=n("s7LF"),g=n("WyJe"),v=u["\u0275crt"]({encapsulation:0,styles:[["p{display:flex;flex-direction:column}"]],data:{}});function h(l){return u["\u0275vid"](0,[u["\u0275qud"](671088640,1,{truForms:0}),(l()(),u["\u0275eld"](1,0,null,null,44,"div",[["style","display: flex; flex-direction: row;justify-content: center;align-items: center;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,11,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Language"])),(l()(),u["\u0275eld"](5,0,null,null,8,"select",[["class","demo_input"]],null,[[null,"change"]],(function(l,e,n){var u=!0;return"change"===e&&(u=!1!==l.component.changeLanguage(n.target.value)&&u),u}),null,null)),(l()(),u["\u0275eld"](6,0,null,null,3,"option",[["value","en"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](7,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](8,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["English"])),(l()(),u["\u0275eld"](10,0,null,null,3,"option",[["value","fr"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](11,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](12,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Frensh"])),(l()(),u["\u0275eld"](14,0,null,null,15,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["View only"])),(l()(),u["\u0275eld"](17,0,null,null,12,"select",[["class","demo_input"]],null,[[null,"change"]],(function(l,e,n){var u=!0;return"change"===e&&(u=!1!==l.component.toggleViewonly(n.target.value)&&u),u}),null,null)),(l()(),u["\u0275eld"](18,0,null,null,3,"option",[["disabled",""]],null,null,null,null,null)),u["\u0275did"](19,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],null,null),u["\u0275did"](20,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],null,null),(l()(),u["\u0275ted"](-1,null,["select mode"])),(l()(),u["\u0275eld"](22,0,null,null,3,"option",[["value","true"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](23,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](24,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["on"])),(l()(),u["\u0275eld"](26,0,null,null,3,"option",[["value","false"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](27,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](28,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["off"])),(l()(),u["\u0275eld"](30,0,null,null,15,"div",[["style","width: 100%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Data preview"])),(l()(),u["\u0275eld"](33,0,null,null,12,"select",[["class","demo_input"]],null,[[null,"change"]],(function(l,e,n){var u=!0;return"change"===e&&(u=!1!==l.component.toggleData(n.target.value)&&u),u}),null,null)),(l()(),u["\u0275eld"](34,0,null,null,3,"option",[["disabled",""]],null,null,null,null,null)),u["\u0275did"](35,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],null,null),u["\u0275did"](36,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],null,null),(l()(),u["\u0275ted"](-1,null,[" select preview "])),(l()(),u["\u0275eld"](38,0,null,null,3,"option",[["value","true"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](39,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](40,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["on"])),(l()(),u["\u0275eld"](42,0,null,null,3,"option",[["value","false"]],[[8,"selected",0]],null,null,null,null)),u["\u0275did"](43,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),u["\u0275did"](44,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["off"])),(l()(),u["\u0275eld"](46,0,null,null,1,"jf-form",[],null,[[null,"handleSubmit"],[null,"handleCancel"]],(function(l,e,n){var u=!0,a=l.component;return"handleSubmit"===e&&(u=!1!==a.handleSubmit(n)&&u),"handleCancel"===e&&(u=!1!==a.handleCancel(n)&&u),u}),c.d,c.c)),u["\u0275did"](47,442368,[[1,4],["truForms",4]],0,g.d,[p.FormBuilder,g.j,g.e,g.f],{schema:[0,"schema"],data:[1,"data"],submit:[2,"submit"],cancel:[3,"cancel"],fields:[4,"fields"],viewOnly:[5,"viewOnly"],language:[6,"language"]},{handleSubmit:"handleSubmit",handleCancel:"handleCancel"})],(function(l,e){var n=e.component;l(e,7,0,"en"),l(e,8,0,"en"),l(e,11,0,"fr"),l(e,12,0,"fr"),l(e,23,0,"true"),l(e,24,0,"true"),l(e,27,0,"false"),l(e,28,0,"false"),l(e,39,0,"true"),l(e,40,0,"true"),l(e,43,0,"false"),l(e,44,0,"false"),l(e,47,0,n.schema,n.data,"submit","cancel",n.fields,n.viewOnly,n.language||"en")}),(function(l,e){var n=e.component;l(e,6,0,"en"===n.language),l(e,10,0,"fr"===n.language),l(e,22,0,n.viewOnly),l(e,26,0,!n.viewOnly),l(e,38,0,n.data),l(e,42,0,!n.data)}))}var _=u["\u0275ccf"]("app-tru-ui",o,(function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-tru-ui",[],null,null,null,h,v)),u["\u0275did"](1,114688,null,0,o,[t.a,a.a,r.a],null,null)],(function(l,e){l(e,1,0)}),null)}),{},{},[]),y=n("SVse"),R=n("2uy1"),S=n("z/SZ"),w=n("ienR"),b=n("ZMeN"),k=n("iInd"),F=n("UVXo");n.d(e,"TruUiModuleExampleNgFactory",(function(){return O}));var O=u["\u0275cmf"](i,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,c.b,c.a,c.E,c.O,c.P,c.Q,c.R,c.S,c.T,c.U,c.V,c.W,c.X,c.Y,c.Z,c.ab,c.bb,c.cb,c.db,c.eb,m.a,m.c,m.b,m.d,f.a,c.z,c.A,c.B,c.C,c.D,c.F,c.G,c.H,c.I,c.J,c.K,c.L,c.M,c.N,_]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,y.m,y.l,[u.LOCALE_ID,[2,y.z]]),u["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),u["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_o"],p["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,g.e,g.e,[]),u["\u0275mpd"](4608,g.j,g.j,[]),u["\u0275mpd"](4608,g.o,g.o,[]),u["\u0275mpd"](4608,R.a,R.a,[u.NgZone,u.RendererFactory2,u.PLATFORM_ID]),u["\u0275mpd"](4608,S.a,S.a,[u.ComponentFactoryResolver,u.NgZone,u.Injector,R.a,u.ApplicationRef]),u["\u0275mpd"](4608,w.t,w.t,[]),u["\u0275mpd"](4608,w.v,w.v,[]),u["\u0275mpd"](4608,w.a,w.a,[]),u["\u0275mpd"](4608,w.h,w.h,[]),u["\u0275mpd"](4608,w.d,w.d,[]),u["\u0275mpd"](4608,w.j,w.j,[]),u["\u0275mpd"](4608,w.l,w.l,[]),u["\u0275mpd"](4608,w.u,w.u,[w.v,w.l]),u["\u0275mpd"](4608,b.a,b.a,[]),u["\u0275mpd"](5120,g.f,(function(l){return[new g.l(l)]}),[u.ComponentFactoryResolver]),u["\u0275mpd"](1073742336,y.c,y.c,[]),u["\u0275mpd"](1073742336,k.l,k.l,[[2,k.q],[2,k.k]]),u["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_d"],p["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,F.TextMaskModule,F.TextMaskModule,[]),u["\u0275mpd"](1073742336,g.n,g.n,[]),u["\u0275mpd"](1073742336,g.i,g.i,[]),u["\u0275mpd"](1073742336,p.FormsModule,p.FormsModule,[]),u["\u0275mpd"](1073742336,w.g,w.g,[]),u["\u0275mpd"](1073742336,b.d,b.d,[]),u["\u0275mpd"](1073742336,g.m,g.m,[]),u["\u0275mpd"](1073742336,i,i,[]),u["\u0275mpd"](1024,k.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);