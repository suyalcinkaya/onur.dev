import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function ContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return <Context.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>{children}</Context.Provider>
}

export function useContextProvider() {
  return useContext(Context)
}
