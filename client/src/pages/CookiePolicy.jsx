import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how we use cookies to enhance your experience on our website.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Cookie Usage</CardTitle>
            <CardDescription>
              Last updated: {new Date().toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-base leading-7">
            <p className="text-gray-700">
              This Cookie Policy explains what cookies are, how we use them, and your choices regarding their usage.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small data files stored on your browser to recognize you, track activity, and enhance your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">How We Use Cookies</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Enable key features and functionality</li>
                <li>Provide performance and usage analytics</li>
                <li>Store user preferences</li>
                <li>Deliver personalized ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Types of Cookies</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Essential:</strong> Necessary for login and authentication</li>
                <li><strong>Analytics:</strong> Help us understand user behavior and improve performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Third-party Cookies</h2>
              <p className="text-gray-700">
                We may use third-party services such as Google Analytics that place their own cookies for reporting and ad targeting purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Your Choices</h2>
              <p className="text-gray-700">
                You can control or delete cookies through your browser settings. Disabling cookies may affect some site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">More Info</h2>
              <ul className="list-disc list-inside text-orange-600 space-y-1 ml-4">
                <li><a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">AllAboutCookies.org</a></li>
                <li><a href="http://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Network Advertising Initiative</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Contact Us</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>Email: support@99bowls.in</span>
                </li>
                <li>
                  Visit:{" "}
                  <Link to="/contact" className="text-orange-600 hover:text-orange-800 font-medium underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;