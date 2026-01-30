import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';
import { mockData } from '../mock';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { hero } = mockData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 relative overflow-hidden"
    >
      {/* Blue Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-blue-500/15 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-cyan-500/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5Z' fill='none' stroke='%233b82f6' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Let's Connect
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about product management and business systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Contact Cards */}}
            <a
              href={`mailto:${hero.email}`}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Card className="p-6 bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-950/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl cursor-pointer group h-full">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/70 mb-1 font-medium">Email</p>
                    <p className="text-white font-bold text-lg">{hero.email}</p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Card className="p-6 bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-950/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl cursor-pointer group h-full">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/70 mb-1 font-medium">LinkedIn</p>
                    <p className="text-white font-bold text-lg">Connect with me</p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Card className="p-6 bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-950/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl cursor-pointer group h-full">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/70 mb-1 font-medium">GitHub</p>
                    <p className="text-white font-bold text-lg">View my work</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-blue-400/20">
            <p className="text-blue-200/60">
              © 2025 {hero.name}. Built with passion for creating impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;