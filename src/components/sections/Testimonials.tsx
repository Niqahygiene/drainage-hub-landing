
import { useEffect, useRef, useState } from 'react';
import { Droplet, MessageSquareQuote } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      location: "Dubai",
      rating: 5,
      testimonial: "Exceptional service! The team was prompt, professional, and solved our persistent drainage issue on the first visit. Highly recommended for anyone in Dubai facing drainage problems."
    },
    {
      name: "Sarah Johnson",
      location: "Abu Dhabi",
      rating: 5,
      testimonial: "I was impressed by their attention to detail and thoroughness. They identified issues that previous companies had missed and provided a permanent solution. Great value for money."
    },
    {
      name: "Mohammed Hassan",
      location: "Sharjah",
      rating: 4,
      testimonial: "Responsive and reliable service. They arrived within an hour of my emergency call and quickly resolved the blockage. Their technicians were knowledgeable and courteous."
    },
    {
      name: "Fatima Al Zaabi",
      location: "Ajman",
      rating: 5,
      testimonial: "I've been using their maintenance services for our commercial property for over a year now. Their preventive approach has saved us from costly emergency repairs. Very professional team."
    },
    {
      name: "John Williams",
      location: "Dubai Marina",
      rating: 5,
      testimonial: "The team went above and beyond to solve a complex drainage issue in our building. They used specialized equipment and provided detailed explanations throughout the process."
    },
    {
      name: "Aisha Al Falasi",
      location: "Ras Al Khaimah",
      rating: 4,
      testimonial: "Prompt, clean, and efficient service. The technicians were respectful of our property and left everything spotless after completing the work. Fair pricing too."
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 relative overflow-hidden bg-nisa-lightGray">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-nisa-teal/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full bg-nisa-teal/10 text-nisa-teal text-sm font-medium mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <MessageSquareQuote className="mr-1 h-4 w-4" />
            <span>Client Feedback</span>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold text-nisa-navy mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            What Our <span className="text-nisa-teal">Clients Say</span>
          </h2>
          
          <p 
            className={`text-nisa-gray text-lg ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            We take pride in delivering exceptional service and building lasting relationships with our clients across the UAE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
              delay={100 * index}
            />
          ))}
        </div>
        
        <div 
          className={`mt-16 flex justify-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="glass-card p-6 rounded-2xl flex items-center max-w-lg">
            <div className="bg-nisa-teal/20 p-3 rounded-full mr-4">
              <Droplet className="h-8 w-8 text-nisa-teal" />
            </div>
            <div>
              <p className="text-nisa-navy font-medium">
                Join our growing list of satisfied clients and experience the Nisa Hygiene difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
