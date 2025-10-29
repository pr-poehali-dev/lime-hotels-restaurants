import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

interface Room {
  title: string;
  price: string;
  description: string;
  features: string[];
  capacity: string;
  image: string;
  gallery: string[];
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Index = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [bookingDate, setBookingDate] = useState<Date>();

  const handleBooking = (type: 'hotel' | 'restaurant') => {
    toast({
      title: 'Бронирование отправлено',
      description: `Мы свяжемся с вами в ближайшее время для подтверждения ${type === 'hotel' ? 'номера' : 'столика'}.`,
    });
    setSelectedRoom(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

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
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('hotels')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Гостиницы
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Услуги
              </button>
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
            <Button size="sm" onClick={() => scrollToSection('hotels')}>
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            LIME
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light italic">
            сеть гостиниц и ресторанов
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => scrollToSection('hotels')}>
              <CardHeader>
                <Icon name="Hotel" className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-2xl">Гостиницы LIME</CardTitle>
                <CardDescription>Комфортное размещение в современных номерах</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => scrollToSection('restaurants')}>
              <CardHeader>
                <Icon name="UtensilsCrossed" className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-2xl">Рестораны Chili Lime</CardTitle>
                <CardDescription>Изысканная кухня и уютная атмосфера</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="hotels" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Гостиницы LIME</h2>
            <p className="text-lg text-muted-foreground">Выберите идеальный номер для вашего отдыха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
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
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/c4c909f8-626f-4bf8-a2d4-4b89ba5e849f.jpg',
                gallery: [
                  'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/c4c909f8-626f-4bf8-a2d4-4b89ba5e849f.jpg',
                  'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/d79f4c25-e48c-48fa-a887-e0c1325e3dd4.jpg',
                  'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/4fb88e9e-13a7-4315-94ec-5625e58b6cc9.jpg',
                ],
              },
              {
                title: 'Семейный Стандарт',
                price: '6 500 ₽',
                description: 'Удобный номер для семьи с детьми',
                features: ['1 двуспальная кровать', '2 односпальные кровати', 'Wi-Fi', 'Завтрак включен', 'Кондиционер'],
                capacity: '4 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5465f631-8a2c-4c64-aa88-be30de486f5e.jpg',
                gallery: ['https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5465f631-8a2c-4c64-aa88-be30de486f5e.jpg'],
              },
              {
                title: 'Семейный',
                price: '7 500 ₽',
                description: 'Просторный номер для всей семьи',
                features: ['2 двуспальные кровати', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Диван', 'Гостиная зона'],
                capacity: '4 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/3b0921f2-7651-4593-a209-5e635e549219.jpg',
                gallery: ['https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/3b0921f2-7651-4593-a209-5e635e549219.jpg'],
              },
              {
                title: 'Люкс',
                price: '8 500 ₽',
                description: 'Премиальный номер с панорамным видом',
                features: ['Кровать king-size', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Джакузи', 'Гостиная зона'],
                capacity: '2 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e20cc3b9-fcb3-4c1a-9469-11c2ddb14702.jpg',
                gallery: ['https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e20cc3b9-fcb3-4c1a-9469-11c2ddb14702.jpg'],
              },
              {
                title: 'Семейный Люкс',
                price: '12 500 ₽',
                description: 'Премиальный семейный номер с двумя спальнями',
                features: ['2 кровати king-size', 'Wi-Fi', 'Завтрак включен', 'Кухня', 'Мини-бар', '2 ванные комнаты', 'Большая гостиная'],
                capacity: '4 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/025a50b7-7ef3-4fda-b6cd-d94563cfd1cd.jpg',
                gallery: ['https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/025a50b7-7ef3-4fda-b6cd-d94563cfd1cd.jpg'],
              },
              {
                title: 'Апартаменты',
                price: '15 000 ₽',
                description: 'Роскошные апартаменты для большой семьи',
                features: ['3 спальни', 'Wi-Fi', 'Завтрак включен', 'Полноценная кухня', 'Мини-бар', '2 ванные комнаты', 'Гостиная', 'Балкон'],
                capacity: '6 гостей',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/3f2aab7f-5a3f-4a78-8620-d26283acd92f.jpg',
                gallery: ['https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/3f2aab7f-5a3f-4a78-8620-d26283acd92f.jpg'],
              },
              {
                title: 'Президентский',
                price: '25 000 ₽',
                description: 'Эксклюзивный президентский номер высшей категории',
                features: ['Кровать king-size', 'Панорамные окна', 'Отдельная гостиная', 'Мраморная ванная', 'Джакузи', 'Сауна', 'Кухня', 'Бар', 'Терраса', 'Консьерж-сервис 24/7'],
                capacity: '2 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/7d4ea4ea-7543-4c98-897c-c704e60fa739.jpg',
                gallery: ['https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/7d4ea4ea-7543-4c98-897c-c704e60fa739.jpg'],
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer" onClick={() => setSelectedRoom(room)}>
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">{room.title}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                  </div>
                  <CardDescription>{room.description}</CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Icon name="Users" className="w-4 h-4 mr-1" />
                    {room.capacity}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Icon name="Check" className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedRoom && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl">{selectedRoom.title}</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedRoom.gallery.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${selectedRoom.title} ${idx + 1}`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-muted-foreground">{selectedRoom.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-2">
                          <Icon name="Users" className="w-4 h-4 mr-1" />
                          {selectedRoom.capacity}
                        </div>
                      </div>
                      <span className="text-3xl font-bold text-primary">{selectedRoom.price}</span>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Удобства:</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedRoom.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Icon name="Check" className="w-4 h-4 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Забронировать номер</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleBooking('hotel');
                        }}
                        className="space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="modal-name">Имя</Label>
                            <Input id="modal-name" placeholder="Ваше имя" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="modal-phone">Телефон</Label>
                            <Input id="modal-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modal-email">Email</Label>
                          <Input id="modal-email" type="email" placeholder="your@email.com" required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Дата заезда</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-left font-normal">
                                  <Icon name="CalendarIcon" className="mr-2 h-4 w-4" />
                                  {bookingDate ? format(bookingDate, 'PPP', { locale: ru }) : 'Выберите дату'}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={bookingDate} onSelect={setBookingDate} initialFocus />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="modal-nights">Количество ночей</Label>
                            <Select required>
                              <SelectTrigger id="modal-nights">
                                <SelectValue placeholder="Выберите" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 10, 14].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? 'ночь' : num < 5 ? 'ночи' : 'ночей'}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          Забронировать {selectedRoom.title}
                        </Button>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Забронировать номер</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами для подтверждения</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleBooking('hotel');
                }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hotel-name">Имя</Label>
                    <Input id="hotel-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hotel-phone">Телефон</Label>
                    <Input id="hotel-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hotel-email">Email</Label>
                  <Input id="hotel-email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Дата заезда</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Icon name="CalendarIcon" className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hotel-room">Тип номера</Label>
                    <Select required>
                      <SelectTrigger id="hotel-room">
                        <SelectValue placeholder="Выберите номер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Стандарт (2 гостя)</SelectItem>
                        <SelectItem value="comfort">Комфорт (2 гостя)</SelectItem>
                        <SelectItem value="family-standard">Семейный Стандарт (4 гостя)</SelectItem>
                        <SelectItem value="family">Семейный (4 гостя)</SelectItem>
                        <SelectItem value="lux">Люкс (2 гостя)</SelectItem>
                        <SelectItem value="family-lux">Семейный Люкс (4 гостя)</SelectItem>
                        <SelectItem value="apartment">Апартаменты (6 гостей)</SelectItem>
                        <SelectItem value="presidential">Президентский (2 гостя)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги отеля</h2>
            <p className="text-lg text-muted-foreground">Всё для вашего комфорта и отдыха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Waves',
                title: 'SPA & Wellness',
                description: 'Спа-центр с сауной, хаммамом, массажными кабинетами и крытым бассейном',
                features: ['Массаж', 'Сауна', 'Хаммам', 'Бассейн', 'Фитнес-зал'],
              },
              {
                icon: 'UtensilsCrossed',
                title: 'Ресторан',
                description: 'Ресторан европейской и азиатской кухни с панорамным видом',
                features: ['Завтрак шведский стол', 'A la carte меню', 'Бар', 'Room service 24/7'],
                clickable: true,
                onClick: () => {
                  document.getElementById('restaurant')?.scrollIntoView({ behavior: 'smooth' });
                }
              },
              {
                icon: 'Car',
                title: 'Парковка',
                description: 'Охраняемая подземная парковка для гостей отеля',
                features: ['Видеонаблюдение', '150 мест', 'Зарядка электрокаров', 'Бесплатно для гостей'],
              },
              {
                icon: 'Wifi',
                title: 'Интернет',
                description: 'Высокоскоростной Wi-Fi во всех номерах и общественных зонах',
                features: ['100 Мбит/с', 'Бесплатно', 'Покрытие 100%', 'Техподдержка 24/7'],
              },
              {
                icon: 'Briefcase',
                title: 'Бизнес-центр',
                description: 'Конференц-залы и переговорные для деловых встреч',
                features: ['3 конференц-зала', 'Оборудование', 'Кейтеринг', 'Техподдержка'],
              },
              {
                icon: 'Users',
                title: 'Консьерж-сервис',
                description: 'Персональная помощь в организации вашего отдыха',
                features: ['Трансфер', 'Экскурсии', 'Бронирование', 'Круглосуточно'],
              },
            ].map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 animate-scale-in ${(service as any).clickable ? 'cursor-pointer' : ''}`}
                onClick={(service as any).onClick}
              >
                <CardHeader>
                  <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Icon name="Check" className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="restaurant" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ресторан отеля</h2>
            <p className="text-lg text-muted-foreground">Изысканная кухня с панорамным видом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => {
              const menuSection = document.getElementById('menu');
              menuSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img
                src="https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/17677c28-a671-4fa8-9a04-f0f60ef9cca2.jpg"
                alt="Интерьер ресторана"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Атмосфера</CardTitle>
                <CardDescription>
                  Панорамные окна с видом на город, современный дизайн и уютная обстановка
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => {
              const menuSection = document.getElementById('menu');
              menuSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img
                src="https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/57cc9624-f5cd-479a-bf2f-f8f6515901ec.jpg"
                alt="Европейская кухня"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Европейская кухня</CardTitle>
                <CardDescription>
                  Авторские блюда от шеф-повара, премиальные ингредиенты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => {
              const menuSection = document.getElementById('menu');
              menuSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <img
                src="https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/01fa9620-a167-43c6-8f05-43231ff1c8fb.jpg"
                alt="Азиатская кухня"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Азиатская кухня</CardTitle>
                <CardDescription>
                  Суши, сашими и традиционные блюда азиатской кухни
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div id="menu" className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Меню ресторана</h3>
            <Tabs defaultValue="european" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="european">Европейская кухня</TabsTrigger>
                <TabsTrigger value="asian">Азиатская кухня</TabsTrigger>
              </TabsList>
              
              <TabsContent value="european" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'Стейк Рибай',
                      description: 'Мраморная говядина, 300г, с овощами гриль и соусом демиглас',
                      price: '2 800 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/57cc9624-f5cd-479a-bf2f-f8f6515901ec.jpg',
                      category: 'european'
                    },
                    {
                      name: 'Филе лосося',
                      description: 'Норвежский лосось на подушке из шпината с соусом холландез',
                      price: '1 900 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/57cc9624-f5cd-479a-bf2f-f8f6515901ec.jpg',
                      category: 'european'
                    },
                    {
                      name: 'Равиоли с трюфелем',
                      description: 'Домашние равиоли с рикоттой и черным трюфелем',
                      price: '1 600 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/57cc9624-f5cd-479a-bf2f-f8f6515901ec.jpg',
                      category: 'european'
                    },
                    {
                      name: 'Тартар из говядины',
                      description: 'Классический тартар с перепелиным яйцом и тостами',
                      price: '1 400 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/57cc9624-f5cd-479a-bf2f-f8f6515901ec.jpg',
                      category: 'european'
                    },
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => setSelectedMenuItem(item)}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <span className="text-xl font-bold text-primary">{item.price}</span>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="asian" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'Сет "Императорский"',
                      description: '12 роллов, 8 нигири, 4 сашими, имбирь, васаби',
                      price: '3 200 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/01fa9620-a167-43c6-8f05-43231ff1c8fb.jpg',
                      category: 'asian'
                    },
                    {
                      name: 'Утка по-пекински',
                      description: 'Традиционное блюдо с блинчиками, огурцом и соусом хойсин',
                      price: '2 400 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/01fa9620-a167-43c6-8f05-43231ff1c8fb.jpg',
                      category: 'asian'
                    },
                    {
                      name: 'Том Ям с креветками',
                      description: 'Острый тайский суп с тигровыми креветками',
                      price: '890 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/01fa9620-a167-43c6-8f05-43231ff1c8fb.jpg',
                      category: 'asian'
                    },
                    {
                      name: 'Вок с морепродуктами',
                      description: 'Удон с креветками, кальмарами и мидиями в соусе терияки',
                      price: '1 200 ₽',
                      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/01fa9620-a167-43c6-8f05-43231ff1c8fb.jpg',
                      category: 'asian'
                    },
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => setSelectedMenuItem(item)}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <span className="text-xl font-bold text-primary">{item.price}</span>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <Dialog open={!!selectedMenuItem} onOpenChange={() => setSelectedMenuItem(null)}>
            <DialogContent className="max-w-2xl">
              {selectedMenuItem && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl">{selectedMenuItem.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img
                      src={selectedMenuItem.image}
                      alt={selectedMenuItem.name}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground text-lg">{selectedMenuItem.description}</p>
                      <span className="text-3xl font-bold text-primary">{selectedMenuItem.price}</span>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Забронировать столик</CardTitle>
              <CardDescription>Оставьте заявку, и мы подберем лучший столик для вас</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleBooking('restaurant');
                }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rest-name">Имя</Label>
                    <Input id="rest-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rest-phone">Телефон</Label>
                    <Input id="rest-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Дата</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Icon name="CalendarIcon" className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP', { locale: ru }) : 'Дата'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rest-time">Время</Label>
                    <Select required>
                      <SelectTrigger id="rest-time">
                        <SelectValue placeholder="Время" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 14 }, (_, i) => i + 10).map((hour) => (
                          <SelectItem key={hour} value={`${hour}:00`}>
                            {hour}:00
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rest-guests">Гостей</Label>
                    <Select required>
                      <SelectTrigger id="rest-guests">
                        <SelectValue placeholder="Кол-во" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rest-comment">Комментарий</Label>
                  <Input id="rest-comment" placeholder="Особые пожелания (опционально)" />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Забронировать столик
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>



      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда рады ответить на ваши вопросы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Icon name="Phone" className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-base">+7 (495) 123-45-67</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="Mail" className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-base">info@lime-hotels.ru</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="MapPin" className="w-8 h-8 mx-auto mb-2 text-primary" />
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-base">Москва, ул. Примерная, 1</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 LIME. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;