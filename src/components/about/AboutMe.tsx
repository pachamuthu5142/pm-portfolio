"use client";
import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader2 } from '../section-header/SectionHeader';
import "../about/about.scss"
import Image from 'next/image';
const AboutMe = () => {
    const ref = useRef(null);

    return (
        <div className="about-me-outer-container w-full py-[5rem]" ref={ref}>
            <div className="about-me-inner-container w-[90%] mx-auto">
                <SectionHeader2 title="Passionate Creator of Stunning User Interfaces" mainTitle="About me" />
                <AnimatePresence>
                    <motion.div className="about-me flex justify-between items-center"
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="about-me-content-container w-full text-[22px] text-[#d0d0d0]">
                            <div className='about-me-content w-[90%] flex flex-col gap-4'>
                                <p>
                                    Welcome to my portfolio! I&apos;m Pachamuthu Moorthy, a passionate and innovative web designer and developer based in Salem, Tamil Nadu. With 2 years of experience in the industry, I specialize in creating visually engaging and highly functional websites that deliver exceptional user experiences.
                                </p>
                                <p>
                                    I believe a brand is more than just a logo or a website—it&apos;s about the complete experience it offers. From initial concepts to the final execution, I collaborate closely with clients to understand their vision, goals, and audience needs. This approach ensures that the final product not only represents their brand identity but also resonates with their target market in a meaningful way.
                                </p>
                                <motion.div
                                    className='about-me-more flex w-fit flex-col'
                                    whileHover={{ color: '#00ab4d', transition: { duration: 0.3 } }}
                                >
                                    <motion.div whileHover={{ y: -1, transition: { duration: 0.3 } }} className="flex gap-2 items-center">
                                        <Link href={"https://www.linkedin.com/in/pachamuthu-moorthy-1b3a63218/"} target='blank'> More About Me</Link>
                                        <motion.div whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                                            <ArrowUpRight color='#00ab4d' size={30} />
                                        </motion.div>
                                    </motion.div>
                                    <div className="underline"></div>
                                </motion.div>

                            </div>
                        </div>
                        <div className="about-me-image w-[60%]">
                            <Image src="/thala.png" alt="" width={500} height={500} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AboutMe;