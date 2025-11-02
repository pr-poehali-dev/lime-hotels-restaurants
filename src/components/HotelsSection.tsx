import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { rooms, Room } from '@/data/rooms';

interface HotelsSectionProps {
  onRoomSelect: (room: Room) => void;
}

export const HotelsSection = ({ onRoomSelect }: HotelsSectionProps) => {

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