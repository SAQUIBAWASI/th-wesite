import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function DoctorConsultations() {

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      {/* HERO */}
      <header className="text-white bg-gradient-to-r from-blue-400 to-indigo-600">
        <div className="max-w-6xl px-6 mx-auto py-14 lg:py-20">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* TEXT */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Doctor Consultations — Anytime, Anywhere
              </h1>
              <p className="max-w-xl mt-4 text-lg text-white sm:text-xl opacity-90">
                Connect instantly with certified general physicians and specialists.
                Choose online video consults or book in-person visits near you.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 font-semibold text-blue-700 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  Book a Consultation
                </Link>
                <a
                  href="#faq"
                  className="inline-block px-5 py-3 text-white border rounded-lg border-white/40 hover:bg-white/10"
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
              <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
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
      <main className="max-w-6xl px-6 mx-auto py-14">
        {/* FEATURES */}
        <section id="features" className="mb-16">
          <h3 className="mb-10 text-2xl font-bold text-center text-blue-800">
            Why Choose Our Doctor Consultations?
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-blue-700">24/7 Access</h4>
              <p className="mt-2 text-sm text-gray-600">
                Get instant advice from doctors anytime — day or night.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-blue-700">
                Verified Specialists
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Connect with trusted physicians and specialists across fields.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-blue-700">
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
          <h3 className="mb-6 text-2xl font-bold text-center text-blue-800">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How do I book a consultation?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Simply click “Book a Consultation” and choose your preferred doctor and time.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Can I get prescriptions online?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, our doctors provide digital prescriptions after your consult.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
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
          className="flex flex-col items-center justify-between gap-6 p-8 shadow-md bg-indigo-50 rounded-2xl md:flex-row"
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
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="inline-block px-5 py-3 text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-50"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
