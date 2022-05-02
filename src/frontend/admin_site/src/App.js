import './css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
