import Head from "next/head"
import Script from "next/script"

export default function Page(){
  // Headコンポーネントの中に、header内に記述したい状況を記載していく
  return (
    <>
      <Head>
        <title>ページのタイトル</title>
        <meta property="og:title" content="ページのタイトル" />
      </Head>
      {/* 外部スクリプトを読み込む際につかう */}
      <Script />
    </>
  )
}