import { LOCAL_STORAGE_BGCOLOR_KEY, BgColorContext } from './ColorContext'
import { useContext, useState } from 'react'

export function useBgColor() {
  const bGcolor = useContext(BgColorContext)

  const [color, setColor] = useState(bGcolor)
  const hundlerColor = (val : string) => {    
    setColor(val)
    localStorage.setItem(LOCAL_STORAGE_BGCOLOR_KEY, val)
  }

  return {color, hundlerColor}
}