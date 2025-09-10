import {
  Activity,
  Calendar,
  CheckCircle,
  ChevronDown,
  Heart,
  Home,
  MessageCircle,
  Search,
  Shield,
  Star,
  Stethoscope,
  Users
} from 'lucide-react'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [selectedAudience, setSelectedAudience] = useState('')
  const [selectedNeed, setSelectedNeed] = useState('')
  const [liveStats, setLiveStats] = useState({
    consultations: 3,
    camps: 1,
    events: 1
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        consultations: prev.consultations + Math.floor(Math.random() * 2),
        camps: prev.camps,
        events: prev.events
      }))
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/919010481048?text=Hello! I would like to know more about Timely Health services.', '_blank')
  }

  const handleBookCamp = () => {
    window.open('https://wa.me/919010481048?text=Hi! I would like to book a free health camp for our community.', '_blank')
  }

  const handleFindDoctor = () => {
    window.open('https://wa.me/919010481048?text=Hello! I need help finding a doctor near me.', '_blank')
  }

  const handleStartConsultation = () => {
    window.open('https://wa.me/919010481048?text=Hi! I would like to start a consultation with a health advisor.', '_blank')
  }

  const handleInteractiveCTA = () => {
    if (selectedAudience && selectedNeed) {
      const message = `Hi! I am a ${selectedAudience} looking for ${selectedNeed}. Please help me get started.`
      window.open(`https://wa.me/919010481048?text=${encodeURIComponent(message)}`, '_blank')
    }
  }

  const services = [
    { icon: <Shield className="w-8 h-8 text-indigo-600" />, title: "Second Opinions", description: "Trusted expert inputs" },
    { icon: <Home className="w-8 h-8 text-green-600" />, title: "Home Diagnostics", description: "Lab tests at home" },
    { icon: <Heart className="w-8 h-8 text-red-600" />, title: "Wellness Sessions", description: "Yoga, stress relief, immunity" },
    { icon: <Users className="w-8 h-8 text-purple-600" />, title: "Health Camps", description: "For RWAs & companies" },
    { icon: <Stethoscope className="w-8 h-8 text-blue-600" />, title: "Doctor Consults", description: "Verified specialists" },
    { icon: <Activity className="w-8 h-8 text-orange-600" />, title: "Community Meetups", description: "Group care & awareness" },
  ]

  const whyChooseUs = [
    "✔️ Local-first Care",
    "✔️ Verified Experts Only",
    "✔️ Digital + Offline Access",
    "✔️ Second Opinions Made Easy",
    "✔️ Family & Community Focused",
    "✔️ Prevention-Based Programs"
  ]

  const testimonials = [
    { text: "Our RWA worked with Timely Health for a health camp. Smooth execution, excellent doctor panel.", author: "Shalini V.", role: "RWA Secretary" },
    { text: "Timely Health helped my clinic reach 3x more patients — highly professional.", author: "Dr. Anil M.", role: "ENT Specialist" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="mb-6">
              Trusted Healthcare,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Just Around the Corner
              </span>
            </h1>
            <p className="mb-6">
              Bringing doctors, diagnostics, and wellness programs closer to your home — online and offline.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={22} />
              </button>
              <button
                onClick={handleBookCamp}
                className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Calendar size={22} />
              </button>
              <button
                onClick={handleFindDoctor}
                className="flex items-center justify-center w-14 h-14 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                <Search size={22} />
              </button>
            </div>

            {/* Emotional Story Hook */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl shadow-md">
              <blockquote className="italic mb-4">
                "When Meena's mother experienced chest pain late one evening, she needed urgent advice. 
                Through Timely Health, she connected with a verified local cardiologist — within 30 minutes. 
                Today, she says: 'Timely Health gave us peace of mind when we needed it most.'"
              </blockquote>
              <p className="mb-4 font-semibold">
                You deserve that peace of mind too.
              </p>
              <button
                onClick={handleStartConsultation}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                → Start a Consultation
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="/assets/images/s2.jpg"
              alt="Healthcare Support"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Our Services Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Timely Health */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-gray-800">
            Why Choose Timely Health
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg shadow-sm w-full max-w-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-center mb-8">What Do You Need?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Who are you?</label>
                <div className="relative">
                  <select
                    value={selectedAudience}
                    onChange={(e) => setSelectedAudience(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Individual">Individual</option>
                    <option value="RWA Head">RWA Head</option>
                    <option value="Clinic Owner">Clinic Owner</option>
                    <option value="Corporate HR">Corporate HR</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                <div className="relative">
                  <select
                    value={selectedNeed}
                    onChange={(e) => setSelectedNeed(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Camp">Camp</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Branding">Branding</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handleInteractiveCTA}
                disabled={!selectedAudience || !selectedNeed}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Start a Free Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Board */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-center mb-6 text-2xl font-bold text-gray-800">Live Chat Board</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const name = e.target.name.value
                const phone = e.target.phone.value
                const message = e.target.message.value
                if (!name || !phone || !message) {
                  alert("Please fill all fields")
                  return
                }
                const whatsappMessage = `Hi, my name is ${name}. My contact number is ${phone}. Here is my query: ${message}`
                window.open(
                  `https://wa.me/919010481048?text=${encodeURIComponent(whatsappMessage)}`,
                  "_blank"
                )
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Type your query here..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Real Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="mb-4 italic">"{testimonial.text}"</blockquote>
                <cite className="text-sm font-semibold">— {testimonial.author}, {testimonial.role}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">"Care You Can Trust. Right Where You Are."</h2>
          <p className="mb-8">We believe healthcare should be simple, local, and always within reach — for everyone.</p>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
