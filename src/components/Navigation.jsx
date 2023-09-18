import logo from '../assets/lemmyRat.webp'
import { IoHeartOutline, IoMenu, IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';

function Navigation() {
    const menu = (e)=>{
        
        alert(e)
    }
    return (
        <>
            <nav className="w-100 fixed top-2 px-4 font-sans flex justify-between duration-500 md:shadow md:justify-normal md:gap-4">
                <div className='flex gap-1'>
                    <img src={logo} alt="logo" className="w-7 h-7" />
                    <h2 className='text-lg text-white'>Lemmy.world</h2>
                </div>
                <div className='my-auto md:w-full'>
                    <IoMenu className='text-xl text-zinc-400 fixed right-0  mr-8 md:hidden' onClick={() => menu}/>
                    <ul className='text-zinc-400 leading-10 text-left my-5 z-auto absolute w-full left-4 transition-all ease-in duration-500 md:w-100 md:relative md:flex md:justify-between md:mx-4 md:my-auto md:pr-9 '>
                        <div className='md:flex md:gap-3'>
                        <li className='hover:text-white duration-500'>Communities</li>
                        <li className='hover:text-white duration-500'>Create Post</li>
                        <li className='hover:text-white duration-500'>Create Community</li>
                        <li className="flex gap-1 duration-500 hover:text-white "><IoHeartOutline className="my-auto" /> <p className='md:hidden duration-500'>Support Lemmy</p></li>
                        </div>
                        <div className='md:flex md:gap-4'>
                            <li className="flex gap-1 hover:text-white duration-500 "><IoSearchOutline className="my-auto " /> <p className='md:hidden '>Search</p></li>
                            {/* When session storage fetch is successful, hide these later */}
                            <li className='hover:text-white duration-500'>Login</li>
                            <li className='hover:text-white duration-500'>Sign Up</li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navigation