import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Testimonials />
      <Contact /> 
    </main>
      <Footer />
      <ScrollUp />
    </>
  )
}
export default App
