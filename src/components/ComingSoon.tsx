import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Zap, Sparkles, Bell, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when we launch.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="p-12 text-center border-primary/20 shadow-xl">
          {/* Animated Icon */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-3xl opacity-20 animate-pulse" />
            <div className="relative bg-gradient-to-br from-primary to-accent p-6 rounded-3xl inline-block">
              <Zap className="h-24 w-24 text-secondary" />
            </div>
          </div>

          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-secondary">Post Spark</h1>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-secondary">Launching Soon</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-secondary">
              Something Exciting
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Is Coming
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're working on something special that will revolutionize the way you create 
              and manage social media content. Be the first to know when we launch!
            </p>
          </div>

          {/* Countdown or Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">Fast</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">Pro</div>
              <div className="text-sm text-muted-foreground">Quality</div>
            </div>
          </div>

          {/* Email Signup */}
          <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="btn-hero whitespace-nowrap">
                <Bell className="h-4 w-4 mr-2" />
                Notify Me
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Join the waitlist and get exclusive early access
            </p>
          </form>

          {/* Visual Element */}
          <div className="mt-12 relative h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse" />
                <Sparkles className="h-32 w-32 text-primary relative" />
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-8 text-muted-foreground">
          <p>Follow us on social media for updates</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
