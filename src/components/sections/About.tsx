
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';
import SkillBadge from '../ui/SkillBadge';

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "GraphQL", 
    "Next.js", "Tailwind CSS", "Git", "Figma"
  ];
  
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications.
              I enjoy tackling complex problems and turning them into simple and elegant solutions.
              My goal is to always build products that provide pixel-perfect user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              I am proficient in JavaScript, TypeScript, React, Node.js, and other modern technologies.
              I have a strong background in both frontend and backend development, allowing me to create comprehensive solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you'll find me hiking, reading tech blogs, or exploring new coffee shops in the city.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Contact Details</h4>
                <p className="text-muted-foreground">John Doe</p>
                <p className="text-muted-foreground">San Francisco, CA</p>
                <p className="text-muted-foreground">email@example.com</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Educational Background</h4>
                <p className="text-muted-foreground">BSc Computer Science</p>
                <p className="text-muted-foreground">Stanford University</p>
                <p className="text-muted-foreground">2015-2019</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill, index) => (
                <SkillBadge key={index} name={skill} />
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Experience Highlights</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Senior Frontend Developer</h4>
                  <p className="text-muted-foreground">Tech Company Inc. • 2020-Present</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Full Stack Developer</h4>
                  <p className="text-muted-foreground">Digital Solutions Ltd. • 2018-2020</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">BSc in Computer Science</h4>
                  <p className="text-muted-foreground">Stanford University • 2015-2019</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Web Development Award</h4>
                  <p className="text-muted-foreground">Tech Conference • 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
