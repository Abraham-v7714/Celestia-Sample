"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Editorial Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-brand-maroon/40 z-0 hidden md:block" />
          <div className="absolute inset-0 bg-brand-dark/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            alt="Behind the scenes catering and preparation" 
            className="w-full h-full object-cover relative z-0 grayscale-[20%]"
          />
        </motion.div>

        {/* Right Side: Copy & Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-8 text-white tracking-tight">
            The Genesis of <span className="text-brand-gold italic text-white flex items-center justify-center space-x-4 mb-6"><br/>Grandeur</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
            <p className="first-letter:text-7xl first-letter:font-heading first-letter:text-brand-gold first-letter:mr-3 first-letter:float-left first-line:uppercase first-line:tracking-widest relative">
              Founded on the belief that perfection resides in the unseen details, Celestia Events was born from a passion for unparalleled aesthetics and absolute precision. We began as a boutique advisory for private galas and have since scaled to curate some of the city's most opulent celebrations.
            </p>
            <p>
              Every event we undertake is treated as a unique canvas. We curate, construct, and complete every element—from sweeping floral installations to exquisite culinary journeys—with an uncompromising standard.
            </p>
            
            <blockquote className="pl-6 border-l-2 border-brand-gold italic mt-12 text-white font-heading text-2xl leading-snug">
              &quot;We don't merely plan events; we architect the atmosphere where memories permanently reside.&quot;
            </blockquote>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
