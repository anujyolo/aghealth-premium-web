import { Calendar, Clock, ArrowRight, Heart, Activity, Baby, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const featuredPost = {
    title: 'The Complete Guide to Choosing Baby Diapers',
    excerpt:
      'Learn everything you need to know about selecting the right diaper for your baby, including size guides, material considerations, and tips for preventing diaper rash.',
    category: 'Baby Care',
    date: '2025-10-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
  };

  const posts = [
    {
      title: 'Why Hygiene Products Matter for Daily Health',
      excerpt:
        'Discover how proper hygiene practices and quality hygiene products contribute to better health and disease prevention.',
      category: 'Health',
      icon: Heart,
      date: '2025-10-12',
      readTime: '5 min read',
    },
    {
      title: 'Understanding Face Mask Protection Levels',
      excerpt:
        'A comprehensive guide to different types of face masks, their protection levels, and when to use each type.',
      category: 'Safety',
      icon: Shield,
      date: '2025-10-10',
      readTime: '6 min read',
    },
    {
      title: 'Sustainable Hygiene: Eco-Friendly Choices',
      excerpt:
        'Learn about environmentally conscious hygiene products and how to reduce your environmental footprint.',
      category: 'Sustainability',
      icon: Activity,
      date: '2025-10-08',
      readTime: '7 min read',
    },
    {
      title: 'Sanitary Pad Care: Tips for Comfort',
      excerpt:
        'Essential tips for choosing the right sanitary pads and maintaining comfort during your menstrual cycle.',
      category: 'Women\'s Health',
      icon: Heart,
      date: '2025-10-05',
      readTime: '5 min read',
    },
    {
      title: 'Adult Diaper Guide for Caregivers',
      excerpt:
        'A helpful guide for caregivers on selecting and using adult diapers with dignity and comfort.',
      category: 'Elder Care',
      icon: Baby,
      date: '2025-10-03',
      readTime: '6 min read',
    },
    {
      title: 'The Importance of Proper Hand Hygiene',
      excerpt:
        'Understanding why handwashing and hand hygiene are crucial for preventing illness and staying healthy.',
      category: 'Prevention',
      icon: Shield,
      date: '2025-10-01',
      readTime: '4 min read',
    },
  ];

  const categories = [
    'All Posts',
    'Baby Care',
    'Health',
    'Safety',
    'Sustainability',
    'Women\'s Health',
    'Elder Care',
    'Prevention',
  ];

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
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All Posts' ? 'default' : 'outline'}
                className={`px-4 py-2 cursor-pointer transition-smooth ${
                  category === 'All Posts'
                    ? 'bg-gradient-primary text-white hover:opacity-90'
                    : 'hover:bg-primary hover:text-white hover:border-primary'
                }`}
              >
                {category}
              </Badge>
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
            {posts.map((post, index) => (
              <Card
                key={post.title}
                className="border-0 shadow-soft hover:shadow-large transition-smooth bg-white group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <post.icon className="w-8 h-8 text-white" />
                  </div>
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
