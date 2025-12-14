import { Briefcase, Users, TrendingUp, Heart, Award, Globe, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useState } from 'react';
import SEO from '@/components/SEO';
import { careerSchema } from '@/data/structuredData';
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
      <SEO 
        title="Careers - Join Our Team"
        description="Join A.G. Health Industries and build your career in Nepal's leading hygiene products company. Explore job opportunities in manufacturing, sales, marketing, and more."
        canonical="/career"
        keywords="jobs Nepal, career opportunities, hygiene industry jobs, manufacturing jobs Kathmandu, AG Health careers"
        structuredData={careerSchema}
      />
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
      <section className="pt-16 pb-8 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Careers?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our HR team is here to help. Reach out to learn more about opportunities at A.G. Health Industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large">
              <a href="mailto:kripa.ad25@gmail.com">Email HR Team</a>
            </Button>
            <Button 
              size="lg" 
              className="bg-primary/20 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              onClick={() => {
                navigator.clipboard.writeText('kripa.ad25@gmail.com');
                toast({
                  title: "Email Copied!",
                  description: "kripa.ad25@gmail.com has been copied to your clipboard.",
                });
              }}
            >
              Copy Email Address
            </Button>
            <Button asChild size="lg" className="bg-amber-100/20 border-2 border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-primary transition-smooth">
              <a href="tel:+9771234567890">Call Us</a>
            </Button>
          </div>
          
          {/* Social Media Links */}
          <div className="flex gap-4 justify-center">
            <a 
              href="https://www.facebook.com/profile.php?id=61556698594648" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-smooth border border-white/20"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/sagun_diapers_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-smooth border border-white/20"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/ag-health-industries-pvt-ltd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-smooth border border-white/20"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-smooth border border-white/20"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://reddit.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-smooth border border-white/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Career;