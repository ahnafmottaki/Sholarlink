import { GraduationCap, Heart, HeartCrack, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col ">
            <a className="flex items-center gap-2 font-semibold text-xl mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                ScholarLink
              </span>
            </a>
            <p className="text-sm text-muted-foreground text-left ">
              Connecting students with their future, one application at a time.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:mx-auto">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Connect With Us Section */}
          <div className="md:mx-auto">
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@scholarlink.com</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                >
                  <HeartCrack className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                >
                  <HeartCrack className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ScholarLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
