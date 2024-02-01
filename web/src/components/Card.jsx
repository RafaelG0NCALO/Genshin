import React from 'react'
import iconCard from '../assets/iconCard.webp'
import translate from '../assets/translate.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({card, translateContent}) => {
  return (
    <div className='w-full min-w-[300px] cursor-pointer first:opacity-100 opacity-65 transition-all  hover:opacity-100 max-w-[400px] rounded-3xl relative'>
        
        <div className='w-16 h-16 cursor-pointer hover:bg-gray-200 absolute right-0 rounded-full border-4 border-black bg-white flex items-center justify-center'>
            <LazyLoadImage src={iconCard} alt="" effect="blur" className='w-5' />
        </div>
           
        <div className='w-full h-full '>
            <LazyLoadImage src={card} alt="" effect="blur" className='w-full h-full object-contain' />
        </div>
        {translateContent &&
        <div className='w-12 h-24 flex items-center flex-col justify-center rounded-full absolute right-3 bottom-2 bg-black'>
            <p className='text-white mb-1'>Eng</p>
            <span className='h-3 border-[1px] bg-white block'/>
            <div className='h-9 w-9 mt-2 rounded-full bg-white flex items-center justify-center'>
                <LazyLoadImage src={translate} alt="" effect="blur" />
            </div>
        </div>
        }
    </div>
  )
}

export default Card