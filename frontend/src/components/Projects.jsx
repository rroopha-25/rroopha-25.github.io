import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle2,
  Zap,
  BarChart3,
  Lightbulb
} from 'lucide-react';
import { mockData } from '../mock';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const { projects } = mockData;

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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-section py-32 px-6 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 relative overflow-hidden"
    >
      {/* Brilliant Blue Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-indigo-500/10 rounded-full filter blur-[60px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5Z' fill='none' stroke='%233b82f6' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(59, 130, 246, 0.1) 50px, rgba(59, 130, 246, 0.1) 51px)'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/5 w-2 h-2 bg-blue-400/50 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-300/40 rounded-full animate-twinkle"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/50 rounded-full animate-twinkle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              Real-world case studies showcasing data-driven product strategy, cross-functional leadership, and measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative transition-all duration-700 cursor-pointer ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Glass card with image */}
                <div className="relative rounded-3xl overflow-hidden bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30">
                  {/* Project Image with overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <Badge
                      className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1.5 font-semibold shadow-lg"
                    >
                      {project.category}
                    </Badge>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm font-medium">
                        {project.company} • {project.duration}
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-200 border border-blue-400/20 hover:bg-blue-500/20 hover:text-blue-100 hover:border-blue-400/40 transition-colors text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Key Metrics Preview */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {project.impact.slice(0, 2).map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex items-start gap-2 p-3 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 border border-blue-400/20"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-100 leading-tight font-medium">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="w-full text-blue-300 hover:text-blue-200 hover:bg-blue-500/15 transition-colors font-semibold rounded-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Full Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/90 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gradient-to-b from-blue-900 to-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-96 bg-gradient-to-br from-blue-900 to-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-transparent"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-xl rounded-full border border-blue-400/30 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4 px-4 py-1.5 font-semibold shadow-lg border-0">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-5xl font-black text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-200 text-lg">
                  {selectedProject.role} • {selectedProject.company}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 bg-gradient-to-b from-blue-900/50 to-slate-900">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-500/15 text-blue-200 border border-blue-400/25 hover:bg-blue-500/25 hover:text-blue-100"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Challenge */}
              <div className="mb-8 p-6 rounded-2xl bg-blue-950/50 backdrop-blur-xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  The Challenge
                </h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8 p-6 rounded-2xl bg-blue-950/50 backdrop-blur-xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  Solution Approach
                </h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  Business Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.impact.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-5 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 border border-blue-400/25 hover:border-blue-400/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-100 font-medium leading-relaxed">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional sections */}
              {selectedProject.keyDecisions && (
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Key Product Decisions
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.keyDecisions.map((decision, index) => (
                      <p key={index} className="text-blue-100 leading-relaxed pl-4 border-l-2 border-blue-400">
                        {decision}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.principles && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Product Principles Applied
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.principles.map((principle, index) => (
                      <p key={index} className="text-blue-100 leading-relaxed pl-4 border-l-2 border-cyan-400">
                        {principle}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
