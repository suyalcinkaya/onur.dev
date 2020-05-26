import { useState, useLayoutEffect, createContext } from 'react'

const ThemeContext = createContext()

const themes = ['light', 'dark']

export const ColorProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(themes[0])
  useLayoutEffect(() => {
    const localColorMode = localStorage.colorMode
    if (!localColorMode) {
      localStorage.colorMode = colorMode
    } else {
      setColorMode(localStorage.colorMode)
    }
  }, [])
  const toggleColorMode = () => setColorMode(colorMode !== themes[0] ? themes[0] : themes[1])
  return <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
