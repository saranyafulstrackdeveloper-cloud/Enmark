import { Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ElectricalNeeds() {
  const products = [
    {
      name: 'Power Transformers',
      image: 'https://images.unsplash.com/photo-1758758184258-fe390c93d1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdHJhbnNmb3JtZXIlMjBwb3dlcnxlbnwxfHx8fDE3Njg5MjUwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '11kV - 132kV',
      type: 'Distribution & Power',
    },
    {
      name: 'Circuit Breakers',
      image: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYnJlYWtlciUyMHBhbmVsfGVufDF8fHx8MTc2ODk3OTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '415V - 33kV',
      type: 'Protection Device',
    },
    {
      name: 'Industrial Generators',
      image: 'https://images.unsplash.com/photo-1658260867231-535a1f7c98b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VuZXJhdG9yfGVufDF8fHx8MTc2ODk3MDAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '220V - 11kV',
      type: 'Backup Power',
    },
    {
      name: 'Electric Motors',
      image: 'https://images.unsplash.com/photo-1649038780045-235e4b6e40b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbW90b3J8ZW58MXx8fHwxNzY4OTc5MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '230V - 11kV',
      type: 'Induction Motor',
    },
    {
      name: 'Switchgear Systems',
      image: 'https://images.unsplash.com/photo-1566417110090-6b15a06ec800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2l0Y2hnZWFyJTIwZWxlY3RyaWNhbHxlbnwxfHx8fDE3Njg5Nzk1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '415V - 33kV',
      type: 'Low & Medium Voltage',
    },
    {
      name: 'Solar Panel Systems',
      image: 'https://images.unsplash.com/photo-1726221062299-88f27b653c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwc3lzdGVtfGVufDF8fHx8MTc2ODkxOTM5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '12V - 1000V DC',
      type: 'Renewable Energy',
    },
    {
      name: 'LED Lighting Solutions',
      image: 'https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBsaWdodGluZyUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzY4OTcyMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '110V - 277V',
      type: 'Commercial & Industrial',
    },
    {
      name: 'Power Cables & Wires',
      image: 'https://images.unsplash.com/photo-1584809923235-fabdba83d1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2FibGVzJTIwd2lyZXN8ZW58MXx8fHwxNzY4OTEyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '230V - 132kV',
      type: 'Copper & Aluminum',
    },
    {
      name: 'Distribution Units',
      image: 'https://images.unsplash.com/photo-1741449840536-a758bb0cdaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRpc3RyaWJ1dGlvbiUyMHVuaXR8ZW58MXx8fHwxNzY4OTEwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '230V - 11kV',
      type: 'PDU & Bus Systems',
    },
    {
      name: 'Control Panels',
      image: 'https://images.unsplash.com/photo-1758873263414-7b23df5e2002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcGFuZWwlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODk3OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '24V - 415V',
      type: 'PLC & Automation',
    },
    {
      name: 'Voltage Regulators',
      image: 'https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x0YWdlJTIwcmVndWxhdG9yfGVufDF8fHx8MTc2ODk2OTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '110V - 480V',
      type: 'Automatic Voltage Regulator',
    },
    {
      name: 'Protection Relays',
      image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcmVsYXklMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2ODk3NDUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '110V - 415V',
      type: 'Digital & Numerical',
    },
    {
      name: 'Capacitor Banks',
      image: 'https://images.unsplash.com/photo-1751783901059-3d1870e69581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FwYWNpdG9yJTIwYmFua3xlbnwxfHx8fDE3Njg5Nzk1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '415V - 11kV',
      type: 'Power Factor Correction',
    },
    {
      name: 'UPS Systems',
      image: 'https://images.unsplash.com/photo-1741449840536-a758bb0cdaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRpc3RyaWJ1dGlvbiUyMHVuaXR8ZW58MXx8fHwxNzY4OTEwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: '120V - 480V',
      type: 'Uninterruptible Power Supply',
    },
    {
      name: 'Testing Equipment',
      image: 'https://images.unsplash.com/photo-1767042286080-446afa2c78d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg5MjUxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      voltageRange: 'Multi-Range',
      type: 'Diagnostic & Testing',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758758184258-fe390c93d1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdHJhbnNmb3JtZXIlMjBwb3dlcnxlbnwxfHx8fDE3Njg5MjUwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Electrical Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Electrical Products & Equipment</h1>
          <p className="text-xl text-white max-w-2xl">
            Premium quality electrical products with comprehensive specifications
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading electrical equipment from trusted manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-200 group"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm font-semibold text-gray-600">Voltage Range:</span>
                      <span className="text-sm text-red-600 font-bold">{product.voltageRange}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm font-semibold text-gray-600">Type:</span>
                      <span className="text-sm text-gray-900">{product.type}</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-white">Quality, reliability, and performance guaranteed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5 Years</div>
              <div className="text-red-100">Warranty Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-red-100">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">ISO</div>
              <div className="text-red-100">Certified Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you select the perfect equipment for your needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
