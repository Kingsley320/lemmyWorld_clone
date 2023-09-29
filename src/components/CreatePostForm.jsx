import { useState } from "react"
import { IoImageOutline } from "react-icons/io5";

export default function CreatePostForm() {
    // const [err, setErr] = useState(false)
    const [url, seturl] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [language, setLanguage] = useState('')
    const [community, setCommunity] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if (url === '' || image === '' || title === '' || body === '' || language === '' || community === '') {
        //     // setErr(true);
        //     return;
        // }
        let post = {
            url: url,
            image: image,
            title: title,
            body: body,
            language: language,
            community: community

        };
        console.log(post);
    }

    return (
        <div className="min-h-[55vh] md:min-h-[95vh]">
            <div className="max-w-xl mx-auto px-3 flex flex-wrap justify-start">
                <h2 className=" text-xl font-semibold my-2">Create Post</h2>
                <form className="w-full my-5 flex flex-wrap gap-3" action="POST">
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:w-full md:col-span-2">URL</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="text"
                                className={`w-full h-9 px-3 duration-300 rounded-md outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30 `}
                                value={url}
                                onChange={(e) => { seturl(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="flex gap-1 py-2 md:w-full md:col-span-2">Image <IoImageOutline className="my-auto" /></p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="file"
                                className={`w-full h-8  duration-300 rounded-md outline-none outline-offset-0 border border-transparent bg-neutral-700 focus:outline-4 focus:outline-green-500/30 `}
                                value={image}
                                onChange={(e) => { setImage(e.target.value) }}
                            />
                        </div>

                    </div>
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:w-full md:col-span-2">Title</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="text"
                                placeholder=" "
                                className={`w-full h-9 px-3 pr-10 duration-300 rounded-md  outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30`}
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />

                        </div>
                    </div>

                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:w-full md:col-span-2">Body</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13 mb-3">
                            <textarea
                                type="text"
                                placeholder=" "
                                className={`w-full h-16 px-3 duration-300 rounded-b-md  outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30`}
                                value={body}
                                onChange={(e) => { setBody(e.target.value) }}
                            />

                        </div>

                        <div className="w-full text-right">
                            <span className="mr-0 w-16  bg-neutral-500 px-2 py-1 text-black rounded-md hover:bg-neutral-400/90 duration-300">Preview</span>
                        </div>
                    </div>

                    <div className="w-full mb-3">
                        <label>Language</label>
                        <div>
                            <select className="w-48 mt-2 h-9 px-1 rounded-md   duration-300 rounded-b-md  outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30" onChange={(e)=>{setLanguage(e.target.value)}} value={language}>
                                <option value="">Select Language</option>
                                <option value="english">English</option>
                                <option value="french">French</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <label>Community</label>
                        <div>
                            <select className="w-full mt-2 h-9 px-1 rounded-md duration-300 rounded-b-md  outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30" value={community} onChange={(e) => {setCommunity(e.target.value)}} >
                                <option value="">Select a Community</option>
                                <option value="technology">Technology</option>
                                <option value="nature">Nature</option>
                                <option value="skin-care">Skin Care</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full flex gap-2 my-2">
                        <input type="checkbox" />
                        <p className=" ">NSFW</p>
                    </div>

                    <div className="">
                        <button className={`bg-neutral-500 px-2 py-1 text-black rounded-md hover:bg-neutral-400/90 duration-300 ${url === '' || image === '' || title === '' || body === '' || language === '' || community === '' ? 'pointer-events-none' : ''}`} onClick={handleSubmit}>Create</button>
                    </div>
                </form>
            </div>
        </div>

    )
}