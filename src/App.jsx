import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Horario from './components/Horario'
import Servicios from './components/Servicios/Servicios'
import Ubicacion from './components/Ubicacion'

function App() {
  return (
    <div className='app'>
      <Header />
      <Servicios />
      <Ubicacion />
      {/* <Horario /> */}
      <Footer />
    </div>
  )
}

export default App
// https://themes.vamtam.com/?theme=auto
// https://www.pngegg.com/en/search?q=mechanics