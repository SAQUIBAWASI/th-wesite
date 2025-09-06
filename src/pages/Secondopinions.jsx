import { motion } from "framer-motion";
import { useRef } from "react";

export default function SecondOpinionService() {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // hidden input trigger
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`You selected: ${file.name}`);
      // ✅ yaha aap backend API pe file bhej sakte ho
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Second Opinions — Make informed decisions with clarity
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl">
                Our expert team provides unbiased second opinions on your
                medical reports — with detailed analysis, treatment
                alternatives, and guidance for confident decision-making.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
                >
                  Book a Review
                </a>
                <a
                  href="#faq"
                  className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg hover:bg-white/10"
                >
                  FAQs
                </a>
              </div>

              <div className="mt-6 text-sm opacity-90">
                Confidentiality guaranteed • Teleconsultation available • Fast
                turnaround
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
                  src="/assets/images/s5.jpg"
                  alt="Doctor reviewing reports"
                  className="w-full h-80 sm:h-[450px] object-cover"
                />
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

          <div className="space-y-3 max-w-3xl mx-auto">
            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How long does a second opinion take?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Typically 48–72 hours depending on case complexity.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Is my data secure?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes — all reports are handled with strict confidentiality and
                encrypted storage.
              </p>
            </details>

            <details className="bg-white p-5 rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Do you offer video consults?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes, after review we can schedule a video call with the
                specialist if required.
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
            <h4 className="text-xl font-bold">Ready for a Second Opinion?</h4>
            <p className="mt-2 text-sm text-gray-700">
              Upload your reports and our team will provide a detailed expert
              opinion.
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
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              Upload Reports
            </button>

            <a
              href="/contact"
              className="inline-block border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
