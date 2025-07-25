import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Award } from 'lucide-react';

const Corporate = () => {
  const [corporateForm, setCorporateForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '',
    experience: '',
    message: ''
  });

  const handleCorporateSubmit = (e) => {
    e.preventDefault();
    console.log('Corporate inquiry form submitted:', corporateForm);
    // Add corporate inquiry form submission logic here
  };

  const corporateStats = [
    { icon: TrendingUp, label: "Growth Rate", value: "150%", description: "Year over year" },
    { icon: Users, label: "Happy Customers", value: "50K+", description: "Monthly orders" },
    { icon: Award, label: "Success Rate", value: "95%", description: "Franchise success" }
  ];

  const corporateBenefits = [
    "Proven business model with strong ROI",
    "Comprehensive training and ongoing support",
    "Marketing and brand development assistance",
    "Exclusive territory rights",
    "Low initial investment with high returns",
    "Eco-friendly and health-conscious brand positioning"
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Corporate <span className="text-orange-500">Opportunities</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing family of successful franchise partners with 99 Bowls.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Franchise Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {corporateStats.map((stat, index) => (
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
                  {corporateBenefits.map((benefit, index) => (
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
                <CardTitle>Corporate Inquiry</CardTitle>
                <p className="text-sm text-gray-600">
                  Submit your details to explore corporate partnership opportunities with us.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCorporateSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="corporate-name">Full Name *</Label>
                    <Input
                      id="corporate-name"
                      placeholder="Your full name"
                      value={corporateForm.name}
                      onChange={(e) => setCorporateForm({ ...corporateForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="corporate-email">Email *</Label>
                    <Input
                      id="corporate-email"
                      type="email"
                      placeholder="your@email.com"
                      value={corporateForm.email}
                      onChange={(e) => setCorporateForm({ ...corporateForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="corporate-phone">Phone *</Label>
                    <Input
                      id="corporate-phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={corporateForm.phone}
                      onChange={(e) => setCorporateForm({ ...corporateForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="corporate-location">Preferred Location *</Label>
                    <Input
                      id="corporate-location"
                      placeholder="City, State"
                      value={corporateForm.location}
                      onChange={(e) => setCorporateForm({ ...corporateForm, location: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investment">Available Investment</Label>
                    <Input
                      id="investment"
                      placeholder="Investment amount"
                      value={corporateForm.investment}
                      onChange={(e) => setCorporateForm({ ...corporateForm, investment: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Business Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about your business experience..."
                      rows={3}
                      value={corporateForm.experience}
                      onChange={(e) => setCorporateForm({ ...corporateForm, experience: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any additional details..."
                      rows={3}
                      value={corporateForm.message}
                      onChange={(e) => setCorporateForm({ ...corporateForm, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Submit Corporate Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
