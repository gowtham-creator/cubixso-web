"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";

const Services = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="services">
        <div className="px-4 mx-auto max-w-c-1315 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Expertise",
              subtitle: "Core Services of Cubixso",
              description: "",
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}

            {/* <!-- Features item End --> */}
          </div>
          <div className="w-full mt-6 text-center">
          <Link
            href="/services"
            className="inline-flex h-max w-max items-center gap-2.5 rounded-full bg-titlebg px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-titlebgdark dark:hover:bg-btndark"
          >
            Explore Our Services
            <svg
              className="fill-white"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                fill=""
              />
            </svg>
          </Link>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
