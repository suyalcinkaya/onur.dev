import { useEffect, useState } from 'react'

const useColorMode = () => {
  const [systemTheme, systemThemeSet] = useState()

  useEffect(() => {
    systemThemeSet(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    const handleThemeChange = (event) => {
      systemThemeSet(event.matches ? 'dark' : 'light')
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange)
    }
  }, [])

  return { systemTheme }
}

export default useColorMode
