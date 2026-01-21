import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Milestone', path: '/milestone' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Electrical Needs', path: '/electrical-needs' },
    { name: 'What We Do', path: '/what-we-do' },
  ];

  const companyLinks = [
    { name: 'Our Team', path: '/our-team' },
    { name: 'Connect With Us', path: '/connect' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <nav className="bg-red-600 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-red-600 text-2xl">⚡</span>
            </div>
            <span className="text-white text-2xl font-bold">PowerTech Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'bg-red-700 text-white'
                    : 'text-white hover:bg-red-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
                className="px-4 py-2 rounded-md text-white hover:bg-red-700 transition-colors flex items-center"
              >
                Company
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {companyDropdownOpen && (
                <div
                  onMouseEnter={() => setCompanyDropdownOpen(true)}
                  onMouseLeave={() => setCompanyDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-red-700 border-t border-red-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md ${
                  isActive(link.path)
                    ? 'bg-red-800 text-white'
                    : 'text-white hover:bg-red-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-red-600">
              <p className="px-4 py-2 text-red-200 text-sm font-semibold">Company</p>
              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-red-800 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
