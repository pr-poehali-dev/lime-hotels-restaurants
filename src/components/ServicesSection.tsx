import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ServicesSection = () => {
  const services = [
    {
      icon: 'Wifi',
      title: 'Бесплатный Wi-Fi',
      description: 'Высокоскоростной интернет во всех номерах',
    },
    {
      icon: 'Car',
      title: 'Парковка',
      description: 'Бесплатная охраняемая парковка для гостей',
    },
    {
      icon: 'Dumbbell',
      title: 'Фитнес-центр',
      description: 'Современный тренажерный зал',
    },
    {
      icon: 'Waves',
      title: 'SPA',
      description: 'Расслабляющие процедуры и массаж',
    },
    {
      icon: 'ConciergeBell',
      title: 'Консьерж',
      description: 'Круглосуточная помощь и поддержка',
    },
    {
      icon: 'Plane',
      title: 'Трансфер',
      description: 'Услуги трансфера из аэропорта',
    },
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground">Всё для вашего комфорта</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <Icon name={service.icon as any} className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
