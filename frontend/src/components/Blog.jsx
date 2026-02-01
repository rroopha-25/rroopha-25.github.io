import React, { useEffect, useRef, useState } from 'react';
import { Badge } from './ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { mockData } from '../mock';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const sectionRef = useRef(null);
  const { blogs } = mockData;

  // Blog cover images - vibrant and attention-grabbing
  const blogImages = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', // Team collaboration
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // Data analytics
  ];

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
      id="blog"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-500/10 border border-coral-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-coral-400" />
              <span className="text-coral-300 text-sm font-medium">Latest Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6">
              Blog
            </h2>
            <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Thoughts on product management, strategy, and lessons learned
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="relative rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-coral-400/50 hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col group-hover:scale-[1.02]"
                  onClick={() => setSelectedBlog(blog)}
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img 
                      src={blogImages[index] || blogImages[0]}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    
                    {/* Category Badge on Image */}
                    <Badge className="absolute top-4 left-4 bg-coral-500 text-white border-0 font-bold shadow-lg px-3 py-1">
                      {blog.category}
                    </Badge>
                    
                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                      <Clock className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">{blog.readTime}</span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight group-hover:text-coral-300 transition-colors">
                        {blog.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    {/* Meta info */}
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-400 mb-3 md:mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-coral-400" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-coral-400" />
                        <span>Article</span>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4 md:mb-6 flex-grow line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-white/10 text-slate-300 border border-white/20 text-xs px-2 py-0.5 hover:bg-coral-500/20 hover:text-coral-300 hover:border-coral-400/30 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-white/5 text-slate-500 border-0 text-xs">
                          +{blog.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Read More CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-coral-400 font-semibold text-sm md:text-base group-hover:gap-3 transition-all">
                        <span>Read Full Post</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-coral-500/20 flex items-center justify-center group-hover:bg-coral-500 transition-colors">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-coral-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Detail Modal - Fully Responsive */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 md:p-4 bg-slate-950/95 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-slate-900 rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 my-2 md:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
              <img 
                src={blogImages[blogs.indexOf(selectedBlog)] || blogImages[0]}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 md:top-6 md:right-6 p-2 md:p-3 bg-black/50 hover:bg-black/70 backdrop-blur-xl rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <Badge className="bg-coral-500 text-white border-0 mb-3 md:mb-4 font-semibold">
                  {selectedBlog.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 md:mb-4">
                  {selectedBlog.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-coral-400" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-coral-400" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6 lg:p-8">
              <div className="prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
                {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                {selectedBlog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-coral-500/10 text-coral-300 border border-coral-500/20 text-xs md:text-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
