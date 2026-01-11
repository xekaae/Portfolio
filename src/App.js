import React, { useState, useEffect } from 'react';
import { Play, Mail, Instagram, Youtube, Linkedin, ArrowRight, Sparkles, Facebook } from 'lucide-react';

export default function VideoEditorPortfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mahito (Shoko Remake)",
      category: "Music Sync Edit",
      year: "2025",
      thumbnail: "https://img.youtube.com/vi/M_tSvfBcIBU/hqdefault.jpg",
      link: "https://www.youtube.com/shorts/M_tSvfBcIBU",
      description: "Transitions, masking, VFX with CRT effects synced to music"
    },
    {
      id: 2,
      title: "Animation Practice (Shoko Remake)",
      category: "2D Animation",
      year: "2025",
      thumbnail: "https://img.youtube.com/vi/wbIOHrKOjIY/maxresdefault.jpg",
      link: "https://www.youtube.com/shorts/wbIOHrKOjIY",
      description: "Manga character animation using puppet tool and layering"
    },
    {
      id: 3,
      title: "Grimes",
      category: "Motion Tracking",
      year: "2026",
      thumbnail: "https://img.youtube.com/vi/1GWAjpbPnUU/maxresdefault.jpg",
      link: "https://www.youtube.com/shorts/1GWAjpbPnUU",
      description: "Mask tracking and rotoscoping for perspective shift"
    },
    {
      id: 4,
      title: "POV: When a Cat is Hungry",
      category: "Stylized Edit",
      year: "2026",
      thumbnail: "https://img.youtube.com/vi/pveHhpRJWvc/hqdefault.jpg",
      link: "https://www.youtube.com/shorts/pveHhpRJWvc",
      description: "Backrooms inspired aesthetic with creative color correction"
    },
    {
      id: 5,
      title: "Car Edit",
      category: "3D Tracking",
      year: "2025",
      thumbnail: "https://i.imgur.com/UZahD9j.jpeg",
      link: "https://www.instagram.com/p/DSyPwAFE1uQ/",
      description: "3D camera text tracking with speedramp and rotoscoping"
    },
    {
      id: 6,
      title: "Freeze Frame",
      category: "Creative Edit",
      year: "2025",
      thumbnail: "https://i.imgur.com/ZBmcgFN.jpeg",
      link: "https://www.instagram.com/p/DS6PxV7CRH0/",
      description: "Time manipulation with morph transitions synced to beat"
    },
    {
      id: 7,
      title: "Wuthering Waves – Saving Pulls",
      category: "Gaming Content",
      year: "2025",
      thumbnail: "https://img.youtube.com/vi/mjafBBZ97sw/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=mjafBBZ97sw",
      description: "Gameplay with background music and seamless transitions"
    },
    {
      id: 8,
      title: "INTRO",
      category: "Gaming Content",
      year: "2025",
      thumbnail: "https://img.youtube.com/vi/-QKYhcdNLCY/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=-QKYhcdNLCY",
      description: "Gameplay Introduction",
      scale: "scale-105"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-40 pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px]"
          style={{
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
          }}
        ></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Glass Navigation */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 px-4 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl max-w-[95vw]">
        <div className="flex items-center gap-3 md:gap-8">
          <div className="text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-light whitespace-nowrap">VIDEO EDITOR</div>
          <div className="flex gap-3 md:gap-6 text-[9px] md:text-xs tracking-wider font-light">
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors whitespace-nowrap">Projects</button>
            <button onClick={() => document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors whitespace-nowrap">Feedback</button>
            <button onClick={() => document.getElementById('stats').scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors whitespace-nowrap">About</button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors whitespace-nowrap">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative px-4 md:px-8">
        <div className="relative z-10 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 md:px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-purple-400" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase">Open for Commissions</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-extralight mb-4 md:mb-6 leading-[1.1] tracking-tighter overflow-visible">
            <span className="block text-white mb-2">Xeka</span>
            {/* GRADIENT UPDATED: via-45% and to-80% pulls the blue further in to match the contact section */}
            <span className="bg-gradient-to-r from-purple-500 from-0% via-pink-400 via-45% to-blue-400 to-80% bg-clip-text text-transparent inline-block px-8 pb-10 pt-2 -mt-2">
              Creative
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl font-light text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed">
            Crafting <span className="text-white">standout content</span> through <span className="text-white">creative vision</span> and <span className="text-white">seamless execution</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm tracking-wider font-light">
                See Projects
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <span className="text-xs md:text-sm tracking-wider font-light">Get in Touch</span>
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section id="stats" className="py-16 md:py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { number: `${projects.length}+`, label: "Projects Created" },
              { number: "5.4K+", label: "Total Video Views" },
              { number: "2+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="group p-6 md:p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-extralight mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                <div className="text-xs md:text-sm tracking-widest text-gray-400 group-hover:text-purple-400 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 md:py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Portfolio</div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${project.scale || ''}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                    <Play className="w-5 h-5 md:w-6 md:h-6 rotate-90 group-hover:rotate-0 transition-transform duration-500" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="text-xs tracking-wider text-purple-400 mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.category}</div>
                  <h3 className="text-xl md:text-2xl font-light mb-1 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.description}</p>
                  <div className="text-sm text-gray-400 group-hover:translate-x-2 transition-transform duration-300">{project.year}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="feedback" className="py-16 md:py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Client Feedback</div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight mb-12 md:mb-20">Testimonials</h2>
          <div className="p-12 md:p-20 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 max-w-8xl mx-auto">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mx-auto mb-6 opacity-50" />
            <h3 className="text-2xl md:text-3xl font-light mb-4 text-gray-300">Coming Soon</h3>
            <p className="text-base md:text-lg text-gray-400 font-light">Currently building my client portfolio. Check back soon for testimonials.</p>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-16 md:py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 lg:p-16 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">
            <div className="mb-12 md:mb-16 text-center">
              <div className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Expertise</div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extralight">Creative Toolkit</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              {[
                { name: "Adobe After Effects", level: "Advanced" },
                { name: "DaVinci Resolve Studio", level: "Intermediate" },
                { name: "Adobe Premiere Pro", level: "Intermediate" },
                { name: "Adobe Photoshop", level: "Intermediate" },
                { name: "Color Grading", level: "Beginner" },
                { name: "Motion Graphics", level: "Beginner" },
                { name: "TouchDesigner", level: "Offering soon..." },
                { name: "Live2d Cubism", level: "Offering soon..." },
                { name: "Sound Design", level: "Offering soon..." },
                { name: "VFX Compositing", level: "Offering soon..." }
              ].map((skill, i) => (
                <div key={i} className="group flex justify-between items-center py-4 md:py-6 px-4 md:px-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:translate-x-2 transition-all duration-300">
                  <span className="text-base md:text-xl font-light group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                  <span className="text-[10px] md:text-xs tracking-wider text-gray-400 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-xl bg-black/20 border border-white/20">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-40 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-16 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-6 md:mb-8 uppercase">Let's Collaborate</div>
            
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extralight mb-6 leading-tight overflow-visible">
              Have a project<br/>
              {/* CONTACT GRADIENT: matches the new logic */}
              <span className="bg-gradient-to-r from-purple-500 from-0% via-pink-400 via-45% to-blue-400 to-80% bg-clip-text text-transparent inline-block px-8 pb-6 pt-2">
                in mind?
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-xl mx-auto font-light">
              I'm always excited to collaborate on new creative projects
            </p>
            
            <a href="mailto:janvhersarmiento@gmail.com" className="inline-block text-lg md:text-2xl font-light mb-8 md:mb-12 hover:text-purple-400 transition-colors break-all">
              janvhersarmiento@gmail.com
            </a>
            
            <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/xeka.ae/" },
                { icon: Youtube, href: "https://www.youtube.com/@xx3kae" },
                { icon: Facebook, href: "https://www.facebook.com/janvherlucas.sarmiento/reels/" },
                { icon: Mail, href: "mailto:janvhersarmiento@gmail.com" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-12 md:h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-xl bg-white/5 py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs md:text-sm text-gray-500 font-light">
          <div>© 2026 All Rights Reserved</div>
          <div className="tracking-widest uppercase">Video Editor</div>
        </div>
      </footer>
    </div>
  );
}