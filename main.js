import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import { fetchJson, fetchText } from './src/util.js'

import { getCurrentPageQueryParams } from './src/parseQueryParams.js'
import { sendRequestToGPT } from './src/GPTRequestSender.js'
import { textToSpeech } from './src/textToSpeech.js'

document.querySelector('#app').innerHTML = `
  <div>
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
      <button class="recordButton">record</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
console.log(getCurrentPageQueryParams())
const api_key = getCurrentPageQueryParams().key

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

const _txt = await fetchText('./public/prompts/template.txt')
console.log(_txt)

const _json = await fetchJson('./public/prompts/character.json')
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
