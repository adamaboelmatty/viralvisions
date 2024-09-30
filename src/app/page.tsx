'use client';

import React from "react";
import { Navbar } from "./(components)/navbar";
import { Footer } from "./(components)/footer";
import Home from "./home";
import EligibilityCheck from "./eligibility-check";
import LiveCreatorAgents from "./live-creator-agents";
import LiveCreators from "./live-creators";

export default function Layout() {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-grow">
        {currentPage === "home" && (
          <Home setCurrentPage={setCurrentPage} />
        )}

        {currentPage === "eligibility" && <EligibilityCheck />}
        {currentPage === "live-creator-agents" && (
          <LiveCreatorAgents />
        )}

        {currentPage === "live-creators" && <LiveCreators />}
      </main>
      <Footer />
    </div>
  );
}