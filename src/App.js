import React from 'react';
import GlobalStyle from './globalStyles';
import { Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage/Contact';
import GalleryPage from './pages/GalleryPage/Gallery';
import MapPage from './components/Map/MapSection'
import OffersPage from './components/OffersSection/OffersSection'
import AboutPage from './components/InfoSection/InfoSection'
import BackToTopButton from './components/Features/BackToTop/BackToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTopButton />
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path='/map' component={MapPage} />
        <Route path='/services' component={OffersPage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
