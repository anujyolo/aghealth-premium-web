import { Briefcase, Users, TrendingUp, Heart, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useState } from 'react';
import careerBackground from '@/assets/career-team-photo.jpg';
const Career = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const application = {
      fullName: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      experience: formData.get('experience') as string,
      coverLetter: formData.get('message') as string,
    };

    try {
      const { data, error } = await supabase.functions.invoke('send-application', {
        body: application,
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const benefits = [{
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health benefits and wellness programs'
  }, {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Training and advancement opportunities'
  }, {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative and supportive work environment'
  }, {
    icon: Award,
    title: 'Recognition',
    description: 'Performance rewards and employee appreciation'
  }, {
    icon: Globe,
    title: 'Make an Impact',
    description: 'Contribute to Nepal\'s hygiene standards'
  }, {
    icon: Briefcase,
    title: 'Work-Life Balance',
    description: 'Fair working hours and time off policies'
  }];
  const positions = [{
    title: 'Production Supervisor',
    department: 'Manufacturing',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Quality Control Specialist',
    department: 'Quality Assurance',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Multiple Locations',
    type: 'Full-time'
  }, {
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Accountant',
    department: 'Finance',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Finance Manager',
    department: 'Finance',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Marketing Coordinator',
    department: 'Marketing',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Brand Manager',
    department: 'Marketing',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Warehouse Manager',
    department: 'Operations',
    location: 'Kathmandu',
    type: 'Full-time'
  }, {
    title: 'Machine Operator',
    department: 'Production',
    location: 'Kathmandu',
    type: 'Full-time'
  }];
  return <div className="min-h-screen pt-20 md:pt-24 pb-0 relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{
      backgroundImage: `url(${careerBackground})`
    }} />
      <div className="fixed inset-0 bg-black/60 -z-10" />
      
      {/* Header */}
      <section className="bg-gradient-soft py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{
          color: '#ddc4a6bf'
        }}>
            Build Your Career with A.G. Health
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{
          color: '#16a69d'
        }}>
            Join our growing team and contribute to improving hygiene standards across Nepal. 
            We're looking for passionate individuals dedicated to making a difference.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#16a69d'
          }}>
              Why Work with Us?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{
            color: '#ddc4a6bf'
          }}>We offer more than just a
 job – we provide opportunities for growth and meaningful impact</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => <Card key={benefit.title} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white/10 backdrop-blur-sm group animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-100">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: '#ddc4a6bf'
          }}>
              Current Job Openings
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#a1aaea]">
              Explore opportunities to grow your career with A.G. Health Industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {positions.map((position, index) => <Card key={position.title} className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white/10 backdrop-blur-sm group cursor-pointer animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-amber-100 group-hover:text-primary transition-smooth">
                        {position.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-2 text-base">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {position.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                          {position.type}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-white/90">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth" onClick={() => document.getElementById('application-form')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#67b698]">
                Submit Your Application
              </h2>
              <p className="text-lg text-[#a1aaea]">
                Don't see the right role? Send us your details and we'll keep you in mind for future opportunities
              </p>
            </div>

            <Card className="border-0 shadow-large bg-white">
              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+977 98X XXX XXXX" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest</Label>
                    <Input id="position" name="position" placeholder="e.g., Production Supervisor" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input id="experience" name="experience" placeholder="e.g., 3 years" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Cover Letter / Why Join Us? *</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about yourself and why you'd like to join A.G. Health Industries..." rows={6} required />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium text-base py-6"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and consent to being 
                  contacted about career opportunities at A.G. Health Industries Pvt. Ltd.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pt-16 pb-0 bg-gradient-to-br from-primary via-accent to-primary bg-[#67b698]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Careers?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our HR team is here to help. Reach out to learn more about opportunities at A.G. Health Industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large">
              <a href="mailto:kripa.ad25@gmail.com">Email Us</a>
            </Button>
            <span className="text-white/90 text-sm">or copy: kripa.ad25@gmail.com</span>
          </div>
        </div>
      </section>
    </div>;
};
export default Career;