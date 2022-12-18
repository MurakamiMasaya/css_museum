import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    {/* Linkはレンダリング無して、画面遷移ができる。ブラウザの更新が行われない
    Linkがそもそもリンク用コンポーネントなので、aタグを囲うことはできないのかな
    */}
    <Link href={{ pathname: "router", query: { key: 'value' }}}>
      <h3>router</h3>
    </Link>
    <a href="/router/hello/setting">画面遷移が発生するrouter</a>
    </>
  )
}
