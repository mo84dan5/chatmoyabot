/**
 * OpenAIのAPIにリクエストを送る非同期関数
 * @param {string} apiKey - OpenAIのAPIキー
 * @param {string} model - 使用するモデルの名前
 * @param {Array} messages - 送信するメッセージの配列
 * @param {number} temperature - temperatureの設定値
 * @returns {Promise<Object>} APIからのレスポンス
 */
async function sendRequestToGPT(apiKey, model, messages, temperature) {
  // fetch APIを使ってリクエストを送信
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', // HTTPメソッドをPOSTに設定
    headers: {
      'Content-Type': 'application/json', // コンテンツタイプをJSONに設定
      Authorization: `Bearer ${apiKey}`, // 認証情報をヘッダーに追加
    },
    body: JSON.stringify({
      // リクエストのボディ
      model, // モデルを指定
      messages, // メッセージを指定
      temperature, // テンパレチャを指定
    }),
  })

  // レスポンスをJSON形式で返す
  return response.json()
}
export { sendRequestToGPT }
// 使用例
// sendRequestToGPT(
//   'あなたのAPIキー', // APIキー
//   'gpt-3.5-turbo', // モデル
//   [{ role: 'user', content: 'Say this is a test!' }], // メッセージ
//   0.7 // テンパレチャ
// )
//   .then((response) => {
//     console.log(response) // レスポンスをコンソールに表示
//   })
//   .catch((error) => {
//     console.error('エラーが発生しました:', error)
//   })
