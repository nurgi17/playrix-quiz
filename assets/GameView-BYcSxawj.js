import{u as g,i as F,d as u,b as r,c as n,f as i,F as d,r as p,t as x,n as b,g as f,a as h,e as l,w as m,T as _,h as v}from"./index-x-qyUswa.js";import{P as w}from"./PlayrixLogo-BCEg6NXT.js";function C(){const o=g(),t=F();function c(a,e){t.setCurrentCategory(a),t.setCurrentPoint(e),o.push({name:"question",params:{categoryId:a.id,pointId:e.id}})}return{goToQuestion:c}}const k={class:"flex flex-col justify-center items-center"},y={class:"flex flex-col gap-5 pt-[40px]"},E={class:"flex items-center justify-center text-center w-[392px] h-[118px] text-[#000000] font-bold text-[36px] uppercase bg-[#F0F7E8] rounded-angels"},T=["disable","onClick"],A=u({__name:"ListTable",props:{categories:{type:Array,default:()=>[]}},setup(o){const{goToQuestion:t}=C();return(c,a)=>(r(),n("div",k,[a[0]||(a[0]=i("div",{class:"uppercase text-[64px] font-bold text-[#FFFFFF] text-center"}," Выберите категорию и стоимость вопроса ",-1)),i("div",y,[(r(!0),n(d,null,p(o.categories,e=>(r(),n("div",{class:"flex flex-row gap-5",key:e.id},[i("div",E,x(e.name),1),(r(!0),n(d,null,p(e.points,s=>(r(),n("div",{key:s.id},[i("div",{class:b(["flex items-center justify-center text-center w-[159px] h-[117px] text-[#000000] font-bold text-[40px] uppercase hover:bg-[#FFDE00] active:bg-[#FFDE00] rounded-[6px] cursor-pointer",{"bg-[#FFDE00]":s.isAnswered,"bg-[#F0F7E8]":!s.isAnswered}]),disable:s.isAnswered,onClick:B=>s.isAnswered?"":f(t)(e,s)},x(s.point),11,T)]))),128))]))),128))])]))}}),G={class:"flex flex-col items-center w-[1080px] h-[1920px] max-w-[1080px] max-h-[1920px] bg-[url('/src/assets/img/second-back-green.svg')]"},S=u({__name:"GameContainer",setup(o){const{getGame:t}=h();return(c,a)=>(r(),n("div",G,[l(_,{name:"bounce",appear:""},{default:m(()=>[l(w)]),_:1}),l(_,{name:"bottom-fade",appear:""},{default:m(()=>{var e;return[l(A,{class:"pt-[369px]",categories:(e=f(t))==null?void 0:e.categories},null,8,["categories"])]}),_:1})]))}}),$=u({__name:"GameView",setup(o){return(t,c)=>(r(),v(S))}});export{$ as default};
