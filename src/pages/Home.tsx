import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Globe, ShieldCheck, BarChart3, Truck, Users, Award } from 'lucide-react';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    const Home = () => {
      const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      };

      return (
        <div className="bg-white">
          <Navbar />
          
          {/* Hero Section */}
          <section className="relative h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2070" 
                alt="Singapore Skyline" 
                className="w-full h-full object-cover brightness-[0.4]"
              />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <span className="inline-block text-accent-foreground/80 font-semibold tracking-[0.2em] uppercase mb-6 text-sm border-l-2 border-accent-foreground/40 pl-4">
                  Premium Distribution Partner
                </span>
                <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8">
                  Your Gateway to the <span className="italic text-white/80">Asian Market</span>
                </h1>
                <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
                  We bridge the gap between global excellence and local demand, providing world-class brands with seamless entry into Singapore and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                    Partner With Us <ArrowRight size={20} />
                  </button>
                  <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                    Explore Brands
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Positioning Statement */}
          <section className="py-24 bg-secondary/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div {...fadeIn}>
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 leading-snug">
                  "We don't just distribute products; we build legacies for international brands in the world's most dynamic markets."
                </h2>
                <div className="w-20 h-1 bg-primary/10 mx-auto mb-8"></div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Doors To Asia is a premium B2B distribution powerhouse. We specialize in introducing high-end F&B, lifestyle, and wellness brands to retail chains, luxury hotels, and corporate partners across the Asian continent.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Trusted Partners Logo Wall */}
          <section className="py-16 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-12">Trusted by Global Leaders</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder logos */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex justify-center">
                    <div className="h-12 w-32 bg-muted rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise Grid */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-4xl text-primary mb-4">Unrivaled Market Access</h2>
                  <p className="text-muted-foreground text-lg">Our comprehensive distribution network ensures your brand reaches the right audience through the right channels.</p>
                </div>
                <button className="text-primary font-bold flex items-center gap-2 group">
                  View All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Globe className="text-primary" />, title: "Strategic Market Entry", desc: "Tailored strategies for navigating complex Asian regulatory and retail landscapes." },
                  { icon: <Truck className="text-primary" />, title: "Premium Logistics", desc: "State-of-the-art cold chain and ambient storage solutions for sensitive products." },
                  { icon: <BarChart3 className="text-primary" />, title: "Data-Driven Growth", desc: "Real-time market analytics and consumer insights to drive sustainable expansion." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    {...fadeIn}
                    transition={{ delay: idx * 0.1 }}
                    className="p-10 rounded-2xl border border-border/50 hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
                  >
                    <div className="mb-6 p-3 bg-secondary rounded-xl w-fit">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Brands */}
          <section className="py-24 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="font-serif text-4xl mb-4">Our Curated Portfolio</h2>
                <p className="text-white/60 text-lg">Representing excellence across diverse categories.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div {...fadeIn} className="group relative rounded-3xl overflow-hidden aspect-[16/10]">
                  <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                    alt="Luxury F&B" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                    <span className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Gourmet & Fine Foods</span>
                    <h3 className="text-3xl font-serif mb-4">Artisanal European Delicacies</h3>
                    <p className="text-white/70 max-w-md mb-6">Bringing the finest flavors from the Mediterranean to Asia's top-tier supermarkets and restaurants.</p>
                    <button className="w-fit flex items-center gap-2 font-bold border-b border-white/30 pb-1 hover:border-white transition-colors">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>

                <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="group relative rounded-3xl overflow-hidden aspect-[16/10]">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000" 
                    alt="Wellness Brands" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                    <span className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Health & Wellness</span>
                    <h3 className="text-3xl font-serif mb-4">Premium Organic Supplements</h3>
                    <p className="text-white/70 max-w-md mb-6">Leading the wellness revolution with scientifically-backed, premium organic brands from North America.</p>
                    <button className="w-fit flex items-center gap-2 font-bold border-b border-white/30 pb-1 hover:border-white transition-colors">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Why Partner With Us */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div {...fadeIn}>
                  <h2 className="font-serif text-4xl text-primary mb-8">Why Global Brands Choose Doors To Asia</h2>
                  <div className="space-y-8">
                    {[
                      { icon: <ShieldCheck className="text-accent-foreground" />, title: "Trusted Reputation", desc: "Over a decade of building strong relationships with Asia's largest retail chains." },
                      { icon: <Users className="text-accent-foreground" />, title: "Local Expertise", desc: "Our team understands the cultural nuances and consumer behaviors of each market." },
                      { icon: <Award className="text-accent-foreground" />, title: "Quality Assurance", desc: "Rigorous standards for handling, storage, and brand representation." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="shrink-0">{item.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                      alt="B2B Meeting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block">
                    <p className="text-4xl font-serif text-primary mb-2">98%</p>
                    <p className="text-muted-foreground font-medium">Partner retention rate over the last 5 years.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-secondary">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <motion.div {...fadeIn} className="bg-white p-16 rounded-[3rem] shadow-sm border border-border/50">
                <h2 className="font-serif text-4xl text-primary mb-6">Ready to Expand Your Reach?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join our network of premium international brands and unlock the potential of the Asian market today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                    Become a Partner
                  </button>
                  <button className="border border-primary/20 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      );
    };

    export default Home;