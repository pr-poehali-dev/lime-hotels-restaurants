import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Restaurant = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [bookingDate, setBookingDate] = useState<Date>();

  const handleBooking = () => {
    toast({
      title: 'Бронирование отправлено',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения столика.',
    });
    setSelectedMenuItem(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Цезарь с курицей',
      description: 'Классический салат с курицей, сыром пармезан и соусом',
      price: '450 ₽',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      category: 'салаты',
    },
    {
      name: 'Греческий салат',
      description: 'Свежие овощи, сыр фета, оливки и оливковое масло',
      price: '380 ₽',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
      category: 'салаты',
    },
    {
      name: 'Борщ',
      description: 'Традиционный украинский суп со сметаной',
      price: '320 ₽',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
      category: 'супы',
    },
    {
      name: 'Том ям',
      description: 'Острый тайский суп с морепродуктами',
      price: '520 ₽',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
      category: 'супы',
    },
    {
      name: 'Брускетта',
      description: 'Хрустящий хлеб с томатами и базиликом',
      price: '280 ₽',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
      category: 'закуски',
    },
    {
      name: 'Сырная тарелка',
      description: 'Ассорти из пяти видов сыра с медом и орехами',
      price: '680 ₽',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862',
      category: 'закуски',
    },
    {
      name: 'Стейк Рибай',
      description: 'Премиальный стейк из мраморной говядины 250г',
      price: '1850 ₽',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
      category: 'горячее',
    },
    {
      name: 'Лосось на гриле',
      description: 'Филе лосося с овощами гриль и лимонным соусом',
      price: '1250 ₽',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
      category: 'горячее',
    },
    {
      name: 'Паста Карбонара',
      description: 'Классическая итальянская паста с беконом и сливками',
      price: '620 ₽',
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
      category: 'горячее',
    },
    {
      name: 'Тирамису',
      description: 'Классический итальянский десерт с кофе и маскарпоне',
      price: '380 ₽',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
      category: 'десерты',
    },
    {
      name: 'Чизкейк Нью-Йорк',
      description: 'Нежный творожный торт с ягодным соусом',
      price: '420 ₽',
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50',
      category: 'десерты',
    },
    {
      name: 'Маргарита',
      description: 'Классический коктейль с текилой и лаймом',
      price: '450 ₽',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b',
      category: 'напитки',
    },
    {
      name: 'Эспрессо',
      description: 'Крепкий итальянский кофе',
      price: '150 ₽',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04',
      category: 'напитки',
    },
  ];

  const categories = [
    { value: 'салаты', label: 'Салаты', icon: 'Salad' },
    { value: 'супы', label: 'Супы', icon: 'Soup' },
    { value: 'закуски', label: 'Закуски', icon: 'Utensils' },
    { value: 'горячее', label: 'Горячее', icon: 'Flame' },
    { value: 'десерты', label: 'Десерты', icon: 'Cake' },
    { value: 'напитки', label: 'Напитки', icon: 'Coffee' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/1b1431e4-2a8b-47e5-8bfa-20f013ab753a.jpg" 
                alt="LIME" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </Link>
              <button
                onClick={() => scrollToSection('restaurants')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Рестораны
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Link to="/">
              <Button size="sm" variant="outline">
                <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
                Назад на главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section id="restaurants" className="pt-24 py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ресторан Chili Lime</h2>
            <p className="text-lg text-muted-foreground">Изысканная кухня и непревзойденный сервис</p>
          </div>

          <Tabs defaultValue="салаты" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value} className="text-sm">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <div className="grid md:grid-cols-3 gap-6">
                  {menuItems
                    .filter(item => item.category === cat.value)
                    .map((item, index) => (
                      <Card 
                        key={index} 
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => setSelectedMenuItem(item)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="font-bold text-primary">{item.price}</span>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardHeader>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Забронировать столик</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Дата</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="justify-start text-left font-normal">
                            <Icon name="Calendar" className="mr-2 h-4 w-4" />
                            {date ? format(date, 'PP', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid gap-2">
                      <Label>Время</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {['12:00', '13:00', '14:00', '15:00', '18:00', '19:00', '20:00', '21:00'].map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label>Количество гостей</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                          <SelectItem key={n} value={n.toString()}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label>Имя</Label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label>Телефон</Label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  
                  <Button className="w-full" onClick={handleBooking}>
                    Забронировать столик
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным для вас способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="w-5 h-5 mr-2 text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" className="w-5 h-5 mr-2 text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" className="w-5 h-5 mr-2 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@lime-hotels.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="w-5 h-5 mr-2 text-primary" />
                  Часы работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ежедневно с 12:00 до 23:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">LIME</h3>
              <p className="text-muted-foreground">Сеть гостиниц и ресторанов премиум-класса</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
                <li><button onClick={() => scrollToSection('restaurants')} className="text-muted-foreground hover:text-primary transition-colors">Рестораны</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>2024 LIME. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedMenuItem} onOpenChange={() => setSelectedMenuItem(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedMenuItem?.name}</DialogTitle>
          </DialogHeader>
          {selectedMenuItem && (
            <div className="grid gap-4 py-4">
              <img 
                src={selectedMenuItem.image} 
                alt={selectedMenuItem.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-muted-foreground">{selectedMenuItem.description}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-2xl font-bold text-primary">{selectedMenuItem.price}</p>
                <Button onClick={() => {
                  toast({
                    title: 'Добавлено в заказ',
                    description: `${selectedMenuItem.name} добавлено в ваш заказ.`,
                  });
                  setSelectedMenuItem(null);
                }}>
                  Добавить в заказ
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Restaurant;
