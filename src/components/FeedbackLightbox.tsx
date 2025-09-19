import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter 
} from "@/components/ui/dialog";
import { Upload, Send, X } from "lucide-react";

interface FeedbackLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    id: number;
    title: string;
    revisions: number;
  } | null;
}

const FeedbackLightbox = ({ isOpen, onClose, post }: FeedbackLightboxProps) => {
  const [feedback, setFeedback] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const handleSubmit = () => {
    // Handle feedback submission
    console.log("Feedback submitted:", { feedback, mediaFile, postId: post?.id });
    setFeedback("");
    setMediaFile(null);
    onClose();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMediaFile(file);
    }
  };

  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">Provide Feedback</DialogTitle>
            <Badge className="status-review">
              Revision {post.revisions + 1}
            </Badge>
          </div>
          <p className="text-muted-foreground">Post: {post.title}</p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Feedback & Changes Requested</label>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Please describe the changes you'd like to see in this post..."
              className="min-h-32"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Reference Media (Optional)</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
              {mediaFile ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-success">✓ {mediaFile.name}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setMediaFile(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div>
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload reference images or media files
                  </p>
                  <Input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="media-upload"
                  />
                  <Button 
                    variant="outline" 
                    asChild
                  >
                    <label htmlFor="media-upload" className="cursor-pointer">
                      Choose Files
                    </label>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="btn-hero"
          >
            <Send className="h-4 w-4 mr-2" />
            Submit Feedback
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackLightbox;