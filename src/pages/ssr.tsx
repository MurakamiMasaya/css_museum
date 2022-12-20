import { GetServerSideProps, NextPage } from "next";
import Head from 'next/head'

type SSRProps = {
  message: string
}

const SSR: NextPage<SSRProps> = ( props ) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

// getServerSidePropsはページへのリクエストがあるたびに実行される
// やっぱりGetServerSidePropsっていうgetServerSidePropsのcontext用の型があった
// getStaticPropsのcontextとgetServerSidePropsのcontextでは参照できる情報が違う
// getServerSidePropsの方が、リクエスト情報などを参照することができるから
export const getServerSideProps: GetServerSideProps<SSRProps> = async(context)=> {
  const timestamp = new Date(). toLocaleString()
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`
  console.log(message)

  return {
    props: {
      message,
    }
  }
}

export default SSR