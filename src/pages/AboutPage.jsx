import { CheckCircle, Eye, Heart, Shield, Target, Users } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Community First",
      description: "We prioritize the health and wellbeing of entire communities, not just individuals."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Prevention > Cure",
      description: "We believe in preventing health issues before they become serious problems."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Verified Expertise",
      description: "All our healthcare providers are thoroughly verified and experienced professionals."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Simplicity in Care",
      description: "Healthcare should be easy to access and understand for everyone."
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: "Human + Digital Integration",
      description: "We combine the best of technology with human touch for optimal care."
    }
  ]

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919010481048?text=Hello! I would like to know more about Timely Health and your mission.',
      '_blank'
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     {/* Hero Section */}
{/* Hero Section */}
<section className="text-white px-6 py-12 lg:px-20 lg:py-16 bg-white bg-opacity-60">
  {/* Text */}
  <div className="max-w-4xl mx-auto text-left">
    <h1 className="mb-6 text-3xl md:text-5xl font-bold font-calibri">
      Our Vision for a{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-calibri">
        Healthier, Closer Future
      </span>
    </h1>
    <p className="mb-8 text-lg font-sans">
      We're not just a healthcare platform — we're your neighborhood's health partner.
    </p>
  </div>

  {/* Image */}
  <div className="max-w-5xl mx-auto">
  <img
    src="/assets/images/s2.jpg"
    alt="Healthcare Services"
    className="w-full h-80 rounded-lg shadow-lg object-cover"
  />
</div>

</section>



      {/* Intro Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className='font-sans'>
              We connect people to care that's personal, accessible, and built around community. 
              Our platform bridges the gap between traditional healthcare and modern convenience, 
              ensuring that quality medical care is always within reach.
            </p>
          </div>
        </div>
      </section>

      
      {/* Our Story */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 font-calibri">Our Story</h2>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="mb-6 font-sans">
              Timely Health was born from a simple observation: healthcare in urban India is often 
              fragmented, impersonal, and difficult to navigate. Families struggle to find trusted 
              doctors nearby, communities lack access to preventive care, and medical emergencies 
              often lead to panic rather than prompt, informed action.
            </p>
            
            <p className="mb-6 font-sans">
              We founded Timely Health with the belief that healthcare should be community-centered, 
              prevention-focused, and easily accessible to everyone. By combining digital convenience 
              with local expertise, we're building a healthcare ecosystem that truly serves the needs 
              of modern urban families and communities.
            </p>
            
            <p className='font-sans'>
              Today, we're proud to serve thousands of families across Hyderabad, connecting them 
              with trusted healthcare providers, organizing community health initiatives, and making 
              preventive care a priority in every neighborhood we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="w-12 h-12 text-blue-600" />
                <h2 className='font-calibri'>Our Mission</h2>
              </div>
              <p className='font-sans'>
                To build a unified platform that connects individuals, communities, and organizations 
                with verified healthcare providers — both digitally and offline — enabling smarter, 
                safer health choices for everyone in our communities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="w-12 h-12 text-green-600" />
                <h2 className='font-calibri'>Our Vision</h2>
              </div>
              <p className='font-sans'>
                To make healthcare easy, local, and preventive — enhancing quality of life for all. 
                We envision a future where every person has access to trusted healthcare advice 
                and services right in their neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-calibri">Our Core Values</h2>
            <p className='font-sans'>
              These principles guide everything we do at Timely Health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  {value.icon}
                  <h3 className='font-calibri'>{value.title}</h3>
                </div>
                <p className='font-sans'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-calibri">
            Ready to Experience Healthcare That Cares?
          </h2>
          <p className="mb-8 font-sans">
            Join thousands of families who trust Timely Health for their healthcare needs.
          </p>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-sans"
          >
            Start Your Health Journey With Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
