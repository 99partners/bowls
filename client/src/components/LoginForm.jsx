import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, User, Building2 } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  });
  const [partnerForm, setPartnerForm] = useState({
    email: '',
    password: '',
    businessName: ''
  });

  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log('User login:', userForm);
    // Add login logic here
  };

  const handlePartnerLogin = (e) => {
    e.preventDefault();
    console.log('Partner login:', partnerForm);
    // Add partner login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="user" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            User Login
          </TabsTrigger>
          <TabsTrigger value="partner" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Partner Login
          </TabsTrigger>
        </TabsList>

        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Welcome Back!</CardTitle>
              <CardDescription className="text-center">
                Sign in to your 99 Bowls account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUserLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input
                    id="user-email"
                    type="email"
                    placeholder="your@email.com"
                    value={userForm.email}
                    onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="user-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={userForm.password}
                      onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Sign In
                </Button>
                <div className="text-center space-y-2">
                  <a href="#" className="text-sm text-orange-500 hover:underline">
                    Forgot your password?
                  </a>
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-orange-500 hover:underline">
                      Sign up here
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="partner">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Partner Portal</CardTitle>
              <CardDescription className="text-center">
                Access your franchise dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePartnerLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="partner-business">Business Name</Label>
                  <Input
                    id="partner-business"
                    type="text"
                    placeholder="Your Business Name"
                    value={partnerForm.businessName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, businessName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-email">Email</Label>
                  <Input
                    id="partner-email"
                    type="email"
                    placeholder="partner@email.com"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="partner-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={partnerForm.password}
                      onChange={(e) => setPartnerForm({ ...partnerForm, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Access Dashboard
                </Button>
                <div className="text-center space-y-2">
                  <a href="#" className="text-sm text-orange-500 hover:underline">
                    Forgot your credentials?
                  </a>
                  <p className="text-sm text-gray-600">
                    New partner?{' '}
                    <a href="#" className="text-orange-500 hover:underline">
                      Apply for franchise
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginForm;