import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WhatWeDo() {
  const services = [
    {
      name: 'Electrical Installation',
      description: 'Complete electrical installation services for residential, commercial, and industrial projects with certified technicians ensuring code compliance and safety.',
      image: 'https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwc2VydmljZXxlbnwxfHx8fDE3Njg5MjUxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Maintenance Services',
      description: 'Preventive and corrective maintenance programs to ensure optimal performance, reduce downtime, and extend equipment lifespan.',
      image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMGVuZ2luZWVyJTIwZWxlY3RyaWNhbHxlbnwxfHx8fDE3Njg5Nzk1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Electrical Design & Consultation',
      description: 'Expert electrical system design and engineering consultation services tailored to your specific requirements and industry standards.',
      image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29uc3VsdGF0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc2ODk3OTUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Energy Efficiency Audits',
      description: 'Comprehensive energy audits to identify savings opportunities and implement sustainable solutions that reduce operational costs.',
      image: 'https://images.unsplash.com/photo-1654574111863-210e61acd47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhdWRpdCUyMGVmZmljaWVuY3l8ZW58MXx8fHwxNzY4OTc5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Electrical Testing',
      description: 'Professional testing and inspection services using advanced equipment to ensure safety, reliability, and compliance with regulations.',
      image: 'https://images.unsplash.com/photo-1767042286080-446afa2c78d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg5MjUxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Smart Home Automation',
      description: 'Cutting-edge home automation solutions integrating lighting, climate control, security, and entertainment systems for ultimate convenience.',
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODkyOTYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Emergency Lighting Systems',
      description: 'Design and installation of reliable emergency lighting systems ensuring safety during power outages and emergency situations.',
      image: 'https://images.unsplash.com/photo-1730579798202-2a41d156c6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBsaWdodGluZyUyMHN5c3RlbXxlbnwxfHx8fDE3Njg5Nzk1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Fire Alarm Systems',
      description: 'State-of-the-art fire detection and alarm systems installation with 24/7 monitoring capabilities for maximum protection.',
      image: 'https://images.unsplash.com/photo-1665655034446-1536f6de3fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwYWxhcm0lMjBzeXN0ZW18ZW58MXx8fHwxNzY4OTc5NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'CCTV & Security Systems',
      description: 'Advanced security camera installation and monitoring systems providing comprehensive surveillance solutions for your property.',
      image: 'https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjY3R2JTIwc2VjdXJpdHklMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzY4OTc5NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Data Center Solutions',
      description: 'Specialized electrical infrastructure for data centers including redundant power systems, cooling, and monitoring.',
      image: 'https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY4OTY1MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Solar Power Solutions',
      description: 'Complete solar energy system design, installation, and maintenance for sustainable and cost-effective power generation.',
      image: 'https://images.unsplash.com/photo-1726221062299-88f27b653c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwc3lzdGVtfGVufDF8fHx8MTc2ODkxOTM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Power Distribution',
      description: 'Engineered power distribution solutions including switchgear, transformers, and control systems for efficient energy management.',
      image: 'https://images.unsplash.com/photo-1741449840536-a758bb0cdaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRpc3RyaWJ1dGlvbiUyMHVuaXR8ZW58MXx8fHwxNzY4OTEwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Industrial Automation',
      description: 'Advanced automation solutions with PLC programming, SCADA systems, and process control for manufacturing efficiency.',
      image: 'https://images.unsplash.com/photo-1758873263414-7b23df5e2002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcGFuZWwlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODk3OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'LED Lighting Upgrades',
      description: 'Energy-efficient LED lighting retrofits and new installations reducing energy costs by up to 75% while improving illumination.',
      image: 'https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBsaWdodGluZyUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzY4OTcyMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Generator Installation & Service',
      description: 'Backup power generator selection, installation, and maintenance ensuring uninterrupted power supply during outages.',
      image: 'https://images.unsplash.com/photo-1658260867231-535a1f7c98b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VuZXJhdG9yfGVufDF8fHx8MTc2ODk3MDAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581092335331-5e00ac65e934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29uc3VsdGF0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc2ODk3OTUwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-xl text-white max-w-2xl">
            Comprehensive electrical services tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From design to installation, maintenance to modernization - we do it all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group border border-gray-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and transparent workflow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">We discuss your needs and assess your project requirements</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">Detailed design and planning with cost estimates</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">Professional installation with safety and quality standards</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and 24/7 technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your electrical project
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-lg"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
