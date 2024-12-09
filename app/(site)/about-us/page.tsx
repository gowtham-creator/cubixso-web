import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <div className="relative w-full">
        <Image
          src="/images/about/aboutbg.png"
          alt="404"
          width={1920}
          height={400}
          className="z-0 object-fill w-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <div className="px-4 mx-auto text-center max-w-c-1315 md:px-8">
        <div className="mt-6 grid grid-cols-1 gap-7.5 md:grid-cols-[3fr_2fr] lg:mt-16 xl:mt-20 xl:gap-12.5">
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
              Cubixso Solutions Pvt Ltd is a leader in digital transformation,
              offering specialized services in AI, cloud, web and mobile app
              development, and performance marketing. We empower SMBs and
              enterprises by delivering customized solutions that drive
              efficiency and growth.
            </p>
          </div>
          <div className="w-full bg-gray-300">Right Content</div>
          <div className="w-full bg-gray-200">Left Content</div>
          <div className="w-full bg-gray-300">Right Content</div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-16 xl:mt-20 xl:gap-12.5">
          <div className="w-full bg-gray-300">Left Content</div>
          <div className="w-full text-left">
            <div className="mb-4 inline-block rounded-full py-1.5">
              <span className="font-medium text-black text-sectiontitle dark:text-white">
                Why Choose Us?
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-black b-4 dark:text-white md:w-4/5 xl:w-3/5 xl:text-sectiontitle3">
              Your trusted partner for business
            </h2>
            <p className="w-[75%]">
              Our combination of expertise, innovation, and client-centric
              approach makes us the ideal partner for your digital journey.
            </p>
          </div>
        </div>
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
          <div>Arrows</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
