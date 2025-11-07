import { ArrowRight, Heart, Users, Star, Globe, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
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

  const handleShare = async (item, event) => {
    const shareData = {
      title: item.name,
      text: `${item.description.split(".")[0]}. Check it out at 99 Bowls!`,
      url: `https://99bowls.com/menu/${item.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = encodeURIComponent(
          `${shareData.title}: ${shareData.text} ${shareData.url}`
        );
        const shareOptions = [
          { name: "WhatsApp", url: `https://wa.me/?text=${shareText}` },
          {
            name: "Twitter",
            url: `https://twitter.com/intent/tweet?text=${shareText}`,
          },
          {
            name: "Facebook",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareData.url
            )}`,
          },
          {
            name: "Copy Link",
            action: () => {
              navigator.clipboard.writeText(
                `${shareData.title}: ${shareData.text} ${shareData.url}`
              );
              alert("Link copied to clipboard!");
            },
          },
        ];

        const shareMenu = shareOptions.map((option) => (
          <button
            key={option.name}
            onClick={() =>
              option.action
                ? option.action()
                : window.open(option.url, "_blank")
            }
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            {option.name}
          </button>
        ));

        const shareMenuContainer = document.createElement("div");
        shareMenuContainer.className =
          "absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg";
        shareMenuContainer.style.top = "100%";
        shareMenuContainer.style.left = "0";
        ReactDOM.render(shareMenu, shareMenuContainer);
        event.currentTarget.appendChild(shareMenuContainer);

        const handleOutsideClick = (e) => {
          if (!shareMenuContainer.contains(e.target)) {
            shareMenuContainer.remove();
            document.removeEventListener("click", handleOutsideClick);
          }
        };
        document.addEventListener("click", handleOutsideClick);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
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
                  <div className="flex gap-1 sm:gap-2">
                    <Link
                      to={`https://www.swiggy.com/search?query=${item.name}`}
                      className="bg-orange-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Swiggy
                    </Link>
                    <Link
                      to={`https://www.zomato.com/search?query=${item.name}`}
                      className="bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zomato
                    </Link>
                    <button
                      onClick={(e) => handleShare(item, e)}
                      className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative"
                    >
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vision, Mission, and Core Values Section */}
      {showMenuSection && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Purpose
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-full sm:max-w-2xl mx-auto">
                Discover the vision, mission, and values that drive 99 Bowls to
                nourish both bodies and communities.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* Vision */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Vision
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  To be the leading choice for healthy, nourishing, and
                  convenient food that empowers individuals to live their best
                  lives—one bowl at a time. We envision a world where nutritious
                  meals are accessible to everyone, fostering vibrant
                  communities, healthier lifestyles, and sustainable choices.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Mission
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  At 99 Bowls, we're dedicated to providing healthy, fresh, and
                  delicious food delivered right to your doorstep. Our carefully
                  crafted menu—from Rice Bowls to Immunity Boosters—is designed
                  to fuel your body and mind with energy, supporting wellness
                  goals across the spectrum. We promise no compromise on
                  quality, ensuring every bowl is packed with goodness. By
                  prioritizing sustainability and empowering women in business,
                  we aim to build a more inclusive and healthier society—while
                  nourishing both bodies and communities.
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Core Values
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-100 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Freshness & Quality First
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We're committed to providing only the freshest,
                        highest-quality ingredients in every bowl. No shortcuts,
                        no compromises—just food that's as nourishing as it is
                        delicious.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Health-Centric Innovation
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We create bowls that cater to diverse wellness
                        needs—whether it's weight loss, immunity boosting, heart
                        health, or muscle-building. Every recipe is thoughtfully
                        designed to support your journey toward a healthier
                        lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Community-Driven Impact
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        At 99 Bowls, food is more than just fuel—it's a way to
                        bring people together. We're proud to support local
                        communities, offering free meals to thousands and
                        creating spaces where health and well-being are the
                        focal point.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-purple-100 rounded-full flex items-center justify-center">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Empowerment Through Choice
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We believe in the power of choice, whether it's through
                        our customizable bowls or our commitment to women's
                        empowerment. By partnering with female franchisee
                        owners, we create opportunities for women to lead and
                        thrive in business.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Sustainability & Responsibility
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        Our food choices are rooted in sustainability—ensuring
                        we make responsible sourcing decisions, and our
                        packaging is eco-friendly. We're dedicated to nurturing
                        both personal health and the health of our planet.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                        Integrity in Every Bite
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        We stand behind every bowl, delivering on our promise of
                        taste, energy, and health benefits. What you see is what
                        you get—pure, wholesome, and honest food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Reviews Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-orange-500 mb-4">
                  Expert Reviews
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="font-semibold text-gray-800 mb-1">
                      Dr. Anjali Mehta, Nutritionist
                    </div>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-600 text-sm">
                      "99Bowls offers a perfect balance of taste and nutrition.
                      Their focus on fresh ingredients and healthy recipes is
                      commendable!"
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="font-semibold text-gray-800 mb-1">
                      Chef Rahul Singh, Culinary Expert
                    </div>
                    <div className="text-yellow-400 mb-2">★★★★☆</div>
                    <p className="text-gray-600 text-sm">
                      "The variety and creativity in their bowls make healthy
                      eating exciting. Highly recommended for anyone looking for
                      nutritious options."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="font-semibold text-gray-800 mb-1">
                      Dr. Priya Sharma, Dietician
                    </div>
                    <div className="text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-600 text-sm">
                      "I appreciate their commitment to sustainability and
                      community health. 99Bowls is setting a new standard in the
                      food industry."
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Reels Section */}
              <div className="mb-12 overflow-hidden">
                <h3 className="text-xl font-bold text-orange-500 mb-4">
                  Video Reels
                </h3>
                <div className="relative overflow-hidden">
                  <div className="animate-scroll-horizontal hover:pause-scroll flex">
                    {[
                      "https://www.youtube.com/embed/7ghhRHRP6t4",
                      "https://www.youtube.com/embed/oAVJ9mQUZd8",
                      "https://www.youtube.com/embed/I1_vgJjvlu4",
                      "https://www.youtube.com/embed/XwdqEC2jOnk",
                      "https://www.youtube.com/embed/6p8kSjNg464",
                      "https://www.youtube.com/embed/1aBcD3eF5gH",
                      "https://www.youtube.com/embed/8hIjK9lL2mN",
                      "https://www.youtube.com/embed/4pQrS7tUvWw",
                      // Duplicate for seamless loop
                      "https://www.youtube.com/embed/7ghhRHRP6t4",
                      "https://www.youtube.com/embed/oAVJ9mQUZd8",
                      "https://www.youtube.com/embed/I1_vgJjvlu4",
                      "https://www.youtube.com/embed/XwdqEC2jOnk",
                      "https://www.youtube.com/embed/6p8kSjNg464",
                      "https://www.youtube.com/embed/1aBcD3eF5gH",
                      "https://www.youtube.com/embed/8hIjK9lL2mN",
                      "https://www.youtube.com/embed/4pQrS7tUvWw",
                    ].map((embedUrl, index) => (
                      <div
                        key={`${index}-${embedUrl}`}
                        className="flex-shrink-0 w-48 h-80 rounded-lg overflow-hidden shadow relative group mx-2"
                      >
                        <iframe
                          src={`${embedUrl}?autoplay=1&mute=1&loop=1&playlist=${
                            embedUrl.split("/embed/")[1]
                          }&controls=0&playsinline=1`}
                          className="w-full h-full object-cover"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/60">
                          <button
                            className="bg-white text-black px-3 py-1 rounded-full font-semibold"
                            onClick={() =>
                              window.open(
                                `https://youtube.com/shorts/${
                                  embedUrl.split("/embed/")[1]
                                }`,
                                "_blank"
                              )
                            }
                          >
                            Watch
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <style>
                {`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll-horizontal {
                  animation: scroll 40s linear infinite;
                  width: max-content;
                }
                .animate-scroll-horizontal:hover {
                  animation-play-state: paused;
                }
              `}
              </style>
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

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-full sm:max-w-2xl mx-auto">
              Real stories from our amazing community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-2 sm:mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-xs sm:text-base font-semibold text-gray-800">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        id="blogs"
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Blogs
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              Insights, tips, and stories from the 99 Bowls community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold text-gray-800 mb-1">
                5 Reasons to Choose Healthy Bowls
              </div>
              <div className="text-gray-400 text-xs mb-2">
                by Team 99Bowls | July 2024
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                Discover why healthy bowls are the best choice for your daily
                nutrition and how they can transform your lifestyle.
              </p>
              <a
                href="#"
                className="text-orange-500 mt-2 text-sm font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold text-gray-800 mb-1">
                How We Source Our Ingredients Sustainably
              </div>
              <div className="text-gray-400 text-xs mb-2">
                by Priya S. | June 2024
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                A behind-the-scenes look at our sustainable sourcing practices
                and our commitment to the environment.
              </p>
              <a
                href="#"
                className="text-orange-500 mt-2 text-sm font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="font-semibold text-gray-800 mb-1">
                Empowering Women Through Food
              </div>
              <div className="text-gray-400 text-xs mb-2">
                by Anjali M. | May 2024
              </div>
              <p className="text-gray-600 text-sm flex-grow">
                Learn how 99Bowls is creating opportunities for women
                entrepreneurs and making a difference in the community.
              </p>
              <a
                href="#"
                className="text-orange-500 mt-2 text-sm font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreOrder;