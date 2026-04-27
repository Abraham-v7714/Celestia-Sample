"use client";

import Link from "next/link";
import { Check, Star, Gem, Crown, Flower2, CakeSlice, Popcorn, Candy, IceCream, ArrowRight } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="bg-brand-dark min-h-screen font-sans text-white relative selection:bg-brand-gold selection:text-brand-dark">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-maroon/20 via-brand-dark to-brand-dark z-0 pointer-events-none opacity-60" />

      <main className="relative z-10 pt-32 md:pt-48 pb-24 flex flex-col gap-24">
        <PackagesHero />
        <PricingTiers />
        <PremiumAddons />
        <CustomQuoteCTA />
      </main>
    </div>
  );
}

function PackagesHero() {
  return (
    <section className="text-center px-6 max-w-4xl mx-auto">
      <h2 className="text-brand-gold font-sans font-bold tracking-[0.25em] uppercase text-xs mb-6">
        Transparent pricing. Flawless execution.
      </h2>
      <h1 className="text-5xl md:text-7xl font-heading mb-8 tracking-tight drop-shadow-md">
        Curated Experiences.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
        Choose from our expertly crafted packages tailored for intimate gatherings of up to <span className="text-brand-gold">100 guests</span>, 
        or contact us for a bespoke grand celebration.
      </p>
    </section>
  );
}

const tiers = [
  {
    name: "Basic Elegance",
    price: "79,499",
    tagline: "Simple décor, essential setup.",
    icon: Star,
    isPopular: false,
    features: [
      "Stage Decorations",
      "Basic Catering (Veg/Non-veg)",
      "Standard Photography",
      "Bridal/Groom Makeover"
    ]
  },
  {
    name: "Classic Luxe",
    price: "89,499",
    tagline: "Elevated design, premium touch.",
    icon: Crown,
    isPopular: true,
    features: [
      "Everything in Basic +",
      "Premium Stage Decor",
      "Extended Menu Catering",
      "Cinematic Photography & Album",
      "Luxury Makeover"
    ]
  },
  {
    name: "Royal Premium",
    price: "99,499",
    tagline: "The ultimate luxury experience.",
    icon: Gem,
    isPopular: false,
    features: [
      "Everything in Luxe +",
      "Elite Stage Decor with Imported Florals",
      "Gourmet Catering",
      "Pre-wedding Shoot",
      "Luxury Car Rental (1 Day)"
    ]
  }
];

function PricingTiers() {
  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:px-8">
        {tiers.map((tier, idx) => {
          const Icon = tier.icon || Star;
          
          return (
            <div 
              key={tier.name}
              className={`relative flex flex-col h-full rounded-[2rem] transition-all duration-500 hover:-translate-y-2 group ${
                tier.isPopular 
                  ? "bg-gradient-to-b from-brand-gray-light to-brand-darker border border-brand-gold shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:shadow-[0_0_60px_rgba(212,175,55,0.25)] z-10 md:scale-105" 
                  : "bg-brand-darker/50 backdrop-blur-sm border border-white/5 shadow-xl hover:border-brand-gold/50"
              } p-8 md:p-10`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Tier Header */}
              <div className="mb-8 text-center border-b border-white/10 pb-8">
                <Icon className={`w-8 h-8 mx-auto mb-4 ${tier.isPopular ? "text-brand-gold" : "text-gray-400"}`} strokeWidth={1.5} />
                <h3 className="text-3xl font-heading mb-2 group-hover:text-brand-gold transition-colors">{tier.name}</h3>
                <p className="text-sm text-gray-400 font-light italic mb-6">{tier.tagline}</p>
                <div className="flex items-start justify-center gap-1 font-heading">
                  <span className="text-2xl mt-1 text-brand-gold">₹</span>
                  <span className="text-5xl md:text-6xl tracking-tight">{tier.price}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-grow space-y-5 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tier.isPopular ? "text-brand-gold" : "text-gray-500"}`} strokeWidth={2} />
                    <span className={`font-light leading-relaxed ${i === 0 && tier.name !== "Basic Elegance" ? "text-brand-gold font-medium italic" : "text-gray-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link 
                href="/contact"
                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-center transition-all duration-300 ${
                  tier.isPopular 
                    ? "bg-brand-gold text-brand-dark hover:bg-white shadow-[0_10px_20px_rgba(212,175,55,0.2)]" 
                    : "bg-brand-gray/50 text-white border border-transparent hover:border-brand-gold/50 hover:bg-brand-gray"
                }`}
              >
                Select Package
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const addons = [
  { name: "Floral Garlands", icon: Flower2 },
  { name: "Custom Tiered Cakes", icon: CakeSlice },
  { name: "Popcorn Stations", icon: Popcorn },
  { name: "Cotton Candy Carts", icon: Candy },
  { name: "Ice-Cream Bars", icon: IceCream },
];

function PremiumAddons() {
  return (
    <section className="px-6 max-w-5xl mx-auto w-full text-center pt-16">
      <h2 className="text-3xl font-heading mb-16 relative inline-block">
        Elevate Your Occasion
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-gold"></span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {addons.map((addon, idx) => {
          const Icon = addon.icon;
          return (
            <div 
              key={idx}
              className="group flex flex-col items-center justify-center p-6 w-[160px] md:w-[180px] bg-brand-darker/40 border border-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/30 hover:bg-brand-gray/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 group-hover:text-brand-gold transition-colors">
                <Icon strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <span className="font-sans text-sm tracking-wide text-gray-300 group-hover:text-white transition-colors">
                {addon.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CustomQuoteCTA() {
  return (
    <section className="w-full mt-12 py-24 bg-gradient-to-r from-brand-maroon/20 via-brand-darker to-brand-gray relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-brand-gold/10 rounded-tr-[100px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-brand-gold/10 rounded-bl-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading mb-6 drop-shadow-md">
          Hosting more than <span className="text-brand-gold italic">100 guests?</span>
        </h2>
        <p className="text-lg text-gray-300 font-light mb-10 max-w-2xl">
          Let us craft a bespoke package tailored for your grand scale event. Our team excels at managing complex, large-scale luxury productions.
        </p>
        
        <Link 
          href="/contact"
          className="group flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          Request Custom Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

// In case the user doesn't have the Crown icon imported correctly, creating a generic placeholder if needed,
// but lucide-react has Crown and Gem so we are good.
