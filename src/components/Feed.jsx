import Post from "./Post";
import defaultLogo from '../assets/defaultLogo.png'
import samplePost from '../assets/sample_post_img.webp'


export default function Feed(props){

    return(
        <div className="py-2">
            <Post defaultUser={defaultLogo} username={"@kingsley"} catLogo={defaultLogo} category={props.community} language={props.language} dateCreated={"3 days ago"} title={props.title} url={props.url} image={props.image } comments={"230"} likes={"167"} dislikes={"19"}/>
        </div>
    )
}