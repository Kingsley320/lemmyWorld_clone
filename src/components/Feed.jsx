import Post from "./Post";
import defaultLogo from '../assets/defaultLogo.png'
import samplePost from '../assets/sample_post_img.webp'


export default function Feed(){
    return(
        <div className="min-h-screen py-2">
            <Post defaultUser={defaultLogo} username={"@kingsley"} catLogo={defaultLogo} category={"Technology"} language={"English"} dateCreated={"3 days ago"} title={"Inside ShadowDragon, The Tool That Lets ICE Monitor Pregnancy Tracking Sites and Fortnite Players"} url={"www.404media.co"} image={samplePost} comments={"230"} likes={"167"} dislikes={"19"}/>
        </div>
    )
}