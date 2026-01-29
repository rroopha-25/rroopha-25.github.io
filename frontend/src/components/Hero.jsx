import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { hero } = mockData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-coral-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            {hero.name}
          </h1>
          <p className="text-2xl md:text-4xl text-coral-300 font-semibold mb-3">
            {hero.title}
          </p>
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-8">
            {hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            {hero.tagline}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href={`mailto:${hero.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-coral-500 hover:border-coral-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">{hero.email}</span>
            </a>
            <a
              href={`tel:${hero.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-coral-500 hover:border-coral-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{hero.phone}</span>
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-coral-500 hover:border-coral-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-coral-500 hover:border-coral-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-coral-500 text-white hover:bg-coral-600 px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('whypm')}
            className="animate-bounce p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-coral-500 hover:border-coral-400 transition-all duration-300"
            aria-label="Scroll to why product management section"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;