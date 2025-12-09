import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Heart, Mail, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import pregnancyImg from '@/assets/category-pregnancy.jpg';
import newbornImg from '@/assets/category-newborn.jpg';
import infantImg from '@/assets/category-infant.jpg';
import toddlersImg from '@/assets/category-toddlers.webp';
import blogPrenatalVitamins from '@/assets/blog-prenatal-vitamins.jpg';
import blogBackground from '@/assets/blog-background.png';
import { blogPosts } from '@/data/blogData';

const Blog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kripa.ad25@gmail.com');
    setCopied(true);
    toast({
      title: "Email Copied!",
      description: "kripa.ad25@gmail.com has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const featuredPost = blogPosts.find(post => post.slug === 'prenatal-vitamins-guide')!;

  const categories = [
    { name: 'All Posts', image: null },
    { name: 'Pregnancy', image: pregnancyImg },
    { name: 'Newborn', image: newbornImg },
    { name: 'Infant', image: infantImg },
    { name: 'Toddlers', image: toddlersImg },
  ];

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
        {/* Decorative curved lines */}
        <svg className="absolute top-0 left-0 w-full h-40 opacity-40" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C240 50 480 100 720 100C960 100 1200 50 1440 0V160H0V0Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute top-10 left-0 w-full h-24 opacity-30" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C360 60 720 40 1080 60C1260 70 1350 50 1440 40V100H0V20Z" stroke="#d97706" strokeWidth="2" fill="none" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-40" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120C240 80 480 40 720 40C960 40 1200 80 1440 120V0H0V120Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0" y1="120" x2="1440" y2="120">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Heart decoration */}
        <svg className="absolute top-1/2 right-20 w-12 h-12 opacity-50 hidden lg:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#f59e0b" strokeWidth="2" fill="none" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Heart className="w-4 h-4" />
              <span>Health & Hygiene Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-600 mb-6 animate-fade-in-up">
              Hygiene Tips & Health Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up">
              Expert advice on hygiene, health, and wellness to help you and your family stay healthy
            </p>
          </div>
        </div>
      </section>

      {/* All sections with shared background */}
      <div className="relative">
        {/* Shared background for all sections */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{
          backgroundImage: `url(${blogBackground})`
        }} />
        <div className="absolute inset-0 bg-black/60 -z-10" />

        {/* Categories */}
        <section className="py-12 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap gap-6 justify-center">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`flex flex-col items-center gap-3 cursor-pointer transition-smooth group ${
                    category.name === selectedCategory ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.image && (
                    <div className={`w-24 h-24 rounded-full overflow-hidden border-4 transition-smooth ${
                      category.name === selectedCategory 
                        ? 'border-amber-500 shadow-xl shadow-amber-200' 
                        : 'border-amber-200 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-100'
                    }`}>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <Badge
                    variant={category.name === selectedCategory ? 'default' : 'outline'}
                    className={`px-5 py-2 transition-smooth text-sm font-semibold ${
                      category.name === selectedCategory
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-md'
                        : 'border-amber-300 text-amber-700 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500'
                    }`}
                  >
                    {category.name}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-large overflow-hidden animate-fade-in bg-white/10 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-soft flex items-center justify-center">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <Badge className="bg-amber-500/20 text-amber-300 w-fit border-0">
                  Featured Post
                </Badge>
                <CardTitle className="text-3xl md:text-4xl text-white">
                  {featuredPost.title}
                </CardTitle>
                <CardDescription className="text-lg text-white/80">
                  {featuredPost.excerpt}
                </CardDescription>
                <div className="flex items-center space-x-6 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                  className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-smooth group w-fit"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.title}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="border-0 shadow-soft hover:shadow-large transition-smooth bg-white/10 backdrop-blur-sm group cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {post.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    />
                  </div>
                )}
                <CardHeader className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary w-fit border-0"
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-smooth">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-white/80">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-white/70">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blog/${post.slug}`);
                    }}
                    className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-smooth group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Tips */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-amber-500/30 shadow-large bg-white/15 backdrop-blur-md overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <Mail className="w-12 h-12 text-amber-400 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Want More Hygiene Tips?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                For personalized hygiene advice and product recommendations, reach out to us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-large">
                  <a href="mailto:kripa.ad25@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button 
                  size="lg"
                  onClick={handleCopyEmail}
                  className="group relative bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-500 hover:via-amber-600 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Email
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    {/* End of shared background wrapper */}
    
    </div>
  );
};

export default Blog;
