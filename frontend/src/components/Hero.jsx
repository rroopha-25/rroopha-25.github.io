import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
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
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent rounded-full filter blur-[100px] animate-aurora-1"></div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-blue-400/15 via-cyan-500/10 to-transparent rounded-full filter blur-[80px] animate-aurora-2"></div>
          <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-gradient-to-tr from-blue-500/15 via-blue-400/10 to-transparent rounded-full filter blur-[120px] animate-aurora-3"></div>
        </div>
        
        {/* Constellation dots */}
        <div className="constellation-pattern absolute inset-0"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400/60 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-twinkle"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400/70 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-twinkle"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/30 to-[#0F172A]/60"></div>
      </div>
      
      {/* Geometric accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 md:mb-8 hover:scale-105 transition-transform text-xs md:text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-3 md:mb-4 tracking-tight leading-none px-4">
            {hero.name.split(' ')[0]}
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              {hero.name.split(' ')[1]}
            </span>
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 px-4">
            {hero.title}
          </p>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light mb-3 md:mb-4 max-w-3xl mx-auto px-4">
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
              className="w-full sm:w-auto group relative px-8 md:px-10 py-5 md:py-7 text-base md:text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 border-0"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-7 text-base md:text-lg font-bold rounded-2xl bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {[
              { icon: Mail, text: hero.email, href: `mailto:${hero.email}`, shortText: 'Email' },
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
                  className="group inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
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
            className="group p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 animate-bounce hover:animate-none"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
