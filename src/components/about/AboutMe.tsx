"use client";
import React, { useRef } from 'react';
import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader2 } from '../section-header/SectionHeader';
import "../about/about.scss"
import Image from 'next/image';
const AboutMe = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1, { once: false });
    const isInView2 = useInView(ref2, { once: false });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    return (
        <div className="about-me-outer-container w-full py-[5rem]" ref={ref} id="about">
            <motion.div className="about-me-inner-container w-[90%] mx-auto" ref={ref} style={{ scale }}>
                <SectionHeader2 title="Passionate Creator of Stunning User Interfaces" mainTitle="About me" />
                <AnimatePresence>
                    <motion.div className="about-me flex justify-between items-center"
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="about-me-content-container w-full text-[22px] text-[#d0d0d0]">
                            <div className='about-me-content w-[90%] flex flex-col gap-4'>
                                <motion.p
                                    ref={ref1}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >

                                    Welcome to my portfolio! I'm Pachamuthu Moorthy, a software developer and designer based in Salem, Tamil Nadu, skilled in Next.js, React, Node.js, MongoDB, Figma for UI/UX, graphic design, and SEO, with 2 years of industry experience. I specialize in crafting complex web applications that combine robust functionality with visually engaging design, delivering seamless and user-centered digital experiences.
                                </motion.p>
                                <motion.p ref={ref2}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1 }}
                                >
                                    With a strong foundation in both UI/UX and graphic design, I believe a brand is more than just a website—it’s an immersive experience. I work closely with clients from initial concepts to final deployment, ensuring that the end product not only represents their brand identity but also captures their audience’s attention and fosters meaningful connections.
                                </motion.p>
                                <motion.div
                                    className='about-me-more flex w-fit flex-col'
                                    whileHover={{ color: '#00ab4d', transition: { duration: 0.3 } }}
                                    ref={ref2}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1.5 }}
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
                            <Image src="/Pm.png" alt="" width={500} height={500} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default AboutMe;