import React from 'react';
    import { Link } from 'react-router-dom';
    import { Home } from 'lucide-react';

    export default function NotFound() {
      return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-6">
          <div className="text-center max-w-md">
            <h1 className="text-9xl font-serif text-primary/10 mb-4">404</h1>
            <h2 className="text-3xl font-serif text-primary mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <Home size={20} /> Back to Home
            </Link>
          </div>
        </div>
      );
    }