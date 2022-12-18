import Link from "next/link"

export default function Page(){
  return (
    <ul>
      <li>
        <Link href="/layout/layout1">
          <h2>レイアウト1</h2>
        </Link>
      </li>
      <li>
        <Link href="/layout/layout2">
          <h2>レイアウト2</h2>
        </Link>
      </li>
    </ul>
  )
}