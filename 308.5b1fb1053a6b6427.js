"use strict";(self.webpackChunkContent=self.webpackChunkContent||[]).push([[308],{3308:(h,p,i)=>{i.r(p),i.d(p,{NewsModule:()=>y,declarations:()=>C});var l=i(6895),a=i(6237),e=i(8256),c=i(9254);function d(t,s){if(1&t&&(e.TgZ(0,"a",1)(1,"p",2),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&t){const n=s.$implicit;e.Q6J("routerLink",n.sys.id),e.xp6(2),e.hij(" ",n.fields.title," "),e.xp6(2),e.hij(" ",n.fields.description," ")}}let r=(()=>{class t{constructor(n){this.contentful=n}ngOnInit(){this.news=this.contentful.getNews()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.a))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-news-list"]],decls:3,vars:3,consts:[["class","news-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"news-item",3,"routerLink"],[1,"title"]],template:function(n,o){1&n&&(e.TgZ(0,"section"),e.YNc(1,d,5,3,"a",0),e.ALo(2,"async"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,o.news)))},dependencies:[l.sg,a.yS,l.Ov],styles:[".news-item[_ngcontent-%COMP%]{display:block;padding:24px 36px;margin:24px 36px;background:white;box-shadow:0 0 5px #0000001a;text-align:center}.title[_ngcontent-%COMP%]{font: 2em Playfair Display SC,serif;margin-bottom:24px}"]}),t})();var m=i(7103);let u=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-news-item"]],inputs:{newsDetail:"newsDetail"},decls:6,vars:2,consts:[[1,"news-item"],[1,"title"]],template:function(n,o){1&n&&(e.TgZ(0,"section")(1,"div",0)(2,"p",1),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA()()()),2&n&&(e.xp6(3),e.hij(" ",null==o.newsDetail||null==o.newsDetail.fields?null:o.newsDetail.fields.title," "),e.xp6(2),e.hij(" ",null==o.newsDetail||null==o.newsDetail.fields?null:o.newsDetail.fields.description," "))},styles:[".news-item[_ngcontent-%COMP%]{padding:24px 36px;margin:24px 36px;background:white;box-shadow:0 0 5px #0000001a;text-align:center}.title[_ngcontent-%COMP%]{font: 2em Playfair Display SC,serif;margin-bottom:24px}"]}),t})(),w=(()=>{class t{constructor(n,o){this.route=n,this.contentful=o}ngOnInit(){this.newsDetail$=this.contentful.getEntryById(this.route.snapshot.paramMap.get(m.H.SelectedNews))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.gz),e.Y36(c.a))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-news-item-container"]],decls:2,vars:3,consts:[[3,"newsDetail"]],template:function(n,o){1&n&&(e._UZ(0,"app-news-item",0),e.ALo(1,"async")),2&n&&e.Q6J("newsDetail",e.lcZ(1,1,o.newsDetail$))},dependencies:[u,l.Ov],styles:[".news-item[_ngcontent-%COMP%]{padding:24px 36px;margin:24px 36px;background:white;box-shadow:0 0 5px #0000001a;text-align:center}.title[_ngcontent-%COMP%]{font: 2em Playfair Display SC,serif;margin-bottom:24px}"]}),t})();const f=[{path:"",component:r},{path:`:${m.H.SelectedNews}`,component:w}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(f),a.Bz]}),t})();const C=[r,u,w];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,g]}),t})()}}]);