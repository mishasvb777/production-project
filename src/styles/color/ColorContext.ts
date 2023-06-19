import { createContext } from 'react'

export type bgColorType = string


export const BgColorContext = createContext<bgColorType>('')

export const LOCAL_STORAGE_BGCOLOR_KEY = 'bgcolor'


