import { Link } from "react-router-dom"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Timely Health
          </Link>
          <nav className="space-x-6">
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/who-we-serve" className="hover:text-blue-600">Who We Serve</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Timely Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
