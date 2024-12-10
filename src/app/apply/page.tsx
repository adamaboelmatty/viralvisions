'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

const FORM_SECTIONS = [
  'Personal Info',
  'Creator Network',
  'TikTok Details',
  'Goals'
];

export default function CreatorApplication() {
  const [currentStep, setCurrentStep] = useState(0);
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
    referralName: "",
    referralSocial: "",
    referralReason: "",
    tiktokUsername: "",
    invitationCode: "",
    followers: "",
    monthlyTarget: "",
    hoursPerWeek: "",
    contentType: [] as string[],
    thirtyDayCommitment: ""
  });

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, FORM_SECTIONS.length - 1));
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(
        "https://formspree.io/f/mqazojna",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }
      );
      
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: "", lastName: "", email: "", phone: "", birthday: "",
          timezone: "", referralSource: "", referralName: "", referralSocial: "",
          referralReason: "", tiktokUsername: "", invitationCode: "", followers: "",
          monthlyTarget: "", hoursPerWeek: "", contentType: [], thirtyDayCommitment: ""
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
          
          {/* Simple Step Indicator */}
          <div className="mt-4 flex justify-between items-center px-4">
            {FORM_SECTIONS.map((section, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentStep 
                    ? 'bg-purple-600 text-white' 
                    : index < currentStep 
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <span className="text-xs mt-1 hidden sm:block">{section}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card className="bg-white shadow-md">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6"></h3>
                    <div>
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
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
                      />
                    </div>
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
                  </div>
                )}

                {/* Step 2: Creator Network */}
{currentStep === 1 && (
<div className="space-y-6">
<h3 className="text-xl font-semibold text-gray-900 mb-6"></h3>
      <p className="text-purple-700 mt-4 text-lg">
        <span className="font-bold">Did you know?</span> Creators who join with friends are 3x more likely to become successful livestreamers!
      </p>
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block">Who recruited you to ViralVisions?</Label>
        <Input
          name="referralSource"
          type="text"
          placeholder="Enter their name or TikTok username"
          className="bg-white rounded-lg border-gray-200"
        />
      </div>

      <div className="pt-4"> {/* Added top padding */}
        <Label className="mb-3 block">Know someone perfect for livestreaming?</Label>
        <div className="space-y-4">
          <Input
            name="referralName"
            type="text"
            placeholder="Their Name"
            className="bg-white rounded-lg border-gray-200"
          />
          <Input
            name="referralSocial"
            type="text"
            placeholder="Their Social Media Handle"
            className="bg-white rounded-lg border-gray-200"
          />
          <Input
            name="referralReason"
            type="text"
            placeholder="Their unique talents, personality, etc."
            className="bg-white rounded-lg border-gray-200"
          />
        </div>
      </div>
    </div>
  </div>
)}

                {/* Step 3: TikTok Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6"></h3>
                    <div>
                      <Label htmlFor="tiktokUsername">Your TikTok Username*</Label>
                      <Input
                        name="tiktokUsername"
                        type="text"
                        required
                        value={formData.tiktokUsername}
                        onChange={(e) => setFormData({...formData, tiktokUsername: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="invitationCode">Invitation Code*</Label>
                      <p className="text-sm text-gray-600 mb-2">
                        Get your invitation code by clicking{" "}
                        <a href="https://www.tiktok.com/t/ZMhC2utUu/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-purple-600 hover:text-purple-700 underline">
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
                      />
                    </div>

                    <div>
                      <Label>How many followers do you have?*</Label>
                      <RadioGroup
                        name="followers"
                        value={formData.followers}
                        onValueChange={(value) => setFormData({...formData, followers: value})}
                        className="flex flex-col space-y-1"
                      >
                        {['<500', '500-1000', '1000-5000', '5000-10000', '10000+'].map((range) => (
                          <div key={range} className="flex items-center space-x-2">
                            <RadioGroupItem value={range} />
                            <Label>{range}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 4: Goals */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6"></h3>
                    <div>
                      <Label>Monthly Earnings Target ($)*</Label>
                      <RadioGroup
                        name="monthlyTarget"
                        value={formData.monthlyTarget}
                        onValueChange={(value) => setFormData({...formData, monthlyTarget: value})}
                        className="flex flex-col space-y-1"
                      >
                        {['$0-500', '$501-2000', '$2001-5000', '$5000+'].map((range) => (
                          <div key={range} className="flex items-center space-x-2">
                            <RadioGroupItem value={range} />
                            <Label>{range}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Hours Per Week*</Label>
                      <RadioGroup
                        name="hoursPerWeek"
                        value={formData.hoursPerWeek}
                        onValueChange={(value) => setFormData({...formData, hoursPerWeek: value})}
                        className="flex flex-col space-y-1"
                      >
                        {['1-3', '4-7', '8-10', '10-15'].map((range) => (
                          <div key={range} className="flex items-center space-x-2">
                            <RadioGroupItem value={range} />
                            <Label>{range}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>What type of content do you primarily create on TikTok?*</Label>
                      <div className="space-y-2 mt-2">
                        {['Education', 'Entertainment', 'Fitness', 'Lifestyle', 'Beauty/Fashion', 'Other'].map((type) => (
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
                              className="rounded border-gray-300"
                            />
                            <Label>{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <Label>Are you ready to commit to 30 consecutive days of LIVE streaming?*</Label>
                      <p className="text-sm text-gray-600 mb-4">
                        The creators who see the biggest returns ($5,000+ monthly) all started with 30 days of consecutive LIVE streams.
                      </p>
                      <RadioGroup
                        name="thirtyDayCommitment"
                        value={formData.thirtyDayCommitment}
                        onValueChange={(value) => setFormData({...formData, thirtyDayCommitment: value})}
                        className="space-y-2"
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
                  </div>
                )}

                {/* Modified Navigation Buttons */}
                <div className="flex justify-between mt-6">
                  {currentStep > 0 && (
                    <Button
                      type="button"
                      onClick={handlePrevious}
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      Back
                    </Button>
                  )}
                  
                  {currentStep === FORM_SECTIONS.length - 1 ? (
                    <Button
                      type="button"
                      onClick={handleFinalSubmit}
                      className={`${currentStep === 0 ? 'w-full' : 'ml-auto'} bg-purple-600 text-white hover:bg-purple-700`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className={`${currentStep === 0 ? 'w-full' : 'ml-auto'} bg-purple-600 text-white hover:bg-purple-700`}
                    >
                      Next
                    </Button>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus !== 'idle' && (
                  <>
                    {isSubmitting && (
                      <div className="mt-4 flex justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                      </div>
                    )}

                    {!isSubmitting && submitStatus === 'success' && (
                      <div className="mt-4 bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Application submitted successfully! We'll be in touch soon.
                      </div>
                    )}

                    {!isSubmitting && submitStatus === 'error' && (
                      <div className="mt-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Failed to submit application. Please try again or contact support.
                      </div>
                    )}
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}