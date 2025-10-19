import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-muted to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AG</span>
              </div>
              <span className="text-xl font-semibold text-foreground">AG Health</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Caring for a healthier tomorrow through innovation, quality, and dedication to better healthcare for all.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Our Products', 'About', 'Blog', 'Career'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                'Medical Supplies',
                'Health Supplements',
                'Hygiene Products',
                'Diagnostic Tools',
                'Wellness Equipment',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Healthcare Ave, Medical District, City 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@aghealth.com"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  info@aghealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} AG Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
