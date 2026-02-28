import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import SmoothLayout from '../components/ui/smooth-layout';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-charcoal mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold font-body hover:underline"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <SmoothLayout>
      <div className="min-h-screen bg-warm-white">

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 text-charcoal-light hover:text-gold transition-colors font-body text-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[16/9] max-h-[70vh] overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">

          {/* Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-xs font-body rounded-full ${
                project.type === 'Personal'
                  ? 'bg-sage/10 text-sage-dark'
                  : 'bg-gold/10 text-gold-dark'
              }`}>
                {project.type}
              </span>
              <span className="text-gold font-body text-sm tracking-[0.25em] uppercase">
                {project.category}
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-charcoal leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gold mb-12" />

          {/* Sections */}
          {project.sections.length > 0 ? (
            <div className="space-y-12 mb-16">
              {project.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-display text-2xl text-charcoal mb-4">
                    {section.title}
                  </h2>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-16">
              <p className="font-body text-charcoal-light leading-relaxed">
                {project.description}
              </p>
              <p className="font-body text-charcoal-muted text-sm mt-4">
                Full project writeup coming soon.
              </p>
            </div>
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl text-charcoal mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] bg-warm-cream rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="border-t border-warm-border pt-8">
            <button
              onClick={() => navigate('/')}
              className="group inline-flex items-center gap-2 text-charcoal-light hover:text-gold transition-colors font-body text-sm"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </button>
          </div>

        </div>
      </div>
    </SmoothLayout>
  );
};

export default ProjectDetail;