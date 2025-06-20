import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PersonalBanking from './pages/services/PersonalBanking';
import BusinessBanking from './pages/services/BusinessBanking';
import Loans from './pages/services/Loans';
import CreditCards from './pages/services/CreditCards';
import Mortgages from './pages/services/Mortgages';
import Investments from './pages/services/Investments';
import Login from './pages/Login';
import OpenAccount from './pages/OpenAccount';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/personal-banking" element={<PersonalBanking />} />
          <Route path="/services/business-banking" element={<BusinessBanking />} />
          <Route path="/services/loans" element={<Loans />} />
          <Route path="/services/credit-cards" element={<CreditCards />} />
          <Route path="/services/mortgages" element={<Mortgages />} />
          <Route path="/services/investments" element={<Investments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;