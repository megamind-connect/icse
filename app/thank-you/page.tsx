import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Cambridge School Mangalore",
  description:
    "Thank you for your enquiry. Our admissions team at The Cambridge International School Adyar Mangaluru will get in touch with you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}