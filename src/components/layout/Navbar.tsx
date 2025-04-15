
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-bold text-gradient">Portfolio</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <Button asChild>
            <a href="#resume">Resume</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#blog" 
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild className="w-full">
              <a href="#resume" onClick={() => setIsMenuOpen(false)}>Resume</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
