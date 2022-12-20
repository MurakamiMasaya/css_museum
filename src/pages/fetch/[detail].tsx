import axios from "axios"
import { useRouter } from "next/router"
import { GetStaticProps } from "next"

const ENDPOINT = 'http://localhost:4030/articles'
export default function Detail(article: string){
  const router = useRouter()
  // routerのisFallbackがtrueの時はローディング中
  if(router.isFallback){
    return <h3>Loading...</h3>
  }
  return (
    <div>
      個別の記事を表示するコンポーネント{article}
    </div>
  )
}

export async function getStaticPaths(){
  const result = await axios.get(ENDPOINT).then((res) => res.data)
  if(!result) return
  const paths = result.map((article: any) => ({params: { id: `${article.id}` }}))
  return { paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async(context) =>{
  const id = context?.params?.id
  const result = await axios.get(`${ENDPOINT}/${id}`).then((res) => res.data)
  // 非同期処理を待機して、その結果を返している
  console.log(result)

  return {
    props: {
      article: result
    }
  }
}