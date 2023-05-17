import React from 'react';
import { NextPage } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Home: NextPage = () => {
   return (
      <div className="mb-16">
         <Header />
         <HeroSection />
      </div>
   );
};

export default Home;
