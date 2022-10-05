"use strict";(self.webpackChunkangular_cocktails=self.webpackChunkangular_cocktails||[]).push([[261],{5261:(b,d,r)=>{r.r(d),r.d(d,{DrinksModule:()=>_});var g=r(710),l=r(6696),u=r(1017),n=r(5e3),m=r(3652),p=r(7261),s=r(9808),k=r(5899),c=r(7093),f=r(1495),h=r(3322),v=r(7423);function C(i,o){1&i&&n._UZ(0,"mat-progress-bar",16)}function x(i,o){if(1&i&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&i){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",t.value," ")}}function M(i,o){if(1&i&&(n.TgZ(0,"ul"),n.YNc(1,x,2,1,"li",17),n.qZA()),2&i){const t=o.$implicit;n.xp6(1),n.Q6J("ngIf",t.key.includes("strIngredient")&&t.value)}}function O(i,o){if(1&i&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&i){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",t.value," ")}}function D(i,o){if(1&i&&(n.TgZ(0,"ul"),n.YNc(1,O,2,1,"li",17),n.qZA()),2&i){const t=o.$implicit;n.xp6(1),n.Q6J("ngIf",t.key.includes("strMeasure")&&t.value)}}const y=[{path:"",children:[{path:"",component:u.v},{path:"detail/:url",component:(()=>{class i{constructor(t,e,a){this.service=t,this.route=e,this.snackBar=a,this.ingredientsAndMeasures=[],this.isLoading=!0}ngOnInit(){this.route.params.subscribe(t=>{this.getDrink(t.url)})}getDrink(t){var e;this.isLoading=!0,null===(e=this.subscription)||void 0===e||e.unsubscribe(),this.subscription=this.service.getDrinkByID(t).subscribe({next:a=>{this.isLoading=!1,this.drink=a},error:a=>{this.isLoading=!1,404===a.status?this.snackBar.open("error not found","close"):this.snackBar.open("error","ok")}})}ngOnDestroy(){var t;null===(t=this.subscription)||void 0===t||t.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(m.O),n.Y36(l.gz),n.Y36(p.ux))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-drink-detail"]],decls:28,vars:13,consts:[["mode","indeterminate",4,"ngIf"],[1,"container",2,"margin-top","6rem"],[1,"drink-main-data-container"],["fxLayout","row",1,"drink-top-section"],[1,"drink-main-img"],["loading","lazy","appImgMissingDirective","",3,"src","alt"],[1,"drink-main-info"],["fxFlex","100",1,"title-subtitle-container"],[1,"drink-main-title"],["fxShow",""],["mat-raised-button","","color","primary","aria-label","category"],["fxShow","",1,"ingredients-container"],[4,"ngFor","ngForOf"],["fxShow","",1,"measures-container"],["fxLayout","column","fxShow","",1,"top-billed-cast"],[1,"title-billed"],["mode","indeterminate"],[4,"ngIf"]],template:function(t,e){1&t&&(n.YNc(0,C,1,0,"mat-progress-bar",0),n.TgZ(1,"div",1)(2,"div",2)(3,"section",3)(4,"div",4),n._UZ(5,"img",5),n.qZA(),n.TgZ(6,"div",6)(7,"div",7)(8,"h2",8),n._uU(9),n.qZA()(),n.TgZ(10,"section")(11,"div",9)(12,"button",10),n._uU(13),n.qZA()(),n.TgZ(14,"div",11)(15,"h3"),n._uU(16,"Ingredients"),n.qZA(),n.YNc(17,M,2,1,"ul",12),n.ALo(18,"keyvalue"),n.qZA(),n.TgZ(19,"div",13)(20,"h3"),n._uU(21,"Measurements"),n.qZA(),n.YNc(22,D,2,1,"ul",12),n.ALo(23,"keyvalue"),n.qZA()()()(),n.TgZ(24,"section",14)(25,"h3",15),n._uU(26,"Instructions"),n.qZA(),n._uU(27),n.qZA()()()),2&t&&(n.Q6J("ngIf",e.isLoading),n.xp6(5),n.s9C("src",null==e.drink?null:e.drink.strDrinkThumb,n.LSH),n.Q6J("alt",null==e.drink?null:e.drink.strDrink),n.xp6(4),n.Oqu(null==e.drink?null:e.drink.strDrink),n.xp6(4),n.AsE(" ",null==e.drink?null:e.drink.strAlcoholic,"-",null==e.drink?null:e.drink.strCategory," "),n.xp6(4),n.Q6J("ngForOf",n.lcZ(18,9,e.drink)),n.xp6(5),n.Q6J("ngForOf",n.lcZ(23,11,e.drink)),n.xp6(5),n.hij(" ",null==e.drink?null:e.drink.strInstructions," "))},directives:[s.O5,k.pW,c.xw,f._,c.yH,h.b8,v.lW,s.sg],pipes:[s.Nd],styles:[".drink-main-data-container[_ngcontent-%COMP%]{padding:70px 40px}.drink-main-data-container[_ngcontent-%COMP%]   .drink-main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:300px;box-shadow:0 0 4px #0003;border-radius:4px}.drink-main-data-container[_ngcontent-%COMP%]   .drink-main-info[_ngcontent-%COMP%]{padding-left:40px;display:flex;flex-wrap:wrap;align-content:center}.drink-main-data-container[_ngcontent-%COMP%]   .drink-main-info[_ngcontent-%COMP%]   .title-subtitle-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;color:#fff;font-size:1.1em;font-style:italic;opacity:.8;margin:0}.top-billed-cast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:50%;margin:0 8px 0 0;-o-object-fit:cover;object-fit:cover}@media screen and (max-width: 599px){.drink-main-container[_ngcontent-%COMP%]{height:240px}.drink-main-img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.drink-main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc((50vw - 40px) / 1.5);min-width:calc((45.4545454545vw - 40px) / 1.5);height:calc(50vw - 40px);min-height:calc(50vw - 40px)}.drink-main-data-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;padding:0}.drink-main-data-container[_ngcontent-%COMP%]   .drink-top-section[_ngcontent-%COMP%]{padding:10px}.drink-main-data-container[_ngcontent-%COMP%]   .drink-main-info[_ngcontent-%COMP%]{padding-left:20px}.drink-main-data-container[_ngcontent-%COMP%]   .drink-main-info[_ngcontent-%COMP%]   .play-trailer[_ngcontent-%COMP%]{margin-top:4px}.drink-main-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:0}.similar-drinks[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}}@media screen and (min-width: 600px) and (max-width: 959px){.drink-main-info[_ngcontent-%COMP%]   .play-trailer[_ngcontent-%COMP%]{margin-top:4px}}@media screen and (min-width: 1280px) and (max-width: 1919px){.drink-main-title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;margin:0 0 20px}}.ingredients-container[_ngcontent-%COMP%], .measures-container[_ngcontent-%COMP%]{display:inline-block}"]}),i})()}]}];let Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[l.Bz.forChild(y)],l.Bz]}),i})(),_=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[],imports:[[g.m,Z]]}),i})()}}]);