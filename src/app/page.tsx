'use client';

import React from "react";
import { Navbar } from "./(components)/navbar";
import { Footer } from "./(components)/footer";
import Home from "./home";
import EligibilityCheck from "./eligibility-check";

export default function Layout() {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-grow">
        {currentPage === "home" && <Home />}
        {currentPage === "eligibility" && <EligibilityCheck />}
        {/* Add other pages here as needed */}
      </main>
      <Footer />
    </div>
  );
}
