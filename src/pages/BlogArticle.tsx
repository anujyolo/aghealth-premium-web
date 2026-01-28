import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Heart, Activity, Baby, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogData';
import blogArticleBackground from '@/assets/blog-article-background.png';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{
          backgroundImage: `url(${blogArticleBackground})`
        }} />
        <div className="absolute inset-0 bg-black/50 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "A.G. Health Industries"
    },
    "publisher": {
      "@type": "Organization",
      "name": "A.G. Health Industries",
      "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/6SzKisa3IgOyBtKsbOOaAaAvbLo1/uploads/1764399405894-untitled-design-1.png"
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={`${post.category}, parenting, health tips, ${post.title.toLowerCase()}`}
        structuredData={articleSchema}
      />
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{
        backgroundImage: `url(${blogArticleBackground})`
      }} />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-smooth mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-smooth" />
          Back to Blog
        </button>

        <article>
          <header className="mb-8">
            <Badge className="bg-amber-500/20 text-amber-300 w-fit border-0 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm text-white/70">
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

          <Card className="border-0 shadow-soft bg-white/10 backdrop-blur-md">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-white/90 mb-8 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="space-y-6 text-white/80 leading-relaxed">
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
