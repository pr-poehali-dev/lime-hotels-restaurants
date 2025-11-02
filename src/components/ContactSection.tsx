import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground">Мы всегда рады вам помочь</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="MapPin" className="w-5 h-5 mr-2 text-primary" />
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
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
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
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
  );
};
