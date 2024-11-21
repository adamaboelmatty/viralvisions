import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import { Footer } from './(components)/footer';  // Add this import

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ViralVisions | TikTok LIVE Creator Agency & Monetization Experts",
  description: "ViralVisions empowers TikTok creators to maximize earnings and grow their influence. Join our elite network for expert management, monetization strategies, and unparalleled support. Unlock your TikTok potential today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the new Datafast Analytics Script */}
        <Script
          defer
          data-website-id="6730081d6d39bf15706a8446"
          data-domain="viralvisions.live"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        {/* Plausible Analytics Script */}
        <Script
          defer
          data-domain="viralvisions.live"
          src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-setup" strategy="afterInteractive">
          {`
            window.plausible = window.plausible || function() { 
              (window.plausible.q = window.plausible.q || []).push(arguments)
            }
          `}
        </Script>
        {/* Hotjar Tracking Code */}
        <Script id="hotjar-setup" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5192029,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GX1RZHMVMR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GX1RZHMVMR');
          `}
        </Script>
        </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}