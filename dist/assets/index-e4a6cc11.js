(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const u="https://mo84dan5.github.io/chatmoyabot/dist/assets/javascript-8dac5379.svg",p="https://mo84dan5.github.io/chatmoyabot/dist/vite.svg";function f(e){return fetch(e).then(t=>{if(!t.ok)throw new Error("ネットワークレスポンスが不正です。");return t.json()}).then(t=>t).catch(t=>{console.error("データの取得中にエラーが発生しました:",t)})}function m(e){return fetch(e).then(t=>{if(!t.ok)throw new Error("ネットワークレスポンスが不正です。");return t.text()}).catch(t=>{console.error("データの取得中にエラーが発生しました:",t)})}function l(){let e={},t=window.location.search.substring(1);return t&&t.split("&").forEach(c=>{let[r,o]=c.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o||"")}),e}console.log(l());async function g(e,t,c){const r="https://api.openai.com/v1/audio/speech",o={model:"tts-1",input:t,voice:c};try{const n=await fetch(r,{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify(o)});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.blob(),d=URL.createObjectURL(s);return console.log(`MP3 file created: ${d}`),d}catch(n){console.error("Error in textToSpeech:",n)}}async function h(){try{const e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});console.log("カメラとマイクのアクセス許可が与えられました。",e)}catch(e){console.error("カメラとマイクのアクセス許可が拒否されました。",e)}}document.querySelector("#app").innerHTML=`
  <div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>カメラとマイクのアクセス許可を要求しますか？</p>
        <button id="confirmBtn">OK</button>
      </div>
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${p}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${u}" class="logo vanilla" alt="JavaScript logo" />
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
`;console.log(l());const y=l().key;function v(){var e=document.getElementById("myModal"),t=document.getElementById("confirmBtn"),c=document.getElementsByClassName("close")[0];e.style.display="block",t.onclick=function(){e.style.display="none",h()},c.onclick=function(){e.style.display="none"},window.onclick=function(r){r.target==e&&(e.style.display="none")}}window.onload=function(){v()};const b=await m("./prompts/template.txt");console.log(b);const w=await f("./prompts/character.json");console.log(w);document.querySelector("#counter").addEventListener("click",function(){g(y,document.getElementById("messageInput").value,"onyx").then(e=>{e?new Audio(e).play():console.error("Failed to get speech URL")}).catch(e=>console.error(e))});const i=document.getElementById("recordButton");let a=!1;function L(){console.log("録音が開始されました。")}async function B(){return console.log("録音が停止しました。"),new Blob}i.addEventListener("click",async()=>{if(!a)L(),i.classList.add("recording"),a=!0;else{const e=await B();i.classList.remove("recording"),a=!1,console.log("録音データ:",e)}});
