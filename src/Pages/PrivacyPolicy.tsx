import { useEffect } from "react";

interface PrivacyPolicyProps {
  onNavigate?: (page: 'home' | 'terms' | 'privacy') => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
    
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            Ezier respects your privacy. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <p>We may collect:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details</li>
              <li>Project or inquiry information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Technical Information</h3>
            <p>Automatically collected data may include:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>IP address</li>
              <li>Browser and device details</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Respond to inquiries</li>
              <li>Provide and manage services</li>
              <li>Send proposals or service updates</li>
              <li>Improve website and service quality</li>
            </ul>
            <p className="mt-4">
              We <strong>do not sell or rent</strong> your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Sharing of Information</h2>
            <p>Your data may be shared only:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>When required by law</li>
              <li>With trusted service providers (hosting, communication tools)</li>
              <li>To protect Ezier's legal rights</li>
            </ul>
            <p className="mt-4">All third parties are bound by confidentiality obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your data. However, no online system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for service delivery or legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for communication</li>
            </ul>
            <p className="mt-4">Requests can be made via email.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically. Continued use of our website or services indicates acceptance of changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
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
