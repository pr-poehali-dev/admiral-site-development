import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { allServices } from '@/data/services';
import { categories } from '@/data/categories';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Услуга не найдена</h1>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.slug === service.categorySlug);
  const relatedServices = allServices.filter(
    (s) => s.categorySlug === service.categorySlug && s.id !== service.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-[#df7e1f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to={`/category/${service.categorySlug}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Вернуться к категории</span>
            </Link>

            <div className="flex items-start gap-6">
              <div className="p-5 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                <Icon name={service.icon as any} size={48} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {category?.name}
                  </Badge>
                  {service.turnaround && (
                    <Badge variant="secondary" className="bg-accent/90 text-white">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {service.turnaround}
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                  {service.name}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {service.shortDescription}
                </p>

                {service.priceFrom && (
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 mb-6">
                    <Icon name="Tag" size={20} />
                    <span className="text-lg">от <strong className="text-2xl">{service.priceFrom}</strong></span>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Заказать услугу
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                    onClick={() => window.open('https://wa.me/79281234567', '_blank')}
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-white to-muted/20">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                    <CardTitle className="text-2xl font-heading flex items-center gap-2">
                      <Icon name="Info" size={24} className="text-primary" />
                      Описание услуги
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    <h3 className="text-xl font-semibold mb-4 font-heading">Основные преимущества:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon name="CheckCircle" size={20} className="text-primary" />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {service.materials && service.materials.length > 0 && (
                  <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                      <CardTitle className="text-2xl font-heading flex items-center gap-2">
                        <Icon name="Layers" size={24} className="text-accent" />
                        Материалы и варианты
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="flex flex-wrap gap-3">
                        {service.materials.map((material, idx) => (
                          <div 
                            key={idx}
                            className="px-5 py-3 bg-gradient-to-br from-white to-muted/50 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all cursor-default"
                          >
                            <span className="font-medium">{material}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-xl rounded-2xl overflow-hidden sticky top-24 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">Быстрый заказ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-white rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Срок изготовления</p>
                          <p className="font-semibold">{service.turnaround || '1-7 дней'}</p>
                        </div>
                      </div>
                    </div>

                    {service.priceFrom && (
                      <div className="p-4 bg-white rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon name="DollarSign" size={20} className="text-accent" />
                          <div>
                            <p className="text-sm text-muted-foreground">Стоимость</p>
                            <p className="font-semibold text-lg">{service.priceFrom}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 shadow-lg"
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Icon name="Send" size={18} className="mr-2" />
                      Заказать
                    </Button>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open('https://wa.me/79281234567', '_blank')}
                      >
                        <Icon name="MessageCircle" size={18} />
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.location.href = 'tel:+79281234567'}
                      >
                        <Icon name="Phone" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardTitle className="text-2xl font-heading flex items-center gap-2">
                    <Icon name="Grid" size={24} className="text-primary" />
                    Похожие услуги
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        to={`/service/${relatedService.slug}`}
                        className="group"
                      >
                        <Card className="h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
                          <CardContent className="p-6">
                            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                              <Icon name={relatedService.icon as any} size={28} className="text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2 font-heading group-hover:text-primary transition-colors">
                              {relatedService.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              {relatedService.shortDescription}
                            </p>
                            {relatedService.priceFrom && (
                              <p className="text-sm font-semibold text-primary">
                                от {relatedService.priceFrom}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ServicePage;
