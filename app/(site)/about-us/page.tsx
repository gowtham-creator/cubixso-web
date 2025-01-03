import Image from "next/image";
import { Metadata } from "next";
import teamMembers from "./teamMembers";
import MemberCard from "./teamMemberCard";

export const metadata: Metadata = {
  title: "About Us - Cubixso",
  description: "This is About Us page for Cubixso",
  // other metadata
};
const AboutUs = () => {
  return (
    <section className="mb-4">
      <div className="relative w-full">
        <Image
          src="/images/about/9176016_6568.jpg"
          alt="404"
          width={1920}
          height={400}
          className="z-0 object-fill w-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white"></h1>
        </div>
      </div>
      <div className="px-4 mx-auto text-center max-w-c-1315 md:px-8">
        <div className="mt-6 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-16 lg:grid-cols-[3fr_2fr] xl:mt-20 xl:gap-12.5">
          <div className="w-full text-left">
            <div className="mb-4 inline-block rounded-full py-1.5">
              <span className="font-medium text-black text-sectiontitle dark:text-white">
                About Our Agency
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-black b-4 dark:text-white md:w-4/5 xl:w-3/5 xl:text-sectiontitle3">
              Your trusted partner for business
            </h2>
            <p className="w-[75%]">
              Cubixso Solutions is a leader in digital transformation,
              offering specialized services in AI, cloud, web and mobile app
              development, and performance marketing. We empower SMBs and
              enterprises by delivering customized solutions that drive
              efficiency and growth.
            </p>
          </div>
          <div className="relative min-h-[250px] w-full">
            <Image
              src="/images/about/9174471_6316.jpg"
              alt="About Cubixso Solutions"
              fill={true}
              className="object-cover"
            />
          </div>


        </div>
        <div className="mt-6 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-16 xl:mt-20 xl:gap-12.5">
          <div className="flex justify-center w-full">
            <div className="relative h-[200px] w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px]">
              <Image
                src="/images/about/16396113_rm373batch5-18.jpg"
                alt="About Cubixso Solutions"
                fill={true}
                className="object-cover rounded-lg"
                style={{ boxShadow: "40px 30px 0px 0px #fe4816" }}
              />
            </div>
          </div>
          <div className="w-full text-left">
            <div className="mb-4 inline-block rounded-full py-1.5">
              <span className="font-medium text-black text-sectiontitle dark:text-white">
                Why Choose Us?
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-black b-4 dark:text-white md:w-4/5 xl:w-3/5 xl:text-sectiontitle3">
              Your AI Partner for all needs
            </h2>
            <p className="w-[75%]">
              Our combination of expertise, innovation, and client-centric
              in AI approach makes us the ideal partner for your digital journey.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between mt-6 lg:mt-16 xl:mt-20">
            <div className="w-2/5 text-left">
              <div className="mb-4 inline-block rounded-full py-1.5">
                <span className="font-medium text-black text-sectiontitle dark:text-white">
                  Our Team
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-black b-4 dark:text-white xl:text-sectiontitle3">
                Awesome Team Members
              </h2>
            </div>
            {/* <div>Arrows</div> */}
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            {teamMembers.map((deets, key) => (
              <MemberCard member={deets} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
