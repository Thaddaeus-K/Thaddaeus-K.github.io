import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] w-full flex items-center justify-center bg-warm-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sage/5 rounded-full blur-3xl" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto py-24"
      >
        <p className="animate-item text-gold font-body text-sm tracking-[0.25em] uppercase mb-6">
          Let's Collaborate
        </p>

        <h2 className="animate-item font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
          Let's Create Something
          <span className="text-gold"> Beautiful</span>
        </h2>

        <p className="animate-item text-charcoal-muted font-body text-lg mb-10 max-w-xl mx-auto">
          Have a project in mind or just want to connect? I would love to hear about
          your ideas and explore how we can work together.
        </p>

        <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-charcoal text-warm-white font-body text-sm tracking-wide rounded-full hover:bg-gold transition-colors duration-300 flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <a
            href="mailto:thaddaeuskwok1@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 border border-warm-border text-charcoal font-body text-sm rounded-full hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Mail size={16} />
            thaddaeuskwok1@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
    </section>
  );
};

export default CTA;
