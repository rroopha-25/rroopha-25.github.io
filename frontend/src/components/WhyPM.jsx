import React, { useEffect, useRef, useState } from 'react';
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
      className="py-32 px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              {whyPM.title}
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Four principles that drive my approach to product management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyPM.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon];
              return (
                <div
                  key={index}
                  className={`group transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-coral-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl blur-md opacity-50"></div>
                          <div className="relative p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-coral-400 transition-colors">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 to-coral-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPM;