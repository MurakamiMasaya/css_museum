import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

// デフォルトのDocumentをMyDocumentで上書き
// Documentって何？カスタムドキュメント、htmlやhead、body要素に関わる部分を上書きするためのもの
export default class MyDocument extends Document {
  // getInitialPropsは_documentの初期化に使うもの
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try{
      ctx.renderPage = () => 
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      
        const initialProps = await Document.getInitialProps(ctx)

        // initialPropsに加えて、styleを追加して返す
        return {
          ...initialProps,
          styles: [
            initialProps.styles,
            sheet.getStyleElement()
          ],
        }
    } finally {
      sheet.seal()
    }
  }
}