import React from 'react';
import Card from './components/Card';
import card from './assets/card.svg'
import card2 from './assets/card2.svg'
import card3 from './assets/card3.svg'
import side from './assets/side.svg'
import name from './assets/name.svg'
import avatar1 from './assets/avatar1.svg'
import avatar2 from './assets/avatar2.svg'
import avatar3 from './assets/avatar3.svg'
import perso from './assets/perso.svg'
import iconUser from './assets/iconUser.svg'
import logo from './assets/logo.png'
import buttonPlay from './assets/buttonPlay.svg'
import Menu from './components/Menu';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  return (
    <div className='w-full min-h-screen flex p-3 items-center justify-center bg-[#1E1F27]'>
      <div className="w-full bg-[url('./assets/bg.png')] max-w-7xl bg-no-repeat bg-cover h-[720px] overflow-hidden rounded-md m-auto relative">


        <div className='animate-slideUpScale absolute max-md:-right-12 right-0 top-0 z-30 flex flex-col'>
            <LazyLoadImage src={side} alt="" effect="blur"/>
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
            <header className='p-4 w-full max-md:h-14 h-24 max-md:flex justify-center'>
              <LazyLoadImage src={logo} alt="" effect="blur" className='object-contain animate-fadeIn'/>
            </header>
            <LazyLoadImage src={name} alt="" className='animate-slideUpScale absolute max-md:w-60 max-md:-left-4 left-0 object-contain top-6' />
            <img src={perso} alt="" className='animate-slideDown absolute object-contain max-md:scale-100 max-md:h-auto h-full -right-10 top-0 max-md:top-10 max-md:right-0' />
        </div>

        <div className='absolute bottom-10 z-30 w-full max-w-7xl m-auto flex justify-between max-md:pl-1 pl-7'>
          <div className='animate-slideLeft'>
            <Menu/>
          </div>
          <div className='flex  w-full flex-col justify-evenly items-start overflow-hidden'>
            <img src={buttonPlay} alt="" className='h-14 cursor-pointer' />
            <div className='w-full animate-fadeIn p-4 overflow-x-auto Noscroll relative'>
                <div className='w-full h-full flex justify-start gap-4'>
                <Card card={card} translateContent />
                <Card card={card2} />
                <Card card={card3} />
                <Card card={card} />
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
