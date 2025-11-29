import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={`glass-panel rounded-2xl border border-white transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white/60 shadow-md' : 'bg-white/30 hover:bg-white/50'}`}
          >
            <button 
              className="w-full px-6 py-5 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="font-display font-semibold text-slate-900 text-lg">{faq.question}</span>
              <span className={`p-2 rounded-full bg-white text-primary-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                 {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <div 
              className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;