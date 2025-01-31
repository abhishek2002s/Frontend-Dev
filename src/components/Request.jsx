import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { acceptRequest, rejectRequest } from '../utils/requestSlice'

const Request = () => {
    const dispatch = useDispatch();
    const requests  = useSelector(store => store.request);

    const reviewRequest = async(status,_id) => {
        try{
          const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {},{withCredentials:true});
          dispatch(rejectRequest(_id));
        }
        catch(err){
            console.error(err.message);
        }
    }
    
    const fetchRequest = async() => {
        try{
           const res = await axios.get(BASE_URL + "/user/requests/recieved", {withCredentials:true});
        //    console.log(res.data.data);
           dispatch(acceptRequest(res.data.data));
        }
        catch(err){
           console.error(err.message);
        }
    }


    useEffect(() => {
        fetchRequest();
    },[])

    if(!requests) return;

    if(requests.length === 0){
        return <div className='text-white flex justify-center my-20 text-4xl font-bold'>There is no connection Request..</div>
    }
  return (
    <div className='h-screen'>
    <div className='font-bold text-center text-4xl mt-5'>
    <h1 className='italic'>Connections Request</h1>
    </div>
    <div className='w-full flex flex-col justify-center items-center mt-10'>
        {
            requests.map((requests) => {
                const {_id,firstName,lastName,gender,age,about,photoUrl} = requests.fromuserId;
                return (
                    <div key={_id} className=" flex cursor-pointer  border rounded-lg w-[650px] items-center justify-centershadow-xl bg-base-300 gap-3 mb-4">
                    <figure>
                      <img
                        src={photoUrl}
                        alt="Movie"  className='ml-3 h-24 w-24 rounded-lg'/>
                    </figure>
                    <div className="card-body">
                      <h2 className="capitalize font-bold text-xl text-white">{firstName + " " + lastName}</h2>
                     {age && gender && <p>{age + ", " + gender}</p>}
                     <p>{about}</p>
                    </div>
                    <div className='flex gap-2 mr-2'>
                    <button className="p-2 px-5 text-white font-bold rounded-lg bg-secondary" onClick={(() => reviewRequest("accepted",requests._id))}>Accept</button>
                    <button className="p-2 px-5 text-white font-bold rounded-lg bg-primary" onClick={(() => reviewRequest("rejected",requests._id))}>Reject</button>
                        </div>
                  </div>
            )
})
        }
    </div>
</div>
  )
}

export default Request