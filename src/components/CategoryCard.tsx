import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import type { Category } from '@/data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 animate-fade-in group">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon name={category.icon as any} size={28} className="text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {category.services.length} услуг
          </Badge>
        </div>
        <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
          {category.name}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {category.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {category.services.slice(0, 3).map((service, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
              >
                {service.name}
              </span>
            ))}
            {category.services.length > 3 && (
              <span className="text-xs px-2 py-1 text-muted-foreground">
                +{category.services.length - 3} ещё
              </span>
            )}
          </div>
          
          <Button 
            asChild 
            className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-md transition-all"
          >
            <Link to={`/category/${category.slug}`}>
              Подробнее
              <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
