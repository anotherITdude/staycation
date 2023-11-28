"use client";
import React from "react";
import Section from "./Section";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Staycation = () => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsh2_back = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsOpacity = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  return (
    <div
      className={`
     h-full bg-cover 
    md:bg-cover md:h-[539px]
    flex flex-col overflow-hidden
    ${locale === "/" ? "staycation bg-left-top" : "staycation_ar bg-right-top"}
    `}
    >
      <Section>
        <div
          className={`pt-[2.5%] ${
            locale === "/" ? "md:pl-[7%]" : "md:pr-[7%]"
          }`}
        >
          {/* //top */}
          <motion.div {...motionSettingsh2} className="flex  ">
            <div
              className={` text-webWhite ${
                locale === "/"
                  ? "font-DIN-Bold text-6xl -mb-4 pt-6"
                  : "font-DINArabic-Black text-6xl pt-2 md:pt-6"
              }`}
            >
              {t.win}
            </div>
          </motion.div>
          {/* bottom */}
          <div className="flex gap-x-2 font-extralight">
            <motion.div
              {...motionSettingsh2_back}
              className={`text-webRed ${
                locale === "/"
                  ? "font-DIN-Bold text-9xl"
                  : "font-DIN-Bold  text-9xl"
              }`}
            >
              10
            </motion.div>
            <motion.div
              {...motionSettingsh2}
              className="flex flex-col justify-center "
            >
              <div
                className={`  text-webWhite ${
                  locale === "/"
                    ? "font-DIN-Bold text-2xl md:text-3xl -mb-1 pt-6 md:pt-2 "
                    : "font-DINArabic-Black text-xl md:text-3xl pt-6 "
                }`}
              >
                {t.family_weekend}
              </div>
              <div
                className={`text-webWhite ${
                  locale === "/"
                    ? "font-DIN-Bold text-4xl md:text-6xl "
                    : "font-DINArabic-Black text-2xl md:text-3xl"
                }`}
              >
                {t.staycation}
              </div>
            </motion.div>
          </div>

          <motion.div
            {...motionSettingsOpacity}
            className={` md:w-[45%] mt-0 text-webWhite ${
              locale === "/"
                ? "font-DIN text-lg pl-4"
                : "font-HelveticaNeueLTArabic-Roman text-lg pr-4 "
            }`}
          >
            {t.staycation_info}
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Staycation;
