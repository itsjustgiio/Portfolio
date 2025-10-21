import { motion } from 'motion/react';
import { GraduationCap, MapPin, Code2, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  const skills = {
    languages: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'C++'],
    frameworks: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Figma', 'Firebase', 'Supabase', 'VS Code'],
    ai: ['Gemini AI', 'Watsonx', 'Ollama', 'Claude'],
  };

  const expertise = [
    'Multi-Agent AI Systems',
    'Prompt Engineering',
    'JWT Authentication',
    'RESTful APIs',
    'Row Level Security',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calm precision. Structured creativity. Growth through discipline.
          </p>
        </motion.div>

        {/* Bio Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] mb-2">Education</h3>
                  <p className="text-muted-foreground mb-1">
                    B.S. Computer Science
                  </p>
                  <p>City College of New York</p>
                  <p className="text-sm text-muted-foreground">Expected May 2027 • GPA 3.5</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-['Poppins'] mb-2">Location</h3>
                  <p className="text-muted-foreground mb-1">Based in</p>
                  <p>Glendale, New York</p>
                  <p className="text-sm text-muted-foreground">Open to remote opportunities</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-['Poppins'] text-2xl mb-4">Philosophy & Approach</h3>
                <p className="text-muted-foreground mb-3">
                  I'm a gym enthusiast and self-tracker who merges data with discipline. My approach to development mirrors my fitness philosophy: consistent iteration, measurable progress, and sustainable growth.
                </p>
                <p className="text-muted-foreground">
                  I'm deeply focused on AI ethics and human-AI collaboration, creating tools that make learning and health fun, not forced. Every project is an opportunity to blend technical precision with genuine care for the user experience.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <h3 className="font-['Poppins'] text-2xl">Technical Skills</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <h4 className="font-['Poppins'] mb-4 text-primary">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 font-['IBM_Plex_Mono']"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="font-['Poppins'] mb-4 text-accent">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 font-['IBM_Plex_Mono']"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="font-['Poppins'] mb-4 text-primary">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 font-['IBM_Plex_Mono']"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="font-['Poppins'] mb-4 text-accent">AI Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 font-['IBM_Plex_Mono']"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h4 className="font-['Poppins'] mb-4">Areas of Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <Badge
                  key={item}
                  className="bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] text-white border-0"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
