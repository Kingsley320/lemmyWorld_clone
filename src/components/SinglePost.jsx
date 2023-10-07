import { useEffect, useState } from "react"
import Comment from "./Comment"
import { useParams } from "react-router-dom"
import axios from "axios";
import samplePost from '../assets/sample_post_img.webp'
import defaultLogo from '../assets/defaultLogo.png'
import { BsCode, BsExclamationTriangle, BsHSquare, BsListUl, BsQuote, BsSubscript, BsSuperscript, BsTypeStrikethrough, BsTypeBold, BsTypeItalic, BsLink45Deg, BsEmojiSmile, BsImage } from "react-icons/bs";
import { BsDot, BsArrowDownShort, BsArrowUpShort, BsBoxArrowUpRight, BsChatLeft, BsFillCaretDownFill, BsPlusSquare, BsShareFill, BsStar, BsThreeDotsVertical, } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import Navigation from "./Navigation";
import Footer from "./Footer";



export default function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const [comment, setComment] = useState('')
    const [commentsec, setCommentSec] = useState('')
    const [loading, setLoading] = useState(true)
    let [likes, setLikes] = useState(0)
    let [commented, setCommented] = useState(false)
    let [err, setErr] = useState(false)

    const loadSinglePost = async () => {
        try {
            const resp = await axios.get(`http://localhost:5001/api/v1/feed/:${id}`)
            if (resp.data) {
                setPost(resp.data)
                console.log(resp.data);
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const loadComments = async () => {
    //     try {
    //         const comments = await axios.get(`http://localhost:5001/api/v1/feed/:${id}/comment`)
    //         if (comments.data){
    //             setCommentSec(comments.data)
    //             console.log(comments.data)
    //         }   
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleLike = (e) => {
        console.log(e.target)
        likes < 1 ? setLikes(likes++) : setLikes(0)
        console.log(likes)
    }

    const handleComment = async () => {
        if (comment === '') {
            setErr(true);
            return
        }
        const aComment = {
            user_id: JSON.parse(sessionStorage.getItem('lemmyIsLogged'))._id,
            body: comment
        }
        try {
            console.log(aComment)
            let resp = await axios.post(`http://localhost:5001/api/v1/feed/:${id}/comment`, aComment)
            // if (resp) {
                console.log(resp)
                setCommented(true)
                setTimeout(() => {
                    setCommented(false)
                    setComment("")
                    loadSinglePost()
                }, 3000)
            // }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadSinglePost()
        // loadComments()
    }, []);

    return (
        <div>
            <Navigation />
            {/* Post */
                !loading && post ? (
                    <div className="mx-2 ">
                        <div className='h-auto my-2 pb-4 border-b-[0.3px] border-neutral-700'>
                            <div className='w-full mb-1 '>
                                <div className='w-full flex gap-1'>
                                    <img src={defaultLogo} alt="userlogo" className='w-5 h-5' />
                                    <small className='text-sky-500'>{post.user_id.username || "@Kingsley"}</small>
                                    <small> to </small>
                                    <img src={defaultLogo} alt="category logo" className='w-5 h-5' />
                                    <small className='text-emerald-300'>{post.community || "Technology"}</small>
                                    <small className="capitalize my-auto bg-neutral-700 rounded-md px-1 ">{post.language}</small>
                                    <small className="capitalize flex "><BsDot className='text-lg font-bold' />{Math.ceil((Date.now() - (new Date(post.created_at))) / (1000 * 60 * 60))} {"hour(s) ago"}</small>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className=' grid grid-cols-12'>
                                    <div className='grid-rows-2 col-start-1 col-end-9'>
                                        <h2 className="text-lg font-semibold capitalize">{post.title}
                                            {/* <span className=""><BsPlusSquare /></span> */}
                                        </h2>
                                        <small className='active:text-white hover:text-white'>{post.url}</small>
                                    </div>
                                    <div className={`h-24 col-start-10 col-end-13 relative `}>
                                        <img src={post.image || samplePost} alt="post image" className=' h-full p-1 rounded-xl' />
                                        <BsBoxArrowUpRight className="absolute top-1 right-1 bg-gray-400 text-xl hover:bg-gray-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-zinc-500 text-lg font-semibold ">
                                <div className="w-full pl-2 my-2 flex flex-wrap gap-4 justify-start ">
                                    <span className='flex gap-2 my-auto'><BsChatLeft className='my-auto h-auto w-3 text-neutral-500' /> <small>{post.comment_id.length}</small></span>
                                    <span className='my-auto font-bold'>< BsShareFill className='h-auto w-3 font-bold' /></span>
                                    <span className='flex ' onClick={() => {
                                        likes < 1 ? setLikes(true) : setLikes(!likes); console.log(likes)
                                    }}><BsArrowUpShort className='my-auto text-xl ' /> <small>{post.likes || likes}</small></span>
                                    <span className='flex '><BsArrowDownShort className='my-auto text-xl' /> <small>{'0'}</small></span>
                                    <span className='my-auto'><BsStar className='h-auto w-3 ' /></span>
                                    <span className='my-auto'><IoCopyOutline className='h-auto w-3 ' /></span>
                                    <span className="flex gap-1 hover:bg-slate-700 my-auto h-auto w-8">
                                        <BsThreeDotsVertical />
                                        <BsFillCaretDownFill className='p-1' />
                                    </span>
                                </div>
                            </div>

                            <div className="text-neutral-400 bg-neutral-700 mb-2 p-4 border border-neutral-500 rounded-lg">
                                <small className="">
                                    {/* Arnold Schwarzenegger has some exercise advice for former President Trump: Do some laps around a jail cell. “If he would ask me what should you do for fitness, I would just say, ‘Run around your cell to loose weight */}
                                    {post.body}
                                </small>
                            </div>

                            <div className=" h-28 rounded-lg text-neutral-400 bg-neutral-700">
                                <div className="h-14 w-full flex justify-evenly gap-3 p-3 border border-neutral-600">
                                    <BsTypeBold /><BsTypeItalic /> <BsLink45Deg /> <BsEmojiSmile /><BsImage /> <BsHSquare /> <BsTypeStrikethrough /> <BsQuote /> <BsListUl /> <BsCode /> <BsSubscript /> <BsSuperscript /> <BsExclamationTriangle />
                                </div>
                                <textarea className="top-0 h-14 w-full p-3  bg-transparent border border-neutral-600 outline-none outline-offset-0 duration-300 focus:ring-4 focus:ring-green-500/30 ring-inset overflow-hidden placeholder:text-xs placeholder:top-0" placeholder="Type here to comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                            </div>
                            <div className="flex justify-between">
                                <select className="w-40 mt-2 h-9 px-1 rounded-md   duration-300 rounded-b-md  outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30">
                                    <option value="">Select Language</option>
                                    <option value="english">English</option>
                                    <option value="french">French</option>
                                </select>
                                <div className="flex gap-2 items-end ">
                                    <span className="h-9 bg-neutral-500 px-auto px-2 py-1.5 text-black rounded-md hover:bg-neutral-400/90 duration-300">Preview</span>
                                    <button type="submit" className={`h-9 bg-neutral-500 px-2 py-1 text-black rounded-md hover:bg-neutral-400/90 duration-300 ${comment === '' ? 'pointer-events-none' : ''}`} onClick={handleComment}>Comment</button>
                                </div>
                            </div>

                        </div>
                        <div>
                            {
                                post ? (
                                    post.comment_id.map((comment) => (
                                        <Comment key={comment._id}  body={comment.body} created={`${Math.ceil((Date.now() - (new Date(comment.created_at))) / (3600000)) } hour(s) ago` } user={comment.user_id.username}/>

                                    ))
                                ) 
                                :
                                    (
                                        <Comment user={JSON.parse(sessionStorage.getItem('lemmyIsLogged')).username} body={"Be the first to comment"} />
                                )
                            }
                        </div>
                    </div>
                ) :
                    (
                        <div className="min-h-[70vh] w-full h-40 flex justify-middle align-middle">
                            <h2 className="my-auto mx-auto text-3xl font-bold">Loading...</h2>
                        </div>
                    )
            }
            {
                commented && <div className=" fixed bottom-4 left-5  duration-300 ">
                    <p className="w-full pt-3 text-center my-auto text-white font-semi-bold bg-green-500 px-4 h-12 drop-shadow-[0_10px_10px_rgba(29,78,216,0.5)] shadow-blue-400 ">Comment Sent.</p>
                </div>
            }
            <Footer />
        </div>
    )
}