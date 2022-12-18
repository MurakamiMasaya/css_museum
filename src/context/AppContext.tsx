import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

const AppContext = createContext<string>('')
const AppDispatchContext = createContext<Dispatch<SetStateAction<string>> | null>(null)

const AppProvider = (props: {children: JSX.Element}) => {
  const { children } = props
  const [ list, setList ] = useState('');

  return (
    <AppContext.Provider value={list} >
      <AppDispatchContext.Provider value={setList} >
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)
const useAppDispatchContext = () => useContext(AppDispatchContext)

export { AppProvider, useAppContext, useAppDispatchContext }