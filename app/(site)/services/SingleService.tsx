import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, description, services } = service;

  return (
    <>
      <div className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
        <p>Key Services:</p>
        <ul className="list-disc pl-4">
          {services.map((service, key) => (
            <li key={key}>{service}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SingleService;
