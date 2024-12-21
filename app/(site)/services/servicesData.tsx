import { Service } from "@/types/service";

const servicesData: Service[] = [
  {
    id: 1,
    icon: "/images/icon/icon-04.svg",
    title: "Generative AI Solutions Suite",
    description:
      "Revolutionize your business operations with our state-of-the-art generative AI services. From custom model development to intelligent automation, we offer a comprehensive suite of AI solutions designed to enhance creativity, streamline workflows, and drive innovation.",
    services: [
      "Custom AI model development for NLP, computer vision, and domain-specific needs",
      "AI-powered content creation for blogs, ads, visuals, and scalable workflows",
      "Intelligent automation including chatbots, predictive analytics, and task automation",
      "Seamless AI integration into enterprise systems and existing platforms",
      "Conversational AI solutions with chatbots, virtual assistants, and NLP capabilities",
      "AI analytics for predictive modeling, real-time insights, and data visualization",
    ],
  },
  {
    id: 2,
    icon: "/images/icon/icon-05.svg",
    title: "Full-Stack Development",
    description:
      "Empower your business with comprehensive full-stack development services. We deliver dynamic, responsive, and secure web and application solutions by seamlessly integrating front-end and back-end technologies to meet your unique requirements.",
    services: [
      "Design and development of responsive, interactive, and user-friendly web applications",
      "Custom API development and integration for enhanced system interoperability",
      "Robust and secure back-end architecture optimized for scalability and performance",
      "Expertise in modern frameworks and technologies, including Node.js, React.js, and Angular",
    ],
  },
  {
    id: 3,
    icon: "/images/icon/icon-06.svg",
    title: "DevOps & Cloud Solutions",
    description:
      "Accelerate your development lifecycle with our DevOps expertise, ensuring faster deployment, enhanced scalability, and continuous delivery in a secure cloud environment.",
    services: [
      "CI/CD pipeline automation for efficient workflows",
      "Cloud migration and management (AWS, Azure, GCP)",
      "Real-time performance monitoring and optimization",
      "Focus on security, scalability, and minimized downtime",
    ],
  },
  {
    id: 4,
    icon: "/images/icon/icon-02.svg",
    title: "Mobile App Development",
    description:
      "Create intuitive and feature-rich mobile applications tailored to your business needs. We specialize in both native and cross-platform app development.",
    services: [
      "Custom native apps for iOS and Android",
      "Cross-platform development using Flutter and React Native",
      "Focus on user-friendly UI/UX and robust performance",
      "Full lifecycle support from design to deployment",
    ],
  },
  {
    id: 5,
    icon: "/images/icon/icon-03.svg",
    title: "AR / VR Solutions",
    description:
      "Immerse your audience with advanced Augmented Reality (AR) and Virtual Reality (VR) solutions. From training simulations to interactive experiences, we deliver high-quality AR/VR applications.",
    services: [
      "AR/VR development for immersive experiences in education, retail, and healthcare",
      "Interactive product demonstrations and training modules",
      "3D modeling and virtual environment creation",
      "Cross-platform compatibility for AR/VR headsets, mobile, and desktop",
    ],
  },
  {
    id: 6,
    icon: "/images/icon/icon-01.svg",
    title: "SAP and Business Solutions",
    description:
      "Enhance your enterprise's efficiency with our SAP Business Solutions and optimize your business operations with our custom ERP, CRM, and HRMS solutions, designed to meet your specific enterprise needs.",
    services: [
      "Real-time analytics and data visualization dashboards and support for SAP HANA, S/4HANA, and SAP Business One",
      "ERP systems for efficient resource planning and management",
      "CRM tools to enhance customer relationship management",
      "HRMS platforms for streamlined workforce management",
    ],
  },
];

export default servicesData;
