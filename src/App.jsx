import "./App.css"
import "animate.css"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Servicios from "./components/Servicios/Servicios"
import Ubicacion from "./components/Ubicacion"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Servicios />
        <Ubicacion />
      </main>
      <Footer />
    </div>
  )
}

export default App
