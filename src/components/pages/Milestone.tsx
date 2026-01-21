import { Calendar, Award, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Milestone() {
  const milestones = [
    {
      year: '2001',
      title: 'Company Founded',
      description: 'PowerTech Solutions established with a team of 5 passionate engineers',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwbWlsZXN0b25lJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzY4OTc5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2005',
      title: 'First Major Contract',
      description: 'Secured our first industrial power distribution project worth $2M',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzY4OTc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2008',
      title: 'Expansion & Growth',
      description: 'Opened second office and expanded team to 50 employees',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2010',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1731910275165-5e5e4052d28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODk2NTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2013',
      title: 'Green Initiative',
      description: 'Launched sustainable energy solutions division focusing on solar and renewable energy',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1726221062299-88f27b653c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwc3lzdGVtfGVufDF8fHx8MTc2ODkxOTM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2015',
      title: '100th Project Milestone',
      description: 'Successfully completed our 100th major project with outstanding client satisfaction',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbnxlbnwxfHx8fDE3Njg5NzEyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2018',
      title: 'Smart Technology Integration',
      description: 'Pioneered smart building automation and IoT-enabled electrical systems',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODkyOTYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2020',
      title: 'International Expansion',
      description: 'Extended operations to 5 countries with global partnerships',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY4OTY1MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Awarded "Electrical Contractor of the Year" by National Electrical Association',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwbWlsZXN0b25lJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzY4OTc5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2024',
      title: 'Innovation Center Launch',
      description: 'Opened state-of-the-art R&D facility for next-generation electrical solutions',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1654574111863-210e61acd47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhdWRpdCUyMGVmZmljaWVuY3l8ZW58MXx8fHwxNzY4OTc5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      year: '2026',
      title: '25 Years of Excellence',
      description: 'Celebrating a quarter century of innovation, quality, and customer satisfaction',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwZW5naW5lZXJzfGVufDF8fHx8MTc2ODk3OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwbWlsZXN0b25lJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzY4OTc5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Milestones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Our Journey of Excellence</h1>
          <p className="text-xl text-white max-w-2xl">
            25 years of innovation, growth, and remarkable achievements
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-red-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-red-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-red-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-red-100">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Milestone Timeline</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey through our most significant achievements and moments
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <ImageWithFallback
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                      {milestone.year}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Calendar className="w-10 h-10 text-red-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Looking Ahead</h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            As we celebrate 25 years of success, we're more committed than ever to pushing the boundaries of innovation. Our vision for the next decade includes expanding our sustainable energy solutions, advancing smart grid technology, and continuing to deliver exceptional value to our clients worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
