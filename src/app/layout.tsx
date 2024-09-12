'use client';

import React from "react";
import { Navbar } from "./(components)/navbar";
import { Footer } from "./(components)/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <main className="flex-grow">
            {React.Children.map(children, child => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { setCurrentPage } as any);
              }
              return child;
            })}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}