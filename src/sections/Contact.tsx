import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MapPin, Mail, Linkedin, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Singapore',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'thaddaeuskwok1@gmail.com',
    },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 lg:py-32 bg-warm-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="animate-item text-gold font-body text-sm tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="animate-item font-display text-4xl lg:text-6xl text-charcoal mb-6">
            Let's Start a Conversation
          </h2>
          <p className="animate-item text-charcoal-muted font-body max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="animate-item space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-warm-border flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-charcoal-muted font-body text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-charcoal font-body">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-item">
              <p className="text-charcoal-muted font-body text-sm mb-4">
                Follow me on
              </p>
              <div className="flex items-center gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-white border border-warm-border flex items-center justify-center text-charcoal hover:text-gold hover:border-gold transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative quote */}
            <div className="animate-item hidden lg:block pt-8">
              <div className="relative p-8 bg-white rounded-xl border border-warm-border">
                <div className="absolute -top-3 left-8 w-6 h-6 bg-white border-t border-l border-warm-border rotate-45" />
                <p className="font-display text-2xl text-charcoal italic leading-relaxed">
                  "Architecture is the thoughtful making of space."
                </p>
                <p className="text-gold font-body text-sm mt-4">
                  — Louis Kahn
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-item">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-xl border border-warm-border"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-charcoal-muted font-body text-sm mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-warm-white border border-warm-border rounded-lg text-charcoal font-body placeholder:text-charcoal-muted/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-charcoal-muted font-body text-sm mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-warm-white border border-warm-border rounded-lg text-charcoal font-body placeholder:text-charcoal-muted/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-charcoal-muted font-body text-sm mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-warm-white border border-warm-border rounded-lg text-charcoal font-body placeholder:text-charcoal-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group px-8 py-4 bg-charcoal text-warm-white font-body text-sm tracking-wide rounded-lg hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
