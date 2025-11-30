import Icon from '@/components/ui/icon';

const reasons = [
  {
    icon: 'Factory',
    title: 'Собственное производство',
    description: 'Полный производственный цикл на собственном оборудовании'
  },
  {
    icon: 'Clock',
    title: 'Сроки изготовления',
    description: 'Быстрое выполнение заказов, берём срочные работы'
  },
  {
    icon: 'PiggyBank',
    title: 'Выгодные цены',
    description: 'Без посредников — работаем напрямую с производства'
  },
  {
    icon: 'Award',
    title: 'Гарантия качества',
    description: 'Контроль на всех этапах производства'
  },
  {
    icon: 'Users',
    title: 'Опытная команда',
    description: 'Профессиональные дизайнеры и технологи'
  },
  {
    icon: 'Package',
    title: 'Широкий ассортимент',
    description: 'Более 25 видов материалов и технологий печати'
  },
  {
    icon: 'Truck',
    title: 'Доставка и монтаж',
    description: 'Доставим и установим продукцию по всему региону'
  },
  {
    icon: 'FileCheck',
    title: 'Работа по договору',
    description: 'Официальное оформление, документы для бухгалтерии'
  },
  {
    icon: 'Palette',
    title: 'Бесплатный дизайн',
    description: 'Разработка макетов при заказе от определённой суммы'
  },
  {
    icon: 'Headphones',
    title: 'Консультации 24/7',
    description: 'Поможем выбрать оптимальное решение для вашей задачи'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-primary">
            10 причин работать с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему более 500 компаний выбирают Адмирал-23
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in hover:scale-105 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon name={reason.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-base font-heading">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
