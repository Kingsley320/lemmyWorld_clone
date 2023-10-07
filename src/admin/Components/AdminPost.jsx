import defaultLogo from '../../assets/defaultLogo.png'
import { BsArrowDownShort, BsArrowUpShort, BsBoxArrowUpRight, BsChatLeft, BsDot, BsFillCaretDownFill, BsPlusSquare, BsShareFill, BsStar, BsThreeDotsVertical, BsTrash2, } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function AdminPost(props) {
    return (
        <>
            <div className='my-2 mx-2 pb-2 border-b-[0.3px] border-neutral-700 no-underline'>
                <div className='w-full mb-1 '>
                    <div className='w-full flex justify-between '>
                        <img src={props.defaultUser || defaultLogo} alt="userlogo" className='w-5 h-5' />
                        <small className='text-sky-500'>{props.username || "Please Login"}</small>
                        <small> to </small>
                        <img src={props.catLogo || defaultLogo} alt="category logo" className='w-5 h-5' />
                        <small className='text-emerald-300'>{props.category || "Technology"}</small>
                        <small className="capitalize">{props.language}</small>
                        <small className='my-auto'><BsDot className='text-lg font-bold' /></small>
                        <small className="capitalize">{props.dateCreated || "some time ago"}</small>
                    </div>
                </div>
                <div className='w-full'>
                    <div className=' grid grid-cols-12'>
                        <div className='grid-rows-2 col-start-1 col-end-9'>
                           <Link to={`/feed/${props.postLink}`} >
                           <h2 className="text-lg font-semibold capitalize">{props.title}
                                {/* <span className=""><BsPlusSquare /></span> */}
                            </h2>
                           </Link>
                            <small className='active:text-white hover:text-white'>{props.url}</small>
                        </div>
                        <div className={`h-24 col-start-10 col-end-13 relative ${!props.image ? 'hidden' : null}`}>
                            <img src={props.image || null} alt="post image" className=' h-full p-1 rounded-xl' />
                            {/* <BsBoxArrowUpRight className="absolute top-1 right-1 bg-gray-400 text-xl hover:bg-gray-500" /> */}
                        </div>
                    </div>
                </div>
                <div className="w-full text-zinc-500 text-lg font-semibold ">
                    <div className="w-full pl-2 my-2 flex flex-wrap gap-4 justify-start ">
                        <span className='flex gap-2 my-auto'><BsChatLeft className='my-auto h-auto w-3 ' /> <small>{props.comments}</small></span>
                        {/* <span className='my-auto font-bold'>< BsShareFill className='h-auto w-3 font-bold' /></span> */}
                        <span className='flex '><BsArrowUpShort className='my-auto text-xl ' /> <small>{props.likes}</small></span>
                        <span className='flex '><BsArrowDownShort className='my-auto text-xl' /> <small>{props.dislikes}</small></span>
                        {/* <span className='my-auto'><BsStar className='h-auto w-3 ' /></span> */}
                        {/* <span className='my-auto'><IoCopyOutline className='h-auto w-3 ' /></span> */}
                        {/* <span className="flex gap-1 hover:bg-slate-700 my-auto h-auto w-8">
                            <BsThreeDotsVertical />
                            <BsFillCaretDownFill className='p-1' />
                        </span> */}
                        <span className='my-auto' >
                            <BsTrash2 className='h-auto w-3 ' onClick={props.onClick} id={props._id} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}