import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Offer from './pages/offer/Offer';
import Portfolio from './pages/portolio/Portfolio';
import WeddingPhoto from './pages/weddingPhoto/WeddingPhoto';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <>
      <Navigation />
      <ParallaxProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/omnie" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/oferta" element={<Offer />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/fotografia-slubna" element={<WeddingPhoto />} />
          </Routes>
        </main>
      </ParallaxProvider>
      <footer>Footer</footer>
    </>
  );
}

export default App;
