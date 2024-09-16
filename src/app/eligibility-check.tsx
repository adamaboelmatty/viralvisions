'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type Submission = {
  email: string;
  followers: string;
  tiktokUsername: string;
  agencyCode: string;
};

export default function EligibilityCheck() {
  const [email, setEmail] = useState("");
  const [followers, setFollowers] = useState("");
  const [tiktokUsername, setTiktokUsername] = useState("");
  const [agencyCode, setAgencyCode] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSubmission: Submission = {
      email,
      followers,
      tiktokUsername,
      agencyCode,
    };
    setSubmissions([...submissions, newSubmission]);
    // Reset form fields
    setEmail("");
    setFollowers("");
    setTiktokUsername("");
    setAgencyCode("");
    alert("Form submitted successfully!");
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
        >
          Check Eligibility
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white shadow-md">
          <CardHeader className="bg-purple-600 text-white">
            <CardTitle>Enter your details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </Label>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <Label
                  htmlFor="followers"
                  className="text-gray-700"
                >
                  How Many Followers Do You Have Currently?{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </Label>
                <RadioGroup
                  onValueChange={setFollowers}
                  className="flex flex-col space-y-1"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="below_1000"
                      className="text-purple-600"
                    />

                    <Label
                      htmlFor="below_1000"
                      className="text-gray-700"
                    >
                      Below 1,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="1000_10000"
                      className="text-purple-600"
                    />

                    <Label
                      htmlFor="1000_10000"
                      className="text-gray-700"
                    >
                      1,000 - 10,000
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="above_10000"
                      className="text-purple-600"
                    />

                    <Label
                      htmlFor="above_10000"
                      className="text-gray-700"
                    >
                      10,000+
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label
                  htmlFor="tiktok-username"
                  className="text-gray-700"
                >
                  TikTok Username{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </Label>
                <Input
                  name="tiktok-username"
                  type="text"
                  required
                  value={tiktokUsername}
                  onChange={(e) => setTiktokUsername(e.target.value)}
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <Label
                  htmlFor="agency-code"
                  className="text-gray-700"
                >
                  Agency Code{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </Label>
                <Input
                  name="agency-code"
                  type="text"
                  required
                  value={agencyCode}
                  onChange={(e) => setAgencyCode(e.target.value)}
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                >
                  Submit
                </Button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              <span className="text-red-500">
                *
              </span>{" "}
              Required fields
            </p>
          </CardContent>
        </Card>
      </div>

      <div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center"
      >
        <Button
          onClick={() => setShowSubmissions(!showSubmissions)}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          {showSubmissions ? "Hide Submissions" : "View Submissions"}
        </Button>
      </div>

      {showSubmissions && (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Submissions
          </h3>
          {submissions.map((submission, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="p-4">
                <p>
                  <strong>Email:</strong> {submission.email}
                </p>
                <p>
                  <strong>Followers:</strong> {submission.followers}
                </p>
                <p>
                  <strong>TikTok Username:</strong>{" "}
                  {submission.tiktokUsername}
                </p>
                <p>
                  <strong>Agency Code:</strong>{" "}
                  {submission.agencyCode}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center"
      >
        <p className="text-sm text-purple-600">
          OR
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Follow these Picture Instructions below
          <br />
          to access your Agency Eligibility Code in TikTok
        </p>
        <Image
          src="/instructions.png"
          alt="TikTok Instructions"
          width={3800}
          height={3700}
          className="mt-4 mx-auto"
        />
      </div>
    </div>
  );
}
