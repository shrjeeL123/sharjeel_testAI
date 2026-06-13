import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X, ChevronRight } from 'lucide-react';

    const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Our Brands', path: '/brands' },
      { name: 'Services', path: '/services' },
      { name: 'Markets', path: '/markets' },
      { name: 'Partner', path: '/partner' },
      { name: 'News', path: '/news' },
    ];

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const location = useLocation();

      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                DOORS <span className="text-accent-foreground/60 font-light">TO</span> ASIA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-primary/60 ${location.pathname === link.path ? 'text-primary border-b border-primary/30' : 'text-muted-foreground'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-white border-t border-border p-6 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium flex justify-between items-center py-2 border-b border-border/50"
                    >
                      {link.name}
                      <ChevronRight size={18} className="text-muted-foreground" />
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-primary text-white text-center py-4 rounded-lg font-bold"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
    };

    export default Navbar;