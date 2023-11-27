"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Button from "./Button";
import logo from "./../public/carrefour_logo.png";

interface NationalDayInterface {
  title?: string;
}
const NationalDay: React.FC<NationalDayInterface> = ({ title }) => {
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

  const motionSettingsOpacity = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div
          className="w-full bg-red-200 text-center justify-center items-center
        hidden md:flex"
        >
          <div
            className="nationalday_left
            bg-cover bg-bottom bg-no-repeat
    h-[600px] w-full"
          >
            {" "}
          </div>
        </div>
        <div className="flex w-full bg-white">
          <Section>
            <div className="flex flex-col gap-y-4 p-6">
              <div>
                <motion.div
                  {...motionSettingsleft2right}
                  className={`flex ${
                    locale === "/"
                      ? "font-DIN-Bold text-5xl md:text-6xl gap-x-2"
                      : "font-DINArabic-Black text-5xl md:text-6xl mb-2"
                  }`}
                >
                  <div className="text-webRed">{t.happy}</div>
                  <div className="text-webGreen">{t.uae}</div>
                </motion.div>

                <motion.div
                  {...motionSettingsright2left}
                  className={`flex mb-2 ${
                    locale === "/"
                      ? "font-DIN-Bold text-5xl md:text-6xl"
                      : "font-DINArabic-Black text-5xl md:text-6xl"
                  }`}
                >
                  <div className="text-webBlack">{t.national_day}</div>
                </motion.div>
              </div>

              <motion.div
                {...motionSettingsOpacity}
                className={` flex flex-col gap-y-3 mb-2 text-webBlue ${
                  locale === "/"
                    ? "font-DIN font-thin text-lg"
                    : "font-HelveticaNeueLTArabic-Roman font-thin mt-2 text-xl md:text-2xl"
                }`}
              >
                <p>{t.paragraph1}</p>
                <p>{t.paragraph2}</p>
              </motion.div>

              <div className="flex flex-row justify-between items-center">
                <motion.div {...motionSettingsOpacity}>
                  <a href="#register">
                    <Button arrow outline small label={t.register_now} />
                    </a>
                </motion.div>
                <motion.div
                  {...motionSettingsOpacity}
                  className="flex flex-col justify-center items-center"
                >
                  <div
                    className={`mb-1
                   text-webBlue
                  ${
                    locale === "/"
                      ? "font-DIN-Bold text-[9px]"
                      : "font-helvetica-neue-lt-arabic-75-bol text-[9px]"
                  }
                  `}
                  >
                    {t.exclusive}
                  </div>
                  <Image width={170} alt="carrefour" src={logo} />
                </motion.div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default NationalDay;
