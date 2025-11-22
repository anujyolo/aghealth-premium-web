import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Heart, Activity, Baby, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import pregnancyImg from '@/assets/category-pregnancy.jpg';
import newbornImg from '@/assets/category-newborn.jpg';
import infantImg from '@/assets/category-infant.jpg';
import toddlersImg from '@/assets/category-toddlers.webp';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const featuredPost = {
    title: 'The Complete Guide to Choosing Baby Diapers',
    excerpt:
      'Learn everything you need to know about selecting the right diaper for your baby, including size guides, material considerations, and tips for preventing diaper rash.',
    category: 'Infant',
    date: '2025-10-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
  };

  const posts = [
    {
      title: 'Preparing for Your Baby: Essential Pregnancy Tips',
      excerpt:
        'A comprehensive guide for expecting mothers on prenatal care, nutrition, and preparing for your baby\'s arrival.',
      category: 'Pregnancy',
      icon: Heart,
      date: '2025-10-12',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1493101561940-44833c61f38e?w=600&q=80',
    },
    {
      title: 'Newborn Care Essentials: First 28 Days',
      excerpt:
        'Everything new parents need to know about caring for their newborn in the crucial first month.',
      category: 'Newborn',
      icon: Baby,
      date: '2025-10-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80',
    },
    {
      title: 'Infant Development Milestones: 1-12 Months',
      excerpt:
        'Track your baby\'s growth and development with our month-by-month guide to infant milestones.',
      category: 'Infant',
      icon: Activity,
      date: '2025-10-08',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    },
    {
      title: 'Toddler Hygiene: Building Healthy Habits',
      excerpt:
        'Learn how to establish good hygiene routines for toddlers, from potty training to handwashing.',
      category: 'Toddlers',
      icon: Shield,
      date: '2025-10-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
    },
    {
      title: 'Choosing the Right Diaper Size Guide',
      excerpt:
        'A practical guide to selecting the perfect diaper size for your growing baby at every stage.',
      category: 'Infant',
      icon: Baby,
      date: '2025-10-03',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80',
    },
    {
      title: 'Nutrition During Pregnancy: What to Eat',
      excerpt:
        'Essential nutritional guidelines for expecting mothers to support a healthy pregnancy and baby development.',
      category: 'Pregnancy',
      icon: Heart,
      date: '2025-10-01',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
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
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-soft py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Heart className="w-4 h-4" />
            <span>Health & Hygiene Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Hygiene Tips & Health Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Expert advice on hygiene, health, and wellness to help you and your family stay healthy
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`flex flex-col items-center gap-2 cursor-pointer transition-smooth group ${
                  category.name === selectedCategory ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.image && (
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-4 transition-smooth ${
                    category.name === selectedCategory 
                      ? 'border-primary shadow-large' 
                      : 'border-border group-hover:border-primary'
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
                  className={`px-4 py-2 transition-smooth ${
                    category.name === selectedCategory
                      ? 'bg-gradient-primary text-white'
                      : 'group-hover:bg-primary group-hover:text-white group-hover:border-primary'
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
