import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { Code2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'FareFit',
      description: 'AI-powered fitness and nutrition tracker integrating Gemini AI for meal parsing, goal generation, and calorie insights. Built for Hack Knight 2025.',
      technologies: ['React', 'Firebase', 'Firestore', 'Gemini AI', 'JavaScript'],
      features: [
        'Modular AI agents (Barry the Coach, Meal Analyzer, Goal Planner)',
        'Real-time meal parsing and calorie tracking',
        'Personalized fitness goal generation',
        'Intuitive dashboard for tracking progress',
      ],
      link: 'https://farefit.fit',
      youtube: 'https://youtube.com',
      gradient: 'from-[#8BAA91] to-[#7A9B82]',
    },
    {
      title: 'SereneScape Lite',
      description: 'AI-powered mental wellness app built in 36 hours using Next.js, Supabase, and Gemini AI for SpurHacks.',
      technologies: ['Next.js', 'Supabase', 'Gemini AI', 'TypeScript', 'Tailwind CSS'],
      features: [
        'Modular LLM agents for affirmations, meditations, and reflections',
        'Clean, emotionally-sensitive UI design',
        'Secure Firebase integration with user authentication',
        'Real-time mood tracking and insights',
      ],
      gradient: 'from-[#B47C4D] to-[#A06B3D]',
    },
    {
      title: 'Mocha',
      description: 'Personal project: Full-stack vocabulary learning app with personalized spaced repetition algorithms.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
      features: [
        'Custom spaced repetition algorithm for optimal learning',
        'JWT-based secure authentication',
        'Custom Figma mockups with responsive design',
        'Progress tracking and statistics',
      ],
      gradient: 'from-[#8BAA91] to-[#B47C4D]',
    },
    {
      title: 'BridgeCoach AI',
      description: 'Multi-agent Watsonx AI assistant guiding NYC students through FAFSA and registration. Built for IBM x CUNY Hackathon.',
      technologies: ['Watsonx', 'Python', 'NLP', 'React', 'IBM Cloud'],
      features: [
        'Intelligent prompt routing logic',
        'Conversational NLP flows for student guidance',
        'Real-world feasibility recognized by IBM mentors',
        'Multi-step form assistance with validation',
      ],
      gradient: 'from-[#7A9B82] to-[#8BAA91]',
    },
    {
      title: 'LectureAI',
      description: 'Built for BYTE Hackathon: Cross-platform desktop app that transcribes, summarizes, and organizes lectures with AI study agents.',
      technologies: ['Python', 'Flet', 'Gemini 2.0 Flash', 'Google APIs', 'Firebase Auth'],
      features: [
        'Real-time lecture transcription and summarization',
        'AI Study Buddy for interactive learning',
        'Quiz Master for knowledge testing',
        'Barry the Coach for motivation and guidance',
      ],
      gradient: 'from-[#B47C4D] to-[#8BAA91]',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="font-['Poppins'] text-4xl sm:text-5xl bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI-powered applications that demonstrate my commitment to human-centered design and technical excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Want to see more?</p>
          <a
            href="https://github.com/itsjustgiio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-['Poppins']"
          >
            <Code2 className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}