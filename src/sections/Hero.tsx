import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        greetingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' }
      )
        .fromTo(
          nameRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
          '-=0.3'
        )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' },
          '-=0.4'
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' },
          '-=0.3'
        )
        .fromTo(
          imageRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'expo.out' },
          '-=1'
        )
        .fromTo(
          lineRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.8, ease: 'expo.out' },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center bg-warm-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p
              ref={greetingRef}
              className="text-gold font-body text-sm tracking-[0.25em] uppercase mb-4"
            >
              Hello, I am
            </p>

            <h1
              ref={nameRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-4"
            >
              Thaddaeus
              <br />
              <span className="text-gold">Kwok</span>
            </h1>

            <p
              ref={titleRef}
              className="font-display text-2xl lg:text-3xl text-charcoal-light italic mb-6"
            >
              Architecture & Design
            </p>

            <p
              ref={descRef}
              className="font-body text-charcoal-muted leading-relaxed max-w-md mb-8"
            >
              Fresh graduate from Singapore Polytechnic with a passion for
              creating thoughtful spaces that inspire and connect.
            </p>

            <button
              ref={ctaRef}
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-warm-white font-body text-sm tracking-wide rounded-full hover:bg-gold transition-colors duration-300"
            >
              View My Work
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Decorative line */}
            <div
              ref={lineRef}
              className="absolute left-0 top-1/4 w-px h-32 bg-gold origin-top hidden lg:block"
            />

            <div
              ref={imageRef}
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem]"
            >
              {/* Image frame */}
              <div className="absolute -inset-3 border border-gold/30 rounded-lg" />
              <div className="absolute -inset-6 border border-gold/10 rounded-lg" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-soft">
                <img
                  src="./hero-portrait.jpg"
                  alt="Thaddaeus Kwok"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
    </section>
  );
};

export default Hero;
