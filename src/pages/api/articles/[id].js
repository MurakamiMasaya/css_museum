import axios from "axios";

export default function handler(req, res){
  const { method, query } = req
  try{
    if(method === "GET"){
      const result = await axios.get(`http://localhost:4030/articles${query.id}`)
        .then((res) => res.data)
      return res.status(200).json(result)
    }
  } catch {

  }

  return res.status(500).json({
    status: 500,
    message: 'エラーが発生しました'
  })
}