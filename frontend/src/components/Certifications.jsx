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
      className="py-24 px-6 bg-gradient-to-b from-blue-100 via-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Certifications & Education
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-br from-coral-500 to-pink-500 rounded-xl shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className={`p-4 border-2 border-blue-200 hover:shadow-lg hover:scale-105 hover:border-coral-400 transition-all duration-300 bg-gradient-to-br from-white to-blue-50 cursor-pointer ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-br from-coral-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-900 font-semibold">{cert}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className={`p-6 border-2 border-blue-300 hover:shadow-lg hover:scale-105 hover:border-coral-400 transition-all duration-300 bg-gradient-to-br from-white to-blue-50 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-800 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-coral-100 to-pink-100 text-coral-800 border-coral-300 font-medium"
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