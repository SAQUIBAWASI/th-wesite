import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ add import

export default function CorporateHealthPrograms() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                Corporate Health Programs — Empower Your Workforce
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl text-white opacity-90">
                Boost employee productivity and well-being with our tailored
                workplace health solutions — from checkups to wellness workshops.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                {/* ✅ changed <a> to <Link> */}
                <Link
                  to="/contact"
                  className="inline-block bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
                >
                  Get a Proposal
                </Link>
                <a
                  href="#faq"
                  className="inline-block border border-white/40 text-white px-5 py-3 rounded-lg hover:bg-white/10"
                >
                  FAQs
                </a>
              </div>
            </motion.div>

            {/* IMAGE BLOCK */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src="/assets/images/h3.jpg"
                  alt="Corporate health program"
                  className="w-full h-80 sm:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* FEATURES */}
        <section id="features" className="mb-16">
          <h3 className="text-2xl font-bold mb-10 text-center text-cyan-700">
            Our Corporate Health Solutions
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* features cards remain unchanged */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-cyan-700">
                Employee Checkups
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Annual and quarterly health check packages for teams.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-cyan-700">
                Vaccination Drives
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                On-site flu shots, COVID-19, and preventive vaccinations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-cyan-700">
                Stress Management
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Expert-led workshops on mindfulness, yoga, and stress relief.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-cyan-700">
                Health Risk Assessments
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Identify employee health trends with data-driven reports.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-cyan-700">
                Nutrition & Wellness
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Personalized diet plans and lifestyle modification sessions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-cyan-700">
                Occupational Health
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Ergonomics, workplace safety, and occupational health services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-700">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3 max-w-3xl mx-auto">
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How do you customize programs for companies?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                We assess employee health needs and design packages tailored to
                the organization’s requirements.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Can you manage large-scale employee programs?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, we work with organizations ranging from startups to large
                enterprises with 10,000+ employees.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Do you provide reports to HR/Management?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, anonymized health analytics and insights are shared with HR
                for better workforce planning.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-cyan-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h4 className="text-xl font-bold text-cyan-900">
              Ready to Transform Workplace Health?
            </h4>
            <p className="mt-2 text-sm text-gray-700">
              Get in touch today to create a healthier, more productive work
              environment for your employees.
            </p>
          </div>

          <div className="flex gap-3">
            {/* ✅ changed <a> to <Link> */}
            <Link
              to="/contact"
              className="inline-block bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-800"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-cyan-700 text-cyan-700 px-5 py-3 rounded-lg hover:bg-cyan-50"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
