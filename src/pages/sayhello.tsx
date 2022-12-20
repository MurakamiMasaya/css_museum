import { useState, useEffect } from 'react'

function Sayhello(){
  // 内部で状態を保つためにuseState
  const [data, setData] = useState({name: ''})
  // 外部のAPIにリクエストするのは副作用なので,useEffect内で処理
  useEffect(() => {
    // pages/api/hello.tsの内容にリクエスト
    // useEffect内部でapiを叩く場合のURLは、同一オリジンであればpathからで良い
    // 同一オリジンとはスキーマ、ドメイン、ポートが同じもの
    // 基本的にはバックエンドで外部APIを叩く実装をapi/に書いて、それをclientサイドから呼び出す
    // apiを叩く場所を一元管理できる
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setData(profile)
      })
  }, [])

  return <div>hello {data.name}</div>
}

export default Sayhello