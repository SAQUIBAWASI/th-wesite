import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ React Router Link import
export default function WellnessWorkshops() {
  
  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      {/* HERO */}
      <header className="text-white bg-gradient-to-r from-purple-200 to-pink-200">
        <div className="max-w-6xl px-6 py-12 mx-auto lg:py-16">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ">
                Wellness Workshops — Learn, Heal & Grow Together
              </h1>
              <p className="max-w-xl mt-4 text-lg sm:text-xl">
                Join our expert-led wellness workshops designed to nurture your
                body, mind, and soul. From stress management to holistic
                healing, gain practical tools for a healthier lifestyle.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="#workshops"
                  className="inline-block px-6 py-3 font-semibold text-purple-400 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  Explore Workshops
                </a>
                <a
                  href="#faq"
                  className="inline-block px-5 py-3 text-white border rounded-lg border-white/30 hover:bg-white/10"
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
              <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
                <img
                  src="/assets/images/s1.jpg"
                  alt="Wellness workshop"
                  className="w-full h-80 sm:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl px-6 mx-auto py-14">
        {/* WORKSHOPS */}
        <section id="workshops" className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-center">
            Upcoming Wellness Workshops
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 text-center bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-purple-400">
                Mindfulness & Meditation
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Learn simple practices to reduce stress and increase focus.
              </p>
            </div>

            <div className="p-6 text-center bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-purple-400">
                Nutrition for Energy
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Discover healthy eating habits for a vibrant, energetic life.
              </p>
            </div>

            <div className="p-6 text-center bg-white shadow-md rounded-xl hover:shadow-lg">
              <h4 className="text-lg font-bold text-purple-400">
                Yoga for Wellness
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Gentle yoga sessions to improve flexibility and mental clarity.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-center">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Do I need prior experience to join?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                No, our workshops are designed for all levels, beginners
                included.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Are sessions available online?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, we offer both in-person and virtual sessions.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How can I register?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Simply click on “Join Workshop” below or contact us for details.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="flex flex-col items-center justify-between gap-6 p-8 shadow-md bg-purple-50 rounded-2xl md:flex-row"
        >
          <div>
            <h4 className="text-xl font-bold">Ready to Join?</h4>
            <p className="mt-2 text-sm text-gray-700">
              Reserve your spot today and be part of our next wellness journey.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-white bg-purple-400 rounded-lg shadow-md hover:bg-purple-700"
            >
              Join Workshop
            </Link>
            <Link
              to="/contact"
              className="inline-block px-5 py-3 text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
