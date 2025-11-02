import { Link } from 'react-router-dom';

interface FooterSectionProps {
  onNavigate: (section: string) => void;
}

export const FooterSection = ({ onNavigate }: FooterSectionProps) => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">LIME</h3>
            <p className="text-muted-foreground">Сеть гостиниц и ресторанов премиум-класса</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('hero')} className="text-muted-foreground hover:text-primary transition-colors">Главная</button></li>
              <li><button onClick={() => onNavigate('hotels')} className="text-muted-foreground hover:text-primary transition-colors">Гостиницы</button></li>
              <li><button onClick={() => onNavigate('restaurants')} className="text-muted-foreground hover:text-primary transition-colors">Рестораны</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-muted-foreground hover:text-primary transition-colors">Контакты</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Соц. сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 LIME. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
