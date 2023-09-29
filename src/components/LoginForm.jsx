import axios from "axios";
import { createRef, useState } from "react"
import { BsExclamationCircle, BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate()
    const [loggedIn, setIsLoggedIn] = useState(false)
    const [err, setErr] = useState(false)
    // const [isvalid, setIsvalid] = useState(true)
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasAuth, setAuth] = useState(false)
    const invalid = 'border-red-500 outline-none outline-offset-0 required:border-red-500 focus:outline-4 focus:outline-red-500/30 focus:border-red-500';
    const valid = 'border-green-500 outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30 focus:border-green-500';

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            // username === '' || username.length < 5 ||
            email === '' || email.length < 5 ||
            password === '' || password.length < 8) {
            setErr(true);
            return;
        }
        let user = {
            // username: username,
            email: email,
            password: password
        };
        try {
            let resp = await axios.get('http://localhost:5001/users')
            if (resp){
                console.log(resp)
            setIsLoggedIn(true)
            setTimeout(() => {
                setIsLoggedIn(false)
                // sessionStorage.setItem('lemmyIsLogged', JSON.stringify(user))
                // navigate('/')
            }, 3000)
            }
        }
        catch (e) {
            console.log(e)
        }

    }
    return (
        <div className="min-h-[50vh] md:min-h-[95vh]">
            <div className="lg:max-w-xl mx-auto px-3 flex flex-wrap justify-start">
                <h2 className=" text-xl font-semibold my-2">Login</h2>
                <form className="w-full my-5 flex flex-wrap gap-3" action="POST">
                    {/* <div className="w-full md:grid md:grid-cols-12 ">
                    <p className="py-2 md:w-full md:col-span-2">Username</p>
                    <div className="relative flex w-full md:col-start-4 md:col-end-13">
                        <input
                            type="text"
                            className={`w-full h-9 px-3 duration-300 rounded-md border 
                            ${(err === true && username === '' || username.length < 5) ? invalid : valid}  
                            `}
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                        {(err === true && username === '' || username.length < 5) ?
                            <BsExclamationCircle className="absolute my-auto text-red-500  right-4 top-[30%]" /> : <BsCheckLg className="absolute my-auto text-green-500  right-4 top-[30%]" />}
                    </div>
                </div> */}
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:w-full md:col-span-2">Email</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                className={`w-full h-9 px-3 duration-300 rounded-md border 
                            ${(err === true && email === '' || email.length < 5) ? invalid : valid}  
                            `}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            {(err === true && email === '' || email.length < 5) ?
                                <BsExclamationCircle className="absolute my-auto text-red-500  right-4 top-[30%]" /> : <BsCheckLg className="absolute my-auto text-green-500  right-4 top-[30%]" />}
                        </div>

                    </div>
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:w-full md:col-span-2">Password</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="password"
                                placeholder=" "
                                className={`w-full h-9 px-3 pr-10 duration-300 rounded-md border 
                            ${(err === true && password === '' || password.length < 8) ? invalid : valid}  
                            `}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            {(err === true && password === '' || password.length < 8) ?
                                <BsExclamationCircle className="absolute my-auto text-red-500  right-4 top-[30%] md:top-[25%]" /> : <BsCheckLg className="absolute my-auto text-green-500  right-4 top-[30%]" />}
                        </div>
                        <p className="hover:underline md:col-start-4 md:col-end-6 lg:col-end-7">forgot password</p>
                    </div>
                    <button className={`bg-blue-200/80 px-2 py-1 text-black rounded-md hover:bg-blue-200/90 duration-300 ${err === true ? 'pointer-events-none' : null}`} onClick={handleSubmit}>Login</button>
                </form>

                {
                    loggedIn && <div className="absolute  bottom-4 left-5  duration-300 ">
                        <p className="w-full pt-3 text-center my-auto text-white font-semi-bold bg-green-500 px-4 h-12 drop-shadow-[0_10px_10px_rgba(29,78,216,0.5)] shadow-blue-400 ">Logged In.</p>
                    </div>
                }
            </div>
        </div>
    )
}