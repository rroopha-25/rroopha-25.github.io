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
      className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-40\"></div>

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
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
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
                <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-coral-500/20">
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
                      className="absolute top-4 right-4 bg-gradient-to-r from-coral-500 to-pink-500 text-white border-0 px-4 py-1.5 font-semibold shadow-lg"
                    >
                      {project.category}
                    </Badge>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-coral-400 transition-colors">
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
                          className="bg-white/10 text-slate-300 border border-white/20 hover:bg-coral-500/20 hover:text-coral-300 hover:border-coral-500/30 transition-colors text-xs"
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
                          className="flex items-start gap-2 p-3 rounded-xl bg-gradient-to-br from-coral-500/10 to-pink-500/10 border border-coral-500/20"
                        >
                          <CheckCircle2 className="w-4 h-4 text-coral-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-300 leading-tight font-medium">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="w-full text-coral-400 hover:text-coral-300 hover:bg-coral-500/10 transition-colors font-semibold rounded-xl"
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
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-coral-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-gradient-to-r from-coral-500 to-pink-500 text-white mb-4 px-4 py-1.5 font-semibold shadow-lg border-0">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-5xl font-black text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-slate-300 text-lg">
                  {selectedProject.role} • {selectedProject.company}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 bg-slate-900">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/10 text-slate-300 border border-white/20 hover:bg-coral-500/20 hover:text-coral-300 hover:border-coral-500/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Challenge */}
              <div className="mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-coral-500 to-pink-500 rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  The Challenge
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  Solution Approach
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-coral-500 to-pink-500 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  Business Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.impact.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-5 rounded-xl bg-gradient-to-br from-coral-500/10 to-pink-500/10 border border-coral-500/20 hover:border-coral-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-coral-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300 font-medium leading-relaxed">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional sections */}
              {selectedProject.keyDecisions && (
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-coral-500/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Key Product Decisions
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.keyDecisions.map((decision, index) => (
                      <p key={index} className="text-slate-300 leading-relaxed pl-4 border-l-2 border-coral-400">
                        {decision}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.principles && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-coral-500/10 to-pink-500/10 border border-coral-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Product Principles Applied
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.principles.map((principle, index) => (
                      <p key={index} className="text-slate-300 leading-relaxed pl-4 border-l-2 border-blue-400">
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
