import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A23</span>
              </div>
              <div>
                <h3 className="font-bold text-lg font-heading">АДМИРАЛ-23</h3>
                <p className="text-xs text-white/70">Производственная компания</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Icon name="MessageSquare" size={20} />
              </a>
              <a
                href="https://rutube.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Icon name="Video" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+79281234567" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon name="Phone" size={16} />
                <span>8 (928) 123-45-67</span>
              </a>
              <a href="mailto:info@admiral23.ru" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon name="Mail" size={16} />
                <span>info@admiral23.ru</span>
              </a>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span>г. Ростов-на-Дону,<br />ул. Примерная, 123</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Режим работы</h4>
            <div className="space-y-2 text-sm">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 15:00</p>
              <p>Вс: Выходной</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="mt-4 border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://rutube.ru', '_blank')}
            >
              <Icon name="MapPin" size={16} className="mr-2" />
              Как нас найти?
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-heading">Карта</h4>
            <div className="w-full h-48 bg-white/10 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.0!2d39.7!3d47.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEyJzAwLjAiTiAzOcKwNDInMDAuMCJF!5e0!3m2!1sru!2sru!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2024 Адмирал-23. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
