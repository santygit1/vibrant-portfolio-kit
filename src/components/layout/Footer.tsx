
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              A showcase of my skills, projects, and professional journey.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#contact" 
                className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
