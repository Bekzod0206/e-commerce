import{d as D,y as T,u as A,D as v,m as E,r as H,o as y,c as x,a as l,b as t,w as u,e as a,F as K,f as $,t as b,G as k,q as F,E as G,s as J,H as L,I as O,v as W,h as m,i as z,J as Q}from"./elyZM39j.js";/* empty css        *//* empty css        */import{u as S}from"./BJ9knvaF.js";const X={class:"w-[80%] mx-auto flex flex-col gap-10 mb-[50px]"},Y={class:"my-[50px] flex justify-between items-center"},Z={class:"grid grid-cols-2 gap-4"},M={class:"w-[400px] flex flex-col gap-4"},ee={class:"w-[600px]"},le={class:"max-h-[350px] overflow-auto mb-4"},te={class:"flex items-center gap-2"},oe=["src"],se={class:"flex items-center justify-between gap-6"},ae={class:"my-4"},ne={class:"flex flex-col gap-4 border-2 p-4 box-border rounded"},re={class:"w-full flex justify-between items-center border-b-[1px] pb-2"},de={class:"w-full flex justify-between items-center border-b-[1px] pb-2"},ue={class:"my-4"},ie={class:"flex items-center justify-between border-b-[1px] mb-2 pb-2"},me={class:"flex items-center gap-4"},pe={class:"flex flex-col gap-4 my-4"},ce={class:"flex items-center gap-4"},fe=D({__name:"checkout",setup(j){const h=S(),{currentProduct:_}=S(),g=T(),C=A(),p=v("bank"),V=v(0);console.log(_,"currentProduct"),_.forEach(f=>{V.value+=f.price*+f.qty});const n=E({name:"",companyName:"",address:"",addressDetailed:"",townCity:"",phoneNumber:"",email:""}),q=E({name:[{required:!0,message:"Please input the name",trigger:"blur"}],address:[{required:!0,message:"Please input the Street address",trigger:"blur"}],townCity:[{required:!0,message:"Please input the Town/City",trigger:"blur"}],phoneNumber:[{required:!0,message:"Please input the Phone Number",trigger:"blur"}],email:[{required:!0,message:"Please input the Email address",trigger:"blur"}]}),c=v(null),B=async()=>{let f=!0;const e=[];e.push(new Promise(r=>{var d;(d=c.value)==null||d.validateField("name",o=>{o&&console.error("Validation failed name:",o),r()})})),e.push(new Promise(r=>{var d;(d=c.value)==null||d.validateField("address",o=>{o&&console.error("Validation failed address:",o),r()})})),e.push(new Promise(r=>{var d;(d=c.value)==null||d.validateField("townCity",o=>{o&&console.error("Validation failed townCity:",o),r()})})),e.push(new Promise(r=>{var d;(d=c.value)==null||d.validateField("phoneNumber",o=>{o&&console.error("Validation failed phoneNumber:",o),r()})})),e.push(new Promise(r=>{var d;(d=c.value)==null||d.validateField("email",o=>{o&&console.error("Validation failed email:",o),r()})})),await Promise.all(e),Object.keys(n).forEach(r=>{if(r!=="companyName"&&r!=="addressDetailed"&&n[r].length===0)return f=!1,!1}),f?(F.success({title:"Success",message:"Successfully ordered"}),h.clear(),C.clear(),g.push("/")):F.warning({title:"Warning",message:"Please, fill up fields"})},U=()=>{C.clear()};return(f,e)=>{const r=z,d=G,o=J,i=Q,I=L,N=O,w=H("Icon"),P=W;return y(),x("div",X,[l("section",Y,[t(d,{separator:"/"},{default:u(()=>[t(r,{to:{path:"/"},onClick:U},{default:u(()=>e[9]||(e[9]=[m("Home")])),_:1}),t(r,{to:{path:"/cart"}},{default:u(()=>e[10]||(e[10]=[m("Cart")])),_:1}),t(r,null,{default:u(()=>e[11]||(e[11]=[m("Checkout")])),_:1})]),_:1})]),l("section",Z,[l("div",M,[e[12]||(e[12]=l("p",{class:"text-2xl font-semibold"},"Billing details",-1)),t(I,{model:a(n),"status-icon":"",rules:a(q),ref_key:"formRef",ref:c,"label-width":"250px","label-position":"top",class:"demo-formData w-full"},{default:u(()=>[t(i,{label:"Name",prop:"name",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).name,"onUpdate:modelValue":e[0]||(e[0]=s=>a(n).name=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(i,{label:"Company name",prop:"companyName",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).companyName,"onUpdate:modelValue":e[1]||(e[1]=s=>a(n).companyName=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(i,{label:"Street Address",prop:"address",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).address,"onUpdate:modelValue":e[2]||(e[2]=s=>a(n).address=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(i,{label:"Apartment, Floor, etc. (optional)",prop:"addressDetailed",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).addressDetailed,"onUpdate:modelValue":e[3]||(e[3]=s=>a(n).addressDetailed=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(i,{label:"Town/City",prop:"townCity",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).townCity,"onUpdate:modelValue":e[4]||(e[4]=s=>a(n).townCity=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(i,{label:"Phone Number",prop:"phoneNumber",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).phoneNumber,"onUpdate:modelValue":e[5]||(e[5]=s=>a(n).phoneNumber=s),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(i,{label:"Email",prop:"email",class:"w-full"},{default:u(()=>[t(o,{modelValue:a(n).email,"onUpdate:modelValue":e[6]||(e[6]=s=>a(n).email=s),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),l("div",ee,[l("section",le,[(y(!0),x(K,null,$(a(_),(s,R)=>(y(),x("div",{key:R,class:"flex items-center justify-between border-b-[1px] mb-2 pb-2"},[l("span",te,[l("img",{src:s.img,alt:"product-image",width:"50",class:"h-12 object-contain"},null,8,oe),l("p",null,b(s.name),1)]),l("span",se,[l("p",null,b(s.qty)+" pcs.",1),l("p",null,"$"+b(s.price*+s.qty),1)])]))),128))]),l("section",ae,[l("div",ne,[l("span",re,[e[13]||(e[13]=l("p",null,"Subtotal:",-1)),l("p",null,b(a(V)),1)]),e[15]||(e[15]=l("span",{class:"w-full flex justify-between items-center border-b-[1px] pb-2"},[l("p",null,"Shipping:"),l("p",null,"Free")],-1)),l("span",de,[e[14]||(e[14]=l("p",null,"Total:",-1)),l("p",null,b(a(V)),1)])])]),l("section",ue,[l("div",ie,[t(N,{modelValue:a(p),"onUpdate:modelValue":e[7]||(e[7]=s=>k(p)?p.value=s:null),label:"bank"},{default:u(()=>e[16]||(e[16]=[m("Bank")])),_:1},8,["modelValue"]),l("span",me,[t(w,{icon:"logos:visa",width:"25"}),t(w,{icon:"logos:mastercard",width:"25"}),t(w,{icon:"logos:unionpay",width:"25"}),t(w,{icon:"logos:paypal",width:"25"})])]),l("div",null,[t(N,{modelValue:a(p),"onUpdate:modelValue":e[8]||(e[8]=s=>k(p)?p.value=s:null),label:"cash"},{default:u(()=>e[17]||(e[17]=[m("Cash on delivery")])),_:1},8,["modelValue"])])]),l("section",pe,[l("span",ce,[t(o,{class:"w-[150px]"}),t(P,{type:"danger"},{default:u(()=>e[18]||(e[18]=[m("Apply Coupon")])),_:1})]),l("span",null,[t(P,{type:"danger",onClick:B,class:"w-[150px]"},{default:u(()=>e[19]||(e[19]=[m("Place order")])),_:1})])])])])])}}}),xe=D({__name:"checkout",setup(j){return(h,_)=>{const g=fe;return y(),x("div",null,[t(g)])}}});export{xe as default};
