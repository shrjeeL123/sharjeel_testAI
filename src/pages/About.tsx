import React from 'react';
    import { motion } from 'framer-motion';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';
    import { Target, Eye, Heart } from 'lucide-react';

    const About = () => {
      const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      };

      return (
        <div className="bg-white">
          <Navbar />
          
          {/* Hero */}
          <section className="pt-40 pb-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div {...fadeIn} className="max-w-3xl">
                <h1 className="font-serif text-5xl md:text-6xl text-primary mb-8">Pioneering Premium Distribution Since 2012</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Doors To Asia was founded with a singular vision: to connect the world's most exceptional brands with the discerning consumers of Asia.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Story */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div {...fadeIn}>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Our Team" 
                    className="rounded-3xl shadow-2xl"
                  />
                </motion.div>
                <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                  <h2 className="font-serif text-3xl text-primary mb-6">Our Story</h2>
                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      What started as a small boutique agency in Singapore has grown into a comprehensive distribution network spanning multiple countries and categories.
                    </p>
                    <p>
                      We recognized early on that the Asian market requires more than just logistics; it requires a deep understanding of cultural values, premium positioning, and long-term relationship building.
                    </p>
                    <p>
                      Today, we are proud to represent over 50 international brands, serving thousands of retail points and establishing ourselves as the trusted partner for market entry.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission/Vision */}
          <section className="py-24 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: <Target className="w-10 h-10 mb-6 text-accent-foreground" />, title: "Our Mission", desc: "To empower global brands with the infrastructure and expertise needed to thrive in the Asian marketplace." },
                  { icon: <Eye className="w-10 h-10 mb-6 text-accent-foreground" />, title: "Our Vision", desc: "To be the definitive bridge between international innovation and Asian consumer demand." },
                  { icon: <Heart className="w-10 h-10 mb-6 text-accent-foreground" />, title: "Our Values", desc: "Integrity, excellence, and a relentless commitment to the success of our brand partners." }
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }}>
                    {item.icon}
                    <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      );
    };

    export default About;