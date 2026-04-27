"use client";

import { motion } from "framer-motion";

const occasions = [
  {
    title: "Majestic Weddings",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Opulent Birthdays",
    image: "https://images.unsplash.com/photo-1530103862676-de889ddbbb26?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    title: "Corporate Galas",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
];

export default function OccasionsGrid() {
  return (
    <section className="py-24 bg-brand-dark relative px-6 max-w-[1400px] mx-auto">
      <div className="mb-16 md:flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading mb-4 text-white">Curated Occasions</h2>
          <p className="text-gray-400 font-light max-w-md">Every event is uniquely crafted to embody elegance, narrative, and legacy.</p>
        </div>
        <button className="hidden md:inline-block mt-8 md:mt-0 pb-1 border-b border-brand-gold text-brand-gold hover:text-white hover:border-white transition uppercase tracking-widest text-sm">
          View Full Portfolio
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {occasions.map((occ, idx) => (
          <motion.div 
            key={occ.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className={`group relative overflow-hidden bg-brand-gray ${occ.colSpan} ${occ.rowSpan} min-h-[300px] cursor-pointer`}
          >
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/50 transition-colors duration-700 z-10" />
            <img 
              src={occ.image} 
              alt={occ.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out brightness-90 group-hover:brightness-75"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-heading text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {occ.title}
              </h3>
              <div className="overflow-hidden mt-2">
                <p className="text-brand-gold-muted text-sm uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                  Explore Gallery
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <button className="inline-block pb-1 border-b border-brand-gold text-brand-gold hover:text-white hover:border-white transition uppercase tracking-widest text-sm">
          View Full Portfolio
        </button>
      </div>
    </section>
  );
}
