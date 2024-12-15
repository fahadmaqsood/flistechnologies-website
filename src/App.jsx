import './App.css'
import AppNavbar from './component/AppNavbar'
import Footer from './component/Footer'
import AbooutPage from './Pages/AbooutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about-us' element={<AbooutPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
