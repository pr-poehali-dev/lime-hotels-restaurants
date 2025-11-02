import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface RestaurantsSectionProps {
  onMenuItemSelect: (item: MenuItem) => void;
}

export const RestaurantsSection = ({ onMenuItemSelect }: RestaurantsSectionProps) => {
  const menuItems: MenuItem[] = [
    {
      name: 'Цезарь с курицей',
      description: 'Классический салат с хрустящими гренками',
      price: '450 ₽',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/7e4e47be-a0a9-44b5-a6ee-8e3bf8db8e0e.jpg',
      category: 'salads',
    },
    {
      name: 'Греческий салат',
      description: 'Свежие овощи с сыром фета',
      price: '400 ₽',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/9ca3da5f-a4e2-48e1-b1ee-e96c3821d2e4.jpg',
      category: 'salads',
    },
    {
      name: 'Том Ям',
      description: 'Острый тайский суп с морепродуктами',
      price: '550 ₽',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/e98c38e0-b2f6-4ea3-b93b-ff2a01ef5bdc.jpg',
      category: 'soups',
    },
    {
      name: 'Стейк рибай',
      description: 'Сочный стейк из мраморной говядины',
      price: '1 800 ₽',
      image: 'https://cdn.poehali.dev/projects/5e176038-af56-4ebf-924f-39eae234216c/files/b6a67bbd-a89e-41e1-bf3a-e75e88e5dd9b.jpg',
      category: 'mains',
    },
  ];

  const categories = [
    { value: 'salads', label: 'Салаты' },
    { value: 'soups', label: 'Супы' },
    { value: 'mains', label: 'Основные блюда' },
    { value: 'desserts', label: 'Десерты' },
  ];

  return (
    <section id="restaurants" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Рестораны Chili Lime</h2>
          <p className="text-lg text-muted-foreground">Разнообразное меню на любой вкус</p>
        </div>

        <Tabs defaultValue="salads" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>{cat.label}</TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems
                  .filter((item) => item.category === cat.value)
                  .map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <span className="text-lg font-bold text-primary">{item.price}</span>
                        </div>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm" className="w-full" onClick={() => onMenuItemSelect(item)}>
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/restaurant">
            <Button size="lg" variant="outline">
              Посмотреть полное меню
              <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
