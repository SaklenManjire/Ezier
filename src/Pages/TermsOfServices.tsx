import { useEffect } from "react";

interface TermsOfServiceProps {
  onNavigate?: (page: 'home' | 'terms' | 'privacy') => void;
}

export default function TermsOfService({ onNavigate }: TermsOfServiceProps) {

     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button onClick={handleHomeClick} className="text-2xl font-bold text-gray-900 hover:opacity-80 transition">
            Ezier
          </button>
          <button onClick={handleHomeClick} className="text-gray-600 hover:text-gray-900 transition">
            Back to Home
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last Updated: 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website or engaging with our services, you confirm that you have read, understood, and agreed to these Terms & Conditions. These terms apply to all visitors, clients, and users of Ezier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
            <p>Ezier provides digital services including:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Website design & development</li>
              <li>Website maintenance</li>
              <li>Digital marketing & social media services</li>
              <li>Consulting and related digital solutions</li>
            </ul>
            <p className="mt-4">
              Specific service details, timelines, pricing, and deliverables are defined in proposals or written agreements shared with clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payments & Pricing</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All prices are communicated transparently before work begins.</li>
              <li>Payments must be made as per the agreed schedule.</li>
              <li>Delays in payment may result in service suspension or termination.</li>
              <li>Fees paid are non-refundable unless stated otherwise in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Provide accurate information and required content on time</li>
              <li>Respond promptly to approvals and feedback</li>
              <li>Ensure provided materials do not violate third-party rights</li>
            </ul>
            <p className="mt-4">
              Ezier is not responsible for delays caused by lack of client communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Upon full payment, clients own the final delivered work unless agreed otherwise.</li>
              <li>Ezier retains the right to showcase completed projects in portfolios and marketing.</li>
              <li>Internal tools, templates, processes, and systems remain Ezier's intellectual property.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Termination</h2>
            <p>Either party may terminate services with written notice.</p>
            <p className="mt-4">Ezier reserves the right to terminate services immediately in cases of:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Non-payment</li>
              <li>Policy violations</li>
              <li>Illegal or unethical activities</li>
            </ul>
            <p className="mt-4">All obligations before termination remain enforceable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Disclaimer</h2>
            <p>All services are provided on an "as is" and "as available" basis.</p>
            <p className="mt-4">Ezier does not guarantee:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Specific business results</li>
              <li>Revenue growth or traffic</li>
              <li>Error-free or uninterrupted services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              Ezier shall not be liable for any indirect, incidental, or consequential damages.
            </p>
            <p className="mt-4">
              Our maximum liability shall not exceed the amount paid for the specific service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
            <p>These Terms & Conditions are governed by the laws of India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              Ezier may update these Terms at any time. Continued use of services means acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact</h2>
            <p>
              <strong>Ezier</strong>
              <br />
              Email: <strong>ezier.agency@gmail.com</strong>
              <br />
              Location: India
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p>&copy; 2026 Ezier. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
