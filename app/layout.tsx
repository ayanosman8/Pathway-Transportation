import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pathway Transportation Services | Non-Emergency Medical Transportation Columbus OH",
  description:
    "Non-emergency medical transportation services in Columbus, Ohio. Safe, dependable, and professional transportation for medical appointments and everyday needs. Approved Ohio Medicaid provider with EMFTS-certified vehicles.",
  keywords: [
    "non-emergency medical transportation",
    "Columbus Ohio transportation",
    "Ohio Medicaid transportation",
    "wheelchair transportation",
    "medical appointments transportation",
    "EMFTS certified",
    "Columbus medical transport",
    "Westerville transportation",
    "Reynoldsburg transportation",
    "Grove City transportation",
    "Dublin transportation"
  ],
  openGraph: {
    title: "Pathway Transportation Services | Non-Emergency Medical Transportation Columbus OH",
    description: "Safe, reliable, and professional non-emergency medical transportation in Columbus, Ohio. Approved Ohio Medicaid provider with EMFTS-certified vehicles.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pathwayts.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Pathway Transportation Services",
    "description": "Non-emergency medical transportation services in Columbus, Ohio. Approved Ohio Medicaid provider with EMFTS-certified vehicles.",
    "url": "https://pathwayts.com",
    "telephone": "+1-614-769-4404",
    "email": "Admin@pathwayts.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Columbus",
      "addressRegion": "OH",
      "addressCountry": "US"
    },
    "areaServed": [
      "Columbus, OH",
      "Westerville, OH",
      "Reynoldsburg, OH",
      "Grove City, OH",
      "Dublin, OH"
    ],
    "serviceType": [
      "Non-Emergency Medical Transportation",
      "Wheelchair Transportation",
      "Medical Appointments Transportation",
      "Hospital Discharge Transportation"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
