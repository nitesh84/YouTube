import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { openMenu, toggleMenu } from '../Utils/appslice';
import { HAMBURGER_ICON_IMAGE, YOUTUBE_IMAGE, YOUTUBE_SUGGESTIONS_API } from '../Utils/constant';
import { Link } from 'react-router-dom';
import _map from "lodash/map"
import { searched } from '../Utils/searchslice';

const Header = () => {

    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState();
    const [showSuggestions,setShowSuggestions]=useState(false);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const timer = setTimeout(() => getSuggestions(), 500)

        return () => {
            clearTimeout(timer);
        }
    }, [search])

    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SUGGESTIONS_API + search);
        const json = await data.json();
        setShowSuggestions(true)
        setSuggestions(json[1]);
    }
    const handleClick = () => {
        dispatch(toggleMenu());
    }

    return (
        <>
        <div className="w-full h-12"></div>
        <div className='grid grid-flow-col fixed top-0 w-full z-50 bg-white'>
                        

            <div className='flex col-span-1 px-2'>
                <img onClick={() => { handleClick() }} className='w-10' src={HAMBURGER_ICON_IMAGE} alt='HamburgermenuLogo' />
                <Link className='flex col-span-1 px-2' to="/">
                    <img className='w-10' src={YOUTUBE_IMAGE} alt='YouTubeLogo' />
                    <p className='mt-1.5 font-bold text-black-600 text-xl'>YouTube</p>
                </Link>
            </div>
            <div className='col-span-10 text-center'>
                <input className='w-1/2 rounded-l-full mt-1.5 px-3 border border-gray-400'
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}
                     />
                <button className='bg-gray-300' onClick={()=>{
                    dispatch(searched(search));
                }}>Search</button>
                { showSuggestions && <div className='fixed mx-[258px] text-left bg-white w-[37.55rem] z-10 my-1  rounded-t-md  shadow-lg cursor-pointer'>
                    <ul>
                        {_map(suggestions,(item)=>{
                            console.log("test",item,<li>{item}</li>)
                            return <li className='font-bold px-2' key={item} onMouseDown={()=>{
                                console.log("item clciked",item)
                                setSearch(item)
                                setShowSuggestions(false)
                            }}>{item}</li>
                        })}
                    </ul>
                </div>
                }
            </div>
            <div className='col-span-1'>
                <img className='w-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbMgzYw0M94bT-Sp1UGBBHLj60mz3wVtWQ&usqp=CAU' alt='UserIcon' />
            </div>
        </div>
        </>
    )
}

export default Header