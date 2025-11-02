import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

interface RoomBookingDialogProps {
  room: Room | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const RoomBookingDialog = ({ room, onClose, onConfirm }: RoomBookingDialogProps) => {
  const [bookingDate, setBookingDate] = useState<Date>();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!room) return null;

  return (
    <Dialog open={!!room} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{room.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <img 
                src={room.gallery[selectedImage]} 
                alt={room.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {room.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${room.title} ${idx + 1}`}
                  className={`w-full h-20 object-cover rounded cursor-pointer transition-all ${
                    selectedImage === idx ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Удобства:</h4>
              <div className="space-y-2">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 mr-2 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-muted p-6 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Цена за ночь:</span>
                <span className="text-3xl font-bold text-primary">{room.price}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Users" className="w-4 h-4 mr-2" />
                {room.capacity}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Дата заезда</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                      <Icon name="CalendarDays" className="mr-2 h-4 w-4" />
                      {bookingDate ? format(bookingDate, 'PPP', { locale: ru }) : 'Выберите дату'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={bookingDate}
                      onSelect={setBookingDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="guests">Количество гостей</Label>
                <Select>
                  <SelectTrigger id="guests" className="mt-1">
                    <SelectValue placeholder="Выберите количество" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 гость</SelectItem>
                    <SelectItem value="2">2 гостя</SelectItem>
                    <SelectItem value="3">3 гостя</SelectItem>
                    <SelectItem value="4">4 гостя</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
              </div>

              <Button className="w-full" size="lg" onClick={onConfirm}>
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
