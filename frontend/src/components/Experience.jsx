import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react';
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
      className="py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-leaf-50/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(34_197_94/0.08)_1px,transparent_0)] [background-size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Experience
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-leaf-600 to-leaf-400 mx-auto rounded-full mb-8"></div>

            {/* Tab Selector - Modern Pills */}
            <div className="inline-flex p-2 gap-2 bg-white rounded-2xl shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('Professional')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'Professional'
                    ? 'bg-gradient-to-r from-leaf-600 to-leaf-500 text-white shadow-md scale-105'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => setActiveTab('Volunteering')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'Volunteering'
                    ? 'bg-gradient-to-r from-leaf-600 to-leaf-500 text-white shadow-md scale-105'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Volunteering
              </button>
            </div>
          </div>

          {/* Modern Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {filteredExperience.map((exp, index) => {
              // Varied card sizes for visual interest
              const isLarge = index === 0 || index === 3;
              const colSpan = isLarge ? 'lg:col-span-2' : 'lg:col-span-1';
              
              return (
                <Card
                  key={exp.id}
                  className={`group relative p-8 bg-white border-2 border-gray-200 hover:border-leaf-500 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden ${colSpan} ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Decorative corner gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-leaf-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Company Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-leaf-100 to-leaf-50 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-6 h-6 text-leaf-600" />
                    </div>
                    <Badge
                      className="bg-gray-100 text-gray-700 border border-gray-200 font-semibold px-3 py-1"
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-leaf-600 transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company & Location */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Building2 className="w-4 h-4 text-leaf-600" />
                      <span className="font-semibold text-sm">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-leaf-600" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-leaf-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements - Show first 2 for compact cards, all for large cards */}
                  <div className="space-y-3">
                    {exp.achievements.slice(0, isLarge ? undefined : 2).map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-leaf-50 transition-colors duration-200"
                      >
                        <div className="w-1.5 h-1.5 bg-leaf-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                    {!isLarge && exp.achievements.length > 2 && (
                      <p className="text-xs text-gray-500 italic pt-2">
                        +{exp.achievements.length - 2} more achievements
                      </p>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-leaf-600 to-leaf-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
