import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { mockData } from '../mock';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Professional');
  const sectionRef = useRef(null);
  const { experience } = mockData;

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

  const filteredExperience = experience.filter(exp => exp.type === activeTab);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Experience
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full mb-8"></div>

            {/* Tab Selector */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('Professional')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'Professional'
                    ? 'bg-gradient-to-r from-coral-500 to-pink-500 text-white shadow-xl scale-105'
                    : 'bg-white text-blue-900 border-2 border-blue-300 hover:border-coral-400 hover:bg-coral-50'
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => setActiveTab('Volunteering')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'Volunteering'
                    ? 'bg-gradient-to-r from-coral-500 to-pink-500 text-white shadow-xl scale-105'
                    : 'bg-white text-blue-900 border-2 border-blue-300 hover:border-coral-400 hover:bg-coral-50'
                }`}
              >
                Volunteering
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-coral-400 via-pink-400 to-coral-300 rounded-full"></div>

            <div className="space-y-12">
              {filteredExperience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-700 transform ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : index % 2 === 0
                      ? '-translate-x-10 opacity-0'
                      : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`md:flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className="md:w-1/2">
                      <Card
                        className={`p-6 border-2 border-blue-300 hover:shadow-2xl hover:border-coral-400 transition-all duration-300 bg-gradient-to-br from-white to-blue-50 group ${
                          index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                        }`}
                      >
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-coral-600 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-800 mb-2">
                            <Building2 className="w-4 h-4 text-coral-500" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-blue-700">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-coral-500" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-coral-500" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-coral-300 hover:border-coral-500 transition-colors duration-200"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <Badge
                          variant="secondary"
                          className="mt-4 bg-gradient-to-r from-coral-100 to-pink-100 text-coral-800 border-coral-300 font-medium"
                        >
                          {exp.type}
                        </Badge>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-5 h-5 bg-gradient-to-br from-coral-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;