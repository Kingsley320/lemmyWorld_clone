import logo from '../assets/lemmyRat.webp'
import { IoHeartOutline, IoMenu, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useMediaQuery } from '@uidotdev/usehooks'
import { BsBell, BsCaretDownFill } from 'react-icons/bs';

function Navigation() {
    const [toggled, setToggled] = useState(false)
    const [loggedProfile, setLoggedProfile] = useState(false);
    const menu = () => {
        toggled == false ? setToggled(true) : setToggled(!toggled)
    }
    const navigate = useNavigate()
    const isMediumScreen = useMediaQuery("only screen and (min-width : 768px)")

    useEffect(() => {
        isMediumScreen ? setToggled(true) : null
    }, [isMediumScreen]);

    return (
        <>
            <div className='w-full max-w-7xl relative top-0 md:flex md:justify-evenly px-3 mx-auto shadow '>
                <nav className=" pt-2 mb-4 pr-2 font-sans flex justify-between duration-500 md:w-auto md:justify-normal">
                    <div className='flex gap-1' onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" className="w-7 h-7" />
                        <h2 className='text-lg text-white'>Lemmy.world</h2>
                    </div>
                    <div className='flex gap-2'>
                        {
                            sessionStorage.getItem('lemmyIsLogged') && <BsBell className="my-auto text-md md:hidden" />
                        }
                        <IoMenu className={`my-auto text-xl text-zinc-400 focus:ring-zinc-300 md:hidden duration-300`} onClick={menu} />

                    </div>
                </nav>
                <ul className={`h-0 overflow-hidden text-zinc-400 leading-10 relative w-full  transition-all ease-in-out duration-300 md:left-4 md:text-sm md:relative md:flex md:justify-between md:mx-4 md:my-auto  md:translate-x-0 md:duration-0 ${toggled == true ? "opacity-100  h-auto " : "opacity-0 h-0"}`}>
                    <div className='top-0 md:flex md:gap-3 '>
                        <li className='hover:text-white duration-300 md:my-auto'>Communities</li>
                        <Link to={sessionStorage.getItem('lemmyIsLogged') ? "/create-post" : "/login"} className="md:my-auto"><li className='hover:text-white duration-300 '>Create Post</li></Link>
                        <li className='hover:text-white duration-300 md:my-auto'>Create Community</li>
                        <li className="flex gap-1 duration-300 hover:text-white "><IoHeartOutline className="my-auto" /> <p className='md:hidden duration-300'>Support Lemmy</p></li>
                    </div>
                    <div className='md:flex md:gap-4'>
                        <li className="flex gap-1 hover:text-white duration-300 "><IoSearchOutline className="my-auto " /> <p className='md:hidden '>Search</p></li>
                        {
                            JSON.parse(sessionStorage.getItem('lemmyIsLogged')) !== null ?
                                <>
                                    <li className='hover:text-white duration-300 flex gap-1'><BsBell className="my-auto top-0" /><small className='font-bold text-white text-xs p-1 bg-neutral-700/50 rounded-md md:hidden'>0 Unread Messages</small></li>
                                    <li className='w-full  duration-300  p-1  relative md:w-auto '>
                                        <button className="h-auto  gap-1 my-1 px-2 rounded-lg flex align-middle focus:ring-1 focus:ring-white focus:ring-offset" onClick={() => { setLoggedProfile(!loggedProfile)}}>
                                            <p className=' flex self-center'>
                                                {JSON.parse(sessionStorage.getItem('lemmyIsLogged')).username}
                                            </p>
                                            <BsCaretDownFill className='my-auto text-xs' />
                                        </button>
                                        <div className={`bg-neutral-700/75 w-full  rounded-lg  
                                        ${loggedProfile ? ('duration-300 h-auto') : ('h-0')
                                            }
                                        `}>
                                            <div className="px-2">
                                                <span className="w-full block h-6 hover:text-white">Profile</span>
                                                <span className="w-full block h-6 hover:text-white">Settings</span>
                                            </div>
                                            <span className="w-full px-2 mt-4 block border-t border-neutral-500"
                                                onClick={() => {
                                                    sessionStorage.removeItem("lemmyIsLogged");
                                                    navigate("/");
                                                }}>Logout
                                            </span>
                                        </div>
                                    </li>
                                </> :
                                <>
                                    <Link to={`/login`}>
                                        <li className='hover:text-white '>Login</li>
                                    </Link>
                                    <Link to='/signup'>
                                        <li className='hover:text-white '>Sign Up</li>
                                    </Link>
                                </>
                        }
                    </div>
                </ul >
            </div >
        </>
    )
}
export default Navigation