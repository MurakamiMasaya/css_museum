import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'
import Layout1 from "../components/layout/layout1"

// _app.tsxはページが初期がされた際に必ず通るロジック
// cssはここで読み込むことが多い？
export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => <Layout1>{page}</Layout1>)

  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  )
}
