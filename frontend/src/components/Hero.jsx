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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-coral-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-navy-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-56 md:w-80 h-56 md:h-80 bg-coral-400/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 md:mb-8 hover:scale-105 transition-transform text-xs md:text-sm">
            <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-3 md:mb-4 tracking-tight leading-none px-4">
            {hero.name.split(' ')[0]}
            <br />
            <span className="bg-gradient-to-r from-coral-400 via-coral-500 to-coral-600 bg-clip-text text-transparent">
              {hero.name.split(' ')[1]}
            </span>
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 px-4">
            {hero.title}
          </p>
          
          <p className="text-lg md:text-xl lg:text-2xl text-navy-200 font-light mb-3 md:mb-4 max-w-3xl mx-auto px-4">
            {hero.subtitle}
          </p>

          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="w-full sm:w-auto group relative px-8 md:px-10 py-5 md:py-7 text-base md:text-lg font-bold rounded-2xl bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white shadow-2xl shadow-coral-500/30 hover:shadow-coral-500/50 transition-all duration-300 hover:scale-105 border-0"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-7 text-base md:text-lg font-bold rounded-2xl bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-coral-400 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {[
              { icon: Mail, text: hero.email, href: `mailto:${hero.email}`, shortText: 'Email' },
              { icon: Phone, text: hero.phone, href: `tel:${hero.phone}`, shortText: 'Phone' },
              { icon: Linkedin, text: 'LinkedIn', href: hero.linkedin, shortText: 'LinkedIn' },
              { icon: Github, text: 'GitHub', href: hero.github, shortText: 'GitHub' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-4 h-4 text-coral-400 group-hover:text-coral-300 transition-colors" />
                  <span className="text-xs md:text-sm text-white font-medium hidden sm:inline">{item.text}</span>
                  <span className="text-xs md:text-sm text-white font-medium sm:hidden">{item.shortText}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="group p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-coral-500/20 hover:border-coral-400 transition-all duration-300 animate-bounce hover:animate-none"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-coral-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
