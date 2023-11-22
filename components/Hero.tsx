import React from 'react'
import Section from './Section'

interface HeroInterface {
  title?:string
}
const Hero: React.FC<HeroInterface> = ({title}) => {
  return (
    <Section>
      <p className="text-center pb-4 text-2xl">{title}</p>
      <div className="flex flex-col md:flex-row justify-evenly ">
        <div className="flex w-full bg-red-200 text-center justify-center items-center min-h-[400px]">
          Left
        </div>
        <div className="flex w-full bg-purple-300 items-center justify-center min-h-[400px]">
          Right
        </div>
      </div>
    </Section>
  );
}

export default Hero
