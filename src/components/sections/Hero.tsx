
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Droplet, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const features = [
    { icon: <CheckCircle2 className="h-5 w-5 text-nisa-teal" />, text: "24/7 Emergency Service" },
    { icon: <CheckCircle2 className="h-5 w-5 text-nisa-teal" />, text: "Guaranteed Results" },
    { icon: <CheckCircle2 className="h-5 w-5 text-nisa-teal" />, text: "Professional Equipment" }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-nisa-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-100/80 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div 
            className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-nisa-teal/10 text-nisa-teal text-sm font-medium">
              <Droplet className="mr-1 h-4 w-4" />
              <span>Professional Drainage Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-nisa-navy">
              Expert Drainage <span className="text-nisa-teal">Cleaning</span> Services in UAE
            </h1>
            
            <p className="text-lg text-nisa-gray max-w-xl">
              We provide professional drainage cleaning services for residential and commercial properties across the UAE. Our expert team ensures clean, efficient, and blockage-free drainage systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center bg-nisa-navy text-white px-6 py-3 rounded-md hover:bg-nisa-darkNavy transition-all duration-300 btn-ripple"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center bg-white text-nisa-navy border border-nisa-navy/20 px-6 py-3 rounded-md hover:border-nisa-teal hover:text-nisa-teal transition-all duration-300"
              >
                Our Services
              </a>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {feature.icon}
                  <span className="text-nisa-navy font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            className={`relative flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-nisa-teal/20 rounded-tl-3xl rounded-br-3xl transform rotate-6 animate-float" />
              <div className="glass-card p-3 rounded-tl-3xl rounded-br-3xl shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Professional Drainage Cleaning" 
                  className="w-full h-auto rounded-tl-2xl rounded-br-2xl object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              
              {/* Fixed position to avoid overlap - moved to bottom-right instead of bottom-left */}
              <div className="glass-card absolute -bottom-4 -right-4 p-4 rounded-xl shadow-lg max-w-[220px] animate-fade-in-up z-20" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-nisa-teal/20 p-2 rounded-full">
                    <Droplet className="h-6 w-6 text-nisa-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-nisa-navy">100% Satisfaction</p>
                    <p className="text-sm text-nisa-gray">Guaranteed service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
