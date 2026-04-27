"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
          alt="Cinematic Grand Reception" 
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_25s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="h-px w-12 bg-brand-gold/60 block"></span>
            <span className="text-brand-gold font-sans tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            <span className="h-px w-12 bg-brand-gold/60 block"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 leading-tight font-medium text-white shadow-sm">
            Architects of <br className="hidden md:block"/> 
            <span className="italic text-brand-gold-muted">Unforgettable</span> Moments
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            From the quiet intimacy of housewarmings to the imperial heights of majestic weddings, 
            we orchestrate symphonies of elegance, transforming fleeting seconds into lifelong legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
