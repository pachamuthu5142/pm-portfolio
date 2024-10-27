"use client";

import React, { useRef } from 'react';
import "./about.scss";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { MdWhatsapp } from 'react-icons/md';
import Link from 'next/link';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    return (
        <div ref={ref}>
            <div className="about-container w-full py-[5rem]">
                <motion.div ref={ref} style={{ scale }}>
                    {isInView && (
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: .8 }} className="social-media w-[80%] mx-auto my-[3rem] flex gap-4 justify-center">
                            <h2 className="title text-2xl text-white flex items-center">
                                Available at
                            </h2>
                            <div className="divider w-[2px]" style={{
                                backgroundImage: "linear-gradient(180deg, #000 0%, white 50%, #000 103%)"
                            }}>
                            </div>
                            <div className="links">
                                <ul className='flex gap-4 items-center justify-center'>
                                    <li>
                                        <Link href="https://www.instagram.com/pm_enum_nan_07/" target='blank'>
                                            <Instagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://wa.me/+916385828580" target='blank'>
                                            <MdWhatsapp size={25} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/pachamuthu-moorthy-1b3a63218/" target='blank'>
                                            <Linkedin />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://x.com/pm_enum_nan_73" target='blank'>
                                            <Twitter />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div initial={{ opacity: 0, y: -70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1 }} className="about-content text-white w-[80%] mx-auto my-[3rem]">
                            Welcome to my portfolio! I&apos;m Pachamuthu, a dedicated and creative web designer and developer from India. With 2 years of experience in the industry, I specialize in building visually appealing and user-friendly websites that deliver outstanding user experiences.
                        </motion.div>
                    )}
                    <div className="about-marquee">
                        <div className="marquee-content w-[30%] mx-auto">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6, delay: 1.2 }} className="marquee-text-container">
                                <div className='marquee-text'>
                                    <p>Trendy</p>
                                    <p>Creative</p>
                                    <p>Passionate</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;