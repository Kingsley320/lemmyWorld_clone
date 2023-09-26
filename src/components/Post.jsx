import defaultUser from '../assets/defaultUser.png'

export default function Post() {
    return (
        <>
            <div className='flex'>
                <img src={props.defaultUser} alt="userlogo" />
                <small>{props.username} to </small>
                <img src={props.catLogo} alt="category logo" />
                <small>{props.language}</small>
                <p>{props.dateCreated}</p>
            </div>
            <div className='grid-cols-2'>
                <div className='grid-rows-2'>
                    <h2>{props.title}</h2>
                    <small>{props.url}</small>
                </div>
                <div>
                    <img src={props.image} alt="post image" />
                </div>
            </div>
            <div></div>
        </>
    )
}