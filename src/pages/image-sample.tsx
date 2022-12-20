import { NextPage } from 'next'
import Image from 'next/image'

// 画像ファイルをインポートする
import BibleImage from '../public/images/vercel.png'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      {/* Imageを利用した場合は、事前に描画エリアが確保されます */}
      <Image src={BibleImage} alt=""/>
    </div>
  )
}

export default ImageSample