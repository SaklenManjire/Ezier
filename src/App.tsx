import { useEffect, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  RefreshCw,
  Send,
  Shield,
  Smartphone,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfServices';

type Page = 'home' | 'terms' | 'privacy';

type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  benefit: string;
  icon: typeof Smartphone;
  points: string[];
};

const services: Service[] = [
  {
    id: 'apps',
    title: 'Custom Mobile Apps',
    summary:
      'Native and cross-platform apps that keep your customers engaged and coming back.',
    detail:
      'We build focused mobile products with seamless flows, clear UX, and the features customers actually use. Push notifications, loyalty journeys, and clean performance help your business stay present after the first sale.',
    benefit: 'Increase customer lifetime value',
    icon: Smartphone,
    points: [
      'Native or cross-platform development based on your budget and goal',
      'Push notifications and retention flows for repeat engagement',
      'Loyalty, booking, ordering, or member features built around your use case',
    ],
  },
  {
    id: 'websites',
    title: 'High-Converting Websites',
    summary:
      'Websites designed for one purpose: to turn visitors into customers.',
    detail:
      'We plan every section around clarity, trust, and action. Fast loading pages, strong mobile experience, and clear call-to-action placement help your website work as a business tool, not just a brochure.',
    benefit: 'Generate more leads and sales',
    icon: Globe,
    points: [
      'Landing pages and websites built around your real conversion goal',
      'Mobile-first layouts, fast performance, and technical polish',
      'Clear messaging structure that helps visitors understand and contact you quickly',
    ],
  },
  {
    id: 'design',
    title: 'Clean UI/UX Design',
    summary:
      'User experience that guides customers to take action.',
    detail:
      'We remove friction. Intuitive navigation, clear hierarchy, and confident interface design make the experience feel easy and trustworthy from the first click to the final action.',
    benefit: 'Higher conversions, lower bounce rates',
    icon: Palette,
    points: [
      'User flows and layouts that support decision-making',
      'Interface design that feels modern, clean, and easy to trust',
      'Design systems and components that keep your product consistent',
    ],
  },
  {
    id: 'support',
    title: 'Maintenance & Support',
    summary:
      'Your digital asset is a long-term investment. We keep it updated, secure, and optimized.',
    detail:
      'Launching is not the end. We stay available for improvements, fixes, content updates, and performance checks so your website or app keeps doing its job without becoming outdated or fragile.',
    benefit: 'Peace of mind, ongoing performance',
    icon: Shield,
    points: [
      'Updates, fixes, and careful post-launch support',
      'Security, monitoring, and performance improvements over time',
      'A reliable point of contact instead of being left alone after launch',
    ],
  },
];

const navItems = [
  { label: 'Services', section: 'services' },
  { label: 'Approach', section: 'approach' },
  { label: 'Process', section: 'process' },
  { label: 'Contact', section: 'contact' },
];

const contactEmail = 'ezier.agency@gmail.com';

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '').toLowerCase();

  if (hash === 'terms') {
    return 'terms';
  }

  if (hash === 'privacy') {
    return 'privacy';
  }

  return 'home';
}

function Navbar({ onSectionClick }: { onSectionClick: (section: string) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section: string) => {
    setOpen(false);
    onSectionClick(section);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-[#050510]/88 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <button
          type="button"
          onClick={() => handleClick('home')}
          className="flex items-center gap-3 text-left"
        >
          <span>
            <span className="block font-display text-xl font-bold tracking-[0.2em] text-white">EZIER</span>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/45">Web and product agency</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.section}
              type="button"
              onClick={() => handleClick(item.section)}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => handleClick('contact')}
            className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#050510] transition hover:scale-[1.02]"
          >
            Start a project
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-b border-white/10 bg-[#050510]/96 px-5 pb-5 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => handleClick(item.section)}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left text-sm text-white/80"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050510] px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,79,255,0.22),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(0,163,255,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_35%)]" />
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-x-0 bottom-0 top-[38%] border-t border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Honest design and development for businesses that need clients, not agency hype.
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Beautiful websites and apps that make visitors feel ready to trust you.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              We are an early-stage agency, so we keep our promise simple: clear thinking, clean execution,
              strong UI, and digital experiences built to help you win real clients.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#050510] transition hover:scale-[1.02]"
            >
              Send your brief
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Talk about your website
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-16 overflow-hidden border-t border-white/10 pt-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <p className="max-w-xl text-sm uppercase tracking-[0.26em] text-white/45">
                Built to engage, explain, and convert.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  'Clear positioning so a client understands your value fast',
                  'Motion and polish that make your work feel premium',
                  'Contact flows designed to turn interest into inquiries',
                ].map((item) => (
                  <div key={item} className="border-t border-white/10 pt-4 text-sm leading-7 text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative ml-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-white/45">Client-first layout</span>
              </div>

              <div className="space-y-4">
                <div className="h-44 rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(97,84,255,0.55),rgba(7,7,20,0.4)_52%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-6">
                  <div className="max-w-xs space-y-3">
                    <div className="h-3 w-24 rounded-full bg-white/35" />
                    <div className="h-8 w-full rounded-full bg-white/18" />
                    <div className="h-3 w-4/5 rounded-full bg-white/18" />
                    <div className="h-10 w-36 rounded-full bg-white" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4 text-sm text-white/70">
                    Better structure, cleaner story, stronger CTA placement.
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4 text-sm text-white/70">
                    A website that looks strong and helps a client feel safe reaching out.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="bg-[#050510] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/45">Services</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            The work we do best right now.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            No fake full-service claims. We focus on the digital work that helps a business look better,
            feel more trustworthy, and convert more of the attention it already gets.
          </p>
          <div className="mt-10 space-y-3">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeService.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service)}
                  className={`flex w-full items-start justify-between gap-4 border-t px-0 py-5 text-left transition ${
                    isActive ? 'border-white text-white' : 'border-white/10 text-white/58 hover:text-white/80'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`mt-1 rounded-2xl border p-3 ${isActive ? 'border-white/14 bg-white/8' : 'border-white/8 bg-white/4'}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-lg font-medium">{service.title}</div>
                      <div className="mt-2 max-w-md text-sm leading-7 text-white/55">{service.summary}</div>
                    </div>
                  </div>
                  <ChevronRight className={`mt-1 h-5 w-5 transition ${isActive ? 'translate-x-1 text-white' : 'text-white/35'}`} />
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-white/45">Selected service</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{activeService.title}</h3>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                  {activeService.benefit}
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{activeService.detail}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {activeService.points.map((point) => (
                  <div key={point} className="flex gap-3 border-t border-white/10 pt-4 text-sm leading-7 text-white/72">
                    <CheckCircle className="mt-1 h-4 w-4 flex-none text-white" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="border-y border-white/8 bg-[#060612] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/45">Approach</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            What clients get from us is clarity.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-10 sm:grid-cols-2"
        >
          {[
            {
              icon: Target,
              title: 'Real positioning',
              copy: 'We shape the story so a visitor understands who you help, what you do, and why they should trust you.',
            },
            {
              icon: Zap,
              title: 'Intentional motion',
              copy: 'Animation is used to support hierarchy and polish, not distract from your message or slow the experience down.',
            },
            {
              icon: Users,
              title: 'Honest communication',
              copy: 'We do not overpromise. If something needs more time, more budget, or more testing, we will say that clearly.',
            },
            {
              icon: Shield,
              title: 'Launch with support',
              copy: 'You do not get dropped after delivery. We stay available for fixes, updates, and practical next steps.',
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border-t border-white/10 pt-5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-white/66">{item.copy}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[#050510] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/45">Process</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            A simple process that keeps the work moving.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {[
            {
              step: '01',
              title: 'Understand the goal',
              copy: 'We learn what you sell, who you want to reach, and what the website or app needs to achieve.',
            },
            {
              step: '02',
              title: 'Shape the structure',
              copy: 'We plan content, layout, and user flow so every section has a clear role in conversion.',
            },
            {
              step: '03',
              title: 'Design and build',
              copy: 'We create the interface, motion, and responsive experience with a sharp focus on quality.',
            },
            {
              step: '04',
              title: 'Launch and refine',
              copy: 'We help you go live, review feedback, and support the next improvements after launch.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-t border-white/10 pt-5"
            >
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/45">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-white/66">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice('');
    setSubmitState('sending');

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service || 'Not selected',
      budget: formData.budget || 'Not shared',
      message: formData.message,
      to_email: contactEmail,
    };

    try {
      if (!serviceId || !templateId || !publicKey) {
        const subject = encodeURIComponent(`New project inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Service: ${formData.service || 'Not selected'}`,
            `Budget: ${formData.budget || 'Not shared'}`,
            '',
            'Project details:',
            formData.message,
          ].join('\n'),
        );

        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        setSubmitState('idle');
        setNotice('EmailJS keys are not configured yet, so we opened your email app with the message pre-filled.');
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      setSubmitState('success');
    } catch {
      setSubmitState('error');
      setNotice(`Something went wrong. Please email us directly at ${contactEmail}.`);
    }
  };

  return (
    <section id="contact" className="border-t border-white/8 bg-[#060612] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/45">Contact</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Tell us what you want to build.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
            If the project fits our skill set, we will tell you clearly. If something needs a larger team or a
            different scope, we will tell you that clearly too.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
              { icon: Phone, label: 'Reply speed', value: 'Usually within 24 hours', href: '#' },
              { icon: MapPin, label: 'Location', value: 'India, working worldwide', href: '#' },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-start gap-4 border-t border-white/10 pt-5">
                  <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-white/40">{item.label}</div>
                    {item.href === '#' ? (
                      <p className="mt-2 text-base text-white/80">{item.value}</p>
                    ) : (
                      <a href={item.href} className="mt-2 inline-block text-base text-white transition hover:text-white/70">
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10"
        >
          {submitState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex min-h-[420px] flex-col items-start justify-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/12 text-emerald-300">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white">Message sent successfully.</h3>
              <p className="mt-4 max-w-lg text-base leading-8 text-white/68">
                Thank you for reaching out. We will review your brief and reply with a clear next step.
              </p>
              <button
                type="button"
                onClick={() => setSubmitState('idle')}
                className="mt-8 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/6"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-white/76">
                  Name
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm text-white/76">
                  Email
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
                    placeholder="you@business.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-white/76">
                  Service
                  <select
                    value={formData.service}
                    onChange={(event) => setFormData({ ...formData, service: event.target.value })}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  >
                    <option value="" className="bg-[#0b0b17]">Choose a service</option>
                    <option value="Custom Mobile Apps" className="bg-[#0b0b17]">Custom Mobile Apps</option>
                    <option value="High-Converting Websites" className="bg-[#0b0b17]">High-Converting Websites</option>
                    <option value="Clean UI/UX Design" className="bg-[#0b0b17]">Clean UI/UX Design</option>
                    <option value="Maintenance & Support" className="bg-[#0b0b17]">Maintenance & Support</option>
                  </select>
                </label>
                <label className="block text-sm text-white/76">
                  Budget
                  <select
                    value={formData.budget}
                    onChange={(event) => setFormData({ ...formData, budget: event.target.value })}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  >
                    <option value="" className="bg-[#0b0b17]">Choose a range</option>
                    <option value="Under $500" className="bg-[#0b0b17]">Under $500</option>
                    <option value="$500 - $1,500" className="bg-[#0b0b17]">$500 - $1,500</option>
                    <option value="$1,500 - $3,000" className="bg-[#0b0b17]">$1,500 - $3,000</option>
                    <option value="$3,000+" className="bg-[#0b0b17]">$3,000+</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm text-white/76">
                Project details
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  className="mt-2 w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  placeholder="What are you building, who is it for, and what result do you want from it?"
                />
              </label>

              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-[#050510] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === 'sending' ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Sending message
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {notice ? (
                <p className={`text-sm leading-7 ${submitState === 'error' ? 'text-rose-300' : 'text-amber-200'}`}>
                  {notice}
                </p>
              ) : null}

              <p className="text-sm leading-7 text-white/48">
                EmailJS is wired in this form. Add your EmailJS keys to your Vite environment to send messages directly from the website.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#050510] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/8 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-display text-2xl font-bold uppercase tracking-[0.18em] text-white">EZIER</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/52">
            A small agency focused on websites, apps, and design systems that help businesses look stronger and convert better.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-white/58">
          <button type="button" onClick={() => onNavigate('privacy')} className="transition hover:text-white">
            Privacy Policy
          </button>
          <button type="button" onClick={() => onNavigate('terms')} className="transition hover:text-white">
            Terms of Service
          </button>
          <a href={`mailto:${contactEmail}`} className="transition hover:text-white">
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#050510] text-white">
      <Navbar onSectionClick={scrollToSection} />
      <main>
        <Hero onContactClick={() => scrollToSection('contact')} />
        <ServicesSection />
        <ApproachSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    const syncRoute = () => setPage(getPageFromHash());

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const handleNavigate = (nextPage: Page) => {
    if (nextPage === 'home') {
      window.location.hash = 'home';
      return;
    }

    window.location.hash = nextPage;
  };

  if (page === 'privacy') {
    return <PrivacyPolicy onNavigate={handleNavigate} />;
  }

  if (page === 'terms') {
    return <TermsOfService onNavigate={handleNavigate} />;
  }

  return <HomePage onNavigate={handleNavigate} />;
}
