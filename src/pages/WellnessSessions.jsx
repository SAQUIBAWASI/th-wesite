import { motion } from "framer-motion";

export default function WellnessWorkshops() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-gradient-to-r from-purple-200 to-pink-200 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Wellness Workshops — Learn, Heal & Grow Together
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl">
                Join our expert-led wellness workshops designed to nurture your
                body, mind, and soul. From stress management to holistic
                healing, gain practical tools for a healthier lifestyle.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href="#workshops"
                  className="inline-block bg-white text-purple-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
                >
                  Explore Workshops
                </a>
                <a
                  href="#faq"
                  className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg hover:bg-white/10"
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
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
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
      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* WORKSHOPS */}
        <section id="workshops" className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Upcoming Wellness Workshops
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg">
              <h4 className="font-bold text-lg text-purple-400">
                Mindfulness & Meditation
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Learn simple practices to reduce stress and increase focus.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg">
              <h4 className="font-bold text-lg text-purple-400">
                Nutrition for Energy
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Discover healthy eating habits for a vibrant, energetic life.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg">
              <h4 className="font-bold text-lg text-purple-400">
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
          <h3 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3 max-w-3xl mx-auto">
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Do I need prior experience to join?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                No, our workshops are designed for all levels, beginners
                included.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Are sessions available online?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, we offer both in-person and virtual sessions.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
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
          className="bg-purple-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h4 className="text-xl font-bold">Ready to Join?</h4>
            <p className="mt-2 text-sm text-gray-700">
              Reserve your spot today and be part of our next wellness journey.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/register"
              className="inline-block bg-purple-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700"
            >
              Join Workshop
            </a>
            <a
              href="/contact"
              className="inline-block border border-purple-400 text-purple-400 px-5 py-3 rounded-lg hover:bg-purple-50"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
