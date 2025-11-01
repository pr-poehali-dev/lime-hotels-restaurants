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
import { Link } from 'react-router-dom';

const Restaurant = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const [bookingDate, setBookingDate] = useState<Date>();

  const handleBooking = () => {
    toast({
      title: 'Бронирование отправлено',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения столика.',
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                onClick={() => scrollToSection('menu')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Бронирование
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

      <section className="pt-24 py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ресторан Chili Lime</h2>
            <p className="text-lg text-muted-foreground">Изысканная кухня с панорамным видом</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => scrollToSection('menu')}>
              <img
                src="https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/17677c28-a671-4fa8-9a04-f0f60ef9cca2.jpg"
                alt="Интерьер ресторана"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl">Ресторан LIME</CardTitle>
                <CardDescription>
                  Панорамные окна с видом на город, современный дизайн и уютная обстановка. Разнообразное меню на любой вкус.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div id="menu" className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Меню ресторана</h3>
            <Tabs defaultValue="salads" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 max-w-6xl mx-auto mb-8">
                <TabsTrigger value="salads">Салаты</TabsTrigger>
                <TabsTrigger value="soups">Супы</TabsTrigger>
                <TabsTrigger value="appetizers">Закуски</TabsTrigger>
                <TabsTrigger value="mains">Второе</TabsTrigger>
                <TabsTrigger value="sides">Гарниры</TabsTrigger>
                <TabsTrigger value="desserts">Десерты</TabsTrigger>
                <TabsTrigger value="cakes">Торты</TabsTrigger>
                <TabsTrigger value="drinks">Напитки</TabsTrigger>
              </TabsList>
              
              <TabsContent value="salads" className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Салаты</h4>
                  <div className="grid md:grid-cols-1 gap-3">
                    {[
                      { name: 'Цезарь', weight: '200г', price: '350 ₽' },
                      { name: 'Лилия', weight: '180г', price: '280 ₽' },
                      { name: 'Морской бриз', weight: '220г', price: '420 ₽' },
                      { name: 'Салат с сухариками', weight: '150г', price: '220 ₽' },
                      { name: 'Оливье', weight: '200г', price: '250 ₽' },
                      { name: 'Оливье по-дальневосточному', weight: '220г', price: '320 ₽' },
                      { name: 'Винегрет', weight: '180г', price: '200 ₽' },
                      { name: 'Рыба под шубой', weight: '200г', price: '280 ₽' },
                      { name: 'Морковный салат с чесноком и сметаной', weight: '150г', price: '180 ₽' },
                      { name: 'Греческий салат', weight: '200г', price: '340 ₽' }
                    ].map((item, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all">
                        <CardHeader className="pb-3 flex flex-row items-center justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-base">{item.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                          </div>
                          <span className="text-lg font-semibold text-primary">{item.price}</span>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Салаты диетические</h4>
                  <div className="grid md:grid-cols-1 gap-3">
                    {[
                      { name: 'Ассорти', weight: '180г', price: '320 ₽' },
                      { name: 'Для милых дам', weight: '160г', price: '280 ₽' },
                      { name: 'Салат с сельдью', weight: '200г', price: '260 ₽' }
                    ].map((item, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all">
                        <CardHeader className="pb-3 flex flex-row items-center justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-base">{item.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                          </div>
                          <span className="text-lg font-semibold text-primary">{item.price}</span>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="soups" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Супы</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Свекольник', weight: '300мл', price: '200 ₽' },
                    { name: 'Щи', weight: '300мл', price: '220 ₽' },
                    { name: 'Рассольник', weight: '300мл', price: '240 ₽' },
                    { name: 'Рассольник с клецками', weight: '350мл', price: '280 ₽' },
                    { name: 'Дачный', weight: '300мл', price: '210 ₽' },
                    { name: 'Уха', weight: '300мл', price: '320 ₽' },
                    { name: 'Уха двойная', weight: '350мл', price: '420 ₽' },
                    { name: 'Грибной суп', weight: '300мл', price: '260 ₽' },
                    { name: 'Холодный лимонный суп', weight: '250мл', price: '240 ₽' },
                    { name: 'Куриный суп с лапшой', weight: '300мл', price: '230 ₽' },
                    { name: 'Овощной суп пюре', weight: '300мл', price: '250 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="appetizers" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Закуски</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Крымская', weight: '350г', price: '480 ₽' },
                    { name: 'Заливной судак', weight: '300г', price: '520 ₽' },
                    { name: 'Рулет из лаваша', weight: '250г', price: '340 ₽' },
                    { name: 'Сëмга отварная с гарниром', weight: '400г', price: '680 ₽' },
                    { name: 'Мировая', weight: '300г', price: '450 ₽' },
                    { name: 'Буженина', weight: '200г', price: '380 ₽' },
                    { name: 'Утка по-пекински', weight: '350г', price: '620 ₽' },
                    { name: 'Курица жареная', weight: '400г', price: '490 ₽' },
                    { name: 'Пицца из кабачков', weight: '300г', price: '320 ₽' },
                    { name: 'Пицца "Палермо"', weight: '350г', price: '420 ₽' },
                    { name: 'Мини-пиццы с ветчиной', weight: '250г', price: '280 ₽' },
                    { name: 'Омлет', weight: '200г', price: '180 ₽' },
                    { name: 'Глазунья', weight: '150г', price: '140 ₽' },
                    { name: 'Уяча', weight: '300г', price: '360 ₽' },
                    { name: 'Брускетта с помидорами черри и базиликом', weight: '220г', price: '290 ₽' },
                    { name: 'Малосольные огурцы с укропом', weight: '180г', price: '220 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mains" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Второе</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Картофельная запеканка', weight: '300г', price: '320 ₽' },
                    { name: 'Пельмени', weight: '250г', price: '280 ₽' },
                    { name: 'Манты', weight: '300г', price: '340 ₽' },
                    { name: 'Шашлык', weight: '350г', price: '680 ₽' },
                    { name: 'Спагетти', weight: '250г', price: '290 ₽' },
                    { name: 'Макароны по-флотски', weight: '300г', price: '310 ₽' },
                    { name: 'Макароны с сыром', weight: '250г', price: '280 ₽' },
                    { name: 'Котлеты куриные/свиные/говяжие', weight: '200г', price: '350 ₽' },
                    { name: 'Плов из говядины/свинины/курицы', weight: '350г', price: '420 ₽' },
                    { name: 'Стейк из говядины/свинины', weight: '300г', price: '620 ₽' },
                    { name: 'Говяжие рëбрышки', weight: '350г', price: '680 ₽' },
                    { name: 'Куриная грудка со шпинатом и пармезаном', weight: '280г', price: '480 ₽' },
                    { name: 'Мясные рулетики из свинины и говядины', weight: '300г', price: '520 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sides" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Гарниры</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Картофель-пюре', weight: '200г', price: '120 ₽' },
                    { name: 'Картофель по-деревенски', weight: '250г', price: '150 ₽' },
                    { name: 'Отварной рис', weight: '200г', price: '130 ₽' },
                    { name: 'Гречневая каша', weight: '200г', price: '140 ₽' },
                    { name: 'Фунчëза с овощами', weight: '250г', price: '180 ₽' },
                    { name: 'Рагу из овощей', weight: '220г', price: '160 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="desserts" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Десерты</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Ягодный', weight: '150г', price: '220 ₽' },
                    { name: 'Клубника под снегом', weight: '180г', price: '250 ₽' },
                    { name: 'Разноцветный', weight: '160г', price: '230 ₽' },
                    { name: 'Розовые облака', weight: '140г', price: '210 ₽' },
                    { name: 'Фрукты в шоколаде', weight: '200г', price: '280 ₽' },
                    { name: 'Мороженое: клубника/шоколад/вишня/апельсин', weight: '120г', price: '150 ₽' },
                    { name: 'Клубничное желе', weight: '150г', price: '180 ₽' },
                    { name: 'Малиновый мусс', weight: '160г', price: '200 ₽' },
                    { name: 'Блины', weight: '200г', price: '190 ₽' },
                    { name: 'Ватрушки с вареньем', weight: '180г', price: '170 ₽' },
                    { name: 'Пирог яблочный', weight: '150г', price: '160 ₽' },
                    { name: 'Пирог вишнëвый', weight: '150г', price: '170 ₽' },
                    { name: 'Маковый пирог', weight: '140г', price: '180 ₽' },
                    { name: 'Заварное пирожное с вишнëвым кремом', weight: '120г', price: '200 ₽' },
                    { name: 'Заварное пирожное', weight: '120г', price: '180 ₽' },
                    { name: 'Пирожное "Чашка кофе"', weight: '130г', price: '210 ₽' },
                    { name: 'Рулет "Пятиминутка"', weight: '160г', price: '190 ₽' },
                    { name: 'Шарлотка из яблок', weight: '180г', price: '170 ₽' },
                    { name: 'Эклеры', weight: '140г', price: '220 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cakes" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Торты</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Малиновый', weight: '150г', price: '280 ₽' },
                    { name: 'Вишнëвый творожный', weight: '150г', price: '290 ₽' },
                    { name: 'Ананас', weight: '150г', price: '270 ₽' },
                    { name: 'Чëрный принц', weight: '150г', price: '260 ₽' },
                    { name: 'Наполеон', weight: '150г', price: '250 ₽' },
                    { name: 'Седьмое небо', weight: '150г', price: '300 ₽' },
                    { name: 'Кардинал', weight: '150г', price: '310 ₽' },
                    { name: 'Палитра', weight: '150г', price: '290 ₽' },
                    { name: 'Халва', weight: '150г', price: '220 ₽' },
                    { name: 'Торт-мороженое', weight: '150г', price: '240 ₽' },
                    { name: 'Тирамису', weight: '150г', price: '320 ₽' },
                    { name: 'Чискейк', weight: '150г', price: '300 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="drinks" className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Напитки</h4>
                <div className="grid md:grid-cols-1 gap-3">
                  {[
                    { name: 'Чай: чëрный/зелëный/фруктовый/малиновый/с мëдом', weight: '300мл', price: '80 ₽' },
                    { name: 'Капучино', weight: '250мл', price: '180 ₽' },
                    { name: 'Чëрный кофе', weight: '200мл', price: '120 ₽' },
                    { name: 'Латте', weight: '300мл', price: '200 ₽' },
                    { name: 'Сок: вишнëвый/апельсиновый/яблочный/мультифрукт', weight: '250мл', price: '120 ₽' },
                    { name: 'Американо', weight: '250мл', price: '150 ₽' },
                    { name: 'Кола', weight: '330мл', price: '100 ₽' },
                    { name: 'Фанта', weight: '330мл', price: '100 ₽' },
                    { name: 'Молочный коктейль', weight: '300мл', price: '220 ₽' },
                    { name: 'Спрайт', weight: '330мл', price: '100 ₽' },
                    { name: 'Вода', weight: '500мл', price: '60 ₽' },
                    { name: 'Лимонад', weight: '300мл', price: '140 ₽' },
                    { name: 'Вода минеральная/негазированная', weight: '500мл', price: '80 ₽' },
                    { name: 'Вода газированная', weight: '500мл', price: '80 ₽' },
                    { name: 'Детское шампанское', weight: '330мл', price: '180 ₽' },
                    { name: 'Шампанское', weight: '200мл', price: '350 ₽' }
                  ].map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader className="pb-3 flex flex-row items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary">{item.price}</span>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div id="booking">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Забронировать столик</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами для подтверждения</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleBooking();
                  }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Дата</Label>
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
                      <Label htmlFor="time">Время</Label>
                      <Select required>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {['12:00', '13:00', '14:00', '15:00', '18:00', '19:00', '20:00', '21:00'].map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Select required>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Забронировать столик
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;