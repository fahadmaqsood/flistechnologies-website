import './App.css'
import AppNavbar from './component/AppNavbar'
import Footer from './component/Footer'
import AboutUs from './component/Home/AboutUs'
import Contact from './component/Home/Contact'
import HeroSection from './component/Home/HeroSection'
import Projects from './component/Home/Projects'
import Reviews from './component/Home/Reviews'
import Services from './component/Home/Services'

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
