import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919010481048?text=Hello! I would like to know more about Timely Health services.',
      '_blank'
    )
  }

  const handleCall = () => {
    window.location.href = 'tel:+919010481048'
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-12 w-30">
              <img
                src="/assets/images/logo2.png"
                alt="Timely Health Logo"
                className="object-contain w-full h-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                  isActive(item.path)
                    ? 'text-green-600 bg-blue-50'
                    : 'text-blue-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Icons (no bg color now) */}
          <div className="items-center hidden space-x-4 md:flex">
            <button
              onClick={handleCall}
              className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <Phone size={18} className="text-blue-600" />
            </button>

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
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-row gap-3 pt-4">
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-md transition"
                >
                  <Phone size={18} className="text-blue-600" />
                </button>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
