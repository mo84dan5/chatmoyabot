(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const d="https://mo84dan5.github.io/chatmoyabot/dist/assets/javascript-8dac5379.svg",p="https://mo84dan5.github.io/chatmoyabot/dist/vite.svg";function f(o){return fetch(o).then(e=>{if(!e.ok)throw new Error("ネットワークレスポンスが不正です。");return e.json()}).then(e=>e).catch(e=>{console.error("データの取得中にエラーが発生しました:",e)})}function h(o){return fetch(o).then(e=>{if(!e.ok)throw new Error("ネットワークレスポンスが不正です。");return e.text()}).catch(e=>{console.error("データの取得中にエラーが発生しました:",e)})}function l(){let o={},e=window.location.search.substring(1);return e&&e.split("&").forEach(c=>{let[n,t]=c.split("=");o[decodeURIComponent(n)]=decodeURIComponent(t||"")}),o}console.log(l());async function g(o,e,c){const n="https://api.openai.com/v1/audio/speech",t={model:"tts-1",input:e,voice:c};try{const r=await fetch(n,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const s=await r.blob(),u=URL.createObjectURL(s);return console.log(`MP3 file created: ${u}`),u}catch(r){console.error("Error in textToSpeech:",r)}}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${p}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${d}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <input type="text" id="messageInput" value="私はクワガタ型メダロットのロクショウです。">
      <button id="counter" type="button">push</button>
    </div>
    <div class="card">
      <button id="recordButton">record</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;console.log(l());const m=l().key,y=await h("./prompts/template.txt");console.log(y);const v=await f("./prompts/character.json");console.log(v);document.querySelector("#counter").addEventListener("click",function(){g(m,document.getElementById("messageInput").value,"onyx").then(o=>{o?new Audio(o).play():console.error("Failed to get speech URL")}).catch(o=>console.error(o))});const i=document.getElementById("recordButton");let a=!1;function b(){console.log("録音が開始されました。")}async function w(){return console.log("録音が停止しました。"),new Blob}i.addEventListener("click",async()=>{if(!a)b(),i.classList.add("recording"),a=!0;else{const o=await w();i.classList.remove("recording"),a=!1,console.log("録音データ:",o)}});
