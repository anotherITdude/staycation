"use client";
import React from "react";
import Section from "./Section";
import hero_right from "./../public/hero_right.png";
import hero_left from "./../public/hero_left.png";
import Image from "next/image";
import { motion } from "framer-motion";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Hero = () => {
  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsImage = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const motionSettingsleft2right = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsright2left = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const how_to_title =
    locale === "/"
      ? "howtocard_title font-DIN-Bold"
      : "howtocard_title font-HelveticaNeueLTArabic-Roman pt-0";

  const how_to_card =
    locale === "/"
      ? "howtocard font-DIN-Bold"
      : "howtocard font-HelveticaNeueLTArabic-Roman";

  return (
    <div
      className="hero
    bg-right bg-cover bg-no-repeat
    h-[820px]
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <Navbar />

      <div
        className="flex flex-col  md:flex-row justify-between items-center
        pl-4 pr-4 -mb-10
        "
      >
        <div
          className={`
          flex h-full justify-evenly items-center 
          ${locale === "/" ? "pr-6 md:pl-16" : "pr-6 md:pr-16"}
          `}
        >
          <motion.div
            {...motionSettingsleft2right}
            className={` w-full md:w-[500px] mt-16 md:mt-0 
            ${locale === "/" ? " md:mr-6" : " md:ml-2"}
            `}
          >
            <Image alt="how to enter" src={hero_left} />
          </motion.div>
        </div>
        <div
          className={`flex flex-col 
        ${locale === "/" ? "md:mr-[100px]" : "md:ml-[100px]"}
        `}
        >
          <motion.div
            {...motionSettingsright2left}
            className={`w-[300px] md:w-[400px] mt-6 md:mt-0 
            ${locale === "/" ? " md:mr-18" : " md:mr-2"}
            `}
          >
            <Image alt="how to enter" src={hero_right} />
          </motion.div>
          <motion.div
            {...motionSettingsImage}
            className={` text-webBlue mt-2 text-center 
            ${
              locale === "/"
                ? "font-DIN-Bold text-xs  "
                : "font-HelveticaNeueLTArabic-Roman text-xs"
            }
            `}
          >
            {t.promition}
          </motion.div>
          <motion.div
            {...motionSettingsImage}
            className={` text-webBlue mt-10  md:mt-20 
            ${
              locale === "/"
                ? "font-DIN-Regular text-sm text-right pr-2 md:pr-0"
                : "font-HelveticaNeueLTArabic-Roman text-sm text-left pl-2 md:pl-0"
            }
            `}
          >
            <a href="#terms">{t.terms_and_conditions}</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
