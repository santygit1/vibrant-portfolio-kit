
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  category: string;
}

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-lg overflow-hidden bg-card border border-border group relative h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden h-48 relative">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {project.demoLink && (
            <Button size="sm" variant="secondary" asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-1" />
                Demo
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button size="sm" variant="secondary" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
