import { Calendar, Clock, ArrowRight, Heart, Activity, Pill } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Personalized Medicine',
    excerpt:
      'Discover how AI and genomics are revolutionizing healthcare, enabling treatments tailored to individual genetic profiles for better outcomes.',
    category: 'Innovation',
    date: '2025-10-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  };

  const posts = [
    {
      title: '10 Essential Vitamins for Immune Health',
      excerpt:
        'Learn about the key vitamins and minerals that support your immune system and where to find them in your diet.',
      category: 'Wellness',
      icon: Pill,
      date: '2025-10-12',
      readTime: '5 min read',
    },
    {
      title: 'Understanding Blood Pressure Monitoring',
      excerpt:
        'A comprehensive guide to monitoring blood pressure at home, including best practices and when to consult a doctor.',
      category: 'Health Tips',
      icon: Activity,
      date: '2025-10-10',
      readTime: '6 min read',
    },
    {
      title: 'Mental Health in the Workplace',
      excerpt:
        'Strategies for maintaining mental wellness in professional environments and recognizing signs of burnout.',
      category: 'Mental Health',
      icon: Heart,
      date: '2025-10-08',
      readTime: '7 min read',
    },
    {
      title: 'Proper Hand Hygiene Techniques',
      excerpt:
        'Step-by-step guide to effective handwashing and sanitization to prevent the spread of infections.',
      category: 'Prevention',
      icon: Activity,
      date: '2025-10-05',
      readTime: '4 min read',
    },
    {
      title: 'Nutrition for Heart Health',
      excerpt:
        'Evidence-based dietary recommendations to support cardiovascular health and reduce disease risk.',
      category: 'Nutrition',
      icon: Heart,
      date: '2025-10-03',
      readTime: '6 min read',
    },
    {
      title: 'The Role of Sleep in Recovery',
      excerpt:
        'Understanding how quality sleep contributes to healing, immune function, and overall health.',
      category: 'Wellness',
      icon: Activity,
      date: '2025-10-01',
      readTime: '5 min read',
    },
  ];

  const categories = [
    'All Posts',
    'Innovation',
    'Wellness',
    'Health Tips',
    'Mental Health',
    'Prevention',
    'Nutrition',
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Heart className="w-4 h-4" />
            <span>Health & Wellness Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Healthcare Insights & Tips
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Expert advice, wellness tips, and the latest healthcare innovations to help you live healthier
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
              <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <Badge className="bg-secondary/10 text-secondary w-fit border-0">
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
          <Card className="border-0 shadow-large bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Stay Updated with Health Tips
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest healthcare insights, wellness tips, 
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
