"use client";
import React from "react";
import Section from "./Section";
import howto_right from "./../public/howtoenter.png";
import Image from "next/image";
import { motion } from "framer-motion";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const HowToEnter = () => {
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
      className="howtoenter
    bg-right bg-cover bg-no-repeat
    h-full 
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <Section>
        <div
          className="flex flex-col  md:flex-row justify-center items-center
        pt-10
        "
        >
          <div
            className={`
          flex h-full justify-center items-center 
          ${locale === "/" ? "pl-4 md:pl-16" : "md:pr-16"}
          `}
          >
            <motion.div
              {...motionSettingsh2}
              className="text-3xl md:text-5xl  lg:text-6xl text-webBlue"
            >
              <div
                className={`
                ${
                  locale === "/"
                    ? "font-DIN-Regular text-5xl md:text-6xl md:pl-10"
                    : "font-DINArabic-Black text-5xl md:text-6xl pr-4"
                }`}
              >
                {t.How_to_enter}
              </div>
              <div
                className={`mt-8 flex flex-col gap-6 gap-y-6  
              ${locale === "/" ? "font-DIN-Regular text-base" : "font-HelveticaNeueLTArabic-Roman text-sm"}
              `}
              >
                <div className="pointers_main">
                  <div className="flex-1">
                    <div
                      className={`pointers ${
                        locale === "/" ? "" : "pointers_ar"
                      }`}
                    >
                      1
                    </div>
                  </div>
                  <div>{t.step_1_content}</div>
                </div>
                <div className="pointers_main">
                  <div className="flex-1">
                    <div
                      className={`pointers ${
                        locale === "/" ? "" : "pointers_ar"
                      }`}
                    >
                      2
                    </div>
                  </div>
                  <div>{t.step_2_content}</div>
                </div>
                <div className="pointers_main">
                  <div className="flex-1">
                    <div
                      className={`pointers ${
                        locale === "/" ? "" : "pointers_ar"
                      }`}
                    >
                      3
                    </div>
                  </div>
                  <div>{t.step_3_content}</div>
                </div>
                <div className="pointers_main justify-start items-center">
                  <div className="">
                    <div
                      className={`pointers ${
                        locale === "/" ? "" : "pointers_ar"
                      }`}
                    >
                      4
                    </div>
                  </div>
                  <span>{t.step_4_content}</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            {...motionSettingsImage}
            className={`w-[400px] md:min-w-[500px] mt-6 md:mt-0 
            ${locale === "/" ? "mr-6" : "ml-2"}
            `}
          >
            <Image alt="how to enter" src={howto_right} />
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default HowToEnter;
