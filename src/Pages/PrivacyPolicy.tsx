import { useEffect, type ReactNode } from 'react';

interface PrivacyPolicyProps {
  onNavigate?: (page: 'home' | 'terms' | 'privacy') => void;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-white/70">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
      return;
    }

    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050510]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <button type="button" onClick={handleHomeClick} className="font-display text-2xl font-bold uppercase tracking-[0.16em] text-white">
            Ezier
          </button>
          <button type="button" onClick={handleHomeClick} className="text-sm text-white/68 transition hover:text-white">
            Back to Home
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/45">Last updated: 2026</p>

        <div className="mt-10 space-y-8">
          <p className="text-lg leading-8 text-white/72">
            Ezier respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <Section title="1. Information We Collect">
            <h3 className="text-lg font-medium text-white">Personal Information</h3>
            <p>We may collect your name, email address, phone number, business details, and project inquiry information.</p>
            <h3 className="text-lg font-medium text-white">Technical Information</h3>
            <p>Automatically collected data may include IP address, browser and device details, and website usage data.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information to respond to inquiries, provide and manage services, send proposals or service updates, and improve website and service quality.</p>
            <p>We do not sell or rent your personal data.</p>
          </Section>

          <Section title="3. Sharing of Information">
            <p>Your data may be shared only when required by law, with trusted service providers such as hosting or communication tools, or to protect Ezier's legal rights.</p>
            <p>All third parties are expected to handle information confidentially.</p>
          </Section>

          <Section title="4. Data Security">
            <p>We use reasonable technical and organizational measures to protect your data. No online system can be guaranteed 100% secure.</p>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain personal data only for as long as necessary for service delivery, communication, or legal requirements.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You may request access to your data, request correction or deletion, or withdraw consent for communication. Requests can be made by email.</p>
          </Section>

          <Section title="7. Policy Updates">
            <p>This Privacy Policy may be updated periodically. Continued use of our website or services indicates acceptance of changes.</p>
          </Section>

          <Section title="8. Contact">
            <p>
              Ezier
              <br />
              Email: ezier.agency@gmail.com
              <br />
              Location: India
            </p>
          </Section>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#04040d]">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-white/50 sm:px-8">Copyright 2026 Ezier. All rights reserved.</div>
      </footer>
    </div>
  );
}