import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('main');

  const upcomingEvents = [
    { date: '16 июня', title: 'Летняя ярмарка', type: 'Овощи и фрукты' },
    { date: '23 июня', title: 'Молочная ярмарка', type: 'Молочные продукты' },
    { date: '30 июня', title: 'Мёд и варенье', type: 'Сладости' },
    { date: '7 июля', title: 'Фестиваль урожая', type: 'Все категории' },
  ];

  const farmersCount = 142;
  const nextEvent = 'Летняя ярмарка - 16 июня';

  const navigation = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'register', label: 'Регистрация', icon: 'UserPlus' },
    { id: 'calendar', label: 'Календарь', icon: 'Calendar' },
    { id: 'farmers', label: 'Фермеры', icon: 'Users' },
    { id: 'rules', label: 'Правила', icon: 'FileText' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'register':
        return (
          <div className="max-w-2xl mx-auto">
            <Card className="border-farm-warm-brown/20">
              <CardHeader>
                <CardTitle className="text-farm-dark-brown flex items-center gap-2">
                  <Icon name="UserPlus" size={24} />
                  Регистрация фермера
                </CardTitle>
                <CardDescription>
                  Заполните форму для участия в ярмарке выходного дня
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="products">Категория товаров</Label>
                  <Input id="products" placeholder="Овощи, фрукты, молочные продукты..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание продукции</Label>
                  <Textarea id="description" placeholder="Расскажите о своих товарах..." />
                </div>
                <Button className="w-full bg-farm-brown hover:bg-farm-dark-brown">
                  Подать заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'calendar':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-farm-warm-brown/20">
                <CardHeader>
                  <CardTitle className="text-farm-dark-brown flex items-center gap-2">
                    <Icon name="Calendar" size={24} />
                    Календарь событий
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-farm-warm-brown/20"
                  />
                </CardContent>
              </Card>
              <Card className="border-farm-warm-brown/20">
                <CardHeader>
                  <CardTitle className="text-farm-dark-brown">Предстоящие ярмарки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-farm-cream rounded-lg">
                        <div>
                          <p className="font-medium text-farm-dark-brown">{event.title}</p>
                          <p className="text-sm text-farm-warm-brown">{event.date}</p>
                        </div>
                        <Badge variant="secondary" className="bg-farm-sage text-white">
                          {event.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-farm-brown/90 to-farm-dark-brown/90 z-10"></div>
              <img 
                src="/img/9433fceb-ecbf-421d-8936-9ac73d648da1.jpg" 
                alt="Фермерская ярмарка" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 px-8 py-16 text-center text-white">
                <h1 className="text-5xl font-bold mb-4 font-serif">
                  Ярмарка выходного дня
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Свежие фермерские продукты от местных производителей. 
                  Присоединяйтесь к нашему сообществу!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-farm-sage hover:bg-farm-sage/80 text-white"
                    onClick={() => setActiveSection('register')}
                  >
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Стать фермером
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-farm-brown"
                    onClick={() => setActiveSection('calendar')}
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Календарь событий
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-farm-warm-brown/20">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-farm-brown mb-2">{farmersCount}</div>
                  <p className="text-farm-warm-brown">Зарегистрированных фермеров</p>
                </CardContent>
              </Card>
              <Card className="text-center border-farm-warm-brown/20">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-farm-brown mb-2">24</div>
                  <p className="text-farm-warm-brown">Ярмарки в этом году</p>
                </CardContent>
              </Card>
              <Card className="text-center border-farm-warm-brown/20">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-farm-brown mb-2">5★</div>
                  <p className="text-farm-warm-brown">Рейтинг участников</p>
                </CardContent>
              </Card>
            </section>

            {/* Next Event Section */}
            <section>
              <Card className="border-farm-sage/30 bg-farm-cream/50">
                <CardHeader>
                  <CardTitle className="text-farm-dark-brown flex items-center gap-2">
                    <Icon name="Calendar" size={24} />
                    Ближайшее событие
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-farm-dark-brown">{nextEvent}</p>
                      <p className="text-farm-warm-brown">г. Москва, Парк Сокольники</p>
                    </div>
                    <Button 
                      className="bg-farm-sage hover:bg-farm-sage/80"
                      onClick={() => setActiveSection('register')}
                    >
                      Участвовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Categories Section */}
            <section>
              <h2 className="text-3xl font-bold text-farm-dark-brown mb-8 text-center font-serif">
                Категории товаров
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Овощи и фрукты', icon: 'Apple', color: 'bg-farm-sage' },
                  { name: 'Молочные продукты', icon: 'Milk', color: 'bg-farm-cream border-farm-warm-brown' },
                  { name: 'Мёд и варенье', icon: 'Honey', color: 'bg-farm-wheat' },
                  { name: 'Выпечка', icon: 'Bread', color: 'bg-farm-light-brown' },
                ].map((category, index) => (
                  <Card key={index} className={`${category.color} text-center hover:shadow-lg transition-shadow cursor-pointer`}>
                    <CardContent className="pt-6">
                      <Icon name={category.icon} size={48} className="mx-auto mb-4 text-farm-dark-brown" />
                      <p className="font-medium text-farm-dark-brown">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-farm-cream">
      {/* Navigation */}
      <nav className="bg-white border-b border-farm-warm-brown/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Icon name="Wheat" size={32} className="text-farm-brown mr-2" />
              <span className="text-xl font-bold text-farm-dark-brown font-serif">
                Фермерская ярмарка
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-farm-brown text-white'
                      : 'text-farm-dark-brown hover:bg-farm-cream'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-farm-dark-brown text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <p className="text-farm-cream">+7 (495) 123-45-67</p>
              <p className="text-farm-cream">info@farm-market.ru</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Адрес</h3>
              <p className="text-farm-cream">г. Москва, Парк Сокольники</p>
              <p className="text-farm-cream">Каждые выходные с 9:00 до 18:00</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Следите за нами</h3>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={24} className="text-farm-cream hover:text-white cursor-pointer" />
                <Icon name="Instagram" size={24} className="text-farm-cream hover:text-white cursor-pointer" />
                <Icon name="Phone" size={24} className="text-farm-cream hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-farm-warm-brown/30" />
          <div className="text-center text-farm-cream">
            <p>&copy; 2024 Фермерская ярмарка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}