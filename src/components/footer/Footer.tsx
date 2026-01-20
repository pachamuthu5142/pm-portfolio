"use client";
import React from 'react'
import { motion } from 'framer-motion'
import "./footer.scss"
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <div className="footer-outer-container py-[5rem] border-t border-[#a3a3a34d]"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}>
                <div className="footer-inner-container">
                    <div className="footer-content text-white text-center flex flex-col items-center m-auto">
                        <h1 className="footer-title text-[100px] font-bold">Get In Touch</h1>
                        <Link href="mailto:pachamuthu5142@gmail.com">
                            <p className="footer-text px-8 mt-9 py-4 font-bold rounded-full border border-white w-fit">
                                pachamuthu5142@gmail.com
                            </p>
                        </Link>
                        <div className="footer-social-media mt-9 flex gap-4 items-center font-semibold text-[#a3a3a3] text-[17px]">
                            <motion.a href="https://github.com/pachamuthu5142" target="_blank" whileHover={{ color: "#00ab4d" }} transition={{ duration: .5 }} className="footer-social-media-link">
                                GitHub
                            </motion.a>
                            <div className='w-[10px] h-[10px] rounded-full bg-[#00ab4d]' ></div>
                            <motion.a href="https://www.linkedin.com/in/pachamuthu-moorthy-1b3a63218/" target="_blank" whileHover={{ color: "#00ab4d" }} transition={{ duration: .5 }} className="footer-social-media-link">
                                LinkedIn
                            </motion.a>
                            <div className='w-[10px] h-[10px] rounded-full bg-[#00ab4d]' ></div>
                            <motion.a href="https://www.instagram.com/pm_enum_nan_07" target="_blank" whileHover={{ color: "#00ab4d" }} transition={{ duration: .5 }} className="footer-social-media-link">
                                Instagram
                            </motion.a>
                        </div>
                        <div className="copyrights w-[90%] mx-auto text-[#a3a3a3] text-[20px] mt-9 flex justify-between">
                            <p className="">
                                © 2026 All rights reserved.
                            </p>
                            <p>
                                Designed by Pachamuthu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
