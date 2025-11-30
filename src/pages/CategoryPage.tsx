import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { allServices } from '@/data/services';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Категория не найдена</h1>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary via-primary to-[#df7e1f] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <Icon name="ArrowLeft" size={20} />
              <span>Вернуться к каталогу</span>
            </Link>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Icon name={category.icon as any} size={40} className="text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                  {category.name}
                </h1>
                <p className="text-lg text-white/90 mb-6">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => window.open('https://wa.me/79281234567', '_blank')}
                  >
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="how-we-work">Как работаем</TabsTrigger>
                <TabsTrigger value="why-us">Почему мы</TabsTrigger>
                <TabsTrigger value="faq">Вопросы</TabsTrigger>
                <TabsTrigger value="price">Прайс</TabsTrigger>
                <TabsTrigger value="examples">Примеры</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <Card className="border-0 shadow-xl rounded-2xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading">Описание услуг</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {category.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-6">Наши услуги:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {allServices
                        .filter(s => s.categorySlug === category.slug)
                        .map((service) => (
                          <Link
                            key={service.id}
                            to={`/service/${service.slug}`}
                            className="flex items-start gap-4 p-5 bg-gradient-to-br from-white to-muted/30 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-border hover:border-primary"
                          >
                            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                              <Icon name={service.icon as any} size={24} className="text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{service.name}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{service.shortDescription}</p>
                              {service.priceFrom && (
                                <p className="text-sm font-semibold text-primary">от {service.priceFrom}</p>
                              )}
                            </div>
                            <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="how-we-work">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 font-heading">Как мы работаем</h2>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'Консультация', desc: 'Обсуждаем детали вашего проекта и технические требования' },
                        { step: '2', title: 'Расчёт', desc: 'Рассчитываем стоимость и сроки изготовления' },
                        { step: '3', title: 'Дизайн', desc: 'Создаём макет или адаптируем ваш под производство' },
                        { step: '4', title: 'Производство', desc: 'Изготавливаем продукцию на современном оборудовании' },
                        { step: '5', title: 'Контроль качества', desc: 'Проверяем каждое изделие перед отгрузкой' },
                        { step: '6', title: 'Доставка', desc: 'Доставляем в указанное место или готовим к самовывозу' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="why-us">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 font-heading">Почему выбирают нас</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: 'Zap', title: 'Быстро', desc: 'Короткие сроки производства' },
                        { icon: 'Award', title: 'Качественно', desc: 'Контроль на каждом этапе' },
                        { icon: 'DollarSign', title: 'Выгодно', desc: 'Прямые цены от производителя' },
                        { icon: 'Wrench', title: 'Современно', desc: 'Новейшее оборудование' },
                        { icon: 'Users', title: 'Профессионально', desc: 'Опытная команда специалистов' },
                        { icon: 'ThumbsUp', title: 'Надёжно', desc: 'Гарантия на все работы' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                          <Icon name={item.icon as any} size={24} className="text-primary" />
                          <div>
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 font-heading">Часто задаваемые вопросы</h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Какие сроки изготовления?</AccordionTrigger>
                        <AccordionContent>
                          Стандартные сроки изготовления от 1 до 7 рабочих дней в зависимости от сложности и объёма заказа. 
                          Возможно срочное изготовление за дополнительную плату.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Нужен ли предоплата?</AccordionTrigger>
                        <AccordionContent>
                          Для новых клиентов требуется предоплата 50%. Для постоянных клиентов возможна работа 
                          по договору с отсрочкой платежа.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Можно ли заказать пробный образец?</AccordionTrigger>
                        <AccordionContent>
                          Да, мы можем изготовить пробный образец. Стоимость и сроки уточняйте у менеджера.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Есть ли доставка?</AccordionTrigger>
                        <AccordionContent>
                          Да, мы осуществляем доставку по Ростову-на-Дону и Ростовской области. 
                          Также возможна отправка в другие регионы транспортными компаниями.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Предоставляете ли вы гарантию?</AccordionTrigger>
                        <AccordionContent>
                          Да, на всю нашу продукцию предоставляется гарантия. Сроки гарантии зависят 
                          от типа продукции и условий эксплуатации.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="price">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 font-heading">Прайс-лист</h2>
                    <p className="text-muted-foreground mb-6">
                      Стоимость рассчитывается индивидуально в зависимости от объёма, материалов и сложности работ.
                    </p>
                    <div className="bg-muted/30 p-6 rounded-lg text-center">
                      <Icon name="Calculator" size={48} className="mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">Получить точный расчёт</h3>
                      <p className="text-muted-foreground mb-4">
                        Оставьте заявку, и мы рассчитаем стоимость вашего заказа в течение 15 минут
                      </p>
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Получить расчёт
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="examples">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 font-heading">Примеры работ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group relative aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="font-semibold">Проект #{i}</p>
                              <p className="text-sm text-white/80">{category.name}</p>
                            </div>
                          </div>
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            <Icon name="Image" size={48} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default CategoryPage;