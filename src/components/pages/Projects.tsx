import { Building2, Factory, Home, ShoppingBag, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Metropolitan Hospital Power Upgrade',
      category: 'Healthcare',
      location: 'New York, NY',
      year: '2025',
      description: 'Complete electrical infrastructure overhaul including backup power systems and emergency lighting',
      image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbnxlbnwxfHx8fDE3Njg5NzEyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Building2,
    },
    {
      title: 'GreenTech Manufacturing Plant',
      category: 'Industrial',
      location: 'Chicago, IL',
      year: '2025',
      description: '500kW solar installation with smart energy management and industrial automation',
      image: 'https://images.unsplash.com/photo-1726221062299-88f27b653c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwc3lzdGVtfGVufDF8fHx8MTc2ODkxOTM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Factory,
    },
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      location: 'Los Angeles, CA',
      year: '2024',
      description: 'Smart home automation for 120 luxury apartments with integrated security systems',
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODkyOTYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Home,
    },
    {
      title: 'Downtown Shopping Mall',
      category: 'Commercial',
      location: 'Miami, FL',
      year: '2024',
      description: 'High-efficiency LED lighting and power distribution for 250,000 sq ft retail space',
      image: 'https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBsaWdodGluZyUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzY4OTcyMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: ShoppingBag,
    },
    {
      title: 'Tech Campus Data Center',
      category: 'Technology',
      location: 'San Francisco, CA',
      year: '2024',
      description: 'Mission-critical power infrastructure with redundant UPS systems and cooling',
      image: 'https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY4OTY1MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Zap,
    },
    {
      title: 'University Campus Modernization',
      category: 'Education',
      location: 'Boston, MA',
      year: '2023',
      description: 'Electrical upgrades across 15 buildings with renewable energy integration',
      image: 'https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzY4OTc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Building2,
    },
  ];

  const categories = ['All', 'Healthcare', 'Industrial', 'Residential', 'Commercial', 'Technology', 'Education'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzY4OTc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-white max-w-2xl">
            Delivering excellence across diverse industries and sectors
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-gray-50 py-8 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-red-600 hover:text-white transition-colors border border-gray-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <project.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-sm font-semibold text-red-600">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-red-600 font-semibold hover:text-red-700 flex items-center">
                    View Details
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Project Success Metrics</h2>
            <p className="text-xl text-white">Proven track record of excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-red-100">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-red-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">Safety Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$500M+</div>
              <div className="text-red-100">Project Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Next Project</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and innovation
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
