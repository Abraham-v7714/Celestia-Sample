"use client";

import { motion } from "framer-motion";

const artisans = [
  {
    role: "Lead Creative Designer",
    name: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Visionary of structure and floral composition."
  },
  {
    role: "Master Caterer",
    name: "Chef Julian Vance",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop",
    bio: "Culinary maestro focusing on global gastronomic excellence."
  },
  {
    role: "Head of Cinematography",
    name: "Marcus Reid",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1980&auto=format&fit=crop",
    bio: "Capturing light, shadow, and timeless emotion."
  }
];

export default function TheArtisans() {
  return (
    <section className="py-24 bg-brand-darker relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-brand-gold font-sans tracking-[0.2em] uppercase text-xs mb-4 block">The Core Team</span>
          <h2 className="text-4xl md:text-5xl font-heading text-white">The Artisans</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {artisans.map((artisan, idx) => (
            <motion.div 
              key={artisan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-gray">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Subtle gradient overlay at bottom for text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-heading text-white mb-1">{artisan.name}</h3>
                <p className="text-brand-gold text-sm uppercase tracking-wider mb-3">{artisan.role}</p>
                <p className="text-gray-400 font-light text-sm max-w-xs mx-auto">{artisan.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
