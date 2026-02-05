import { Github, Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { SiHuggingface } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter group">
            M. Masoom Tariq<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">.</span>
          </a>
          
          {/* Social Links */}
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { icon: Github, href: "https://github.com/masoomtariq", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/masoomtariq/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/mmasoomtariq", label: "Twitter" },
              { icon: Youtube, href: "https://www.youtube.com/@MasoomTariq-w1w", label: "YouTube" },
              { icon: Instagram, href: "https://www.instagram.com/malik66206/", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/masoom.tariq.5/", label: "Facebook" },
              { icon: SiHuggingface, href: "https://huggingface.co/masoomtariq", label: "Hugging Face" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
