import './App.css';
import "./js/main";
import React, { useEffect } from 'react';
import "./style.css";
import "./css/vendors/aos.css";
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import Theme from './Pages/Theme';
import Contact from './Pages/Contact';
import AOS from 'aos';
import Project from "./Pages/Project";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import View2 from './Pages/View2';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/error' element={<Error404 />} />
          <Route exact path='/themes' element={<Theme />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/download' element={<View2 />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
