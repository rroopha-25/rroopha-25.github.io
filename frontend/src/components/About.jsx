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
      className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6">
              About Me
            </h2>
            <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center order-first md:order-none">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-coral-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_roopha-portfolio/artifacts/cvkjcwev_ROOPA.jpeg"
                  alt="Roopha Rajagopal"
                  className="relative rounded-3xl w-full max-w-xs md:max-w-sm shadow-2xl border-4 border-slate-800"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6 md:space-y-8">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-coral-500 to-coral-600 border-2 border-coral-500 hover:shadow-2xl hover:shadow-coral-500/30 transition-all duration-300 rounded-3xl">
                <p className="text-white leading-relaxed text-base md:text-xl font-medium">
                  {about.summary}
                </p>
              </Card>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  Key Highlights
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 transition-all duration-300 ${
                        isVisible
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-coral-400 flex-shrink-0 mt-1" />
                      <p className="text-white text-base md:text-lg font-medium">{highlight}</p>
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