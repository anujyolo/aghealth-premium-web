import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Heart, Activity, Baby, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import pregnancyImg from '@/assets/category-pregnancy.jpg';
import newbornImg from '@/assets/category-newborn.jpg';
import infantImg from '@/assets/category-infant.jpg';
import toddlersImg from '@/assets/category-toddlers.webp';
import blogPregnancyTips from '@/assets/blog-pregnancy-tips.jpg';
import blogPrenatalVitamins from '@/assets/blog-prenatal-vitamins.jpg';
import blogNewbornSleep from '@/assets/blog-newborn-sleep.jpg';
import blogDiapering from '@/assets/blog-diapering.jpg';
import blogBreastfeeding from '@/assets/blog-breastfeeding.jpg';
import blogMilestones from '@/assets/blog-milestones.jpg';
import blogSolids from '@/assets/blog-solids.jpg';
import blogSkinCare from '@/assets/blog-skin-care.jpg';
import blogPottyTraining from '@/assets/blog-potty-training.jpg';
import blogHygieneHabits from '@/assets/blog-hygiene-habits.jpg';
import blogToddlerNutrition from '@/assets/blog-toddler-nutrition.jpg';
import blogTantrums from '@/assets/blog-tantrums.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const featuredPost = {
    title: 'Essential Nutrition Guide for a Healthy Pregnancy',
    excerpt:
      'Discover the key nutrients, foods to eat and avoid, and meal planning tips to support your baby\'s development and maintain your health throughout pregnancy.',
    category: 'Pregnancy',
    date: '2025-11-20',
    readTime: '12 min read',
    image: blogPrenatalVitamins,
  };

  const posts = [
    {
      title: '10 Essential Pregnancy Tips for Every Trimester',
      excerpt:
        'Navigate your pregnancy journey with confidence using our comprehensive trimester-by-trimester guide. First trimester: Combat morning sickness with ginger tea and small frequent meals, stay hydrated, and start prenatal vitamins. Second trimester: Focus on proper nutrition with iron-rich foods, begin gentle exercises like prenatal yoga, and prepare your nursery. Third trimester: Practice breathing techniques for labor, pack your hospital bag, attend childbirth classes, and establish a birth plan. Learn when to call your doctor, understand common symptoms, and discover natural remedies for discomfort.',
      category: 'Pregnancy',
      icon: Heart,
      date: '2025-11-18',
      readTime: '10 min read',
      image: blogPregnancyTips,
    },
    {
      title: 'Prenatal Vitamins: What You Really Need',
      excerpt:
        'Understand the essential nutrients your body needs during pregnancy. Folic acid (400-800mcg daily) prevents neural tube defects and should be taken before conception. Iron (27mg daily) prevents anemia and supports increased blood volume. Calcium (1000mg daily) builds baby\'s bones and teeth. DHA omega-3 supports brain development. Vitamin D (600 IU daily) aids calcium absorption. Learn which foods naturally contain these nutrients: leafy greens, lean meats, dairy, fatty fish, and fortified cereals. Discover when to take vitamins for maximum absorption, potential side effects to watch for, and how to choose high-quality supplements that are third-party tested.',
      category: 'Pregnancy',
      icon: Heart,
      date: '2025-11-15',
      readTime: '8 min read',
      image: blogPrenatalVitamins,
    },
    {
      title: 'Newborn Sleep Guide: First Month Survival Tips',
      excerpt:
        'Understand newborn sleep cycles: babies sleep 14-17 hours daily in 2-4 hour stretches, waking frequently for feeds. Create a safe sleep environment: place baby on back on firm mattress, remove loose blankets and toys, maintain room temperature of 68-72°F. Recognize sleep cues: yawning, eye rubbing, fussiness signal tiredness. Establish day-night routine: keep days bright and active, nights dark and quiet. Learn safe swaddling techniques that prevent hip dysplasia. Understand when to expect longer sleep stretches (usually after 3 months). Manage parental sleep deprivation with tag-team night shifts, napping when baby naps, and accepting help from family.',
      category: 'Newborn',
      icon: Baby,
      date: '2025-11-12',
      readTime: '11 min read',
      image: blogNewbornSleep,
    },
    {
      title: 'Diapering 101: Complete Guide for New Parents',
      excerpt:
        'Master diaper changing: gather all supplies before starting (diapers, wipes, barrier cream), clean front to back thoroughly, let skin air dry before applying new diaper. Newborns need 8-12 changes daily. Prevent diaper rash by changing frequently, using fragrance-free wipes, applying zinc oxide barrier cream, and allowing diaper-free time. Choose between cloth diapers (eco-friendly, cost-effective long-term, require laundering) and disposables (convenient, absorbent, more expensive). Stock your diaper station: 70+ diapers weekly for newborns, hypoallergenic wipes, diaper rash cream, changing pad with washable cover, and diaper disposal system.',
      category: 'Newborn',
      icon: Baby,
      date: '2025-11-10',
      readTime: '9 min read',
      image: blogDiapering,
    },
    {
      title: 'Breastfeeding Success: Tips and Troubleshooting',
      excerpt:
        'Achieve proper latch: baby\'s mouth should cover most of areola, lips flanged outward, chin touching breast, nose free. Feed on demand (8-12 times daily for newborns). Recognize feeding cues: rooting, hand to mouth, sucking motions. Positions to try: cradle hold, football hold, side-lying for night feeds. Solve common problems: engorgement (cold compresses, frequent feeding), sore nipples (check latch, apply lanolin), low supply (feed frequently, stay hydrated, eat 500 extra calories daily). Signs baby is getting enough: 6+ wet diapers daily, steady weight gain, satisfied after feeds. When to seek lactation consultant: persistent pain, poor weight gain, or latch difficulties.',
      category: 'Newborn',
      icon: Heart,
      date: '2025-11-08',
      readTime: '13 min read',
      image: blogBreastfeeding,
    },
    {
      title: 'Infant Development Milestones: 0-12 Months',
      excerpt:
        'Month-by-month guide: 0-3 months (lifts head, follows objects, smiles socially), 4-6 months (rolls over, sits with support, babbles, reaches for toys), 7-9 months (sits independently, crawls, responds to name, plays peek-a-boo), 10-12 months (pulls to stand, cruises furniture, says first words, waves bye-bye). Motor skills: strengthen tummy time starting week 1, encourage reaching and grasping with colorful toys. Cognitive development: introduce books, talk constantly, play simple games. Social-emotional: establish routines, respond to cries promptly, encourage interaction. Red flags requiring pediatrician visit: no eye contact by 3 months, not sitting by 9 months, no babbling by 12 months, loss of previously acquired skills.',
      category: 'Infant',
      icon: Activity,
      date: '2025-11-05',
      readTime: '12 min read',
      image: blogMilestones,
    },
    {
      title: 'Starting Solids: Baby-Led Weaning Guide',
      excerpt:
        'Start solids around 6 months when baby can sit independently, shows interest in food, and has lost tongue-thrust reflex. First foods: soft-cooked vegetables (sweet potato, carrots), ripe fruits (banana, avocado), iron-fortified cereals, well-cooked grains. Safe preparation: cut foods into finger-sized strips, cook until soft, avoid choking hazards (whole grapes, nuts, popcorn, hard raw vegetables). Introduce top allergens early (peanut butter, eggs, dairy, fish, wheat, soy, tree nuts, sesame) one at a time. Watch for allergic reactions: rashes, vomiting, breathing difficulty. Progress gradually: purees to mashed to soft chunks to table foods. Offer variety, respect appetite, make mealtimes pleasant without pressure.',
      category: 'Infant',
      icon: Baby,
      date: '2025-11-02',
      readTime: '10 min read',
      image: blogSolids,
    },
    {
      title: 'Baby Skin Care: Preventing and Treating Diaper Rash',
      excerpt:
        'Prevent diaper rash: change diapers every 2-3 hours, clean gently with water or fragrance-free wipes, pat dry completely, apply barrier cream containing zinc oxide or petroleum jelly. Treatment stages: mild rash (increase diaper-free time, use thick barrier cream), moderate rash (switch to hypoallergenic diapers, avoid wipes, use warm water and soft cloth), severe rash (consult pediatrician, may need antifungal or antibiotic cream). Choose gentle products: fragrance-free, dye-free, hypoallergenic formulas. Bathing tips: use lukewarm water, limit soap to once weekly initially, moisturize with baby lotion after. Treat other conditions: cradle cap (gentle brushing with baby oil), baby acne (keep clean, don\'t use products), eczema (moisturize frequently, avoid triggers).',
      category: 'Infant',
      icon: Shield,
      date: '2025-10-30',
      readTime: '8 min read',
      image: blogSkinCare,
    },
    {
      title: 'Potty Training Success: A Step-by-Step Guide',
      excerpt:
        'Signs of readiness (typically 18-30 months): stays dry for 2+ hours, communicates needs, shows interest in toilet, can pull pants up/down, dislikes dirty diapers. Preparation phase: introduce potty chair, read potty books, let child observe family members, celebrate small successes. Training techniques: choose 3-day intensive method or gradual approach, set regular bathroom times (every 2 hours), use training pants, praise all attempts. Handle accidents calmly without punishment - they\'re normal learning experiences. Nighttime training comes later: wait for consistent dry nights, limit fluids before bed, use waterproof mattress covers, wake for bathroom trip before you sleep. Common challenges: regression during stress, fear of flushing (reassure and let them control flush), public restrooms (bring portable seat, practice at home).',
      category: 'Toddlers',
      icon: Shield,
      date: '2025-10-28',
      readTime: '11 min read',
      image: blogPottyTraining,
    },
    {
      title: 'Toddler Hygiene Habits: Building a Daily Routine',
      excerpt:
        'Handwashing mastery: teach proper technique (wet, soap, scrub 20 seconds singing ABC song, rinse, dry), wash before meals, after bathroom, after playing outside. Make it fun with colorful soap, special towel, stool to reach sink. Teeth brushing: start when first tooth appears, use rice-grain sized fluoride toothpaste until age 3, brush twice daily for 2 minutes, supervise until age 6-7, schedule first dental visit by age 1. Bathing routine: daily or every other day, use gentle soap, wash hair 2-3 times weekly, teach washing body parts, make bath time fun with toys. Nail care: trim weekly, use baby nail clippers, file rough edges, trim after bath when soft. Additional habits: teach nose-blowing with tissue, cover coughs with elbow, wash hands after touching pets.',
      category: 'Toddlers',
      icon: Shield,
      date: '2025-10-25',
      readTime: '9 min read',
      image: blogHygieneHabits,
    },
    {
      title: 'Toddler Nutrition: Picky Eater Solutions',
      excerpt:
        'Understanding picky eating: normal developmental phase ages 2-5, natural neophobia (fear of new foods), asserting independence. Daily nutrition needs: 3 meals plus 2-3 snacks, 2-3 cups dairy, 2-3 oz protein, 1 cup fruits, 1 cup vegetables, 3 oz grains. Strategies that work: offer same food 10-15 times before giving up, serve tiny portions to avoid overwhelm, eat together as family modeling good habits, involve toddler in meal prep and shopping, make food fun with dips and colorful arrangements. What doesn\'t work: forcing, bribing with dessert, making separate meals, pressure to clean plate. Ensure variety: rotate protein sources (beans, eggs, chicken, fish), offer rainbow of vegetables, provide whole grains, include healthy fats (avocado, nut butter, olive oil). When to worry: consistent poor weight gain, extreme food limitations, mealtime distress - consult pediatrician or dietitian.',
      category: 'Toddlers',
      icon: Heart,
      date: '2025-10-22',
      readTime: '10 min read',
      image: blogToddlerNutrition,
    },
    {
      title: 'Managing Toddler Tantrums: Calm Parenting Strategies',
      excerpt:
        'Why tantrums happen: limited language skills to express frustration, desire for independence versus inability, overtiredness or hunger, sensory overload, difficulty with transitions, testing boundaries. Prevention strategies: maintain consistent routines for meals and sleep, give advance warnings before transitions ("5 more minutes"), offer choices within limits ("red cup or blue cup?"), ensure adequate rest and nutrition, avoid known triggers. During tantrum: stay calm and don\'t yell, ensure safety by removing dangerous objects, validate feelings ("you\'re frustrated"), use brief simple statements, give space if needed. After tantrum: offer comfort, discuss what happened when calm, teach emotional vocabulary, problem-solve together. Positive discipline: set clear consistent limits, use natural consequences, redirect attention, praise good behavior specifically. When to seek help: tantrums lasting over 15 minutes, self-harm, multiple daily tantrums past age 4, aggressive behavior.',
      category: 'Toddlers',
      icon: Activity,
      date: '2025-10-20',
      readTime: '12 min read',
      image: blogTantrums,
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
