import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="min-h-screen relative flex items-center bg-gradient-to-br from-background to-secondary/50 pt-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5" />
        <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 stagger-animation">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Full Stack Developer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hello, I'm <span className="text-gradient">Santhosh Kumar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              I craft responsive websites and web applications that provide intuitive, pixel-perfect user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="button-hover">
                View My Projects
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
            
            <div className="flex items-center mt-12 space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 hidden md:block animate-float">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center bg-secondary rounded-full" aria-label="Scroll to About section">
        <ArrowDown size={20} />
      </a>
    </section>;
};
export default Hero;