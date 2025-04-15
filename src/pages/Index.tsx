
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';
import Resume from '../components/sections/Resume';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
