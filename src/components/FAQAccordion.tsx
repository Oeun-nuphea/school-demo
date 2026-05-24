"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={`w-full bg-[#fafafa] border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}
          >
            <button 
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-800">{faq.question}</span>
              <svg 
                className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 shrink-0 ${isOpen ? '-rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-1">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
