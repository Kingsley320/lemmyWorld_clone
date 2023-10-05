
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import SinglePost from '../components/SinglePost';
import Post from '../components/Post';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

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

    useEffect(() => {
        handlePosts()
    }, [])

    return (
        <div className="min-h-screen">
            <Navigation />
            {
                posts.length > 0 ? (
                    posts.map(post => (<Link to={`/feed/${post._id}`} key={post._id}><Post title={post.title} url={post.url} language={post.language} image={post.image} community={post.community} dateCreated={Math.ceil((Date.now() - (new Date(post.created_at)) ) / (1000 * 60 * 60)) + " hours ago"} /></Link>))
                ) :
                    (
                        <div className="min-h-[50vh] w-full h-40 flex justify-middle align-middle">
                            <h2 className="my-auto mx-auto text-3xl font-bold">Loading...</h2>
                        </div>
                    )
            }

            <Footer />
        </div>
    )
}