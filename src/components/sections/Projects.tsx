
import { useState } from 'react';
import projectsData from '../../data/projectsData';
import ProjectCard from '../ui/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Data Science'];
  
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Explore my recent projects and discover the problems I've solved.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
