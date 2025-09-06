import { motion } from "framer-motion";

export default function DoctorConsultations() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Doctor Consultations — Anytime, Anywhere
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl opacity-90">
                Connect instantly with certified general physicians and specialists.
                Choose online video consults or book in-person visits near you.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
                >
                  Book a Consultation
                </a>
                <a
                  href="#faq"
                  className="inline-block border border-white/40 text-white px-5 py-3 rounded-lg hover:bg-white/10"
                >
                  FAQs
                </a>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <img
                  src="/assets/images/s2.jpg"
                  alt="Doctor consultation"
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
          <h3 className="text-2xl font-bold mb-10 text-center text-blue-800">
            Why Choose Our Doctor Consultations?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-blue-700">24/7 Access</h4>
              <p className="mt-2 text-sm text-gray-600">
                Get instant advice from doctors anytime — day or night.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-blue-700">
                Verified Specialists
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Connect with trusted physicians and specialists across fields.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
              <h4 className="font-bold text-lg text-blue-700">
                Online + In-Person
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Choose video consults or book a nearby clinic visit.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3 max-w-3xl mx-auto">
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How do I book a consultation?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Simply click “Book a Consultation” and choose your preferred doctor and time.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Can I get prescriptions online?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, our doctors provide digital prescriptions after your consult.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                What if I need follow-up care?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                You can book easy follow-up appointments or get referred to a specialist.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-indigo-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h4 className="text-xl font-bold text-indigo-900">
              Ready to Consult a Doctor?
            </h4>
            <p className="mt-2 text-sm text-gray-700">
              Book your consultation now and get expert medical guidance at your convenience.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="inline-block border border-blue-700 text-blue-700 px-5 py-3 rounded-lg hover:bg-blue-50"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
