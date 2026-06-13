import React from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import Home from './src/pages/Home.tsx';
    import About from './src/pages/About.tsx';
    import Brands from './src/pages/Brands.tsx';
    import Placeholder from './src/pages/Placeholder.tsx';
    import NotFound from './src/pages/NotFound.tsx';

    const App: React.FC = () => {
      return (
        <Theme appearance="light" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen font-sans selection:bg-primary/10 selection:text-primary">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/services" element={<Placeholder title="Distribution Services" />} />
                <Route path="/markets" element={<Placeholder title="Markets We Serve" />} />
                <Route path="/partner" element={<Placeholder title="Why Partner With Us" />} />
                <Route path="/news" element={<Placeholder title="News & Updates" />} />
                <Route path="/contact" element={<Placeholder title="Contact Us" />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </main>
          </Router>
        </Theme>
      );
    }

    export default App;