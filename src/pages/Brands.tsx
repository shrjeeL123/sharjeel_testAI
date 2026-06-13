import React from 'react';
    import { motion } from 'framer-motion';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';
    import { Search, Filter } from 'lucide-react';

    const Brands = () => {
      const categories = ["All", "Gourmet Food", "Beverages", "Wellness", "Lifestyle", "Beauty"];
      
      const brands = [
        { name: "Alpine Springs", category: "Beverages", image: "https://placehold.co/600x400" },
        { name: "Terra Organic", category: "Wellness", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" },
        { name: "Maison de Luxe", category: "Lifestyle", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600" },
        { name: "Nordic Harvest", category: "Gourmet Food", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" },
        { name: "Pure Essence", category: "Beauty", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" },
        { name: "Vino Veritas", category: "Beverages", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" },
      ];

      return (
        <div className="bg-white">
          <Navbar />
          
          <section className="pt-40 pb-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-16">
                <h1 className="font-serif text-5xl text-primary mb-6">Our Brand Portfolio</h1>
                <p className="text-xl text-muted-foreground">
                  A curated selection of the world's finest brands, exclusively distributed by Doors To Asia.
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button key={cat} className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat === "All" ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground hover:bg-secondary/80'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search brands..." 
                    className="w-full pl-12 pr-4 py-3 bg-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {brands.map((brand, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
                      <img 
                        src={brand.image} 
                        alt={brand.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-lg">View Details</button>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-accent-foreground uppercase tracking-widest mb-1">{brand.category}</p>
                    <h3 className="text-xl font-bold text-primary">{brand.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      );
    };

    export default Brands;