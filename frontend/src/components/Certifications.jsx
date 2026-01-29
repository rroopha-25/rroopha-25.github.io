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
      className="py-24 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Certifications & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className={`p-4 border-pink-200 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white cursor-pointer ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 font-medium">{cert}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className={`p-6 border-pink-200 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-pink-100 text-pink-700 border-pink-200"
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