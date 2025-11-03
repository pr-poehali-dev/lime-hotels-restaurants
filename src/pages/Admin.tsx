import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Booking {
  id: number;
  room_title: string;
  room_price: string;
  guest_name: string;
  guest_phone: string;
  guest_email: string;
  checkin_date: string;
  nights: number;
  created_at: string;
}

const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/41ecc4b7-c6b2-4a37-bb54-91b827d577a6');
      const data = await response.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error('Ошибка загрузки бронирований:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Админ-панель LIME</h1>
            <Link to="/">
              <Button size="sm" variant="outline">
                <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-24 py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Бронирования номеров</h2>
              <p className="text-muted-foreground">
                Всего бронирований: {bookings.length}
              </p>
            </div>
            <Button onClick={fetchBookings} variant="outline">
              <Icon name="RefreshCw" className="w-4 h-4 mr-2" />
              Обновить
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Загрузка данных...</p>
            </div>
          ) : bookings.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Icon name="Calendar" className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">Бронирований пока нет</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{booking.room_title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Создано: {formatDateTime(booking.created_at)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{booking.room_price}</p>
                        <p className="text-sm text-muted-foreground">за ночь</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase">Информация о госте</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Icon name="User" className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span>{booking.guest_name}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Phone" className="w-4 h-4 mr-2 text-muted-foreground" />
                            <a href={`tel:${booking.guest_phone}`} className="hover:text-primary transition-colors">
                              {booking.guest_phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Mail" className="w-4 h-4 mr-2 text-muted-foreground" />
                            <a href={`mailto:${booking.guest_email}`} className="hover:text-primary transition-colors">
                              {booking.guest_email}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase">Детали бронирования</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Icon name="Calendar" className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span>Заезд: {formatDate(booking.checkin_date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Moon" className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span>{booking.nights} {booking.nights === 1 ? 'ночь' : booking.nights < 5 ? 'ночи' : 'ночей'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin;
