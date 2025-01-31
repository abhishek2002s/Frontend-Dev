import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const Login = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const [emailId, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [isLogIn, setisLogIn] = useState(true);
    const[error, setError] = useState("");

    const handleLogin = async() => {
        try{
            const res = await axios.post(BASE_URL +  "/LogIn",{
                emailId,
                password
            },
            {
                withCredentials : true
            },
        )
         dispatch(addUser(res.data));
         return navigate("/");
        }
        catch(err){
          setError(err?.response?.data || "something went wrong");
        }
    }

    const handleSingUp = async() => {
       try{
         const res = await axios.post(BASE_URL + "/signUp" , {firstName,lastName,emailId,password},{withCredentials:true});
         dispatch(addUser(res?.data?.data));
         navigate("/profile");
       }
       catch(err){
        setError(err?.response?.data || "something went wrong");
       }
    }

  return (
    <div className='h-screen'>
    <div className='flex justify-center my-20 '>
    <div className="card  w-96 shadow-xl bg-base-300 p-4">
  <div className="card-body mb-[-10px]">
    <h2 className="card-title justify-center text-2xl">{isLogIn ? "Login" : "Sign Up"} </h2>
        </div>
    <div className='flex flex-col gap-3 justify-center '>

<div>
  { !isLogIn && <>
  <label className="form-control">
  <div className="label ">
    <span className="label-text font-bold" >First Name : </span>
  </div>
  <input type="text" placeholder="Enter your first name..." className="input input-bordered" onChange={(e) => setFirstName(e.target.value)}/>
  </label>

  <label className="form-control">
  <div className="label ">
    <span className="label-text font-bold">Last Name : </span>
  </div>
  <input type="text" placeholder="Enter your last name..." className="input input-bordered w-full" onChange=  {(e) => setLastName(e.target.value)}/>
  </label>
  </>
}
  </div>

  <div className='flex gap-3 flex-col'>
<span className="label-text font-bold">Email Id : </span>
    <label className="input input-bordered flex items-center gap-2">
   <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email"  value={emailId} onChange=  {(e) => setEmail(e.target.value)}/>
</label>

<span className="label-text font-bold">Password : </span>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
</label>
</div>

<p className='text-red-600'>{error}</p>
<p className='text-white cursor-pointer pt-2 mb-2' onClick={() => setisLogIn((value) => !value)}>{isLogIn ? "New User? Sign Up here" : "Existing User ?Login Here"}</p>
<button className="btn px-6 text-lg mx-auto mb-4 bg-white text-black hover:text-white" onClick={isLogIn ? handleLogin : handleSingUp}>{isLogIn ? "Login" : "Sign Up"}</button>


  </div>
</div>
    </div>
    </div>
  )
}

export default Login