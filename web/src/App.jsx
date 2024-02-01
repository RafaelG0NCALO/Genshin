import React from 'react';

import bg from './assets/bg.webp'
import card from './assets/card.webp'
import card2 from './assets/card2.webp'
import card3 from './assets/card3.webp'
import side from './assets/side.webp'
import name from './assets/name.webp'
import avatar1 from './assets/avatar1.webp'
import avatar2 from './assets/avatar2.webp'
import avatar3 from './assets/avatar3.webp'
import perso from './assets/perso.webp'
import iconUser from './assets/iconUser.webp'
import logo from './assets/logo.webp'
import buttonPlay from './assets/buttonPlay.webp'

const Menu = React.lazy(() => import('./components/Menu'));
const Card = React.lazy(() => import('./components/Card'));

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  return (
    <div className='w-full min-h-screen flex p-3 items-center justify-center bg-[#1E1F27]'>
      <div className="w-full max-w-7xl h-[720px] overflow-hidden rounded-md m-auto relative">

      <div className='absolute w-full h-full'>
        <LazyLoadImage src={bg} height="100%" width="100%" alt="" effect="blur" className='object-cover w-full h-full' />
      </div>

        <div className='animate-slideUpScale h-full absolute max-md:-right-12 right-0 top-0 z-30 flex flex-col'>
          <div className='h-full w-32'>
            <LazyLoadImage src={side} alt="" effect="blur" className='w-full h-full object-contain' />
          </div>
          <div className='absolute w-20 flex items-center flex-col max-md:right-9 right-4 max-md:top-16 top-10'>
            <LazyLoadImage src={iconUser} alt="" effect="blur" className='cursor-pointer mb-16 max-md:w-10 max-md:mb-8' />
            <div className='flex flex-col gap-5'>
              <LazyLoadImage src={avatar1} alt="" effect="blur" className='object-contain max-md:w-9 w-12 cursor-pointer' />
              <LazyLoadImage src={avatar2} alt="" effect="blur" className='object-contain max-md:w-9 w-12 cursor-pointer' />
              <LazyLoadImage src={avatar3} alt="" effect="blur" className='object-contain max-md:w-9 w-12 cursor-pointer' />
            </div>
          </div>
        </div>

        <div className='flex h-1/2'>
          <header className='p-4 w-full absolute top-0 max-md:h-14 h-24 max-md:flex justify-center'>
            <LazyLoadImage src={logo} alt="" effect="blur" className='object-contain animate-fadeIn' />
          </header>
          <LazyLoadImage src={name} alt="" className='w-[600px] animate-slideUpScale absolute max-md:w-60 max-md:-left-4 left-0 object-contain top-6' />
          <LazyLoadImage height="100%" width="100%" src={perso} alt="" className='animate-slideDown absolute object-contain max-md:scale-100 max-md:h-auto h-full -right-36 top-0 max-md:top-10 max-md:right-0' />
        </div>

        <div className='absolute bottom-10 z-30 w-full max-w-7xl m-auto flex justify-between max-md:pl-1 pl-7'>
          <div className='animate-slideLeft'>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Menu />
            </React.Suspense>
          </div>
          <div className='flex  w-full flex-col justify-evenly items-start overflow-hidden'>
            <img src={buttonPlay} alt="" className='h-14 cursor-pointer' />
            <div className='w-full animate-fadeIn p-4 overflow-x-auto Noscroll relative'>
              <div className='w-full h-full flex justify-start gap-4'>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Card card={card} translateContent />
                  <Card card={card2} />
                  <Card card={card3} />
                  <Card card={card} />
                </React.Suspense>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
