import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LoadingScreen from '@/components/LoadingScreen';
import Icon from '@/components/ui/icon';

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleChoice = (path: string) => {
    navigate(path);
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <img 
            src="https://cdn.poehali.dev/files/1b1431e4-2a8b-47e5-8bfa-20f013ab753a.jpg" 
            alt="LIME" 
            className="h-24 w-auto mx-auto"
          />
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Добро пожаловать в LIME
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите, что вас интересует
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card 
            className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary overflow-hidden"
            onClick={() => handleChoice('/hotels')}
          >
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/ec1af49a-43c9-4caa-a7db-e1bda7ba253e.jpg"
                  alt="Гостиницы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Hotel" className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Гостиницы</h2>
                  </div>
                  <p className="text-white/90">Комфортное размещение для вашего отдыха</p>
                </div>
              </div>
              <div className="p-6 bg-secondary/30">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline" size="lg">
                  Выбрать гостиницу
                  <Icon name="ArrowRight" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary overflow-hidden"
            onClick={() => handleChoice('/restaurant')}
          >
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/4f5e7fa5-8e7e-455d-be54-4f07e9c3c6f0.jpg"
                  alt="Ресторан"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="UtensilsCrossed" className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Ресторан</h2>
                  </div>
                  <p className="text-white/90">Изысканная кухня и уютная атмосфера</p>
                </div>
              </div>
              <div className="p-6 bg-secondary/30">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline" size="lg">
                  Перейти в ресторан
                  <Icon name="ArrowRight" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Или изучите весь комплекс услуг на{' '}
            <button 
              onClick={() => navigate('/about')}
              className="text-primary hover:underline font-medium"
            >
              главной странице
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
