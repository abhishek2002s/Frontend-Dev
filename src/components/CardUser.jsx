import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeUserFeed } from '../utils/feedSlice';

const CardUser = ({user}) => {
const {_id,firstName,lastName,gender,age,photoUrl,about} = user;
const dispatch = useDispatch();

const handleRequest = async(status,userId) => {
  try{
     const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {},{withCredentials:true});
     dispatch(removeUserFeed(userId));
  }
  catch(err){
  console.error(err.message);
  }
}

  return (
    <div className='h-[750px]'>
        <div className="cursor-pointer group relative  flex flex-col my-3 bg-base-300 shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
  <div className="relative h-65 m-2.5 overflow-hidden object-fill text-white rounded-md">
    <img className="transition-transform duration-500 w-full ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
         src = {photoUrl}  alt='userPhoto' />
  </div>
  <div className="p-4">
     <h6 className="mb-2 text-white text-xl font-semibold">
      {firstName + " " + lastName}
    </h6>
    { age && gender &&<p className="text-slate-100 leading-normal font-light">
     {gender + ", " + age} 
    </p>
}
    <p className="text-slate-100 leading-normal font-light">
     {about}
    </p>
  </div>
  <div className="px-4 pb-4 pt-0 mt-2 flex gap-2 ">
    <button className="rounded-md bg-primary py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
    onClick={() => handleRequest("ignored",_id)}
    >
      Ignored
    </button>
    <button className="rounded-md bg-secondary py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
    onClick={() => handleRequest("interested",_id)}
    >
      Interested
    </button>
  </div>
</div> 

</div>
  )
}

export default CardUser