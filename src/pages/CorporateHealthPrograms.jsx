import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ add import
export default function CorporateHealthPrograms() {
 
  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      {/* HERO */}
      <header className="text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-6xl px-6 mx-auto py-14 lg:py-20">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Corporate Health Programs — Empower Your Workforce
              </h1>
              <p className="max-w-xl mt-4 text-lg text-white sm:text-xl opacity-90">
                Boost employee productivity and well-being with our tailored
                workplace health solutions — from checkups to wellness workshops.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {/* ✅ changed <a> to <Link> */}
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 font-semibold bg-white rounded-lg shadow-md text-cyan-700 hover:shadow-lg"
                >
                  Get a Proposal
                </Link>
                <a
                  href="#faq"
                  className="inline-block px-5 py-3 text-white border rounded-lg border-white/40 hover:bg-white/10"
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
              <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
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
      <main className="max-w-6xl px-6 mx-auto py-14">
        {/* FEATURES */}
        <section id="features" className="mb-16">
          <h3 className="mb-10 text-2xl font-bold text-center text-cyan-700">
            Our Corporate Health Solutions
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* features cards remain unchanged */}
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-cyan-700">
                Employee Checkups
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Annual and quarterly health check packages for teams.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-cyan-700">
                Vaccination Drives
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                On-site flu shots, COVID-19, and preventive vaccinations.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-cyan-700">
                Stress Management
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Expert-led workshops on mindfulness, yoga, and stress relief.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-cyan-700">
                Health Risk Assessments
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Identify employee health trends with data-driven reports.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-cyan-700">
                Nutrition & Wellness
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Personalized diet plans and lifestyle modification sessions.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-cyan-700">
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
          <h3 className="mb-6 text-2xl font-bold text-center text-cyan-700">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How do you customize programs for companies?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                We assess employee health needs and design packages tailored to
                the organization’s requirements.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Can you manage large-scale employee programs?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, we work with organizations ranging from startups to large
                enterprises with 10,000+ employees.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
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
          className="flex flex-col items-center justify-between gap-6 p-8 shadow-md bg-cyan-50 rounded-2xl md:flex-row"
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
              className="inline-block px-6 py-3 text-white rounded-lg shadow-md bg-cyan-700 hover:bg-cyan-800"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="inline-block px-5 py-3 border rounded-lg border-cyan-700 text-cyan-700 hover:bg-cyan-50"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
