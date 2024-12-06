'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/app/(components)/navbar";
import Image from "next/image";

export default function EligibilityCheck() {
  const [currentPage, setCurrentPage] = useState("eligibility");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthday: "",
    timezone: "",
    referralSource: "",
    tiktokUsername: "",
    invitationCode: "",
    followers: "",
    monthlyTarget: "",
    hoursPerWeek: "",
    contentType: [] as string[],
    thirtyDayCommitment: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(
        "https://formspree.io/f/mqazojna",
        {
          method: "POST",
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            birthday: formData.birthday,
            timezone: formData.timezone,
            referralSource: formData.referralSource,
            tiktokUsername: formData.tiktokUsername,
            invitationCode: formData.invitationCode,
            followers: formData.followers,
            monthlyTarget: formData.monthlyTarget,
            hoursPerWeek: formData.hoursPerWeek,
            contentType: formData.contentType.join(", "),
            thirtyDayCommitment: formData.thirtyDayCommitment
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }
      );
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          birthday: "",
          timezone: "",
          referralSource: "",
          tiktokUsername: "",
          invitationCode: "",
          followers: "",
          monthlyTarget: "",
          hoursPerWeek: "",
          contentType: [],
          thirtyDayCommitment: ""
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">      
      <main className="flex-grow py-12 mb-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Creator Application
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2"></p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card className="bg-white shadow-md">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Information */}
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone*</Label>
                  <Input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="birthday">Birthday*</Label>
                  <Input
                    name="birthday"
                    type="date"
                    required
                    value={formData.birthday}
                    onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                {/* Timezone Selection */}
                <div>
                  <Label>Timezone*</Label>
                  <RadioGroup
                    name="timezone"
                    value={formData.timezone}
                    onValueChange={(value) => setFormData({...formData, timezone: value})}
                    className="flex flex-col space-y-1"
                  >
                    {['PT', 'MT', 'CT', 'ET'].map((zone) => (
                      <div key={zone} className="flex items-center space-x-2">
                        <RadioGroupItem value={zone} />
                        <Label>{zone}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="referralSource">Who recruited you to ViralVisions?</Label>
                  <Input
                    name="referralSource"
                    type="text"
                    placeholder="Enter their name or TikTok username"
                    value={formData.referralSource}
                    onChange={(e) => setFormData({...formData, referralSource: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                {/* TikTok Information */}
                <div>
                  <Label htmlFor="tiktokUsername">Your TikTok Username*</Label>
                  <Input
                    name="tiktokUsername"
                    type="text"
                    required
                    value={formData.tiktokUsername}
                    onChange={(e) => setFormData({...formData, tiktokUsername: e.target.value})}
                    className="text-lg font-semibold text-gray-900 mb-6"
                  />
                </div>

                {/* Invitation Code */}
                <div>
                  <Label htmlFor="invitationCode">Invitation Code*</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Get your invitation code by clicking{" "}
                    <a 
                      href="https://www.tiktok.com/t/ZMhC2utUu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 underline"
                    >
                      here
                    </a>
                    {" "}or going to TikTok &gt; Settings and privacy &gt; Creator tools &gt; LIVE Center &gt; Creator Network Center.
                  </p>
                  <Input
                    name="invitationCode"
                    type="text"
                    required
                    value={formData.invitationCode}
                    onChange={(e) => setFormData({...formData, invitationCode: e.target.value})}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                {/* Followers Count */}
                <div>
                  <Label>How many followers do you have?*</Label>
                  <RadioGroup
                    name="followers"
                    value={formData.followers}
                    onValueChange={(value) => setFormData({...formData, followers: value})}
                    className="flex flex-col space-y-1"
                  >
                    {[
                      '<500',
                      '500-1000',
                      '1000-5000',
                      '5000-9000',
                      '10000+'
                    ].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <RadioGroupItem value={range} />
                        <Label>{range}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Monthly Earnings Target */}
                <div>
                  <Label>Monthly Earnings Target ($)*</Label>
                  <RadioGroup
                    name="monthlyTarget"
                    value={formData.monthlyTarget}
                    onValueChange={(value) => setFormData({...formData, monthlyTarget: value})}
                    className="flex flex-col space-y-1 accent-purple-600"
                  >
                    {[
                      '$0-500',
                      '$501-2000',
                      '$2001-5000',
                      '$5000+'
                    ].map((range) => (
                      <div key={range} className="flex items-center space-x-2 accent-purple-600">
                        <RadioGroupItem value={range} />
                        <Label>{range}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Hours Per Week */}
                <div>
                  <Label>Hours Per Week*</Label>
                  <RadioGroup
                    name="hoursPerWeek"
                    value={formData.hoursPerWeek}
                    onValueChange={(value) => setFormData({...formData, hoursPerWeek: value})}
                    className="flex flex-col space-y-1 accent-purple-600"
                  >
                    {[
                      '1-3',
                      '4-7',
                      '8-10',
                      '10-15'
                    ].map((range) => (
                      <div key={range} className="flex items-center space-x-2 accent-purple-600">
                        <RadioGroupItem value={range} />
                        <Label>{range}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Content Type */}
                <div>
                  <Label>What type of content do you primarily create on TikTok?*</Label>
                  <div className="space-y-2">
                    {[
                      'Education',
                      'Entertainment',
                      'Fitness',
                      'Lifestyle',
                      'Beauty/Fashion',
                      'Other'
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="contentType"
                          value={type}
                          checked={formData.contentType.includes(type)}
                          onChange={(e) => {
                            const updatedTypes = e.target.checked
                              ? [...formData.contentType, type]
                              : formData.contentType.filter(t => t !== type);
                            setFormData({...formData, contentType: updatedTypes});
                          }}
                          className="rounded border-gray-300 accent-purple-600"
                        />
                        <Label>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 30 Day Commitment */}
                <div>
                  <Label>Are you ready to commit to 30 consecutive days of LIVE streaming to kickstart your growth?*</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    The creators who see the biggest returns ($5,000+ monthly) all started with one thing in common: 30 days of consecutive LIVE streams. Would you be willing to make this same commitment that separated our top earners from the rest?
                  </p>
                  <RadioGroup
                    name="thirtyDayCommitment"
                    value={formData.thirtyDayCommitment}
                    onValueChange={(value) => setFormData({...formData, thirtyDayCommitment: value})}
                    className="flex flex-col space-y-1 accent-purple-600"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" />
                      <Label>Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" />
                      <Label>No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                {submitStatus === 'success' && (
                  <div className="mt-4 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Application submitted successfully! We'll be in touch soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed to submit application. Please try again or contact support.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}