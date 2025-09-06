import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919010481048?text=Hello! I would like to know more about Timely Health services.', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+919010481048'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:hello@timelyhealth.com'
  }

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center w-15 h-15 ">
                 <img
                   src="/assets/images/logo2.png"
                   alt="Timely Health Logo"
                   className="object-contain w-full h-full"
                 />
                {/* <span className="text-lg font-bold text-white">TH</span> */}
              </div>
              <span className="text-xl font-bold"></span>
            </div>
            <p className="max-w-md mb-6 text-gray-300">
              Care You Can Trust. Right Where You Are. We believe healthcare should be simple, local, and always within reach — for everyone.
            </p>
           <div className="flex space-x-4">
  {/* WhatsApp Button */}
  <button
    onClick={handleWhatsApp}
    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-md transition"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-6 h-6"
    />
  </button>

  {/* Call Button */}
  <button
    onClick={handleCall}
    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-md transition"
  >
    <Phone size={18} className="text-blue-600" />
  </button>
</div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 transition-colors hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 transition-colors hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 transition-colors hover:text-white">About Us</Link></li>
              <li><Link to="/who-we-serve" className="text-gray-300 transition-colors hover:text-white">Who We Serve</Link></li>
              <li><Link to="/contact" className="text-gray-300 transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <button onClick={handleCall} className="text-gray-300 transition-colors hover:text-white">
                  +91 9010481048
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <button onClick={handleEmail} className="text-gray-300 transition-colors hover:text-white">
                  hello@timelyhealth.com
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-blue-400" />
                <span className="text-gray-300">www.timelyhealth.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
        {/* Social Media Row */}
                <div className="flex items-center space-x-6 mt-4">
                <a href="https://www.facebook.com/share/1B2LaDiY5Q/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://www.instagram.com/timelyhealth1?igsh=MXY3ZWtsc2dwbjZ0cQ==" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-gray-300 hover:text-pink-500 transition-colors" />
                </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-gray-300 hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 text-gray-300 hover:text-sky-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
</div>
        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Timely Health. All rights reserved. | Trusted Healthcare, Just Around the Corner.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer