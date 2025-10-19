import { ArrowRight, Sparkles, Shield, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-health.jpg';
import productsImage from '@/assets/products-health.jpg';

const Home = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Pioneering advanced healthcare solutions for better tomorrow',
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Uncompromising standards in every product we deliver',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Putting patient wellbeing at the heart of everything',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Recognized globally for outstanding healthcare products',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Premium Healthcare Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Caring for a{' '}
                <span className="text-gradient-primary">Healthier Tomorrow</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                AG Health delivers premium medical supplies, health supplements, and wellness solutions. 
                Experience innovation and quality dedicated to better healthcare for all.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium text-base group"
                >
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth text-base"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 -z-10" />
              <img
                src={heroImage}
                alt="Healthcare professional in modern medical facility"
                className="rounded-3xl shadow-large w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AG Health
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by healthcare professionals worldwide for our commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={productsImage}
                alt="AG Health medical supplies and products"
                className="rounded-3xl shadow-large w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                <span>Our Products</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive Healthcare Solutions
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From medical supplies to health supplements and hygiene products, we offer 
                a complete range of premium healthcare solutions. Each product is carefully 
                selected and tested to meet the highest industry standards.
              </p>

              <ul className="space-y-3">
                {[
                  'Medical Supplies & Equipment',
                  'Premium Health Supplements',
                  'Professional Hygiene Products',
                  'Advanced Diagnostic Tools',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-gradient-secondary hover:opacity-90 transition-smooth shadow-medium group"
              >
                <Link to="/products">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Join thousands of healthcare professionals who trust AG Health for their medical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large text-base"
              >
                <Link to="/career">Join Our Team</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth text-base"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
