import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-xl">⚡</span>
              </div>
              <span className="text-xl font-bold">PowerTech</span>
            </div>
            <p className="text-red-100 mb-4">
              Leading electrical solutions provider with innovative technology and expert services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-red-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-red-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-red-100 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/milestone" className="text-red-100 hover:text-white transition-colors">Milestones</Link></li>
              <li><Link to="/contact" className="text-red-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/electrical-needs" className="text-red-100 hover:text-white transition-colors">Electrical Products</Link></li>
              <li><Link to="/what-we-do" className="text-red-100 hover:text-white transition-colors">What We Do</Link></li>
              <li><Link to="/our-team" className="text-red-100 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/connect" className="text-red-100 hover:text-white transition-colors">Connect With Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-red-100">123 Power Street, Electric City, EC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-red-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-red-100">info@powertech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-100 text-sm mb-4 md:mb-0">
            © 2026 PowerTech Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-red-100 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-red-100 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
