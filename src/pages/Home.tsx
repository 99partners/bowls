
import { ArrowRight, Heart, Users, Utensils, Star, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
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
      name: 'Rice Bowls',
      description: 'Hearty, nutritious rice bowls with fresh ingredients',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      price: 'From $8.99',
      popular: true,
    },
    {
      name: 'Salad Bowls',
      description: 'Fresh, crispy salads packed with vitamins',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      price: 'From $7.99',
      popular: false,
    },
    {
      name: 'Fruit Bowls',
      description: 'Sweet, refreshing fruit combinations',
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=400&h=300&fit=crop',
      price: 'From $6.99',
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Not only is the food amazing, but knowing that I\'m helping feed children makes every meal special.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      text: 'The rice bowls are incredibly fresh and filling. Love the mission behind 99 Bowls!',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      text: 'Best salad bowls in town! The social impact aspect makes it even better.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 mb-8">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Order One, Donate One</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Nourish
              </span>
              <br />
              <span className="text-gray-800">Communities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Delicious bowls delivered to your door. For every bowl you order, 
              we donate one to children in need. Good food, great cause.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/services"
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Impact Counters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {counters.meals.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Meals Delivered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {counters.donations.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Meals Donated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bowl Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Bowl Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh, healthy, and delicious bowls crafted with love and delivered with purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bowlCategories.map((category, index) => (
              <div
                key={category.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {category.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-orange-500">{category.price}</span>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At 99 Bowls, we believe that good food should be accessible to everyone. 
                That's why for every bowl you order, we donate an identical meal to children 
                in need through our partnership with local charities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700">1:1 donation ratio for every order</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-700">Supporting local communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-gray-700">Sustainable and eco-friendly practices</span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More About Our Impact
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                  alt="Community impact"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Making a Difference
                  </h3>
                  <p className="text-gray-600">
                    Together, we're building a world where no child goes hungry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from our amazing community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Order your favorite bowl today and help us feed children in need. 
            Every order counts, every meal matters.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Ordering
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
