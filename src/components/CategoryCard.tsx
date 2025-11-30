import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import type { Category } from '@/data/categories';
import { allServices } from '@/data/services';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const categoryServices = allServices.filter(s => s.categorySlug === category.slug);
  
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-500 animate-fade-in group border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-muted/30">
      <CardHeader className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Icon name={category.icon as any} size={32} className="text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs bg-white shadow-sm">
            {category.services.length} услуг
          </Badge>
        </div>
        
        <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors duration-300">
          {category.name}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {category.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {categoryServices.length > 0 && (
          <div className="space-y-2">
            {categoryServices.slice(0, 3).map((service) => (
              <Link 
                key={service.id}
                to={`/service/${service.slug}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group/item shadow-sm hover:shadow-md"
              >
                <div className="p-2 bg-muted rounded-lg group-hover/item:bg-primary/10 transition-colors">
                  <Icon name={service.icon as any} size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate group-hover/item:text-primary transition-colors">
                    {service.name}
                  </p>
                  {service.priceFrom && (
                    <p className="text-xs text-muted-foreground">от {service.priceFrom}</p>
                  )}
                </div>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover/item:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        )}

        {categoryServices.length === 0 && (
          <div className="flex flex-wrap gap-2">
            {category.services.slice(0, 3).map((service, idx) => (
              <span 
                key={idx}
                className="text-xs px-3 py-2 bg-white rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all cursor-pointer shadow-sm"
              >
                {service.name}
              </span>
            ))}
          </div>
        )}
        
        {category.services.length > 3 && (
          <p className="text-xs text-muted-foreground text-center">
            +{category.services.length - 3} ещё
          </p>
        )}
        
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          <Link to={`/category/${category.slug}`}>
            Все услуги категории
            <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;