import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number');
      statNumbers?.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        const suffix = stat.getAttribute('data-suffix') || '';
        const counter = { value: 0 };
        
        gsap.to(counter, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            stat.textContent = Math.round(counter.value) + suffix;
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 3, suffix: '', label: 'Years at Architecture School' },
    { value: 1, suffix: 'st', label: 'Real Project at Age 18' },
    { value: 1, suffix: '', label: 'Internship with Dr Liu Thai Ker' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 lg:py-32 bg-warm-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0"
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/20 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-br-lg" />

              {/* Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-card">
                <img
                  src="/thaddaeuskwok.github.io/about-portrait.jpg"
                  alt="Thaddaeus working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="animate-item text-gold font-body text-sm tracking-[0.25em] uppercase">
              About Me
            </p>

            <h2 className="animate-item font-display text-4xl lg:text-5xl text-charcoal leading-tight">
              Creating Spaces That
              <span className="text-gold"> Inspire</span>
            </h2>

            <div className="animate-item space-y-4 text-charcoal-light font-body leading-relaxed">
              <p>
                I am a fresh graduate from Singapore Polytechnic with a Diploma
                in Architecture. Since young, architecture has always fascinated
                me. This spark of interest led me to intern with renowned veteran
                Architect and Planner,{' '}
                <span className="text-charcoal font-medium">
                  Dr Liu Thai Ker
                </span>
                , where I first discovered the beauty of Urban Planning & Design.
              </p>
              <p>
                Having accomplished my first real Interior Design project at age
                18, I believe this is only the beginning. From studying the ins
                and outs of Architecture to scoring this incredible internship,
                I cannot wait to see where this design journey will lead me.
              </p>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="animate-item grid grid-cols-3 gap-6 pt-8 border-t border-warm-border"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl lg:text-4xl text-gold mb-1">
                    <span
                      className="stat-number"
                      data-target={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0{stat.suffix}
                    </span>
                  </div>
                  <p className="font-body text-xs text-charcoal-muted leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
