import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
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
      className="py-32 px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-950"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Let's Connect
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about product management and business systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Contact Cards */}
            <a
              href={`mailto:${hero.email}`}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">Email</p>
                    <p className="text-white font-bold text-lg">{hero.email}</p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href={`tel:${hero.phone}`}
              className={`transition-all duration-500 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-navy-500 to-navy-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">Phone</p>
                    <p className="text-white font-bold text-lg">{hero.phone}</p>
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
              style={{ transitionDelay: '300ms' }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">LinkedIn</p>
                    <p className="text-white font-bold text-lg">Connect on LinkedIn</p>
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
              style={{ transitionDelay: '400ms' }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-navy-500 to-navy-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">GitHub</p>
                    <p className="text-white font-bold text-lg">View my work</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-white/10">
            <p className="text-slate-400">
              © 2025 {hero.name}. Built with passion for creating impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;