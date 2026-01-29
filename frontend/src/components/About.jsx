import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { about } = mockData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              About Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Summary */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-xl hover:border-coral-300 transition-all duration-300">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {about.summary}
                </p>
              </Card>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Highlights
              </h3>
              <div className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 transform ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;