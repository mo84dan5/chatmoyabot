(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(o){if(o.ep)return;o.ep=!0;const e=t(o);fetch(o.href,e)}})();const a="/assets/javascript-8dac5379.svg",u="/vite.svg";function d(n){return fetch(n).then(t=>{if(!t.ok)throw new Error("ネットワークレスポンスが不正です。");return t.json()}).then(t=>t).catch(t=>{console.error("データの取得中にエラーが発生しました:",t)})}function f(n){return fetch(n).then(t=>{if(!t.ok)throw new Error("ネットワークレスポンスが不正です。");return t.text()}).catch(t=>{console.error("データの取得中にエラーが発生しました:",t)})}function s(){let n={},t=window.location.search.substring(1);return t&&t.split("&").forEach(c=>{let[o,e]=c.split("=");n[decodeURIComponent(o)]=decodeURIComponent(e||"")}),n}console.log(s());async function p(n,t,c){const o="https://api.openai.com/v1/audio/speech",e={model:"tts-1",input:t,voice:c};try{const r=await fetch(o,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const i=await r.blob(),l=URL.createObjectURL(i);return console.log(`MP3 file created: ${l}`),l}catch(r){console.error("Error in textToSpeech:",r)}}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${u}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${a}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;console.log(s());const h=s().key,m=await f("./prompts/template.txt");console.log(m);const g=await d("./prompts/character.json");console.log(g);document.querySelector("#counter").addEventListener("click",function(){p(h,"私はクワガタ型メダロットのロクショウです。","onyx").then(n=>{n?new Audio(n).play():console.error("Failed to get speech URL")}).catch(n=>console.error(n))});
