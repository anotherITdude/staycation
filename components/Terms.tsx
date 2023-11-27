"use client";
import React from "react";
import Section from "./Section";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const Terms = () => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  return (
    <div
      id="terms"
      className="text-webWhite"
      style={{ background: "#3F4040", height: "auto" }}
    >
      <Section>
        <div
          className="w-full md:w-[90%] pl-4 pr-4 md:pl-20 "
          style={{ margin: "auto", marginTop: "5%" }}
        >
          <h1
            className={`  mb-4 ${
              locale === "/"
                ? "font-DIN-Bold text-3xl md:text-4xl"
                : "text-4xl font-DINArabic-Black  md:text-5xl"
            }`}
          >
            {t.terms_heading}
          </h1>
          <ul
            className={`list-decimal mt-4 
          ${
            locale === "/"
              ? "font-DIN-Regular text-sm md:text-lg pl-4"
              : "font-HelveticaNeueLTArabic-Roman text-sm md:text-lg pr-4"
          }
          `}
          >
            <li>{t.terms1}</li>
            <li>{t.terms2}</li>
            <li>{t.terms3}</li>
            <li>{t.terms4}</li>
            <li>{t.terms5}</li>
            <li>{t.terms6}</li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
