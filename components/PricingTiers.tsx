"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic Elegance",
    price: "79,499",
    guestCount: 100,
    coreServices: ["Venue Setup", "Standard Floral Decor", "Photography (4 Hrs)"],
    premiumAddons: [],
    isPopular: false,
  },
  {
    name: "Classic Luxe",
    price: "89,499",
    guestCount: 100,
    coreServices: ["Grand Venue Setup", "Premium Floral Decor", "Photography (8 Hrs)", "DJ & Sound System"],
    premiumAddons: ["Cotton Candy Bar"],
    isPopular: true,
  },
  {
    name: "Royal Premium",
    price: "99,499",
    guestCount: 100,
    coreServices: ["Cinematic Venue Design", "Exotic Floral Installations", "Cinematography (Full Day)", "Live Band / DJ"],
    premiumAddons: ["Cotton Candy Bar", "Ice-cream Bar", "360 Photo Booth"],
    isPopular: false,
  }
];

export default function PricingTiers() {
  return (
    <section className="py-24 bg-brand-darker relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-maroon/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4">Investment Tiers</h2>
          <p className="text-gray-400 font-light">Transparent curation tailored to your grandeur.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative group p-8 border ${pkg.isPopular ? 'border-brand-gold bg-brand-gray-light/30' : 'border-brand-gray bg-brand-gray/20'} backdrop-blur-sm`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 uppercase tracking-widest transform translate-x-2 -translate-y-2">
                  Most Requested
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-heading mb-2 text-white group-hover:text-brand-gold transition duration-300">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-brand-gold text-lg">₹</span>
                  <span className="text-4xl font-light">{pkg.price}</span>
                  <span className="text-gray-500 text-sm">/ {pkg.guestCount} guests</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-800">Core Services</h4>
                  <ul className="space-y-3">
                    {pkg.coreServices.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand-gold mr-3 mt-0.5 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.premiumAddons.length > 0 && (
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-brand-gold-muted mb-4 pb-2 border-b border-brand-maroon/50">Premium Access</h4>
                    <ul className="space-y-3">
                      {pkg.premiumAddons.map((addon, aIdx) => (
                        <li key={aIdx} className="flex items-start text-sm text-white">
                          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 mt-1.5 shrink-0" />
                          <span className="font-medium">{addon}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-10">
                <button className={`w-full py-3 text-sm tracking-widest uppercase transition duration-300 border ${pkg.isPopular ? 'bg-brand-gold text-brand-dark border-brand-gold hover:bg-white hover:border-white' : 'border-brand-gray text-white hover:border-brand-gold hover:text-brand-gold'}`}>
                  Select Tier
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
