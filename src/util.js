/**
 * 指定されたURLからJSONデータを取得してオブジェクトに変換する関数
 * @param {string} url - JSONデータを取得するURL
 * @returns {Promise<Object>} - JSONデータを解析したオブジェクトを返すプロミス
 */
function fetchJson(url) {
  // URLからデータを取得
  return fetch(url)
    .then((response) => {
      // レスポンスが正常か確認
      if (!response.ok) {
        throw new Error('ネットワークレスポンスが不正です。')
      }
      // JSONとしてレスポンスを解析
      return response.json()
    })
    .then((data) => {
      // 解析されたデータを返す
      return data
    })
    .catch((error) => {
      // エラー処理
      console.error('データの取得中にエラーが発生しました:', error)
    })
}

export { fetchJson }

// // 使用例
// const url = 'https://example.com/data.json'
// fetchJson(url).then((data) => {
//   console.log('取得したデータ:', data)
//   // ここで取得したデータをさらに処理する
// })

/**
 * 指定されたURLからテキストデータを取得して文字列に変換する関数
 * @param {string} url - テキストデータを取得するURL
 * @returns {Promise<string>} - テキストデータを返すプロミス
 */
function fetchText(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('ネットワークレスポンスが不正です。')
      }
      return response.text()
    })
    .catch((error) => {
      console.error('データの取得中にエラーが発生しました:', error)
    })
}

export { fetchText }

// // 使用例
// const url = 'https://example.com/data.txt'
// fetchText(url).then((text) => {
//   console.log('取得したテキスト:', text)
// })
