import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const TestimonialMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-10 overflow-hidden">
       {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

      <div className="flex animate-scroll-reverse hover:pause-on-hover">
        {/* Triple the list for smoother infinite loop */}
        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <div 
            key={`${t.id}-${i}`} 
            className="w-[350px] flex-shrink-0 mx-4 p-6 glass-panel rounded-2xl border border-white hover:border-primary-200 transition-colors"
          >
             <Quote className="text-primary-300 mb-4 fill-primary-100" size={32} />
             <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
             <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-indigo-100 flex items-center justify-center text-primary-700 font-bold border border-white shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;