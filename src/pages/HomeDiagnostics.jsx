import { motion } from "framer-motion";
import { useRef } from "react";

export default function HomeDiagnostics() {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`You selected: ${file.name}`);
      // ✅ API upload logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-gradient-to-r from-green-600 to-teal-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* IMAGE BLOCK FIRST (swap position) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full order-last lg:order-first"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="/assets/images/h2.jpg"
                  alt="Home Diagnostics"
                  className="w-full h-80 sm:h-[450px] object-cover"
                />
              </div>
            </motion.div>

            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="order-first lg:order-last"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Home Diagnostics — Trusted Lab at Your Doorstep
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl">
                Get lab tests done from the comfort of your home. Our trained
                staff ensures safe and hygienic sample collection with accurate
                results delivered digitally.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href="/contact"
                  className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
                >
                  Book a Test
                </a>
                <a
                  href="#faq"
                  className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg hover:bg-white/10"
                >
                  FAQs
                </a>
              </div>

              <div className="mt-6 text-sm opacity-90">
                Hygienic collection • Accurate reports • Home convenience
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">How do I book a test?</h4>
              <p className="text-sm text-gray-600">
                You can book online or via WhatsApp. Our staff will visit your
                home at your preferred time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">Are reports digital?</h4>
              <p className="text-sm text-gray-600">
                Yes, all reports are delivered digitally and can also be shared
                directly with your doctor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">
                Is the collection process safe?
              </h4>
              <p className="text-sm text-gray-600">
                Absolutely. Our technicians follow strict hygiene protocols for
                sample collection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2">
                How soon will I get my results?
              </h4>
              <p className="text-sm text-gray-600">
                Most test results are available within 24–48 hours depending on
                the test type.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-green-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <h4 className="text-xl font-bold">Book Your Home Test Today</h4>
            <p className="mt-2 text-sm text-gray-700">
              Upload your prescription or select from our test packages. Get
              reports right on your phone.
            </p>
          </div>

          <div className="flex gap-3">
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={handleFileUpload}
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700"
            >
              Upload Prescription
            </button>

            <a
              href="/contact"
              className="inline-block border border-green-600 text-green-600 px-5 py-3 rounded-lg hover:bg-green-50"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
