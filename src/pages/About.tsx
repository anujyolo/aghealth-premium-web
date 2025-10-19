import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/assets/about-innovation.jpg';

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Healthcare Partners' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: TrendingUp, value: '99.8%', label: 'Customer Satisfaction' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To revolutionize healthcare by providing innovative, high-quality medical solutions that enhance patient care and improve lives globally. We are committed to making healthcare accessible, affordable, and effective for everyone.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be the world\'s most trusted healthcare partner, recognized for excellence in medical innovation, quality standards, and patient-centered solutions. We envision a future where quality healthcare is accessible to all.',
    },
  ];

  const principles = [
    {
      title: 'Innovation First',
      description: 'Continuously advancing healthcare through cutting-edge research and development',
    },
    {
      title: 'Quality Assurance',
      description: 'Maintaining the highest standards in every product and service we deliver',
    },
    {
      title: 'Patient-Centered',
      description: 'Putting patient wellbeing and safety at the core of everything we do',
    },
    {
      title: 'Ethical Practice',
      description: 'Operating with integrity, transparency, and social responsibility',
    },
    {
      title: 'Global Reach',
      description: 'Delivering healthcare solutions to communities worldwide',
    },
    {
      title: 'Sustainable Growth',
      description: 'Building a healthier future for both people and our planet',
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>About AG Health</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Innovation, Quality, Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For over 25 years, AG Health has been at the forefront of healthcare innovation, 
              delivering premium medical solutions that make a real difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{value.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, AG Health began with a simple but powerful vision: to make 
                  quality healthcare accessible to everyone. What started as a small medical 
                  supply company has grown into a global healthcare leader.
                </p>
                <p>
                  Through dedication to innovation, unwavering commitment to quality, and 
                  genuine care for patient wellbeing, we've become a trusted partner to 
                  healthcare professionals in over 50 countries.
                </p>
                <p>
                  Today, we continue to push boundaries in medical technology, develop 
                  breakthrough health supplements, and create products that truly make a 
                  difference in people's lives. Our journey is driven by one constant: 
                  caring for a healthier tomorrow.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={aboutImage}
                alt="AG Health innovation laboratory"
                className="rounded-3xl shadow-large w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The values that guide everything we do at AG Health
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-2 h-12 bg-gradient-primary rounded-full group-hover:h-16 transition-smooth" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
