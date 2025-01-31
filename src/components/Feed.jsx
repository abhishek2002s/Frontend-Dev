import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import CardUser from './CardUser'

const Feed = () => {
 
  const dispatch = useDispatch();
  const feed = useSelector(store => store.feed);
  // console.log(feed);

  const getFeed = async() => {
    if(feed) return;
    try{
      const res = await axios.get(BASE_URL + "/feed", {withCredentials:true});
      dispatch(addFeed(res.data));
      console.log(res.data);
    }
    catch(err){
      console.error(err.message);
    }
  }

useEffect(() => {
 getFeed();
},[]);

if(!feed) return;

if(feed.length <= 0) return <h1 className='flex justify-center text-4xl capitalize font-bold text-white my-10'>No new user founds!..</h1>

  return (
   feed && (
    <div className=' h-[100vh]'>
    <div className='flex justify-center my-10'>
    <CardUser user ={feed[0]}/>
    </div>
    </div>
   )
  )
}

export default Feed;