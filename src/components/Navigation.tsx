import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-pearl-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img alt="La Dorada Restaurant Logo" className="h-12 lg:h-16 w-auto" src="/lovable-uploads/bdb50c2c-e912-4c93-88d2-4457bfdae8c9.png" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
              About
            </button>
            {isHomePage ? (
              <button onClick={() => scrollToSection('menu')} className="text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                Menu
              </button>
            ) : (
              <Link to="/menu" className="text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                Menu
              </Link>
            )}
            <button onClick={() => scrollToSection('gallery')} className="text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('location')} className="text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
              Location
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
              Contact
            </button>
            <Button variant="reserve" size="lg">
              Book a Table
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-marine-blue hover:text-gold transition-colors">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-pearl-white/95 backdrop-blur-md border-t border-ocean-foam">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                About
              </button>
              {isHomePage ? (
                <button onClick={() => scrollToSection('menu')} className="block px-3 py-2 text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                  Menu
                </button>
              ) : (
                <Link to="/menu" className="block px-3 py-2 text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                  Menu
                </Link>
              )}
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection('location')} className="block px-3 py-2 text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-marine-blue hover:text-gold transition-colors duration-300 font-medium">
                Contact
              </button>
              <div className="px-3 py-2">
                <Button variant="reserve" size="lg" className="w-full">
                  Book a Table
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;