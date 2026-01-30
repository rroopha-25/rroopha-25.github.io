import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Code, LineChart, Settings } from 'lucide-react';
import { mockData } from '../mock';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { skills } = mockData;

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

  const skillCategories = [
    {
      title: 'Project & Delivery Management',
      icon: Briefcase,
      skills: skills.projectManagement,
    },
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
    },
    {
      title: 'Business Analysis',
      icon: LineChart,
      skills: skills.businessAnalysis,
    },
    {
      title: 'Platforms & Tools',
      icon: Settings,
      skills: skills.platforms,
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 relative overflow-hidden"
    >
      {/* Blue Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5Z' fill='none' stroke='%233b82f6' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card
                  key={categoryIndex}
                  className={`p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 rounded-3xl ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-4 py-2 bg-white/10 text-slate-300 border border-white/20 hover:bg-coral-500/20 hover:text-coral-300 hover:border-coral-400 transition-all duration-200 text-sm font-medium rounded-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;