
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Droplet } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Show success message (in a real app, this would be a toast notification)
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-nisa-teal" />,
      title: "Phone",
      detail: "+971 50 542 5873",
      link: "tel:+971505425873"
    },
    {
      icon: <Mail className="h-5 w-5 text-nisa-teal" />,
      title: "Email",
      detail: "info@drainagecleaning.ae",
      link: "mailto:info@drainagecleaning.ae"
    },
    {
      icon: <MapPin className="h-5 w-5 text-nisa-teal" />,
      title: "Address",
      detail: "Dubai, United Arab Emirates",
      link: "https://maps.google.com/?q=Dubai,UAE"
    },
    {
      icon: <Clock className="h-5 w-5 text-nisa-teal" />,
      title: "Working Hours",
      detail: "24/7 Emergency Service",
      link: "#"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full bg-nisa-teal/10 text-nisa-teal text-sm font-medium mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <Droplet className="mr-1 h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          
          <h2 
            className={`text-3xl md:text-4xl font-bold text-nisa-navy mb-4 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Contact <span className="text-nisa-teal">Us Today</span>
          </h2>
          
          <p 
            className={`text-nisa-gray text-lg ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Have questions about our services or need a quote? We're here to help. Reach out to our team for prompt assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div 
            className={`lg:col-span-2 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-semibold text-nisa-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link}
                    className="flex items-start space-x-4 group"
                    target={info.title === "Address" ? "_blank" : undefined}
                    rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-nisa-teal/10 p-2 rounded-md group-hover:bg-nisa-teal/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-nisa-navy">{info.title}</h4>
                      <p className="text-nisa-gray group-hover:text-nisa-teal transition-colors">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 p-5 bg-nisa-teal/10 rounded-xl">
                <h4 className="font-medium text-nisa-navy mb-2">Emergency Service</h4>
                <p className="text-nisa-gray mb-4">Need urgent assistance? Call our 24/7 emergency line.</p>
                <a 
                  href="tel:+97150123456" 
                  className="inline-flex items-center bg-nisa-navy text-white px-5 py-2 rounded-md hover:bg-nisa-darkNavy transition-all duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-nisa-navy mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-nisa-navy mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nisa-teal focus:border-transparent transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-nisa-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nisa-teal focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-nisa-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nisa-teal focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-nisa-navy mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nisa-teal focus:border-transparent transition-all"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="drain-unblocking">Drain Unblocking</option>
                      <option value="high-pressure-jetting">High-Pressure Jetting</option>
                      <option value="drain-repairs">Drain Repairs</option>
                      <option value="residential">Residential Services</option>
                      <option value="commercial">Commercial Services</option>
                      <option value="waste-removal">Waste Removal</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nisa-navy mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-nisa-teal focus:border-transparent transition-all"
                    placeholder="Tell us about your drainage issue or request..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-nisa-navy text-white py-3 rounded-md hover:bg-nisa-darkNavy transition-all duration-300 flex items-center justify-center btn-ripple"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
