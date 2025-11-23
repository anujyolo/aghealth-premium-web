import { useState } from 'react';
import { Baby, Shield, Heart, Smile, Package, Star, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import sagunBabyPokoPants from '@/assets/sagun-baby-poko-pants.png';
import sagunBabyPantsLogo from '@/assets/sagun-baby-pants-logo-new.png';
import sagunPad from '@/assets/sagun-pad.png';
import productsBackground from '@/assets/products-background.png';
import sagunFaceMaskBox from '@/assets/sagun-face-mask-box.jpg';
import sagunPadProduct from '@/assets/sagun-pad-product.png';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<{name: string, size: string, tag: string, category: string} | null>(null);

  const categories = [
    {
      icon: Baby,
      name: 'Diapers',
      description: 'Premium comfort and protection for babies and adults',
      logo: sagunBabyPantsLogo,
      products: [
        { name: 'Baby Diapers - Newborn', size: 'NB (Up to 5kg)', tag: 'Bestseller' },
        { name: 'Baby Diapers - Small', size: 'S (4-8kg)', tag: 'Popular' },
        { name: 'Baby Diapers - Medium', size: 'M (6-11kg)', tag: 'Popular' },
        { name: 'Baby Diapers - Large', size: 'L (9-14kg)', tag: 'Popular' },
        { name: 'Baby Diapers - XL', size: 'XL (12-17kg)', tag: 'Popular' },
        { name: 'Adult Diapers', size: 'M, L, XL', tag: 'Premium' },
      ],
      color: 'from-primary to-accent',
    },
    {
      icon: Shield,
      name: 'Face Masks',
      description: 'Multi-layer protection for daily safety',
      products: [
        { name: '3-Ply Surgical Masks', size: 'Box of 50', tag: 'Essential' },
        { name: 'N95 Respirator Masks', size: 'Pack of 10', tag: 'Premium' },
        { name: 'Kids Face Masks', size: 'Ages 3-12', tag: 'New' },
      ],
      color: 'from-accent to-secondary',
    },
    {
      icon: Heart,
      name: 'Sanitary Pads',
      description: 'Soft, absorbent protection for confident days',
      products: [
        { name: 'Regular Flow Pads', size: '10 pads', tag: 'Essential' },
        { name: 'Heavy Flow Pads', size: '8 pads', tag: 'Popular' },
        { name: 'Ultra-Thin Pads', size: '12 pads', tag: 'Comfort' },
        { name: 'Overnight Pads', size: '7 pads', tag: 'Protection' },
      ],
      color: 'from-secondary to-primary',
    },
    {
      icon: Smile,
      name: 'Toilet Paper',
      description: 'Soft, strong, and sustainable bathroom tissue',
      products: [
        { name: '2-Ply Toilet Rolls', size: 'Pack of 4', tag: 'Bestseller' },
        { name: '3-Ply Toilet Rolls', size: 'Pack of 6', tag: 'Premium' },
        { name: 'Jumbo Toilet Rolls', size: 'Pack of 12', tag: 'Value' },
        { name: 'Scented Toilet Paper', size: 'Pack of 4', tag: 'Fresh' },
      ],
      color: 'from-primary to-secondary',
    },
  ];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      Essential: 'bg-primary/10 text-primary',
      Popular: 'bg-accent/10 text-accent',
      Bestseller: 'bg-secondary/10 text-secondary',
      New: 'bg-destructive/10 text-destructive',
      Premium: 'bg-primary/10 text-primary',
      Comfort: 'bg-accent/10 text-accent',
      Protection: 'bg-secondary/10 text-secondary',
      'Eco-Friendly': 'bg-accent/10 text-accent',
      'Daily Use': 'bg-muted text-muted-foreground',
      Value: 'bg-secondary/10 text-secondary',
      Fresh: 'bg-accent/10 text-accent',
    };
    return colors[tag] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${productsBackground})` }}
      />
      <div className="fixed inset-0 bg-black/60 -z-10" />
      
      {/* Header */}
      <section className="bg-gradient-soft py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Package className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ color: '#ddc4a6bf' }}>
            Premium Hygiene Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ color: '#16a69d' }}>
            Explore our complete range of hygiene products manufactured with care, 
            tested for safety, and designed for your comfort
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="border-0 shadow-soft hover:shadow-large transition-smooth bg-white/50 backdrop-blur-sm overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4 bg-gradient-soft pb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}
                  >
                    {category.logo ? (
                      <img src={category.logo} alt={category.name} className="w-full h-full object-contain p-2" />
                    ) : (
                      <category.icon className="w-8 h-8 text-white" />
                    )}
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
                
                {/* Product Images Section */}
                {category.name === 'Diapers' && (
                  <div className="px-6 py-4 bg-gradient-soft">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-soft">
                        <img 
                          src={sagunBabyPokoPants} 
                          alt="Sagun Baby Poko Pants" 
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-soft">
                        <img 
                          src={sagunBabyPantsLogo} 
                          alt="Sagun Baby Pants" 
                          className="w-full h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {category.name === 'Face Masks' && (
                  <div className="px-6 py-4 bg-gradient-soft">
                    <div className="bg-white rounded-lg p-4 shadow-soft max-w-xs mx-auto">
                      <img 
                        src={sagunFaceMaskBox} 
                        alt="Sagun Disposable Protective Face Masks" 
                        className="w-full h-32 object-contain"
                      />
                    </div>
                  </div>
                )}
                
                {category.name === 'Sanitary Pads' && (
                  <div className="px-6 py-4 bg-gradient-soft">
                    <div className="bg-white rounded-lg p-4 shadow-soft max-w-xs mx-auto">
                      <img 
                        src={sagunPad} 
                        alt="Sagun Cotton Comfort Pad" 
                        className="w-full h-32 object-contain"
                      />
                    </div>
                  </div>
                )}
                
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {category.products.map((product) => (
                      <li
                        key={product.name}
                        onClick={() => {
                          setSelectedProduct({
                            ...product,
                            category: category.name
                          });
                        }}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-smooth group cursor-pointer"
                      >
                        <div className="flex-1">
                          <div className="text-foreground font-medium group-hover:text-primary transition-smooth">
                            {product.name}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {product.size}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`${getTagColor(product.tag)} border-0 ml-3`}
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

      {/* Features Section */}
      <section className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ddc4a6bf' }}>
              Why Choose Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product is crafted with care and tested for your safety
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'International standards in manufacturing',
              },
              {
                icon: Shield,
                title: 'Safety Tested',
                description: 'Dermatologically tested and approved',
              },
              {
                icon: Heart,
                title: 'Skin-Friendly',
                description: 'Gentle on sensitive skin',
              },
              {
                icon: Baby,
                title: 'Comfort First',
                description: 'Designed for maximum comfort',
              },
              {
                icon: Package,
                title: 'Value Packs',
                description: 'Affordable family-sized options',
              },
              {
                icon: Smile,
                title: 'Trusted Brand',
                description: 'Preferred by families in Nepal',
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white/10 backdrop-blur-sm text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-large bg-gradient-to-br from-primary/80 via-accent/80 to-primary/80 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6 bg-black/50">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Need Help Choosing Products?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Our team is here to help you find the perfect hygiene products for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large"
                >
                  <a href="mailto:info@aghealthindustries.com">Email Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProduct?.name}</DialogTitle>
            <DialogDescription className="text-base">
              Category: {selectedProduct?.category}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Product Image Area */}
            <div className="w-full h-48 bg-gradient-soft rounded-xl flex items-center justify-center overflow-hidden">
              {selectedProduct?.category === 'Sanitary Pads' ? (
                <img 
                  src={sagunPadProduct} 
                  alt={selectedProduct?.name} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center p-4">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Product Image</p>
                  <p className="text-xs text-muted-foreground mt-1">Display area for product photo</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Size</p>
                <p className="text-lg font-semibold">{selectedProduct?.size}</p>
              </div>
              <Badge variant="secondary" className={`${getTagColor(selectedProduct?.tag || '')} border-0`}>
                {selectedProduct?.tag}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Product Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium quality materials for maximum comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>ISO certified manufacturing standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dermatologically tested and safe</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Made in Nepal with pride</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" onClick={() => setSelectedProduct(null)}>
                Close
              </Button>
              <Button className="flex-1" variant="outline" asChild>
                <a href="mailto:info@aghealthindustries.com">Contact for Order</a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
