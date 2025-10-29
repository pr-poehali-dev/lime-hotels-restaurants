import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('hero');

  const handleBooking = (type: 'hotel' | 'restaurant') => {
    toast({
      title: 'Бронирование отправлено',
      description: `Мы свяжемся с вами в ближайшее время для подтверждения ${type === 'hotel' ? 'номера' : 'столика'}.`,
    });
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
              },
              {
                title: 'Комфорт',
                price: '5 500 ₽',
                description: 'Просторный номер повышенной комфортности',
                features: ['Кровать king-size', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Балкон'],
                capacity: '2 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/c4c909f8-626f-4bf8-a2d4-4b89ba5e849f.jpg',
              },
              {
                title: 'Семейный Стандарт',
                price: '6 500 ₽',
                description: 'Удобный номер для семьи с детьми',
                features: ['1 двуспальная кровать', '2 односпальные кровати', 'Wi-Fi', 'Завтрак включен', 'Кондиционер'],
                capacity: '4 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/5465f631-8a2c-4c64-aa88-be30de486f5e.jpg',
              },
              {
                title: 'Семейный',
                price: '7 500 ₽',
                description: 'Просторный номер для всей семьи',
                features: ['2 двуспальные кровати', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Диван', 'Гостиная зона'],
                capacity: '4 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/3b0921f2-7651-4593-a209-5e635e549219.jpg',
              },
              {
                title: 'Люкс',
                price: '8 500 ₽',
                description: 'Премиальный номер с панорамным видом',
                features: ['Кровать king-size', 'Wi-Fi', 'Завтрак включен', 'Мини-бар', 'Джакузи', 'Гостиная зона'],
                capacity: '2 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e20cc3b9-fcb3-4c1a-9469-11c2ddb14702.jpg',
              },
              {
                title: 'Семейный Люкс',
                price: '12 500 ₽',
                description: 'Премиальный семейный номер с двумя спальнями',
                features: ['2 кровати king-size', 'Wi-Fi', 'Завтрак включен', 'Кухня', 'Мини-бар', '2 ванные комнаты', 'Большая гостиная'],
                capacity: '4 гостя',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/025a50b7-7ef3-4fda-b6cd-d94563cfd1cd.jpg',
              },
              {
                title: 'Апартаменты',
                price: '15 000 ₽',
                description: 'Роскошные апартаменты для большой семьи',
                features: ['3 спальни', 'Wi-Fi', 'Завтрак включен', 'Полноценная кухня', 'Мини-бар', '2 ванные комнаты', 'Гостиная', 'Балкон'],
                capacity: '6 гостей',
                image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/3f2aab7f-5a3f-4a78-8620-d26283acd92f.jpg',
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
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

      <section id="restaurants" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рестораны Chili Lime</h2>
            <p className="text-lg text-muted-foreground">Откройте для себя уникальные вкусы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/17677c28-a671-4fa8-9a04-f0f60ef9cca2.jpg"
                alt="Интерьер ресторана"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Атмосфера</CardTitle>
                <CardDescription>
                  Современный дизайн, уютная обстановка и внимательный сервис создают идеальные условия для вашего визита
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/10910198-89c8-463e-83b4-fca06d1fd8bc.jpg"
                alt="Блюдо"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Кухня</CardTitle>
                <CardDescription>
                  Авторские блюда от шеф-повара, свежие ингредиенты и яркие вкусовые сочетания
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

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