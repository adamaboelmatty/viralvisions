'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'definitions', title: '2. Definitions' },
    { id: 'eligibility', title: '3. Eligibility' },
    { id: 'account', title: '4. Account Registration' },
    { id: 'creator-services', title: '5. Creator Services' },
    { id: 'agent-services', title: '6. Agent Services' },
    { id: 'compensation', title: '7. Compensation' },
    { id: 'intellectual-property', title: '8. Intellectual Property' },
    { id: 'prohibited', title: '9. Prohibited Activities' },
    { id: 'termination', title: '10. Termination' },
    { id: 'disclaimers', title: '11. Disclaimers' },
    { id: 'liability', title: '12. Limitation of Liability' },
    { id: 'indemnification', title: '13. Indemnification' },
    { id: 'changes', title: '14. Changes to Terms' },
    { id: 'governing-law', title: '15. Governing Law' },
    { id: 'contact', title: '16. Contact Information' },
    { id: 'severability', title: '17. Severability' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last Updated: November 8, 2024</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Fixed on Desktop */}
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

          {/* Main Content */}
          <Card className="lg:w-3/4">
            <CardContent className="p-8 space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  Welcome to ViralVisions! These Terms of Service govern your use of viralvisions.live and our services. By accessing or using our services, you agree to be bound by these terms.
                </p>
              </section>

              <section id="definitions">
                <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>"Service" refers to ViralVisions' website, platform, and related services</li>
                  <li>"User" refers to creators, agents, and visitors using our services</li>
                  <li>"Creator" refers to TikTok content creators using our platform</li>
                  <li>"Agent" refers to individuals managing or referring creators</li>
                  <li>"Content" refers to all material posted or shared through our services</li>
                </ul>
              </section>

              <section id="eligibility">
                <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                <p className="text-gray-600 mb-2">To use our services, you must:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Be at least 18 years old</li>
                  <li>Have a valid TikTok account in good standing</li>
                  <li>Comply with TikTok's terms of service</li>
                  <li>Have the legal capacity to form a binding contract</li>
                  <li>Not be prohibited from using the services under applicable laws</li>
                </ul>
              </section>

              <section id="account">
                <h2 className="text-2xl font-bold mb-4">4. Account Registration</h2>
                <p className="text-gray-600 mb-2">When registering for our services:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly update any changes to your information</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section id="creator-services">
                <h2 className="text-2xl font-bold mb-4">5. Creator Services</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">5.1 Service Description</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Management and growth strategies for TikTok LIVE streaming</li>
                      <li>Monetization support and guidance</li>
                      <li>Access to proprietary tools and resources</li>
                      <li>Training and professional development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">5.2 Creator Obligations</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Maintain professional conduct during streams</li>
                      <li>Follow TikTok's community guidelines</li>
                      <li>Participate in required training sessions</li>
                      <li>Communicate promptly with assigned agents</li>
                      <li>Maintain agreed-upon streaming schedules</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="agent-services">
                <h2 className="text-2xl font-bold mb-4">6. Agent Services</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">6.1 Managing Agents</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Responsible for creator management and support</li>
                      <li>Must maintain professional relationships</li>
                      <li>Required to follow company guidelines</li>
                      <li>Must protect creator confidentiality</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">6.2 Referral Agents</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>May refer potential creators</li>
                      <li>Must provide accurate information</li>
                      <li>Cannot make unauthorized promises</li>
                      <li>Must maintain professional conduct</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id="compensation">
                <h2 className="text-2xl font-bold mb-4">7. Compensation</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">7.1 Creator Earnings</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Creators retain 100% of their TikTok earnings</li>
                      <li>Payment processing follows TikTok's schedules</li>
                      <li>Additional incentives as specified in individual agreements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">7.2 Agent Compensation</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Compensation structure as per individual agreements</li>
                      <li>Payment schedules as specified in contracts</li>
                      <li>Performance-based bonuses as applicable</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">8.1 Our Property</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Service name, logo, and branding</li>
                      <li>Proprietary tools and methodologies</li>
                      <li>Training materials and resources</li>
                      <li>Website content and design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">8.2 Your Property</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Your personal content and streams</li>
                      <li>Your brand and identity</li>
                      <li>Your audience relationships</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="prohibited">
                <h2 className="text-2xl font-bold mb-4">9. Prohibited Activities</h2>
                <p className="text-gray-600 mb-2">Users must not:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Share confidential information</li>
                  <li>Harass or discriminate against others</li>
                  <li>Manipulate platform metrics</li>
                  <li>Engage in fraudulent activities</li>
                  <li>Misrepresent relationships with us</li>
                </ul>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="text-gray-600 mb-2">We may terminate or suspend access to our services:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>For violations of these terms</li>
                  <li>For harmful or inappropriate behavior</li>
                  <li>At our discretion with notice</li>
                  <li>Upon mutual agreement</li>
                  <li>As required by law</li>
                </ul>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-bold mb-4">11. Disclaimers</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">11.1 Service Availability</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Services provided "as is" and "as available"</li>
                      <li>No guarantee of continuous availability</li>
                      <li>May modify or discontinue features</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">11.2 Results</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>No guarantee of specific earnings or growth</li>
                      <li>Results depend on individual effort</li>
                      <li>Past performance not indicative of future results</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
                <p className="text-gray-600 mb-2">To the maximum extent permitted by law, ViralVisions shall not be liable for:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Indirect or consequential damages</li>
                  <li>Lost profits or revenue</li>
                  <li>Data loss or corruption</li>
                  <li>Technical issues beyond our control</li>
                  <li>Third-party actions or content</li>
                </ul>
              </section>

              <section id="indemnification">
                <h2 className="text-2xl font-bold mb-4">13. Indemnification</h2>
                <p className="text-gray-600 mb-2">You agree to indemnify and hold harmless ViralVisions from claims arising from:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Your use of the services</li>
                  <li>Your content</li>
                  <li>Your violations of these terms</li>
                  <li>Your interactions with others</li>
                </ul>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
                <p className="text-gray-600 mb-2">We may modify these terms:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>With reasonable notice</li>
                  <li>By posting updates on our website</li>
                  <li>Through direct communication</li>
                  <li>As required by law or circumstances</li>
                </ul>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-bold mb-4">15. Governing Law</h2>
                <p className="text-gray-600 mb-2">These terms are governed by:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>The laws of the State of Florida and the United States of America</li>
                  <li>Without regard to conflicts of law principles</li>
                  <li>Subject to exclusive jurisdiction of local courts</li>
                </ul>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
                <p className="text-gray-600 mb-4">For questions about these terms:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Email: help@viralvisions.live</p>
                </div>
              </section>

              <section id="severability">
                <h2 className="text-2xl font-bold mb-4">17. Severability</h2>
                <p className="text-gray-600 mb-2">If any provision is found unenforceable:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Remaining terms remain in full effect</li>
                  <li>Invalid terms will be modified to be enforceable</li>
                  <li>Purpose of original terms will be maintained</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}