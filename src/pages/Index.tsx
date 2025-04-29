
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">John Doe</h1>
          <p className="text-2xl text-gray-600 mb-10">Full Stack Developer & UI/UX Designer</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-300 rounded-full w-56 h-56 mx-auto"></div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                I'm a passionate full-stack developer with expertise in React.js, Node.js, and modern web technologies.
                With over 5 years of experience building web applications, I focus on creating intuitive and performant
                user experiences.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-6">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "TypeScript", "Node.js", "TailwindCSS", "MongoDB", "GraphQL", "UI/UX Design"].map((skill) => (
                  <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>React.js, TailwindCSS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project, what technologies were used, and what problems were solved.
                  </p>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[1, 2].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <CardTitle>Blog Post Title {post}</CardTitle>
                  <CardDescription>April {post + 15}, 2025 · 5 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A preview of the blog post content. Click to read more about this interesting topic.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Your message..." 
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4">© 2025 John Doe. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-300">GitHub</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <Link to="/blog" className="hover:text-gray-300">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
