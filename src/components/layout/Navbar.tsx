
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/0527d4b0-08bf-4c21-b366-c803762a7152.png" 
              alt="Nisa Hygiene" 
              className="h-10 md:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-nisa-navy font-medium hover:text-nisa-teal transition-colors duration-200 highlight-underline"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+97100000000" 
              className="ml-4 flex items-center bg-nisa-teal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-nisa-navy hover:text-nisa-teal transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container mx-auto px-4 py-5 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-nisa-navy text-lg font-medium hover:text-nisa-teal transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+97100000000" 
            className="flex items-center justify-center bg-nisa-teal text-white py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span>Call Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
