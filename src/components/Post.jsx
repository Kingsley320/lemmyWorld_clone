import defaultLogo from '../assets/defaultLogo.png'
import { BsArrowDownShort, BsArrowUpShort, BsBoxArrowUpRight, BsChatLeft, BsDot, BsFillCaretDownFill, BsPlusSquare, BsShareFill, BsStar, BsThreeDotsVertical, } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";

export default function Post(props) {
    return (
        <>
            <div className='my-2 mx-2 pb-2 border-b-[0.3px] border-neutral-700'>
                <div className='w-full mb-1 '>
                    <div className='w-full flex justify-between '>
                        <img src={props.defaultUser} alt="userlogo" className='w-5 h-5' />
                        <small className='text-sky-500'>{props.username}</small>
                        <small> to </small>
                        <img src={props.catLogo} alt="category logo" className='w-5 h-5' />
                        <small className='text-emerald-300'>{props.category}</small>
                        <small>{props.language}</small>
                        <small className='my-auto'><BsDot className='text-lg font-bold' /></small>
                        <small>{props.dateCreated}</small>
                    </div>
                </div>
                <div className='w-full'>
                    <div className=' grid grid-cols-12'>
                        <div className='grid-rows-2 col-start-1 col-end-9'>
                            <h2 className="text-lg font-semibold">{props.title}
                                {/* <span className=""><BsPlusSquare /></span> */}
                            </h2>
                            <small className='active:text-white hover:text-white'>{props.url}</small>
                        </div>
                        <div className='h-24 col-start-10 col-end-13 relative'>
                            <img src={props.image} alt="post image" className=' h-full p-1 rounded-xl' />
                            <BsBoxArrowUpRight className="absolute top-1 right-1 bg-gray-400 text-xl hover:bg-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="w-full text-zinc-500 text-lg font-semibold ">
                    <div className="w-full  my-2 flex flex-wrap gap-4 justify-start ">
                        <span className='flex gap-2 my-auto'><BsChatLeft className='my-auto h-auto w-3 ' /> <small>{props.comments}</small></span>
                        <span className='my-auto font-bold'>< BsShareFill className='h-auto w-3 font-bold' /></span>
                        <span className='flex '><BsArrowUpShort className='my-auto text-xl ' /> <small>{props.likes}</small></span>
                        <span className='flex '><BsArrowDownShort className='my-auto text-xl' /> <small>{props.dislikes}</small></span>
                        <span className='my-auto'><BsStar className='h-auto w-3 ' /></span>
                        <span className='my-auto'><IoCopyOutline className='h-auto w-3 ' /></span>
                        <span className="flex gap-1 hover:bg-slate-700 my-auto h-auto w-8">
                            <BsThreeDotsVertical />
                            <BsFillCaretDownFill className='p-1' />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}