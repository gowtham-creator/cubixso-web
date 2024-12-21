import Image from "next/image";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Cubisxo",
  description: "This is Services page for Cubixso",
  // other metadata
};

const Services = () => {
  return (
    <section
      id="services"
      className="pb-20 overflow-hidden pt-35 md:pt-40 xl:pb-25 xl:pt-46"
    >
      <div className="px-4 mx-auto max-w-c-1315 md:px-8 xl:px-0">
        <div className="flex items-center justify-center p-10 rounded-md bg-primary">
          <div className="flex flex-col justify-center">
            <p className="p-1 text-3xl font-bold text-white">Services</p>
            <p className="text-center text-white">Home &gt; Services</p>
          </div>
        </div>
        <div className="mx-auto mt-10 text-center">
          <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="font-medium text-black text-sectiontitle dark:text-white">
              Our Services
            </span>
          </div>
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
            Our Mission Is To Make Your Business Better Through Technology
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 xl:mt-12 xl:gap-12.5">
          {/* <!-- Features item Start --> */}

          {servicesData.map((service, key) => (
            <SingleService service={service} key={key} />
          ))}
          {/* <!-- Features item End --> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
