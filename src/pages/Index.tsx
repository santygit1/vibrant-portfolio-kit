
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Portfolio</h1>
        <p className="text-xl text-gray-600 mb-8">Start building your amazing portfolio here!</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/blog">Visit Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
