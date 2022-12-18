import { useRouter } from "next/router"

export default function Page({id}){
  const router = useRouter()
  if(router.isFallback){
    return <h3>Loading...</h3>
  }
  return <h3>このページは{id}です</h3>
}

// getStaticPaths()はダイナミックルーティングで不確定なpathを定義できる
// npm run build npm run startの際にfallbackのフラグが影響してくる
// npm run startでnode.jsを立ち上げた際は、.next/以下の資材を見にいく
// fallback: trueは定義していないpathでリクエストされたときに404を返す
// fallback: blocking
export async function getStaticPaths(){
  return {
    paths: [{ params: {id: "1"} }, {params: {id: "2"}}],
    fallback: true
  }
}

// getStaticProps()はbuild時に実行される(npm run export前)
// getStaticProps()にて固定でidを渡している場合は、ダイナミックルーティングが効かない
// buildした際の順番は、getStaticPaths()->getStaticProps()なんだ
// getStaticProps()はgetStaticPaths()で定義したpathsの数だけ繰り返されるってとりあえず覚えておこ
export async function getStaticProps({params}){
  console.log(context)

  return {
    props: {
      id: params.id
    }
  }
}