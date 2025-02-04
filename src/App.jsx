import "./App.css";
import AppNavbar from "./component/AppNavbar";
import InfoBanner from "./component/InfoBanner";
import Footer from "./component/Footer";
import AbooutPage from "./Pages/AbooutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProjectPage from "./Pages/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  document.title = "Flis Technologies";

  return (
    <>
      <Router>
        <InfoBanner />
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AbooutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* <Route path='/products' element={<ProductPage />} /> */}
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
