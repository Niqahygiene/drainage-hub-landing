
import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the floating buttons after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 flex flex-col gap-3 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+971123456789"
        className="flex items-center justify-center w-14 h-14 bg-nisa-navy text-white rounded-full shadow-lg hover:bg-nisa-teal transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
};

export default FloatingContact;
