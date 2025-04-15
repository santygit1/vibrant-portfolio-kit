
import { ProjectProps } from '../components/ui/ProjectCard';

const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Tailwind CSS", "Three.js"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Firebase", "Material UI"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A dashboard displaying weather information with customizable widgets.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["JavaScript", "API", "CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Blog API",
    description: "A RESTful API for blog posts with authentication and authorization.",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com",
    category: "Backend"
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description: "An algorithm-based movie recommendation system using collaborative filtering.",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["Python", "Machine Learning", "Flask"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Data Science"
  },
];

export default projectsData;
