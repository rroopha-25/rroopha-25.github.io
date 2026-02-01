import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
import { mockData } from '../mock';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { hero } = mockData;
  const { isDarkMode } = useTheme();

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
    <section className={`hero-section relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900' 
        : 'bg-gradient-to-br from-white via-rose-50 to-blue-50'
    }`}>
      
      {/* Simple gradient background */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900' 
          : 'bg-gradient-to-br from-white via-rose-50 to-blue-50'
      }`}></div>
      
      {/* Subtle accent glow */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full filter blur-[150px] ${
        isDarkMode ? 'bg-coral-500/10' : 'bg-coral-500/20'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full filter blur-[120px] ${
        isDarkMode ? 'bg-navy-500/20' : 'bg-blue-500/10'
      }`}></div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Status Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border mb-6 text-sm ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-slate-900/5 border-slate-900/10'
              }`}
            >
              <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Available for opportunities</span>
            </div>

            {/* Main heading - Clean & Clear */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tight leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {hero.name.split(' ')[0]}
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight">
              <span className="text-coral-400">
                {hero.name.split(' ')[1]}
              </span>
            </h1>

            {hero.title && (
              <p className={`text-xl md:text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                {hero.title}
              </p>
            )}
            
            <p className={`text-base md:text-lg mb-3 max-w-xl mx-auto lg:mx-0 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {hero.subtitle}
            </p>

            <p className={`text-sm md:text-base max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {hero.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="px-8 py-6 text-base font-bold rounded-xl bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white shadow-xl shadow-coral-500/25 hover:shadow-coral-500/40 transition-all duration-300 hover:scale-105 border-0"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className={`px-8 py-6 text-base font-bold rounded-xl backdrop-blur-xl border-2 transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-coral-400' 
                    : 'bg-slate-900/5 border-slate-300 text-slate-800 hover:bg-slate-900/10 hover:border-coral-400'
                }`}
              >
                Let's Connect
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-coral-400 group-hover:text-coral-300 transition-colors" />
                    <span className="text-sm text-white font-medium hidden sm:inline">{item.text}</span>
                    <span className="text-sm text-white font-medium sm:hidden">{item.shortText}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Animated Illustration */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating outer ring */}
                <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-coral-500/20 animate-spin-slow"></div>
                {/* Counter-rotating inner ring */}
                <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-coral-400/15 animate-spin-reverse"></div>
                {/* Pulsing center glow */}
                <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] bg-coral-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
              </div>

              {/* Floating Elements around the illustration */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-coral-400 rounded-full animate-float"></div>
              <div className="absolute top-1/4 left-0 w-2 h-2 bg-coral-300 rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-coral-500/50 rounded-full animate-float"></div>
              <div className="absolute bottom-10 left-10 w-2 h-2 bg-white/50 rounded-full animate-float-delayed"></div>

              {/* Main Illustration - Product Manager themed SVG */}
              <svg 
                viewBox="0 0 400 400" 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background circle */}
                <circle cx="200" cy="200" r="150" fill="url(#bgGradient)" className="animate-pulse-subtle"/>
                
                {/* Dashboard/Analytics representation */}
                <g className="animate-float-subtle">
                  {/* Main screen */}
                  <rect x="120" y="100" width="160" height="120" rx="8" fill="#1e293b" stroke="#ff6b7f" strokeWidth="2"/>
                  
                  {/* Screen content - bar chart */}
                  <rect x="135" y="130" width="20" height="60" rx="2" fill="#ff6b7f" className="animate-grow-bar-1"/>
                  <rect x="165" y="145" width="20" height="45" rx="2" fill="#ff8a9d" className="animate-grow-bar-2"/>
                  <rect x="195" y="120" width="20" height="70" rx="2" fill="#ff6b7f" className="animate-grow-bar-3"/>
                  <rect x="225" y="135" width="20" height="55" rx="2" fill="#ff8a9d" className="animate-grow-bar-4"/>
                  <rect x="255" y="150" width="20" height="40" rx="2" fill="#ff6b7f" className="animate-grow-bar-1"/>
                  
                  {/* Line on chart */}
                  <path d="M135 160 L165 145 L195 130 L225 150 L255 140 L275 155" 
                        fill="none" 
                        stroke="#60a5fa" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className="animate-draw-line"/>
                </g>

                {/* Floating cards */}
                <g className="animate-float-card-1">
                  <rect x="80" y="180" width="60" height="45" rx="6" fill="#1e293b" stroke="#ff6b7f" strokeWidth="1.5"/>
                  <circle cx="100" cy="195" r="8" fill="#ff6b7f"/>
                  <rect x="90" y="210" width="40" height="4" rx="2" fill="#475569"/>
                </g>

                <g className="animate-float-card-2">
                  <rect x="260" y="200" width="60" height="45" rx="6" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.5"/>
                  <rect x="270" y="212" width="25" height="3" rx="1.5" fill="#60a5fa"/>
                  <rect x="270" y="220" width="40" height="3" rx="1.5" fill="#475569"/>
                  <rect x="270" y="228" width="30" height="3" rx="1.5" fill="#475569"/>
                </g>

                {/* Gear/Settings icon */}
                <g className="animate-spin-gear" style={{ transformOrigin: '320px 120px' }}>
                  <circle cx="320" cy="120" r="20" fill="none" stroke="#ff6b7f" strokeWidth="3"/>
                  <circle cx="320" cy="120" r="8" fill="#ff6b7f"/>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <rect 
                      key={i}
                      x="316" 
                      y="96" 
                      width="8" 
                      height="8" 
                      rx="1"
                      fill="#ff6b7f"
                      transform={`rotate(${angle} 320 120)`}
                    />
                  ))}
                </g>

                {/* Checkmark/Success icon */}
                <g className="animate-bounce-subtle">
                  <circle cx="90" cy="130" r="18" fill="#10b981"/>
                  <path d="M80 130 L87 137 L100 122" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>

                {/* Lightbulb - Ideas */}
                <g className="animate-glow">
                  <ellipse cx="310" cy="270" rx="15" ry="18" fill="#fbbf24"/>
                  <rect x="303" y="285" width="14" height="8" rx="2" fill="#fbbf24"/>
                  <path d="M300 270 Q310 250 320 270" fill="none" stroke="#fbbf24" strokeWidth="2"/>
                </g>

                {/* Connecting dots/nodes */}
                <circle cx="150" cy="280" r="6" fill="#ff6b7f" className="animate-pulse"/>
                <circle cx="250" cy="280" r="6" fill="#60a5fa" className="animate-pulse-delayed"/>
                <line x1="156" y1="280" x2="244" y2="280" stroke="#475569" strokeWidth="1" strokeDasharray="4 4"/>

                {/* Gradients */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b"/>
                    <stop offset="100%" stopColor="#0f172a"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="group p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-coral-500/20 hover:border-coral-400 transition-all duration-300 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 text-white group-hover:text-coral-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
