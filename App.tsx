import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Download, 
  Send,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  Briefcase
} from 'lucide-react';

import GridBackground from './components/GridBackground';
import FloatingNav from './components/FloatingNav';
import TechMarquee from './components/TechMarquee';
import BentoGrid from './components/BentoGrid';
import TestimonialMarquee from './components/TestimonialMarquee';
import FAQ from './components/FAQ';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  EDUCATION 
} from './constants';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      });

      // Headers Fade Up
      gsap.utils.toArray('.section-header').forEach((header: any) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });

      // Experience Cards
      gsap.from(".experience-item", {
         scrollTrigger: {
           trigger: "#experience",
           start: "top 75%"
         },
         x: -50,
         opacity: 0,
         duration: 0.8,
         stagger: 0.2,
         ease: "power2.out"
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div ref={comp} className="relative min-h-screen font-sans text-slate-600 pb-20">
      <GridBackground />
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center z-10 relative">
            
            <div className="hero-text mb-6 inline-flex items-center px-4 py-2 rounded-full glass-panel border border-white/60 text-primary-700 text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Full-stack products, automation, and AI workflows
            </div>

            <h1 className="hero-text text-6xl md:text-8xl font-display font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Shipping live <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-indigo-500 to-primary-500 bg-[length:200%_auto] animate-gradient">
                Product Systems
              </span>
            </h1>

            <p className="hero-text text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
              I'm <span className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</span>. A Full Stack Engineer building fast React/Next.js products, Django/FastAPI services, and automation workflows that cut real manual work.
            </p>

            <div className="hero-text flex flex-wrap gap-4 justify-center">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center">
                  View Selected Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/50 backdrop-blur-md text-slate-900 border border-white/60 rounded-full font-medium shadow-sm hover:bg-white hover:shadow-md transition-all flex items-center"
              >
                Download CV <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <div className="hero-text opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
        <TechMarquee />
      </div>

      {/* About & Stats */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-indigo-200 rounded-[2rem] opacity-30 blur-2xl transform -rotate-3"></div>
               <div className="relative glass-panel rounded-3xl p-8 border border-white shadow-xl">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center">
                    <Sparkles className="mr-2 text-yellow-500" /> Education Journey
                  </h3>
                  <div className="space-y-8">
                    {EDUCATION.map((edu, idx) => (
                      <div key={edu.id} className="relative pl-6 border-l-2 border-primary-200">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary-400"></div>
                        <h4 className="font-bold text-slate-800 text-lg">{edu.degree}</h4>
                        <p className="text-primary-600 font-medium">{edu.institution}</p>
                        <p className="text-sm text-slate-400 mt-1">{edu.period} • {edu.location}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="section-header mb-8">
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                   About <span className="text-primary-600">Me</span>
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed mb-6">
                   {PERSONAL_INFO.summary}
                 </p>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   My recent work spans live SaaS tools, AI outbound calling, gym operations, learning platforms, salon tooling, and interactive gifting products. I like taking messy business workflows and turning them into clean, measurable software.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/50 rounded-2xl border border-white text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">3+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                 </div>
                 <div className="p-4 bg-white/50 rounded-2xl border border-white text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">31+</div>
                    <div className="text-sm text-slate-500">Production Client Projects</div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-2xl mx-auto mb-16 section-header">
             <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Featured Work</h2>
             <p className="text-slate-500 text-lg">Live products you can open, inspect, and use, built across SaaS, AI automation, operations, education, and consumer workflows.</p>
           </div>
           
           <BentoGrid />
           
           <div className="mt-12 text-center">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                 See more on GitHub <ArrowRight size={18} className="ml-2" />
              </a>
           </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 relative z-10 bg-gradient-to-b from-transparent to-white/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 section-header flex items-end justify-between">
             <div>
               <h2 className="text-4xl font-display font-bold text-slate-900 mb-2">Experience</h2>
               <p className="text-slate-500">My professional track record</p>
             </div>
             <div className="hidden md:block h-px bg-slate-200 flex-grow ml-8"></div>
          </div>

          <div className="space-y-8">
             {EXPERIENCES.map((exp) => (
               <div key={exp.id} className="experience-item group">
                  <div className="glass-panel p-8 rounded-3xl border border-white hover:border-primary-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                        <Briefcase size={100} />
                     </div>
                     
                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
                        <div>
                           <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                           <div className="text-primary-600 font-medium text-lg">{exp.company}</div>
                        </div>
                        <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                           <span className="px-4 py-1 bg-slate-900 text-white rounded-full text-sm font-medium">{exp.period}</span>
                           <span className="text-sm text-slate-500 mt-2 flex items-center"><MapPin size={14} className="mr-1"/> {exp.location}</span>
                        </div>
                     </div>
                     
                     <ul className="space-y-3 relative z-10">
                        {exp.description.map((item, i) => (
                           <li key={i} className="flex items-start text-slate-600">
                              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0"></span>
                              <span className="leading-relaxed">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20 relative z-10 overflow-hidden">
         <div className="text-center mb-10 section-header">
            <h2 className="text-3xl font-display font-bold text-slate-900">Shoutouts & Appreciations</h2>
         </div>
         <TestimonialMarquee />
      </section>

      {/* FAQ */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4 section-header">
                 <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                 <p className="text-slate-500">Common questions about my work process and availability.</p>
                 <a href="#contact" className="inline-block mt-6 text-primary-600 font-medium border-b border-primary-200 pb-1 hover:border-primary-600 transition-colors">
                    Have more questions?
                 </a>
              </div>
              <div className="md:col-span-8">
                 <FAQ />
              </div>
           </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[2.5rem] p-1 border border-white shadow-2xl overflow-hidden">
            <div className="bg-slate-900 rounded-[2.3rem] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
              
              <div className="p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                 {/* Decorative Circle */}
                 <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-primary-600/20 blur-[80px]"></div>

                 <div className="relative z-10">
                   <h2 className="text-4xl font-display font-bold mb-6">Let's create something amazing together.</h2>
                   <p className="text-slate-300 text-lg leading-relaxed mb-8">
                     Need a product shipped, a workflow automated, or a dashboard cleaned up? Drop me a line and let's discuss the build.
                   </p>
                   
                   <div className="space-y-6">
                     <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-primary-500 transition-colors">
                         <Mail size={20} />
                       </div>
                       {PERSONAL_INFO.email}
                     </a>
                     <div className="flex items-center text-slate-300">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                         <MapPin size={20} />
                       </div>
                       Karachi, Pakistan
                     </div>
                   </div>
                 </div>

                 <div className="mt-12 relative z-10">
                    <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Connect</p>
                    <div className="flex gap-4">
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                        <Github size={18} />
                      </a>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all">
                        <Linkedin size={18} />
                      </a>
                    </div>
                 </div>
              </div>

              <div className="p-10 md:p-14 bg-white h-full">
                 <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="What's your name?"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell me about your goals..."
                        required 
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl ${
                        formStatus === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary-600 text-white hover:bg-primary-700 hover:-translate-y-1'
                      }`}
                    >
                      {formStatus === 'idle' && <>Send Message <Send size={20} className="ml-2" /></>}
                      {formStatus === 'sending' && 'Sending...'}
                      {formStatus === 'success' && 'Message Sent!'}
                    </button>
                 </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-32 pt-10 text-center">
        <p className="text-slate-400 font-medium">© {new Date().getFullYear()} {PERSONAL_INFO.name}. <span className="text-primary-400">Crafted with precision.</span></p>
      </footer>

    </div>
  );
};

export default App;
