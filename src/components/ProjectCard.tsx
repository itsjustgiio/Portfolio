import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Youtube } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  youtube?: string;
  gradient?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  features,
  link,
  github,
  youtube,
  gradient = 'from-[#8BAA91] to-[#B47C4D]',
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative p-6 flex flex-col flex-grow">
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-['Poppins'] text-2xl mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-4 flex-grow">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/50 border-border font-['IBM_Plex_Mono'] text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {link && (
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-[#8BAA91] to-[#7A9B82] hover:from-[#7A9B82] hover:to-[#8BAA91] text-white"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}
            {github && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {youtube && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-accent/30 hover:bg-accent/10"
              >
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`}></div>
      </Card>
    </motion.div>
  );
}
