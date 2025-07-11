"use client";

import { ArrowRight, Heart, Users, Star, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fruitbowl from "../assets/fruitbowl.png"; // Adjust path as needed

const Index = () => {
  const [counters, setCounters] = useState({
    meals: 0,
    customers: 0,
    donations: 0,
  });

  useEffect(() => {
    const targetValues = { meals: 12500, customers: 8750, donations: 12500 };
    const duration = 3000;
    const steps = 100;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        meals: Math.floor(targetValues.meals * progress),
        customers: Math.floor(targetValues.customers * progress),
        donations: Math.floor(targetValues.donations * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const bowlCategories = [
    {
      name: "Rice Bowls",
      description: "Hearty, nutritious rice bowls with fresh ingredients",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      price: "From ₹199",
      popular: true,
    },
    {
      name: "Sprout Bowls",
      description: "Fresh, protein-rich sprout bowls packed with vitamins",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      price: "From ₹199",
      popular: false,
    },
    {
      name: "Fruit Bowls",
      description: "Sweet, refreshing fruit combinations",
      image: fruitbowl,
      price: "From ₹299",
      popular: false,
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* S-Curve Vertical Right Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            viewBox="0 0 320 1440"
            preserveAspectRatio="none"
            className="absolute top-0 right-0 h-full w-[95%]"
          >
            <path
              fill="#FFA500"
              fillOpacity="1"
              d="M200,0 C100,460 240,1480 10,1440 L320,1440 L320,0 Z"
            ></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl">
          {/* Content Left */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-200 mb-6 sm:mb-8">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Order One, Donate One
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Nourish
              </span>
              <br />
              <span className="text-gray-800">Communities</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed">
              Delicious bowls delivered to your door. For every bowl you order,
              we donate one to people in need. Good food, great cause.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                to="/services"
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Order Now
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/about"
                className="group relative border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-500 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
                  {counters.meals.toLocaleString()}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  Meals Delivered
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  Happy Customers
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">
                  {counters.donations.toLocaleString()}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  Meals Donated
                </div>
              </div>
            </div>
          </div>

          {/* Fruit Bowl Right */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] max-w-full">
              <img
                src={fruitbowl}
                alt="Fresh fruit bowl"
                className="w-full h-full object-contain gentle-rotate animate-gentle-rotate"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <style>{`
            @keyframes gentle-rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-gentle-rotate {
              animation: gentle-rotate 70s linear infinite;
            }
          `}</style>
      </section>

      {/* Bowl Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Bowl Collection
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Fresh, healthy, and delicious vegetarian bowls crafted with love
              and delivered with purpose
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bowlCategories.map((category, index) => (
              <div
                key={category.name}
                className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
              >
                {category.popular && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="relative overflow-hidden h-32 w-32 sm:h-40 sm:w-40 aspect-square mx-auto mb-2 sm:mb-3 rounded-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
                  {category.description}
                </p>
                <div className="flex justify-between items-center w-full max-w-xs">
                  <span className="text-sm sm:text-base font-semibold text-orange-500">
                    {category.price}
                  </span>
                  <Link
                    to="/services"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                    aria-label={`Order ${category.name}`}
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At 99 Bowls, we believe that good food should be accessible to
                everyone. That's why for every bowl you order, we donate an
                identical meal to people in need through our partnership with
                local charities.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    1:1 donation ratio for every order
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Supporting local communities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Sustainable and eco-friendly practices
                  </span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Learn more about our impact"
              >
                Learn More About Our Impact
                <ArrowRight className="ml-2 w-4 h-4 sm:w-4 sm:h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                  alt="Community impact"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
                  loading="lazy"
                />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    Making a Difference
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Together, we're building a world where no one goes hungry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Real stories from our amazing community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-sm sm:text-base font-semibold text-gray-800">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
            Order your favorite vegetarian bowl today and help us feed people in
            need. Every order counts, every meal matters.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-white text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Start ordering"
          >
            Start Ordering
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
