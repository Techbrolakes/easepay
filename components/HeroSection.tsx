import React from 'react';
import { BlueGradientText, Button, Flex, GradientHeader, GradientText } from '@/styled/index';
import icons from '@icons';
import Image from 'next/image';

const HeroSection: React.FC = () => {
   const [count, setCount] = React.useState<number>(1);

   React.useEffect(() => {
      const interval = setInterval(() => {
         setCount((prev) => {
            if (prev === 4) {
               return 1;
            } else {
               return prev + 1;
            }
         });
      }, 2000);
      return () => clearInterval(interval);
   }, [count]);

   return (
      <section>
         <div className="bg-[#0B071A] min-h-screen">
            {/* TEXT SECTION */}
            <section className="flex flex-col w-2/3 space-y-4 pt-[100px] mx-auto">
               <div className="flex flex-col">
                  <GradientHeader>Business banking with</GradientHeader>
                  {count === 1 && <BlueGradientText>No credit check</BlueGradientText>}
                  {count === 2 && <BlueGradientText>Zero Fees</BlueGradientText>}
                  {count === 3 && <BlueGradientText>Free Wires</BlueGradientText>}
                  {count === 4 && <BlueGradientText>Unlimited Rewards</BlueGradientText>}
               </div>
               <GradientText>Thousands of entrepreneurs bank on Winden to start or grow their business. Open an account in under 3 minutes.</GradientText>
               <Button>
                  <span>Get Started</span>
                  <span>{icons.arrowRight()}</span>
               </Button>
               <Flex>
                  <Image src="/svgs/purpleIcon.svg" alt="icon" width={30} height={30} />
                  <GradientText>Sign up today and earn up to $200. Conditions apply. **</GradientText>
               </Flex>
            </section>
         </div>

         <div className="mt-[-300px] z-30">
            <Image src="/svgs/hero.svg" alt="hero-svg" width={2000} height={1700} />
         </div>

         <div className="flex justify-center items-center gap-20 mt-20">
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
