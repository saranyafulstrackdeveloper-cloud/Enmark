import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OurTeam() {
  const teamMembers = [
    {
      name: 'Michael Anderson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: '25+ years of experience in electrical engineering and business leadership',
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODk2NTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Expert in smart systems and innovative electrical solutions',
    },
    {
      name: 'David Martinez',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Specializes in project management and operational excellence',
    },
    {
      name: 'Emily Chen',
      role: 'Lead Electrical Engineer',
      image: 'https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODk2NTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'PhD in Electrical Engineering with focus on renewable energy',
    },
    {
      name: 'James Wilson',
      role: 'Senior Project Manager',
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'PMP certified with extensive experience in large-scale projects',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Quality Assurance',
      image: 'https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODk2NTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'ISO auditor ensuring highest standards in all deliverables',
    },
    {
      name: 'Robert Brown',
      role: 'Automation Specialist',
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Expert in PLC programming and industrial control systems',
    },
    {
      name: 'Jennifer Lee',
      role: 'Solar Solutions Manager',
      image: 'https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODk2NTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Leading our renewable energy division with innovative solutions',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-white max-w-2xl">
            Expert professionals dedicated to delivering excellence
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The People Behind PowerTech</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our team brings together decades of combined experience in electrical engineering, 
            project management, and innovative technology solutions. We're committed to excellence, 
            safety, and delivering outstanding results for every client.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group border border-gray-200"
              >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-red-300 text-sm font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-red-50 transition-colors">
                      <Linkedin className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Team in Numbers</h2>
            <p className="text-xl text-white">Expertise and experience you can trust</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-red-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-red-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-red-100">Certified Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-red-100">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our growing team. 
              If you're passionate about electrical engineering and innovation, we'd love to hear from you.
            </p>
            <a
              href="/connect"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
