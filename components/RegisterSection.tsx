"use client";
import React from "react";
import RegistrationForm from "./RegistrationForm";
import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

interface RegisterSectionInterface {
  title?: string;
}
const RegisterSection: React.FC<RegisterSectionInterface> = ({ title }) => {
  const motionSettings = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsh2 = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsButton = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.5 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  return (
    <div id="register">
      <div className="flex flex-col md:flex-row justify-evenly ">
        <div
          className="w-full bg-red-200 text-center justify-center items-center min-h-[400px]
        hidden md:flex"
        >
          <div
            className="registration_left
    bg-right bg-cover bg-no-repeat
    h-[620px] w-full"
          >
    
          </div>
        </div>
        <div className="flex w-full bg-webWhite  justify-center min-h-[400px]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
