import { Mail, Phone, MapPin, Clock, Send, Heart, Store, Users, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [franchiseData, setFranchiseData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '',
    experience: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('contact');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Franchise inquiry submitted:', franchiseData);
    alert('Thank you for your franchise inquiry! Our team will contact you within 24 hours.');
    setFranchiseData({ name: '', email: '', phone: '', location: '', investment: '', experience: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFranchiseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFranchiseData({
      ...franchiseData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 99-BOWLS',
      subtext: 'Mon-Fri 8AM-8PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@99bowls.com',
      subtext: 'We reply within 2 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Food Street, City',
      subtext: 'Serving 15+ cities',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: '7 Days a Week',
      subtext: '9AM - 10PM',
    },
  ];

  const faqs = [
    {
      question: 'How does the donation program work?',
      answer: 'For every bowl you order, we donate an identical meal to children in need through our partner charities. It\'s a simple 1:1 ratio.',
    },
    {
      question: 'What areas do you deliver to?',
      answer: 'We currently deliver to 15+ cities. Enter your zip code on our order page to check if we deliver to your area.',
    },
    {
      question: 'How fresh are the ingredients?',
      answer: 'We source fresh, local ingredients daily and prepare each bowl to order. Nothing sits around - everything is made fresh for you.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! You\'ll receive real-time updates via SMS and email from the moment your order is confirmed until it\'s delivered.',
    },
  ];

  const franchiseFeatures = [
    {
      icon: Store,
      title: 'Proven Business Model',
      description: 'Join our successful franchise network with established processes and support systems.',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Be part of a mission that feeds communities and empowers women entrepreneurs.',
    },
    {
      icon: TrendingUp,
      title: 'Growing Market',
      description: 'Enter the booming healthy food market with strong brand recognition.',
    },
    {
      icon: Award,
      title: 'Ongoing Support',
      description: 'Comprehensive training, marketing support, and operational guidance.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions about our bowls, donation program, or want to partner with us? 
            We'd love to hear from you!
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'contact'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-orange-500'
              }`}
            >
              General Inquiry
            </button>
            <button
              onClick={() => setActiveTab('franchise')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'franchise'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-orange-500'
              }`}
            >
              Franchise Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600 font-medium mb-1">{info.details}</p>
                <p className="text-gray-500 text-sm">{info.subtext}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Franchise Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            {activeTab === 'contact' && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 peer"
                        placeholder=" "
                      />
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? '-top-2 text-sm bg-white px-2 text-orange-500'
                          : 'top-3 text-gray-500'
                      }`}>
                        Your Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 peer"
                        placeholder=" "
                      />
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? '-top-2 text-sm bg-white px-2 text-orange-500'
                          : 'top-3 text-gray-500'
                      }`}>
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 peer"
                      placeholder=" "
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'subject' || formData.subject
                        ? '-top-2 text-sm bg-white px-2 text-orange-500'
                        : 'top-3 text-gray-500'
                    }`}>
                      Subject
                    </label>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 peer resize-none"
                      placeholder=" "
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2 text-sm bg-white px-2 text-orange-500'
                        : 'top-3 text-gray-500'
                    }`}>
                      Your Message
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            )}

            {/* Franchise Inquiry Form */}
            {activeTab === 'franchise' && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Franchise Inquiry</h2>
                <p className="text-gray-600 mb-6">Join our mission to feed communities while building a successful business.</p>
                
                <form onSubmit={handleFranchiseSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={franchiseData.name}
                        onChange={handleFranchiseChange}
                        onFocus={() => setFocusedField('franchise-name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder=" "
                      />
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'franchise-name' || franchiseData.name
                          ? '-top-2 text-sm bg-white px-2 text-orange-500'
                          : 'top-3 text-gray-500'
                      }`}>
                        Full Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={franchiseData.email}
                        onChange={handleFranchiseChange}
                        onFocus={() => setFocusedField('franchise-email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder=" "
                      />
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'franchise-email' || franchiseData.email
                          ? '-top-2 text-sm bg-white px-2 text-orange-500'
                          : 'top-3 text-gray-500'
                      }`}>
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={franchiseData.phone}
                        onChange={handleFranchiseChange}
                        onFocus={() => setFocusedField('franchise-phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder=" "
                      />
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'franchise-phone' || franchiseData.phone
                          ? '-top-2 text-sm bg-white px-2 text-orange-500'
                          : 'top-3 text-gray-500'
                      }`}>
                        Phone Number
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        value={franchiseData.location}
                        onChange={handleFranchiseChange}
                        onFocus={() => setFocusedField('franchise-location')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
                        placeholder=" "
                      />
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'franchise-location' || franchiseData.location
                          ? '-top-2 text-sm bg-white px-2 text-orange-500'
                          : 'top-3 text-gray-500'
                      }`}>
                        Preferred Location
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <select
                        name="investment"
                        value={franchiseData.investment}
                        onChange={handleFranchiseChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Investment Range</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-200k">$100K - $200K</option>
                        <option value="200k-500k">$200K - $500K</option>
                        <option value="500k+">$500K+</option>
                      </select>
                    </div>
                    
                    <div>
                      <select
                        name="experience"
                        value={franchiseData.experience}
                        onChange={handleFranchiseChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Business Experience</option>
                        <option value="none">No Prior Experience</option>
                        <option value="some">Some Business Experience</option>
                        <option value="restaurant">Restaurant Experience</option>
                        <option value="franchise">Franchise Experience</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      value={franchiseData.message}
                      onChange={handleFranchiseChange}
                      onFocus={() => setFocusedField('franchise-message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder=" "
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'franchise-message' || franchiseData.message
                        ? '-top-2 text-sm bg-white px-2 text-orange-500'
                        : 'top-3 text-gray-500'
                    }`}>
                      Additional Information
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group"
                  >
                    Submit Franchise Inquiry
                    <Store className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </form>
              </div>
            )}

            {/* Right Side Content */}
            <div className="space-y-8">
              {activeTab === 'contact' && (
                <>
                  <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                      alt="Our location"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Heart className="w-6 h-6 text-red-500" />
                      <h3 className="text-xl font-bold text-gray-800">Partner with Us</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Are you a charity organization working with children in need? 
                      We'd love to explore partnership opportunities.
                    </p>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </>
              )}

              {activeTab === 'franchise' && (
                <>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose 99 Bowls Franchise?</h3>
                    <div className="space-y-4">
                      {franchiseFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Our Growth</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">15+</div>
                        <div className="text-sm text-gray-600">Cities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">50K+</div>
                        <div className="text-sm text-gray-600">Meals Donated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">100+</div>
                        <div className="text-sm text-gray-600">Women Employed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">25+</div>
                        <div className="text-sm text-gray-600">Franchises</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our friendly team is here to help! Reach out to us through any of the channels above, 
            and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+155599BOWLS"
              className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Call Us Now
            </a>
            <a
              href="mailto:hello@99bowls.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
