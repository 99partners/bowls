import React, { useState, useEffect } from 'react';
import API_CONFIG from '../config/api.js';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Award } from 'lucide-react';

const Franchise = () => {
  const [franchiseForm, setFranchiseForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '',
    experience: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setFranchiseForm({ ...franchiseForm, phone: value });
    setErrors({
      ...errors,
      phone: value.length === 10 ? '' : 'Phone number must be exactly 10 digits'
    });
  };

  const handleEmailInput = (e) => {
    const value = e.target.value;
    setFranchiseForm({ ...franchiseForm, email: value });
    setErrors({
      ...errors,
      email: validateEmail(value) ? '' : 'Please enter a valid email address'
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleFranchiseSubmit = async (e) => {
    e.preventDefault();
    
    const emailError = validateEmail(franchiseForm.email) ? '' : 'Please enter a valid email address';
    const phoneError = validatePhone(franchiseForm.phone) ? '' : 'Phone number must be exactly 10 digits';
    
    setErrors({ email: emailError, phone: phoneError });

    if (!emailError && !phoneError) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      try {
        const response = await fetch(`${API_CONFIG.baseUrl}/api/inquiries`, {
          method: 'POST',
          headers: API_CONFIG.headers,
          body: JSON.stringify({
            inquiryType: 'franchise', // Updated inquiryType
            name: franchiseForm.name,
            email: franchiseForm.email,
            phone: franchiseForm.phone,
            location: franchiseForm.location,
            investment: franchiseForm.investment,
            experience: franchiseForm.experience,
            message: franchiseForm.message
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you for your inquiry. We will contact you soon!',
          });
          setFranchiseForm({
            name: '',
            email: '',
            phone: '',
            location: '',
            investment: '',
            experience: '',
            message: ''
          });
        } else {
          throw new Error(data.message || 'Failed to submit inquiry');
        }
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: error.message || 'An error occurred while submitting the form. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
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
            Franchise
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing family of successful franchise partners with 99 Bowls.
          </p>
        </div>

        {/* Main Content */}
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
                <CardTitle>Franchise</CardTitle>
                <p className="text-sm text-gray-600">
                  Submit your details to explore franchise partnership opportunities with us.
                </p>
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
                      onChange={handleEmailInput}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="franchise-phone">Phone *</Label>
                    <Input
                      id="franchise-phone"
                      type="tel"
                      placeholder="1234567890"
                      value={franchiseForm.phone}
                      onChange={handlePhoneInput}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      maxLength={10}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any additional details..."
                      rows={3}
                      value={franchiseForm.message}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, message: e.target.value })}
                    />
                  </div>
                  {submitStatus.message && (
                    <div className={`p-3 rounded-md mb-4 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default Franchise;