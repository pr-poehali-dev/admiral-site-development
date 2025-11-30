import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/categories';
import { Badge } from '@/components/ui/badge';

const ComparisonPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId].slice(-3)
    );
  };

  const selectedCategoriesData = categories.filter((cat) =>
    selectedCategories.includes(cat.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary via-[#003d73] to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <Icon name="ArrowLeft" size={20} />
              <span>Вернуться на главную</span>
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
              Сравнение услуг и материалов
            </h1>
            <p className="text-lg text-white/90">
              Выберите до 3 категорий для сравнения характеристик
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ListChecks" size={24} />
                Выберите категории для сравнения
                <Badge variant="secondary" className="ml-auto">
                  {selectedCategories.length}/3
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedCategories.includes(category.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                        disabled={
                          !selectedCategories.includes(category.id) &&
                          selectedCategories.length >= 3
                        }
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name={category.icon as any} size={20} className="text-primary" />
                          <h3 className="font-semibold">{category.name}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {category.services.length} услуг
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedCategoriesData.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Scale" size={24} />
                  Сравнительная таблица
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Параметр</th>
                        {selectedCategoriesData.map((category) => (
                          <th key={category.id} className="text-left p-4 font-semibold">
                            <div className="flex items-center gap-2">
                              <Icon name={category.icon as any} size={20} className="text-primary" />
                              <span>{category.name}</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/30">
                        <td className="p-4 font-medium">Количество услуг</td>
                        {selectedCategoriesData.map((category) => (
                          <td key={category.id} className="p-4">
                            {category.services.length}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-muted/30">
                        <td className="p-4 font-medium">Описание</td>
                        {selectedCategoriesData.map((category) => (
                          <td key={category.id} className="p-4 text-sm text-muted-foreground">
                            {category.description}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-muted/30">
                        <td className="p-4 font-medium">Основные услуги</td>
                        {selectedCategoriesData.map((category) => (
                          <td key={category.id} className="p-4">
                            <ul className="space-y-1 text-sm">
                              {category.services.slice(0, 5).map((service, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Icon name="CheckCircle" size={14} className="text-primary mt-0.5" />
                                  <span>{service.name}</span>
                                </li>
                              ))}
                              {category.services.length > 5 && (
                                <li className="text-muted-foreground">
                                  +{category.services.length - 5} ещё
                                </li>
                              )}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b hover:bg-muted/30">
                        <td className="p-4 font-medium">Срок изготовления</td>
                        {selectedCategoriesData.map((category) => (
                          <td key={category.id} className="p-4">
                            <span className="text-sm">
                              {category.slug === 'flags' ? '3-5 дней' : 'от 1-7 дней'}
                            </span>
                          </td>
                        ))}
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-4 font-medium">Действия</td>
                        {selectedCategoriesData.map((category) => (
                          <td key={category.id} className="p-4">
                            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                              <Link to={`/category/${category.slug}`}>
                                Подробнее
                                <Icon name="ArrowRight" size={14} className="ml-2" />
                              </Link>
                            </Button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedCategoriesData.length === 0 && (
            <Card className="p-12">
              <div className="text-center text-muted-foreground">
                <Icon name="Scale" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Выберите категории для сравнения</p>
              </div>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparisonPage;