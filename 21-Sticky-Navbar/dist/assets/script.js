(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".sticky-element");document.querySelector(".navbar");const c=document.querySelector(".a-visible-none"),a=document.querySelector(".texts-wikipedia"),u=l.offsetTop;function d(){const o=window.scrollY>u;c.classList.toggle("a-visible-block",o),c.classList.toggle("a-visible-none",!o)}window.addEventListener("scroll",d);const f="https://en.wikipedia.org/w/api.php",p=new URLSearchParams({origin:"*",action:"parse",format:"json",page:"Industrial Revolution",prop:"text",redirects:1,section:0});async function m(){fetch(`${f}?${p.toString()}`).then(o=>{if(!o.ok)throw new Error("Network response was not ok "+o.statusText);return o.json()}).then(o=>{const r=o.parse.text["*"],i=document.createElement("div");i.innerHTML=r;const n=i.querySelectorAll("p,h1,h2,h3,h4,h5,h6");let e="";for(let t=0;t<n.length;t++)e+=n[t].outerHTML;a.innerHTML=e}).catch(o=>{console.error("Error:",o)})}m();