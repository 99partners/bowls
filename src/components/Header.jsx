import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../assets/Bowls.png'; // Old logo
import { useScrollContext } from '../ScrollContext';
import bowlsLogo from '../assets/99 Bowls New.png'; // New logo

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollProgress } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <span className="relative w-20 h-20 min-w-[80px] flex-shrink-0">
              {/* Old logo fades out as scrollProgress approaches 1 */}
              {/* <img
                src={logo}
                alt="Bowls Logo Old"
                className="h-20 w-auto object-contain absolute left-0 top-0"
                style={{
                  opacity: 1 - scrollProgress,
                  transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                  zIndex: 2,
                }}
              /> */}
              {/* New logo fades in as scrollProgress approaches 1 */}
              <img
                src={bowlsLogo}
                alt="Bowls Logo New"
                className="h-20 w-auto object-contain absolute left-0 top-0"
                style={{
                  opacity: scrollProgress,
                  transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                  zIndex: 3,
                }}
              />
            </span>
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-orange-500 relative z-10">
              Bowls
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <Link
              to="/franchise"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Franchise
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden" onClick={() => setIsOpen(false)}></div>
        )}
        <div className={`md:hidden fixed top-16 left-0 w-full z-50 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
          style={{boxShadow: isOpen ? '0 8px 32px rgba(0,0,0,0.12)' : undefined}}
        >
          <div className="bg-white shadow-lg rounded-b-2xl py-4 px-4 space-y-2 border-t border-orange-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/franchise"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mt-4 text-base shadow-md"
            >
              Franchise
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
