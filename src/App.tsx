import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense, useContext, useState } from 'react'
import { useTheme } from './styles/theme/useTheme'
import { useBgColor } from './styles/color/useBgColor'
import { classNames } from './styles/helpers/classNames/classNames'



const App = () => {
  const {theme, toggleTheme} = useTheme()  
  const {color, hundlerColor} = useBgColor() 
 
  return (
    <div className={classNames('app', {}, [theme, color])}>
      <input type='text' onChange={(e)=> hundlerColor(e.target.value)}/>      
      <p>{color}</p>      
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={'/about'}>About</Link>        
      <Link to={'/'}>Main</Link>            
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPageAsync />}/>
            <Route path={'/'} element={<MainPageAsync />}/>
          </Routes> 
        </Suspense>                   
    </div>
  )
}

export default App
