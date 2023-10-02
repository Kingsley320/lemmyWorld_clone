
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function () {
    const [posts, setPosts] = useState([]);

    const handleFeed = async () => {
        try {
            const resp = await axios.get('http://localhost:5001/feed')
            setPosts(resp.data)
            console.log(resp.data)
            // console.log(posts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFeed()
    }, [])

    return (
        <div className="min-h-screen">
            <Navigation />
            {
                posts.length > 0 ? (
                    posts.map(post => (<Link to={`${post._id}`}><Feed key={post._id} title={post.title} url={post.url} language={post.language} image={post.image} community={post.community} /></Link>))
                ) :
                    (
                        <div className="w-full h-40 flex justify-middle align-middle">
                            <h2 className="my-auto mx-auto text-3xl font-bold">Loading...</h2>
                        </div>
                    )
            }

            <Footer />
        </div>
    )
}