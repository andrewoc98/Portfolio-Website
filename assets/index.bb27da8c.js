import{S,P as M,W as b,M as f,a as u,b as g,T as N,A as P,B as L,G as V,c as F,d as A,e as C,F as G,g as W}from"./vendor.05ac0b9e.js";const z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};z();var B="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",j="uniform sampler2D globetexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.3,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globetexture,vertexUV).xyz,1.0);}",q="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,0.9);}",O="varying vec3 vertexNormal;void main(){float intensity=pow(0.6-dot(vertexNormal,vec3(0,0,1.0)),2.0)gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}";const d={x:void 0,y:void 0},o=new S,a=document.querySelector("#canvasContainer"),m=new M(75,a.offsetWidth/a.offsetHeight,.1,1e3),i=new b({canvas:document.querySelector("canvas"),antialias:!0});i.setPixelRatio(window.devicePixelRatio);i.setSize(a.offsetWidth,a.offsetHeight);m.position.setZ(20);i.render(o,m);const p=new f(new u(5,50,50),new g({vertexShader:B,fragmentShader:j,uniforms:{globetexture:{value:new N().load("./Images/globe.jpg")}}})),x=new f(new u(5,50,50),new g({vertexShader:q,fragmentShader:O,blending:P,side:L}));x.scale.set(1.1,1.1,1.1);o.add(x);const v=new V;v.add(p);o.add(v);const h=new F,U=new A({color:16777215}),_=new C(h,U);o.add(_);const y=[];for(let s=0;s<1e3;s++){const r=(Math.random()-.5)*2e3,c=(Math.random()-.5)*2e3,n=-Math.random()*2e3;y.push(r,c,n)}h.setAttribute("position",new G(y,3));function w(){p.rotateY(.005),requestAnimationFrame(w),i.render(o,m),W.to(v.rotation,{y:d.x*.5,duration:2})}w();addEventListener("mousemove",()=>{d.x=event.clientX/innerWidth*2-1,d.y=-(event.clintY/innerHeight)*2+1});
