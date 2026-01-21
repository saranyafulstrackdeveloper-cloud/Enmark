import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Milestone } from './components/pages/Milestone';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { ElectricalNeeds } from './components/pages/ElectricalNeeds';
import { WhatWeDo } from './components/pages/WhatWeDo';
import { OurTeam } from './components/pages/OurTeam';
import { ConnectWithUs } from './components/pages/ConnectWithUs';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/electrical-needs" element={<ElectricalNeeds />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/connect" element={<ConnectWithUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
