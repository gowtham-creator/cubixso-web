import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Cubixso",
  description: "This is Support page for Cubixso",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="px-7.5 lg:px-15 xl:px-20">
        <h1 className="pr-16 mb-3 text-3xl font-bold text-black dark:text-white xl:text-hero ">
          Get in Touch
        </h1>
        <p className="mb-6">Let's Discuss How We Can Transform Your Business</p>
      </div>
      <Contact />
    </div>
  );
};

export default SupportPage;
