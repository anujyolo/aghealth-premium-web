import { Target, Eye, Award, Users, Globe, TrendingUp, Factory, Heart, BookOpen, Building, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import teamMember1 from '@/assets/team-member-1-updated.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import factoryBuilding from '@/assets/factory-building.jpg';
import parbatiAgroLogo from '@/assets/parbati-agro-logo.png';
import bhuMaduLogo from '@/assets/bhu-madu-logo.png';
import isoLogo from '@/assets/iso-logo.png';
import isoLogoNew from '@/assets/iso-logo-new.png';
import agHealthLogoNew from '@/assets/ag-health-logo-new.webp';
import sagunNsMarkNew from '@/assets/sagun-ns-mark-updated.png';
import historyIcon from '@/assets/history-icon.jpg';
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
    icon: ShieldCheck,
    value: 'NS',
    label: 'Nepal Standard Mark'
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
  const historyTimeline = [{
    title: 'The Beginning (2052 B.S.)',
    text: 'In 2052 B.S., our humble beginnings took root in the far western region of Kailali with the establishment of Nava Durga Enterprises. This small retail store was our first step toward a greater vision.'
  }, {
    title: 'Expanding Our Vision (2059 B.S.)',
    text: 'Inspired by success and a desire to make a national impact, we founded Parvati Agro Industries Pvt. Ltd. in 2059 B.S. Named in memory of our sister, Parvati Adhikari, this company focused on providing high-quality, affordable food staples like rice, soybean, beaten rice, and edible oil to communities throughout Nepal.'
  }, {
    title: 'Entering Health Sector (2073 B.S.)',
    text: 'Recognizing the opportunity to contribute positively to the nation\'s well-being, we ventured into the health sector. Building upon the success of Parvati Agro Industries Pvt. Ltd, we initiated research and development for AG Health Industries Pvt. Ltd. in 2073 B.S. Strategically choosing Nepal\'s industrial hub, Tilottama-16 in Rupandehi, we established our factory. This central location optimizes efficient distribution across the country.'
  }, {
    title: 'Today & Tomorrow',
    text: 'Currently, we proudly manufacture and distribute "Sagun Baby Poko Pants" and "Sagun Pads", offering superior hygiene products at accessible prices. AG Health Industries is dedicated to combining affordability with unwavering quality. Utilizing advanced Chinese and American technology, our operations provide employment to approximately 600 Nepali citizens nationwide. We now produce three essential hygiene products – diapers, sanitary pads, and disposable masks – with plans to expand our offerings to include napkin and tissue paper in the near future.'
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
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{
      backgroundImage: `url(${factoryBuilding})`
    }} />
      <div className="fixed inset-0 bg-black/50 -z-10" />
      {/* Hero Section */}
      <section className="bg-gradient-soft py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>About A.G. Health Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{
            color: '#ddc4a6bf'
          }}>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => <Card key={stat.label} style={{
            animationDelay: `${index * 100}ms`
          }} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-transparent text-center animate-fade-in my-[6px] py-0 mx-[27px] px-[9px]">
                <CardContent className="p-8 pt-12 space-y-4 relative px-0 py-0 bg-transparent">
                  {stat.value === 'ISO' ? <div className="w-24 h-24 mx-auto flex items-center justify-center">
                      <img src={isoLogoNew} alt="ISO Certified" className="w-full h-full object-contain" />
                    </div> : stat.value === '5+' ? <div className="w-24 h-24 mx-auto flex items-center justify-center">
                      <img src={agHealthLogoNew} alt="A.G. Health Industries" className="w-full h-full object-contain" />
                    </div> : stat.value === 'NS' ? <div className="w-24 h-24 mx-auto flex items-center justify-center">
                      <img src={sagunNsMarkNew} alt="Nepal Standard Mark" className="w-full h-full object-contain" />
                    </div> : <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>}
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium mt-8 mx-[31px]">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Our History - Standalone Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white/10 backdrop-blur-sm animate-fade-in max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src={historyIcon} alt="History" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-100">Our History</h2>
              </div>
              <div className="space-y-8">
                {historyTimeline.map((section, idx) => <div key={idx} className="space-y-3 pl-4 border-l-4 border-primary/30">
                    <h3 className="text-xl md:text-2xl font-semibold text-amber-200">{section.title}</h3>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                      {section.text}
                    </p>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us - Standalone Section */}
      <section className="py-16 md:py-20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white animate-fade-in max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Us</h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  AG Health Industries, established in 2073 B.S. as Nepal's first diaper manufacturer, spans 4 Bigha and employs over 200 people. Specializing in disposable face masks, sanitary napkins, and baby diapers, we prioritize meeting customer demands through rigorous quality control and cutting-edge technology. Our modern facilities and scientific management system have significantly boosted our brand's national recognition, particularly during the COVID period, ensuring independence in hygienic products. By sourcing raw materials globally and maintaining stringent quality control from raw material inspection to finished product inspection, we guarantee the highest standards. Our talented team, driven by creativity and integrity, is dedicated to manufacturing premium disposable diapers and developing well-known brands in the hygienic sector, reflecting our commitment to excellence and innovation. Leveraging advanced production tools and market research, we continuously develop products to meet evolving market demands. Our extensive dealer management system and experienced marketing team have expanded our reach across major cities, provinces, and autonomous regions nationwide.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  AG Health offers a diverse range of feminine, adult, and newborn diapers, catering to ages from zero to one hundred. Our brands include "Sagun Baby Poko pants" and "Buget" for babies, SAGUN for adults, and Sagun for sanitary napkins. We are committed to delivering top-notch quality and service through advanced production tools and rigorous control systems. Our dealer management system and marketing team have expanded our network across major cities, provinces, and autonomous regions. By fostering dealer relationships and providing support, we ensure our products reach diverse customers. Strategic initiatives, including targeted advertising, promotions, and strong distribution channels, have boosted market penetration and visibility. This approach helps us address regional demands, adapt to trends, and maintain a competitive edge in the hygienic product sector.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#ddc4a6bf'
          }}>Founder's and CEO</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{
            color: '#16a69d'
          }}>
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
                <h3 className="text-2xl md:text-3xl font-bold" style={{
                color: '#ddc4a6bf'
              }}>Mr. Tilak Prasad Adhikari</h3>
                <p className="text-xl text-muted-foreground font-medium">Founder, Chairman</p>
              </div>
            </div>

            {/* Second Team Member */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold" style={{
                color: '#ddc4a6bf'
              }}>Mr. Dolraj Adhikari</h3>
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
                <h3 className="text-2xl md:text-3xl font-bold" style={{
                color: '#ddc4a6bf'
              }}>Mr. Gangadhar Adhikari</h3>
                <p className="text-xl text-muted-foreground font-medium">Founder, Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#16a69d'
          }}>
              Our Core Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{
            color: '#ddc4a6bf'
          }}>
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
            <h2 className="text-3xl md:text-4xl font-bold" style={{
            color: '#ddc4a6bf'
          }}>
              Manufacturing Excellence
            </h2>
            <p className="text-lg leading-relaxed" style={{
            color: '#16a69d'
          }}>
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
                  <div className="font-semibold" style={{
                color: '#ddc4a6bf'
              }}>{item.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Our Parent Company */}
      <section className="py-16 md:py-20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#ddc4a6bf'
          }}>
              Our Parent Company
            </h2>
            <p className="text-lg leading-relaxed" style={{
            color: '#16a69d'
          }}>
              AG Health Industries Pvt. Ltd. is part of the Adhikari Group of Companies, a diversified business conglomerate with a strong presence across multiple sectors in Nepal. Our parent company's legacy of excellence and commitment to quality has been the foundation upon which AG Health Industries was built. With decades of experience in manufacturing and distribution, the Adhikari Group has established itself as a trusted name in Nepal's industrial landscape, providing employment opportunities and contributing to the nation's economic growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth">
                <img src={parbatiAgroLogo} alt="Parbati Agro Industries" className="w-48 h-48 mx-auto object-contain" />
              </div>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth">
                <img src={bhuMaduLogo} alt="Bhu-Madu Himalayan Honey" className="w-48 h-48 mx-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;