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
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-8"></div>

            {/* Tab Selector */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('Professional')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'Professional'
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => setActiveTab('Volunteering')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'Volunteering'
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                }`}
              >
                Volunteering
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-400 to-pink-200"></div>

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
                        className={`p-6 border-pink-200 hover:shadow-xl transition-all duration-300 bg-white group ${
                          index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                        }`}
                      >
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Building2 className="w-4 h-4 text-pink-500" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-pink-500" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-pink-500" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-pink-200 hover:border-pink-400 transition-colors duration-200"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <Badge
                          variant="secondary"
                          className="mt-4 bg-pink-100 text-pink-700 border-pink-200"
                        >
                          {exp.type}
                        </Badge>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>
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