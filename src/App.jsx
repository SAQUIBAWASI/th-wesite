import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from "./components/ScrollToTop"; // 👈 fixed
import AboutPage from './pages/AboutPage';
import CommunityHealthCamps from './pages/CommunityHealthCamps';
import ContactPage from './pages/ContactPage';
import CroporateHealthPrograms from './pages/CorporateHealthPrograms';
import DoctorConsultations from './pages/DoctorConsultations';
import HomeDiagnostics from './pages/HomeDiagnostics';
import HomePage from './pages/HomePage';
import Secondopinions from './pages/Secondopinions';
import ServicesPage from './pages/ServicesPage';
import WellnessSessions from './pages/WellnessSessions';
import WhoWeServePage from './pages/WhoWeServePage';

function App() {
  return (
    <Router>
      {/* 👇 Global Scroll Reset */}
      <ScrollToTop />

      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/who-we-serve" element={<WhoWeServePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/second-opinions" element={<Secondopinions />} />
          <Route path="/home-diagnostics" element={<HomeDiagnostics />} />
          <Route path="/wellness-sessions" element={<WellnessSessions />} />
          <Route path="/community-health-camps" element={<CommunityHealthCamps />} />
          <Route path="/doctor-consultations" element={<DoctorConsultations />} />
          <Route path="/corporate-health-programs" element={<CroporateHealthPrograms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
