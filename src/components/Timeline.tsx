import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  index: number;
}

function TimelineItem({ company, role, period, location, description, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-center mb-8">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>

        {/* Content */}
        <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
          <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <div className="flex items-start gap-4 md:flex-row-reverse md:justify-end">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                  <Badge className="bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] text-white border-0">
                    {period}
                  </Badge>
                </div>
                <h3 className="font-['Poppins'] text-xl mb-1">{role}</h3>
                <p className="text-primary mb-1">{company}</p>
                <p className="text-sm text-muted-foreground mb-4">{location}</p>
                <ul className="space-y-2">
                  {description.map((item, i) => (
                    <li key={i} className="flex items-start md:justify-end md:text-right">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${isEven ? 'md:order-2 md:ml-2 mr-2' : 'mr-2 md:mr-0 md:ml-2'}`}></span>
                      <span className="text-sm text-muted-foreground flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Center Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#8BAA91] to-[#B47C4D] border-4 border-background shadow-lg"></div>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const experiences = [
    {
      company: 'World Merit',
      role: 'AI Agent Systems Intern',
      period: 'Jul–Sep 2025',
      location: 'Remote',
      description: [
        'Built a co-intelligent planning assistant for 30K+ users using multi-agent logic',
        'Implemented ethical AI prompts and conversation flows',
        'Collaborated with international team on AI system architecture',
      ],
    },
    {
      company: 'Operation Adulting',
      role: 'Web Development Intern',
      period: 'Jun–Aug 2023',
      location: 'Remote',
      description: [
        'Contributed to website structure using HTML/CSS',
        'Worked in a remote team environment with agile methodologies',
        'Enhanced user interface components for better accessibility',
      ],
    },
    {
      company: 'Mouse Squad',
      role: 'Level 1 Technician',
      period: 'Sep 2021–Jun 2023',
      location: 'On-site',
      description: [
        'Led tech support for 800+ users across multiple locations',
        'Managed diagnostics and repair workflows efficiently',
        'Trained new technicians on troubleshooting procedures',
      ],
    },
    {
      company: 'SYEP',
      role: 'Camp Counselor',
      period: '2022 & 2024',
      location: 'New York, NY',
      description: [
        'Organized community youth events and activities',
        'Developed leadership and communication skills',
        'Mentored youth participants in team-building exercises',
      ],
    },
    {
      company: 'Ascension Church',
      role: 'Childcare Provider',
      period: 'Apr 2022–Aug 2023',
      location: 'New York, NY',
      description: [
        'Provided childcare and logistical support during post-pandemic transitions',
        'Ensured safe and engaging environment for children',
        'Coordinated with parents and church staff for smooth operations',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="font-['Poppins'] text-4xl sm:text-5xl bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning, from tech support to AI systems development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} index={index} />
          ))}
        </div>

        {/* Community & Volunteer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="font-['Poppins'] text-2xl mb-6 text-center">Community & Volunteer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-['Poppins'] mb-2">NYPD Explorers</h4>
                  <p className="text-sm text-muted-foreground mb-2">2019–2022</p>
                  <p className="text-muted-foreground">
                    Community cleanups, cancer fundraising, and food drives supporting local neighborhoods.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-['Poppins'] mb-2">ACM Student Member</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023–Present</p>
                  <p className="text-muted-foreground">
                    Active participation in local hackathons, workshops, and computer science community events.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
