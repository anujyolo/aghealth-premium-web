import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, Sun, Star, Baby, Car, Heart, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import logo from '@/assets/ag-health-logo.webp';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      // Make navigation sticky after scrolling past initial header (around 300px)
      setIsSticky(scrollPosition > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/career' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`z-50 transition-all duration-300 overflow-hidden ${
        isSticky 
          ? 'fixed top-0 left-0 right-0 shadow-large animate-slide-down' 
          : 'relative'
      } ${isScrolled ? 'shadow-medium' : 'backdrop-blur-sm'}`}
      style={{ backgroundColor: '#a8b6a8' }}
    >
      {/* Decorative Elements */}
      <Cloud className="absolute top-2 left-10 w-8 h-8 text-white/30 animate-fade-in" />
      <Sun className="absolute top-1 right-1/4 w-10 h-10 text-yellow-300/40 animate-fade-in" style={{ animationDelay: '200ms' }} />
      <Star className="absolute top-3 left-1/3 w-4 h-4 text-yellow-200/50 animate-fade-in" style={{ animationDelay: '400ms' }} />
      <Baby className="absolute top-2 right-1/3 w-8 h-8 text-white/40 animate-fade-in" style={{ animationDelay: '600ms' }} />
      <Car className="absolute top-1 right-20 w-9 h-9 text-white/35 animate-fade-in" style={{ animationDelay: '800ms' }} />
      <Heart className="absolute top-3 left-1/2 w-5 h-5 text-red-300/40 animate-fade-in" style={{ animationDelay: '1000ms' }} />
      <Sparkles className="absolute top-2 right-1/2 w-6 h-6 text-yellow-200/50 animate-fade-in" style={{ animationDelay: '1200ms' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="A.G. Health Industries Logo"
              width="80"
              height="80"
              className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-lg md:text-xl font-bold text-foreground leading-tight">
                A.G. Health Industries
              </div>
              <div className="text-xs text-muted-foreground">Pvt. Ltd.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setIsContactOpen(true)}
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-smooth ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Contact Us</DialogTitle>
            <DialogDescription>
              Get in touch with A.G. Health Industries
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a 
                    href="mailto:info@aghealthindustries.com" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    info@aghealthindustries.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a 
                    href="tel:+977-71-590123" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +977-71-590123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    Tilottama-16, Rupandehi, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                For product inquiries, orders, or partnership opportunities, feel free to reach out to us.
              </p>
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90"
                onClick={() => {
                  window.location.href = 'mailto:info@aghealthindustries.com';
                }}
              >
                Send Email
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;
