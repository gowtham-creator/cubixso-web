import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <div className="px-7.5 lg:px-15 xl:px-20">
        <h1 className="mb-3 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
          Get in Touch
        </h1>
        <p className="mb-6">Let's Discuss How We Can Transform Your Business</p>
      </div>
      <Contact />
    </div>
  );
};

export default SupportPage;
