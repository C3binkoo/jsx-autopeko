import React from 'react';
import GlobalStyle from './globalStyles';
import { Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import GalleryPage from './pages/GalleryPage/Gallery';
import MapPage from './components/Map/MapSection';
import OffersPage from './components/OffersSection/OffersSection';
import AboutPage from './components/InfoSection/InfoSection';
import BackToTopButton from './components/Features/BackToTop/BackToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTopButton />
      <GlobalStyle />
      <Routes> {/* Switch is replaced by Routes */}
        <Route path="/" element={<Home />} /> {/* component is replaced by element */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/services" element={<OffersPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;