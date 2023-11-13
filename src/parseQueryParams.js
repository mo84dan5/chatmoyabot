// 現在のURLからクエリ文字列を解析してオブジェクトとして返す関数
function getCurrentPageQueryParams() {
  // 結果を格納するオブジェクト
  let queryParams = {}

  // 現在のURLからクエリ文字列部分を取得
  let queryString = window.location.search.substring(1)
  if (!queryString) {
    return queryParams // クエリ文字列が存在しない場合は空のオブジェクトを返す
  }

  // クエリ文字列を&で分割し、各パラメータを処理
  queryString.split('&').forEach((param) => {
    let [key, value] = param.split('=')
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value || '')
  })

  return queryParams
}

export { getCurrentPageQueryParams }
// テストケース
// 関数を呼び出して現在のURLのクエリ文字列を取得
console.log(getCurrentPageQueryParams())
