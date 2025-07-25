import { Heart, Users, Award, Target, Globe, Utensils } from 'lucide-react';
import { useEffect } from 'react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every meal ordered is a step towards ending child hunger in our communities.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building stronger neighborhoods through shared meals and collective action.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Fresh, nutritious ingredients in every bowl, prepared with care and love.',
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Our goal is simple: feed the hungry while serving delicious, healthy food.',
    },
  ];

  const stats = [
    { number: '50,000+', label: 'Meals Donated', icon: Utensils },
    { number: '25+', label: 'Partner Charities', icon: Heart },
    { number: '15', label: 'Cities Served', icon: Globe },
    { number: '98%', label: 'Customer Satisfaction', icon: Award },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'Founded with a simple mission: for every bowl sold, donate one to a child in need.',
    },
    {
      year: '2023',
      title: 'First Partnership',
      description: 'Partnered with local food banks to establish our donation network.',
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Expanded to 15 cities and established partnerships with 25+ charities.',
    },
    {
      year: '2024',
      title: 'Impact Milestone',
      description: 'Reached 50,000 meals donated to children in need across our communities.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">99 Bowls</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than just a food delivery service. We're a movement dedicated to 
              nourishing communities and ending people hunger, one bowl at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                99 Bowls was born from a simple yet powerful idea: what if every meal we 
                enjoyed could also feed a people in need? Our founders noticed the stark 
                contrast between food abundance and food insecurity in our communities.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to operate on a 1:1 donation model. For every bowl you 
                order from us, we donate an identical meal to people through our network 
                of trusted charity partners.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that good food should bring people together and that no one 
                should go to bed hungry. That's why we're committed to making a meaningful 
                impact with every order.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
                alt="Our mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-orange-500">1:1</div>
                <div className="text-sm text-gray-600">Donation Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90">Numbers that matter to us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our mission</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="ml-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-semibold text-orange-500 mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default About;
