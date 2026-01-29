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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-pink-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 tracking-tight">
            {hero.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
            {hero.title}
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {hero.tagline}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${hero.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-gray-700 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              {hero.email}
            </a>
            <a
              href={`tel:${hero.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-gray-700 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              {hero.phone}
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-gray-700 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 text-gray-700 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('experience')}
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
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
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;