"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Crown, CalendarCheck } from "lucide-react";

export default function EventStats() {
  const stats = [
    {
      label: "Majestic Weddings",
      value: "500+",
      icon: Crown,
    },
    {
      label: "Guests Served",
      value: "10,000+",
      icon: Users,
    },
    {
      label: "Exclusive Galas",
      value: "150+",
      icon: CalendarCheck,
    },
    {
      label: "Compromises",
      value: "Zero",
      icon: Sparkles,
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-maroon/10 border-y border-brand-gold/10 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-maroon/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-brand-gold/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center p-4"
              >
                <div className="mb-4 p-3 bg-brand-gray/50 rounded-full text-brand-gold">
                  <Icon strokeWidth={1} className="w-8 h-8" />
                </div>
                <h4 className="text-4xl md:text-5xl font-heading text-white mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-400 font-sans text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
