import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LIME
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light italic">
          сеть гостиниц и ресторанов
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => onNavigate('hotels')}>
            <CardHeader>
              <Icon name="Hotel" className="w-12 h-12 mb-4 text-primary" />
              <CardTitle className="text-2xl">Гостиницы LIME</CardTitle>
              <CardDescription>Комфортное размещение в современных номерах</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => onNavigate('restaurants')}>
            <CardHeader>
              <Icon name="UtensilsCrossed" className="w-12 h-12 mb-4 text-primary" />
              <CardTitle className="text-2xl">Рестораны Chili Lime</CardTitle>
              <CardDescription>Изысканная кухня и уютная атмосфера</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
