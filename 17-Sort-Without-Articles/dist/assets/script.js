(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector("ul"),c=["The Plot in You","The Devil Wears Prada","Pierce the Veil","Norma Jean","The Bled","Say Anything","The Midway State","We Came as Romans","Counterparts","Oh, Sleeper","A Skylit Drive","Anywhere But Here","An Old Dog"],s=c.map(r=>r.replace(/^\s*(a |the |an )/gi,"").trim());s.sort();const u=s.map(r=>`
      <li>
        <span>${r}</span>
      </li>
    `).join("");l.innerHTML=u;
