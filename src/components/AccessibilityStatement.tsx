import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">Accessibility Statement</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment</h2>
            <p>
              Post Spark is committed to ensuring digital accessibility for people with disabilities. We are 
              continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Conformance Status</h2>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. 
              These guidelines explain how to make web content more accessible for people with disabilities and 
              user-friendly for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Accessibility Features</h2>
            <p className="mb-4">Our platform includes the following accessibility features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Clear and consistent navigation</li>
              <li>Sufficient color contrast ratios</li>
              <li>Resizable text without loss of functionality</li>
              <li>Alternative text for images</li>
              <li>Semantic HTML markup</li>
              <li>Focus indicators for interactive elements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Known Limitations</h2>
            <p>
              Despite our best efforts to ensure accessibility, there may be some limitations. We are actively 
              working to identify and address these issues. If you encounter any accessibility barriers, please 
              let us know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Assistive Technologies</h2>
            <p className="mb-4">Post Spark is designed to be compatible with the following assistive technologies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Technical Specifications</h2>
            <p>
              The accessibility of Post Spark relies on the following technologies to work with the particular 
              combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ARIA (Accessible Rich Internet Applications)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Feedback and Contact</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of Post Spark. Please let us know if you encounter 
              accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: accessibility@postspark.com</li>
              <li>We aim to respond to accessibility feedback within 5 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Ongoing Efforts</h2>
            <p>
              We are committed to continuous improvement and regularly review our platform for accessibility 
              issues. We conduct periodic accessibility audits and work with users with disabilities to ensure 
              our platform meets their needs.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Last Updated: October 24, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;