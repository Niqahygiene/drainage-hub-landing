
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-6 rounded-2xl transition-all duration-500 hover:shadow-xl group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-nisa-teal/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-nisa-teal/20 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-nisa-navy mb-3">{title}</h3>
      
      <p className="text-nisa-gray mb-5">
        {description}
      </p>
      
      <div className="flex justify-end">
        <button className="text-nisa-teal inline-flex items-center font-medium group-hover:text-nisa-navy transition-colors duration-300">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
