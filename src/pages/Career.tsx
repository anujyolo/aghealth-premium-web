import { Briefcase, Users, TrendingUp, Heart, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Career = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical coverage and wellness programs',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities',
    },
    {
      icon: Users,
      title: 'Great Culture',
      description: 'Collaborative environment with passionate healthcare professionals',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance rewards and employee appreciation programs',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Make a difference in healthcare worldwide',
    },
    {
      icon: Briefcase,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options',
    },
  ];

  const positions = [
    {
      title: 'Medical Sales Representative',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Control',
      location: 'Head Office',
      type: 'Full-time',
    },
    {
      title: 'Healthcare Product Manager',
      department: 'Product Development',
      location: 'Hybrid',
      type: 'Full-time',
    },
    {
      title: 'Clinical Research Associate',
      department: 'R&D',
      location: 'Research Center',
      type: 'Full-time',
    },
    {
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'Distribution Center',
      type: 'Full-time',
    },
    {
      title: 'Healthcare Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Build Your Career at AG Health
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Join a team of passionate healthcare professionals dedicated to innovation, 
            quality, and making a positive impact on global health
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join AG Health?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job – we provide a platform for growth and impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to make a difference in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {positions.map((position, index) => (
              <Card
                key={position.title}
                className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                        {position.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-2 text-base">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {position.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                          {position.type}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-muted-foreground">
                Send us your resume and we'll keep you in mind for future opportunities
              </p>
            </div>

            <Card className="border-0 shadow-large">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input id="position" placeholder="e.g., Medical Sales Representative" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and why you'd like to join AG Health..."
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / CV (PDF)</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium text-base py-6">
                  Submit Application
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and consent to being 
                  contacted about career opportunities at AG Health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Careers?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our HR team is here to help. Reach out to learn more about opportunities at AG Health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large"
            >
              <a href="mailto:careers@aghealth.com">Email HR Team</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              <a href="tel:+1234567890">Call Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
