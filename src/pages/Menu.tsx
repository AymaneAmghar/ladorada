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
      name: "Calamari with Chermoula",
      description: "Tender calamari rings served with traditional Moroccan chermoula sauce",
      image: calamariChermoula,
      price: "140 DH"
    },
    {
      name: "Seafood Bisque",
      description: "Rich and creamy soup with fresh lobster, crab, and shrimp",
      price: "95 DH"
    },
    {
      name: "Grilled Octopus", 
      description: "Mediterranean-style grilled octopus with olive oil and herbs",
      price: "160 DH"
    },
    {
      name: "Mixed Seafood Salad",
      description: "Fresh mixed greens with shrimp, crab, and house vinaigrette",
      price: "120 DH"
    }
  ];

  const mains = [
    {
      name: "Grilled Sea Bream",
      description: "Fresh sea bream grilled to perfection with Mediterranean herbs and lemon",
      image: seaBream,
      price: "180 DH"
    },
    {
      name: "Seafood Paella",
      description: "Traditional paella with fresh mussels, shrimp, calamari and saffron rice",
      image: seafoodPaella,
      price: "220 DH"
    },
    {
      name: "Fish Tagine",
      description: "Traditional Moroccan fish tagine with vegetables and aromatic spices",
      image: fishTagine,
      price: "200 DH"
    },
    {
      name: "Grilled Salmon",
      description: "Atlantic salmon fillet with lemon butter sauce and seasonal vegetables",
      price: "210 DH"
    },
    {
      name: "Lobster Thermidor",
      description: "Classic French preparation with cream sauce and cheese gratinée",
      price: "350 DH"
    },
    {
      name: "Mixed Seafood Grill",
      description: "Assorted grilled fish and shellfish with Mediterranean seasonings",
      price: "280 DH"
    }
  ];

  const desserts = [
    {
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar",
      price: "65 DH"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      price: "75 DH"
    },
    {
      name: "Fresh Fruit Tart",
      description: "Seasonal fruits on pastry cream in a crisp tart shell",
      price: "60 DH"
    },
    {
      name: "Tiramisu",
      description: "Traditional Italian dessert with coffee and mascarpone",
      price: "70 DH"
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
              Discover our complete collection of Mediterranean seafood dishes, 
              crafted with the finest ingredients and traditional techniques
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
                    Our signature seafood dishes, the heart of our Mediterranean cuisine
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