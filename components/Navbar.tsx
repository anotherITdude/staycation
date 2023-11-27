'use client' 

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo_eng from "../public/logo_eng.png";
import logo_ar from "../public/logo_ar.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const locale = usePathname();
  const locales = ["en", "ar"]; // Add other supported locales here
  const finalLogo = locale === '/' ? logo_eng : logo_ar
  return (
    <motion.nav className={`flex justify-between  -mb-00 z-50 relative
    ${locale === '/' ? ' pl-6 md:pl-16' : 'pr-6 md:pr-16'}
    `}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-neosans-medium uppercase flex justify-center items-center gap-[3px]"
      >
        <div className={`${locale === "/ar" ? "md:pr-4 mt-10" : "md:pl-4 mt-10"}`}>
          {locales.map((lang, index) => (
            <React.Fragment key={lang}>
              <Link
                href={lang === "en" ? "/" : `/${lang}`}
                className={`${
                  locale === `/${lang}` || (locale === "/" && lang === "en")
                    ? "text-gray-500 cursor-not-allowed underline underline-offset-4 font-Gotham-Medium"
                    : "text-red-800 cursor-pointer font-Gotham-Medium "
                }`}
              >
                {lang === "ar" ? "Ar" : "En"}
              </Link>
              {index !== locales.length - 1 && (
                <span className="font-DIN-Bold pr-1 pl-1 text-md ">&#x2022;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      <motion.div className="pt-4 pr-14 ">
        <Link href="/">
          <Image
            quality={100}
            placeholder="empty"
            src={finalLogo}
            alt="logo"
            className={`w-[150px] md:w-[200px] cursor-pointer absolute 
            ${locale === "/" ? "top-0 right-0 " : "top-0 left-0 "} `}
          />
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
