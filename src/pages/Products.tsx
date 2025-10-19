import { Package, Pill, Droplets, Stethoscope, Heart, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const categories = [
    {
      icon: Stethoscope,
      name: 'Medical Supplies',
      description: 'Professional-grade medical equipment and supplies',
      products: [
        { name: 'Digital Thermometers', tag: 'Essential' },
        { name: 'Blood Pressure Monitors', tag: 'Popular' },
        { name: 'Surgical Instruments', tag: 'Professional' },
        { name: 'Examination Gloves', tag: 'Essential' },
      ],
      color: 'from-primary to-accent',
    },
    {
      icon: Pill,
      name: 'Health Supplements',
      description: 'Premium vitamins and nutritional supplements',
      products: [
        { name: 'Multivitamin Complex', tag: 'Bestseller' },
        { name: 'Omega-3 Fish Oil', tag: 'Popular' },
        { name: 'Vitamin D3', tag: 'Essential' },
        { name: 'Probiotics', tag: 'New' },
      ],
      color: 'from-secondary to-primary',
    },
    {
      icon: Droplets,
      name: 'Hygiene Products',
      description: 'Clinical-grade hygiene and sanitation products',
      products: [
        { name: 'Hand Sanitizers', tag: 'Essential' },
        { name: 'Disinfectant Sprays', tag: 'Popular' },
        { name: 'Antibacterial Soaps', tag: 'Premium' },
        { name: 'Sterilization Solutions', tag: 'Professional' },
      ],
      color: 'from-accent to-secondary',
    },
    {
      icon: Activity,
      name: 'Diagnostic Tools',
      description: 'Advanced diagnostic equipment and testing kits',
      products: [
        { name: 'Pulse Oximeters', tag: 'Popular' },
        { name: 'Glucose Monitors', tag: 'Essential' },
        { name: 'ECG Machines', tag: 'Professional' },
        { name: 'Rapid Test Kits', tag: 'New' },
      ],
      color: 'from-primary to-secondary',
    },
    {
      icon: Heart,
      name: 'Wellness Equipment',
      description: 'Health monitoring and wellness devices',
      products: [
        { name: 'Smart Health Trackers', tag: 'Trending' },
        { name: 'Nebulizers', tag: 'Essential' },
        { name: 'Massage Therapy Devices', tag: 'Premium' },
        { name: 'Air Purifiers', tag: 'Popular' },
      ],
      color: 'from-secondary to-accent',
    },
    {
      icon: Package,
      name: 'Emergency Supplies',
      description: 'Complete emergency and first aid supplies',
      products: [
        { name: 'First Aid Kits', tag: 'Essential' },
        { name: 'Emergency Blankets', tag: 'Safety' },
        { name: 'Trauma Supplies', tag: 'Professional' },
        { name: 'Rescue Equipment', tag: 'Critical' },
      ],
      color: 'from-accent to-primary',
    },
  ];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      Essential: 'bg-primary/10 text-primary',
      Popular: 'bg-secondary/10 text-secondary',
      Bestseller: 'bg-accent/10 text-accent',
      New: 'bg-destructive/10 text-destructive',
      Premium: 'bg-primary/10 text-primary',
      Professional: 'bg-secondary/10 text-secondary',
      Trending: 'bg-accent/10 text-accent',
      Safety: 'bg-destructive/10 text-destructive',
      Critical: 'bg-destructive/10 text-destructive',
    };
    return colors[tag] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Package className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Comprehensive Healthcare Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Explore our extensive range of premium medical supplies, health supplements, 
            and wellness products designed for healthcare excellence
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="border-0 shadow-soft hover:shadow-large transition-smooth bg-white group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.products.map((product) => (
                      <li
                        key={product.name}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer"
                      >
                        <span className="text-foreground font-medium">
                          {product.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className={`${getTagColor(product.tag)} border-0`}
                        >
                          {product.tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our healthcare experts are here to assist you in selecting the perfect products for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@aghealth.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-primary text-white font-medium hover:opacity-90 transition-smooth shadow-medium"
            >
              Contact Our Team
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-smooth"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
