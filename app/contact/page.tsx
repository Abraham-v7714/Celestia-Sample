"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Plus, Minus, ChevronDown, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark relative z-0">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-maroon/20 via-brand-dark to-transparent opacity-50" />
      </div>

      <main className="relative z-10 pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto flex flex-col gap-24">
        <ContactHero />
        <ContactLayout />
        <FAQAccordion />
      </main>
    </div>
  );
}

function ContactHero() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h2 className="text-brand-gold font-sans font-bold tracking-[0.25em] uppercase text-xs mb-6">
        Bookings & Consultations
      </h2>
      <h1 className="text-5xl md:text-7xl font-heading mb-8 tracking-tight drop-shadow-md">
        Let&apos;s Plan Your Masterpiece.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
        Reach out to our expert team to begin designing your unforgettable occasion. Embody elegance, narrative, and legacy.
      </p>
    </section>
  );
}

function ContactLayout() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "",
    guests: "",
    vision: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your consultation request has been received.");
      setFormData({ name: "", phone: "", email: "", occasion: "", guests: "", vision: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* LEFT COLUMN: Contact Info */}
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-3xl font-heading mb-8 text-white">Get in Touch</h3>
          <ul className="space-y-8">
            <li className="flex items-start gap-5 group">
              <div className="w-12 h-12 bg-brand-gray border border-white/5 flex items-center justify-center rounded-xl group-hover:border-brand-gold/50 transition-colors shrink-0">
                <Phone className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Direct Line / WhatsApp</span>
                <Link href="https://wa.me/919944650942" target="_blank" rel="noopener noreferrer" className="text-xl font-light hover:text-brand-gold transition-colors">
                  +91 99446 50942
                </Link>
              </div>
            </li>
            
            <li className="flex items-start gap-5 group">
              <div className="w-12 h-12 bg-brand-gray border border-white/5 flex items-center justify-center rounded-xl group-hover:border-brand-gold/50 transition-colors shrink-0">
                <Mail className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Electronic Mail</span>
                <Link href="mailto:hello@celestiaevent.com" className="text-xl font-light hover:text-brand-gold transition-colors">
                  hello@celestiaevent.com
                </Link>
              </div>
            </li>

            <li className="flex items-start gap-5 group">
              <div className="w-12 h-12 bg-brand-gray border border-white/5 flex items-center justify-center rounded-xl group-hover:border-brand-gold/50 transition-colors shrink-0">
                <Clock className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Office Hours</span>
                <span className="text-lg font-light text-gray-300">Mon - Sun: 9:00 AM - 8:00 PM</span>
              </div>
            </li>

            <li className="flex items-start gap-5 group">
              <div className="w-12 h-12 bg-brand-gray border border-white/5 flex items-center justify-center rounded-xl group-hover:border-brand-gold/50 transition-colors shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Headquarters</span>
                <span className="text-lg font-light text-gray-300 leading-relaxed">
                  124 Elite Arcade, Premium Atrium<br/>
                  Tamil Nadu, Southern India
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Instagram Integration */}
        <div className="w-full bg-brand-gray rounded-2xl border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-start gap-4">
            <div className="w-16 h-16 bg-brand-dark border border-white/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
              <InstagramIcon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-heading text-white mb-2 tracking-wide">Follow Our Journey</h4>
              <p className="text-sm font-light text-gray-400 mb-6 leading-relaxed">
                Discover our latest immaculate setups, behind-the-scenes event crafting, and endless inspiration directly on our official feed.
              </p>
            </div>
            <Link 
              href="https://instagram.com/celestia_event_company" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-gold/50 text-brand-gold text-sm uppercase tracking-widest font-semibold hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300 rounded-lg"
            >
              @celestia_event_company
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Consultation Form */}
      <div className="bg-brand-gray-light/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
        
        <h3 className="text-3xl font-heading mb-2 text-white relative z-10">Request Consultation</h3>
        <p className="text-sm font-light text-gray-400 mb-8 relative z-10">Fill out your details below and a luxury planner will reach out within 24 hours.</p>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                placeholder="Eleanor Vance"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
              placeholder="eleanor@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="occasion" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Occasion Type</label>
              <div className="relative">
                <select 
                  id="occasion"
                  name="occasion"
                  required
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                >
                  <option value="" disabled>Select Occasion...</option>
                  <option value="Majestic Wedding">Majestic Wedding</option>
                  <option value="Elegant Engagement">Elegant Engagement</option>
                  <option value="Opulent Birthday">Opulent Birthday</option>
                  <option value="Treasured Baby Shower">Treasured Baby Shower</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Other">Other Custom Event</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="guests" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Est. Guests</label>
              <div className="relative">
                <select 
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                >
                  <option value="" disabled>Select Guest Count...</option>
                  <option value="Under 100">Under 100 (Intimate)</option>
                  <option value="100-300">100 - 300 (Classic)</option>
                  <option value="300-500">300 - 500 (Grand)</option>
                  <option value="500+">500+ (Royal)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="vision" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Your Vision</label>
            <textarea 
              id="vision"
              name="vision"
              required
              rows={4}
              value={formData.vision}
              onChange={handleChange}
              className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
              placeholder="Tell us everything about the aesthetic, scale, and requirements you have in mind..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 py-4 mt-4 bg-brand-gold text-brand-dark font-sans uppercase tracking-[0.15em] text-sm font-bold rounded-xl hover:bg-brand-maroon hover:text-white transition-all duration-300 disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            {!isSubmitting && <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "How far in advance should we book?",
    answer: "For majestic weddings, we highly recommend securing our services 3-6 months in advance. For birthdays, corporate events, and smaller intimate occasions, 3-4 weeks is generally ideal to ensure every detail is perfectly curated."
  },
  {
    question: "Do you offer custom packages for over 100 guests?",
    answer: "Absolutely. While we offer strict, curated standard packages for intimate gatherings of up to 100 guests, we specialize deeply in bespoke planning and execution for any grand scale. Our Royal capacity scales seamlessly."
  },
  {
    question: "Are your catering offerings customizable?",
    answer: "Yes, our Master Caterers curate both pure vegetarian and non-vegetarian menus tailored strictly to your aesthetic and culinary requirements. Tasting sessions are provided during the planning phase."
  },
  {
    question: "Do you manage external vendors?",
    answer: "Yes, Celestia provides end-to-end event management. Whether it involves bespoke photographers, live bands, or luxury car rentals, our coordination team acts as the sole point of contact."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto w-full pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 font-light">Navigating your premium event planning experience.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              openIndex === index ? "border-brand-gold/30 bg-brand-gray/30" : "border-white/5 bg-brand-darker/50 hover:border-white/10"
            }`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h4 className="text-lg font-medium text-white pr-8">{faq.question}</h4>
              <div className="shrink-0 text-brand-gold">
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
