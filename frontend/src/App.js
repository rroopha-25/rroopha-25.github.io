import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;