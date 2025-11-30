import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const CTA = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, phone, message });
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-[#ff7722] to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Готовы начать проект?
            </h2>
            <p className="text-lg text-white/90">
              Оставьте заявку и получите консультацию специалиста в течение 15 минут
            </p>
          </div>

          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-32"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white flex-1 md:flex-none"
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
                <Button 
                  type="button"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 flex-1 md:flex-none"
                  onClick={() => window.open('https://wa.me/79281234567', '_blank')}
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  type="button"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 flex-1 md:flex-none"
                  onClick={() => window.location.href = 'tel:+79281234567'}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;