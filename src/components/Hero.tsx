import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-[#ff7722] to-accent text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            Производственная компания полного цикла
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Печать, производство и монтаж рекламной продукции любой сложности
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-xl hover:bg-white/25 transition-all">
              <Icon name="CheckCircle" size={22} />
              <span className="font-medium">Собственное производство</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-xl hover:bg-white/25 transition-all">
              <Icon name="Clock" size={22} />
              <span className="font-medium">Срочные заказы</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-xl hover:bg-white/25 transition-all">
              <Icon name="Award" size={22} />
              <span className="font-medium">25+ видов материалов</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-semibold"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/15 backdrop-blur-xl border-white/30 text-white hover:bg-white/25 text-lg px-10 py-6 rounded-2xl shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;