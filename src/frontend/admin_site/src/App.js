import './css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import EventList from "./components/event/EventList"
import EventEdit from './components/event/EventEdit'
import SportList from './components/sport/SportList'
import SportEdit from './components/sport/SportEdit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>hello</h1>}/>
          <Route path="/events" element={<EventList/>}/>
          <Route path="/events/:uuid" element={<EventEdit/>}/>
          <Route path="/events/new" element={<EventEdit/>}/>
          <Route path="/sports" element={<SportList/>}/>
          <Route path="/sports/:id" element={<SportEdit/>}/>
          <Route path="/sports/new" element={<SportEdit/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
