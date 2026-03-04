import { useState } from 'react';
import emailjs from "@emailjs/browser";

interface AppProps {
  onNavigate?: (page: 'home' | 'terms' | 'privacy') => void;
}

const App = ({ onNavigate }: AppProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    project: formData.project
  };

  emailjs
    .send(
      "service_uu4uyob",
      "template_8wel65k",
      templateParams,
      "QJiDNvg8RqWrNzp5n"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", project: "" });
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error);
      }
    );
};
  const portfolioItems = [
    {
      title: "Vishesh Aushadhi – Natural Fungal Care Solution",
      problem:
        "The brand lacked an online presence and customers were unaware of its natural, herbal-based permanent fungal infection solution. There was no digital platform to educate users about product benefits, ingredients, and safe usage.",
      solution:
        "Built a modern product website with detailed ingredient breakdown, benefits section, customer testimonials, FAQ section, and an order inquiry form with validation. Integrated WhatsApp ordering and promotional banners to increase direct conversions.",
      result:
        "300% increase in online inquiries within 3 months and strong brand trust built through educational content and transparent ingredient showcase.",
      image:
        "https://visheshcream.in/uploads/Screenshot%20(164).png",
    }
  ];

  const testimonials = [
    {
      name: "Mohammad Yusuf Shaikh",
      role: "Founder, Vishesh Cream",
      content:
        "Working with the development team completely transformed our brand presence. Before the website, we relied only on offline sales. Now customers understand our natural fungal care solution, trust our ingredients, and reach out directly through online inquiries. The digital platform helped us build credibility and scale faster than we expected.",
      image:
        "https://res.cloudinary.com/dze5u38e8/image/upload/e_enhance/yusuf_shaikh_kmsh6z.jpg",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            Ezier<span className="text-blue-600">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition font-medium"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className="block text-gray-600 hover:text-gray-900 transition py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block text-gray-600 hover:text-gray-900 transition py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block text-gray-600 hover:text-gray-900 transition py-2"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-gray-600 hover:text-gray-900 transition py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition font-medium"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Stop Losing Customers to Competitors.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              We build high-performance apps and websites that turn visitors
              into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                Get a Free Strategy Call
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-900 hover:text-gray-900 transition"
              >
                See Our Work
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Transparent Pricing
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Long-Term Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Your Business Deserves More Than Just a Basic Website.
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            In today's digital world, your online presence isn't just a
            nice-to-have—it's essential for survival.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Slow Websites Lose Customers
              </h3>
              <p className="text-gray-400">
                40% of people leave a website that takes more than 3 seconds to
                load. Every second counts.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                No Online Presence = Lost Revenue
              </h3>
              <p className="text-gray-400">
                97% of consumers search online for local businesses. If you're
                not there, your competitors are.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Bad Design = No Trust
              </h3>
              <p className="text-gray-400">
                75% of people judge a company's credibility based on website
                design. First impressions matter.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                No App = Customers Go to Competitors
              </h3>
              <p className="text-gray-400">
                Mobile apps increase customer loyalty and retention. If you
                don't have one, someone else will.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            We Build Digital Assets That Make You Money.
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Stop thinking about "websites" and "apps." Think about
            revenue-generating tools that work 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Mobile Apps</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform apps that keep your customers engaged
                and coming back. Push notifications, loyalty programs, and
                seamless experiences that drive repeat business.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Increase customer lifetime value</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                High-Converting Websites
              </h3>
              <p className="text-gray-600 mb-6">
                Websites designed for one purpose: to turn visitors into
                customers. Fast loading, mobile-optimized, and built with your
                business goals front and center.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Generate more leads and sales</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Clean UI/UX Design</h3>
              <p className="text-gray-600 mb-6">
                User experience that guides customers to take action. Intuitive
                navigation, clear calls-to-action, and design that builds trust
                from the first click.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Higher conversions, lower bounce rates</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6">
                Your digital asset is a long-term investment. We keep it
                updated, secure, and optimized so it continues to perform at its
                best for years to come.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Peace of mind, ongoing performance</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What You Actually Get
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We don't just deliver code. We deliver business results.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg">More Leads</h3>
              <p className="text-gray-500 text-sm mt-2">
                Capture opportunities you were missing
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Better Brand Image</h3>
              <p className="text-gray-500 text-sm mt-2">
                Stand out from competitors
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Higher Conversions</h3>
              <p className="text-gray-500 text-sm mt-2">
                Turn visitors into customers
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Faster Performance</h3>
              <p className="text-gray-500 text-sm mt-2">
                Keep customers engaged
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Scalable Growth</h3>
              <p className="text-gray-500 text-sm mt-2">
                Built for your future success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Real Work. Real Results.
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Don't just take our word for it. See what we've accomplished for
            businesses like yours.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                        Problem
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
                        Solution
                      </span>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.solution}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                        Result
                      </span>
                      <p className="text-green-800 font-bold mt-1">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Why Businesses Trust Ezier
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            We're not just another agency. We're your partners in growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
              <p className="text-gray-300">
                Young, hungry developers dedicated to your success
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Personal attention you won't get from big agencies
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Transparent communication every step of the way
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Long-term partnership, not one-off project
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Premium quality at affordable rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We've made building your digital asset simple and stress-free.
          </p>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gray-200"></div>
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "We discuss your business goals and challenges. No sales pitch, just honest advice.",
                icon: "📞",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description:
                  "We create a clear roadmap for your project with timeline and transparent pricing.",
                icon: "📋",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team builds your solution with regular updates so you're always in the loop.",
                icon: "💻",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We launch your project and provide ongoing support to ensure long-term success.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg shadow-blue-600/30 relative z-10">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Real success stories from businesses we've helped grow.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something That Grows Your Business.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Book your free strategy call today. We'll discuss your goals and
            create a clear plan to achieve them.
          </p>

          <div className="bg-white p-8 md:p-10 rounded-3xl max-w-xl mx-auto">
            <h3 className="text-gray-900 text-2xl font-bold mb-6">
              Book Your Free Consultation Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Your Phone (optional)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-6 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Tell us about your project"
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
                required
                rows={4}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition transform hover:scale-[1.02]"
              >
                Get Your Free Strategy Call
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              🔥 Limited client slots available. We only take on projects where
              we can deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                Ezier<span className="text-blue-400">.</span>
              </div>
              <p className="text-gray-400 mb-6">
                Building digital assets that grow businesses. Your success is
                our mission.
              </p>
              <a
                href="https://wa.me/917841861132?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>ezier.agency@gmail.comv</li>
                <li>+91 7841861132/8484814483</li>
                <li>Sangli,India</li>
              </ul>
              <div className="flex gap-4 mt-6">
                {/* Instagram */}
                <a
                  href="https://instagram.com/ezier.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                 href="https://www.facebook.com/profile.php?id=61586515542211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0022 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Ezier. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <button
                onClick={() => onNavigate?.("privacy")}
                className="hover:text-white transition"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onNavigate?.("terms")}
                className="hover:text-white transition"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;