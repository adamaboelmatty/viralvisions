'use client';

import React from "react";
import { Navbar } from "./(components)/navbar";
import Home from "./home";
import EligibilityCheck from "./apply/page";
import LiveCreatorAgents from "./live-creator-agents/page";
import LiveCreators from "./live-creators/page";
import Achievements from "./rankings/page"; // Add this import

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
        
        {currentPage === "achievements" && <Achievements />}
      </main>
    </div>
  );
}