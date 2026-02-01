import React, { useEffect, useRef, useState } from 'react';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { mockData } from '../mock';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  // Only show Volunteering experiences
  const volunteeringExperience = experience.filter(exp => exp.type === 'Volunteering');

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Volunteering
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Giving back to the community through meaningful contributions
            </p>
          </div>

          {/* Volunteering Cards */}
          <div className="space-y-6">
            {volunteeringExperience.map((exp, index) => (
              <div
                key={exp.id}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2.5 bg-gradient-to-br from-coral-500 to-coral-600 rounded-lg">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-coral-400 transition-colors leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-coral-300 font-semibold text-sm mt-1">{exp.company}</p>
                        </div>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-coral-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-coral-400" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge className="bg-coral-500/20 text-coral-300 border-coral-500/30 font-semibold">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 pl-0 md:pl-14">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-coral-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 to-coral-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
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
