"use client";

import React, { useRef } from 'react';
import "./about.scss";
import { motion, useInView } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { MdWhatsapp } from 'react-icons/md';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            <div className="about-container w-full py-[5rem]">
                <>
                    {isInView && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .8 }} className="social-media w-[80%] mx-auto my-[3rem] flex gap-4 justify-center">
                            <h2 className="title text-2xl text-white flex items-center">
                                Available at
                            </h2>
                            <div className="divider w-[2px]" style={{
                                backgroundImage: "linear-gradient(180deg, #000 0%, white 50%, #000 103%)"
                            }}>
                            </div>
                            <div className="links">
                                <ul className='flex gap-4 items-center justify-center'>
                                    <li><Instagram /></li>
                                    <li><MdWhatsapp size={25} /></li>
                                    <li><Linkedin /></li>
                                    <li><Twitter /></li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .8 }} className="about-content text-white w-[80%] mx-auto my-[3rem]">
                            Welcome to my portfolio! I&apos;m Pachamuthu, a dedicated and creative web designer and developer from India. With 2 years of experience in the industry, I specialize in building visually appealing and user-friendly websites that deliver outstanding user experiences.
                        </motion.div>
                    )}
                    <div className="about-marquee">
                        <div className="marquee-content w-[30%] mx-auto">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} className="marquee-text-container">
                                <div className='marquee-text'>
                                    <p>Trendy</p>
                                    <p>Creative</p>
                                    <p>Passionate</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </>
            </div>
        </div>
    );
}

export default About;