"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "./section-header.scss";
export const SectionHeader = (
    { title, mainTitle }: { title: string, mainTitle: string }
) => {
    const ref = useRef(null);

    // Hook into scroll progress of this particular element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]  // Adjust these offsets to trigger animation earlier/later
    });

    // Define animation transformations based on scroll position
    const width = useTransform(scrollYProgress, [0, .7], ['0%', '100%']);
    const opacity = useTransform(scrollYProgress, [0, .7], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0, .7], [-70, 0]);
    const x = useTransform(scrollYProgress, [0, .7], ['8%', '0%']);

    return (
        <div ref={ref} className="section-header" style={{ transformStyle: 'preserve-3d', perspective: 2000 }}>
            <motion.div
                className="section-header-title-1 w-[80%] text-5xl font-bold text-white"
                style={{ opacity, rotateX, x }}
            >
                {title}
            </motion.div>
            <div className="section-header-main-title w-full text-end text-[#00ab4d] text-xl">
                {mainTitle}
            </div>
            <motion.div
                className='section-header-border h-[1px] bg-[#a3a3a3] my-2'
                style={{ width }}
            ></motion.div>
        </div>
    );
};
export const SectionHeader2 = (
    { title, mainTitle }: { title: string, mainTitle: string }
) => {
    const ref = useRef(null);

    // Hook into scroll progress of this particular element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]  // Adjust these offsets to trigger animation earlier/later
    });

    // Define animation transformations based on scroll position
    const width = useTransform(scrollYProgress, [0, .7], ['0%', '100%']);
    const opacity = useTransform(scrollYProgress, [0, .7], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0, .7], [-70, 0]);
    const x = useTransform(scrollYProgress, [0, .7], ['8%', '0%']);

    return (
        <div ref={ref} className="section-header" style={{ transformStyle: 'preserve-3d', perspective: 2000 }}>
            <motion.div
                className="section-header-title w-[80%] leading-[1.2] text-[120px] font-bold text-white"
                style={{ opacity, rotateX, x }}
            >
                {title}<span className='text-[#00ab4d]'>.</span>
            </motion.div>
            <div className="section-header-main-title w-full text-end text-[#00ab4d] text-xl">
                {mainTitle}
            </div>
            <motion.div
                className='section-header-border h-[1px] bg-[#a3a3a3] my-2'
                style={{ width }}
            ></motion.div>
        </div>
    );
};

