import { Building, Calendar, Heart, Home, MessageCircle, Phone, Shield, Stethoscope, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ServicesPage = () => {
  const navigate = useNavigate()

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919010481048?text=Hello! I would like to know more about Timely Health services.',
      '_blank'
    )
  }

  const handleBookDoctor = () => {
    window.open(
      'https://wa.me/919010481048?text=Hi! I would like to book a doctor consultation.',
      '_blank'
    )
  }

  const handleOrganizeCamp = () => {
    window.open(
      'https://wa.me/919010481048?text=Hi! I would like to organize a health camp for our community.',
      '_blank'
    )
  }

  const handleHealthPlan = () => {
    window.open(
      'https://wa.me/919010481048?text=Hello! I would like to get a free preventive health plan.',
      '_blank'
    )
  }

  const services = [
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Second Opinions",
      description: "Consult expert doctors before making major treatment decisions",
      link: "/second-opinions",
      details: [
        "Expert medical second opinions",
        "Review of treatment plans",
        "Consultation with specialists",
        "Detailed medical analysis",
        "Peace of mind for critical decisions"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Home Diagnostics",
      description: "Trusted lab services, sample collection from your doorstep",
      link: "/home-diagnostics",
      details: [
        "Home sample collection service",
        "Comprehensive health checkup packages",
        "Fast and accurate lab results",
        "Digital reports delivery",
        "Expert consultation on reports"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Community Health Camps",
      description: "Full-service health drives for RWAs, apartments, or colonies",
      link: "/community-health-camps",
      details: [
        "Complete health screening camps",
        "Multi-specialty doctor panels",
        "On-site diagnostic facilities",
        "Health awareness sessions",
        "Customized camp packages"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Wellness Workshops",
      description: "Yoga, nutrition, and mental health sessions for prevention & balance",
      link: "/wellness-sessions",
      details: [
        "Group yoga and meditation sessions",
        "Nutrition counseling workshops",
        "Mental health awareness programs",
        "Stress management techniques",
        "Lifestyle modification guidance"
      ]
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: "Doctor Consultations",
      description: "Verified general physicians & specialists — book online or locally",
      link: "/doctor-consultations",
      details: [
        "24/7 availability for urgent consultations",
        "Verified and experienced doctors",
        "Online and offline consultation options",
        "Specialist referrals when needed",
        "Follow-up care and monitoring"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-orange-600" />,
      title: "Corporate Health Programs",
      description: "Employee checkups, vaccination drives, stress management sessions",
      link: "/corporate-health-programs",
      details: [
        "Employee health checkup programs",
        "Workplace vaccination drives",
        "Corporate wellness workshops",
        "Health risk assessments",
        "Occupational health services"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-white px-6 py-12 lg:px-20 lg:py-16 bg-white bg-opacity-60">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="mb-6 text-3xl md:text-5xl font-bold">
            Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              That Comes to You
            </span>
          </h1>
          <p className="mb-8 text-lg">
            Timely Health delivers personalized care through a mix of digital and on-ground services — 
            right at your home, clinic, or community.
          </p>
        </div>
      {/* Image Grid */}
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  <img
    src="/assets/images/h1.jpg"
    alt="Healthcare Services 1"
    className="w-full h-60 rounded-lg shadow-lg object-cover"
  />
  <img
    src="/assets/images/h2.jpg"
    alt="Healthcare Services 2"
    className="w-full h-60 rounded-lg shadow-lg object-cover"
  />
  <img
    src="/assets/images/h3.jpg"
    alt="Healthcare Services 3"
    className="w-full h-60 rounded-lg shadow-lg object-cover"
  />
  <img
    src="/assets/images/s1.jpg"
    alt="Healthcare Services 4"
    className="w-full h-60 rounded-lg shadow-lg object-cover"
  />
</div>

      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(service.link)}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-gray-700 leading-relaxed"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {/* 🔴 "Learn More" Button Remove */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service CTAs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookDoctor}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Phone size={20} />
              <span>Book a Doctor</span>
            </button>
            <button
              onClick={handleOrganizeCamp}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              <Calendar size={20} />
              <span>Organize a Health Camp</span>
            </button>
            <button
              onClick={handleHealthPlan}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <MessageCircle size={20} />
              <span>Get a Free Preventive Health Plan</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have Questions About Our Services?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our health advisors are ready to help you choose the right service for your needs.
          </p>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Chat with Our Health Advisor
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
