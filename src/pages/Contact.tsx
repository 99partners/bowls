
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2, TrendingUp, Users, Award, LogIn } from 'lucide-react';
import LoginForm from '../components/LoginForm';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [franchiseForm, setFranchiseForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '',
    experience: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Add form submission logic here
  };

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Franchise form submitted:', franchiseForm);
    // Add franchise form submission logic here
  };

  const franchiseStats = [
    { icon: TrendingUp, label: "Growth Rate", value: "150%", description: "Year over year" },
    { icon: Users, label: "Happy Customers", value: "50K+", description: "Monthly orders" },
    { icon: Award, label: "Success Rate", value: "95%", description: "Franchise success" }
  ];

  const franchiseBenefits = [
    "Proven business model with strong ROI",
    "Comprehensive training and ongoing support",
    "Marketing and brand development assistance",
    "Exclusive territory rights",
    "Low initial investment with high returns",
    "Eco-friendly and health-conscious brand positioning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a customer, potential partner, or interested in our franchise opportunities, we'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-gray-600">
                      123 Healthy Bowl Street<br />
                      Green Valley, GV 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-gray-600">+1 (555) 99-BOWLS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-600">hello@99bowls.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-sm text-gray-600">
                      Mon-Fri: 9:00 AM - 8:00 PM<br />
                      Sat-Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Forms and Login Section */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contact">General Inquiry</TabsTrigger>
                <TabsTrigger value="franchise">Franchise</TabsTrigger>
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </TabsTrigger>
              </TabsList>

              {/* Contact Form */}
              <TabsContent value="contact">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      We'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Franchise Inquiry */}
              <TabsContent value="franchise">
                <div className="space-y-6">
                  {/* Franchise Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {franchiseStats.map((stat, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="pt-6">
                          <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                          <div className="text-xs text-gray-500">{stat.description}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Franchise Benefits */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-orange-500" />
                          Why Choose 99 Bowls?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {franchiseBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Franchise Form */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Franchise Inquiry</CardTitle>
                        <CardDescription>
                          Join our growing family of successful franchise partners
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleFranchiseSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="franchise-name">Full Name *</Label>
                            <Input
                              id="franchise-name"
                              placeholder="Your full name"
                              value={franchiseForm.name}
                              onChange={(e) => setFranchiseForm({ ...franchiseForm, name: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="franchise-email">Email *</Label>
                            <Input
                              id="franchise-email"
                              type="email"
                              placeholder="your@email.com"
                              value={franchiseForm.email}
                              onChange={(e) => setFranchiseForm({ ...franchiseForm, email: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="franchise-phone">Phone *</Label>
                            <Input
                              id="franchise-phone"
                              type="tel"
                              placeholder="Your phone number"
                              value={franchiseForm.phone}
                              onChange={(e) => setFranchiseForm({ ...franchiseForm, phone: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="franchise-location">Preferred Location *</Label>
                            <Input
                              id="franchise-location"
                              placeholder="City, State"
                              value={franchiseForm.location}
                              onChange={(e) => setFranchiseForm({ ...franchiseForm, location: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="investment">Available Investment</Label>
                            <Input
                              id="investment"
                              placeholder="Investment amount"
                              value={franchiseForm.investment}
                              onChange={(e) => setFranchiseForm({ ...franchiseForm, investment: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experience">Business Experience</Label>
                            <Textarea
                              id="experience"
                              placeholder="Tell us about your business experience..."
                              rows={3}
                              value={franchiseForm.experience}
                              onChange={(e) => setFranchiseForm({ ...franchiseForm, experience: e.target.value })}
                            />
                          </div>
                          <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                            Submit Franchise Inquiry
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Login Section */}
              <TabsContent value="login">
                <div className="flex justify-center">
                  <LoginForm />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
