import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ConnectWithUs() {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      handle: '@powertechsolutions',
      followers: '25K+',
      url: '#',
      color: 'bg-blue-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      handle: '@powertechofficial',
      followers: '45K+',
      url: '#',
      color: 'bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      handle: '@powertech',
      followers: '18K+',
      url: '#',
      color: 'bg-sky-500',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      handle: '@powertech.solutions',
      followers: '32K+',
      url: '#',
      color: 'bg-pink-600',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      handle: 'PowerTech Solutions',
      followers: '15K+',
      url: '#',
      color: 'bg-red-600',
    },
  ];

  const offices = [
    {
      city: 'Headquarters',
      address: '123 Power Street, Electric City, EC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@powertech.com',
    },
    {
      city: 'West Coast Office',
      address: '456 Innovation Ave, San Francisco, CA 94102',
      phone: '+1 (555) 987-6543',
      email: 'west@powertech.com',
    },
    {
      city: 'European Office',
      address: '789 Tech Boulevard, London, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'europe@powertech.com',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwc3VwcG9ydCUyMGN1c3RvbWVyfGVufDF8fHx8MTc2ODk3OTUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Connect With Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Connect With Us</h1>
          <p className="text-xl text-white max-w-2xl">
            Stay connected and engage with PowerTech Solutions across all platforms
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest projects, innovations, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all group border-2 border-gray-200 hover:border-red-600"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 mb-2">{platform.handle}</p>
                <p className="text-red-600 font-semibold">{platform.followers} Followers</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-white mb-8">
            Get the latest updates, industry insights, and exclusive offers delivered to your inbox
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg focus:ring-2 focus:ring-red-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-red-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find us at any of our global locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-red-600 transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of a growing network of electrical professionals and enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discussion Forum</h3>
              <p className="text-gray-600 mb-6">
                Connect with peers, ask questions, and share knowledge in our online community
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                Join Forum
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Youtube className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
              <p className="text-gray-600 mb-6">
                Access our library of educational videos and product demonstrations
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                Watch Now
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Insights</h3>
              <p className="text-gray-600 mb-6">
                Get monthly reports and whitepapers on electrical industry trends
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Have a Question?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out to us through any of our communication channels
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all"
              >
                Contact Us
              </a>
              <a
                href="tel:+15551234567"
                className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-all border-2 border-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
