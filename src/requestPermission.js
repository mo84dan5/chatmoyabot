// カメラとマイクへのアクセス許可を求める関数
async function requestCameraAndMicrophonePermission() {
  try {
    // カメラとマイクのストリームを取得
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
    // ここでストリームを使用します (例: video要素に割り当てる)
    console.log('カメラとマイクのアクセス許可が与えられました。', stream)
    return stream
  } catch (error) {
    // ユーザーがアクセスを拒否した場合のエラーハンドリング
    console.error('カメラとマイクのアクセス許可が拒否されました。', error)
  }
}

export { requestCameraAndMicrophonePermission }

// ジャイロセンサーへのアクセス許可を求める関数
function requestGyroscopePermission() {
  // DeviceOrientationEvent.requestPermission() は iOS 13+ でのみ利用可能
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === 'granted') {
          // ジャイロセンサーへのアクセスが許可された場合の処理
          window.addEventListener('deviceorientation', handleOrientation)
        } else {
          // アクセスが拒否された場合の処理
          console.error('ジャイロセンサーへのアクセスが拒否されました。')
        }
      })
      .catch(console.error)
  } else {
    // 通常のイベントリスナーの設定
    window.addEventListener('deviceorientation', handleOrientation)
  }
}
// ジャイロセンサーのイベントハンドラー
function handleOrientation(event) {
  // ここでジャイロセンサーのデータを処理
  console.log(event.alpha, event.beta, event.gamma)
}

export { requestGyroscopePermission }
