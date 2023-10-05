import axios from "axios";
import { createRef, useState } from "react"
import { BsExclamationCircle, BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const [err, setErr] = useState(false)
    const [isverified, setVerified] = useState(true)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifypassword, setVerifypassword] = useState('')
    const [loggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const invalid = 'border-red-500 outline-none outline-offset-0 required:border-red-500 focus:outline-4 focus:outline-red-500/30 focus:border-red-500';
    const valid = 'border-green-500 outline-none outline-offset-0 requigreen:border-green-500 focus:outline-4 focus:outline-green-500/30 focus:border-green-500';

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (username === '' || username.length < 5 || email === '' || email.length < 5 || password === '' || password.length < 8 || verifypassword === '' || verifypassword.length < 8) {
            setErr(true);
            return;
        }
        let user = {
            username: username,
            email: email,
            password: password
        };

        try {
            let resp = await axios.post('http://localhost:5001/api/v1/users', user)
            if (resp) {
                console.log(resp.data)
                setIsLoggedIn(true)
                setTimeout(() => {
                    navigate('/login')

                }, 3000);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-[55vh] md:min-h-[95vh]">
            <div className="max-w-xl mx-auto px-3 flex flex-wrap justify-start">
                <h2 className=" text-xl font-semibold my-2">Sign Up</h2>
                <form className="w-full my-5 flex flex-wrap gap-3" action="POST">
                    <div className="w-full md:grid md:grid-cols-12 ">
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
                    </div>
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:w-full md:col-span-2">Email</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                placeholder="Required"
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
                    </div>
                    <div className="w-full md:grid md:grid-cols-12 ">
                        <p className="py-2 md:col-span-2">Verify Password</p>
                        <div className="relative flex w-full md:col-start-4 md:col-end-13">
                            <input
                                type="password"
                                placeholder=" "
                                className={`w-full h-9 px-3 pr-10 duration-300 rounded-md border 
                            ${(err === true && verifypassword === '' || verifypassword.length < 8) ? invalid : valid}  
                            `}
                                value={verifypassword}
                                onChange={(e) => { setVerifypassword(e.target.value) }}
                                onBlur={(e) => { verifypassword !== password ? setVerified(false) : setVerified(true) }}
                            />
                            {(err === true && verifypassword === '' || verifypassword.length < 8) ?
                                <BsExclamationCircle className="absolute my-auto text-red-500  right-4 top-[25%] md:top-[15%]" /> : <BsCheckLg className="absolute my-auto text-green-500  right-4 top-[30%] md:top-[15%]" />}
                        </div>
                        <span className={`text-red-500 ${isverified ? 'invisible' : ''}`}>Must match first password</span>
                    </div>
                    <button className="bg-blue-200/80 px-2 py-1 text-black rounded-md hover:bg-blue-200/90 duration-300" onClick={handleSubmit}>Sign Up</button>
                </form>

                {
                    loggedIn && <div className="absolute  bottom-4 left-5  duration-300 ">
                        <p className="w-full pt-3 text-center my-auto text-white font-semi-bold bg-green-500 px-4 h-12 drop-shadow-[0_10px_10px_rgba(29,78,216,0.5)] shadow-blue-400 ">Successful.</p>
                    </div>
                }
            </div>
        </div>

    )
}