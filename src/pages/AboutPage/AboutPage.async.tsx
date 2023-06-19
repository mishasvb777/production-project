// Файл необходим для реализации механизма лейзи лоадинг
import {lazy} from 'react'

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))


// теперь этот компонент будет подгружаться только когда будет 
                                                        //переход на его ссылку,А не во время открытия приложения