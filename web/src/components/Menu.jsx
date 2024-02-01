import React from 'react'
import home from '../assets/home.svg'
import bag from '../assets/bag.svg'
import star from '../assets/star.svg'
import location from '../assets/location.svg'
import borderMenu from '../assets/borderMenu.png'

const Menu = () => {
    return (
        <div className='w-full max-md:min-w-[95px] min-w-[110px] h-[300px] relative'>
            <img src={borderMenu} alt="" className='absolute left-0 top-0 z-10 object-contain h-full w-full' />
            <div className='absolute left-0 top-0 flex flex-col h-full pb-7 items-center w-full justify-center z-20'>
                <img src={home} alt="" className='w-14' />
                <img src={star} alt="" className='w-14' />
                <img src={location} alt="" className='w-14' />
                <img src={bag} alt="" className='w-14' />
            </div>
        </div>
    )
}

export default Menu