import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

interface HotelsSectionProps {
  onRoomSelect: (room: Room) => void;
}

export const HotelsSection = ({ onRoomSelect }: HotelsSectionProps) => {
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
    <section id="hotels" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Гостиницы LIME</h2>
          <p className="text-lg text-muted-foreground">Выберите идеальный номер для вашего отдыха</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">{room.title}</CardTitle>
                  <span className="text-2xl font-bold text-primary">{room.price}</span>
                </div>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Users" className="w-4 h-4 mr-2" />
                    {room.capacity}
                  </div>
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Icon name="Check" className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full" onClick={() => onRoomSelect(room)}>
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/hotels">
            <Button size="lg" variant="outline">
              Смотреть все номера
              <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
