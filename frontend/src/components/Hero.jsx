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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-leaf-50 to-gray-50">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-leaf-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-leaf-300 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-200 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] [background-size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-leaf-100 border border-leaf-200 mb-8 hover:scale-105 transition-transform shadow-sm">
            <div className="w-2 h-2 bg-leaf-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-700 font-semibold">Available for opportunities</span>
          </div>

          {/* Name with creative layout */}
          <div className="mb-6">
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-2 tracking-tight leading-none">
              {hero.name.split(' ')[0]}
            </h1>
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-leaf-600 via-leaf-500 to-leaf-600 bg-clip-text text-transparent tracking-tight leading-none">
              {hero.name.split(' ')[1]}
            </h1>
          </div>

          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {hero.title}
          </p>
          
          <p className="text-xl md:text-2xl text-leaf-600 font-medium mb-4 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="group relative px-10 py-7 text-lg font-bold rounded-2xl bg-gradient-to-r from-leaf-600 to-leaf-500 hover:from-leaf-700 hover:to-leaf-600 text-white shadow-xl shadow-leaf-500/30 hover:shadow-leaf-500/50 transition-all duration-300 hover:scale-105 border-0"
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="px-10 py-7 text-lg font-bold rounded-2xl bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-leaf-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Connect
            </Button>
          </div>

          {/* Contact Links - Modern Pills */}
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
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-leaf-500 hover:bg-leaf-50 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Icon className="w-4 h-4 text-leaf-600 group-hover:text-leaf-700 transition-colors" />
                  <span className="text-sm text-gray-700 font-medium">{item.text}</span>
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
            className="group p-4 rounded-full bg-white border-2 border-gray-200 hover:border-leaf-500 hover:bg-leaf-50 transition-all duration-300 animate-bounce hover:animate-none shadow-lg"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-gray-700 group-hover:text-leaf-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
