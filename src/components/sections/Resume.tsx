
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-secondary/10">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Resume</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Download my resume to learn more about my experience and skills.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center">
            <div className="mb-8">
              <div className="bg-primary/10 p-6 rounded-full text-primary inline-flex mb-4">
                <FileText size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Resume.pdf</h3>
              <p className="text-muted-foreground text-center">
                Last updated: April 15, 2023
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
              <Button size="lg" asChild>
                <a href="#">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="#">
                  <FileText className="mr-2 h-5 w-5" />
                  View Online
                </a>
              </Button>
            </div>
            
            <div className="mt-10 w-full">
              <h4 className="font-semibold text-lg mb-4 text-center">Tailored Resume Services</h4>
              <p className="text-muted-foreground mb-6 text-center">
                Need a tailored resume for a specific job description? I can customize my resume to highlight relevant skills and experience.
              </p>
              
              <div className="bg-secondary/50 rounded-lg p-6">
                <h5 className="font-semibold mb-2">Contact me for a custom resume</h5>
                <p className="text-muted-foreground mb-4">
                  Send me the job description and I'll create a tailored resume that emphasizes the most relevant skills and experience for the position.
                </p>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <a href="#contact">Request Custom Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
