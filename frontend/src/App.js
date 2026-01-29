import React from 'react';
import './App.css';
import Hero from './components/Hero';
import WhyPM from './components/WhyPM';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <WhyPM />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;