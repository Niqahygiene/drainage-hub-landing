
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  delay?: number;
}

const TestimonialCard = ({ name, location, rating, testimonial, delay = 0 }: TestimonialCardProps) => {
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
      className={`glass-card rounded-2xl p-6 h-full flex flex-col transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index} 
            className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-nisa-gray mb-6 flex-grow">"{testimonial}"</p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-nisa-navy">{name}</h4>
          <p className="text-sm text-nisa-gray">{location}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-nisa-teal/20 flex items-center justify-center">
          <span className="text-nisa-teal font-semibold">{name.charAt(0)}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
