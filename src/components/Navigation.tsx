import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, Sun, Star, Baby, Car, Heart, Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
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
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden md:block">
        <Cloud className="absolute top-2 left-10 w-8 h-8 text-white/30 animate-fade-in" />
        <Sun className="absolute top-1 right-1/4 w-10 h-10 text-yellow-300/40 animate-fade-in" style={{ animationDelay: '200ms' }} />
        <Star className="absolute top-3 left-1/3 w-4 h-4 text-yellow-200/50 animate-fade-in" style={{ animationDelay: '400ms' }} />
        <Baby className="absolute top-2 right-1/3 w-8 h-8 text-white/40 animate-fade-in" style={{ animationDelay: '600ms' }} />
        <Car className="absolute top-1 right-20 w-9 h-9 text-white/35 animate-fade-in" style={{ animationDelay: '800ms' }} />
        <Heart className="absolute top-3 left-1/2 w-5 h-5 text-red-300/40 animate-fade-in" style={{ animationDelay: '1000ms' }} />
        <Sparkles className="absolute top-2 right-1/2 w-6 h-6 text-yellow-200/50 animate-fade-in" style={{ animationDelay: '1200ms' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="A.G. Health Industries Logo"
              width="80"
              height="80"
              className="h-16 w-16 sm:h-18 md:h-20 md:w-20 object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block">
              <div className="text-lg md:text-xl font-bold text-foreground leading-tight">
                A.G. Health Industries
              </div>
              <div className="text-xs text-muted-foreground">Pvt. Ltd.</div>
            </div>
          </Link>

          {/* Navigation Links - Always visible */}
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-1 md:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-base font-medium transition-all duration-300 whitespace-nowrap group ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive(link.path) ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`} />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setIsContactOpen(true)}
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft"
            >
              Contact Us
            </Button>
          </div>
        </div>
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
                    href="mailto:kripa.ad25@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    kripa.ad25@gmail.com
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

            {/* Social Media Links */}
            <div className="pt-4 border-t">
              <p className="font-semibold text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61556698594648" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/sagun_diapers_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/ag-health-industries-pvt-ltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://reddit.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                For product inquiries, orders, or partnership opportunities, feel free to reach out to us.
              </p>
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90"
                onClick={() => {
                  window.location.href = 'mailto:kripa.ad25@gmail.com';
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
