"use client";
import React, { useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, } from 'framer-motion';
import "./services.scss";
import { SectionHeader } from '../section-header/SectionHeader';

const Services = () => {
    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    const services = [
        { id: 1, title: "UI/UX Design" },
        { id: 2, title: "Frontend Development" },
        { id: 3, title: "Full Stack Web Development" },
        { id: 4, title: "Backend Development" },
        { id: 5, title: "Graphic Design" }
    ];


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
            y: 60
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
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

    return (
        <motion.div className="services-outer-container w-full py-[5rem]" ref={ref} style={{ scale }}>
            <div className="services-inner-container w-[90%] mx-auto">
                <SectionHeader title="Transforming Ideas into Reality." mainTitle="Services" />
                <AnimatePresence>
                    <motion.div className="services my-[5rem] flex flex-col gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        {services.map(service => (
                            <motion.div
                                key={service.id}
                                className="service-card w-[95%] m-auto text-[#d0d0d0] p-10 bg-[#181717] cursor-pointer rounded-[20px]"
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.03,
                                        transition: { duration: 0.7 },
                                        color: "#fff"
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                        transition: { duration: 1 }
                                    }}
                                    className="service-content w-[95%] m-auto flex items-center justify-between"
                                >
                                    <h3 className="service-title text-inherit text-[28px] font-bold">{service.title}</h3>
                                    {/* Replace this with your icon */}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Services;


