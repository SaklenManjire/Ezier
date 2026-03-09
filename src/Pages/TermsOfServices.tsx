import { useEffect, type ReactNode } from 'react';

interface TermsOfServiceProps {
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

export default function TermsOfService({ onNavigate }: TermsOfServiceProps) {
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
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Terms and Conditions</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/45">Last updated: 2026</p>

        <div className="mt-10 space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>By accessing this website or engaging with our services, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>
          </Section>

          <Section title="2. Services">
            <p>Ezier provides digital services including website design and development, website maintenance, digital marketing support, and related consulting services.</p>
            <p>Specific service details, timelines, pricing, and deliverables are defined in proposals or written agreements shared with clients.</p>
          </Section>

          <Section title="3. Payments and Pricing">
            <p>All prices are communicated transparently before work begins. Payments must be made as agreed. Delayed payments may result in service suspension or termination. Fees paid are non-refundable unless stated otherwise in writing.</p>
          </Section>

          <Section title="4. Client Responsibilities">
            <p>Clients agree to provide accurate information and required content on time, respond promptly to approvals and feedback, and ensure provided materials do not violate third-party rights.</p>
            <p>Ezier is not responsible for delays caused by missing client communication or assets.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>Upon full payment, clients own the final delivered work unless agreed otherwise in writing. Ezier retains the right to showcase completed projects in portfolios and marketing.</p>
          </Section>

          <Section title="6. Termination">
            <p>Either party may terminate services with written notice. Ezier reserves the right to terminate services immediately in cases of non-payment, policy violations, or illegal and unethical activities.</p>
          </Section>

          <Section title="7. Disclaimer">
            <p>All services are provided on an as-is and as-available basis. Ezier does not guarantee specific business results, revenue growth, traffic, or uninterrupted services.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>Ezier shall not be liable for indirect, incidental, or consequential damages. Our maximum liability shall not exceed the amount paid for the specific service involved.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>These Terms and Conditions are governed by the laws of India.</p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>Ezier may update these Terms at any time. Continued use of our services means acceptance of the updated terms.</p>
          </Section>

          <Section title="11. Contact">
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