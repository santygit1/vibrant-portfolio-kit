
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirectTo: '/blog' } });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="grid gap-8">
          {/* Sample blog posts */}
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Blog Post Title {post}</h2>
              <p className="text-gray-500 mb-2">Published: April {post + 10}, 2025</p>
              <p className="mb-4">
                This is a sample blog post that demonstrates the layout and style of the blog section.
                Once you've implemented actual content, this placeholder will be replaced.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
