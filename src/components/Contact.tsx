import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:giovannic684@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'giovannic684@gmail.com',
      href: 'mailto:giovannic684@gmail.com',
      color: 'text-primary',
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      value: 'itsjustgiio',
      href: 'https://discord.com/users/1146472073905053756',
      color: 'text-accent',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'itsjustgiio',
      href: 'https://github.com/itsjustgiio',
      color: 'text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'giovannicarrion',
      href: 'https://linkedin.com/in/giovannicarrion',
      color: 'text-accent',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Glendale, NY',
      href: null,
      color: 'text-primary',
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-card border-border">
              <h3 className="font-['Poppins'] text-2xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-input-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-input-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="bg-input-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8BAA91] to-[#B47C4D] hover:from-[#7A9B82] hover:to-[#A06B3D] text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h3 className="font-['Poppins'] text-2xl mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-background/50 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-background ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <div className="flex items-center gap-2">
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors font-['IBM_Plex_Mono'] text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-['IBM_Plex_Mono'] text-sm">{info.value}</p>
                        )}
                        {info.copyable && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCopy(info.value)}
                            className="h-6 px-2 text-xs hover:bg-primary/10"
                          >
                            Copy
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6 bg-card border-border">
              <h4 className="font-['Poppins'] mb-4">Quick Links</h4>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <a href="https://github.com/itsjustgiio" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent/30 hover:bg-accent/10"
                >
                  <a href="https://linkedin.com/in/giovannicarrion" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}