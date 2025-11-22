import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import agHealthLogo from '@/assets/ag-health-logo.webp';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border" style={{
    backgroundColor: '#a8b6a8'
  }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={agHealthLogo} alt="A.G. Health Industries logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-lg font-bold text-foreground">A.G. Health Industries</div>
                <div className="text-xs text-muted-foreground">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Caring for hygiene, caring for you. Premium hygiene products manufactured with innovation and quality for Nepal and beyond.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61556698594648" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
              <a href="https://www.linkedin.com/company/ag-health-industries-pvt-ltd/?originalSubdomain=np" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
              <a href="https://www.instagram.com/sagun_diapers_/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-smooth group" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-smooth" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Our Products', 'About', 'Blog', 'Career'].map(item => <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Baby Diapers', 'Adult Diapers', 'Face Masks', 'Sanitary Pads', 'Toilet Paper'].map(item => <li key={item}>
                  <Link to="/products" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+9771234567890" className="text-muted-foreground hover:text-primary transition-smooth text-sm">+977 9801116979</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@aghealthindustries.com" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  info@aghealthindustries.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} A.G. Health Industries Pvt. Ltd. | All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;