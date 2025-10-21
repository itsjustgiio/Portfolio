import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8BAA91] to-[#B47C4D] flex items-center justify-center">
                <span className="font-['Poppins'] font-semibold text-white">GC</span>
              </div>
              <span className="font-['Poppins']">Giovanni Carrion</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building human-centered AI tools with calm precision and creative growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Poppins'] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Personal', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-['Poppins'] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/itsjustgiio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/giovannicarrion"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:giovannic684@gmail.com"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <a href="mailto:giovannic684@gmail.com" className="hover:text-primary transition-colors">
                giovannic684@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Giovanni Carrion. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Crafted with <Heart className="w-4 h-4 mx-1 text-primary fill-primary" /> and NeoSage aesthetics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}