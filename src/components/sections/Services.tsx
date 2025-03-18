
import { useEffect, useRef, useState } from 'react';
import { Pipette, Droplets, Wrench, Home, Building2, Trash2, Droplet, Waves } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Pipette className="h-6 w-6 text-nisa-teal" />,
      title: "Drain Unblocking",
      description: "Quick and effective solutions for blocked drains, using advanced techniques to clear any obstruction."
    },
    {
      icon: <Droplets className="h-6 w-6 text-nisa-teal" />,
      title: "High-Pressure Jetting",
      description: "Powerful water jets to clean pipe interiors, removing built-up debris and preventing blockages."
    },
    {
      icon: <Wrench className="h-6 w-6 text-nisa-teal" />,
      title: "Drain Repairs",
      description: "Expert repairs for damaged or broken drains, restoring proper functionality and preventing leaks."
    },
    {
      icon: <Home className="h-6 w-6 text-nisa-teal" />,
      title: "Residential Services",
      description: "Comprehensive drainage solutions for homes, from routine maintenance to emergency callouts."
    },
    {
      icon: <Building2 className="h-6 w-6 text-nisa-teal" />,
      title: "Commercial Services",
      description: "Specialized drainage care for businesses, minimizing disruption while ensuring efficient systems."
    },
    {
      icon: <Trash2 className="h-6 w-6 text-nisa-teal" />,
      title: "Waste Removal",
      description: "Safe and hygienic removal of waste from drainage systems, adhering to environmental regulations."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden bg-nisa-lightGray">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nisa-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full bg-nisa-teal/10 text-nisa-teal text-sm font-medium mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <Droplet className="mr-1 h-4 w-4" />
            <span>Our Expertise</span>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold text-nisa-navy mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Comprehensive Drainage <span className="text-nisa-teal">Services</span>
          </h2>
          
          <p 
            className={`text-nisa-gray text-lg ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            We offer a complete range of drainage cleaning and maintenance services to keep your systems flowing smoothly and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={100 * index}
            />
          ))}
        </div>
        
        <div 
          className={`mt-16 p-6 md:p-8 rounded-2xl glass-card water-effect ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="bg-nisa-teal/20 p-3 rounded-full mr-4">
                <Waves className="h-8 w-8 text-nisa-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-nisa-navy">Emergency Drainage Service</h3>
                <p className="text-nisa-gray">Available 24/7 for urgent drainage problems</p>
              </div>
            </div>
            
            <a 
              href="tel:+97100000000" 
              className="bg-nisa-navy text-white px-6 py-3 rounded-md hover:bg-nisa-darkNavy transition-all duration-300 flex items-center justify-center whitespace-nowrap"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
