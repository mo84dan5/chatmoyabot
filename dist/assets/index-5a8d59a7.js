(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const l="https://mo84dan5.github.io/chatmoyabot/dist/assets/javascript-8dac5379.svg",u="https://mo84dan5.github.io/chatmoyabot/dist/vite.svg";function d(r){return fetch(r).then(e=>{if(!e.ok)throw new Error("ネットワークレスポンスが不正です。");return e.json()}).then(e=>e).catch(e=>{console.error("データの取得中にエラーが発生しました:",e)})}function p(r){return fetch(r).then(e=>{if(!e.ok)throw new Error("ネットワークレスポンスが不正です。");return e.text()}).catch(e=>{console.error("データの取得中にエラーが発生しました:",e)})}function i(){let r={},e=window.location.search.substring(1);return e&&e.split("&").forEach(c=>{let[n,t]=c.split("=");r[decodeURIComponent(n)]=decodeURIComponent(t||"")}),r}console.log(i());async function h(r,e,c){const n="https://api.openai.com/v1/audio/speech",t={model:"tts-1",input:e,voice:c};try{const o=await fetch(n,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const s=await o.blob(),a=URL.createObjectURL(s);return console.log(`MP3 file created: ${a}`),a}catch(o){console.error("Error in textToSpeech:",o)}}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${u}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${l}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">push</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;console.log(i());const f=i().key,g=await p("./prompts/template.txt");console.log(g);const m=await d("./prompts/character.json");console.log(m);document.querySelector("#counter").addEventListener("click",function(){h(f,"私はクワガタ型メダロットのロクショウです。","onyx").then(r=>{r?new Audio(r).play():console.error("Failed to get speech URL")}).catch(r=>console.error(r))});
