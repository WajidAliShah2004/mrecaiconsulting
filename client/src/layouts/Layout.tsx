'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import BackToTop from '../components/common/BackToTop';
import ScrollProgress from '../components/common/ScrollProgress';
import AIChat from '../components/features/AIChat';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: false,
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
    });

    // Refresh AOS on route change
    return () => {
      AOS.refresh();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <BackToTop />
      <AIChat />
    </div>
  );
};

export default Layout;
