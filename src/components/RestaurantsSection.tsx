import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  weight: string;
  price: string;
}

export const RestaurantsSection = () => {
  const salads: MenuItem[] = [
    { name: 'Цезарь', weight: '200г', price: '350 ₽' },
    { name: 'Лилия', weight: '180г', price: '280 ₽' },
    { name: 'Морской бриз', weight: '220г', price: '420 ₽' },
    { name: 'Салат с сухариками', weight: '150г', price: '220 ₽' },
    { name: 'Оливье', weight: '200г', price: '250 ₽' },
    { name: 'Оливье по-дальневосточному', weight: '220г', price: '320 ₽' },
    { name: 'Винегрет', weight: '180г', price: '200 ₽' },
    { name: 'Рыба под шубой', weight: '200г', price: '280 ₽' },
    { name: 'Морковный салат с чесноком и сметаной', weight: '150г', price: '180 ₽' },
    { name: 'Греческий салат', weight: '200г', price: '340 ₽' }
  ];

  const dietSalads: MenuItem[] = [
    { name: 'Ассорти', weight: '180г', price: '320 ₽' },
    { name: 'Для милых дам', weight: '160г', price: '280 ₽' },
    { name: 'Салат с сельдью', weight: '200г', price: '260 ₽' }
  ];

  const soups: MenuItem[] = [
    { name: 'Свекольник', weight: '300мл', price: '200 ₽' },
    { name: 'Щи', weight: '300мл', price: '220 ₽' },
    { name: 'Рассольник', weight: '300мл', price: '240 ₽' },
    { name: 'Рассольник с клецками', weight: '350мл', price: '280 ₽' },
    { name: 'Дачный', weight: '300мл', price: '210 ₽' },
    { name: 'Уха', weight: '300мл', price: '320 ₽' },
    { name: 'Уха двойная', weight: '350мл', price: '380 ₽' },
    { name: 'Куриный бульон', weight: '300мл', price: '180 ₽' },
    { name: 'Бульон с пельменями', weight: '350мл', price: '250 ₽' },
    { name: 'Харчо', weight: '300мл', price: '260 ₽' },
    { name: 'Солянка', weight: '350мл', price: '280 ₽' }
  ];

  const appetizers: MenuItem[] = [
    { name: 'Язык говяжий', weight: '100г', price: '280 ₽' },
    { name: 'Сельдь', weight: '100г', price: '180 ₽' },
    { name: 'Малосольная семга', weight: '100г', price: '420 ₽' },
    { name: 'Ассорти рыбное', weight: '150г', price: '480 ₽' },
    { name: 'Ассорти мясное', weight: '200г', price: '520 ₽' }
  ];

  const mains: MenuItem[] = [
    { name: 'Котлета куриная', weight: '120г', price: '180 ₽' },
    { name: 'Котлета говяжья', weight: '150г', price: '220 ₽' },
    { name: 'Пельмени с мясом', weight: '200г', price: '250 ₽' },
    { name: 'Пельмени с капустой', weight: '200г', price: '220 ₽' },
    { name: 'Куриные наггетсы', weight: '180г', price: '280 ₽' },
    { name: 'Курица запеченная', weight: '200г', price: '320 ₽' },
    { name: 'Свиная отбивная', weight: '150г', price: '280 ₽' },
    { name: 'Стейк из семги', weight: '200г', price: '520 ₽' },
    { name: 'Рыба жареная', weight: '180г', price: '340 ₽' },
    { name: 'Голубцы', weight: '200г', price: '260 ₽' }
  ];

  const sides: MenuItem[] = [
    { name: 'Картофель отварной', weight: '150г', price: '80 ₽' },
    { name: 'Картофель жареный', weight: '150г', price: '100 ₽' },
    { name: 'Картофельное пюре', weight: '150г', price: '90 ₽' },
    { name: 'Рис отварной', weight: '150г', price: '80 ₽' },
    { name: 'Гречка', weight: '150г', price: '80 ₽' },
    { name: 'Макароны', weight: '150г', price: '70 ₽' },
    { name: 'Овощи гриль', weight: '150г', price: '180 ₽' }
  ];

  const desserts: MenuItem[] = [
    { name: 'Мороженое', weight: '100г', price: '120 ₽' },
    { name: 'Чизкейк', weight: '120г', price: '220 ₽' },
    { name: 'Тирамису', weight: '120г', price: '240 ₽' },
    { name: 'Панна-котта', weight: '150г', price: '200 ₽' },
    { name: 'Наполеон', weight: '120г', price: '180 ₽' }
  ];

  const cakes: MenuItem[] = [
    { name: 'Медовик', weight: '1кг', price: '1200 ₽' },
    { name: 'Прага', weight: '1кг', price: '1400 ₽' },
    { name: 'Птичье молоко', weight: '1кг', price: '1300 ₽' },
    { name: 'Красный бархат', weight: '1кг', price: '1600 ₽' }
  ];

  const drinks: MenuItem[] = [
    { name: 'Чай черный', weight: '200мл', price: '80 ₽' },
    { name: 'Чай зеленый', weight: '200мл', price: '80 ₽' },
    { name: 'Кофе американо', weight: '200мл', price: '150 ₽' },
    { name: 'Кофе капучино', weight: '200мл', price: '180 ₽' },
    { name: 'Кофе латте', weight: '300мл', price: '200 ₽' },
    { name: 'Сок апельсиновый', weight: '200мл', price: '120 ₽' },
    { name: 'Сок яблочный', weight: '200мл', price: '120 ₽' },
    { name: 'Морс клюквенный', weight: '200мл', price: '100 ₽' },
    { name: 'Лимонад', weight: '300мл', price: '150 ₽' }
  ];

  const renderMenuItems = (items: MenuItem[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-all">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div className="flex-1">
              <CardTitle className="text-base">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{item.weight}</p>
            </div>
            <span className="text-lg font-semibold text-primary">{item.price}</span>
          </CardHeader>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="restaurants" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ресторан Chili Lime</h2>
          <p className="text-lg text-muted-foreground">Разнообразное меню на любой вкус</p>
        </div>

        <Tabs defaultValue="salads" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 max-w-6xl mx-auto mb-8">
            <TabsTrigger value="salads">Салаты</TabsTrigger>
            <TabsTrigger value="soups">Супы</TabsTrigger>
            <TabsTrigger value="appetizers">Закуски</TabsTrigger>
            <TabsTrigger value="mains">Второе</TabsTrigger>
            <TabsTrigger value="sides">Гарниры</TabsTrigger>
            <TabsTrigger value="desserts">Десерты</TabsTrigger>
            <TabsTrigger value="cakes">Торты</TabsTrigger>
            <TabsTrigger value="drinks">Напитки</TabsTrigger>
          </TabsList>

          <TabsContent value="salads" className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Салаты</h4>
              {renderMenuItems(salads)}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Салаты диетические</h4>
              {renderMenuItems(dietSalads)}
            </div>
          </TabsContent>

          <TabsContent value="soups" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Супы</h4>
            {renderMenuItems(soups)}
          </TabsContent>

          <TabsContent value="appetizers" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Закуски</h4>
            {renderMenuItems(appetizers)}
          </TabsContent>

          <TabsContent value="mains" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Второе</h4>
            {renderMenuItems(mains)}
          </TabsContent>

          <TabsContent value="sides" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Гарниры</h4>
            {renderMenuItems(sides)}
          </TabsContent>

          <TabsContent value="desserts" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Десерты</h4>
            {renderMenuItems(desserts)}
          </TabsContent>

          <TabsContent value="cakes" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Торты</h4>
            {renderMenuItems(cakes)}
          </TabsContent>

          <TabsContent value="drinks" className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Напитки</h4>
            {renderMenuItems(drinks)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/restaurant">
            <Button size="lg" variant="outline">
              Забронировать столик
              <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
