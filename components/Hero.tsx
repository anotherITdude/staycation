import React from 'react'
import Section from './Section'

interface HeroInterface {
  title?:string
}
const Hero: React.FC<HeroInterface> = ({title}) => {
  return (
    <Section>
      <p className="text-center pb-4">{title}</p>
      <div className="flex flex-row justify-evenly min-h-[400px]">
        <div className="flex w-full bg-red-200 text-center justify-center items-center">Left</div>
        <div className="flex w-full bg-purple-300 items-center justify-center">Right</div>
      </div>
    </Section>
  );
}

export default Hero
