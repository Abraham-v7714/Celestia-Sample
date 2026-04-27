"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Crown, Baby, Gift, Car } from "lucide-react";

// --- MOCK DATA ---
const servicesData = [
  {
    id: 1,
    title: "Majestic Weddings",
    subtitle: "Your Dream Day, Perfectly Crafted.",
    description: "Experience a seamless journey to your wedding day. We manage every intricate detail effortlessly, ensuring your most prized moments are framed within an aura of timeless luxury.",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    list: [
      "Elegant Stage Decorations", 
      "Exquisite Catering (Veg & Non-Veg)", 
      "Professional Photography", 
      "Bridal Makeover"
    ],
    footerText: "Turning matrimonial dreams into flawless, cinematic realities.",
    imageLeft: true,
  },
  {
    id: 2,
    title: "Treasured Baby Showers",
    subtitle: "Welcoming New Beginnings in Style.",
    description: "Honor life's beginnings in delicate, serene environments. We curate warm, intimate atmospheres where your closest family can celebrate your expanding legacy.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?q=80&w=2073&auto=format&fit=crop",
    list: [
      "Themed Stage Decor", 
      "Cake Table Styling", 
      "Photography", 
      "Premium Catering"
    ],
    footerText: "Creating intimate sanctuaries for your expanding family.",
    imageLeft: false,
  },
  {
    id: 3,
    title: "Opulent Birthdays",
    subtitle: "Celebrate Every Milestone.",
    description: "Set the stage for milestones marked with absolute flair. From enchanting kid's parties to regal adult celebrations, we build spectacular environments of joy.",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    list: [
      "Custom Birthday Cakes", 
      "Luxury Decor", 
      "DJ Entertainment", 
      "Live Music"
    ],
    footerText: "Milestones celebrated with unforgettable elegance.",
    imageLeft: true,
  },
  {
    id: 4,
    title: "Luxury Rentals & Add-ons",
    subtitle: "The Premium Touches.",
    description: "Elevate your celebrations with exclusive enhancements. Our premium add-ons ensure that every moment of your event exceeds your guests' utmost expectations.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    list: [
      "Designer Car Decorations", 
      "Luxury Car Rentals", 
      "Popcorn & Cotton Candy Stations"
    ],
    footerText: "Premium bespoke enhancements for absolute perfection.",
    imageLeft: false,
  }
];

// --- COMPONENTS ---

export default function ServicesPage() {
  return (
    <div className="bg-brand-dark text-white font-sans min-h-screen relative overflow-hidden selection:bg-brand-gold selection:text-brand-dark">
      
      {/* Dark Ambient Gradients */}
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-b from-brand-maroon/20 via-brand-dark to-brand-dark z-0 pointer-events-none"/>

      {/* Since the global layout holds the Navbar, we start spacing down from the top */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
        <ServicesHeader />
        <AlternatingServiceBlocks />
      </main>
      
    </div>
  );
}

function ServicesHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center max-w-3xl mx-auto mb-28"
    >
      <span className="text-brand-gold font-sans font-bold tracking-[0.25em] uppercase text-xs mb-4 block">
        What We Offer
      </span>
      <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 font-heading tracking-tight drop-shadow-lg">
        Our Signature Services
      </h1>
      <p className="text-lg text-gray-400 leading-relaxed font-light">
        Every celebration deserves meticulous planning, premium execution, and an unforgettable atmosphere. 
        We manage your events perfectly under one roof.
      </p>
    </motion.section>
  );
}

function ServiceBlock({ service, index }: { service: any, index: number }) {
  const Icon = service.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`flex flex-col gap-12 lg:gap-20 items-center ${
        service.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative p-2 rounded-[2rem] bg-gradient-to-br from-brand-gold/30 via-brand-maroon/20 to-brand-dark shadow-[0_0_40px_rgba(212,175,55,0.05)] border border-brand-gold/10">
          <div className="relative aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden bg-brand-gray-light">
            <Image 
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
              className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90 hover:opacity-100"
            />
            {/* Cinematic dark overlay inset */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Gold/Maroon Circular Icon Badge */}
          <div 
              className="absolute -top-6 lg:-top-8 w-16 h-16 lg:w-20 lg:h-20 bg-brand-dark rounded-full shadow-2xl flex items-center justify-center border border-brand-gold/20 z-10"
              style={{ [service.imageLeft ? "right" : "left"]: "-1rem" }}
          >
            <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-brand-gold drop-shadow-md" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight font-heading">
            {service.title}
          </h2>
        </div>
        
        <h3 className="text-xl text-brand-gold font-sans tracking-wide mb-6 uppercase text-sm font-semibold">
          {service.subtitle}
        </h3>
        
        <p className="text-gray-400 leading-relaxed mb-8 font-light text-[17px]">
          {service.description}
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
          {service.list.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-4 group">
              <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="text-gray-200 font-light group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="border-l-2 border-brand-gold pl-6 py-2 mt-4 bg-gradient-to-r from-brand-gold/5 to-transparent">
          <p className="text-[14px] font-sans text-brand-gold-muted leading-relaxed italic">
            &quot;{service.footerText}&quot;
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function AlternatingServiceBlocks() {
  return (
    <div className="space-y-32">
      {servicesData.map((service, idx) => (
        <ServiceBlock key={service.id} service={service} index={idx} />
      ))}
    </div>
  );
}
