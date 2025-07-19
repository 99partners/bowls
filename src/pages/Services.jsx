"use client";

import { useState } from "react";
import {
  Check,
  Clock,
  Truck,
  Heart,
  Star,
  ArrowRight,
  Users,
  Zap,
} from "lucide-react";
import fruitbowl1 from "../assets/fruitbowl1.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Fallback image if fruitbowl.png is missing
const fallbackImage = "https://via.placeholder.com/400x400.png?text=No+Image";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  

  const bowls = [
    {
      id: 1,
      name: "Paneer Tikka Rice",
      category: "rice",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description:
        "Spicy paneer tikka with fragrant basmati rice, grilled vegetables, and a creamy tomato sauce - 100% vegetarian",
      rating: 4.9,
      popular: true,
      prep_time: "15-20 min",
    },
    {
      id: 2,
      name: "Mexican Fried Rice",
      category: "rice",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description:
        "Zesty fried rice with bell peppers, sweet corn, black beans, and a tangy salsa - a vegetarian Mexican delight",
      rating: 4.7,
      popular: true,
      prep_time: "12-18 min",
    },
    {
      id: 3,
      name: "Dal Fry-Jeera Rice",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description:
        "Comforting dal fry with cumin-spiced jeera rice, served with fresh onions and a hint of ghee - pure vegetarian comfort",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 4,
      name: "Rajma-Chawal",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description:
        "Hearty red kidney beans in a spiced tomato gravy, paired with fluffy basmati rice - a vegetarian North Indian classic",
      rating: 4.8,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 5,
      name: "Dal Makhani Rice",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description:
        "Creamy dal makhani with black lentils and spices, served with aromatic basmati rice - rich vegetarian indulgence",
      rating: 4.7,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 6,
      name: "Punjabi Chole-Rice",
      category: "rice",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description:
        "Spicy Punjabi chole with chickpeas in a tangy masala, paired with steamed basmati rice - vegetarian soul food",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 7,
      name: "Brussels Sprouts Grain",
      category: "sprout",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description:
        "Roasted Brussels sprouts with quinoa, mixed greens, and a lemon-tahini dressing - wholesome vegetarian nutrition",
      rating: 4.5,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 8,
      name: "Sattvik Buddha Bowl",
      category: "sprout",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description:
        "Sprouted moong, brown rice, roasted vegetables, and a sattvik yogurt dressing - pure vegetarian bliss",
      rating: 4.9,
      popular: true,
      prep_time: "12-15 min",
    },
    {
      id: 9,
      name: "Usal Power Bowl",
      category: "sprout",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description:
        "Spicy Maharashtrian usal with sprouted lentils, quinoa, and fresh herbs - a vegetarian protein powerhouse",
      rating: 4.7,
      popular: true,
      prep_time: "10-15 min",
    },
    {
      id: 10,
      name: "Chana Math Mix",
      category: "sprout",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description:
        "Sprouted chana and math beans with cucumber, tomatoes, and a tangy chaat masala - light vegetarian refreshment",
      rating: 4.6,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 11,
      name: "Tropical Bliss Bowl",
      category: "fruit",
      price: 399,
      image: fruitbowl1, // Fallback if fruitbowl.png is missing
      description:
        "Exotic mango, pineapple, and kiwi with a coconut yogurt drizzle and granola - a tropical vegetarian delight",
      rating: 4.9,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 12,
      name: "Rainbow Fruit Medley",
      category: "fruit",
      price: 299,
      image: fruitbowl1, // Fallback if fruitbowl.png is missing
      description:
        "Colorful mix of seasonal fruits like strawberries, bananas, and oranges with a honey-lime dressing - vegetarian refreshment",
      rating: 4.8,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 13,
      name: "Exotic Fusion",
      category: "fruit",
      price: 599,
      image: fruitbowl1, // Fallback if fruitbowl.png is missing
      description:
        "Premium dragon fruit, passion fruit, and lychee with a chia seed topping - a luxurious vegetarian treat",
      rating: 4.9,
      popular: false,
      prep_time: "8-10 min",
    },
    {
      id: 14,
      name: "Mango Tango",
      category: "fruit",
      price: 299,
      image: fruitbowl1, // Fallback if fruitbowl.png is missing
      description:
        "Juicy mango chunks with blueberries and a mint-yogurt drizzle - a vibrant vegetarian fruit bowl",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
  ];

  const features = [
    
    {
      icon: Users,
      title: "Women Empowerment",
      description:
        "All our vegetarian meals are prepared by women entrepreneurs we support",
    },
    {
      icon: Clock,
      title: "Quick Food",
      description: "Fresh vegetarian bowls delivered in 30 minutes or less",
    },
    {
      icon: Check,
      title: "Fresh Vegetarian Ingredients",
      description:
        "Locally sourced, organic vegetarian ingredients when possible",
    },
    {
      icon: Zap,
      title: "Community Impact",
      description:
        "Every bowl you order donates one to a people in need",
    },
  ];

  const filteredBowls =
    selectedCategory === "all"
      ? bowls
      : bowls.filter((bowl) => bowl.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
            <span>🌱</span>
            <span>100% VEGETARIAN</span>
            <span>🌱</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Delicious, nutritious bowls delivered fresh to your door.
            Every order makes a difference in a person's life through our 1:1
            donation program and supports women entrepreneurs.
          </p>
          <div className="bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl p-6 max-w-2xl mx-auto mb-12 border border-green-200">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-lg font-semibold text-green-800">
                Women Empowerment + Donate
              </span>
            </div>
            <p className="text-green-700 leading-relaxed">
              Every meal is lovingly prepared by women entrepreneurs in our
              community. By choosing 99 Bowls, you're not just enjoying healthy
              food and feeding a person in need – you're empowering
              women to build sustainable businesses while promoting plant-based
              nutrition.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to make a triple impact with quick food
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Choose Your Bowl",
                description:
                  "Select from our menu of fresh, healthy bowls crafted with love by women entrepreneurs.",
                icon: "🥗",
              },
              {
                step: "2",
                title: "Women Empowerment",
                description:
                  "Your order directly supports women-owned businesses preparing delicious healthy & quick meals.",
                icon: "👩‍🍳",
              },
              {
                step: "3",
                title: "Donate to Needy People",
                description:
                  "We donate an identical meal to a person in need through our 1:1 program.",
                icon: "❤️",
              },
              {
                step: "4",
                title: "Enjoy & Impact",
                description:
                  "Receive your fresh meal knowing you've made a triple positive impact.",
                icon: "🌟",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
