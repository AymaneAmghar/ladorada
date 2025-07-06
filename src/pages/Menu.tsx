import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { starters, mains, desserts, beverages } from '@/data/menuData';

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-coastal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-marine-blue hover:text-gold transition-colors mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-marine-blue mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of Mediterranean and European dishes, 
              from authentic pizzas and pastas to traditional Moroccan tagines
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="mains" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-gradient-coastal p-2 rounded-lg">
                <TabsTrigger value="starters" className="data-[state=active]:bg-pearl-white data-[state=active]:text-marine-blue">
                  Starters
                </TabsTrigger>
                <TabsTrigger value="mains" className="data-[state=active]:bg-pearl-white data-[state=active]:text-marine-blue">
                  Main Dishes
                </TabsTrigger>
                <TabsTrigger value="desserts" className="data-[state=active]:bg-pearl-white data-[state=active]:text-marine-blue">
                  Desserts
                </TabsTrigger>
                <TabsTrigger value="beverages" className="data-[state=active]:bg-pearl-white data-[state=active]:text-marine-blue">
                  Beverages
                </TabsTrigger>
              </TabsList>

              <TabsContent value="starters">
                <MenuSection
                  title="Starters & Appetizers"
                  description="From authentic paninis and tacos to traditional shawarma"
                  items={starters}
                />
              </TabsContent>

              <TabsContent value="mains">
                <MenuSection
                  title="Main Dishes"
                  description="From authentic Italian pasta and pizza to traditional Moroccan tagines and grilled specialties"
                  items={mains}
                />
              </TabsContent>

              <TabsContent value="desserts">
                <MenuSection
                  title="Desserts"
                  description="Sweet endings to complete your dining experience"
                  items={desserts}
                />
              </TabsContent>

              <TabsContent value="beverages">
                <MenuSection
                  title="Beverages"
                  description="Carefully selected wines, fresh juices, and traditional beverages"
                  items={beverages}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-coastal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-marine-blue mb-6">
            Ready to Experience La Dorada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reserve your table now and let us take you on a culinary journey through the Mediterranean
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="reserve" size="lg">
              Make a Reservation
            </Button>
            <Link to="/">
              <Button variant="elegant" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;