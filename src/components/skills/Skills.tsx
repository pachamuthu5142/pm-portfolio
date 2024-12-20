"use client";
import React, { useRef } from 'react'
import "./skill.scss"
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image';
const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "HTML",
            icon: "/skill-icons/html.svg"
        },
        {
            id: 2,
            name: "CSS",
            icon: "/skill-icons/css.svg"
        },
        {
            id: 3,
            name: "JavaScript",
            icon: "/skill-icons/js.svg"
        },
        {
            id: 4,
            name: "React",
            icon: "/skill-icons/react.svg"
        },
        {
            id: 5,
            name: "Node",
            icon: "/skill-icons/nodejs.svg"
        },
        {
            id: 6,
            name: "Express",
            icon: "/skill-icons/express.svg"
        },
        {
            id: 7,
            name: "Next",
            icon: "/skill-icons/nextjs.svg"
        },
        {
            id: 8,
            name: "TypeScript",
            icon: "/skill-icons/ts.svg"
        },
        {
            id: 9,
            name: "MongoDB",
            icon: "/skill-icons/mongodb.svg"
        },
        {
            id: 10,
            name: "Figma",
            icon: "/skill-icons/figma.svg"
        },
        {
            id: 11,
            name: "Photoshop",
            icon: "/skill-icons/ps.svg"
        },
        {
            id: 12,
            name: "Bootstrap",
            icon: "/skill-icons/bs.svg"
        },
        {
            id: 13,
            name: "Tailwind",
            icon: "/skill-icons/tcss.svg"
        },
        {
            id: 14,
            name: "MUI",
            icon: "/skill-icons/mui.svg"
        },
        {
            id: 15,
            name: "AntD",
            icon: "/skill-icons/antd.svg"
        },
        {
            id: 16,
            name: "Sass",
            icon: "/skill-icons/sass.svg"
        },
        {
            id: 17,
            name: "GraphQL",
            icon: "/skill-icons/gql.svg"
        },
        {
            id: 18,
            name: "Azure",
            icon: "/skill-icons/azure.svg"
        },
        {
            id: 19,
            name: "Framer",
            icon: "/skill-icons/fm.svg"
        },
        {
            id: 20,
            name: "Webpack",
            icon: "/skill-icons/wp.svg"
        }
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const ref = useRef(null);
    // const isInView = useInView(ref, { once: false });
    return (
        <div>
            <AnimatePresence>
                <div className="skills-outer-container w-full py-[5rem]">
                    <div className="skills-inner-container w-[90%] mx-auto">
                        <div className="skills-title text-5xl font-bold text-[#fff] text-center">
                            Skills & Expertises
                        </div>
                        <motion.div className="skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-16 my-8"
                            ref={ref}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            {skills.map(skill => (
                                <motion.div key={skill.id} className="skill"
                                    variants={itemVariants}
                                    exit={{ y: 20, opacity: 0 }}

                                >
                                    <motion.div className="skill-card  flex gap-2 items-center">
                                        <Image src={skill.icon} alt={skill.name} width={50} height={50} />
                                        <div className="skill-name text-2xl text-[#808585] font-bold">{skill.name}</div>
                                    </motion.div>
                                </motion.div>
                            ))}

                        </motion.div>
                    </div>
                </div>
            </AnimatePresence >
        </div >
    )
}

export default Skills
