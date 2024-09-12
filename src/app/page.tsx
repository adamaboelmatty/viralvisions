'use client';

import React from "react";
import Home from "./home";
import EligibilityCheck from "./eligibility-check";

interface PageProps {
  setCurrentPage: (page: string) => void;
}

export default function Page({ setCurrentPage }: PageProps) {
  const [currentPage, setLocalCurrentPage] = React.useState("home");

  React.useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, setCurrentPage]);

  return (
    <>
      {currentPage === "home" && (
        <Home setCurrentPage={setLocalCurrentPage} />
      )}
      {currentPage === "eligibility" && <EligibilityCheck />}
    </>
  );
}