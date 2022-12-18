// POINT 複数ページでの状態の共有（Context使用）
import { useState } from "react";
import Form from "../../components/form";
import List from "../../components/list";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppContext, useAppDispatchContext } from "../../context/AppContext";

export default function PageLink() {
  const initialState = { name: "", birth: "" };
  const list = useAppContext()
  const setList = useAppDispatchContext()
  const [value, setValue] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({ ...prev, [inputId]: inputValue }));
  };
  const handleAddClick = () => {
    setList((prev) => [...prev, { ...value, id: new Date().getTime() }]);
    setValue(initialState);
  };
  const handleResetClick = () => {
    setList([]);
  };
  return (
    <div>
      <Form
        handleAddClick={handleAddClick}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        nameValue={value.name}
        birthValue={value.birth}
      />
      <List list={list} />
      <button onClick={() => router.push('/multipage_state/list')}>
        リストページへ
      </button>
      <Link href='/multipage_state/list'>
      <a >
        アンカータグ
      </a>
      </Link>
    </div>
  );
}
