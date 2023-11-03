import React from 'react'
import { useDispatch } from 'react-redux'
import { openMenu, toggleMenu } from '../Utils/appslice';
import { HAMBURGER_ICON_IMAGE, YOUTUBE_IMAGE } from '../Utils/constant';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col'>
            <div className='flex col-span-1 px-2'>
                <img onClick={() => { handleClick() }} className='w-10' src={HAMBURGER_ICON_IMAGE} alt='HamburgermenuLogo' />
                <Link className='flex col-span-1 px-2' to="/">
                    <img className='w-10' src={YOUTUBE_IMAGE} alt='YouTubeLogo' />
                    <p className='mt-1.5 font-bold text-black-600 text-xl'>YouTube</p>
                </Link>
            </div>
            <div className='col-span-10 text-center'>
                <input className='w-1/2 rounded-l-full mt-1.5 px-3 border border-gray-400' type='text' placeholder='Search' />
                <button className='bg-gray-300'>Search</button>
            </div>
            <div className='col-span-1'>
                <img className='w-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbMgzYw0M94bT-Sp1UGBBHLj60mz3wVtWQ&usqp=CAU' alt='UserIcon' />
            </div>
        </div>
    )
}

export default Header