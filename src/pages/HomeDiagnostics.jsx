import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
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
    <div className="min-h-screen text-gray-800 bg-gray-50">
      {/* HERO */}
      <header className="text-white bg-gradient-to-r from-green-500 to-teal-500">
        <div className="max-w-6xl px-6 py-12 mx-auto lg:py-16">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* IMAGE BLOCK */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="order-last w-full lg:order-first"
            >
              <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
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
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Home Diagnostics — Trusted Lab at Your Doorstep
              </h1>
              <p className="max-w-xl mt-4 text-lg text-white sm:text-xl">
                Get lab tests done from the comfort of your home. Our trained
                staff ensures safe and hygienic sample collection with accurate
                results delivered digitally.
              </p>



              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 font-semibold text-green-600 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  Book a Test
                </Link>
                <a
                  href="#faq"
                  className="inline-block px-5 py-3 text-white border rounded-lg border-white/30 hover:bg-white/10"
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
      <main className="max-w-6xl px-6 mx-auto py-14">
        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-center">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <h4 className="mb-2 font-semibold">How do I book a test?</h4>
              <p className="text-sm text-gray-600">
                You can book online or via WhatsApp. Our staff will visit your
                home at your preferred time.
              </p>
            </div>

            <div className="p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <h4 className="mb-2 font-semibold">Are reports digital?</h4>
              <p className="text-sm text-gray-600">
                Yes, all reports are delivered digitally and can also be shared
                directly with your doctor.
              </p>
            </div>

            <div className="p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <h4 className="mb-2 font-semibold">
                Is the collection process safe?
              </h4>
              <p className="text-sm text-gray-600">
                Absolutely. Our technicians follow strict hygiene protocols for
                sample collection.
              </p>
            </div>

            <div className="p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <h4 className="mb-2 font-semibold">
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
          className="flex flex-col items-center justify-between gap-6 p-8 shadow-md bg-green-50 rounded-2xl md:flex-row"
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
              className="inline-block px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
            >
              Upload Prescription
            </button>

            <Link
              to="/contact"
              className="inline-block px-5 py-3 text-green-600 border border-green-600 rounded-lg hover:bg-green-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
