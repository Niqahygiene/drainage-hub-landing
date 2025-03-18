
import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Users, Award, CheckCircle2, Droplet } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-nisa-teal" />,
      title: "Fully Licensed & Insured",
      description: "We maintain all necessary certifications to provide drainage services with full coverage."
    },
    {
      icon: <Clock className="h-6 w-6 text-nisa-teal" />,
      title: "Prompt Response Times",
      description: "Our team is committed to quick response times for both scheduled services and emergencies."
    },
    {
      icon: <Users className="h-6 w-6 text-nisa-teal" />,
      title: "Experienced Team",
      description: "Our technicians have years of experience handling all types of drainage issues."
    },
    {
      icon: <Award className="h-6 w-6 text-nisa-teal" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on all services provided."
    }
  ];

  const advantages = [
    "State-of-the-art equipment",
    "Environmentally friendly methods",
    "Transparent pricing",
    "Preventive maintenance plans",
    "Detailed inspection reports",
    "No hidden charges"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div 
            className={`relative order-2 lg:order-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative max-w-md mx-auto lg:mr-0">
              <div className="absolute inset-0 bg-nisa-navy/10 rounded-tr-3xl rounded-bl-3xl transform -rotate-6 animate-float" />
              <div className="glass-card p-3 rounded-tr-3xl rounded-bl-3xl shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Professional Drainage Team" 
                  className="w-full h-auto rounded-tr-2xl rounded-bl-2xl object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              
              <div className="glass-card absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg max-w-[200px] animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-nisa-teal/20 p-2 rounded-full">
                    <Users className="h-6 w-6 text-nisa-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-nisa-navy">Expert Team</p>
                    <p className="text-sm text-nisa-gray">Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="order-1 lg:order-2">
            <div 
              className={`inline-flex items-center px-3 py-1 rounded-full bg-nisa-teal/10 text-nisa-teal text-sm font-medium mb-4 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              <Droplet className="mr-1 h-4 w-4" />
              <span>About Nisa Hygiene</span>
            </div>
            
            <h2 
              className={`text-3xl md:text-4xl font-bold text-nisa-navy mb-4 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              UAE's Trusted Drainage <span className="text-nisa-teal">Cleaning Experts</span>
            </h2>
            
            <p 
              className={`text-nisa-gray text-lg mb-6 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              At Nisa Hygiene, we specialize in providing comprehensive drainage cleaning and maintenance services across the UAE. With years of experience, we've built a reputation for reliability, quality, and exceptional customer service.
            </p>
            
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="bg-nisa-teal/10 p-2 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-nisa-navy mb-1">{feature.title}</h3>
                    <p className="text-sm text-nisa-gray">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              className={`bg-nisa-lightGray rounded-xl p-6 mb-6 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="font-semibold text-nisa-navy mb-3">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-nisa-teal" />
                    <span className="text-nisa-gray">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="#contact" 
              className={`inline-flex items-center bg-nisa-navy text-white px-6 py-3 rounded-md hover:bg-nisa-darkNavy transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
