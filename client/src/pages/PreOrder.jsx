import { ArrowRight, Heart, Users, Star, Globe, ShoppingCart, Plus, Minus, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import fruitbowl from "../assets/fruitbowl.webp";
import logo from "../assets/99 Bowls New.png";
import DalMakhni from "../assets/Dal Makhni.png";
import Maxican from "../assets/Maxican.png";
import Rajma from "../assets/Rajma.png";
import Sukhdi from "../assets/Sukhdi.png";
import Coke from "../assets/Coke.png";
import GulabJamun from "../assets/Gulab Jamun.png";
import CurdCup from "../assets/CurdCup.png";
import Chole from "../assets/Chole.png";
import ButterMilk from "../assets/Buttermilk.png";
import Dalfry from "../assets/Dalfry.png";
import Yogurt from "../assets/Yogurt.png";
import PaneerSprout from "../assets/Paneer Sprout.png"
import SproutBhel from "../assets/Sprout Bhel.png";
import PaneerBiryani from "../assets/Paneer Biryani.png";
import SpiceCurd from "../assets/SpiceCurd.png";
import PaneerTikka from "../assets/Paneer Tikka.png";
import { useScrollContext } from "../ScrollContext";
import { useIsMobile } from "../hooks/use-mobile";
import { useLocation } from "react-router-dom";

const PreOrder = () => {    
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [selectedView, setSelectedView] = useState("image");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const { showHeroLogo, scrollProgress } = useScrollContext();
  const isMobile = useIsMobile();
  const [showMenuSection, setShowMenuSection] = useState(true);
  const location = useLocation();
  
  // Cart and preorder states
  const [cart, setCart] = useState([]);
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  //helo
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show only hero section on mobile until user scrolls
  useEffect(() => {
    if (!isMobile) {
      setShowMenuSection(true);
      return;
    }
    setShowMenuSection(false);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowMenuSection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const bowls = [
    // 🥘 Bowls
    {
      id: 1,
      name: "Punjabi Chole Rice Bowl",
      category: "rice",
      price: { small: 99, large: 199 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: Chole,
      description: "Tangy Punjabi chickpea with steamed rice.",
      rating: 4.7,
      popular: true,
      prep_time: "15-20 min",
    },
    {
      id: 2,
      name: "Rajma Chawal Bowl",
      category: "rice",
      price: { small: 99, large: 199 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: Rajma,
      description: "Kidney beans in thick gravy with steamed rice.",
      rating: 4.8,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 3,
      name: "Dal Makhani Rice Bowl",
      category: "rice",
      price: { small: 99, large: 199 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: DalMakhni,
      description: "Creamy black lentils served with rice.",
      rating: 4.7,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 4,
      name: "Dal Fry Jeera Rice Bowl",
      category: "rice",
      price: { small: 99, large: 199 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: Dalfry,
      description: "Classic dal fry with aromatic jeera rice.",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 5,
      name: "Spiced Curd Rice Bowl",
      category: "rice",
      price: { small: 99, large: 199 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: SpiceCurd,
      description: "Cool and spiced curd rice for a refreshing meal.",
      rating: 4.6,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 6,
      name: "Paneer Tikka Rice Bowl",
      category: "rice",
      price: { small: 129, large: 249 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: PaneerTikka,
      description: "Tandoori paneer tikka served with flavorful rice.",
      rating: 4.9,
      popular: true,
      prep_time: "15-20 min",
    },
    {
      id: 7,
      name: "Mexican Rice Bowl",
      category: "rice",
      price: { small: 129, large: 249 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: Maxican,
      description: "Zesty and colorful Mexican-style rice.",
      rating: 4.7,
      popular: true,
      prep_time: "12-18 min",
    },
    {
      id: 8,
      name: "Paneer Veg Biryani",
      category: "rice",
      price: { small: 199, large: 399 },
      sizes: ["Small 200ml", "Large 700ml"],
      image: PaneerBiryani,
      description: "Aromatic biryani with paneer and fresh vegetables.",
      rating: 4.8,
      popular: true,
      prep_time: "20-25 min",
    },
    {
      id: 9,
      name: "Sprouted Salad Bhel Bowl",
      category: "salad",
      price: { small: 99, large: 199 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
       SproutBhel,
      description: "Healthy and tangy sprout bhel salad mix.",
      rating: 4.7,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 10,
      name: "Paneer Sprout Bowl",
      category: "salad",
      price: { small: 129, large: 249 },
      sizes: ["Small 200ml", "Large 700ml"],
      image:
        PaneerSprout,
      description: "Paneer and sprouts combined for a protein-packed meal.",
      rating: 4.8,
      popular: false,
      prep_time: "10-15 min",
    },

    // 🧁 Addons
    {
      id: 11,
      name: "Yogurt Dip",
      category: "addons",
      price: { one_size: 40 },
      sizes: ["One Size"],
      image:
        Yogurt,
      description: "Creamy yogurt dip with light spices.",
      rating: 4.6,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 12,
      name: "Spiced Buttermilk (200ml)",
      category: "addons",
      price: { one_size: 35 },
      sizes: ["One Size"],
      image:
        ButterMilk,
      description: "Cool and refreshing chaas with Indian spices.",
      rating: 4.7,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 13,
      name: "Sukhadi Bite",
      category: "addons",
      price: { one_size: 25 },
      sizes: ["One Size"],
      image:
        Sukhdi,
      description: "Traditional Gujarati sweet made with jaggery and ghee.",
      rating: 4.6,
      popular: false,
      prep_time: "10 min",
    },
    {
      id: 14,
      name: "Curd Cup (85g)",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        CurdCup,
      description: "Fresh curd cup, perfect to pair with your meal.",
      rating: 4.5,
      popular: false,
      prep_time: "5 min",
    },
    {
      id: 15,
      name: "Thums-up / Coke 300ml Can",
      category: "addons",
      price: { one_size: 40 },
      sizes: ["One Size"],
      image:
     Coke,
      description: "Refreshing cold beverage to complete your meal.",
      rating: 4.5,
      popular: true,
      prep_time: "2 min",
    },
    {
      id: 16,
      name: "Gulab Jamun (1 pc)",
      category: "addons",
      price: { one_size: 30 },
      sizes: ["One Size"],
      image:
        GulabJamun,
      description: "Soft, sweet gulab jamun soaked in syrup.",
      rating: 4.8,
      popular: true,
      prep_time: "5 min",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Not only is the food amazing, but knowing that I'm helping feed children makes every meal special.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "The rice bowls are incredibly fresh and filling. Love the mission behind 99 Bowls!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "Best salad bowls in town! The social impact aspect makes it even better.",
      rating: 5,
    },
  ];

  const filteredItems = bowls;

  // Keyboard navigation for modal (left/right arrows and escape)
  React.useEffect(() => {
    if (!selectedBowl) return;
    function handleKeyDown(e) {
      if (e.key === "ArrowRight" && selectedView === "image") {
        setSelectedView("details");
      } else if (e.key === "ArrowLeft" && selectedView === "details") {
        setSelectedView("image");
      } else if (e.key === "Escape") {
        setSelectedBowl(null);
        setSelectedView("image");
        document.body.style.overflow = "";
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBowl, selectedView]);

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const deltaX = touchStart - touchEnd;
      if (deltaX > 50 && selectedView === "image") {
        setSelectedView("details");
      } else if (deltaX < -50 && selectedView === "details") {
        setSelectedView("image");
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };



  // Cart management functions
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        const price = item.price.one_size || item.price.small || item.price.large;
        return [...prevCart, { ...item, quantity: 1, unitPrice: price }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Please add items to your cart before placing an order.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const orderData = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        address: formData.address,
        items: cart.map(item => ({
          itemId: String(item.id),
          name: item.name,
          unitPrice: item.unitPrice,
          quantity: item.quantity
        }))
      };

      const response = await fetch('http://localhost:5000/api/preorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Order placed successfully!');
        setCart([]);
        setShowPreorderForm(false);
        setFormData({ name: '', email: '', contact: '', address: '' });
      } else {
        alert('Error placing order: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error placing order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
      <section
        id="hero"
        className="relative z-10 min-h-[60vh] flex flex-col lg:flex-row items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 pt-16 md:pt-20"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            viewBox="0 0 320 1440"
            preserveAspectRatio="none"
            className="absolute top-0 right-0 h-full w-full lg:w-[95%]"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M200,1440 C90,980 240,0 50,0 L320,0 L320,1440 Z"
            ></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center w-full max-w-7xl">
          <div className="animate-fade-in relative mt-0 sm:-mt-8 md:-mt-16 lg:-mt-24 flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:justify-start mb-8 sm:mb-12 md:mb-16">
              <img
                src={logo}
                alt="99 Bowls Logo"
                className="w-24 sm:w-32 md:w-40 lg:w-56 object-contain"
                style={{
                  transform: `scale(${1 - 0.5 * scrollProgress}) translateY(${
                    -60 * scrollProgress
                  }px)`,
                  opacity: 1 - scrollProgress,
                  transition:
                    "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
                  pointerEvents: scrollProgress === 1 ? "none" : "auto",
                }}
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-6 leading-tight text-center lg:text-left -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
                <span>
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                    Taste bhi,
                  </span>
                  <br />

                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-600 bg-clip-text text-transparent pl-2 sm:pl-7">
                    &nbsp; Health bhi
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-8 max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed text-center lg:text-left">
                More than a meal — it's a step toward better health.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
              <img
                src={fruitbowl}
                alt="Fresh fruit bowl"
                className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
                loading="lazy"
              />
              <div
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 rounded-full border border-orange-200 mt-4 sm:mt-6 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-700"
                style={{
                  whiteSpace: "nowrap",
                  fontSize: isMobile ? "0.85rem" : undefined,
                  paddingLeft: isMobile ? "0.75rem" : undefined,
                  paddingRight: isMobile ? "0.75rem" : undefined,
                  paddingTop: isMobile ? "0.35rem" : undefined,
                  paddingBottom: isMobile ? "0.35rem" : undefined,
                }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                <span>Kindness with Every Order</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes gentle-rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-gentle-rotate {
            animation: gentle-rotate 250s linear infinite;
          }
        `}</style>
      </section>

      {/* Only show menu section if allowed (mobile: after scroll, desktop: always) */}
      {showMenuSection && (
        <section
          id="menu"
          className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Menu
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-600">
                Browse our selection of fresh, healthy bowls and add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div
                    className="relative overflow-hidden h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 aspect-square mx-auto mb-2 sm:mb-3 rounded-full cursor-pointer"
                    onClick={() => {
                      setSelectedBowl(item);
                      setSelectedView("image");
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400.png?text=Image+Not+Found";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                  </div>

                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
                    {item.description.split(".")[0] + "."}
                  </p>
                  <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-1"
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      Preorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      

      {selectedBowl && (
        <>
          {/* Prevent background scroll when modal is open */}
          <style>{`body { overflow: hidden !important; }`}</style>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedBowl(null);
                setSelectedView("image");
                document.body.style.overflow = "";
              }
            }}
            onWheel={(e) => {
              if (e.deltaX > 0 && selectedView === "image") {
                setSelectedView("details");
                e.preventDefault();
              } else if (e.deltaX < 0 && selectedView === "details") {
                setSelectedView("image");
                e.preventDefault();
              }
            }}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10"
              onClick={() => {
                setSelectedBowl(null);
                setSelectedView("image");
                document.body.style.overflow = "";
              }}
            >
              ×
            </button>

            {selectedView === "image" && (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src={selectedBowl.image}
                  alt={selectedBowl.name}
                  className="object-contain max-w-[90vw] max-h-[90vh] rounded-full shadow-2xl"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400.png?text=Image+Not+Found";
                  }}
                />
                <div className="flex gap-2 mt-4">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      selectedView === "image" ? "bg-orange-500" : "bg-gray-400"
                    } inline-block transition-all`}
                  ></span>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      selectedView === "details"
                        ? "bg-orange-500"
                        : "bg-gray-400"
                    } inline-block transition-all`}
                  ></span>
                </div>
                <p
                  className="text-xs sm:text-sm text-gray-300 mt-6 cursor-pointer text-center"
                  onClick={() => setSelectedView("details")}
                >
                  Swipe right or click for details
                </p>
              </div>
            )}

            {selectedView === "details" && (
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2 mt-4">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      selectedView === "image" ? "bg-orange-500" : "bg-gray-400"
                    } inline-block transition-all`}
                  ></span>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      selectedView === "details"
                        ? "bg-orange-500"
                        : "bg-gray-400"
                    } inline-block transition-all`}
                  ></span>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-90 p-4">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-center text-white">
                    {selectedBowl.name}
                  </h3>
                  <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-4 text-center">
                    {selectedBowl.description.split("Ingredients:")[0].trim()}.
                  </p>
                  {selectedBowl.description.includes("Ingredients:") && (
                    <div className="text-center">
                      <h4 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 text-white">
                        Ingredients:
                      </h4>
                      <p className="text-xs sm:text-base md:text-lg text-gray-300">
                        {selectedBowl.description
                          .split("Ingredients:")[1]
                          .trim()}
                      </p>
                    </div>
                  )}
                  <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-1 sm:mb-2 text-center">
                    Sizes: {selectedBowl.sizes.join(" / ")}
                  </p>
                  <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-4 text-center">
                    Price:{" "}
                    {selectedBowl.price.one_size
                      ? `₹${selectedBowl.price.one_size}`
                      : `Small: ₹${selectedBowl.price.small} / Large: ₹${selectedBowl.price.large}`}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-gray-300 mt-4 cursor-pointer text-center"
                    onClick={() => setSelectedView("image")}
                  >
                    Swipe left or click to go back
                  </p>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Cart Modal */}
      {showPreorderForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Preorder</h2>
              <button
                onClick={() => setShowPreorderForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            {cart.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Order Items</h3>
                <div className="space-y-3">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">₹{item.unitPrice}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Quantity: {getTotalQuantity()}</span>
                    <span className="font-semibold">Total Price: ₹{getTotalPrice()}</span>
                  </div>
                </div>
              </div>
            )}

            {/* User Details Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact *</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPreorderForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Place Preorder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cart Badge */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowPreorderForm(true)}
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        >
          <ShoppingCart className="w-6 h-6" />
          {getTotalQuantity() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {getTotalQuantity()}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default PreOrder;