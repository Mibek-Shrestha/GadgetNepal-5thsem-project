(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[78],{18:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function a(t,e){return c(t)&&e in t}},214:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n(100);var c=n(44);const a=()=>c.m>1},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(28),a=n(18);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(a.a)(t)?t:{}},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(108),a=n(214),r=n(18),s=n(215);const o=t=>{if(!Object(a.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},299:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(18),a=n(215);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(a.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:e.fontFamily}}}},307:function(t,e,n){"use strict";var c=n(11),a=n.n(c),r=n(0),s=n(21),o=n(5),l=n.n(o);n(308),e.a=t=>{let{className:e="",disabled:n=!1,name:c,permalink:o="",target:i,rel:u,style:b,onClick:d,...p}=t;const f=l()("wc-block-components-product-name",e);if(n){const t=p;return Object(r.createElement)("span",a()({className:f},t,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)}}))}return Object(r.createElement)("a",a()({className:f,href:o,target:i},p,{dangerouslySetInnerHTML:{__html:Object(s.decodeEntities)(c)},style:b}))}},308:function(t,e){},324:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(108),a=n(214),r=n(18),s=n(215);const o=t=>{if(!Object(a.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},338:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var c=n(0),a=n(5),r=n.n(a),s=n(47),o=n(214),l=n(132),i=n(307),u=n(66),b=n(291),d=n(324),p=n(299);n(339);const f=t=>{let{children:e,headingLevel:n,elementType:a="h"+n,...r}=t;return Object(c.createElement)(a,r,e)},m=t=>{const{className:e,headingLevel:n=2,showProductLink:a=!0,linkTarget:l,align:m}=t,{parentClassName:O}=Object(s.useInnerBlockLayoutContext)(),{product:j}=Object(s.useProductDataContext)(),{dispatchStoreEvent:y}=Object(u.a)(),g=Object(b.a)(t),h=Object(d.a)(t),k=Object(p.a)(t);return j.id?Object(c.createElement)(f,{headingLevel:n,className:r()(e,g.className,"wc-block-components-product-title",{[O+"__product-title"]:O,["wc-block-components-product-title--align-"+m]:m&&Object(o.a)()}),style:Object(o.a)()?{...h.style,...k.style,...g.style}:{}},Object(c.createElement)(i.a,{disabled:!a,name:j.name,permalink:j.permalink,target:l,onClick:()=>{y("product-view-link",{product:j})}})):Object(c.createElement)(f,{headingLevel:n,className:r()(e,g.className,"wc-block-components-product-title",{[O+"__product-title"]:O,["wc-block-components-product-title--align-"+m]:m&&Object(o.a)()}),style:Object(o.a)()?{...h.style,...k.style,...g.style}:{}})};e.b=Object(l.withProductDataContext)(m)},339:function(t,e){},500:function(t,e,n){"use strict";n.r(e);var c=n(132),a=n(338),r=n(214);let s={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};Object(r.a)()&&(s={...s,align:{type:"string"}});var o=s;e.default=Object(c.withFilteredAttributes)(o)(a.b)}}]);