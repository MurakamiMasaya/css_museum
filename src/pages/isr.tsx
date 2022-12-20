import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props
  
  const router = useRouter()

  router.reload()
  router.back()
  // 遷移開始時のイベントを購読する
  router.events.on('routeChangeStart', (url, { shallow }) => {
    // urlには遷移先のpath
    // shallowはシャーロールーティングの場合はtrueになる
  })
  // 遷移完了時のイベントを購読する
  router.events.on('routeChangeComplete', (url, { shallow }) => {
    // 同上
  })

  const onSubmit = () => {
    // router.push('/ssr')
    // router.pushには文字列だけでなく、オブジェクトも挿入できる
    router.push({
      pathname: '/ssg',
      query: { keyword: 'hello' }
    })
  }
  // 先にHTMLを生成するようなSSGやISRはfallbackの設定を考慮しないといけない
  if(router.isFallback){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
        <p>{message}</p>
        {/* Linkコンポーネントはクライアントサイドで新しいページを描画する
            必要なデータはあらかじめ非同期に取得するので、高速なページ遷移を実現できる
        */}
        {/* Linkのhrefには文字列の代わりにオブジェクトを指定できる */}
        <Link href={{
          pathname: '/ssh',
          query: { keyword: 'hello' }
        }}>
          <a>Go To SSG</a>
        </Link>
        <Link href="/ssr">
          <a>Go To SSR</a>
        </Link>
        {/* aの代わりにbuttonを使うと、onClickが呼ばれたタイミングで遷移する */}
        <Link href="/ssg">
          <button>Jump to SSG page</button>
        </Link>
      </main>
    </div>
  )
}

// getStaticPropsの戻り値に、revalidateプロパティを追加する
export const getStaticProps: GetStaticProps<ISRProps> = async(context) => {
  const timestamp = new Date(). toLocaleString()
  const message = `${timestamp}にこのページのgetStaticPropsが実行されました`

  return {
    props: {
      message,
    },
    // ページの有効期限を秒単位で指定
    revalidate: 60,
  }
}

export default ISR