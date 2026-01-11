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
      description: "Backrooms aesthetic with creative color correction"
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-40">
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
        <div className="flex items-center gap-8">
          <div className="text-xs tracking-[0.3em] font-light">VIDEO EDITOR</div>
          <div className="flex gap-6 text-xs tracking-wider font-light">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-purple-400 transition-colors"
            >
              Feedback
            </button>
            <button 
              onClick={() => document.getElementById('stats').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative px-8">
        <div className="relative z-10 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs tracking-[0.3em] text-gray-400">OPEN FOR COMMISSIONS</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extralight mb-8 leading-none tracking-tighter">
            Xeka
            <br/>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Creative
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting <span className="text-white">standout content</span> through <span className="text-white">creative vision</span> and <span className="text-white">seamless execution</span>
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              <span className="flex items-center gap-3 text-sm tracking-wider font-light">
                See Projects
                <ArrowRight className="w-4 h-4 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <span className="text-sm tracking-wider font-light">Get in Touch</span>
            </button>
          </div>
        </div>
      </header>

      {/* Stats Glass Cards */}
      <section id="stats" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: `${projects.length}+`, label: "Projects Created" },
              { number: "5.4K+", label: "Total Video Views" },
              { number: "2+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="group p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="text-6xl font-extralight mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-sm tracking-widest text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Glass Cards */}
      <section id="projects" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-4">PORTFOLIO</div>
            <h2 className="text-5xl md:text-7xl font-extralight">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${project.scale || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
                  <div className="w-16 h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                    <Play className="w-6 h-6 rotate-90 group-hover:rotate-0 transition-transform duration-500" fill="white" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs tracking-wider text-purple-400 mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.category}</div>
                  <h3 className="text-2xl font-light mb-1 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.description}</p>
                  <div className="text-sm text-gray-400 group-hover:translate-x-2 transition-transform duration-300">{project.year}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Glass Cards */}
      <section id="feedback" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-4">CLIENT FEEDBACK</div>
            <h2 className="text-5xl md:text-7xl font-extralight">Testimonials</h2>
          </div>
          
          <div className="p-20 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 text-center">
            <div className="max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6 opacity-50" />
              <h3 className="text-3xl font-light mb-4 text-gray-300">Coming Soon</h3>
              <p className="text-lg text-gray-400 font-light">
                Currently building my client portfolio. Check back soon for testimonials from satisfied collaborators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Glass Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">
            <div className="mb-16 text-center">
              <div className="text-xs tracking-[0.3em] text-gray-400 mb-4">EXPERTISE</div>
              <h2 className="text-4xl md:text-6xl font-extralight">Creative Toolkit</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "After Effects", level: "Intermediate" },
                { name: "DaVinci Resolve", level: "Intermediate" },
                { name: "Adobe Premiere Pro", level: "Intermediate" },
                { name: "Color Grading", level: "Beginner" },
                { name: "Motion Graphics", level: "Beginner" },
                { name: "Sound Design", level: "Offering soon..." },
                { name: "VFX Compositing", level: "Offering soon..." }
              ].map((skill, i) => (
                <div 
                  key={i} 
                  className="group flex justify-between items-center py-6 px-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <span className="text-xl font-light group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                  <span className="text-xs tracking-wider text-gray-400 px-4 py-2 rounded-full backdrop-blur-xl bg-black/20 border border-white/20 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Glass Card */}
      <section id="contact" className="py-40 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-16 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-400 mb-8">LET'S COLLABORATE</div>
            <h2 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
              Have a project<br/>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                in mind?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto font-light">
              I'm always excited to collaborate on new creative projects
            </p>
            
            <a 
              href="mailto:janvhersarmiento@gmail.com" 
              className="inline-block text-2xl font-light mb-12 hover:text-purple-400 transition-colors"
            >
              janvhersarmiento@gmail.com
            </a>
            
            <div className="flex justify-center gap-4 mt-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/xeka.ae/" },
                { icon: Youtube, href: "https://www.youtube.com/@xx3kae" },
                { icon: Facebook, href: "https://www.facebook.com/janvherlucas.sarmiento/reels/" },
                { icon: Mail, href: "mailto:janvhersarmiento@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-xl bg-white/5 py-8 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500 font-light">
          <div>© 2026 All Rights Reserved</div>
          <div className="tracking-widest">VIDEO EDITOR</div>
        </div>
      </footer>
    </div>
  );
}