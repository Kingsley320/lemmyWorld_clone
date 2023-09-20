import logo from '../assets/lemmyRat.webp'
import { IoHeartOutline, IoMenu, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@uidotdev/usehooks'

function Navigation() {
    const [toggled, setToggled] = useState(false)
    const menu = () => {
        toggled == false ? setToggled(true) : setToggled(!toggled)
    }
    const navigate = useNavigate()

    const isMediumScreen = useMediaQuery("only screen amd (min-width : 768px)")

    useEffect(() => {
        isMediumScreen ? setToggled(true) : setToggled(!toggled)
    }, [isMediumScreen]);

    return (
        <>
            <div className='w-full relative top-0 md:flex md:justify-evenly mx-auto md:shadow  max-w-7xl'>
                <nav className=" bg-neutral-800  pt-2 mb-4 px-4 font-sans flex justify-between duration-500 md:w-auto md:justify-normal">
                    <div className='flex gap-1'>
                        <img src={logo} alt="logo" className="w-7 h-7" onClick={() => navigate('/')} />
                        <h2 className='text-lg text-white'>Lemmy.world</h2>
                    </div>
                    <div className='md:w-100'>
                        <IoMenu className={`my-auto text-xl text-zinc-400 relative right-0 translate-x-[-20px]  active:rounded-md border-zinc-300 md:hidden `} onClick={menu} />

                    </div>
                </nav>
                <ul className={`h-0 overflow-hidden text-zinc-400 leading-10 relative w-full left-4 transition-all ease-in-out duration-300 md:w-100 md:text-sm md:relative md:flex md:justify-between md:mx-4 md:my-auto md:pr-9 md:translate-x-0 md:duration-0 ${toggled == true ? "opacity-100  h-auto" : "opacity-0 "}`}>
                    <div className='top-0 md:flex md:gap-3'>
                        <li className='hover:text-white duration-300'>Communities</li>
                        <li className='hover:text-white duration-300'>Create Post</li>
                        <li className='hover:text-white duration-300'>Create Community</li>
                        <li className="flex gap-1 duration-300 hover:text-white "><IoHeartOutline className="my-auto" /> <p className='md:hidden duration-300'>Support Lemmy</p></li>
                    </div>
                    <div className='md:flex md:gap-4'>
                        <li className="flex gap-1 hover:text-white duration-300 "><IoSearchOutline className="my-auto " /> <p className='md:hidden '>Search</p></li>
                        {/* When session storage fetch is successful, hide these later */}
                        <li className='hover:text-white '>Login</li>
                        <li className='hover:text-white '>Sign Up</li>
                    </div>
                </ul>
            </div>
        </>
    )
}
export default Navigation

// import logo from '../assets/lemmyRat.webp'
// import { IoHeartOutline, IoMenu, IoSearchOutline } from "react-icons/io5";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { useMediaQuery } from '@uidotdev/usehooks'

// function Navigation() {
//     const [toggled, setToggled] = useState(false)
//     const menu = () => {
//         toggled == false ? setToggled(true) : setToggled(!toggled)
//     }
//     const navigate = useNavigate()

//     const isMediumScreen = useMediaQuery("only screen amd (min-width : 426px) and (max-width : 768px)")

//     return (
//         <>
//             <div className='w-full relative top-0 md:flex md:justify-evenly mx-auto md:shadow  max-w-7xl'>
//                 <nav className=" bg-neutral-800  pt-2 mb-4 px-4 font-sans flex justify-between duration-500 md:w-auto md:justify-normal">
//                     <div className='flex gap-1'>
//                         <img src={logo} alt="logo" className="w-7 h-7" onClick={() => navigate('/')} />
//                         <h2 className='text-lg text-white'>Lemmy.world</h2>
//                     </div>
//                     <div className='md:w-100'>
//                     <IoMenu className={`my-auto text-xl text-zinc-400 relative right-0 translate-x-[-20px]  active:rounded-md border-zinc-300 md:hidden `} onClick={menu} />

//                     </div>
//                 </nav>
//                 <ul className={`h-0 overflow-hidden text-zinc-400 leading-10 relative w-100 left-4 transition-all ease-in-out duration-300 md:w-100 md:text-sm md:relative md:flex md:justify-between md:mx-4 md:my-auto md:translate-x-0 md:duration-0 ${toggled == true ? "opacity-100  h-auto" : "opacity-0 "}`}>
//                     <div className='top-0 md:flex md:gap-3'>
//                         <li className='hover:text-white duration-300'>Communities</li>
//                         <li className='hover:text-white duration-300'>Create Post</li>
//                         <li className='hover:text-white duration-300'>Create Community</li>
//                         <li className="flex gap-1 duration-300 hover:text-white "><IoHeartOutline className="my-auto" /> <p className='md:hidden duration-300'>Support Lemmy</p></li>
//                     </div>
//                     <div className='md:flex md:gap-4'>
//                         <li className="flex gap-1 hover:text-white duration-300 "><IoSearchOutline className="my-auto " /> <p className='md:hidden '>Search</p></li>
//                         {/* When session storage fetch is successful, hide these later */}
//                         <li className='hover:text-white '>Login</li>
//                         <li className='hover:text-white '>Sign Up</li>
//                     </div>
//                 </ul>
//             </div>
//         </>
//     )
// }
// export default Navigation