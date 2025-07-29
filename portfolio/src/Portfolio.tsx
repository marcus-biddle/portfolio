import React, { useState, useEffect } from 'react';
import { ChevronDown,  Mail, ExternalLink, Moon, Skull, Eye, Feather } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Midnight Gallery",
      description: "A haunting digital art collection platform featuring dark romanticism, shadow play, and ethereal compositions that blur the line between beauty and melancholy.",
      tech: ["React", "Three.js", "GSAP", "Node.js"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&sat=-20&con=20",
      demo: "#",
      code: "#"
    },
    {
      title: "Obsidian Archives",
      description: "An interactive gothic literature database with mood-based categorization, featuring rare texts and forgotten poems from the shadows of literary history.",
      tech: ["TypeScript", "PostgreSQL", "Express", "WebGL"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&sat=-30&con=15",
      demo: "#",
      code: "#"
    },
    {
      title: "Nocturnal Ritual Tracker",
      description: "A mystical habit tracker for night dwellers, moon phases, and seasonal rituals with celestial calendar integration and meditation timers.",
      tech: ["Vue.js", "MongoDB", "Socket.io", "Canvas"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&sat=-25&con=20",
      demo: "#",
      code: "#"
    }
  ];

  const skills = [
    { name: "Dark Arts", items: ["Shadow DOM", "CSS Necromancy", "Gothic Animations", "Midnight.js", "Obsidian CSS"], icon: Moon },
    { name: "Cryptic Code", items: ["TypeScript Runes", "React Rituals", "Node.js Séances", "GraphQL Incantations", "Python Alchemy"], icon: Skull },
    { name: "Mystic Tools", items: ["Git Grimoire", "Docker Dungeons", "AWS Abyss", "Figma Phantoms", "Jest Jinxes"], icon: Eye }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Moth SVG component
  const MothIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 150" className={className} fill="currentColor">
      {/* Moth body */}
      <ellipse cx="100" cy="75" rx="3" ry="45" className="opacity-90"/>
      
      {/* Upper wings */}
      <path d="M97 45 Q85 35 70 40 Q55 45 50 60 Q55 75 70 70 Q85 65 97 55 Z" className="opacity-80"/>
      <path d="M103 45 Q115 35 130 40 Q145 45 150 60 Q145 75 130 70 Q115 65 103 55 Z" className="opacity-80"/>
      
      {/* Lower wings */}
      <path d="M97 65 Q85 75 75 85 Q70 95 75 105 Q85 110 95 100 Q97 85 97 75 Z" className="opacity-70"/>
      <path d="M103 65 Q115 75 125 85 Q130 95 125 105 Q115 110 105 100 Q103 85 103 75 Z" className="opacity-70"/>
      
      {/* Wing patterns */}
      <circle cx="75" cy="55" r="8" className="opacity-40"/>
      <circle cx="125" cy="55" r="8" className="opacity-40"/>
      <circle cx="82" cy="85" r="5" className="opacity-30"/>
      <circle cx="118" cy="85" r="5" className="opacity-30"/>
      
      {/* Antennae */}
      <path d="M96 30 Q92 25 88 20" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-70"/>
      <path d="M104 30 Q108 25 112 20" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-70"/>
      <circle cx="88" cy="20" r="1.5" className="opacity-70"/>
      <circle cx="112" cy="20" r="1.5" className="opacity-70"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-black text-slate-200 relative overflow-hidden">
        {/* Animated background pattern */}
        {/* <div className="fixed inset-0 opacity-10">
        <div 
            className="absolute w-full h-full"
            style={{
            backgroundImage: `radial-gradient(circle at ${mousePos.x / 20}px ${mousePos.y / 20}px, rgba(139, 69, 19, 0.3) 0%, transparent 50%)`,
            transform: `translate(${mousePos.x / 100}px, ${mousePos.y / 100}px)`,
            transition: 'transform 0.3s ease-out'
            }}
        />
        <div 
            className="absolute inset-0"
            style={{
            backgroundImage: `
                linear-gradient(45deg, transparent 30%, rgba(139, 69, 19, 0.1) 32%, rgba(139, 69, 19, 0.1) 34%, transparent 36%),
                linear-gradient(-45deg, transparent 30%, rgba(101, 67, 33, 0.1) 32%, rgba(101, 67, 33, 0.1) 34%, transparent 36%)
            `,
            backgroundSize: '60px 60px'
            }}
        />
        </div> */}

      {/* Floating particles */}
      {/* <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-600 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div> */}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-black/80 backdrop-blur-md border-b border-amber-900/30">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <MothIcon className="w-8 h-8 text-amber-600" />
                <div className="text-2xl font-bold text-amber-600 font-serif tracking-wider">
                  EREBUS
                </div>
              </div>
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'works', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 hover:text-amber-500 font-serif tracking-wide ${
                      activeSection === section ? 'text-amber-500 border-b border-amber-500' : 'text-stone-300'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
        
        {/* Central Moth Mosaic */}
        <div className={`relative z-10 text-center transition-all duration-1500 delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="relative mb-12">
                {/* Decorative border */}
                <div className="absolute inset-0 border-3 border-sky-900/30 transform rotate-12 scale-140 h-screen animate-[spin_555s_linear_infinite]"></div>
                <div className="absolute inset-0 border-4 border-slate-600/40 transform -rotate-45 scale-140 h-screen"></div>
                
                {/* Main moth */}
                <div className="relative bg-gradient-to-br from-sky-900/20 via-slate-900/40 to-black/60 p-16 backdrop-blur-sm">
                    <h1 className="text-4xl leading-none md:text-7xl font-bold mb-6 text-sky-900 font-serif tracking-widest">
                        MARCUS BIDDLE
                    </h1>
                    {/* <MothIcon className="w-48 h-36 text-amber-600 mx-auto animate-pulse"  /> */}
                    
                    {/* Surrounding decorative elements */}
                    {/* <div className="absolute top-4 left-4">
                    <div className="w-3 h-3 bg-slate-600 rotate-45"></div>
                    </div>
                    <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-amber-600 rotate-45"></div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                    <div className="w-3 h-3 bg-amber-600 rotate-45"></div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                    <div className="w-3 h-3 bg-amber-600 rotate-45"></div>
                    </div> */}
                </div>
            </div>
                
            <div className='relative'>
                <div className="absolute left-80 sm:left-100 lg:left-60 top-2">
                    <div className="w-3 h-3 bg-sky-900 rotate-45"></div>
                </div>
                <p className="text-xl md:text-2xl text-stone-400 mb-8 max-w-2xl mx-auto font-serif italic">
                    Code. Debug. Repeat.
                </p>
                <div className="absolute right-80 sm:right-100 lg:right-60 top-2">
                    <div className="w-3 h-3 bg-sky-900 rotate-45"></div>
                </div>
            </div>
            
            <div className="text-sm text-stone-500 mb-12 font-serif">
                "One must imagine Sisyphus happy"
            </div>
                
            <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="group relative">
                <div className="absolute inset-0 bg-amber-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative p-4 border-2 border-amber-900/50 hover:border-amber-600 transition-all duration-300 group-hover:scale-110">
                {/* <Github className="w-6 h-6 text-amber-600" /> */}
                </div>
            </a>
            <a href="#" className="group relative">
                <div className="absolute inset-0 bg-amber-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative p-4 border-2 border-amber-900/50 hover:border-amber-600 transition-all duration-300 group-hover:scale-110">
                {/* <Instagram className="w-6 h-6 text-amber-600" /> */}
                </div>
            </a>
            <a href="#" className="group relative">
                <div className="absolute inset-0 bg-amber-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative p-4 border-2 border-amber-900/50 hover:border-amber-600 transition-all duration-300 group-hover:scale-110">
                {/* <Mail className="w-6 h-6 text-amber-600" /> */}
                </div>
            </a>
            </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-amber-600"
        >
          {/* <ChevronDown className="w-8 h-8" /> */}
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-black/80"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-600 font-serif tracking-wider">
            THE ENCHANTRESS
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-stone-300 leading-relaxed font-serif">
                From the depths of midnight code sessions emerges a digital sorceress, weaving spells in TypeScript 
                and conjuring interfaces that dance between the realms of beauty and functionality.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed font-serif">
                Seven years of traversing the shadowy corridors of web development, leaving trails of elegant 
                code and haunting user experiences that linger in memory long after the screen dims.
              </p>
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-600/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <button className="relative px-8 py-3 border-2 border-amber-900/50 hover:border-amber-600 text-amber-600 font-serif tracking-wide transition-all duration-300 group-hover:scale-105">
                  TOME OF KNOWLEDGE
                </button>
              </div>
            </div>
            <div className="grid gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className={`relative group transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} 
                    style={{transitionDelay: `${index * 300}ms`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-stone-900/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative p-6 border border-amber-900/30 bg-black/40 backdrop-blur-sm hover:border-amber-600/50 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        {/* <Icon className="w-6 h-6 text-amber-600 mr-3" /> */}
                        <h3 className="text-xl font-semibold text-amber-600 font-serif tracking-wide">{skill.name}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span key={item} className="px-3 py-1 border border-stone-700/50 bg-stone-900/30 text-sm text-stone-400 font-serif">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-stone-950/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-600 font-serif tracking-wider">
            DARK CREATIONS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`group relative transition-all duration-700 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} 
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-stone-900/40 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative border-2 border-amber-900/30 bg-black/60 backdrop-blur-sm group-hover:border-amber-600/50 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 filter sepia-0 group-hover:sepia-[0.3]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a href={project.demo} className="p-2 border border-amber-900/50 bg-black/60 hover:border-amber-600 transition-colors">
                        {/* <ExternalLink className="w-4 h-4 text-amber-600" /> */}
                      </a>
                      <a href={project.code} className="p-2 border border-amber-900/50 bg-black/60 hover:border-amber-600 transition-colors">
                        {/* <Github className="w-4 h-4 text-amber-600" /> */}
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-amber-600 font-serif tracking-wide group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-400 mb-4 leading-relaxed text-sm font-serif">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 border border-stone-700/50 bg-stone-900/30 text-xs text-amber-600 font-serif">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-amber-600 font-serif tracking-wider">
            SUMMON THE ENCHANTRESS
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-serif italic">
            Dare to venture into the realm of collaborative creation? 
            The moth awaits your call in the digital darkness.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <a href="mailto:luna@erebus.dark" className="relative px-8 py-4 border-2 border-amber-900/50 hover:border-amber-600 text-amber-600 font-serif tracking-wide transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
                {/* <Mail className="w-5 h-5" /> */}
                SEND RAVEN
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-amber-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative p-3 border border-amber-900/50 hover:border-amber-600 transition-all duration-300 group-hover:scale-110">
                  {/* <Github className="w-6 h-6 text-amber-600" /> */}
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-amber-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative p-3 border border-amber-900/50 hover:border-amber-600 transition-all duration-300 group-hover:scale-110">
                  {/* <Instagram className="w-6 h-6 text-amber-600" /> */}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-900/30 bg-black/80 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-2">
            <MothIcon className="w-6 h-6 text-amber-600" />
            <p className="text-stone-500 font-serif text-sm">
              © MMXXIV Luna Erebus • Crafted in shadows with React & TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};