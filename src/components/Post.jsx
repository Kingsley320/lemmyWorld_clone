import defaultLogo from '../assets/defaultLogo.png'
import { BsArrowDownShort, BsArrowUpShort, BsBoxArrowUpRight, BsChatLeft, BsFillCaretDownFill, BsPlusSquare, BsShareFill, BsStar, BsThreeDotsVertical, } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";

export default function Post(props) {
    return (
        <>
            <div className='w-full flex justify-evenly mb-1'>
                <img src={props.defaultUser} alt="userlogo" className='w-5 h-5' />
                <small className='text-sky-500'>{props.username}</small>
                <small> to </small>
                <img src={props.catLogo} alt="category logo"  className='w-5 h-5' />
                <small></small>
                <small>{props.language}</small>
                <small>{props.dateCreated}</small>
            </div>
            <div className='grid grid-cols-2'>
                <div className='grid-rows-2'>
                    <h2 className="">{props.title} 
                    {/* <span className=""><BsPlusSquare /></span> */}
                    </h2>
                    <small>{props.url}</small>
                </div>
                <div className='relative'>
                    <BsBoxArrowUpRight className="absolute top-0 right-0 bg-gray-400 text-xl"/>
                    <img src={props.image} alt="post image" className='h-24 p-1'/>
                </div>
            </div>
            <div className="w-full flex col-start-1 col-end-8">
                <span className='flex gap-2'><BsChatLeft /> <small>{props.comments}</small></span>
                <span>< BsShareFill /></span>
                <span><BsArrowUpShort /> <small>{props.likes}</small></span>
                <span><BsArrowDownShort /> <small>{props.dislikes}</small></span>
                <span><BsStar /></span>
                <span><IoCopyOutline /></span>
                <span className="flex gap-1">
                    <BsThreeDotsVertical />
                    <BsFillCaretDownFill />
                </span>
            </div>
        </>
    )
}