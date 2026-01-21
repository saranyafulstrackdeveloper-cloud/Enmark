import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Excellence',
      description: 'Committed to delivering the highest standards in every project',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority in everything we do',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and modern solutions',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODk2NTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">About PowerTech Solutions</h1>
          <p className="text-xl text-white max-w-2xl">
            Pioneering electrical solutions since 2001
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2001, PowerTech Solutions began with a simple vision: to revolutionize the electrical industry through innovation, quality, and exceptional customer service. What started as a small team of passionate engineers has grown into a leading electrical solutions provider serving clients across multiple industries.
                </p>
                <p>
                  Over the past 25 years, we've completed more than 1,000 projects, ranging from residential installations to large-scale industrial power systems. Our commitment to excellence has earned us the trust of over 500 satisfied clients and numerous industry awards.
                </p>
                <p>
                  Today, PowerTech Solutions stands at the forefront of electrical innovation, combining traditional craftsmanship with cutting-edge technology to deliver solutions that power the future.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581092335331-5e00ac65e934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29uc3VsdGF0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc2ODk3OTUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Project planning"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative, reliable, and sustainable electrical solutions that empower businesses and communities. We strive to exceed expectations through technical excellence, superior customer service, and unwavering commitment to safety and quality.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative electrical solutions provider globally, leading the industry in technological advancement, environmental responsibility, and customer satisfaction. We envision a future powered by smart, sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Certified & Accredited Excellence
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Our commitment to quality is backed by industry-leading certifications including ISO 9001:2015, NETA Accreditation, and LEED Green Associate credentials. We maintain the highest standards in safety, quality, and environmental responsibility.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="bg-white rounded-lg p-6 w-32 h-32 flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">ISO 9001</span>
              </div>
              <div className="bg-white rounded-lg p-6 w-32 h-32 flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">NETA</span>
              </div>
              <div className="bg-white rounded-lg p-6 w-32 h-32 flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">LEED</span>
              </div>
              <div className="bg-white rounded-lg p-6 w-32 h-32 flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">UL Listed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
