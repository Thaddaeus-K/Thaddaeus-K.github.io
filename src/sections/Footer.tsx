import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full py-16 bg-warm-white border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-display text-5xl text-charcoal hover:text-gold transition-colors mb-8"
          >
            TK.
          </button>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8 mb-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-charcoal-light font-body text-sm hover:text-charcoal transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-16 h-px bg-warm-border mb-10" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-charcoal-muted font-body text-sm">
            <p>© {currentYear} Thaddaeus Kwok. All rights reserved.</p>
            <span className="hidden sm:block">·</span>
            <p>Diploma in Architecture, Singapore Polytechnic</p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-charcoal text-warm-white rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300 shadow-soft z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
