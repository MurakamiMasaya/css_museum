import axios from "axios";
const JSON_SERVER_URL = 'http://localhost:4030/articles'

// api/にApiRouteとして書けば、外部APIの存在を隠蔽することもできる
export default async function handler(req, res){
  try{
    if(req.method === 'GET'){
      const result = await axios.get(JSON_SERVER_URL).then((res) => res.data)
      // このapiの戻り値としてstatusを200に、resultをjsonとして保存している
      return res.status(200).json(result)
    }
  } catch {

  }

  // jsonの中身にオブジェクトを設定しても良い
  return res.status(500).json({
    error: {
      status: 500,
      code: "bad request",
      message: "不正なリクエストです"
    }
  })
}