import lemmyrat from '../../assets/lemmyRat.webp'
export default function Sidebar(){
    return(
        <div className="lg:w-48 lg:h-full lg:fixed lg:top-0 lg:left-0 border-r">
            <ul className='lg:px-4'>
                <li className='lg:w-full lg:mb-4 lg:text-center'><img src={lemmyrat} alt="lemmy rat" className='lg:h-16 lg:mx-auto '/><small className="w-full  font-semibold">Admin</small></li>
                <li className='lg:text-lg lg:font-semibold hover:text-sky-500 border-b pb-1'>Dashboard</li>
                <li className='lg:text-lg lg:font-semibold hover:text-green-500/75'>Logout</li>
            </ul>
        </div>
    )
}