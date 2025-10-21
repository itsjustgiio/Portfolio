import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Heart, Users, Code, Dumbbell, Coffee, Sparkles } from 'lucide-react';

export function Personal() {
  const interests = [
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Active volunteer at local food shelters and community centers. I believe in giving back and making a tangible difference in people\'s lives.',
      gradient: 'from-[#8BAA91] to-[#7A9B82]',
      color: 'text-[#8BAA91]',
    },
    {
      icon: Code,
      title: 'Hackathon Enthusiast',
      description: 'Regular participant in hackathons across NYC. Nothing beats the energy of building something meaningful in 24-48 hours with a passionate team.',
      gradient: 'from-[#B47C4D] to-[#A06B3D]',
      color: 'text-[#B47C4D]',
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Tracking',
      description: 'Gym enthusiast who applies the same discipline to fitness as I do to code. I track my progress, set goals, and iterate—just like software development.',
      gradient: 'from-[#7A9B82] to-[#8BAA91]',
      color: 'text-[#7A9B82]',
    },
    {
      icon: Users,
      title: 'Social Connection',
      description: 'Value quality time with friends and building meaningful relationships. Great ideas often come from casual conversations and shared experiences.',
      gradient: 'from-[#A06B3D] to-[#B47C4D]',
      color: 'text-[#A06B3D]',
    },
    {
      icon: Coffee,
      title: 'Community Building',
      description: 'From NYPD Explorers to ACM events, I love bringing people together. Community work taught me empathy, patience, and the value of collaboration.',
      gradient: 'from-[#8BAA91] to-[#B47C4D]',
      color: 'text-[#8BAA91]',
    },
    {
      icon: Sparkles,
      title: 'Continuous Growth',
      description: 'Always learning, always improving. Whether it\'s a new framework, a fitness goal, or a way to help my community—growth is my constant.',
      gradient: 'from-[#B47C4D] to-[#8BAA91]',
      color: 'text-[#B47C4D]',
    },
  ];

  return (
    <section id="personal" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#8BAA91]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#B47C4D]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] bg-clip-text text-transparent">
            Beyond Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Life is more than just code. Here's what fuels my passion and keeps me grounded.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full group">
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${interest.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`font-['Poppins'] text-xl mb-3 ${interest.color} group-hover:scale-105 transition-transform duration-300 origin-left`}>
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300`}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote/Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20 relative overflow-hidden">
            {/* Decorative quote marks */}
            <div className="absolute top-4 left-4 text-6xl text-primary/10 font-['Poppins']">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-accent/10 font-['Poppins']">"</div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-xl mb-4 text-foreground/90 leading-relaxed">
                I believe in balanced growth—strengthening both mind and body, building meaningful connections, and using technology to uplift communities. Every line of code I write is influenced by the people I meet, the challenges I face at the gym, and the communities I serve.
              </p>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="font-['Poppins']">Giovanni Carrion</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats/Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { number: '5+', label: 'Hackathons' },
            { number: '800+', label: 'Users Supported' },
            { number: '3+', label: 'Years Volunteering' },
            { number: '∞', label: 'Growth Mindset' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <Card className="p-4 text-center bg-card border-border hover:border-primary/30 transition-all duration-300">
                <div className="font-['Poppins'] text-3xl bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
