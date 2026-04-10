import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kainovation",
  description:
    "Al-powered operational reporting and analytics platform for insurance companies, offering scheduled reports, custom dashboards, and advanced data pipelines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QST2VWYCWG"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QST2VWYCWG', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
