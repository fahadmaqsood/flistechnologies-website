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

function FaviconIcons() {
  // Create the <link> elements
  const appleTouchIcon = document.createElement("link");
  appleTouchIcon.rel = "apple-touch-icon";
  appleTouchIcon.sizes = "180x180";
  appleTouchIcon.href = "/apple-touch-icon.png";

  const favicon32 = document.createElement("link");
  favicon32.rel = "icon";
  favicon32.type = "image/png";
  favicon32.sizes = "32x32";
  favicon32.href = "/favicon-32x32.png";

  const favicon16 = document.createElement("link");
  favicon16.rel = "icon";
  favicon16.type = "image/png";
  favicon16.sizes = "16x16";
  favicon16.href = "/favicon-16x16.png";

  const siteManifest = document.createElement("link");
  siteManifest.rel = "manifest";
  siteManifest.href = "/site.webmanifest";

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/x-icon";
  favicon.href = "/favicon.ico";

  // Append the elements to the <head>
  document.head.append(
    appleTouchIcon,
    favicon,
    favicon32,
    favicon16,
    siteManifest
  );
}

function App() {
  document.title = "Flis Technologies";

  FaviconIcons();

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
