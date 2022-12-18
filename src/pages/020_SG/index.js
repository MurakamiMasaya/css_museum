export default function IndexPage({ message }){
  return <h3>SG: {message}</h3>
}

// buildのタイミングで実行される関数
export async function getStaticProps(){
  // 予想ではbuildされた際に、コンソールにのみ表示されるのかな
  console.log('getStaticProps')
  return {
    props: { message: 'From Static Props' }
  }
}