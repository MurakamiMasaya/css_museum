// 型のため導入
import { GetStaticProps, NextPage, NextPageContext } from 'next'
// Next.jsの組み込みコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string
}

// SSG向けのページを実装
// NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  )
}

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
// じゃあgetServerSidePropsにはGetServerSidePropsっていう型も用意されていそうだな
// getStaticPropsはエクスポートする必要があり、非同期関数としてasyncとともに定義する必要ある
// getStaticProps/getServerSidePropsの引数であるcontextは実行関連の情報がまとまったオブジェクト
export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
  const timestamp = new Date(). toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)
  // ここで返したpropsを元にページコンポーネントを描画する
  return {
    props: {
      message,
    }
  }
}

// ページコンポーネントはexport defaultでエクスポートする
export default SSG