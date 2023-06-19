import { BgColorContext, LOCAL_STORAGE_BGCOLOR_KEY, bgColorType } from "./ColorContext";
import { FC, useState, useMemo } from "react";

const defaultBgColor = localStorage.getItem(LOCAL_STORAGE_BGCOLOR_KEY) as bgColorType || 'white'

const BgColorProvider: FC = ({children}) => {

  // const [bgColor, setBgColor] = useState<bgColorType>(defaultBgColor)

  // const defaultProps = useMemo(() => ({
  //   bgColor: bgColor,
  //   setBgColor: setBgColor
  // }), [bgColor])

  return (
    <BgColorContext.Provider value={defaultBgColor}>
      {children}
    </BgColorContext.Provider>
  )
}

export default BgColorProvider