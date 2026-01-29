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
      color: 'pink',
    },
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      color: 'pink',
    },
    {
      title: 'Business Analysis',
      icon: LineChart,
      skills: skills.businessAnalysis,
      color: 'pink',
    },
    {
      title: 'Platforms & Tools',
      icon: Settings,
      skills: skills.platforms,
      color: 'pink',
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card
                  key={categoryIndex}
                  className={`p-8 border-blue-200 hover:shadow-xl hover:scale-105 hover:border-coral-300 transition-all duration-300 bg-white ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 bg-pink-50 text-gray-700 border border-pink-200 hover:bg-pink-100 hover:border-pink-300 transition-all duration-200 text-sm"
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