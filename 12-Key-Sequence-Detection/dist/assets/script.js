(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=document.querySelector(".visibility-for-player"),d=document.querySelector(".text-div"),n=document.querySelector(".audio");console.log(u);let c=["p","l","a","y"],o=0;document.addEventListener("keydown",s=>{for(o;o<c.length;)if(c[o]==s.key){o++,console.log(o),o==4&&(console.log("Congratulations , you deserved that masterpiece"),u.classList.remove("visibility-for-player"),d.classList.add("visibility-for-player"),n.play(),n.value=.05);break}else{o=0,console.log("i is set to 0 ");break}});
