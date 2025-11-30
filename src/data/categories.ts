export interface Service {
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  services: Service[];
  image?: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Виды печати и раскроя',
    slug: 'printing-types',
    description: 'Выполняем комплекс услуг по печати и раскрою материалов на разных видах оборудования.',
    icon: 'Printer',
    services: [
      { name: 'Широкоформатная печать', slug: 'wide-format' },
      { name: 'Интерьерная печать', slug: 'interior' },
      { name: 'УФ Рулонная печать', slug: 'uv-roll' },
      { name: 'УФ Планшетная печать', slug: 'uv-flatbed' },
      { name: 'УФ ДТФ печать', slug: 'uv-dtf' },
      { name: 'ДТФ печать для ткани', slug: 'dtf-fabric' },
      { name: 'Цифровая печать', slug: 'digital' },
      { name: 'Сублимационная печать', slug: 'sublimation' },
      { name: 'Печать на ткани', slug: 'fabric' },
      { name: 'Печать лекал', slug: 'patterns' },
      { name: 'Контурная резка', slug: 'contour-cut' },
      { name: 'Лазерный раскрой', slug: 'laser-cut' },
    ]
  },
  {
    id: '2',
    name: 'Флаги и флагштоки',
    slug: 'flags',
    description: 'Дизайн ~ Печать~ Отшив флагов любого размера за 3-5 дней! Берём срочные заказы. 7 видов ткани для флагов!',
    icon: 'Flag',
    services: [
      { name: 'Флаги Парус, Бриз, Моби', slug: 'sail-flags' },
      { name: 'Флаги Команд и Компаний', slug: 'corporate-flags' },
      { name: 'Флагштоки и основания', slug: 'flagpoles' },
      { name: 'Знамёна и Флажные ленты', slug: 'banners' },
      { name: 'Настольные флажки', slug: 'desk-flags' },
      { name: 'Флаги больших размеров', slug: 'large-flags' },
    ]
  },
  {
    id: '3',
    name: 'Одежда и Текстиль',
    slug: 'textile',
    description: 'Дизайн ~ Печать ~ Отшив под ключ. Брендирование готовых изделий. Более 25 видов ткани в наличии.',
    icon: 'Shirt',
    services: [
      { name: 'Футболки | Джерси | Лонгсливы', slug: 'tshirts' },
      { name: 'Толстовки | Худи', slug: 'hoodies' },
      { name: 'Манишки | Жилетки', slug: 'vests' },
      { name: 'Платки | Косынки | Шарфы', slug: 'scarves' },
      { name: 'Занавесы | Декорации', slug: 'curtains' },
      { name: 'Скатерти | Игровые поля', slug: 'tablecloths' },
      { name: 'Фартуки | Пеньюары', slug: 'aprons' },
      { name: 'Кепки и панамы', slug: 'caps' },
      { name: 'Фото пледы | Подушки', slug: 'blankets' },
      { name: 'Шопперы | Мешочки', slug: 'bags' },
      { name: 'Чехлы на кулер', slug: 'covers' },
    ]
  },
  {
    id: '4',
    name: 'Этикетки и наклейки',
    slug: 'labels',
    description: 'Дизайн ~ Печать «под ключ». В рулонах и в листах.',
    icon: 'Tag',
    services: [
      { name: 'Виниловые и Бумажные', slug: 'vinyl-paper' },
      { name: 'РР- полипропиленовые', slug: 'polypropylene' },
      { name: 'УФ-ДТФ (НЕ для ткани)', slug: 'uv-dtf-labels' },
      { name: 'ДТФ для одежды', slug: 'dtf-clothing' },
      { name: 'Голографические плёнки', slug: 'holographic' },
      { name: 'Плёнки Золото и Серебро', slug: 'metallic' },
    ]
  },
  {
    id: '5',
    name: 'Полиграфическая продукция',
    slug: 'polygraphy',
    description: 'Цифровая и офсетная печать',
    icon: 'BookOpen',
    services: [
      { name: 'Визитки | Бирки', slug: 'business-cards' },
      { name: 'Листовки | Флаеры', slug: 'flyers' },
      { name: 'Буклеты | Лифлеты', slug: 'booklets' },
      { name: 'Плакаты | Афишы', slug: 'posters' },
      { name: 'Брошюры | Каталоги', slug: 'brochures' },
      { name: 'Грамоты | Дипломы', slug: 'certificates' },
      { name: 'Блокноты', slug: 'notebooks' },
    ]
  },
  {
    id: '6',
    name: 'Сувенирная продукция',
    slug: 'souvenirs',
    description: 'Индивидуальный дизайн. Производим «под ключ». Брендируем готовые решения.',
    icon: 'Gift',
    services: [
      { name: 'Ленты для бейджей', slug: 'lanyards' },
      { name: 'Бейджи', slug: 'badges' },
      { name: 'Медали', slug: 'medals' },
      { name: 'Кружки', slug: 'mugs' },
      { name: 'Ежедневники', slug: 'planners' },
      { name: 'Ручки', slug: 'pens' },
      { name: 'Флешки', slug: 'usb-drives' },
    ]
  },
  {
    id: '7',
    name: 'Таблички и Инфо стенды',
    slug: 'signs',
    description: 'Дизайн и производство из ПВХ, Акрила, АКП, стекла, Алюминия, АБС пластика. Методами печати и гравировки.',
    icon: 'Square',
    services: [
      { name: 'Таблички на двери', slug: 'door-signs' },
      { name: 'Режим работы', slug: 'working-hours' },
      { name: 'Адресные таблички', slug: 'address-signs' },
      { name: 'Планы эвакуации', slug: 'evacuation-plans' },
      { name: 'Тактильные таблички Брайля', slug: 'braille' },
      { name: 'Мнемосхемы', slug: 'mnemonics' },
      { name: 'Пиктограммы', slug: 'pictograms' },
      { name: 'Шильды', slug: 'nameplates' },
      { name: 'Информационные стенды', slug: 'info-stands' },
      { name: 'Стойки «Прессволл»', slug: 'press-wall' },
      { name: 'Стойки «Roll-UP»', slug: 'roll-up' },
      { name: 'Ростовые фигуры', slug: 'standees' },
    ]
  },
  {
    id: '8',
    name: 'Брендирование Автотранспорта',
    slug: 'vehicle-branding',
    description: 'Дизайн ~ Печать ~ Монтаж. Брендируем «под ключ». Разные варианты печати и плёнок.',
    icon: 'Truck',
    services: [
      { name: 'Фуры и грузовики', slug: 'trucks' },
      { name: 'Фургоны и Спец техника', slug: 'vans' },
      { name: 'Минивэны и Легковые', slug: 'cars' },
    ]
  },
  {
    id: '9',
    name: 'Рекламные вывески',
    slug: 'signboards',
    description: 'Дизайн ~ Производство~ Монтаж. Согласование вывесок.',
    icon: 'Lightbulb',
    services: [
      { name: 'Световые объёмные буквы', slug: 'channel-letters' },
      { name: 'Световые короба', slug: 'light-boxes' },
      { name: 'Не световые вывески', slug: 'non-illuminated' },
    ]
  },
  {
    id: '10',
    name: 'Фотообои, Картины, Пано',
    slug: 'wall-art',
    description: 'Печатаем и производим «под ключ» по вашим размерам. Индивидуальный дизайн.',
    icon: 'Image',
    services: [
      { name: 'Фотообои и фрески', slug: 'wallpapers' },
      { name: 'Холст на подрамнике', slug: 'canvas' },
      { name: 'Картина на дереве', slug: 'wood-art' },
      { name: 'Пано на стекле', slug: 'glass-panel' },
      { name: 'Пано на Акриле', slug: 'acrylic-panel' },
      { name: 'Пано на ПВХ или АКП', slug: 'pvc-panel' },
    ]
  },
  {
    id: '11',
    name: 'Штампы и печати',
    slug: 'stamps',
    description: 'Гравируем из специальной резины. Клише для любых красок.',
    icon: 'Stamp',
    services: [
      { name: 'Для коробок и пакетов', slug: 'packaging' },
      { name: 'Для Текстиля и одежды', slug: 'textile-stamps' },
      { name: 'Для ИП и ООО', slug: 'business' },
      { name: 'Автоматические и ручные оснастки', slug: 'automatic' },
    ]
  },
];
