"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Menu, X, Phone, Mail, MapPin, CheckCircle2, 
  Star, Crown, Gem, Flower2, CakeSlice, Popcorn, Candy, IceCream, ChevronDown, Send 
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      <StickyNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

// ----------------------------------------------------------------------
// 1. STICKY NAVBAR
// ----------------------------------------------------------------------
function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-brand-darker/80 backdrop-blur-md border-brand-gold/10 shadow-lg py-4" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-brand-gold font-heading">
            CELESTIA
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="https://wa.me/919944650942?text=Hello%20Celestia!%20I'd%20like%20to%20book%20an%20event%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-brand-gold text-brand-dark rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Book Event
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden text-brand-gold p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Open State */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-darker border-b border-brand-gold/20 flex flex-col p-6 lg:hidden shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-gray-200 border-b border-white/5 font-medium tracking-wide uppercase text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="https://wa.me/919944650942?text=Hello%20Celestia!%20I'd%20like%20to%20book%20an%20event%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 py-4 bg-brand-gold text-brand-dark text-center font-bold uppercase tracking-widest rounded-lg"
          >
            Book Event
          </Link>
        </div>
      )}
    </header>
  );
}

// ----------------------------------------------------------------------
// 2. HERO SECTION
// ----------------------------------------------------------------------
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinematic Event Background"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-brand-dark/70 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-dark/80 to-brand-darker z-20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-30 text-center px-6 max-w-4xl pt-20"
      >
        <span className="text-brand-gold font-sans tracking-[0.3em] uppercase text-xs block mb-8">
          The Celestia Standard
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 tracking-tight text-white leading-tight drop-shadow-xl">
          Architects of <br/><span className="italic text-brand-gold font-medium">Unforgettable Moments.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide mb-12 max-w-2xl mx-auto">
          Every celebration deserves meticulous planning, premium execution, and an immersive atmosphere.
        </p>
        <Link 
          href="#packages"
          className="inline-block px-10 py-4 bg-transparent border border-brand-gold text-brand-gold uppercase tracking-[0.15em] text-sm font-bold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 rounded-sm"
        >
          View Our Packages
        </Link>
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 3. ABOUT SECTION
// ----------------------------------------------------------------------
function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
            alt="Majestic Team Setup"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500" />
          
          {/* Decorative Corner Asset */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-brand-gold/30 m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"/>
        </div>

        {/* Right Side: Text & Stats */}
        <div className="flex flex-col justify-center">
          <span className="text-brand-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4">Our Legacy</span>
          <h2 className="text-4xl md:text-5xl font-heading mb-8 text-white">We Design Experiences, Not Just Decor.</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-8">
            Founded on the rigid philosophy that a true masterpiece lies strictly in its 
            unwavering attention to detail, Celestia serves as a beacon of high fashion 
            event management in Southern India. We breathe life into every space we curate.
          </p>
          <p className="text-gray-400 font-light leading-relaxed mb-12">
            By exclusively taking on limited commissions per month, we ensure that every client 
            receives standard-defying aesthetics and execution.
          </p>

          <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
            <div>
              <h4 className="text-4xl font-heading text-brand-gold mb-2">500+</h4>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Majestic Events</span>
            </div>
            <div>
              <h4 className="text-4xl font-heading text-brand-gold mb-2">Zero</h4>
              <span className="text-sm text-gray-500 uppercase tracking-widest">Compromises</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 4. SERVICES SECTION (Z-PATTERN)
// ----------------------------------------------------------------------
const servicesData = [
  {
    id: "weddings",
    title: "Majestic Weddings",
    subtitle: "Your Dream Day, Perfectly Crafted.",
    description: "Experience a seamless journey to your wedding day. We manage every intricate detail effortlessly, ensuring your most prized moments are framed within an aura of timeless luxury.",
    image: "/assets/Majestic Wedding.jpg",
    list: ["Elegant Stage Decorations", "Exquisite Catering (Veg & Non-Veg)", "Professional Photography", "Bridal Makeover"],
    imageLeft: true,
  },
  {
    id: "showers",
    title: "Treasured Baby Showers",
    subtitle: "Welcoming New Beginnings in Style.",
    description: "Honor life's beginnings in delicate, serene environments. We curate warm, intimate atmospheres where your closest family can celebrate your expanding legacy.",
    image: "/assets/Treasured Baby Showers.jpg",
    list: ["Themed Stage Decor", "Cake Table Styling", "Photography", "Premium Catering"],
    imageLeft: false,
  },
  {
    id: "birthdays",
    title: "Opulent Birthdays",
    subtitle: "Celebrate Every Milestone.",
    description: "Set the stage for milestones marked with absolute flair. From enchanting kid's parties to regal adult celebrations, we build spectacular environments of joy.",
    image: "/assets/Opulent Birthdays.jpg",
    list: ["Custom Birthday Cakes", "Luxury Decor", "DJ Entertainment", "Live Music"],
    imageLeft: true,
  },
  {
    id: "rentals",
    title: "Luxury Rentals",
    subtitle: "The Premium Touches.",
    description: "Elevate your celebrations with exclusive enhancements. Our premium add-ons ensure that every moment of your event exceeds your guests' expectations.",
    image: "/assets/Luxury Rentals.jpg",
    list: ["Designer Car Decorations", "Luxury Car Rentals", "Exclusive Lounge Furniture", "VIP Guest Chauffeurs"],
    imageLeft: false,
  }
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-brand-darker relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-brand-gold font-sans font-bold tracking-[0.25em] uppercase text-xs mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-heading text-white">Our Signature Services</h2>
        </div>

        <div className="space-y-32">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${
                service.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-[55%]">
                <div className="relative aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden bg-brand-dark border border-brand-gold/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <h3 className="text-4xl font-heading text-white mb-2">{service.title}</h3>
                <h4 className="text-xl text-brand-gold font-medium italic mb-6">{service.subtitle}</h4>
                <p className="text-gray-400 font-light leading-relaxed mb-10 text-[17px]">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-gray-200 font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 5. PACKAGES SECTION
// ----------------------------------------------------------------------
const tiers = [
  {
    name: "Basic Elegance",
    price: "79,499",
    icon: Star,
    isPopular: false,
    features: ["Stage Decorations", "Basic Catering (Veg/Non-veg)", "Standard Photography", "Bridal/Groom Makeover"]
  },
  {
    name: "Classic Luxe",
    price: "89,499",
    icon: Crown,
    isPopular: true,
    features: ["Everything in Basic +", "Premium Stage Decor", "Extended Menu Catering", "Cinematic Photography & Album", "Luxury Makeover"]
  },
  {
    name: "Royal Premium",
    price: "99,499",
    icon: Gem,
    isPopular: false,
    features: ["Everything in Luxe +", "Elite Stage Decor with Imported Florals", "Gourmet Catering", "Pre-wedding Shoot", "Luxury Car Rental (1 Day)"]
  }
];

const addons = [
  { name: "Floral Garlands", icon: Flower2 },
  { name: "Custom Tiered Cakes", icon: CakeSlice },
  { name: "Popcorn Stations", icon: Popcorn },
  { name: "Cotton Candy Carts", icon: Candy },
  { name: "Ice-Cream Bars", icon: IceCream },
];

function PackagesSection() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-4">Curated Experiences.</h2>
          <span className="text-brand-gold font-sans font-medium tracking-widest uppercase text-sm block">
            For up to 100 Guests
          </span>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-24">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div 
                key={tier.name}
                className={`relative flex flex-col h-full rounded-[2rem] transition-all duration-500 hover:-translate-y-2 ${
                  tier.isPopular 
                    ? "bg-gradient-to-b from-brand-gray-light to-brand-darker border border-brand-gold shadow-[0_0_50px_rgba(212,175,55,0.15)] md:scale-105 z-10" 
                    : "bg-brand-darker/50 backdrop-blur-sm border border-white/5 hover:border-brand-gold/50"
                } p-8 md:p-10`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8 text-center border-b border-white/10 pb-8">
                  <Icon className={`w-8 h-8 mx-auto mb-4 ${tier.isPopular ? "text-brand-gold" : "text-gray-400"}`} strokeWidth={1.5} />
                  <h3 className="text-3xl font-heading mb-6">{tier.name}</h3>
                  <div className="flex items-start justify-center gap-1 font-heading">
                    <span className="text-2xl mt-1 text-brand-gold">₹</span>
                    <span className="text-5xl lg:text-6xl tracking-tight">{tier.price}</span>
                  </div>
                </div>

                <ul className="flex-grow space-y-5 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      {i === 0 && tier.name !== "Basic Elegance" ? (
                        <div className="w-5 h-5 opacity-0 shrink-0" />
                      ) : (
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tier.isPopular ? "text-brand-gold" : "text-gray-500"}`} strokeWidth={2} />
                      )}
                      
                      <span className={`font-light leading-relaxed tracking-wide ${i === 0 && tier.name !== "Basic Elegance" ? "text-brand-gold font-medium italic" : "text-gray-300"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#contact"
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

        {/* Premium Addons */}
        <div className="text-center pt-8 border-t border-white/5">
          <h3 className="text-2xl font-heading mb-12 text-white">Premium Add-ons</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {addons.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-brand-darker border border-white/5 rounded-full hover:border-brand-gold/30 hover:-translate-y-1 transition-all">
                  <Icon className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm tracking-wide text-gray-300">{addon.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 6. CONTACT SECTION
// ----------------------------------------------------------------------
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", occasion: "", guests: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp Message
    const message = `Hello Celestia! I'd like to request a consultation.

*Details:*
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Occasion:* ${formData.occasion}
- *Guests:* ${formData.guests}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919944650942?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", phone: "", occasion: "", guests: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-darker relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading mb-8 text-white">Initiate the Journey.</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
              Allow us to handle the complexity. Simply provide us with a starting point, and watch your vision transform into an immaculate reality.
            </p>
            
            <ul className="space-y-8">
              <li className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-brand-gray border border-white/5 flex items-center justify-center rounded-full group-hover:border-brand-gold/50 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Direct / WhatsApp</span>
                  <Link href="https://wa.me/919944650942" target="_blank" rel="noopener noreferrer" className="text-xl font-light hover:text-brand-gold transition-colors">
                    +91 99446 50942
                  </Link>
                </div>
              </li>
              
              <li className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-brand-gray border border-white/5 flex items-center justify-center rounded-full group-hover:border-brand-gold/50 transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Electronic Mail</span>
                  <Link href="mailto:hello@celestiaevent.com" className="text-xl font-light hover:text-brand-gold transition-colors">
                    hello@celestiaevent.com
                  </Link>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-brand-gray border border-white/5 flex items-center justify-center rounded-full group-hover:border-brand-gold/50 transition-colors shrink-0">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Headquarters</span>
                  <span className="text-xl font-light text-gray-300">
                    Tamil Nadu, Southern India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-brand-gray border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <h3 className="text-2xl font-heading mb-8 text-white text-center">Request Consultation</h3>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
                placeholder="Eleanor Vance"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Mobile Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
                placeholder="+91 00000 00000"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="occasion" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Occasion</label>
                <div className="relative">
                  <select 
                    id="occasion"
                    required
                    value={formData.occasion}
                    onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-4 text-white appearance-none focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
                  >
                    <option value="" disabled>Select Type...</option>
                    <option value="Majestic Wedding">Majestic Wedding</option>
                    <option value="Opulent Birthday">Opulent Birthday</option>
                    <option value="Treasured Baby Shower">Treasured Baby Shower</option>
                    <option value="Corporate Event">Corporate Event</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Guests</label>
                <div className="relative">
                  <select 
                    id="guests"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-4 text-white appearance-none focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
                  >
                    <option value="" disabled>Select Count...</option>
                    <option value="Under 100">Under 100</option>
                    <option value="100-300">100 - 300</option>
                    <option value="300+">300+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-5 mt-4 bg-brand-gold text-brand-dark font-sans uppercase tracking-[0.15em] text-sm font-bold rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-70 shadow-lg"
            >
              {isSubmitting ? "Processing..." : "Secure Consultation"}
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 7. FOOTER
// ----------------------------------------------------------------------
function Footer() {
  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tight text-brand-gold font-heading mb-6">CELESTIA</h2>
        <div className="flex gap-4 mb-8">
           {/* Instagram Icon inline SVG replacing unsupported lucide icon */}
           <a href="https://instagram.com/celestia_event_company" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
           </a>
        </div>
        <p className="text-sm font-light text-gray-600 tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Celestia Events Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ----------------------------------------------------------------------
// 8. FLOATING WHATSAPP BUTTON
// ----------------------------------------------------------------------
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919944650942?text=Hello%20Celestia!%20I'd%20like%20to%20chat%20about%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 shadow-xl border border-gray-100">
        Chat with us
      </span>
    </a>
  );
}
