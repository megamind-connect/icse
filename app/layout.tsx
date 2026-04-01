import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // ── Basics ────────────────────────────────────────────────────────────────
  title: {
    default: "The Cambridge International School Adyar Mangaluru | Top CBSE School – Nursery to Grade 10",
    template: "%s | Cambridge School Mangalore",
  },
  description:
    "The Cambridge International School Adyar Mangaluru is a top-ranked CBSE school offering academic excellence from Nursery to Grade 10. Founded in 2007 under St. Lawrence Education Trust. Admissions open 2025–26.",
  
  keywords: [
    // Brand
    "Cambridge International School Adyar Mangaluru",
    "Cambridge International School Mangalore",
    "TCIS Mangalore",
    "Cambridge School Mangalore",

    // Location-intent
    "best CBSE school in Mangalore",
    "top school in Mangaluru",
    "CBSE school Adyar Mangalore",
    "CBSE school Kudupu Mangalore",
    "CBSE school Neermarga Road",
    "school near Sahyadri College Mangalore",

    // Admission-intent
    "Cambridge School admissions 2025",
    "CBSE school admissions Mangalore 2025-26",
    "nursery admission Mangalore",
    "grade 10 CBSE school Mangalore",

    // Broad
    "best school in Karnataka",
    "St Lawrence Education Trust school",
    "co-curricular activities CBSE school",
    "ICT school Mangalore",
    "international school Mangaluru",
  ],

  // ── Authorship & URL ──────────────────────────────────────────────────────
  authors: [{ name: "Cambridge School Mangalore", url: "https://apply.tcismangalore.org" }],
  creator: "Cambridge School Mangalore",
  publisher: "St. Lawrence Education Trust",
  metadataBase: new URL("https://apply.tcismangalore.org"),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title: "The Cambridge International School Adyar Mangaluru",
    description:
      "A premier CBSE school in Adyar, Mangaluru, founded in 2007 by Collins & Flavia Albuquerque under St. Lawrence Education Trust. Admissions open 2025–26.",
    url: "https://apply.tcismangalore.org",
    siteName: "Cambridge School Mangalore",
    images: [
      {
        url: "/images/ogImage/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Cambridge School Mangalore — Adyar, Mangaluru",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "The Cambridge International School Adyar Mangaluru",
    description:
      "Top-ranked CBSE school in Mangalore with outstanding board results, sports, ICT & co-curricular activities. Admissions open 2025–26.",
    images: ["/images/ogImage/ogImage.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Verification ─────────────────────────────────────────────────────────
  verification: {
    google: "OD4AP9ghSime2qaxwnthvya-I3FgSsmXvICK48NEQ_g", 
  },

  // ── Misc ──────────────────────────────────────────────────────────────────
  category: "education",
  applicationName: "The Cambridge School Mangalore",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

import { ModalProvider } from "@/context/ModalContext";
import GlobalModal from "@/components/sections/GlobalModal";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <ModalProvider>
          <GlobalModal />
          {children}
        </ModalProvider>
        <Toaster position="top-center" />
        <Script src="/smoothScroll/smoothScroll.js" />
        
        {/* --- Meta Pixel Code --- */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1975432896402352');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1975432896402352&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* ----------------------- */}

        {/* --- Google Analytics Integration --- */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-4DZB65PQ2R`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4DZB65PQ2R');
            `,
          }}
        />
        {/* ------------------------------------ */}
      </body>
    </html>
  );
}