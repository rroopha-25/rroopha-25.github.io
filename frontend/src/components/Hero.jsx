import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Github, Mail, Phone, Sparkles } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-coral-400" />
            <span className="text-sm text-white font-medium">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight leading-none">
            {hero.name.split(' ')[0]}
            <br />
            <span className="bg-gradient-to-r from-coral-400 via-pink-400 to-coral-500 bg-clip-text text-transparent">
              {hero.name.split(' ')[1]}
            </span>
          </h1>

          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
            {hero.title}
          </p>
          
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-4 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="group relative px-8 py-6 text-lg font-bold rounded-2xl bg-gradient-to-r from-coral-500 to-pink-500 hover:from-coral-600 hover:to-pink-600 text-white shadow-2xl shadow-coral-500/50 hover:shadow-coral-500/70 transition-all duration-300 hover:scale-105 border-0"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-bold rounded-2xl bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>

          {/* Contact Links - Glass Cards */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { icon: Mail, text: hero.email, href: `mailto:${hero.email}` },
              { icon: Phone, text: hero.phone, href: `tel:${hero.phone}` },
              { icon: Linkedin, text: 'LinkedIn', href: hero.linkedin },
              { icon: Github, text: 'GitHub', href: hero.github }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral-500/20"
                >
                  <Icon className="w-4 h-4 text-coral-400 group-hover:text-coral-300 transition-colors" />
                  <span className="text-sm text-white font-medium">{item.text}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('whypm')}
            className="group p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300 animate-bounce hover:animate-none"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-white group-hover:text-coral-400 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;