import React, { useEffect, useRef, useState } from 'react';
import { Badge } from './ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const sectionRef = useRef(null);
  const { blogs } = mockData;

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
              Blog
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-coral-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Thoughts on product management, strategy, and lessons learned
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-coral-400/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedBlog(blog)}
                >
                  {/* Category Badge */}
                  <Badge className="absolute top-6 right-6 bg-coral-500/20 text-coral-300 border-coral-500/30 font-semibold">
                    {blog.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-coral-400 transition-colors pr-20">
                    {blog.title}
                  </h3>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-coral-400" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-coral-400" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-white/10 text-slate-400 border border-white/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-coral-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Read Full Post</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral-500 to-coral-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 p-8 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Badge className="bg-coral-500/20 text-coral-300 border-coral-500/30 mb-4 font-semibold">
                {selectedBlog.category}
              </Badge>
              <h2 className="text-4xl font-black text-white mb-4 pr-16">
                {selectedBlog.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-coral-400" />
                  <span>{selectedBlog.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-coral-400" />
                  <span>{selectedBlog.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="prose prose-invert prose-lg max-w-none">
                {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/10">
                {selectedBlog.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/10 text-slate-300 border border-white/20"
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