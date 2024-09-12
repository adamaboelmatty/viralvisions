'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function EligibilityCheck() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Check Eligibility
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <Card className="bg-white shadow-md">
          <CardHeader className="bg-purple-600 text-white">
            <CardTitle>Enter your details</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1Jk9AzcOTDuRTrM2huVTa1tpkWu3Gv036ip3GxUqK-ppnrg/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
            >
              Loading…
            </iframe>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 mx-auto w-full max-w-5xl text-center">
        <p className="text-lg text-purple-600 font-semibold">
          OR
        </p>
        <p className="mt-2 text-md text-gray-600">
          Follow these Picture Instructions below
          <br />
          to access your Agency Eligibility Code in TikTok
        </p>
        <div className="mt-6 bg-purple-100 p-4 rounded-lg shadow-lg">
          <Image
            src="/instructions.png"
            alt="TikTok Instructions"
            width={1400}
            height={1000}
            layout="responsive"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}