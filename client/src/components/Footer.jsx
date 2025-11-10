import { Heart, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Bowls.png"; // Adjust the path as necessary

const Footer = () => {
  const location = useLocation();

  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com/@99Bowls",
      label: "YouTube",
    },
    {
      icon: FaPinterest,
      href: "http://www.pinterest.com/99bowlin",
      label: "Pinterest",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/99bowl.in",
      label: "Instagram",
    },
    { icon: FaWhatsapp, href: "https://wa.me/number", label: "WhatsApp" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Subscribe", href: "/subscribe" },
    { name: "Locations", href: "/locations" },
    { name: "Franchise", href: "/franchise" },
  ];

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Prevent navigation if already on home page
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on home page, allow Link to navigate to '/'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center space-x-2"
            >
              <img
                src={logo || "https://via.placeholder.com/150"}
                alt="Bowls Logo"
                className="h-12 w-auto object-contain sm:h-16"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                Bowls
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nourishing communities, one bowl at a time. For every order you
              place, we donate a meal to people in need.
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
              <a
                href="tel:+919313728283"
                className="flex items-center space-x-3 text-sm hover:text-orange-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400 hover:text-orange-400">+91 93137 28283</span>
              </a>
              <a
                href="mailto:hello@99bowls.com"
                className="flex items-center space-x-3 text-sm hover:text-orange-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400 hover:text-orange-400">hello@99bowls.com</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No.+14,+Titanium+City+Centre,+Anand+Nagar+Road,+Satellite,+Ahmedabad+-+380015"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-orange-400 transition-colors duration-300"
              >
                <MapPin className="w-16 h-16 text-orange-400" />
                <span className="text-gray-400 hover:text-orange-400">
                  Shop No. 14, Titanium City Centre, Near Sachin Tower, Anand
                  Nagar Road, Satellite, Ahmedabad - 380015
                </span>
              </a>
            </div>
            {/* Franchise Inquiry Button */}
            <Link
              to="/franchise"
              className="inline-block text-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mt-2 sm:mt-4 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Franchise
            </Link>
          </div>

          {/* Mission Statement */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating a world where good food brings people together and no one
              goes hungry.
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
            © 2025 99 Bowls. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              Cookie Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
