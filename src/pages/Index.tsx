
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import FloatingContact from '../components/ui/FloatingContact';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the 'reveal' class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      // Clean up observers on component unmount
      observer.disconnect();
    };
  }, []);

  // Schema.org structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Niqa Hygiene",
    "image": "https://www.drainagecleaning.ae/og-image.png",
    "description": "Professional drainage cleaning and maintenance services for residential and commercial properties across the UAE.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Dubai",
      "addressCountry": "UAE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.276987",
      "longitude": "55.296249"
    },
    "url": "https://www.drainagecleaning.ae",
    "telephone": "+971123456789",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/drainagecleaningae",
      "https://www.instagram.com/drainagecleaningae"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Niqa Hygiene | Professional Drainage Services in UAE</title>
        <meta name="description" content="Professional drainage cleaning and maintenance services for residential and commercial properties across the UAE. 24/7 emergency service available." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link rel="canonical" href="https://www.drainagecleaning.ae" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
