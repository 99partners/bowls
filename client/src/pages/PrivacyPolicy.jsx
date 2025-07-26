import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Data Protection</CardTitle>
            <CardDescription>
              Last updated: {new Date().toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-base leading-7">
            <p className="text-gray-700">
              This Privacy Policy describes how <strong>99 Bowls</strong> collects, uses, and discloses your personal
              information when you visit our website <strong>99bowls.in</strong>.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone number, etc.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, etc.
                </li>
                <li>
                  <strong>Cookies:</strong> Used to track preferences and enhance performance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>To improve our website and services</li>
                <li>To notify you about updates or changes</li>
                <li>To respond to customer inquiries</li>
                <li>For website analytics and performance tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Disclosure of Data</h2>
              <p className="text-gray-700">
                We may disclose your personal information if required by law or necessary to protect our legal rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Security of Data</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to safeguard your data. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-600 mb-2">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Last updated on <strong>26th July 2025</strong>.
              </p>
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

export default PrivacyPolicy;