// Файл необходим для реализации механизма лейзи лоадинг
import {lazy} from 'react'

export const MainPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500)
})) // теперь этот компонент будет подгружаться только когда будет 
                                                  // переход на его ссылку,А не во время открытия приложения