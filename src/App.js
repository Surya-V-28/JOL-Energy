import React, { useState, useEffect } from 'react';

import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// All pages
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import GetInvolved from './pages/GetInvolved';
import BlogHome from './components/BlogHome';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';
import LoadingPage from './components/LoadingPage'; // Import the LoadingPage

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle('LearnLift Home | NGO');

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-donate" element={<DemoProduct />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/blog" element={<BlogHome />} />
              <Route path="/blog/1" element={<BlogPost1 />} />
              <Route path="/blog/2" element={<BlogPost2 />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ScrollToTop>
        </Router>
      )}
    </>
  );
}

export default App;
