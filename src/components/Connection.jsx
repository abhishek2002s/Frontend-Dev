import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connection = () => {
    const dispatch = useDispatch();
    const connection = useSelector(store => store.connection);

    const fetchUser  = async() => {
        try{
             const res = await axios.get(BASE_URL + "/user/connection", {withCredentials:true});
            //  console.log(res.data.data);
             dispatch(addConnections(res.data.data));
        }
        catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
     fetchUser();
    },[])

    if(!connection) return;

    if(connection.length === 0){
        return <div className='text-white flex justify-center my-20 text-4xl font-bold'>There is no connection..</div>
    }

  return (
    <div className='h-[2000px]'>
        <div className='font-bold text-center text-4xl mt-5'>
        <h1 className='italic'>Connections</h1>
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-10'>
            {
                connection.map((connection) => {
                    const {firstName,lastName,gender,age,about,photoUrl} = connection;
                    return (
                        <div className=" flex cursor-pointer  border rounded-lg w-[600px] items-center justify-centershadow-xl bg-base-300 gap-3 mb-4">
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
                      </div>
                )
})
            }
        </div>
    </div>
  )
}

export default Connection;