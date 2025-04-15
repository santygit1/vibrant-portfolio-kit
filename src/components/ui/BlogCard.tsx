
import { CalendarDays, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="overflow-hidden h-48">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <Badge>{post.category}</Badge>
          <span className="text-muted-foreground text-sm flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        
        <div className="text-muted-foreground text-sm mb-2 flex items-center">
          <CalendarDays size={14} className="mr-1" />
          {post.date}
        </div>
        
        <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
        
        <div className="mt-auto pt-4">
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
