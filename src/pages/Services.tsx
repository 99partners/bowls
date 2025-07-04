
import { Check, Clock, Truck, Heart, Star, ArrowRight, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const categories = [
    { id: 'all', name: 'All Bowls' },
    { id: 'rice', name: 'Rice Bowls' },
    { id: 'salad', name: 'Salad Bowls' },
    { id: 'fruit', name: 'Fruit Bowls' },
  ];

  const bowls = [
    {
      id: 1,
      name: 'Teriyaki Chicken Bowl',
      category: 'rice',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      description: 'Grilled chicken with teriyaki sauce, steamed rice, broccoli, and carrots',
      rating: 4.8,
      popular: true,
      prep_time: '15-20 min',
    },
    {
      id: 2,
      name: 'Mediterranean Rice Bowl',
      category: 'rice',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      description: 'Seasoned rice with grilled vegetables, feta cheese, olives, and tzatziki',
      rating: 4.7,
      popular: false,
      prep_time: '12-18 min',
    },
    {
      id: 3,
      name: 'Caesar Salad Bowl',
      category: 'salad',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=400&h=300&fit=crop',
      description: 'Fresh romaine lettuce, parmesan cheese, croutons, and caesar dressing',
      rating: 4.6,
      popular: false,
      prep_time: '8-12 min',
    },
    {
      id: 4,
      name: 'Rainbow Fruit Bowl',
      category: 'fruit',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=400&h=300&fit=crop',
      description: 'Mixed seasonal fruits with honey drizzle and granola',
      rating: 4.9,
      popular: true,
      prep_time: '5-10 min',
    },
    {
      id: 5,
      name: 'Quinoa Power Bowl',
      category: 'salad',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      description: 'Quinoa, mixed greens, roasted chickpeas, avocado, and tahini dressing',
      rating: 4.8,
      popular: true,
      prep_time: '15-20 min',
    },
    {
      id: 6,
      name: 'Asian Fusion Bowl',
      category: 'rice',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      description: 'Jasmine rice, stir-fried vegetables, tofu, and ginger soy sauce',
      rating: 4.7,
      popular: false,
      prep_time: '18-22 min',
    },
  ];

  const features = [
    {
      icon: Heart,
      title: '1:1 Donation Promise',
      description: 'Every bowl you order donates one to a child in need',
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'All our meals are prepared by women entrepreneurs we support',
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Fresh bowls delivered in 30 minutes or less',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'No delivery fees on orders over $15',
    },
    {
      icon: Check,
      title: 'Fresh Ingredients',
      description: 'Locally sourced, organic ingredients when possible',
    },
    {
      icon: Zap,
      title: 'Community Impact',
      description: 'Supporting local women-owned businesses and food security',
    },
  ];

  const filteredBowls = selectedCategory === 'all' 
    ? bowls 
    : bowls.filter(bowl => bowl.category === selectedCategory);

  const addToCart = (bowlId: number) => {
    setCart(prev => ({
      ...prev,
      [bowlId]: (prev[bowlId] || 0) + 1
    }));
  };

  const removeFromCart = (bowlId: number) => {
    setCart(prev => {
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
      const bowl = bowls.find(b => b.id === parseInt(bowlId));
      return total + (bowl ? bowl.price * count : 0);
    }, 0);
  };

  const handleCheckout = () => {
    // This would typically integrate with a payment processor
    alert(`Checkout - Total: $${getTotalPrice().toFixed(2)} for ${getTotalItems()} items. Payment integration coming soon!`);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Delicious, nutritious bowls delivered fresh to your door. Every order makes a difference 
            in a child's life through our 1:1 donation program and supports women entrepreneurs.
          </p>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 max-w-2xl mx-auto mb-12 border border-pink-200">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Users className="w-6 h-6 text-pink-600" />
              <span className="text-lg font-semibold text-pink-800">Women Empowerment Mission</span>
            </div>
            <p className="text-pink-700 leading-relaxed">
              Every meal is lovingly prepared by women entrepreneurs in our community. 
              By choosing 99 Bowls, you're not just feeding yourself and a child in need – 
              you're empowering women to build sustainable businesses and support their families.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
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
                <span className="text-orange-500">${getTotalPrice().toFixed(2)}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {Object.entries(cart).map(([bowlId, count]) => {
                const bowl = bowls.find(b => b.id === parseInt(bowlId));
                return bowl ? (
                  <div key={bowlId} className="flex justify-between items-center mb-2 text-sm">
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
                className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg"
              >
                Checkout Now
              </Button>
              <div className="text-xs text-center text-green-600 mt-2 flex items-center justify-center">
                <Heart className="w-3 h-3 mr-1" />
                +{getTotalItems()} meals donated
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
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Menu</span>
            </h2>
            <p className="text-xl text-gray-600">Choose from our selection of fresh, healthy bowls</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {bowl.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden h-48">
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{bowl.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{bowl.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{bowl.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{bowl.prep_time}</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-500">${bowl.price}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => addToCart(bowl.id)}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      Add to Cart
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    {cart[bowl.id] && (
                      <div className="flex items-center bg-gray-100 rounded-full px-3">
                        <span className="text-sm font-medium">{cart[bowl.id]}</span>
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
              How It <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Simple steps to make a triple impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Your Bowl',
                description: 'Select from our menu of fresh, healthy bowls crafted with love by women entrepreneurs.',
                icon: '🥣',
              },
              {
                step: '2',
                title: 'Support Women',
                description: 'Your order directly supports women-owned businesses in our community.',
                icon: '👩‍🍳',
              },
              {
                step: '3',
                title: 'Feed a Child',
                description: 'We donate an identical meal to a child in need through our 1:1 program.',
                icon: '❤️',
              },
              {
                step: '4',
                title: 'Enjoy & Impact',
                description: 'Receive your fresh meal knowing you\'ve made a triple positive impact.',
                icon: '🌟',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of customers creating positive change with every meal. 
            Feed yourself, empower women, and help children – all in one order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Order
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300">
              Learn Our Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
