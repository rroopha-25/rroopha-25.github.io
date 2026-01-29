import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Heart, Lightbulb, Target, Users } from 'lucide-react';
import { mockData } from '../mock';

const WhyPM = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { whyPM } = mockData;

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

  const iconMap = {
    heart: Heart,
    lightbulb: Lightbulb,
    target: Target,
    users: Users
  };

  return (
    <section
      id="whypm"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              {whyPM.title}
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyPM.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon];
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-2 border-blue-100 hover:border-coral-400 hover:shadow-2xl transition-all duration-500 bg-white ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-coral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-blue-900 group-hover:text-coral-600 transition-colors duration-300">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-coral-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPM;