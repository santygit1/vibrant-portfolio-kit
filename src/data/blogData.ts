
import { BlogPost } from '../components/ui/BlogCard';

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a RESTful API with Node.js",
    excerpt: "Learn how to create a robust RESTful API using Node.js, Express, and MongoDB.",
    date: "April 10, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Backend",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },
  {
    id: 2,
    title: "Advanced React Patterns Every Developer Should Know",
    excerpt: "Explore advanced React patterns to write cleaner, more maintainable code.",
    date: "March 15, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Frontend",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 3,
    title: "Mastering TypeScript: Tips and Tricks",
    excerpt: "Level up your TypeScript skills with these expert tips and tricks.",
    date: "February 28, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
];

export default blogData;
