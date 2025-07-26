import React from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of <span className="text-orange-500">Service</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Service Agreement</CardTitle>
            <CardDescription>
              Last updated: {new Date().toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-7">
            <p className="text-gray-700">
              Welcome to <strong>99bowls.in</strong>! These Terms govern your use of our website and services. Please read them carefully.
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Accounts</h2>
              <p className="text-gray-700">
                When creating an account, you must provide accurate and complete information. You are responsible for
                maintaining the confidentiality of your password and all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Intellectual Property</h2>
              <p className="text-gray-700">
                All content, trademarks, and intellectual property displayed on this site are the property of 99 Bowls
                and protected by applicable copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Links to Other Sites</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the content, terms, or
                privacy policies of those external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Termination</h2>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate your access to our services at any time if you violate these
                Terms or engage in unlawful or abusive conduct.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of Maharashtra, India.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Changes to These Terms</h2>
              <p className="text-gray-700">
                We may revise these Terms of Service at any time. Last updated on <strong>26th July 2025</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-2">Contact Us</h2>
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
  )
}

export default TermsOfService;