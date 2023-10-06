import axios from "axios";
import { useEffect, useState } from "react";

export default function DashInfo() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const handlePosts = async () => {
        try {
            const resp = await axios.get('http://localhost:5001/api/v1/feed')
            setPosts(resp.data.length)
            console.log(resp.data.length)
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
                    Total Posts: {posts || '0'}
                </div>
                <div className="border border-pink-600/75 lg:p-12 lg:rounded-lg lg:font-semibold">
                    Total Likes: {"53"}
                </div>
                <div className="border border-sky-600/75 lg:p-12 lg:rounded-lg lg:font-semibold">
                    Total Comments: {comments || "98"}
                </div>
            </div>
            <div className="lg:w-full lg:h-[60vh] lg:flex lg:justify-between">
                <div className="border border-sky-600/75 lg:rounded-lg lg:h-auto lg:p-3 lg:w-[48%] lg:font-semibold lg:underline lg:underline-offset-2">
                    <h3 className="lg:mb-2">Recent Posts</h3>
                    <div className="w-full border p-2">

                    </div>
                </div>
                <div className="border border-green-600/75 lg:rounded-lg lg:h-auto lg:p-3 lg:w-[48%] lg:font-semibold lg:underline lg:underline-offset-2">
                    <h3>Users</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}