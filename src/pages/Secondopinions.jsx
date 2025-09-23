import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen text-gray-800 bg-gray-50">
      <header className="text-white bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-6xl px-6 py-12 mx-auto lg:py-16">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* TEXT BLOCK */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Second Opinions — Make informed decisions with clarity
              </h1>
              <p className="max-w-xl mt-4 text-lg text-white sm:text-xl">
                Our expert team provides unbiased second opinions on your
                medical reports — with detailed analysis, treatment
                alternatives, and guidance for confident decision-making.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {/* ✅ React Router Link */}
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 font-semibold text-blue-600 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  Book a Review
                </Link>

                <a
                  href="#faq"
                  className="inline-block px-5 py-3 text-white border rounded-lg border-white/30 hover:bg-white/10"
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
              <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
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
      <main className="max-w-6xl px-6 mx-auto py-14">
        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-center">
            Frequently Asked Questions
          </h3>

          <div className="max-w-3xl mx-auto space-y-3">
            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                How long does a second opinion take?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Typically 48–72 hours depending on case complexity.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
              <summary className="font-semibold cursor-pointer">
                Is my data secure?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Yes — all reports are handled with strict confidentiality and
                encrypted storage.
              </p>
            </details>

            <details className="p-5 bg-white rounded-lg shadow-sm">
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
          className="flex flex-col items-center justify-between gap-6 p-8 shadow-md bg-blue-50 rounded-2xl md:flex-row"
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
              className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
              Upload Reports
            </button>

            {/* ✅ React Router Link */}
            <Link
              to="/contact"
              className="inline-block px-5 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
