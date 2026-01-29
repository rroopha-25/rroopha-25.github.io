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
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
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

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_roopha-portfolio/artifacts/cvkjcwev_ROOPA.jpeg"
                  alt="Roopha Rajagopal"
                  className="relative rounded-2xl w-full max-w-sm shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              <Card className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 border-2 border-coral-300 hover:shadow-2xl hover:border-coral-400 transition-all duration-300">
                <p className="text-white leading-relaxed text-lg">
                  {about.summary}
                </p>
              </Card>

              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                  Key Highlights
                </h3>
                <div className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-coral-50 rounded-lg border-l-4 border-coral-500 hover:shadow-md transition-all duration-300 ${
                        isVisible
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-coral-500 flex-shrink-0 mt-1" />
                      <p className="text-blue-900 text-lg font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;