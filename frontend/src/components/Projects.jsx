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
      className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world case studies showcasing data-driven product strategy, cross-functional leadership, and measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`group relative overflow-hidden border-2 border-blue-100 hover:border-coral-400 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-coral-500 text-white border-none px-4 py-2 text-sm font-semibold"
                  >
                    {project.category}
                  </Badge>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-200 text-sm font-medium">
                      {project.company} • {project.duration}
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors text-xs"
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
                        className="flex items-start gap-2 p-3 bg-gradient-to-br from-blue-50 to-coral-50 rounded-lg"
                      >
                        <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-700 leading-tight">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full text-blue-600 hover:text-coral-600 hover:bg-coral-50 transition-colors font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-coral-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-80 bg-gradient-to-br from-blue-900 to-blue-700">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-coral-500 text-white mb-3">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-200 text-lg">
                  {selectedProject.role} • {selectedProject.company}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border border-blue-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-coral-500" />
                  The Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-coral-500" />
                  Solution Approach
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-coral-500" />
                  Business Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.impact.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-coral-50 rounded-lg border border-blue-100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional sections for some projects */}
              {selectedProject.keyDecisions && (
                <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Key Product Decisions
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.keyDecisions.map((decision, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed pl-4 border-l-2 border-coral-400">
                        {decision}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.principles && (
                <div className="mb-8 p-6 bg-coral-50 rounded-xl border border-coral-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Product Principles Applied
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.principles.map((principle, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-400">
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
