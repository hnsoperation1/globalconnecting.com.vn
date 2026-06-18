interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #072260 0%, #0B3185 60%, #CC4400 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
