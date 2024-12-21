"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="py-20 overflow-hidden lg:py-25 xl:py-30 ">
        <div className="px-4 mx-auto max-w-c-1235 md:px-8 xl:px-0">
          <div className="flex  gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              {/* <span className="font-medium text-black uppercase dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                SaaS Boilerplate for Next.js
              </span> */}
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {/* A Complete Solution for */}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  About Us
                </span>
              </h2>
              <p>
              Cubixso Solutions is your trusted partner in digital transformation, offering customized solutions designed to accelerate growth and enhance efficiency.
              </p>

              <div className="mt-7.5 flex items-start gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="font-semibold text-black text-metatitle2 dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Driving Digital Transformation and excellence
                  </h3>
                  <p>
                  Expertise in AI, cloud solutions, and web & mobile application development to empower your business.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-start gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="font-semibold text-black text-metatitle2 dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Our Vision
                  </h3>
                  <p>
                    To be the catalyst for digital innovation, transforming
                    businesses into industry leaders.
                  </p>
                </div>
              </div>
              <Link
                href="/about-us"
                className="mt-7.5 inline-flex items-center gap-2.5 rounded-full bg-titlebg dark:bg-titlebgdark px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:hover:bg-btndark"
              >
                Discover More
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
            </motion.div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
