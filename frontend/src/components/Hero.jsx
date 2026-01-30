import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { hero } = mockData;

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900">
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large coral orb - top right */}
        <div 
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-coral-500/30 via-coral-400/20 to-transparent rounded-full animate-float-orb animate-pulse-glow"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        ></div>
        
        {/* Medium navy orb - bottom left */}
        <div 
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-navy-600/25 via-blue-500/15 to-transparent rounded-full animate-float-orb-reverse animate-pulse-glow"
          style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        ></div>
        
        {/* Small coral orb - center left */}
        <div 
          className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-gradient-to-r from-coral-400/20 to-pink-500/10 rounded-full animate-float-orb-slow animate-pulse-glow"
          style={{ animationDelay: '4s', transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
        ></div>
        
        {/* Accent orb - top center */}
        <div 
          className="absolute top-20 left-1/2 w-[200px] h-[200px] bg-gradient-to-b from-coral-500/15 to-transparent rounded-full animate-float-orb"
          style={{ animationDelay: '1s', transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)` }}
        ></div>
      </div>

      {/* Animated Geometric Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coral-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255, 107, 127, 0.3)" />
            <stop offset="70%" stopColor="rgba(255, 107, 127, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="navy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(30, 58, 138, 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Horizontal accent lines */}
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#coral-gradient)" strokeWidth="1" className="animate-line-draw" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#coral-gradient)" strokeWidth="1" className="animate-line-draw" style={{ animationDelay: '0.5s' }} />
        
        {/* Diagonal lines */}
        <line x1="0" y1="100%" x2="40%" y2="0" stroke="url(#navy-gradient)" strokeWidth="1" className="animate-line-draw opacity-50" style={{ animationDelay: '1s' }} />
        <line x1="60%" y1="100%" x2="100%" y2="0" stroke="url(#navy-gradient)" strokeWidth="1" className="animate-line-draw opacity-50" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Rotating Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div className="w-full h-full rounded-full border border-coral-500/30 animate-rotate-ring"></div>
        <div className="absolute inset-8 rounded-full border border-coral-400/20 animate-rotate-ring" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
        <div className="absolute inset-16 rounded-full border border-navy-400/20 animate-rotate-ring" style={{ animationDuration: '30s' }}></div>
      </div>

      {/* Twinkling Stars/Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-coral-400 rounded-full ${
              i % 3 === 0 ? 'animate-twinkle' : i % 3 === 1 ? 'animate-twinkle-delayed' : 'animate-twinkle-slow'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.4,
              transform: `scale(${0.5 + Math.random() * 1})`,
            }}
          ></div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`navy-${i}`}
            className={`absolute w-1.5 h-1.5 bg-white rounded-full ${
              i % 2 === 0 ? 'animate-twinkle' : 'animate-twinkle-slow'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30"></div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/20 to-navy-950/60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Status Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6 md:mb-8 hover:scale-105 transition-transform text-xs md:text-sm"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Available for opportunities</span>
          </div>

          {/* Main heading with staggered animation */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-3 md:mb-4 tracking-tight leading-none px-4">
            <span 
              className={`inline-block transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              {hero.name.split(' ')[0]}
            </span>
            <br />
            <span 
              className={`inline-block bg-gradient-to-r from-coral-400 via-coral-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              {hero.name.split(' ')[1]}
            </span>
          </h1>

          <p 
            className={`text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 px-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0.7s' }}
          >
            {hero.title}
          </p>
          
          <p 
            className={`text-lg md:text-xl lg:text-2xl text-navy-200 font-light mb-3 md:mb-4 max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '0.9s' }}
          >
            {hero.subtitle}
          </p>

          <p 
            className={`text-sm md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '1.1s' }}
          >
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '1.3s' }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="w-full sm:w-auto group relative px-8 md:px-10 py-5 md:py-7 text-base md:text-lg font-bold rounded-2xl bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white shadow-2xl shadow-coral-500/30 hover:shadow-coral-500/50 transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coral-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <div 
            className={`flex flex-wrap justify-center gap-2 md:gap-3 px-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '1.5s' }}
          >
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
          className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1.7s' }}
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
