'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collection', title: '2. Information We Collect' },
    { id: 'information-use', title: '3. How We Use Your Information' },
    { id: 'information-sharing', title: '4. Information Sharing and Disclosure' },
    { id: 'data-security', title: '5. Data Security' },
    { id: 'privacy-rights', title: '6. Your Privacy Rights' },
    { id: 'cookies', title: '7. Cookies and Tracking Technologies' },
    { id: 'children', title: '8. Children\'s Privacy' },
    { id: 'international', title: '9. International Data Transfers' },
    { id: 'changes', title: '10. Changes to This Privacy Policy' },
    { id: 'marketing', title: '11. Marketing Communications' },
    { id: 'contact', title: '12. Contact Information' },
    { id: 'california', title: '13. California Privacy Rights' },
    { id: 'european', title: '14. European Privacy Rights' },
    { id: 'third-party', title: '15. Third-Party Links' },
    { id: 'retention', title: '16. Data Retention' },
    { id: 'analytics', title: '17. Analytics and Advertising Partners' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: November 8, 2024</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                <nav>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="text-sm text-gray-600 hover:text-purple-600 text-left w-full"
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:w-3/4">
            <CardContent className="p-8 space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  Welcome to ViralVisions ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website (viralvisions.live) or use our services.
                </p>
              </section>

              <section id="information-collection">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                    <p className="text-gray-600 mb-2">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Date of birth</li>
                      <li>TikTok username and account information</li>
                      <li>Time zone and location information</li>
                      <li>Professional and payment information</li>
                      <li>Application and eligibility information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
                    <p className="text-gray-600 mb-2">When you visit our website, we automatically collect:</p>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="information-use">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-2">We use your personal information to:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Process your application and verify eligibility</li>
                  <li>Provide our services and support</li>
                  <li>Communicate with you about our services</li>
                  <li>Analyze and improve our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized access</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-2">We may share your information with:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>TikTok and related platform partners</li>
                  <li>Service providers and business partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Professional advisers and insurers</li>
                  <li>Successors in the event of a business transfer</li>
                </ul>
                <p className="text-gray-600 mt-2">We do not sell your personal information to third parties.</p>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section id="privacy-rights">
                <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
                <p className="text-gray-600 mb-2">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent</li>
                  <li>Data portability</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-2">We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Improve website functionality</li>
                  <li>Analyze user behavior</li>
                  <li>Personalize content</li>
                  <li>Provide social media features</li>
                  <li>Serve targeted advertisements</li>
                </ul>
                <p className="text-gray-600 mt-2">You can control cookies through your browser settings.</p>
              </section>

              <section id="children">
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-gray-600">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section id="international">
                <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
                <p className="text-gray-600">
                  Your information may be transferred and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section id="marketing">
                <h2 className="text-2xl font-bold mb-4">11. Marketing Communications</h2>
                <p className="text-gray-600 mb-2">You can opt out of marketing communications at any time by:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Clicking "unsubscribe" in our emails</li>
                  <li>Contacting us at help@viralvisions.live</li>
                  <li>Adjusting your communication preferences</li>
                </ul>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-gray-600 mb-4">For questions about this privacy policy or our privacy practices, contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Email: help@viralvisions.live</p>
                  <p className="text-gray-600">ViralVisions</p>
                </div>
              </section>

              <section id="california">
                <h2 className="text-2xl font-bold mb-4">13. California Privacy Rights</h2>
                <p className="text-gray-600 mb-2">California residents have additional rights under the CCPA, including:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know whether personal information is sold or disclosed</li>
                  <li>Right to say no to the sale of personal information</li>
                  <li>Right to access personal information</li>
                  <li>Right to equal service and price</li>
                </ul>
              </section>

              <section id="european">
                <h2 className="text-2xl font-bold mb-4">14. European Privacy Rights</h2>
                <p className="text-gray-600 mb-2">If you are in the EEA, you have rights under the GDPR, including:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Right to be informed</li>
                  <li>Right of access</li>
                  <li>Right to rectification</li>
                  <li>Right to erasure</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object</li>
                </ul>
              </section>

              <section id="third-party">
                <h2 className="text-2xl font-bold mb-4">15. Third-Party Links</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to read their privacy policies.
                </p>
              </section>

              <section id="retention">
                <h2 className="text-2xl font-bold mb-4">16. Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When no longer required, we securely delete or anonymize it.
                </p>
              </section>

              <section id="analytics">
                <h2 className="text-2xl font-bold mb-4">17. Analytics and Advertising Partners</h2>
                <p className="text-gray-600 mb-2">We work with various analytics and advertising partners, including:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Google Analytics</li>
                  <li>Plausible Analytics</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  These partners may collect information about your online activities to provide measurement services and targeted advertisements.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}