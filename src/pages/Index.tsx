import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowWeWork from '@/components/HowWeWork';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Hero />
      
      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading text-primary">
                Каталог услуг
              </h2>
              <p className="text-lg text-muted-foreground">
                Полный спектр производственных услуг
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link to="/comparison">
                <Icon name="Scale" size={16} className="mr-2" />
                Сравнить услуги
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="md:hidden">
              <Link to="/comparison">
                <Icon name="Scale" size={16} className="mr-2" />
                Сравнить услуги
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <HowWeWork />
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-primary">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Оценка <span className="text-accent font-bold">4.9</span> на Яндекс.Картах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Отличная типография! Быстро напечатали визитки и флаги для нашей компании. 
                  Качество на высоте, цены адекватные. Рекомендую!
                </p>
                <p className="text-sm font-medium">Компания "Пример {i}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 font-heading text-primary">
              Рекламным агентствам и типографиям
            </h3>
            <p className="text-muted-foreground mb-6">
              Специальные условия для B2B партнёров. Производственные мощности, 
              короткие сроки, конкурентные цены.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">
                Узнать условия сотрудничества
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
