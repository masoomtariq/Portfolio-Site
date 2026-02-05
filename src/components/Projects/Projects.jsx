import { useEffect, useRef } from 'react';
import { BookOpen, Bot, Mic, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Tilt from '../ui/Tilt';
import { animate, stagger } from 'animejs';

const projects = [
  {
    title: 'Documentation Book With Chatbot',
    description: 'Developed an interactive textbook platform for robotics using Docusaurus and FastAPI. Integrated a RAG-based AI chatbot using Google Gemini and Qdrant to provide real-time, context-aware learning assistance and semantic search. Built a seamless React interface for conversational tutoring and automated content explanations.',
    icons: [BookOpen, Bot],
    tags: ['FastAPI', 'Docusaurus', 'Google Gemini', 'Qdrant'],
    color: '#10A37F',
    features: ['RAG Chatbot', 'Semantic Search', 'Interactive Learning', 'Real-time Assistance'],
    github: 'https://github.com/masoomtariq/Hakathon_project',
    live: 'https://robotics-liart.vercel.app',
  },
  {
    title: 'AI-Powered Document Assistant',
    description: 'Developed a RAG-based application for interactive querying of PDFs and text files using LangChain and Google Generative AI embeddings. Built a multi-agent workflow with LangGraph to intelligently route queries based on context relevance and document summaries. Integrated MultiQueryRetriever and hybrid model execution (Gemini & LLaMA) to deliver high-accuracy, context-aware responses while tracking performance via LangSmith.',
    icons: [Bot],
    tags: ['LangChain', 'LangGraph', 'Google Gemini', 'Groq Llama'],
    color: '#8B5CF6',
    features: ['Multi-Agent Workflow', 'PDF Querying', 'Hybrid AI Models', 'LangSmith Tracking'],
    github: 'https://github.com/masoomtariq/Document_Q-A',
    live: '#',
  },
  {
    title: 'Urdu Voice Chatbot',
    description: 'Built a bilingual voice chatbot application enabling Urdu users to interact via voice input and audio responses. Integrated Google Gemini for context-aware responses, real-time speech recognition for Urdu language input, and gTTS for natural voice synthesis. Implemented conversation history tracking with comprehensive error handling for enhanced user experience.',
    icons: [Mic],
    tags: ['Streamlit', 'Google Generative AI', 'Speech Recognition'],
    color: '#F59E0B',
    features: ['Voice Input/Output', 'Urdu Language', 'Context-Aware AI', 'Conversation History'],
    github: 'https://github.com/masoomtariq/Urdu_Bot',
    live: '#',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(sectionRef.current.querySelectorAll('.project-anim'), {
              opacity: [0, 1],
              translateY: ['50px', '0px'],
              delay: stagger(200),
              easing: 'easeOutQuad',
              duration: 800,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16 project-anim text-center">
          <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4 tracking-widest uppercase">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-muted-foreground">Projects</span></h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of projects that showcase my expertise in AI integration, backend architecture, and full-stack development.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-anim">
              <Tilt className="h-full">
                <Card 
                  style={{ '--project-color': project.color }}
                  className="h-full bg-background/80 backdrop-blur-sm border-border/30 hover:border-[var(--project-color)]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--project-color)]/10 group overflow-hidden relative"
                >
                  {/* Top Gradient Line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                  />
                  
                  {/* Gradient Glow */}
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{ background: project.color }}
                  />
                  
                  <CardHeader className="relative z-10 pb-4">
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center gap-1 mb-6 transition-all duration-500 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                        border: `1px solid ${project.color}30`
                      }}
                    >
                      {project.icons.map((Icon, i) => (
                        <Icon key={i} size={project.icons.length > 1 ? 20 : 28} style={{ color: project.color }} />
                      ))}
                    </div>
                    
                    <CardTitle className="text-xl font-bold group-hover:text-[var(--project-color)] transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: project.color }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs bg-secondary/50 hover:bg-[var(--project-color)]/10 hover:text-[var(--project-color)] transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 rounded-full border-border/50 hover:border-[var(--project-color)]/50 hover:bg-[var(--project-color)]/5 group/btn"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        size="sm" 
                        className="flex-1 rounded-full group/btn"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                        }}
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ArrowUpRight size={16} className="ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </div>
          ))}
        </div>
        
        {/* View All Projects Link */}
        <div className="mt-16 text-center project-anim">
          <a 
            href="https://github.com/masoomtariq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all projects on GitHub
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
