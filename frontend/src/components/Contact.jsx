import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
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
      className="py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-pink-100"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about product management and business systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
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
              <Card className="p-6 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-gray-900 font-medium">{hero.email}</p>
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
              <Card className="p-6 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-gray-900 font-medium">{hero.phone}</p>
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
              <Card className="p-6 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                    <p className="text-gray-900 font-medium">Connect on LinkedIn</p>
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
              <Card className="p-6 border-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors duration-300">
                    <Github className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">GitHub</p>
                    <p className="text-gray-900 font-medium">View my work</p>
                  </div>
                </div>
              </Card>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-pink-200">
            <p className="text-gray-600">
              © 2025 {hero.name}. Built with passion for creating impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;