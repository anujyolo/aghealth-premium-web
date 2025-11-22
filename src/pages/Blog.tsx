import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Heart, Activity, Baby, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import pregnancyImg from '@/assets/category-pregnancy.jpg';
import newbornImg from '@/assets/category-newborn.jpg';
import infantImg from '@/assets/category-infant.jpg';
import toddlersImg from '@/assets/category-toddlers.webp';
import blogPregnancy from '@/assets/blog-pregnancy.jpg';
import blogNewborn from '@/assets/blog-newborn.jpg';
import blogInfant from '@/assets/blog-infant.jpg';
import blogToddler from '@/assets/blog-toddler.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const featuredPost = {
    title: 'Essential Nutrition Guide for a Healthy Pregnancy',
    excerpt:
      'Discover the key nutrients, foods to eat and avoid, and meal planning tips to support your baby\'s development and maintain your health throughout pregnancy.',
    category: 'Pregnancy',
    date: '2025-11-20',
    readTime: '12 min read',
    image: blogPregnancy,
  };

  const posts = [
    {
      title: '10 Essential Pregnancy Tips for Every Trimester',
      excerpt:
        'From morning sickness remedies to preparing for labor, discover practical advice to help you navigate each stage of pregnancy with confidence and comfort.',
      category: 'Pregnancy',
      icon: Heart,
      date: '2025-11-18',
      readTime: '10 min read',
      image: blogPregnancy,
    },
    {
      title: 'Prenatal Vitamins: What You Really Need',
      excerpt:
        'Learn which vitamins and minerals are essential during pregnancy, recommended dosages, and how to choose the right prenatal supplement for you and your baby.',
      category: 'Pregnancy',
      icon: Heart,
      date: '2025-11-15',
      readTime: '8 min read',
      image: blogPregnancy,
    },
    {
      title: 'Newborn Sleep Guide: First Month Survival Tips',
      excerpt:
        'Master newborn sleep patterns, establish healthy sleep habits, and learn safe sleeping practices to help both you and your baby get the rest you need.',
      category: 'Newborn',
      icon: Baby,
      date: '2025-11-12',
      readTime: '11 min read',
      image: blogNewborn,
    },
    {
      title: 'Diapering 101: Complete Guide for New Parents',
      excerpt:
        'Everything you need to know about diapering your newborn including changing techniques, preventing rashes, and choosing between cloth and disposable diapers.',
      category: 'Newborn',
      icon: Baby,
      date: '2025-11-10',
      readTime: '9 min read',
      image: blogNewborn,
    },
    {
      title: 'Breastfeeding Success: Tips and Troubleshooting',
      excerpt:
        'Expert advice on establishing breastfeeding, proper latching techniques, managing common challenges, and knowing when to seek help from a lactation consultant.',
      category: 'Newborn',
      icon: Heart,
      date: '2025-11-08',
      readTime: '13 min read',
      image: blogNewborn,
    },
    {
      title: 'Infant Development Milestones: 0-12 Months',
      excerpt:
        'Track your baby\'s physical, cognitive, and social development month by month. Learn what\'s normal and when to consult your pediatrician.',
      category: 'Infant',
      icon: Activity,
      date: '2025-11-05',
      readTime: '12 min read',
      image: blogInfant,
    },
    {
      title: 'Starting Solids: Baby-Led Weaning Guide',
      excerpt:
        'Discover when and how to introduce solid foods, safe first foods to try, allergy prevention strategies, and tips for making mealtime enjoyable for your infant.',
      category: 'Infant',
      icon: Baby,
      date: '2025-11-02',
      readTime: '10 min read',
      image: blogInfant,
    },
    {
      title: 'Baby Skin Care: Preventing and Treating Diaper Rash',
      excerpt:
        'Learn proper infant skin care routines, how to prevent diaper rash, choose gentle products, and treat common skin conditions naturally and effectively.',
      category: 'Infant',
      icon: Shield,
      date: '2025-10-30',
      readTime: '8 min read',
      image: blogInfant,
    },
    {
      title: 'Potty Training Success: A Step-by-Step Guide',
      excerpt:
        'Ready to potty train? Learn the signs of readiness, proven techniques, how to handle accidents, and tips for nighttime training to make the transition smooth.',
      category: 'Toddlers',
      icon: Shield,
      date: '2025-10-28',
      readTime: '11 min read',
      image: blogToddler,
    },
    {
      title: 'Toddler Hygiene Habits: Building a Daily Routine',
      excerpt:
        'Establish essential hygiene habits including handwashing, teeth brushing, bathing, and nail care. Make hygiene fun and develop lifelong healthy habits.',
      category: 'Toddlers',
      icon: Shield,
      date: '2025-10-25',
      readTime: '9 min read',
      image: blogToddler,
    },
    {
      title: 'Toddler Nutrition: Picky Eater Solutions',
      excerpt:
        'Overcome mealtime battles with strategies for dealing with picky eaters, ensuring balanced nutrition, and creating positive eating experiences for your toddler.',
      category: 'Toddlers',
      icon: Heart,
      date: '2025-10-22',
      readTime: '10 min read',
      image: blogToddler,
    },
    {
      title: 'Managing Toddler Tantrums: Calm Parenting Strategies',
      excerpt:
        'Understand why tantrums happen, learn effective de-escalation techniques, and discover positive discipline methods to guide your toddler through big emotions.',
      category: 'Toddlers',
      icon: Activity,
      date: '2025-10-20',
      readTime: '12 min read',
      image: blogToddler,
    },
  ];

  const categories = [
    { name: 'All Posts', image: null },
    { name: 'Pregnancy', image: pregnancyImg },
    { name: 'Newborn', image: newbornImg },
    { name: 'Infant', image: infantImg },
    { name: 'Toddlers', image: toddlersImg },
  ];

  const filteredPosts = selectedCategory === 'All Posts' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

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

      {/* Categories */}
      <section className="relative py-12 bg-gradient-to-b from-amber-50/50 to-white border-b border-amber-200/50 overflow-hidden">
        {/* Subtle wave decoration */}
        <svg className="absolute bottom-0 left-0 w-full h-16 opacity-30" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C360 10 720 50 1080 30C1260 20 1350 40 1440 30V60H0V30Z" fill="#fef3c7" />
        </svg>

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
          <Card className="border-0 shadow-large overflow-hidden animate-fade-in">
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-soft flex items-center justify-center">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <Badge className="bg-primary/10 text-primary w-fit border-0">
                  Featured Post
                </Badge>
                <CardTitle className="text-3xl md:text-4xl text-foreground">
                  {featuredPost.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {featuredPost.excerpt}
                </CardDescription>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-smooth group w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.title}
                className="border-0 shadow-soft hover:shadow-large transition-smooth bg-white group cursor-pointer animate-fade-in overflow-hidden"
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
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-smooth group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-large bg-gradient-to-br from-primary via-accent to-primary overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Stay Updated with Hygiene Tips
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest hygiene insights, health tips, 
                and product updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-smooth shadow-medium">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
