import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Calendar, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook,
  Clock,
  AlertCircle
} from "lucide-react";

interface PostDetailsLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    id: number;
    title: string;
    status: string;
    scheduledDate: string;
    platform: string;
    content?: string;
    media?: string[];
  } | null;
}

const PostDetailsLightbox = ({ isOpen, onClose, post }: PostDetailsLightboxProps) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
      case 'x':
        return <Twitter className="h-5 w-5" />;
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getPlatformStyle = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return 'border-l-4 border-l-pink-500 bg-gradient-to-r from-pink-50 to-purple-50';
      case 'linkedin':
        return 'border-l-4 border-l-blue-600 bg-gradient-to-r from-blue-50 to-blue-50';
      case 'twitter':
      case 'x':
        return 'border-l-4 border-l-sky-500 bg-gradient-to-r from-sky-50 to-sky-50';
      case 'facebook':
        return 'border-l-4 border-l-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50';
      default:
        return 'border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-accent/10';
    }
  };

  const getStatusMessage = () => {
    if (post?.status === 'review') {
      return (
        <div className="flex items-center gap-2 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <AlertCircle className="h-5 w-5 text-warning" />
          <span className="text-warning font-medium">Post is currently under review</span>
        </div>
      );
    }
    return null;
  };

  if (!post) return null;

  // Mock AI-generated content
  const aiContent = {
    instagram: "🌟 Discover the future with our innovative solutions! ✨\n\nTransform your workflow and boost productivity like never before. Join thousands of satisfied customers who've already made the switch.\n\n#Innovation #Productivity #TechSolutions #FutureIsNow",
    linkedin: "Exciting news! We're revolutionizing how businesses approach digital transformation.\n\nOur latest platform delivers:\n• 40% increased efficiency\n• Seamless integration\n• Enhanced security protocols\n\nReady to transform your operations? Let's connect and discuss how we can help your business thrive in the digital age.",
    twitter: "🚀 Game-changer alert!\n\nOur new platform is helping businesses achieve 40% more efficiency. The future of work is here!\n\n#DigitalTransformation #Efficiency #Innovation",
    facebook: "We're thrilled to share how our innovative platform is transforming businesses worldwide! 🌍\n\nFrom small startups to enterprise companies, our solution is helping teams work smarter, not harder. See real results with improved efficiency and seamless collaboration.\n\nInterested in learning more? Drop us a message!"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">{post.title}</DialogTitle>
            <div className="flex items-center gap-2">
              {getPlatformIcon(post.platform)}
              <span className="font-medium">{post.platform}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Scheduled for {post.scheduledDate}</span>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {getStatusMessage()}

          <div>
            <h3 className="font-semibold mb-4">AI-Generated Content Preview</h3>
            <Card className={`p-6 ${getPlatformStyle(post.platform)}`}>
              <div className="flex items-center gap-2 mb-4">
                {getPlatformIcon(post.platform)}
                <span className="font-medium text-sm">{post.platform} Post</span>
              </div>
              <div className="whitespace-pre-line text-sm leading-relaxed">
                {aiContent[post.platform.toLowerCase() as keyof typeof aiContent] || 
                 "AI-generated content for this platform will appear here..."}
              </div>
              
              {/* Mock media placeholder */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Generated Image 1</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Generated Image 2</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-medium mb-2">Posting Schedule</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Date: {post.scheduledDate}</div>
                <div>Time: 9:00 AM EST</div>
                <div>Timezone: Eastern Standard Time</div>
              </div>
            </Card>
            
            <Card className="p-4">
              <h4 className="font-medium mb-2">Content Metrics</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Character count: 157/280</div>
                <div>Hashtags: 4</div>
                <div>Estimated reach: 2.5K-5K</div>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostDetailsLightbox;