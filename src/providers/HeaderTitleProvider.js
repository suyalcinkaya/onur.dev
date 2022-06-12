import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function HeaderTitleProvider({ children }) {
  const [headerTitle, setHeaderTitle] = useState('')
  return <Context.Provider value={{ headerTitle, setHeaderTitle }}>{children}</Context.Provider>
}

export function useHeaderTitleContext() {
  return useContext(Context)
}
