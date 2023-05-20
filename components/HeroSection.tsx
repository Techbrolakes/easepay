import React from 'react';
import { BlueGradientText, Button, Flex, GradientHeader, GradientText } from '@/styled/index';
import icons from '@icons';
import Image from 'next/image';
import SCREEN_TEXTS from './constants';
import TextTransition, { presets } from 'react-text-transition';

const { heroTexts } = SCREEN_TEXTS;

const HeroSection: React.FC = () => {
   const [index, setIndex] = React.useState(0);

   React.useEffect(() => {
      const intervalId = setInterval(
         () => setIndex((prevState) => index + 1),
         5000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
   }, [index]);

   return (
      <section className="space-y-20 lg:space-y-0">
         <div className="">
            <video loop muted autoPlay playsInline className="absolute top-0 left-0 right-0 bottom-0 -z-20 h-screen lg:h-[1071px] w-full object-cover">
               <source src="/video.mp4" type="video/mp4" />
            </video>
            {/* TEXT SECTION */}
            <section className="px-4 lg:px-0 flex flex-col w-full lg:w-2/3 space-y-4 pt-[50px] lg:pt-[140px] mx-auto">
               <div className="flex flex-col h-[100px] lg:h-full -z-10">
                  <GradientHeader>Business banking with</GradientHeader>
                  <TextTransition springConfig={presets.default} direction="up">
                     <BlueGradientText>{heroTexts[index % heroTexts.length]}</BlueGradientText>
                  </TextTransition>
               </div>
               <article className="space-y-1">
                  <GradientText>Thousands of entrepreneurs bank on Winden to start or grow their business.</GradientText>
                  <GradientText>Open an account in under 3 minutes.</GradientText>
               </article>
               <section className="space-y-6">
                  <Button>
                     <span>Get Started</span>
                     <span>{icons.arrowRight()}</span>
                  </Button>
                  <Flex className="!gap-3">
                     <Image src="/svgs/purpleIcon.svg" alt="icon" width={30} height={30} />
                     <GradientText className="!text-xs lg:!text-sm">Sign up today and earn up to $200. Conditions apply. **</GradientText>
                  </Flex>
               </section>
            </section>
         </div>

         {/* HERO SECTION */}
         <div className="hidden lg:block mt-[-400px] z-30">
            <Image src="/svgs/hero.svg" alt="hero-svg" width={2000} height={1700} />
         </div>

         {/* COMPANIES LOGOS */}
         <div className="flex flex-wrap justify-center items-center gap-14 lg:gap-20 mt-6 lg:mt-20">
            <span>{icons.techCrunch()}</span>
            <span className="mb-2">{icons.forbes()}</span>
            <span>{icons.enterprenuer()}</span>
            <span>{icons.techTimes()}</span>
            <span>{icons.wallStreet()}</span>
         </div>
      </section>
   );
};

export default HeroSection;
