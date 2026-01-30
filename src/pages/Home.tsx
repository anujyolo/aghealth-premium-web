import { ArrowRight, Sparkles, Shield, Heart, Award, Baby, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@/hooks/use-scroll-reveal';
import SEO from '@/components/SEO';
import { organizationSchema, localBusinessSchema } from '@/data/structuredData';
import heroImage from '@/assets/hero-baby-product.jpg';
import factoryVideo from '@/assets/factory-video.mp4';
import factoryBackground from '@/assets/factory-workers-new.jpg';
import heroFactoryBg from '@/assets/hero-factory-bg.jpg';
import factoryTeam from '@/assets/factory-team.jpg';
import herooBackground from '@/assets/heroo.webp';
import sagunBabyPantsLogo from '@/assets/sagun-baby-pants-logo.png';
import sagunFaceMasks from '@/assets/sagun-face-masks.jpg';
import sagunPadLogo from '@/assets/sagun-pad-logo.png';
import sagunToiletPaperLogo from '@/assets/sagun-toilet-paper-logo.jpg';

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

  return (
    <div className="min-h-screen overflow-hidden">
      <SEO 
        canonical="/"
        structuredData={{ ...organizationSchema, ...localBusinessSchema }}
      />
      {/* Hero Section with Parallax */}
      <section className="relative pt-16 md:pt-24 pb-12 md:pb-24 overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroFactoryBg})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content with Text Reveal Animation */}
            <div className="space-y-5 md:space-y-8 text-center lg:text-left">
              <div className="animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20">
                  <Sparkles className="w-4 h-4" />
                  <span>Premium Hygiene Products</span>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-[#ddc4a6]">Caring for Hygiene,</span>{' '}
                  <span className="text-gradient-primary block sm:inline">Caring for You</span>
                </h1>
              </div>
              
              <div className="animate-fade-in">
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  A.G. Health Industries manufactures premium diapers, face masks, sanitary pads, 
                  and toilet paper. Experience international quality hygiene products made in Nepal.
                </p>
              </div>
              
              <div className="animate-fade-in">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-large text-base group">
                    <Link to="/products">
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-fade-in">
              <img 
                src={heroImage} 
                alt="Baby with Sagun Baby Poko Pants premium diapers showcasing product quality" 
                width="512" 
                height="512" 
                loading="eager"
                className="rounded-3xl shadow-2xl max-w-lg mx-auto h-auto object-cover border-2 border-white/10" 
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${factoryBackground})` }} 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4 text-center py-4 text-[#ddc4a6] text-glow md:text-5xl">
                Why Choose A.G. Health Industries
              </h2>
              <p className="max-w-2xl mx-auto font-semibold text-xl text-emerald-50/90">
                Trusted by families across Nepal for our commitment to quality and hygiene
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <Card className="border-0 bg-white/10 border border-white/20 group h-full cursor-default">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-100 group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/95 transition-colors">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-16 md:py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${herooBackground})` }} 
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-[#ddc4a6] text-glow font-extrabold md:text-6xl">
                Our Hygiene Products
              </h2>
              <p className="max-w-2xl mx-auto text-primary text-xl font-bold">
                Complete range of premium hygiene solutions for everyday needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {/* Large left card - Diapers */}
            <ScrollReveal direction="left">
              <Link to="/products" className="block">
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-large group cursor-pointer h-[250px] md:h-[600px] img-zoom border border-white/10">
                  <div className="absolute inset-0">
                    <img 
                      src={sagunBabyPantsLogo} 
                      alt="Sagun Baby Pants logo" 
                        width="624" 
                        height="624" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-amber-500/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 pb-6 md:pb-8 text-center">
                    <h3 className="text-2xl md:text-5xl font-bold mb-1 md:mb-2 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-lg text-white text-shadow-lg">
                      {productCategories[0].title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-lg drop-shadow-md opacity-80 group-hover:opacity-100 transition-opacity">
                      {productCategories[0].description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Right side grid - 3 smaller cards */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Face Masks */}
              <ScrollReveal delay={100} direction="right">
                <Link to="/products" className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-large group cursor-pointer h-[150px] md:h-[290px] img-zoom border border-white/10">
                    <div className="absolute inset-0">
                      <img 
                        src={sagunFaceMasks} 
                        alt="Sagun disposable protective face masks" 
                          width="373" 
                          height="290" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-amber-500/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-3 md:p-6 pb-4 md:pb-6 text-center">
                      <h3 className="text-lg md:text-2xl font-bold mb-1 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 drop-shadow-lg text-white text-shadow-lg">
                        {productCategories[1].title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-md hidden sm:block">
                        {productCategories[1].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Sanitary Pads */}
              <ScrollReveal delay={200} direction="right">
                <Link to="/products" className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-large group cursor-pointer h-[150px] md:h-[290px] img-zoom border border-white/10">
                    <div className="absolute inset-0">
                      <img 
                        src={sagunPadLogo} 
                        alt="Sagun sanitary pad logo" 
                          width="300" 
                          height="300" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-amber-500/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-3 md:p-6 pb-4 md:pb-6 text-center">
                      <h3 className="text-lg md:text-2xl font-bold mb-1 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 drop-shadow-lg text-white text-shadow-lg">
                        {productCategories[2].title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-md hidden sm:block">
                        {productCategories[2].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              {/* Toilet Paper - spans 2 columns */}
              <ScrollReveal delay={300} direction="up" className="col-span-2">
                <Link to="/products" className="block">
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-large group cursor-pointer h-[150px] md:h-[290px] img-zoom border border-white/10">
                    <div className="absolute inset-0">
                      <img 
                        src={sagunToiletPaperLogo} 
                        alt="Sagun toilet paper logo" 
                          width="624" 
                          height="290" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-amber-500/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-3 md:p-6 pb-4 md:pb-6 text-center">
                      <h3 className="text-lg md:text-2xl font-bold mb-1 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 drop-shadow-lg text-white text-shadow-lg">
                        {productCategories[3].title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm drop-shadow-md hidden sm:block">
                        {productCategories[3].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-large group hover-lift">
                <Link to="/products">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${factoryTeam})` }} 
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 items-center">
            {/* Content */}
            <ScrollReveal direction="up">
              <div className="space-y-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium">
                  <span className="font-black text-xl md:text-2xl text-primary">Quality You Can Trust</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ddc4a6] text-glow">
                  Made in Nepal, Trusted Worldwide
                </h2>
                
                <p className="font-medium leading-relaxed text-white/90 text-base md:text-lg max-w-xl">
                  Our state-of-the-art manufacturing facility in Nepal produces hygiene products 
                  that meet international quality standards. Each product undergoes rigorous testing 
                  to ensure safety, comfort, and reliability.
                </p>

                <ul className="space-y-4 w-full max-w-md">
                  {['ISO and NS Certified Manufacturing', 'Dermatologically Tested', 'Eco-Friendly Materials', 'Affordable Premium Quality'].map((item, index) => (
                    <li 
                      key={item} 
                      className="flex items-center space-x-3 group/item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-white text-base md:text-lg font-semibold group-hover/item:text-[#ddc4a6] transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-large group mt-4">
                  <Link to="/about">
                    About Our Company
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Video */}
            <div className="w-full max-w-4xl">
              <video 
                src={factoryVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="none"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover border border-white/10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#1a4a4f] via-[#295c61] to-[#1a4a4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="scale">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                Experience Premium Hygiene
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Join thousands of satisfied customers who trust A.G. Health Industries for their daily hygiene needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl text-base group">
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
