import { ArrowRight, Sparkles, Shield, Heart, Award, Baby, Smile, Cloud, Sun, Star, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-baby-product.jpg';
import productsImage from '@/assets/products-hygiene.jpg';
import factoryBackground from '@/assets/factory-background.jpg';
import heroFactoryBg from '@/assets/hero-factory-bg.jpg';
const Home = () => {
  const values = [{
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'International standards in every hygiene product we manufacture'
  }, {
    icon: Shield,
    title: 'Safety First',
    description: 'Dermatologically tested and safe for sensitive skin'
  }, {
    icon: Heart,
    title: 'Care & Comfort',
    description: 'Designed with love for maximum comfort and protection'
  }, {
    icon: Award,
    title: 'Trusted Brand',
    description: 'Preferred choice for families across Nepal'
  }];
  const productCategories = [{
    icon: Baby,
    title: 'Diapers',
    description: 'Ultra-soft baby & adult diapers'
  }, {
    icon: Shield,
    title: 'Face Masks',
    description: 'Protection you can trust'
  }, {
    icon: Heart,
    title: 'Sanitary Pads',
    description: 'Comfort during your days'
  }, {
    icon: Smile,
    title: 'Toilet Paper',
    description: 'Gentle, strong & reliable'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroFactoryBg})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" />
        
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Premium Hygiene Products</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-[l#] text-[#ddc4a6]/75 mx-[2px] my-[2px] px-[9px] py-[9px]">
                Caring for Hygiene,{' '}
                <span className="text-gradient-primary">Caring for You</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A.G. Health Industries manufactures premium diapers, face masks, sanitary pads, 
                and toilet paper. Experience international quality hygiene products made in Nepal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium text-base group">
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 -z-10" />
              <img src={heroImage} alt="Baby with Sagun Baby Poko Pants premium diapers showcasing product quality" className="rounded-3xl shadow-large max-w-lg mx-auto h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 relative bg-muted/30">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${factoryBackground})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose A.G. Health Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by families across Nepal for our commitment to quality and hygiene
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => <Card key={value.title} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white group animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Hygiene Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete range of premium hygiene solutions for everyday needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category, index) => <Card key={category.title} className="border-0 shadow-soft hover:shadow-large transition-smooth bg-white group cursor-pointer animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-primary transition-smooth">
                    <category.icon className="w-10 h-10 text-primary group-hover:text-white transition-smooth" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium group">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <img src={productsImage} alt="A.G. Health Industries premium hygiene products" className="rounded-3xl shadow-large w-full h-auto object-cover" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <span>Quality You Can Trust</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Made in Nepal, Trusted Worldwide
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art manufacturing facility in Nepal produces hygiene products 
                that meet international quality standards. Each product undergoes rigorous testing 
                to ensure safety, comfort, and reliability.
              </p>

              <ul className="space-y-3">
                {['ISO Certified Manufacturing', 'Dermatologically Tested', 'Eco-Friendly Materials', 'Affordable Premium Quality'].map(item => <li key={item} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>)}
              </ul>

              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium group">
                <Link to="/about">
                  About Our Company
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Experience Premium Hygiene
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Join thousands of satisfied customers who trust A.G. Health Industries for their daily hygiene needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large text-base">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth text-base">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;