import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './styles/theme/ThemeProvider'
import BgColorProvider from './styles/color/ColorProvider'

render(
  <BrowserRouter>
    <ThemeProvider>
      <BgColorProvider>
        <App />
      </BgColorProvider>      
    </ThemeProvider>    
  </BrowserRouter>,
document.getElementById('root'))
