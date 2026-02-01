import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Mail, Linkedin, Github, Briefcase, TrendingUp, Users, Target } from 'lucide-react';
import { mockData } from '../mock';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { hero, projects } = mockData;

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

  // Project highlights for visual display
  const projectHighlights = [
    { icon: TrendingUp, stat: '40%', label: 'Revenue Increase', color: 'from-green-500 to-emerald-500' },
    { icon: Users, stat: '1M+', label: 'Users Impacted', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, stat: '6+', label: 'Products Launched', color: 'from-coral-500 to-pink-500' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
              Let's Connect
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about product management.
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Project Impact Stats */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral-500/10 to-pink-500/5 rounded-3xl filter blur-3xl"></div>
                
                {/* Stats Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-coral-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">My Impact in Numbers</h3>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {projectHighlights.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className={`p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-coral-400/30 transition-all duration-300 text-center group ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                          }`}
                          style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-3xl font-black text-white mb-1">{item.stat}</p>
                          <p className="text-sm text-slate-400">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Featured Projects Preview */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 mb-3 text-center">Recent Projects</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {projects.slice(0, 4).map((project, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-coral-500/10 text-coral-300 text-xs font-medium rounded-full border border-coral-500/20"
                        >
                          {project.title.length > 20 ? project.title.substring(0, 20) + '...' : project.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Cards */}
            <div className="space-y-5">
              {/* Email Card */}
              <a
                href={`mailto:${hero.email}`}
                className={`block transition-all duration-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-300 rounded-2xl cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400 mb-1 font-medium">Email me at</p>
                      <p className="text-white font-bold text-lg group-hover:text-coral-400 transition-colors">{hero.email}</p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* LinkedIn Card */}
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`block transition-all duration-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-300 rounded-2xl cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Linkedin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400 mb-1 font-medium">Connect on</p>
                      <p className="text-white font-bold text-lg group-hover:text-coral-400 transition-colors">LinkedIn</p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* GitHub Card */}
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`block transition-all duration-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-300 rounded-2xl cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Github className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400 mb-1 font-medium">Check out my</p>
                      <p className="text-white font-bold text-lg group-hover:text-coral-400 transition-colors">GitHub Profile</p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* CTA Message */}
              <div 
                className={`mt-6 p-6 bg-gradient-to-r from-coral-500/10 to-pink-500/10 border border-coral-500/20 rounded-2xl transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <p className="text-slate-300 text-center leading-relaxed">
                  <span className="text-coral-400 font-semibold">Open to new opportunities!</span>
                  <br />
                  Let's discuss how I can help drive your product vision forward.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-16 mt-16 border-t border-white/10">
            <p className="text-slate-400">
              © 2025 {hero.name}. Built with passion for creating impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
