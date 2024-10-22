'use client'
import React from 'react';
import "./hero.scss";
import { motion, useScroll, useTransform } from 'framer-motion';


const HeroSection = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);
    const imageTranslateY = useTransform(scrollY, [0, 800], [0, -100]);

    const container = {
        hidden: { opacity: 1, },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 1.5,
                staggerChildren: 0.1,
                duration: 1.5
            }
        }
    }

    const itemleft = {
        hidden: { x: 10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        },
    }
    const itemright = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        },
    }

    const text = "Pachamuthu";

    const containerHeading = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: .6,
                staggerChildren: 0.05
            }
        }
    };

    const letterVariant = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 70,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    // Custom animation order
    const getCustomDelay = (index: number, textLength: number) => {
        if (index < 3 || index >= textLength - 3) {
            return 1; // Delay for first 3 and last 3 letters
        }
        return 0; // No delay for middle letters
    };

    return (
        <motion.div className="hero-section-container w-full h-[950px] flex flex-col items-center mt-[4rem]" style={{ opacity }}>
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.7 }} className="hero-section-heading-container text-white text-xl bg-[#171717] text-[#d0d0d0] p-4 rounded-full tracking-[7px]">
                <div className='hero-section-heading flex gap-4 items-center'>Welcome to My Portfolio </div>
            </motion.div>
            <div className="hero-section-subheading text-white text-[240px] tracking-[7px] font-bold">
                <motion.div
                    style={{
                        display: 'flex',
                        overflow: 'hidden',
                        fontWeight: 'bold'
                    }}
                    variants={containerHeading}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariant}
                            style={{ display: 'inline-block' }}
                            transition={{
                                delay: getCustomDelay(index, text.length)
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
            <div className='hero-section-slill-container flex justify-between w-[90%] text-[#d0d0d0] text-2xl'>
                <motion.div variants={container}
                    initial="hidden"
                    animate="visible"
                    className='hero-section-slill flex gap-12'
                >
                    <motion.p variants={itemleft}>#UI/UX Design</motion.p>
                    <motion.p variants={itemleft}>#Development</motion.p>
                </motion.div>
                <motion.div variants={container}
                    initial="hidden"
                    animate="visible"
                    className='hero-section-slill flex gap-12'
                >
                    <motion.p variants={itemright}>#Graphic Design</motion.p>
                    <motion.p variants={itemright}>#Animation</motion.p>
                </motion.div>
            </div>
            <motion.img className='absolute bottom-[-280px]' style={{ y: imageTranslateY }} initial={{ scale: 1.1, opacity: .8, y: 60 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ stiffness: 200, duration: .9 }} src="/thala.png" alt="" width={650} height={100} />
        </motion.div>
    );
}

export default HeroSection;