import axios from "axios"

export default function Page(articles: string){
  if(!articles) {
    return <div>データがありません</div>
  }
  
  return (
    <>
    <h3>
      fetch&SG
    </h3>
    </>
  )
}

export async function getStaticProps(){
  const ENDPOINT = 'http://localhost:4030/articles'

  // 非同期処理を待機して、その結果を返している
  const result = await axios.get(ENDPOINT).then((res) => res.data)
  console.log(result)

  return {
    props: {
      articles: result
    }
  }
}