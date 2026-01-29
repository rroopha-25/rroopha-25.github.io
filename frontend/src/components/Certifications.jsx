import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Award, GraduationCap } from 'lucide-react';
import { mockData } from '../mock';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { certifications, education } = mockData;

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
      id="certifications"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Certifications & Education
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className={`p-5 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-lg transition-all duration-300 rounded-2xl cursor-pointer ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white font-semibold leading-relaxed">{cert}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-navy-500 to-navy-600 rounded-2xl shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className={`p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-lg transition-all duration-300 rounded-2xl ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-navy-300 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-coral-500/20 text-coral-300 border-coral-500/30 font-medium"
                    >
                      {edu.location}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;