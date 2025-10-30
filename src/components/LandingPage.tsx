import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Zap, Users, Calendar, Brain, Shield, ArrowRight, Star, Quote, Target, Sparkles, TrendingUp, Twitter, Instagram, Facebook, Linkedin, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import growthTogether from "../../public/assets/images/growth-together.jpg"

const LandingPage = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });

  };

  // const features = [
  //   {
  //     icon: Brain,
  //     title: "AI Content Generation",
  //     description: "Powered by Jasper AI to create engaging, brand-aligned content automatically"
  //   },
  //   {
  //     icon: Shield,
  //     title: "Admin Review Process",
  //     description: "Quality control with admin approval before content goes live"
  //   },
  //   {
  //     icon: Users,
  //     title: "User Approval System",
  //     description: "Final client approval ensures perfect brand alignment"
  //   },
  //   {
  //     icon: Calendar,
  //     title: "Auto-Publishing",
  //     description: "Seamless integration with Hootsuite for automated scheduling"
  //   }
  // ];

  const workflowSteps = [
    {
      step: "1",
      title: "AI Generation",
      description: "Our AI analyzes your brand and creates engaging content tailored to your audience",
      icon: Brain
    },
    {
      step: "2",
      title: "Admin Review",
      description: "Expert review and refinement to ensure quality and brand consistency",
      icon: Shield
    },
    {
      step: "3",
      title: "Client Approval",
      description: "You review and approve content before it goes live on social media platforms",
      icon: Users
    },
    {
      step: "4",
      title: "Auto-Publish",
      description: "Scheduled posts automatically publish across your social platforms",
      icon: Calendar
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc",
      content: "Post Spark has transformed our social media strategy. We've increased engagement by 300% while cutting content creation time in half.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Labs",
      content: "The AI-powered content is incredible. It captures our brand voice perfectly and the approval workflow makes collaboration seamless.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "Creative Studios",
      content: "Finally, a platform that understands what content creators need. The quality and consistency are unmatched.",
      avatar: "ER"
    }
  ];

  const showcaseProjects = [
    
    {
      title: "Fashion Week Coverage",
      description: "Real-time content creation and scheduling across 5 platforms",
      category: "Fashion",
      image: "/assets/images/work/fashion.jpg"
    },
    {
      title: "Restaurant Brand Revival",
      description: "Rebranding campaign that increased foot traffic by 150%",
      category: "Food & Beverage",
      image: "/assets/images/work/food.jpg"
    },
    {
      title: "Fitness App Promotion",
      description: "90-day content series resulting in 10K new app downloads",
      category: "Health & Fitness",
      image: "/assets/images/work/fitness.jpg"
    },
    {
      title: "E-commerce Holiday Sale",
      description: "Multi-platform campaign generating $2M in revenue",
      category: "Retail",
      image: "/assets/images/work/retail.jpg"
    },
    {
      title: "Non-Profit Awareness",
      description: "Viral campaign raising $500K for charitable cause",
      category: "Non-Profit",
      image: "/assets/images/work/non-profit.jpg"
    },
    {
      title: "TechCorp Launch Campaign",
      description: "Real-time content creation and scheduling across 5 platforms",
      category: "Technology",
      image: "/assets/images/work/technology.png"
    },
    {
      title: "Real Estate Showcase",
      description: "Property marketing that sold 20 units in 30 days",
      category: "Real Estate",
      image: "/assets/images/work/realstate.jpg"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$500",
      posts: "10 posts",
      features: [
        "AI-powered content creation",
        "Admin review & editing",
        "User approval workflow",
        "Hootsuite integration",
        "Brand asset management",
        "3 revisions per post"
      ]
    },
    {
      name: "Professional",
      price: "$1,000",
      posts: "20 posts",
      features: [
        "AI-powered content creation",
        "Admin review & editing",
        "User approval workflow",
        "Hootsuite integration",
        "Brand asset management",
        "3 revisions per post"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { scrollToSection('home') }}>
              <Zap className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Post Spark</h1>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {/* <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </button> */}
              <button onClick={() => scrollToSection('workflow')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('our-work')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Our Work
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate('/coming-soon')}>
                Sign In
              </Button>
              <Button className="btn-hero" onClick={() => navigate('/coming-soon')}>
                Get Started
              </Button>
            </div>
            {/* <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gradient-primary">ContentAI Pro</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button className="btn-hero" onClick={() => navigate('/signup')}>
              Get Started
            </Button> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Social Media Excellence</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient-hero">Transform Your</span>{" "}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Social Media Presence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-generated content, expert review, and seamless publishing.
            Go from concept to post in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-10 py-6" onClick={() => navigate('/coming-soon')}>
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="btn-hero-outline text-lg px-10 py-6" onClick={() => scrollToSection('workflow')}>
              See How It Works
            </Button>
            {/* <Button variant="outline" className="text-lg px-10 py-6" onClick={() => scrollToSection('workflow')}>
              See How It Works
            </Button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="container mx-auto px-6 py-20"> */}
      {/* <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Streamlined Content Workflow</h2>
          <p className="text-xl text-muted-foreground">AI generation → Admin review → Client approval → Auto-publish</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="card-feature animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <feature.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              
            </div>
          ))}
        </div>
      </section> */}

      {/* Workflow Section - Redesigned */}
      <section id="workflow" className="container mx-auto px-6 py-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Your Content Journey</h2>
          <p className="text-xl text-muted-foreground">From AI generation to auto-publish in four simple steps</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 hover-lift shadow-lg">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-br from-primary to-accent text-secondary w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-4 flex justify-center">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {/* {index < workflowSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium ">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Empowering Brands with AI</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Post Spark, we believe every brand deserves exceptional social media content.
                Our AI-powered platform combines cutting-edge technology with human expertise
                to deliver content that truly resonates.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by social media experts and AI innovators, we're on a mission to
                democratize professional content creation and help businesses of all sizes
                build meaningful connections with their audiences.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">10k+</div>
                  <div className="text-sm text-muted-foreground">Posts Created</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-32 w-32 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">Growing Together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-20 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Content Creators</h2>
          <p className="text-xl text-muted-foreground">See what our clients have to say</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover-lift border-primary/20">
              <Quote className="h-10 w-10 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="bg-primary text-secondary w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Work</h2>
          <p className="text-xl text-muted-foreground">Showcasing success stories from brands we've helped grow</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {showcaseProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover-lift border-primary/20 h-full">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/10 flex items-center justify-center">
                      <img src={project.image} alt={project.title} className="h-auto w-full text-primary/40" />
                      {/* <Image className="h-20 w-20 text-primary/40" /> */}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-12 bg-card border-primary/20 hover:bg-primary hover:text-secondary" />
            <CarouselNext className="hidden lg:flex -right-12 bg-card border-primary/20 hover:bg-primary hover:text-secondary" />
          </Carousel>

          {/* Mobile Navigation Hint */}
          <div className="lg:hidden text-center mt-6 text-sm text-muted-foreground">
            Swipe to see more projects →
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="container mx-auto px-6 py-20"> */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          {/* <h2 className="text-4xl font-bold mb-4 text-secondary">Simple, Transparent Pricing</h2> */}
          <p className="text-xl text-muted-foreground">Choose the plan that fits your content needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={plan.name} className={`p-8 relative hover-lift ${plan.popular
              ? 'ring-2 ring-primary shadow-brand'
              : 'border border-border'
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    {/* <span className="bg-gradient-primary text-secondary px-4 py-1 rounded-full text-sm font-medium flex items-center"> */}
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {/* <h3 className="text-2xl font-bold mb-2 text-secondary">{plan.name}</h3> */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gradient-primary">{plan.price}</span>
                  {/* <span className="text-5xl font-bold text-primary">{plan.price}</span> */}
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-accent font-medium">{plan.posts}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? 'btn-hero' : 'btn-hero-outline'}`}
                onClick={() => navigate('/signup')}
              >
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="container mx-auto px-6 py-20"> */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            {/* <h2 className="text-4xl font-bold mb-4 text-secondary">Get in Touch</h2> */}
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you get started.
            </p>
          </div>
          {/* <Card className="p-8"> */}
          <Card className="p-8 border-primary/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  {/* <label className="block text-sm font-medium mb-2 text-secondary">Name</label> */}
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  {/* <label className="block text-sm font-medium mb-2 text-secondary">Email</label> */}
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                {/* <label className="block text-sm font-medium mb-2 text-secondary">Company</label> */}
                <Input placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                {/* <label className="block text-sm font-medium mb-2 text-secondary">Message</label> */}
                <Textarea placeholder="Tell us about your content needs..." rows={4} />
              </div>
              <Button className="btn-hero w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-primary text-primary-foreground"> */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          {/* <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-bold">ContentAI Pro</span> */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-7 w-7 text-primary-foreground" />
                <span className="text-xl font-bold">Post Spark</span>
              </div>
              <p className="text-primary-foreground mb-4">
                AI-powered social media content creation platform.
                Transform your social presence with intelligent automation.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-4">
                <a href="https://x.com/PostSparkAgency" target="_blank" rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground/100 p-2 rounded-lg transition-colors">
                  <img src={"/assets/images/x-social-media-white.svg"} className="h-5 w-5 opacity-80 hover:opacity-100" />
                </a>
                <a href="https://www.instagram.com/postsparkagency" target="_blank" rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground/100 p-2 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                {/* <a href="https://facebook.com/postspark" target="_blank" rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground/100 p-2 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5" />
                </a> */}
                <a href="https://www.linkedin.com/in/post-spark-957723365" target="_blank" rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground/100 p-2 rounded-lg transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('workflow')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('our-work')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Our Work</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('contact')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Contact</button></li>
                <li><button onClick={() => navigate("/accessibility")} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Accessibility</button></li>
                <li><button onClick={() => navigate('/privacy-policy')} className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Privacy Policy</button></li>
                {/* <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Accessibility</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Privacy Policy</a></li> */}
                {/* <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground/100 transition-colors">Terms of Service</a></li> */}
              </ul>
            </div>
            {/* <p className="text-primary-foreground/80">
              © 2024 ContentAI Pro. All rights reserved. */}
          </div>

          <div className="border-t border-primary-foreground/80 pt-8 text-center">
            <p className="text-primary-foreground">
              © 2025 Post Spark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;