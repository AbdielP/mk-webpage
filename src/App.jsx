import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Servicios from './components/Servicios/Servicios'
import Ubicacion from './components/Ubicacion'

function App() {
  return (
    <div className='app'>
      <Header />
      <Servicios />
      <Ubicacion />
      <Footer />
    </div>
  )
}

export default App
