"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-darker/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinematic Event Venue" 
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-brand-gold font-sans tracking-[0.3em] uppercase text-sm mb-6"
        >
          Exclusive Event Management
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 leading-tight font-medium"
        >
          Curating Your <br className="hidden md:block"/> 
          <span className="italic text-brand-gold-muted/90">Masterpiece</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-light"
        >
          From majestic weddings to opulent birthdays, we design cinematic experiences that transcend time.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="group relative px-8 py-4 bg-transparent overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-gold/10 border border-brand-gold/30 group-hover:bg-brand-gold transition duration-500" />
          <span className="relative z-10 font-sans tracking-widest uppercase text-sm text-brand-gold group-hover:text-brand-dark transition duration-500 font-semibold">
            Book Your Event
          </span>
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
