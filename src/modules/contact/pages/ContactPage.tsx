import { getDictionary } from "@/dictionaries/getDictionary";
import FAQAccordion from "@/components/ui/FAQAccordion";

export async function ContactPage({ locale }: { locale: 'en' | 'km' }) {
  
  const dict = await getDictionary(locale);

  const faqs = [
    { 
      question: "When do applications open for the next academic year?",
      answer: "Applications for the upcoming academic year generally open in early September and close in late November. We recommend checking our Admissions page for exact dates and deadlines."
    },
    { 
      question: "What are the language requirements?",
      answer: "All programs are taught in English. Non-native speakers must provide proof of English proficiency (e.g., IELTS 6.5 or TOEFL iBT 90)."
    },
    { 
      question: "Are there scholarships available for international students?",
      answer: "Yes, we offer a variety of merit-based and need-based scholarships for international applicants. Please visit our Scholarships page for eligibility criteria and application steps."
    },
    { 
      question: "Can I transfer credits from another university?",
      answer: "Credit transfers are evaluated on a case-by-case basis. You must submit an official transcript and course syllabi to the Admissions Office during your application process."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white font-sans pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4" style={{ color: '#1a237e' }}>
              Reach Out to Us
            </h1>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Our admissions team is available Monday to Friday, 8:00 AM – 5:00 PM.
            </p>

            <div className="space-y-6">
              {/* Main Campus */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Main Campus</p>
                  <p className="text-slate-800">Russian Federation Blvd, Phnom Penh 12000, Cambodia</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Phone</p>
                  <p className="text-slate-800">071 21 000 06 / 098 322 872 / 099 888 707 / 012 562 707</p>
                </div>
              </div>

              {/* General Enquiries */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">General Enquiries</p>
                  <p className="text-slate-800">sopheap4anha@gmail.com</p>
                </div>
              </div>

              {/* Admissions */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Admissions</p>
                  <p className="text-slate-800">sopheap4anha@gmail.com</p>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Telegram</p>
                  <p className="text-slate-800">@AICOFFICIALCHANNEL</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Website</p>
                  <p className="text-slate-800">www.aicambodia.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#fafafa] p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#1a237e' }}>Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions</option>
                    <option value="general">General Enquiry</option>
                    <option value="support">Technical Support</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 resize-y"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-4 bg-[#111827] hover:bg-[#1f2937] text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: '#111827' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#1a237e' }}>
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </main>
  );
}
