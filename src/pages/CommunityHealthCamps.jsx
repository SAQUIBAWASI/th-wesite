import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ React Router Link import

export default function CommunityHealthCamps() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-gradient-to-r from-blue-100 to-teal-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-blue-500">
                Community Health Camps — Care for Everyone
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl text-gray-700">
                Bringing affordable and accessible healthcare to your
                neighborhood. Free checkups, consultations, and awareness
                sessions for a healthier tomorrow.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href="#camps"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700"
                >
                  Explore Camps
                </a>

                <a
                  href="#faq"
                  className="inline-block border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50"
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
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src="/assets/images/h1.jpg"
                  alt="Community health camp"
                  className="w-full h-80 sm:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* CAMPS */}
        <section id="camps" className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-800">
            Upcoming Health Camps
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg">
              <h4 className="font-bold text-lg text-blue-600">
                Free Health Checkup
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                General health screenings including BP, sugar, and BMI.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg">
              <h4 className="font-bold text-lg text-blue-600">
                Awareness Talks
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Educational sessions on preventive care and wellness.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg">
              <h4 className="font-bold text-lg text-blue-600">
                Specialist Consultations
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Free consultations with doctors across multiple specialties.
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
                Who can attend the health camps?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Camps are open to all community members free of charge.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Do I need to register in advance?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Registration is recommended but walk-ins are also welcome.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Are medicines provided?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Basic medicines may be provided depending on availability.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h4 className="text-xl font-bold text-blue-800">
              Want to Join Our Next Camp?
            </h4>
            <p className="mt-2 text-sm text-gray-700">
              Sign up now and get details of upcoming community health camps in
              your area.
            </p>
          </div>

          <div className="flex gap-3">
            {/* ✅ React Router Link */}
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              Register Now
            </Link>

            <Link
              to="/contact"
              className="inline-block border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
