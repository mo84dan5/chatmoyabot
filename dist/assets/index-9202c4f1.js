(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const f="https://mo84dan5.github.io/chatmoyabot/dist/assets/javascript-8dac5379.svg",m="https://mo84dan5.github.io/chatmoyabot/dist/vite.svg";function g(t){return fetch(t).then(e=>{if(!e.ok)throw new Error("ネットワークレスポンスが不正です。");return e.json()}).then(e=>e).catch(e=>{console.error("データの取得中にエラーが発生しました:",e)})}function y(t){return fetch(t).then(e=>{if(!e.ok)throw new Error("ネットワークレスポンスが不正です。");return e.text()}).catch(e=>{console.error("データの取得中にエラーが発生しました:",e)})}function h(){let t={},e=window.location.search.substring(1);return e&&e.split("&").forEach(r=>{let[s,o]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o||"")}),t}console.log(h());async function v(t,e,r){const s="https://api.openai.com/v1/audio/speech",o={model:"tts-1",input:e,voice:r};try{const n=await fetch(s,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(o)});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const c=await n.blob(),a=URL.createObjectURL(c);return console.log(`MP3 file created: ${a}`),a}catch(n){console.error("Error in textToSpeech:",n)}}class w{constructor(e){this.stream=e,this.mediaRecorder=null,this.chunks=[],this.audioContext=new AudioContext,this.source=this.audioContext.createMediaStreamSource(e),this.processor=this.audioContext.createScriptProcessor(4096,1,1),this.source.connect(this.processor),this.processor.connect(this.audioContext.destination)}startRecording(){this.chunks=[],this.processor.onaudioprocess=e=>{const r=e.inputBuffer.getChannelData(0);this.chunks.push(new Float32Array(r))}}stopRecording(){this.processor.onaudioprocess=null;const e=this.audioContext.createBuffer(1,this.chunks.reduce((c,a)=>c+a.length,0),this.audioContext.sampleRate),r=e.getChannelData(0);let s=0;for(let c of this.chunks)r.set(c,s),s+=c.length;const o=this.audioBufferToWav(e);return this.wavToMp3(o)}audioBufferToWav(e){const r=e.numberOfChannels,s=e.length*r*2,o=new ArrayBuffer(s),n=new DataView(o);let c=0;for(let a=0;a<e.length;a++)for(let i=0;i<r;i++){const p=e.getChannelData(i)[a],l=Math.max(-1,Math.min(1,p));n.setInt16(c,l<0?l*32768:l*32767,!0),c+=2}return new Int16Array(o)}wavToMp3(e){return console.log("mp3Encoder"),new lamejs.Mp3Encoder(1,44100,128).encodeBuffer(e)}}async function b(){try{const t=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});console.log("カメラとマイクのアクセス許可が与えられました。",t)}catch(t){console.error("カメラとマイクのアクセス許可が拒否されました。",t)}}new w("src");document.querySelector("#app").innerHTML=`
  <div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>カメラとマイクのアクセス許可を要求しますか？</p>
        <button id="confirmBtn">OK</button>
      </div>
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${m}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${f}" class="logo vanilla" alt="JavaScript logo" />
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
`;console.log(h());const x=h().key;function C(){var t=document.getElementById("myModal"),e=document.getElementById("confirmBtn"),r=document.getElementsByClassName("close")[0];t.style.display="block",e.onclick=function(){t.style.display="none",b()},r.onclick=function(){t.style.display="none"},window.onclick=function(s){s.target==t&&(t.style.display="none")}}window.onload=function(){C()};const B=await y("./prompts/template.txt");console.log(B);const E=await g("./prompts/character.json");console.log(E);document.querySelector("#counter").addEventListener("click",function(){v(x,document.getElementById("messageInput").value,"onyx").then(t=>{t?new Audio(t).play():console.error("Failed to get speech URL")}).catch(t=>console.error(t))});const u=document.getElementById("recordButton");let d=!1;function S(){console.log("録音が開始されました。")}async function k(){return console.log("録音が停止しました。"),new Blob}u.addEventListener("click",async()=>{if(!d)S(),u.classList.add("recording"),d=!0;else{const t=await k();u.classList.remove("recording"),d=!1,console.log("録音データ:",t)}});
