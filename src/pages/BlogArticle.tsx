import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Heart, Activity, Baby, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogData';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-primary hover:text-primary/80 transition-smooth"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = post.icon;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-smooth" />
          Back to Blog
        </button>

        <article>
          <header className="mb-8">
            <Badge className="bg-primary/10 text-primary w-fit border-0 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <IconComponent className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
            </div>
          </header>

          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <Card className="border-0 shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="space-y-6 text-foreground leading-relaxed">
                  {post.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle;
