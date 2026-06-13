import React from 'react';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    export default function Placeholder({ title }: { title: string }) {
      return (
        <div className="bg-white">
          <Navbar />
          <section className="pt-40 pb-24 min-h-[60vh] flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-center w-full">
              <h1 className="font-serif text-5xl text-primary mb-6">{title}</h1>
              <p className="text-xl text-muted-foreground mb-8">Coming soon</p>
              <div className="p-12 border-2 border-dashed border-border rounded-3xl bg-secondary/20">
                <p className="text-muted-foreground">Use Meku to generate content for this page</p>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    }