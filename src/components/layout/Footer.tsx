
import { Droplet, PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Drain Unblocking", href: "#services" },
    { name: "High-Pressure Jetting", href: "#services" },
    { name: "Drain Repairs", href: "#services" },
    { name: "Residential Services", href: "#services" },
    { name: "Commercial Services", href: "#services" },
    { name: "Waste Removal", href: "#services" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <PhoneCall className="h-5 w-5" />, text: "+971 50 123 4567", href: "tel:+97150123456" },
    { icon: <Mail className="h-5 w-5" />, text: "info@drainagecleaning.ae", href: "mailto:info@drainagecleaning.ae" },
    { icon: <MapPin className="h-5 w-5" />, text: "Dubai, United Arab Emirates", href: "https://maps.google.com/?q=Dubai,UAE" }
  ];

  return (
    <footer className="bg-nisa-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <a href="#home" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/0527d4b0-08bf-4c21-b366-c803762a7152.png" 
                alt="Nisa Hygiene" 
                className="h-12 brightness-0 invert"
              />
            </a>
            <p className="text-gray-300 mb-6">
              Professional drainage cleaning and maintenance services across the UAE. Available 24/7 for all your drainage needs.
            </p>
            <div className="bg-nisa-teal/20 p-4 rounded-lg inline-flex items-center">
              <Droplet className="h-6 w-6 text-nisa-teal mr-3" />
              <div>
                <p className="text-white font-medium">Emergency Service</p>
                <a href="tel:+97150123456" className="text-nisa-teal">+971 50 123 4567</a>
              </div>
            </div>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-nisa-teal after:left-0 after:-bottom-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-nisa-teal transition-colors duration-200 group flex items-center"
                  >
                    <ArrowRight className="h-4 w-0 mr-0 group-hover:w-4 group-hover:mr-2 overflow-hidden transition-all duration-300 text-nisa-teal" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-nisa-teal after:left-0 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-nisa-teal transition-colors duration-200 group flex items-center"
                  >
                    <ArrowRight className="h-4 w-0 mr-0 group-hover:w-4 group-hover:mr-2 overflow-hidden transition-all duration-300 text-nisa-teal" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-nisa-teal after:left-0 after:-bottom-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="flex items-start space-x-3 text-gray-300 hover:text-nisa-teal transition-colors duration-200"
                    target={index === 2 ? "_blank" : undefined}
                    rel={index === 2 ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-white/10 p-2 rounded mt-1">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {currentYear} Nisa Hygiene. All rights reserved. <a href="http://www.drainagecleaning.ae" className="text-nisa-teal hover:underline">www.drainagecleaning.ae</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
