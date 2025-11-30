import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <a 
            href="tel:+79281234567" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone size={16} />
            <span>8 (928) 123-45-67</span>
          </a>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>г. Ростов-на-Дону, ул. Примерная, 123</span>
          </div>
          
          <Button 
            size="sm" 
            variant="secondary"
            className="bg-accent hover:bg-accent/90"
            onClick={() => window.open('https://wa.me/79281234567', '_blank')}
          >
            <MessageCircle size={16} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
