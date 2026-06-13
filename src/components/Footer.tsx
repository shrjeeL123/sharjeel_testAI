import React from 'react';
    import { Link } from 'react-router-dom';
    import { Linkedin, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-primary text-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <span className="font-serif text-2xl font-bold tracking-tight">
                  DOORS <span className="text-white/60 font-light">TO</span> ASIA
                </span>
                <p className="text-white/60 leading-relaxed max-w-xs">
                  The premier gateway for international brands seeking sophisticated distribution and market entry across Singapore and the Asian continent.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-4 text-white/60">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Our Mission</Link></li>
                  <li><Link to="/brands" className="hover:text-white transition-colors">Brand Portfolio</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Distribution Services</Link></li>
                  <li><Link to="/markets" className="hover:text-white transition-colors">Market Coverage</Link></li>
                  <li><Link to="/news" className="hover:text-white transition-colors">Latest Updates</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Contact</h4>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 shrink-0" />
                    <span>123 Distribution Way, #08-01<br />Singapore 123456</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0" />
                    <span>+65 6789 0123</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="shrink-0" />
                    <span>partnerships@doorstoasia.com</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
                <p className="text-white/60 mb-4 text-sm">Stay updated with market insights and new brand arrivals.</p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-white/30"
                  />
                  <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-white/90 transition-colors">
                    Join
                  </button>
                </form>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
              <p>© 2026 Doors To Asia. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;