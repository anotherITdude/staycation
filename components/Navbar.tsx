'use client' 

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const locale = usePathname();
  const locales = ["en", "ar"]; // Add other supported locales here

  return (
    <motion.nav className="flex justify-between pl-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-neosans-medium uppercase flex justify-center items-center gap-[3px]"
      >
        <div className={`${locale === "/ar" ? "pr-4" : ""}`}>
          {locales.map((lang, index) => (
            <React.Fragment key={lang}>
              <Link
                href={lang === "en" ? "/" : `/${lang}`}
                className={`${
                  locale === `/${lang}` || (locale === "/" && lang === "en")
                    ? "text-gray-500 cursor-not-allowed"
                    : "text-red-800 cursor-pointer"
                }`}
              >
                {lang === "ar" ? "Ar" : "En"}
              </Link>
              {index !== locales.length - 1 && (
                <span className="border-r-2 border-blue-600 mx-2"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      <motion.div className="pt-4 pr-4">
        <Link href="/">
          <Image
            quality={100}
            placeholder="empty"
            src={logo}
            alt="logo"
            className="w-[110px] cursor-pointer"
          />
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
