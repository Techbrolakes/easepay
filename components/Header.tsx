import React from 'react';
import SCREEN_TEXTS from './constants';
import icons from '../icons';

const Header: React.FC = () => {
   const [show, setShow] = React.useState<boolean>(true);

   const handleShow = () => {
      return setShow(false);
   };
   return (
      <div className="sticky top-0 w-full text-white">
         {show && (
            <section className="bg-gradientbg bg-center h-10 flex justify-center relative">
               <div className="flex gap-2 items-center">
                  <span className="text-base font-medium">*Earn up to $200 for getting started</span>
                  <span>{icons.arrowRight()}</span>
               </div>

               <span className="absolute right-6 top-3 cursor-pointer" onClick={handleShow}>
                  {icons.cancelIcon()}
               </span>
            </section>
         )}

         <section className="flex items-center justify-center gap-52 py-4 bg-[#0A071B] border-b-[1px] border-b-slate-500">
            <div className="flex">
               <span>{icons.logoIcon()}</span>
               <span>{icons.logoText()}</span>
            </div>

            {/* MENU LINKS */}
            <div className="flex gap-10">
               {SCREEN_TEXTS.menuLinks.map((item) => (
                  <div key={item}>
                     <span>{item}</span>
                  </div>
               ))}
            </div>

            {/* MENU BUTTON LINKS */}
            <div className="flex gap-8">
               <span>Log In</span>
               <span>Sign Up</span>
            </div>
         </section>
      </div>
   );
};

export default Header;
