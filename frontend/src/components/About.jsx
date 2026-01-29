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
      className="py-32 px-6 bg-gradient-to-b from-leaf-50/30 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-leaf-600 to-leaf-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-leaf-500 to-leaf-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_roopha-portfolio/artifacts/cvkjcwev_ROOPA.jpeg"
                  alt="Roopha Rajagopal"
                  className="relative rounded-3xl w-full max-w-sm shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-8">
              <Card className="p-8 bg-gradient-to-br from-leaf-500 to-leaf-600 border-2 border-leaf-600 hover:shadow-2xl transition-all duration-300 rounded-3xl">
                <p className="text-white leading-relaxed text-xl font-medium">
                  {about.summary}
                </p>
              </Card>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Highlights
                </h3>
                <div className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-5 bg-white rounded-2xl border-2 border-gray-200 hover:border-leaf-500 hover:shadow-lg transition-all duration-300 ${
                        isVisible
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-leaf-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-800 text-lg font-medium">{highlight}</p>
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