import React, { useState } from 'react'
import CardUser from './CardUser';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const ProfileCard = ({user}) => {
    const [firstName , setFirstName] = useState(user.firstName);
    const [lastName , setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender , setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoUrl , setPhotoUrl] = useState(user.photoUrl);
    const [err,setError] = useState("");
    const [toast,setToast] = useState(false);
    const dispatch = useDispatch();
    const saveProfile = async() => {
        try{
            const res =  await axios.patch(BASE_URL + "/profile/edit", {firstName,lastName,age,gender,about,photoUrl},{withCredentials:true});
            dispatch(addUser(res?.data?.data));
            setToast(true);
            // console.log(res);
            const i = setTimeout(() => {
                  setToast(false);
            },2000)
        }
        catch(err){
           setError(err.message);
        }
    };

  return (
    <div className='h-[800px]'>
    <div className='flex  justify-center gap-6 items-center'>
    <div class="relative flex flex-col   bg-base-300 shadow-sm border border-slate-200 w-96 rounded-lg my-6">
  <div class="relative m-2  items-center flex justify-center p-1 text-white  rounded-md bg-slate-800">
    <h3 class="text-xl">
      Update Profile
    </h3>
  </div>
  <div class="flex flex-col gap-4 p-6">
    <div class="w-full max-w-sm min-w-[200px]">
        <label class="block mb-2 text-sm font-semibold text-slate-600">
          First Name
        </label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}  class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="first Name" />
    </div>
    
    <div class="w-full max-w-sm min-w-[200px]">
      <label class="block mb-2 font-semibold text-slate-600">
        Last Name
      </label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="last Name" />
    </div>
    <div class="w-full max-w-sm min-w-[200px]">
      <label class="block mb-2 font-semibold text-slate-600">
        Age
      </label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Age" />
    </div>
    <div class="w-full max-w-sm min-w-[200px]">
      <label class="block mb-2 font-semibold text-slate-600">
        Gender
      </label>
      <label className="form-control w-full max-w-xs">
  <select className="select w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" value={gender} onChange={(e) => setGender(e.target.value)}>
    <option>others</option>
    <option>Female</option>
    <option>Male</option>
  </select>
</label>
    </div>
    <div class="w-full max-w-sm min-w-[200px]">
      <label class="block mb-2 font-semibold text-slate-600">
        About
      </label>
      <textarea  value={about} onChange={(e) => setAbout(e.target.value)} className="textarea textarea-bordered w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="about.."></textarea>
    </div>
    <div class="w-full max-w-sm min-w-[200px]">
      <label class="block mb-2 font-semibold text-slate-600">
        PhotoUrl
      </label>
      <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="PhotoUrl" />
    </div>

  </div>
  <div class="p-6 pt-0">
    <button onClick={saveProfile} class="w-full font-semibold rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm  text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Saved Profile
    </button>
  </div>
</div>

<CardUser user={{firstName,lastName,age,gender,photoUrl,about}} />
</div>
{toast && (<div className="toast mb-28">
  <div className="alert alert-info">
    <span className='font-bold'>Profile Updated Successfully.</span>
  </div>
</div>
)}
</div>
  )
}

export default ProfileCard