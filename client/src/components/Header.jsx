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
    { name: 'Our Menu', path: '/#menu' },
    { name: 'Preorder', path: '/preorder' },
    { name: 'Subscribe', path: '/subscribe' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blogs', path: '/#blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (e, path) => {
    if (location.pathname === '/' && (path === '/' || path.includes('#'))) {
      e.preventDefault(); // Prevent navigation for Home, Our Menu, Blogs on home page
      const hash = path.includes('#') ? path.split('#')[1] : null;
      const sectionId = hash || 'hero'; // Use 'hero' for Home link
      const scrollToSection = () => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(scrollToSection, 100); // Retry if section not found
        }
      };
      scrollToSection();
    }
    // Allow navigation for other links (Contact, Subscribe, Locations)
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center space-x-2 sm:space-x-4 group">
            <span className="relative w-14 h-14 min-w-[56px] sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0">
              {/* New logo fades in on home page, shows immediately on other pages */}
              <img
                src={bowlsLogo}
                alt="Bowls Logo New"
                className="h-14 w-auto sm:h-16 md:h-20 object-contain absolute left-0 top-0"
                style={{
                  opacity: location.pathname === '/' ? scrollProgress : 1,
                  transition: location.pathname === '/' ? 'opacity 0.3s cubic-bezier(0.4,0,0.2,1)' : 'none',
                  zIndex: 3,
                }}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`relative px-2 py-1 lg:px-3 lg:py-2 text-base lg:text-sm font-medium transition-colors duration-300 ${
                  location.pathname + location.hash === item.path
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${
                  location.pathname + location.hash === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8" />}
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
          <div className="bg-white shadow-lg rounded-b-2xl py-2 px-2 sm:py-4 sm:px-4 space-y-1 sm:space-y-2 border-t border-orange-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => {
                  handleNavClick(e, item.path);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-lg transition-colors duration-300 ${
                  location.pathname + location.hash === item.path
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;