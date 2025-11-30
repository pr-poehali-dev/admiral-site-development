import Icon from '@/components/ui/icon';

const steps = [
  {
    number: '01',
    icon: 'MessageSquare',
    title: 'Заявка',
    description: 'Оставьте заявку на сайте, позвоните или напишите в мессенджер'
  },
  {
    number: '02',
    icon: 'Calculator',
    title: 'Расчёт',
    description: 'Рассчитаем стоимость и сроки изготовления вашего заказа'
  },
  {
    number: '03',
    icon: 'Palette',
    title: 'Дизайн',
    description: 'Разработаем макет или доработаем ваш до требований производства'
  },
  {
    number: '04',
    icon: 'FileSignature',
    title: 'Договор',
    description: 'Заключим договор и согласуем все детали проекта'
  },
  {
    number: '05',
    icon: 'Cog',
    title: 'Производство',
    description: 'Изготовим продукцию на профессиональном оборудовании'
  },
  {
    number: '06',
    icon: 'CheckCircle',
    title: 'Контроль',
    description: 'Проверим качество, упакуем и подготовим к отгрузке'
  },
  {
    number: '07',
    icon: 'Truck',
    title: 'Доставка',
    description: 'Доставим в удобное время или организуем самовывоз'
  },
  {
    number: '08',
    icon: 'Handshake',
    title: 'Гарантия',
    description: 'Предоставим гарантию и поддержку после выполнения заказа'
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-primary">
            Как мы работаем
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до получения готовой продукции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-br from-white to-muted/30 rounded-xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon name={step.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
