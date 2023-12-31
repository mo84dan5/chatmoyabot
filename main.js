import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { fetchJson, fetchText } from './src/util.js'

import { getCurrentPageQueryParams } from './src/parseQueryParams.js'
import { sendRequestToGPT } from './src/GPTRequestSender.js'
import { textToSpeech } from './src/textToSpeech.js'
import { AudioRecorder } from './src/getMp3Blob'
import {
  requestCameraAndMicrophonePermission,
  requestGyroscopePermission,
} from './src/requestPermission.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>カメラとマイクのアクセス許可を要求しますか？</p>
        <button id="confirmBtn">OK</button>
      </div>
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
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
`
console.log(getCurrentPageQueryParams())
const api_key = getCurrentPageQueryParams().key

// モーダル画面ロジック

let stream = undefined
let recorder = undefined
// モーダルを制御する関数
function showModal() {
  var modal = document.getElementById('myModal')
  var btn = document.getElementById('confirmBtn')
  var span = document.getElementsByClassName('close')[0]

  modal.style.display = 'block'

  // 「OK」ボタンをクリックしたとき
  btn.onclick = function () {
    modal.style.display = 'none'
    stream = requestCameraAndMicrophonePermission()
    recorder = new AudioRecorder(stream)
  }

  // × ボタンをクリックしたとき
  span.onclick = function () {
    modal.style.display = 'none'
  }

  // モーダル外をクリックしたとき
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
}

// ページが読み込まれたときにモーダルを表示
window.onload = function () {
  showModal()
}

// sendRequestToGPT(
//   api_key, // APIキー
//   'gpt-4', // モデル
//   [{ role: 'user', content: 'メダロットとはなんですか' }], // メッセージ
//   0.7 // テンパレチャ
// )
//   .then((response) => {
//     console.log(response) // レスポンスをコンソールに表示
//   })
//   .catch((error) => {
//     console.error('エラーが発生しました:', error)
//   })

// textToSpeech(api_key, '私はクワガタ型メダロットのロクショウです。', 'onyx')
//   .then((mp3Url) => {
//     if (mp3Url) {
//       // Audioオブジェクトを作成し、音声を再生
//       const audio = new Audio(mp3Url)
//       audio.play()
//     } else {
//       console.error('Failed to get speech URL')
//     }
//   })
//   .catch((error) => console.error(error))
// setupCounter(document.querySelector('#counter'))

const _txt = await fetchText('./prompts/template.txt')
console.log(_txt)

const _json = await fetchJson('./prompts/character.json')
console.log(_json)
document.querySelector('#counter').addEventListener('click', function () {
  textToSpeech(api_key, document.getElementById('messageInput').value, 'onyx')
    .then((mp3Url) => {
      if (mp3Url) {
        // Audioオブジェクトを作成し、音声を再生
        const audio = new Audio(mp3Url)
        audio.play()
      } else {
        console.error('Failed to get speech URL')
      }
    })
    .catch((error) => console.error(error))
})

// ボタン要素を取得
const recordButton = document.getElementById('recordButton')

// レコーディングの状態を追跡する変数
let isRecording = false

// 録音開始のメソッド
function recordStart() {
  // 録音開始の処理
  console.log('録音が開始されました。')
}

// 録音停止の非同期関数
async function recordStop() {
  // 録音停止の処理、blobを返す
  console.log('録音が停止しました。')
  return new Blob() // 仮の返り値
}

// ボタンのクリックイベントハンドラ
recordButton.addEventListener('click', async () => {
  if (!isRecording) {
    recordStart()
    recordButton.classList.add('recording')
    isRecording = true
  } else {
    const mp3Blob = await recordStop()
    recordButton.classList.remove('recording')
    isRecording = false

    // mp3Blobを処理するロジック
    console.log('録音データ:', mp3Blob)
  }
})
