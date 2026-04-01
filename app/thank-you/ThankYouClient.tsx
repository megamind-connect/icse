"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";

const Footer = dynamic(() => import("@/components/sections/Footer"));

const REDIRECT_SECONDS = 10;

export default function ThankYouClient() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  // Progress: goes from full (100%) down to 0%
  const progress = (countdown / REDIRECT_SECONDS) * 100;

  return (
    <div className="bg-white">
      {/* ── TOP SECTION (Nav + Main fill 100vh) ─────────────────── */}
      <div className="min-h-screen flex flex-col">

        {/* NAV */}
        <nav className="w-full relative z-50 shrink-0">
          <div className="container mx-auto px-4 py-8 border-b-[3px] md:border-b-0 mb-4 md:mb-0 border-[#DBDBDB] md:py-10 flex flex-row md:gap-0 gap-7 justify-between items-start md:items-center">
            <Link href="/">
              <Image
                src="/svgs/navLogo.svg"
                width={220}
                height={220}
                alt="Logo"
                className="w-[170px] md:w-[220px] cursor-pointer h-auto"
                priority
              />
            </Link>
            <div className="flex flex-col md:gap-4 gap-2">
              <h2 className="text-base md:text-xl font-bold text-secondary md:text-primary leading-tight">
                Affiliated to CBSE
                <br />
                Affiliation No: 830736
              </h2>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="relative max-w-2xl w-full mx-auto text-center flex flex-col items-center justify-center">

            {/* Success icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ background: "#E31C22", animationDuration: "2s" }}
                />
                <div
                  className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #E31C22 0%, #FB7824 100%)" }}
                >
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
              Thank You!
            </h1>

            {/* Gradient accent line */}
            <div
              className="mx-auto mb-6 h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #E31C22 0%, #FB7824 100%)" }}
            />

            {/* Sub-heading */}
            <p className="text-base md:text-lg text-secondary font-medium mb-3">
              We&apos;ve received your enquiry.
            </p>

            {/* Body copy */}
            <p className="text-base md:text-lg text-secondary font-medium leading-relaxed mb-8 max-w-xl mx-auto">
              Our admissions team at{" "}
              <span className=" text-secondary">
                The Cambridge International School, Adyar Mangaluru
              </span>{" "}
              will review your details and get in touch <br /> with you shortly.
            </p>

       

            {/* CTA button */}
            <Link href="/" id="thank-you-back-home" className="mt-2">
              <Button className="w-full flex items-center justify-center gap-2 md:w-auto px-8">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M12 5l-7 7 7 7"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Home
              </Button>
            </Link>

          </div>
        </main>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
