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
import { Room } from '@/data/rooms';

interface RoomBookingDialogProps {
  room: Room | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const RoomBookingDialog = ({ room, onClose, onConfirm }: RoomBookingDialogProps) => {
  const [bookingDate, setBookingDate] = useState<Date>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [nights, setNights] = useState('1');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!bookingDate || !name || !phone || !email) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/41ecc4b7-c6b2-4a37-bb54-91b827d577a6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room_title: room?.title,
          room_price: room?.price,
          guest_name: name,
          guest_phone: phone,
          guest_email: email,
          checkin_date: format(bookingDate, 'yyyy-MM-dd'),
          nights: parseInt(nights)
        })
      });

      if (response.ok) {
        onConfirm();
        setName('');
        setPhone('');
        setEmail('');
        setBookingDate(undefined);
        setNights('1');
      } else {
        alert('Ошибка при бронировании. Попробуйте еще раз.');
      }
    } catch (error) {
      alert('Ошибка при бронировании. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Label htmlFor="nights">Количество ночей</Label>
                <Select value={nights} onValueChange={setNights}>
                  <SelectTrigger id="nights" className="mt-1">
                    <SelectValue placeholder="Выберите количество" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 ночь</SelectItem>
                    <SelectItem value="2">2 ночи</SelectItem>
                    <SelectItem value="3">3 ночи</SelectItem>
                    <SelectItem value="4">4 ночи</SelectItem>
                    <SelectItem value="5">5 ночей</SelectItem>
                    <SelectItem value="6">6 ночей</SelectItem>
                    <SelectItem value="7">7 ночей</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="mt-1" />
              </div>

              <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Забронировать'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};