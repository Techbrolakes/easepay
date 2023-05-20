import React from 'react';
import SCREEN_TEXTS from './constants';
import icons from '../icons';
import { SignUpButton } from '@/styled/index';
import { FaBars, FaTimes } from 'react-icons/fa';
import useGlobalStore from 'store';

const Header: React.FC = () => {
   const [show, setShow] = React.useState<boolean>(true);
   const nav = useGlobalStore((state) => state.nav);
   const setNav = useGlobalStore((state) => state.setNav);

   const handleShow = () => {
      return setShow(false);
   };
   return (
      <div className="sticky top-0 w-full text-white">
         {show && (
            <section className="bg-gradientbg bg-center h-12 flex justify-center relative">
               <div className="flex gap-2 items-center">
                  <span className="text-base font-medium">*Earn up to $200 for getting started</span>
                  <span>{icons.arrowRight()}</span>
               </div>

               <span className="absolute right-6 top-5 cursor-pointer" onClick={handleShow}>
                  {icons.cancelIcon()}
               </span>
            </section>
         )}

         <section className="px-4 lg:px-4 flex items-center justify-between lg:justify-center gap-0 lg:gap-60 py-4 bg-[#0A071B] border-b-[1px] border-b-white border-opacity-5">
            <div className="flex">
               <span>{icons.logoIcon()}</span>
               <span>{icons.logoText()}</span>
            </div>

            {/* MENU LINKS */}
            <div className="hidden lg:flex gap-10">
               {SCREEN_TEXTS.menuLinks.map((item) => (
                  <div key={item}>
                     <span>{item}</span>
                  </div>
               ))}
            </div>

            {/* MENU BUTTON LINKS */}
            <div className="hidden lg:flex items-center gap-8">
               <span>Log In</span>
               <SignUpButton>Sign Up</SignUpButton>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="text-2xl cursor-pointer lg:hidden">
               {!nav && (
                  <span onClick={() => setNav(true)}>
                     <FaBars />
                  </span>
               )}
               {nav && (
                  <span onClick={() => setNav(false)}>
                     <FaTimes />
                  </span>
               )}
            </div>
         </section>

         {/* MOBILE MENU */}
         {nav && (
            <div className="space-y-20 bg-[#0A071B]  min-h-screen flex flex-col justify-start pt-8 items-center">
               {SCREEN_TEXTS.menuLinks.map((item) => (
                  <div key={item}>
                     <span>{item}</span>
                  </div>
               ))}
               <div className="flex flex-col justify-center items-center space-y-16">
                  <span>Log In</span>
                  <SignUpButton>Sign Up</SignUpButton>
               </div>
            </div>
         )}
      </div>
   );
};

export default Header;
