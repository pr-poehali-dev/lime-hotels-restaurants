import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onNavigate: (section: string) => void;
  onBookingClick: () => void;
}

export const Navigation = ({ onNavigate, onBookingClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <img 
              src="https://cdn.poehali.dev/files/1b1431e4-2a8b-47e5-8bfa-20f013ab753a.jpg" 
              alt="LIME" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('hero')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => onNavigate('hotels')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Гостиницы
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => onNavigate('restaurants')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Рестораны
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>
          <Button size="sm" onClick={onBookingClick}>
            Забронировать
          </Button>
        </div>
      </div>
    </nav>
  );
};
