import { Building, Calendar, Home, Users } from 'lucide-react'

const WhoWeServePage = () => {
  const handleStrategyCall = () => {
    window.open(
      'https://wa.me/919010481048?text=Hi! I am a community leader/corporate wellness head and would like to schedule a strategy call to create a health engagement plan.',
      '_blank'
    )
  }

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919010481048?text=Hello! I would like to know more about how Timely Health can serve our specific needs.',
      '_blank'
    )
  }

  const audiences = [
    {
      icon: <Home className="w-12 h-12 text-purple-600" />,
      title: "Resident Welfare Associations (RWAs)",
      description: "Comprehensive health solutions for your community",
      services: [
        "Organized health camps with multi-specialty doctors",
        "Regular yoga and wellness sessions for residents",
        "Expert health talks and awareness programs",
        "Preventive health drives and screenings",
        "Emergency medical consultation network"
      ],
      cta: "Organize Community Health Program"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Urban Families",
      description: "Personalized healthcare for every family member",
      services: [
        "Fast doctor bookings for family members",
        "Home diagnostic and lab testing services",
        "Ongoing wellness and preventive care support",
        "Specialist consultations and referrals",
        "Family health monitoring and follow-ups"
      ],
      cta: "Get Family Health Plan"
    },
    {
      icon: <Building className="w-12 h-12 text-green-600" />,
      title: "Corporates & HR Teams",
      description: "Employee wellness programs that make a difference",
      services: [
        "Comprehensive employee wellness drives",
        "On-site health checkups and screenings",
        "Corporate vaccination programs",
        "Stress management and mental health workshops",
        "Lifestyle and nutrition counseling sessions"
      ],
      cta: "Plan Employee Wellness Program"
    },
  ]

  const handleServiceRequest = (audienceType) => {
    const message = `Hi! I represent a ${audienceType} and would like to know more about your services for us.`
    window.open(`https://wa.me/919010481048?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen">
     {/* Hero Section */}
<section className="text-white px-6 py-12 lg:px-20 lg:py-16 bg-white bg-opacity-60">
  {/* Text */}
  <div className="max-w-4xl mx-auto text-left">
    <h1 className="mb-6 text-3xl md:text-5xl font-bold font-calibri">
      Personalized{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-calibri">
        Care for Every Community
      </span>
    </h1>
    <p className="mb-8 text-lg font-sans">
      Whether you're a family, a working professional, an RWA leader, or a corporate team — 
      Timely Health brings the right healthcare to your doorstep.
    </p>
  </div>

  {/* Image */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  <img
    src="/assets/images/we2.jpg"
    alt="Healthcare Services 1"
    className="w-full h-auto rounded-lg shadow-lg object-cover"
  />
  <img
    src="/assets/images/h1.jpg"
    alt="Healthcare Services 2"
    className="w-full h-auto rounded-lg shadow-lg object-cover"
  />
</div>

</section>



      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className='font-sans'>
            We understand that different groups have different healthcare needs. That's why we've
            designed specialized programs and services tailored to serve families, communities,
            businesses, and healthcare providers effectively.
          </p>
        </div>
      </section>

      {/* Audience Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">{audience.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-calibri">{audience.title}</h3>
                      <p className="mb-6 font-sans">{audience.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {audience.services.map((service, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleServiceRequest(audience.title.split(' ')[1])}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {audience.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-calibri">Success Stories</h2>
            <p className='font-sans'>See how we've made a difference for our diverse community of users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="mb-4 font-calibri">RWA Health Camp Success</h3>
              <p className="mb-4 font-sans">
                "We organized a health camp for 200+ residents in our society. Timely Health provided
                5 specialist doctors, diagnostic equipment, and handled all logistics seamlessly.
                The response was overwhelming!"
              </p>
              <cite className='font-sans'>— Priya Sharma, RWA Secretary, Gachibowli</cite>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
              <h3 className="mb-4 font-calibri">Corporate Wellness Program</h3>
              <p className="mb-4 font-sans">
                "Our employee wellness program with Timely Health saw 85% participation. The on-site
                health checkups and stress management workshops significantly improved our team's
                overall wellbeing and productivity."
              </p>
              <cite className='font-sans'>— Rajesh Kumar, HR Director, Tech Company</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Invitation */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white font-calibri">
            Are you a community leader or corporate wellness head?
          </h2>
          <p className="mb-8 text-white font-sans">
            Let's create a customized health engagement plan for your people.
            We'll work with you to design programs that meet your specific needs and goals.
          </p>
          <button
            onClick={handleStrategyCall}
            className="px-8 py-4 bg-white text-blue-500 rounded-lg hover:bg-green-500 transition-colors font-semibold font-sans"
          >
            Schedule a Strategy Call
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-calibri">Ready to Get Started?</h2>
          <p className="mb-8 font-sans">
            No matter which group you represent, we're here to create a healthcare solution
            that works perfectly for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
              <span className='font-calibri'>Chat with Our Team</span>
            </button>
            <button
              onClick={handleStrategyCall}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Calendar size={20} />
              <span className='font-sans'>Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeServePage
