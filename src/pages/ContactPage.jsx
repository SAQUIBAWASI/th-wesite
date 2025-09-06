import { Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { useState } from 'react'


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919010481048?text=Hello! I would like to talk to Timely Health about your services.',
      '_blank'
    )
  }

  const handleCall = () => {
    window.location.href = 'tel:+919010481048'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:hello@timelyhealth.com'
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hello! I'm reaching out through your website contact form.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}
Message: ${formData.message}

Please get back to me within 24 hours as mentioned on your website.`

    window.open(`https://wa.me/919010481048?text=${encodeURIComponent(message)}`, '_blank')

    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    })
  }

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Call Us",
      info: "+91 9010481048",
      action: handleCall,
      description: "Available 24/7 for urgent consultations"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "WhatsApp Us",
      info: "Chat Now",
      action: handleWhatsApp,
      description: "Quick responses, instant support"
    },
    {
      icon: <Mail className="w-8 h-8 text-red-600" />,
      title: "Email Us",
      info: "hello@timelyhealth.com",
      action: handleEmail,
      description: "Detailed inquiries and partnerships"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Visit Website",
      info: "www.timelyhealth.in",
      action: () => window.open('https://www.timelyhealth.in', '_blank'),
      description: "Complete information and resources"
    }
  ]

  return (
   <div className="min-h-screen">
  {/* Hero Section */}
  <section className="text-white px-6 py-12 lg:px-20 lg:py-16 bg-white bg-opacity-60">
    {/* Text */}
    <div className="max-w-4xl mx-auto text-left">
      <h1 className="mb-6 text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
        Talk to Timely Health
      </h1>
      <p className="mb-8 text-lg">
        Let's bring smarter healthcare to your home, workplace, or community.
      </p>
    </div>

    {/* Image */}
    <div className="max-w-5xl mx-auto">
      <img
        src="/assets/images/contact.jpg"
        alt="Contact Timely Health"
        className="w-full h-80 rounded-lg shadow-lg object-cover"
      />
    </div>
  </section>



      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <button
                  onClick={method.action}
                  className="w-full bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors group"
                >
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="mb-2">{method.title}</h3>
                  <p className="text-blue-600 font-medium mb-2 group-hover:underline">
                    {method.info}
                  </p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-4 h-4 text-blue-600 mt-1" />
                  <div>
                    <h3>Phone</h3>
                    <button onClick={handleCall} className="text-blue-600 hover:underline">
                      +91 9010481048
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-4 h-4 text-red-600 mt-1" />
                  <div>
                    <h3>Email</h3>
                    <button onClick={handleEmail} className="text-blue-600 hover:underline">
                      hello@timelyhealth.com
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-4 h-4 text-purple-600 mt-1" />
                  <div>
                    <h3>Website</h3>
                    <span className="text-gray-600">www.timelyhealth.in</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <h3>WhatsApp</h3>
                    <button onClick={handleWhatsApp} className="text-green-600 hover:underline">
                      Chat Now
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-4 h-4 text-indigo-600 mt-1" />
                  <div>
                    <h3>Base Location</h3>
                    <span className="text-gray-600">Hyderabad, India</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-4 h-4 text-orange-600 mt-1" />
                  <div>
                    <h3>Response Time</h3>
                    <span className="text-gray-600">Within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block mb-2">What are you interested in? *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select an option...</option>
                    <option value="Doctor Consultation">Doctor Consultation</option>
                    <option value="Health Camp">Health Camp</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Corporate Wellness">Corporate Wellness</option>
                    <option value="RWA Partnership">RWA Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Send size={20} />
                  <span>Submit & We'll Get Back Within 24 Hours</span>
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                * By submitting this form, your message will be sent via WhatsApp for faster response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-4">Our Location</h2>
            <p>Based in Hyderabad, serving communities across the city</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.281849174702!2d78.37856837492732!3d17.443456483452636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c9b7e6c7a7%3A0x6a78e6e84f91e7!2sTimely%20Health!5e0!3m2!1sen!2sin!4v1693910289975!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
