
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                99 Bowls
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nourishing communities, one bowl at a time. For every order you place, we donate a meal to children in need.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">+1 (555) 99-BOWLS</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">hello@99bowls.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400">123 Food Street, City</span>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating a world where good food brings people together and no child goes hungry.
            </p>
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-500/30">
              <p className="text-orange-400 text-sm font-medium">
                🎯 Goal: 10,000 meals donated this year
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 99 Bowls. All rights reserved. Made with ❤️ for a better world.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
