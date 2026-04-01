"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const WEBHOOK_URL = "/api/enquiry";

// constants.ts
export const COUNTRY_CODES = [
  "+1", "+7", "+20", "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39",
  "+40", "+41", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+51", "+52",
  "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64",
  "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94",
  "+95", "+98", "+211", "+212", "+213", "+216", "+218", "+220", "+221", "+222",
  "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232",
  "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242",
  "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253",
  "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264",
  "+265", "+266", "+267", "+268", "+269", "+290", "+291", "+297", "+298", "+299",
  "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359",
  "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+380",
  "+381", "+382", "+383", "+385", "+386", "+387", "+389", "+420", "+421", "+423",
  "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509",
  "+590", "+591", "+592", "+593", "+594", "+595", "+596", "+597", "+598", "+599",
  "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680",
  "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691",
  "+692", "+850", "+852", "+853", "+855", "+856", "+880", "+886", "+960", "+961",
  "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972",
  "+973", "+974", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996",
  "+998",
];

export default function AdmissionsForm() {
  const [countryCode, setCountryCode] = useState("+91");
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [grade, setGrade] = useState("");
  const [location, setLocation] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Extract UTM and Ad parameters
    const utm_source = searchParams.get("utm_source") || "";
    const utm_medium = searchParams.get("utm_medium") || "";
    const utm_campaign = searchParams.get("utm_campaign") || "";
    const campaign = searchParams.get("campaign") || "";
    const ad_group = searchParams.get("ad_group") || "";
    const ad_name = searchParams.get("ad_name") || "";
    const ad_id = searchParams.get("ad_id") || "";
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "admissions_form",
          parentName,
          name: studentName,
          phone: `${countryCode}${phone}`,
          childAge,
          grade,
          location,
          premise: "admission",
          utm_source,
          utm_medium,
          utm_campaign,
          campaign,
          ad_group,
          ad_name,
          ad_id,
        }),
      });
      setSubmitted(true);
      toast.success("Enquiry submitted. Thank you!");
      setParentName("");
      setStudentName("");
      setPhone("");
      setChildAge("");
      setGrade("");
      setLocation("");
    } catch (err) {
      console.error("Webhook submission failed:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const lat = 12.86649880088944;
  const lng = 74.9199334800994;
  const zoom = 18;

  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <section className="w-full bg-white  pt-10 md:py-10">
      <div className="container mx-auto md:px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2  md:gap-20 items-stretch">
          
          {/* Left Column: Form Section */}
          <div className="flex flex-col w-full px-4 md:px-0 py-10 md:py-3 bg-[#E31C22] md:bg-transparent md:max-w-lg mx-auto lg:mx-0">
            <div className="mb-6 md:hidden">
            <h2 className="text-2xl  md:text-[34px]  text-center font-bold text-white leading-snug">
              Admissions Open {new Date().getFullYear()}-{(new Date().getFullYear() + 1).toString().slice(-2)} 
            </h2>
            <p className="text-lg text-center mt-5">Nursery to Grade 10</p>
            </div>
            <div className="hidden md:block mb-6 ">
            <h2 className="text-3xl hidden md:block md:text-[34px] font-bold text-[#1A1A1A] leading-snug">
              Admissions Open {new Date().getFullYear()}-{(new Date().getFullYear() + 1).toString().slice(-2)}
              </h2>
             <p className="text-[#1A1A1A] font-semibold text-2xl">Nursery to Grade 10</p>
           
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Parent Name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full border-b border-white/50 md:border-primary/50 py-2 bg-transparent text-white md:text-primary placeholder-white/90 md:placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-white md:focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full border-b border-white/50 md:border-primary/50 py-2 bg-transparent text-white md:text-primary placeholder-white/90 md:placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-white md:focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div className="flex items-center border-b border-white/50 md:border-primary/50 py-2 transition-colors focus-within:border-white md:focus-within:border-gray-800">
                <select
                  aria-label="country-code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-transparent text-white md:text-gray-500 font-medium text-base md:text-xl focus:outline-none cursor-pointer appearance-none"
                  style={{ WebkitAppearance: "none", MozAppearance: "none" }}
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c} value={c} className="text-black md:text-gray-500">
                      {c}
                    </option>
                  ))}
                </select>
                <span className="mr-4 text-white/50 md:text-primary/50 font-medium ml-2">|</span>
                <input
                  type="tel"
                  placeholder="Parent Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-white md:text-primary placeholder-white/90 md:placeholder-primary/90 text-base md:text-xl focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    placeholder="Child's Age"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full border-b border-white/50 md:border-primary/50 py-2 bg-transparent text-white md:text-primary placeholder-white/90 md:placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-white md:focus:border-gray-800 transition-colors"
                    required
                  />
                </div>
                <div>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full border-b border-white/50 md:border-primary/50 py-2 bg-transparent text-white md:text-primary placeholder-white/90 md:placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-white md:focus:border-gray-800 transition-colors cursor-pointer"
                    required
                  >
                    <option value="" disabled hidden className="text-black md:text-primary">
                      Select Grade
                    </option>
                    <option value="Nursery" className="text-black md:text-primary">Nursery</option>
                    <option value="LKG" className="text-black md:text-primary">LKG</option>
                    <option value="UKG" className="text-black md:text-primary">UKG</option>
                    <option value="Grade 1" className="text-black md:text-primary">Grade 1</option>
                    <option value="Grade 2" className="text-black md:text-primary">Grade 2</option>
                    <option value="Grade 3" className="text-black md:text-primary">Grade 3</option>
                    <option value="Grade 4" className="text-black md:text-primary">Grade 4</option>
                    <option value="Grade 5" className="text-black md:text-primary">Grade 5</option>
                    <option value="Grade 6" className="text-black md:text-primary">Grade 6</option>
                    <option value="Grade 7" className="text-black md:text-primary">Grade 7</option>
                    <option value="Grade 8" className="text-black md:text-primary">Grade 8</option>
                    <option value="Grade 9" className="text-black md:text-primary">Grade 9</option>
                    <option value="Grade 10" className="text-black md:text-primary">Grade 10</option>
                  </select>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Located in"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border-b border-white/50 md:border-primary/50 py-2 bg-transparent text-white md:text-primary placeholder-white/90 md:placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-white md:focus:border-gray-800 transition-colors"
                  required
                />
              </div>

              <div className="mt-2 hidden md:flex justify-center md:justify-start">
                <Button aria-label="submit" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
               <div className="mt-2 flex md:hidden justify-center md:justify-start">
                <button className="inline-flex items-center justify-center rounded-lg cursor-pointer px-6 py-2 text-base md:text-lg font-bold transition-colors bg-white w-full text-[#E31C22]" aria-label="submit" type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Map Section */}
          <div className="w-full h-[300px] md:h-[450px] lg:h-auto rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 relative">
            <iframe
              title="Google Maps location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contrast-95"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}