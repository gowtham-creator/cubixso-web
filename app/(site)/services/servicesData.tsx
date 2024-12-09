import { Service } from "@/types/service";

const servicesData: Service[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "AI & Cloud Solutions",
    description:
      "Leverage AI to automate processes and enhance scalability with cloud solutions.",
    services: ["AI Automation", "Cloud Integration", "Data Analytics"],
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Web & Mobile App Development",
    description:
      "Develop robust and user-friendly web and mobile applications.",
    services: [
      "Frontend & Backend Development",
      "Full-Stack Solutions",
      "UX/UI Design",
    ],
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Performance Marketing",
    description:
      "Boost your ROI with targeted, data-driven marketing strategies.",
    services: [
      "SEO & PPC",
      "Social Media Advertising",
      "Conversion Rate Optimization",
    ],
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "Digital Marketing",
    description:
      "Enhance your online presence with strategic digital marketing.",
    services: ["Branding", "Social Media Management", "Content Marketing"],
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "HealthTech & EdTech Products",
    description:
      "Innovative solutions tailored for healthcare and education sectors.",
    services: ["HealthTech Platforms", "EdTech Solutions"],
  },
];

export default servicesData;
