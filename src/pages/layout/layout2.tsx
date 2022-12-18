import Layout2 from "../../components/layout/layout2"

export default function Page() {
  return (
    <div>
      <p>レイアウト2: ヘッダーがBOTTOMにある</p>
    </div>
  );
}

// page.getlayoutに関数を登録する
Page.getLayout = (page) => {
  return <Layout2>{page}</Layout2>
}