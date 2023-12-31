import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminPost from "./AdminPost";

export default function DashInfo() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const handlePosts = async () => {
        try {
            const resp = await axios.get('http://localhost:5001/api/v1/feed')
            setPosts(resp.data)
            console.log(resp.data)
            // console.log(posts)
        } catch (error) {
            console.log(error)
        }
    }

    const loadComments = async () => {
        try {
            const resp = await axios.get('http://localhost:5001/api/v1/comment')
            setComments(resp.data.length)
            console.log(resp.data.length)
            // console.log(posts)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (e) => {
        const confirmDelete = confirm("You are about to delete a post")
        if(confirmDelete){
            // console.log(e.target.id)
            try{
                await axios.delete(`http://localhost:5001/api/v1/feed/${e.target.id}`)
                .then((response) => {
                    console.log(response)
                })

            }catch(error){
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        handlePosts()
        loadComments()
    }, [])

    return (
        <div className="lg:ml-48 lg:h-[100vh] lg:px-12 lg:p-5 lg:rounded-lg">
            <div className="lg:w-full lg:grid lg:place-content-end lg:mb-5">
                <div>
                    <div className="lg:w-10 lg:h-10 lg:rounded-full lg:bg-neutral-600"></div>
                    <small>Profile</small>
                </div>
            </div>
            <div className="lg:w-full lg:flex lg:justify-between mb-5">
                <div className="border border-green-600/75 lg:p-12 lg:rounded-lg lg:font-semibold">
                    Total Posts: {posts.length || '0'}
                </div>
                <div className="border border-pink-600/75 lg:p-12 lg:rounded-lg lg:font-semibold">
                    Total Likes: {"0"}
                </div>
                <div className="border border-sky-600/75 lg:p-12 lg:rounded-lg lg:font-semibold">
                    Total Comments: {comments || "0"}
                </div>
            </div>
            <div className="lg:w-full lg:h-[60vh] lg:flex lg:justify-between">
                <div className="border border-sky-600/75 lg:rounded-lg lg:h-auto lg:p-3 lg:w-[48%] lg:font-semibold  lg:underline-offset-2">
                    <h3 className="lg:mb-2 lg:underline">Recent Posts</h3>
                    <div className="lg:w-full lg:h-[90%] py-1 overflow-scroll">
                        {
                            posts ? (
                                posts && posts.map(post => (<AdminPost key={post._id} _id={post._id} postLink={post._id} username={post.user_id.username} title={post.title} url={post.url} language={post.language} image={post.image} community={post.community} dateCreated={Math.ceil((Date.now() - (new Date(post.created_at))) / (1000 * 60 * 60)) + " hours ago"} likes={"0"} dislikes={"0"} comments={post.comment_id.length} onClick=
                                {(e)=> {handleDelete(e) }}/>))
                            ) :
                                (
                                    <div className="min-h-[50vh] w-full h-40 flex justify-middle align-middle">
                                        <h2 className="my-auto mx-auto text-3xl font-bold animate-pulse">Nothing yet...</h2>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="border border-green-600/75 lg:rounded-lg lg:h-auto lg:p-3 lg:w-[48%] lg:font-semibold lg:underline lg:underline-offset-2">
                    <h3 className="lg:mb-2">Users</h3>
                    <div className="lg:w-full lg:h-[90%] py-1 overflow-scroll">

                    </div>
                </div>
            </div>
        </div>
    )
}