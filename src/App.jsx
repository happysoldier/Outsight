import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ClientConfidentiality from './pages/ClientConfidentiality';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PersonBio from './pages/PersonBio';
import PeopleList from './pages/PeopleList';
import Values from './pages/Values';
import LegalDisclaimer from './pages/LegalDisclaimer';
import CookieNotice from './pages/CookieNotice';
import ResponsibleAI from './pages/ResponsibleAI';
import SiteMap from './pages/SiteMap';
import Media from './pages/Media';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import PersonContactBio from './pages/PersonContactBio';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyModal from './components/PrivacyModal';
import './index.css';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/people" element={<PeopleList />} />
            <Route path="/about/people/:name" element={<PersonBio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/bio/:name" element={<PersonContactBio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/values" element={<Values />} />
            <Route path="/media" element={<Media />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/client-confidentiality" element={<ClientConfidentiality />} />
            <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
            <Route path="/cookie-notice" element={<CookieNotice />} />
            <Route path="/responsible-ai" element={<ResponsibleAI />} />
            <Route path="/site-map" element={<SiteMap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />
      </div>
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </Router>
  );
}

export default App;
