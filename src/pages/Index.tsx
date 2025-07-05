import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Phone, Mail, Clock, Users, Facebook, Instagram } from 'lucide-react';

// Import images
import heroBackground from '@/assets/hero-background.jpg';
import seaBream from '@/assets/sea-bream.jpg';
import seafoodPaella from '@/assets/seafood-paella.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import calamariChermoula from '@/assets/calamari-chermoula.jpg';
import fishTagine from '@/assets/fish-tagine.jpg';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    restaurantInterior,
    seaBream,
    seafoodPaella,
    calamariChermoula,
    fishTagine
  ];

  const menuItems = [
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
      name: "Calamari with Chermoula",
      description: "Tender calamari rings served with traditional Moroccan chermoula sauce",
      image: calamariChermoula,
      price: "140 DH"
    },
    {
      name: "Fish Tagine",
      description: "Traditional Moroccan fish tagine with vegetables and aromatic spices",
      image: fishTagine,
      price: "200 DH"
    }
  ];

  const testimonials = [
    {
      name: "Amina Benali",
      rating: 5,
      text: "Exceptional seafood and stunning ocean views. The grilled sea bream was absolutely perfect!",
      avatar: "AB"
    },
    {
      name: "Hassan El Fassi",
      rating: 5,
      text: "Best seafood restaurant in Tetouan! The service is impeccable and the atmosphere is magical.",
      avatar: "HE"
    },
    {
      name: "Fatima Zahra",
      rating: 5,
      text: "The paella was incredible and the sunset view from our table was unforgettable. Highly recommended!",
      avatar: "FZ"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-marine-blue/40" />
        
        <div className="relative z-10 text-center text-pearl-white px-4 max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/3d4bb518-0084-4478-8f70-d7985488aec0.png" 
            alt="La Dorada Logo" 
            className="h-32 lg:h-40 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            La Dorada
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4">
            Fresh from the sea to your plate
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            La référence du goût méditerranéen
          </p>
          <Button variant="reserve" size="xl" className="text-lg px-12 py-4">
            Book a Table
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-coastal">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-marine-blue mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-marine-blue/80 mb-6 leading-relaxed">
                  Located in the heart of Tetouan, La Dorada represents the finest tradition of Mediterranean seafood cuisine. Our passion for fresh, locally-sourced ingredients and authentic flavors has made us the premier destination for seafood lovers.
                </p>
                <p className="text-lg text-marine-blue/80 mb-8 leading-relaxed">
                  Connected to Tetouan's rich coastal culture, we bring you the freshest catches daily, prepared with love and served in an atmosphere that captures the essence of the Mediterranean.
                </p>
                <Button variant="elegant" size="lg">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={restaurantInterior} 
                  alt="La Dorada Restaurant Interior" 
                  className="rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-marine-blue mb-4">
              Signature Dishes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved dishes, crafted with the finest ingredients and traditional techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-marine-blue-dark px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-marine-blue mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="ocean" size="lg">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-coastal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-marine-blue mb-4">
              Gallery
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into our world of culinary excellence
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={galleryImages[currentImageIndex]} 
                alt="Gallery Image"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? 'bg-gold' : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-marine-blue mb-4">
                Visit Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of Tetouan with stunning coastal views
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div className="bg-gradient-coastal rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-marine-blue mx-auto mb-4" />
                  <p className="text-marine-blue font-semibold text-lg">Interactive Map</p>
                  <p className="text-marine-blue/70">Google Maps integration would be here</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-marine-blue mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Marina Boulevard, Tetouan<br />
                      Near the Old Medina<br />
                      Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-marine-blue mb-1">Phone</h3>
                    <p className="text-muted-foreground">+212 539 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-marine-blue mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@ladorada.ma</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-marine-blue mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Thursday: 12:00 PM - 11:00 PM</p>
                      <p>Friday - Sunday: 12:00 PM - 12:00 AM</p>
                      <p>Kitchen closes 30 minutes before closing</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="reserve" size="lg" className="w-full">
                    <Phone className="h-5 w-5 mr-2" />
                    Call to Reserve
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-coastal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-marine-blue mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover why La Dorada is Tetouan's favorite seafood destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-pearl-white shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-marine-blue text-pearl-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-marine-blue">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Verified Guest</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Reservation Form */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-marine-blue mb-4">
                Make a Reservation
              </h2>
              <p className="text-xl text-muted-foreground">
                Secure your table for an unforgettable dining experience at La Dorada
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-marine-blue text-pearl-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <img 
                  src="/lovable-uploads/3d4bb518-0084-4478-8f70-d7985488aec0.png" 
                  alt="La Dorada Logo" 
                  className="h-16 mb-6 brightness-0 invert"
                />
                <p className="text-pearl-white/80 leading-relaxed max-w-md">
                  La Dorada - The premier Mediterranean seafood experience in Tetouan. 
                  Fresh ingredients, authentic flavors, and unforgettable moments by the sea.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-pearl-white/80 hover:text-gold transition-colors">About Us</a></li>
                  <li><a href="#menu" className="text-pearl-white/80 hover:text-gold transition-colors">Menu</a></li>
                  <li><a href="#gallery" className="text-pearl-white/80 hover:text-gold transition-colors">Gallery</a></li>
                  <li><a href="#location" className="text-pearl-white/80 hover:text-gold transition-colors">Location</a></li>
                  <li><a href="#contact" className="text-pearl-white/80 hover:text-gold transition-colors">Reservations</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-2 text-pearl-white/80">
                  <p>Marina Boulevard, Tetouan</p>
                  <p>+212 539 123 456</p>
                  <p>contact@ladorada.ma</p>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-pearl-white/80 hover:text-gold transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-pearl-white/80 hover:text-gold transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-pearl-white/20 mt-12 pt-8 text-center">
              <p className="text-pearl-white/60">
                © 2024 La Dorada Restaurant. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;