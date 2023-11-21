'use client'

import Link from "next/link";
import React from "react";
import Image from "@/node_modules/next/image";
import logo from "../public/logo.svg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const locale = usePathname();
  return (
    <motion.nav className="flex justify-between pl-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-neosans-medium uppercase flex
          justify-center items-center gap-[3px]
        "
      >
        {locale === "/ar" ? (
          <>
            <Link className="text-red-800 cursor-not-allowed pr-4 " href="/ar">
              Ar
            </Link>
            <div className="flex pb-[25px] text-4xl font-sans text-[#7EE4FF]">
              .
            </div>
            <Link className="text-black cursor-pointer" href="/">
              Eng
            </Link>
          </>
        ) : (
          <>
            <Link className="text-red-800 cursor-pointer " href="/ar">
              Ar
            </Link>
            <div className="flex pb-[25px] text-4xl font-sans text-[#7EE4FF]">
              .
            </div>
            <Link className="text-black cursor-not-allowed" href="/">
              Eng
            </Link>
          </>
        )}
      </motion.div>
      <motion.div className="pt-4 pr-4">
        <Image
          quality={100}
          placeholder="empty"
          src={logo}
          alt="logo"
          className="w-[110px]"
        />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
