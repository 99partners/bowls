
"use client"

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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fruitbowl from '../assets/fruitbowl.png'; // Adjust path as necessary

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const categories = [
    { id: "all", name: "All Bowls" },
    { id: "rice", name: "Rice Bowls" },
    { id: "sprout", name: "Sprout Bowls" },
    { id: "fruit", name: "Fruit Bowls" },
  ];

  const bowls = [
    {
      id: 1,
      name: "Paneer Tikka Rice",
      category: "rice",
      price: 249,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Spicy paneer tikka with fragrant basmati rice, grilled vegetables, and a creamy tomato sauce - 100% vegetarian",
      rating: 4.9,
      popular: true,
      prep_time: "15-20 min",
    },
    {
      id: 2,
      name: "Mexican Fried Rice",
      category: "rice",
      price: 229,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description: "Zesty fried rice with bell peppers, sweet corn, black beans, and a tangy salsa - a vegetarian Mexican delight",
      rating: 4.7,
      popular: true,
      prep_time: "12-18 min",
    },
    {
      id: 3,
      name: "Dal Fry-Jeera Rice",
      category: "rice",
      price: 199,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Comforting dal fry with cumin-spiced jeera rice, served with fresh onions and a hint of ghee - pure vegetarian comfort",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 4,
      name: "Rajma-Chawal",
      category: "rice",
      price: 199,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Hearty red kidney beans in a spiced tomato gravy, paired with fluffy basmati rice - a vegetarian North Indian classic",
      rating: 4.8,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 5,
      name: "Dal Makhani Rice",
      category: "rice",
      price: 199,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Creamy dal makhani with black lentils and spices, served with aromatic basmati rice - rich vegetarian indulgence",
      rating: 4.7,
      popular: false,
      prep_time: "18-22 min",
    },
    {
      id: 6,
      name: "Punjabi Chole-Rice",
      category: "rice",
      price: 199,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Spicy Punjabi chole with chickpeas in a tangy masala, paired with steamed basmati rice - vegetarian soul food",
      rating: 4.6,
      popular: false,
      prep_time: "15-20 min",
    },
    {
      id: 7,
      name: "Brussels Sprouts Grain",
      category: "sprout",
      price: 199,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description: "Roasted Brussels sprouts with quinoa, mixed greens, and a lemon-tahini dressing - wholesome vegetarian nutrition",
      rating: 4.5,
      popular: false,
      prep_time: "10-15 min",
    },
    {
      id: 8,
      name: "Sattvik Buddha Bowl",
      category: "sprout",
      price: 249,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description: "Sprouted moong, brown rice, roasted vegetables, and a sattvik yogurt dressing - pure vegetarian bliss",
      rating: 4.9,
      popular: true,
      prep_time: "12-15 min",
    },
    {
      id: 9,
      name: "Usal Power Bowl",
      category: "sprout",
      price: 199,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description: "Spicy Maharashtrian usal with sprouted lentils, quinoa, and fresh herbs - a vegetarian protein powerhouse",
      rating: 4.7,
      popular: true,
      prep_time: "10-15 min",
    },
    {
      id: 10,
      name: "Chana Math Mix",
      category: "sprout",
      price: 199,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      description: "Sprouted chana and math beans with cucumber, tomatoes, and a tangy chaat masala - light vegetarian refreshment",
      rating: 4.6,
      popular: false,
      prep_time: "10-12 min",
    },
    {
      id: 11,
      name: "Tropical Bliss Bowl",
      category: "fruit",
      price: 399,
      image: fruitbowl,
      description: "Exotic mango, pineapple, and kiwi with a coconut yogurt drizzle and granola - a tropical vegetarian delight",
      rating: 4.9,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 12,
      name: "Rainbow Fruit Medley",
      category: "fruit",
      price: 299,
      image: fruitbowl,
      description: "Colorful mix of seasonal fruits like strawberries, bananas, and oranges with a honey-lime dressing - vegetarian refreshment",
      rating: 4.8,
      popular: true,
      prep_time: "5-10 min",
    },
    {
      id: 13,
      name: "Exotic Fusion",
      category: "fruit",
      price: 599,
      image: fruitbowl,
      description: "Premium dragon fruit, passion fruit, and lychee with a chia seed topping - a luxurious vegetarian treat",
      rating: 4.9,
      popular: false,
      prep_time: "8-10 min",
    },
    {
      id: 14,
      name: "Mango Tango",
      category: "fruit",
      price: 299,
      image: fruitbowl,
      description: "Juicy mango chunks with blueberries and a mint-yogurt drizzle - a vibrant vegetarian fruit bowl",
      rating: 4.7,
      popular: false,
      prep_time: "5-10 min",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "1:1 Donation Promise",
      description: "Every vegetarian bowl you order donates one to a person in need",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "All our vegetarian meals are prepared by women entrepreneurs we support",
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Fresh vegetarian bowls delivered in 30 minutes or less",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "No delivery fees on orders over ₹500",
    },
    {
      icon: Check,
      title: "Fresh Vegetarian Ingredients",
      description: "Locally sourced, organic vegetarian ingredients when possible",
    },
    {
      icon: Zap,
      title: "Community Impact",
      description: "Supporting local women-owned businesses and promoting vegetarian nutrition",
    },
  ];

  const filteredBowls =
    selectedCategory === "all"
      ? bowls
      : bowls.filter((bowl) => bowl.category === selectedCategory);

  const addToCart = (bowlId: number) => {
    setCart((prev) => ({
      ...prev,
      [bowlId]: (prev[bowlId] || 0) + 1,
    }));
  };

  const removeFromCart = (bowlId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[bowlId] > 1) {
        newCart[bowlId]--;
      } else {
        delete newCart[bowlId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [bowlId, count]) => {
      const bowl = bowls.find((b) => b.id === parseInt(bowlId));
      return total + (bowl ? bowl.price * count : 0);
    }, 0);
  };

  const handleCheckout = () => {
    alert(
      `Checkout - Total: ₹${getTotalPrice().toFixed(
        2
      )} for ${getTotalItems()} items. Payment integration coming soon!`
    );
  };

  return (
    <div className="min-h-screen pt-16">
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
              Every meal is lovingly prepared by women entrepreneurs
              in our community. By choosing 99 Bowls, you're not just enjoying
              healthy vegetarian food and feeding a person in need – you're
              empowering women to build sustainable businesses while promoting
              plant-based nutrition.
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

      {/* Order Cart Summary */}
      {getTotalItems() > 0 && (
        <div className="fixed top-20 right-4 z-40">
          <Card className="w-64 bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center justify-between">
                Cart ({getTotalItems()})
                <span className="text-green-500">
                  ₹{getTotalPrice().toFixed(2)}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {Object.entries(cart).map(([bowlId, count]) => {
                const bowl = bowls.find((b) => b.id === parseInt(bowlId));
                return bowl ? (
                  <div
                    key={bowlId}
                    className="flex justify-between items-center mb-2 text-sm"
                  >
                    <span className="truncate">{bowl.name}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(parseInt(bowlId))}
                        className="w-6 h-6 bg-red-100 text-red-600 rounded-full text-xs hover:bg-red-200"
                      >
                        -
                      </button>
                      <span>{count}</span>
                      <button
                        onClick={() => addToCart(parseInt(bowlId))}
                        className="w-6 h-6 bg-green-100 text-green-600 rounded-full text-xs hover:bg-green-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : null;
              })}
              <Button
                onClick={handleCheckout}
                className="w-full mt-3 bg-gradient-to-r from-green-500 to-orange-500 hover:shadow-lg"
              >
                Checkout Now
              </Button>
              <div className="text-xs text-center text-green-600 mt-2 flex items-center justify-center">
                <Heart className="w-3 h-3 mr-1" />+{getTotalItems()} vegetarian
                meals donated
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent">
                Menu
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our selection of fresh, healthy vegetarian bowls
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mt-4 text-sm">
              <span>🌿</span>
              <span>All ingredients are 100% Vegetarian</span>
              <span>🌿</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBowls.map((bowl) => (
              <div
                key={bowl.id}
                className="group transition-all duration-500 transform hover:-translate-y-2"
              >
                {bowl.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}

                <div className="absolute top-4 right-4 z-10 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  🌱 Vegetarian
                </div>

                <div className="relative overflow-hidden w-48 h-48 mx-auto mb-4 rounded-full">
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                </div>

                <div className="p-6 text-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {bowl.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {bowl.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {bowl.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{bowl.prep_time}</span>
                    </div>
                    <span className="text-2xl font-bold text-green-500">
                      ₹{bowl.price}
                    </span>
                  </div>

                  <div className="flex space-x-2 justify-center">
                    <Button
                      onClick={() => addToCart(bowl.id)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-orange-500 text-white hover:shadow-lg transition-all duration-300 hover:scale-[1.02] max-w-xs"
                    >
                      Add to Cart
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    {cart[bowl.id] && (
                      <div className="flex items-center bg-gray-100 rounded-full px-3">
                        <span className="text-sm font-medium">
                          {cart[bowl.id]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 flex justify-between text-center">
                    <div className="inline-flex items-center space-x-1 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      <Heart className="w-3 h-3" />
                      <span>+1 meal donated</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 text-sm text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                      <Users className="w-3 h-3" />
                      <span>Women-made</span>
                    </div>
                  </div>
                </div>
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
              Simple steps to make a triple impact with vegetarian food
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Choose Your Vegetarian Bowl",
                description: "Select from our menu of fresh, healthy vegetarian bowls crafted with love by women entrepreneurs.",
                icon: "🥗",
              },
              {
                step: "2",
                title: "Women Empowerment",
                description: "Your order directly supports women-owned businesses preparing delicious vegetarian meals.",
                icon: "👩‍🍳",
              },
              {
                step: "3",
                title: "Donate to Needy People",
                description: "We donate an identical vegetarian meal to a person in need through our 1:1 program.",
                icon: "❤️",
              },
              {
                step: "4",
                title: "Enjoy & Impact",
                description: "Receive your fresh vegetarian meal knowing you've made a triple positive impact.",
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact with Food?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of customers creating positive change with every meal. Feed yourself, empower women, and help needy people –
            all in one order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Order
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
