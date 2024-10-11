"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import "./header.scss";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };



  return (
    <div>
      <div className="header-outer-container w-full ">
        <div className="header-inner-container w-[90%] mx-auto my-8">
          <div className="header-container flex justify-between items-center">
            <div className="header-logo">
              <Image src="/pm-logo.svg" alt="" width={150} height={150} />
            </div>
            <div className="header-nav-dropdown-btn cursor-pointer" onClick={toggleNav}>
              <div className="nav-menu-button-line-wrapper">
                <motion.div
                  className="nav-menu-button-line w-[40px] h-[2px] bg-white rounded-lg"
                  animate={isNavOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                  className="nav-menu-button-line w-[40px] h-[2px] bg-white rounded-lg mt-3"
                  animate={isNavOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                className="nav-menu mt-4 w-full bg-[#000a0b] rounded-lg overflow-hidden absolute z-10"
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: -20, height: 0 }}
              >
                {/* Add your nav menu items here */}
                <motion.ul className='text-black text-5xl font-semibold flex flex-col gap-8 w-[70%] mx-auto py-8'>
                  <motion.li initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .2, duration: .5 }}><a href="#home">Home</a></motion.li>
                  <motion.li initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .4, duration: .5 }}><a href="#about">About</a></motion.li>
                  <motion.li initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .6, duration: .5 }}><a href="#projects">Projects</a></motion.li>
                  <motion.li initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .8, duration: .5 }}><a href="#contact">Contact</a></motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;