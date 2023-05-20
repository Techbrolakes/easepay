import React from 'react';
import { NextPage } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import useGlobalStore from 'store';

const Home: NextPage = () => {
   const nav = useGlobalStore((state) => state.nav);

   return (
      <div className="mb-16">
         <Header />
         {!nav && <HeroSection />}
      </div>
   );
};

export default Home;
