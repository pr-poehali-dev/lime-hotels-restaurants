import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Room {
  title: string;
  price: string;
  description: string;
  features: string[];
  capacity: string;
  image: string;
  gallery: string[];
}

const Hotels = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingDate, setBookingDate] = useState<Date>();

  const handleBooking = () => {
    toast({
      title: 'Бронирование отправлено',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения номера.',
    });
    setSelectedRoom(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rooms: Room[] = [
    {
      title: 'Стандарт',
      price: '3 500 ₽',
      description: 'Уютный номер с видом на город',
      features: ['Двуспальная кровать', 'Wi-Fi', 'Завтрак включен', 'Кондиционер'],
      capacity: '2 гостя',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/de6486ae-3846-4cfb-9b04-6e28150f5dd2.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/de6486ae-3846-4cfb-9b04-6e28150f5dd2.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e7b91b19-0723-426a-871b-3a1cd66c953d.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/ce202ec6-8158-4171-95e0-96bcbe7acb85.jpg',
      ],
    },
    {
      title: 'Комфорт',
      price: '5 500 ₽',
      description: 'Просторный номер повышенной комфортности',
      features: ['Кровать king-size', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Балкон'],
      capacity: '2 гостя',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/498be285-5a89-4849-a95e-45ccb0e196ef.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/498be285-5a89-4849-a95e-45ccb0e196ef.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/82121ba4-699c-46a0-846e-cd7e7832954a.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/a3326c17-65ba-4685-90be-7c0950649e07.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/066ddcb4-f63e-4221-a02b-baa2bbf0a812.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/c4c909f8-626f-4bf8-a2d4-4b89ba5e849f.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/d79f4c25-e48c-48fa-a887-e0c1325e3dd4.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/4fb88e9e-13a7-4315-94ec-5625e58b6cc9.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/58b74833-9086-47a7-974a-3142815b2b29.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/b9f4b14b-06b6-4bba-a89c-2aeee67cd28d.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e7ed255b-2bc1-425e-853b-dbe70fd3d8a1.jpg',
      ],
    },
    {
      title: 'Семейный',
      price: '8 500 ₽',
      description: 'Большой номер для всей семьи',
      features: ['2 спальни', 'Wi-Fi', 'Завтрак включен', 'Гостиная зона', 'Кухня'],
      capacity: '4 гостя',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e7b91b19-0723-426a-871b-3a1cd66c953d.jpg',
      gallery: [
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e7b91b19-0723-426a-871b-3a1cd66c953d.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/de6486ae-3846-4cfb-9b04-6e28150f5dd2.jpg',
        'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/ce202ec6-8158-4171-95e0-96bcbe7acb85.jpg',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Link
                to="/"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </Link>
              <button
                onClick={() => scrollToSection('hotels')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Гостиницы
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

      <section id="hotels" className="pt-24 py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Гостиницы LIME</h2>
            <p className="text-lg text-muted-foreground">Выберите идеальный номер для вашего отдыха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-primary">{room.price}</span>
                    <span className="text-sm text-muted-foreground">/ночь</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{room.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Users" className="w-4 h-4 mr-1" />
                      {room.capacity}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{room.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedRoom(room)}
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-background">
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
                <p className="text-muted-foreground">Круглосуточно</p>
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
                <li><button onClick={() => scrollToSection('hotels')} className="text-muted-foreground hover:text-primary transition-colors">Гостиницы</button></li>
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

      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Бронирование номера {selectedRoom?.title}</DialogTitle>
          </DialogHeader>
          {selectedRoom && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                {selectedRoom.gallery.slice(0, 4).map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${selectedRoom.title} ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
              
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="checkin">Дата заезда</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <Icon name="Calendar" className="mr-2 h-4 w-4" />
                          {bookingDate ? format(bookingDate, 'PP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={bookingDate}
                          onSelect={setBookingDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="nights">Количество ночей</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7].map(n => (
                          <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Цена за ночь</p>
                  <p className="text-2xl font-bold text-primary">{selectedRoom.price}</p>
                </div>
                <Button onClick={handleBooking}>
                  Подтвердить бронирование
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hotels;