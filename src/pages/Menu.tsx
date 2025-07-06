import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';

// Import images
import seaBream from '@/assets/sea-bream.jpg';
import seafoodPaella from '@/assets/seafood-paella.jpg';
import calamariChermoula from '@/assets/calamari-chermoula.jpg';
import fishTagine from '@/assets/fish-tagine.jpg';

const Menu = () => {
  const starters = [
    {
      name: "Panini Poulet",
      description: "Grilled chicken panini served with fries",
      price: "45 DH"
    },
    {
      name: "Panini Viande Hachée",
      description: "Ground meat panini served with fries",
      price: "45 DH"
    },
    {
      name: "Panini Fruits de Mer",
      description: "Seafood panini served with fries",
      price: "65 DH"
    },
    {
      name: "Chawarma Poulet",
      description: "Chicken shawarma served with fries",
      price: "50 DH"
    },
    {
      name: "Tacos Poulet",
      description: "Chicken tacos served with fries",
      price: "40 DH"
    },
    {
      name: "Tacos Viande Hachée",
      description: "Ground meat tacos served with fries",
      price: "45 DH"
    },
    {
      name: "Tacos Mixt",
      description: "Mixed tacos served with fries",
      price: "50 DH"
    },
    {
      name: "Tacos Fruits de Mer",
      description: "Seafood tacos served with fries",
      price: "65 DH"
    }
  ];

  const mains = [
    // Pâtes
    {
      name: "Lasagne Bolognaise",
      description: "Classic Italian lasagna with Bolognese sauce",
      price: "55 DH"
    },
    {
      name: "Spaghetti Fruits de Mer",
      description: "Spaghetti with mixed seafood",
      price: "90 DH"
    },
    {
      name: "Spaghetti Bolognaise",
      description: "Traditional spaghetti with Bolognese sauce",
      price: "60 DH"
    },
    {
      name: "Tagliatelle Fruits de Mer",
      description: "Tagliatelle pasta with mixed seafood",
      price: "90 DH"
    },
    // Pizzas
    {
      name: "Pizza Margarita",
      description: "Sauce tomate, Mozzarella, Origan, Olive noire",
      price: "M: 40dh / G: 55dh"
    },
    {
      name: "Pizza Napolitaine",
      description: "Sauce tomate, Mozzarella, Anchois, Origan, Olive noire",
      price: "M: 50dh / G: 65dh"
    },
    {
      name: "Pizza Bolognaise",
      description: "Sauce tomate, Mozzarella, Viande hachée, Champignon, Origan, Olive noire",
      price: "M: 50dh / G: 70dh"
    },
    {
      name: "Pizza Marinera",
      description: "Sauce tomate, Mozzarella, Calamar, Crevette, Champignon, Origan, Olive noire",
      price: "M: 65dh / G: 85dh"
    },
    {
      name: "Pizza Royal",
      description: "Sauce tomate, Mozzarella, Crevette, Calamar, Champignon, Thon, Poivron, Origan, Olive noire",
      price: "M: 70dh / G: 90dh"
    },
    // Volailles
    {
      name: "Filet Poulet Grillé",
      description: "Grilled chicken fillet",
      price: "65 DH"
    },
    {
      name: "Filet Poulet à la crème",
      description: "Chicken fillet with cream sauce",
      price: "75 DH"
    },
    {
      name: "Brochettes de Poulet",
      description: "Chicken skewers",
      price: "55 DH"
    },
    // Viandes
    {
      name: "Entrecôte Grillé",
      description: "Grilled ribeye steak",
      price: "90 DH"
    },
    {
      name: "Entrecôte au Poivre",
      description: "Ribeye steak with pepper sauce",
      price: "110 DH"
    },
    {
      name: "Filet de Boeuf Grillé",
      description: "Grilled beef fillet",
      price: "130 DH"
    },
    {
      name: "Filet de Boeuf aux champignons",
      description: "Beef fillet with mushroom sauce",
      price: "150 DH"
    },
    {
      name: "Tajine viande de Boeuf",
      description: "Traditional Moroccan beef tagine",
      price: "80 DH"
    },
    {
      name: "Couscous aux sept légumes",
      description: "Traditional couscous with seven vegetables (Every Friday)",
      price: "60 DH"
    },
    // Hamburgers
    {
      name: "Hamburger",
      description: "Classic hamburger served with fries",
      price: "45 DH"
    },
    {
      name: "Double Burger",
      description: "Double patty burger served with fries",
      price: "55 DH"
    },
    {
      name: "Chicken Burger",
      description: "Grilled chicken burger served with fries",
      price: "45 DH"
    },
    {
      name: "Cheese Burger",
      description: "Hamburger with cheese served with fries",
      price: "45 DH"
    }
  ];

  const desserts = [
    {
      name: "Flan Turon",
      description: "Traditional turron flan",
      price: "30 DH"
    },
    {
      name: "Flan Blanc",
      description: "Classic white flan",
      price: "30 DH"
    },
    {
      name: "Crème Caramel",
      description: "Traditional crème caramel dessert",
      price: "25 DH"
    },
    {
      name: "Tarte Citron",
      description: "Fresh lemon tart",
      price: "30 DH"
    },
    {
      name: "Tarte Oreo",
      description: "Oreo cookie tart",
      price: "30 DH"
    },
    {
      name: "Salade de Fruits",
      description: "Fresh fruit salad",
      price: "30 DH"
    },
    {
      name: "Fruits de Saison",
      description: "Seasonal fresh fruits",
      price: "40 DH"
    },
    {
      name: "Nougat Glacé au miel",
      description: "Honey nougat ice cream",
      price: "35 DH"
    },
    {
      name: "Natillas",
      description: "Traditional Spanish custard",
      price: "25 DH"
    },
    {
      name: "Häagen-Dazs",
      description: "Premium ice cream selection",
      price: "35 DH"
    }
  ];

  const beverages = [
    {
      name: "House Wine Selection",
      description: "Red, white, and rosé wines carefully selected by our sommelier",
      price: "80-150 DH"
    },
    {
      name: "Fresh Juices",
      description: "Orange, apple, pineapple, and seasonal fruit juices",
      price: "35 DH"
    },
    {
      name: "Moroccan Mint Tea",
      description: "Traditional Moroccan tea with fresh mint",
      price: "25 DH"
    },
    {
      name: "Coffee Selection",
      description: "Espresso, cappuccino, latte, and Turkish coffee",
      price: "30-45 DH"
    }
  ];

  const renderMenuItems = (items: any[], showImage = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
          {showImage && item.image && (
            <div className="relative overflow-hidden h-48">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          )}
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-serif font-semibold text-marine-blue">
                {item.name}
              </h3>
              <span className="text-gold font-semibold text-lg ml-4 flex-shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

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

              <TabsContent value="starters" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-marine-blue mb-4">
                    Starters & Appetizers
                  </h2>
                  <p className="text-muted-foreground">
                    Begin your culinary journey with our selection of fresh appetizers
                  </p>
                </div>
                {renderMenuItems(starters, true)}
              </TabsContent>

              <TabsContent value="mains" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-marine-blue mb-4">
                    Main Dishes
                  </h2>
                  <p className="text-muted-foreground">
                    From authentic Italian pasta and pizza to traditional Moroccan tagines and grilled specialties
                  </p>
                </div>
                {renderMenuItems(mains, true)}
              </TabsContent>

              <TabsContent value="desserts" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-marine-blue mb-4">
                    Desserts
                  </h2>
                  <p className="text-muted-foreground">
                    Sweet endings to complete your dining experience
                  </p>
                </div>
                {renderMenuItems(desserts)}
              </TabsContent>

              <TabsContent value="beverages" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-marine-blue mb-4">
                    Beverages
                  </h2>
                  <p className="text-muted-foreground">
                    Carefully selected wines, fresh juices, and traditional beverages
                  </p>
                </div>
                {renderMenuItems(beverages)}
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