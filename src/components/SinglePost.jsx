import { useEffect } from "react"
import Feed from "./Feed"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function SinglePost() {
    const { id } = useParams();

    const loadSinglePost = async () => {
        try {
            const resp = await axios.get(`http://localhost:5001/feed/:${id}`)
            console.log(resp.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadSinglePost()
    }, []);

    return (
        <div>
            
        </div>
    )
}