import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A23</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary font-heading">АДМИРАЛ-23</h1>
              <p className="text-xs text-muted-foreground">Производственная компания</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="MessageSquare" size={20} />
            </a>
            <a
              href="https://rutube.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name="Video" size={20} />
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#catalog">
                <Icon name="LayoutGrid" size={16} className="mr-2" />
                Каталог
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                  <a href="#catalog">
                    <Icon name="LayoutGrid" size={16} className="mr-2" />
                    Каталог
                  </a>
                </Button>
                <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                  <Link to="/comparison">
                    <Icon name="Scale" size={16} className="mr-2" />
                    Сравнение услуг
                  </Link>
                </Button>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://vk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-muted rounded-lg transition-colors flex-1 text-center"
                  >
                    <Icon name="MessageSquare" size={24} />
                  </a>
                  <a
                    href="https://rutube.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-muted rounded-lg transition-colors flex-1 text-center"
                  >
                    <Icon name="Video" size={24} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
