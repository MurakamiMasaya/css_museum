import { useEffect, useState } from "react"

// Next.jsはNode.jsで１回、ブラウザで１回関数コンポーネントが実行されている
export default function SSR({ message }) {
  console.log('hello')
  console.log(message)

  // useEffect内は確実にブラウザ上で実行される
  // 結局、副作用に関してはuseEffect内部に含めればいい
  useEffect(() => {
    console.log('useEffect')
    window.localStorage.setItem('key', 'value')
    document.cookie = 'value=0; path=/;'
  },[])
  const [state, setState] = useState('bye')
  const val = 0
  return <h3>{state}</h3>
}

// Node.js上で実行される関数
// getServerSideProps()内にconsoleを書いても、Node上でしか確認できないのは当たり前
// contextにrequestとresponse,queryParameterの情報が載ってくる
// 設定したpropsが関数コンポーネントの引数になる
// props内部がjsonになって返ってくる
// getServerSidePropsはpage/以下、pageコンポーネントのみで実行できる
export async function getServerSideProps(context){
  const { cookie } = context.req.headers
  console.log(cookie, 'cookie')
  return {
    props: { message: 'From Server Side Props' }
  }
}