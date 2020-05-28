import { useContext, useEffect } from 'react'

import ThemeContext from 'contexts/ColorProvider'

const useColorMode = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.colorMode = colorMode
  }, [colorMode])

  return { colorMode, toggleColorMode }
}

export default useColorMode
