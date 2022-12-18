import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

// Next.jsで動的にrouteを割り当てる方法は2つあるんかな
// 1つ目は、getServerSideProps()でcontext.queryを受け取る方法
// 2つ目は、nextのhooksのuseRouterのquery.nameを受け取る方法
// useRouterのroute.queryでクエリパラメータを取得できる
// router.back()で1つ戻るなんかも便利
// route.reload()で画面をロードするのも便利、window.reload()みたいな関数が必要なくなるんか
export default function Setting(props : {query: string}){
  const { query } = props
  const router = useRouter()
  console.log(router.query, 'query')

  const clickHandler = () => {
    // router.push()はnavigateやuseHistory()と同じなんだろうな
    // push()の第二引数にURLを指定できるのはめちゃくちゃ面白い、使うところわからんけども
    router.push('/', '/dummy-url')
  }

  const clickReplaceHandler = () => {
    // router.replace()はhisotryを上書きするので、ブラウザバックができない
    // 用途はまだわからない
    // pushは一つ履歴を追加しているだけ
    router.replace('/')
  }

  return (
    <>
    <h1>routerから取得: {router.query.name}</h1>
    <button onClick={clickHandler}>アクションによる画面遷移</button>
    <button onClick={clickReplaceHandler}>リプレイスよる画面遷移※ブラウザバックで戻れないよ</button>
    </>

  )
}

// 関数名はこの通りでないとダメ(getServerSideProps())
// getServerSidePropsではSSRで利用される
// getServerSidePropsのpropsの値が、関数コンポーネントに渡される
export async function getServerSideProps({ query }){
  return {
    props: { query }
  }
}