"use client";
import React, { useRef } from "react";
import { SectionHeader } from "../section-header/SectionHeader";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { MoveRight } from "lucide-react";
import "./projects.scss";

const useProjectScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.6], [-20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);

  return { opacity, rotateX, rotate, scale };
};

interface Project {
  id: number;
  project: string;
  title: string;
  description: string;
  image: string;
  image1: string;
  projectLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef(null);
  const { opacity, rotateX, rotate, scale } = useProjectScrollAnimation(ref);

  const item = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={project.id}
      ref={ref}
      className="project-card flex my-16 bg-[#181818] gap-12 p-14 rounded-[25px] relative overflow-hidden"
      style={{ opacity, rotateX, rotate, scale }}
      variants={item}
    >
      <div className="project-card-image w-full h-[500px] overflow-hidden rounded-[25px] ">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.07, rotate: -2 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover rounded-[25px]"
        />
      </div>
      <div className="project-card-content flex flex-col gap-8 w-full text-[#fff] m-auto ">
        <div className="project text-[#a3a3a3] text-[24px]">
          {project.project}
        </div>
        <h2 className="project-card-title text-[32px] leading-[2.5rem] font-semibold">
          {project.title}
        </h2>
        <p className="project-card-description text-[#d0d0d0] text-[20px]">
          {project.description}
        </p>
        <Link
          href={project.projectLink}
          target="_blank"
          className="project-link text-[#00ab4d] text-[20px] flex items-center gap-2"
        >
          View Project
          <MoveRight size={20} />
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const project = [
    {
      id: 1,
      project: "Website",
      title: "Comprehensive Web Solution: Design, Development, and Optimization",
      description: "Developed an end-to-end web solution for my organization, managing everything from UI/UX design to front-end and back-end development. The project included server-side rendering, SEO optimization, and the creation of around 30 pages, all completed single-handedly. This holistic approach ensured a seamless, user-friendly experience with efficient performance across all devices.",
      image: "/projects/website-inextlabs.jpg",
      image1: "/projects/website-inextlabs-wbg.png",
      projectLink: "https://inextlabs.ai/",
    },
    {
      id: 2,
      project: "Demo Centre",
      title: "Interactive Demo Platform for Enterprise and SaaS Solutions",
      description: "Developed a dynamic demo centre to showcase enterprise and SaaS product demos for customers and partners. Managed end-to-end UI/UX design and development, integrating Azure App Insights for performance monitoring and diagnostics. Executed the project single-handedly, ensuring a cohesive user experience and smooth functionality across the platform.",
      image: "/projects/demo-center.jpg",
      image1: "/projects/demo-center-wbg.png",
      projectLink: "https://demo.inextlabs.ai/"
    },
    {
      id: 3,
      project: "AI Avatar Assistant",
      title: "AI Avatar Assistant: Intuitive Event Solution for a Leading Malaysian Bank",
      description: "Developed the complete UI/UX design and front-end for an AI Avatar Assistant used in events for a leading bank in Malaysia. Single-handedly crafted an engaging and intuitive interface, ensuring seamless interaction between users and the AI assistant. This project was a great success, leading to valuable insights and a deeper understanding of UI/UX development for AI-powered solutions.",
      image: "/projects/ai-avatar.jpg",
      image1: "/projects/ai-avatar-wbg.png",
      projectLink: "https://inextlabs.ai/"
    }, {
      id: 4,
      project: "WebChat",
      title: "WebChat: Integrating Modern Gen AI for Seamless Communication",
      description: "Created a dynamic WebChat UI for my organization, which is a Gen AI-based company, enabling users to interact with modern generative AI. This WebChat serves as a communication channel, similar to WhatsApp, Instagram, and Facebook, and can be easily integrated into clients&apos; websites. Handled the complete UI/UX design and development single-handedly, managing various functionalities and gaining valuable insights throughout the project.",
      image: "/projects/webchat.jpg",
      image1: "/projects/webchat-wbg.png",
      projectLink: "https://inextlabs.ai/"
    }, {
      id: 5,
      project: "Website",
      title: "Streamlined Website for Logistics Client",
      description: "Developed a website for a logistics-based client, managing the entire process from UI/UX design to front-end development and deployment. Handled all aspects single-handedly, creating an intuitive and efficient online presence that effectively showcases the client&apos;s services and capabilities. This project highlights my ability to deliver cohesive and engaging web solutions tailored to specific industry needs.",
      image: "/projects/logistics-website.jpg",
      image1: "/projects/logistics-website-wbg.png",
      projectLink: "https://wa.me/+916385828580"
    },
    {
      id: 6,
      project: "Web Portal",
      title: "Comprehensive Web App Portal for Analytics and User Management",
      description: "Contributing to a web application portal designed for both internal use and client management. The portal features an analytics module, settings management, bot conversation capabilities, live agent support, contact management, and subscription settings. My contributions include enhancing user experience and functionality across various modules, ensuring a cohesive platform that meets user needs and optimizes operations.",
      image: "/projects/portal.jpg",
      image1: "/projects/portal-wbg.png",
      projectLink: "https://staging.inextlabs.ai/"
    }

  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="projects-outer-container w-full py-[5rem]"
      id="projects"
    >
      <div className="project-inner-container w-[90%] m-auto">
        <SectionHeader
          title="Innovative Solutions Through Design and Development"
          mainTitle="Projects"
        />
        <motion.div
          className="projects-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
