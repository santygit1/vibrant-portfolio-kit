
import blogData from '../../data/blogData';
import BlogCard from '../ui/BlogCard';
import { Button } from '@/components/ui/button';

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Thoughts, insights, and tutorials on web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
