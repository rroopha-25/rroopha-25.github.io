import React, { useEffect, useRef, useState } from 'react';
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
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Experience
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"></div>

            {/* Tab Selector */}
            <div className="inline-flex p-2 gap-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('Professional')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'Professional'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => setActiveTab('Volunteering')}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'Volunteering'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Volunteering
              </button>
            </div>
          </div>

          {/* Compact List Layout */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {filteredExperience.map((exp, index) => (
              <div
                key={exp.id}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Compact Card */}
                <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-slate-300 font-semibold text-sm mt-1">{exp.company}</p>
                        </div>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-semibold">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Achievements - Compact List */}
                  <div className="space-y-2 pl-0 md:pl-14">
                    {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                    {exp.achievements.length > 3 && (
                      <p className="text-xs text-slate-500 italic pl-5">
                        +{exp.achievements.length - 3} more achievements
                      </p>
                    )}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
