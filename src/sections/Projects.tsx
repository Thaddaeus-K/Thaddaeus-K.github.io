import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  type: 'Personal' | 'Academic';
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'All' | 'Personal' | 'Academic'>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Rationale Thinking Learning Centre',
      category: 'Interior Design',
      description:
        'A modern learning space designed to foster creativity and collaborative thinking.',
      image: '/project-1.jpg',
      type: 'Personal',
    },
    {
      id: 2,
      title: 'Mission Trips to Kupang',
      category: 'Video Production',
      description:
        'Documentary capturing the heartwarming community stories in West Timor.',
      image: '/project-2.jpg',
      type: 'Personal',
    },
    {
      id: 3,
      title: 'Fibonacci Cryptex',
      category: 'Parametric Design',
      description:
        'Exploring the golden ratio through computational architectural forms.',
      image: '/project-3.jpg',
      type: 'Academic',
    },
    {
      id: 4,
      title: 'Luxury Apartment Interior',
      category: 'Interior Design',
      description:
        'A sophisticated urban living space with panoramic city views.',
      image: '/project-4.jpg',
      type: 'Personal',
    },
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.type === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = gridRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 lg:py-32 bg-warm-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <p className="animate-item text-gold font-body text-sm tracking-[0.25em] uppercase mb-4">
            Portfolio
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="animate-item font-display text-4xl lg:text-6xl text-charcoal">
              Selected Works
            </h2>

            {/* Filter buttons */}
            <div className="animate-item flex items-center gap-2">
              {(['All', 'Personal', 'Academic'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 font-body text-sm rounded-full transition-all duration-300 ${
                    filter === f
                      ? 'bg-charcoal text-warm-white'
                      : 'bg-white text-charcoal-light hover:text-charcoal border border-warm-border'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group relative ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-soft hover:shadow-card transition-shadow duration-500">
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex items-end p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-warm-white">
                      <p className="font-body text-sm mb-2 opacity-80">
                        {project.category}
                      </p>
                      <p className="font-body text-sm max-w-md">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-body rounded-full mb-3 ${
                          project.type === 'Personal'
                            ? 'bg-sage/10 text-sage-dark'
                            : 'bg-gold/10 text-gold-dark'
                        }`}
                      >
                        {project.type}
                      </span>
                      <h3 className="font-display text-xl lg:text-2xl text-charcoal group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-warm-border flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                      <ArrowUpRight
                        size={18}
                        className="text-charcoal-light group-hover:text-warm-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
