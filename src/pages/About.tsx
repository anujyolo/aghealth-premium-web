import { Target, Eye, Award, Users, Globe, TrendingUp, Factory, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import teamMember1 from '@/assets/team-member-1-updated.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import factoryBuilding from '@/assets/factory-building.jpg';
const About = () => {
  const stats = [{
    icon: Users,
    value: '1000+',
    label: 'Happy Customers Daily'
  }, {
    icon: Factory,
    value: '5+',
    label: 'Product Categories'
  }, {
    icon: Award,
    value: 'ISO',
    label: 'Certified Facility'
  }, {
    icon: TrendingUp,
    value: '99%',
    label: 'Customer Satisfaction'
  }];
  const values = [{
    icon: Target,
    title: 'Our Mission',
    description: 'To improve hygiene standards across Nepal and beyond by manufacturing premium, affordable hygiene products. We are committed to making quality hygiene accessible to every family, ensuring comfort, safety, and dignity for all.'
  }, {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become Nepal\'s most trusted hygiene products manufacturer, recognized for innovation, quality, and social responsibility. We envision a future where every family has access to premium hygiene products that enhance their quality of life.'
  }];
  const principles = [{
    title: 'Quality Assurance',
    description: 'ISO-certified manufacturing with rigorous quality control at every step'
  }, {
    title: 'Safety First',
    description: 'Dermatologically tested products safe for sensitive skin'
  }, {
    title: 'Innovation',
    description: 'Continuous research to improve product comfort and performance'
  }, {
    title: 'Affordability',
    description: 'Premium quality at prices every family can afford'
  }, {
    title: 'Sustainability',
    description: 'Eco-friendly materials and responsible manufacturing practices'
  }, {
    title: 'Community Care',
    description: 'Supporting local communities and creating employment opportunities'
  }];
  return <div className="min-h-screen pt-20 md:pt-24 pb-16 relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${factoryBuilding})` }}
      />
      <div className="fixed inset-0 bg-black/50 -z-10" />
      {/* Hero Section */}
      <section className="bg-gradient-soft py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>About A.G. Health Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ddc4a6bf' }}>
              Caring for Hygiene, Caring for Nepal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A.G. Health Industries Pvt. Ltd. is a leading manufacturer of premium hygiene products 
              in Nepal. We're dedicated to improving hygiene standards through innovation, quality, 
              and affordable products for every family.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={stat.label} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white text-center animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => <Card key={value.title} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{value.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ddc4a6bf' }}>Founder's and CEO</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#16a69d' }}>
              Meet the visionaries driving A.G. Health Industries forward
            </p>
          </div>

          <div className="space-y-16">
            {/* First Team Member */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img src={teamMember1} alt="Leadership team member" className="rounded-3xl shadow-large w-full h-auto object-cover" />
              </div>
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#ddc4a6bf' }}>Mr. Tilak Prasad Adhikari</h3>
                <p className="text-xl text-muted-foreground font-medium">Founder, Chairman</p>
              </div>
            </div>

            {/* Second Team Member */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#ddc4a6bf' }}>Mr. Dolraj Adhikari</h3>
                <p className="text-xl text-muted-foreground font-medium">Founder, CEO</p>
              </div>
              <div className="animate-fade-in lg:order-2">
                <img src={teamMember2} alt="Leadership team member" className="rounded-3xl shadow-large w-full h-auto object-cover" />
              </div>
            </div>

            {/* Third Team Member */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img src={teamMember3} alt="Leadership team member" className="rounded-3xl shadow-large w-full max-w-md mx-auto h-auto object-cover" />
              </div>
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#ddc4a6bf' }}>Mr. Gangadhar Adhikari</h3>
                <p className="text-xl text-muted-foreground font-medium">Founder, Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#16a69d' }}>
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at A.G. Health Industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => <Card key={principle.title} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white group animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-2 h-12 bg-gradient-primary rounded-full group-hover:h-16 transition-smooth" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our ISO-certified facility in Nepal employs cutting-edge technology and strict 
              quality control measures. From raw material selection to final packaging, every 
              step is monitored to ensure the highest standards of hygiene and quality.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {[{
              icon: Globe,
              label: 'International Standards'
            }, {
              icon: Factory,
              label: 'Modern Facility'
            }, {
              icon: Users,
              label: 'Skilled Workforce'
            }].map((item, index) => <div key={item.label} className="p-6 rounded-2xl bg-gradient-soft animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-semibold text-foreground">{item.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;